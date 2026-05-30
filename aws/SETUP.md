# KARURA サンプル成果物 Wiki — S3 デプロイ初期セットアップ

本書は、KARURA(AI 駆動開発フレームワーク)サンプル成果物プロジェクトの Docusaurus サイトを
AWS S3 静的ホスティングへ公開するための初期セットアップ手順です。**この作業は最初の 1 回だけ**、
AWS マネジメントコンソール(ブラウザ)から実施します。日々のデプロイは以下の 2 経路で行います。

- ローカル手動: `pnpm deploy:s3`(`scripts/deploy-s3.sh`)
- 自動: `main` への push で GitHub Actions が実行(`.github/workflows/deploy.yml`)

## 確定値

| 項目 | 値 |
|---|---|
| バケット名 | `karura-sample-life-insurance-artifacts` |
| リージョン | `ap-northeast-1`(東京) |
| 公開 URL | http://karura-sample-life-insurance-artifacts.s3-website-ap-northeast-1.amazonaws.com |
| GitHub リポジトリ | `Acceler-Digital/aidd-sample-artifacts-individual-life-insurance-new-business` |
| デプロイ対象ブランチ | `main` |

> 本リポジトリのプレースホルダ規約に従い、`{{AWS_ACCOUNT_ID}}` は実 AWS アカウント ID(12 桁)に置換してください。

---

## A. S3 バケット作成 + 静的ホスティング + 公開ポリシー

1. **バケット作成**
   - S3 → バケットを作成 → 名前 `karura-sample-life-insurance-artifacts`、リージョン `ap-northeast-1`
   - 「パブリックアクセスをすべてブロック」の **チェックを外す**(公開サイトのため)
   - **バージョニングを有効化**(改ざん・誤上書き時にロールバック可能にする)
2. **静的ウェブサイトホスティング**
   - バケット → プロパティ → 静的ウェブサイトホスティング → 有効化
   - インデックスドキュメント: `index.html` / エラードキュメント: `404.html`
3. **バケットポリシー**(公開読み取り。`aws/bucket-policy.json` の内容を貼り付け)
   - バケット → アクセス許可 → バケットポリシー → `aws/bucket-policy.json` を適用
   - 公開するのは `s3:GetObject` のみ。公開**書き込み**は付与しない。

## B. GitHub OIDC プロバイダ登録(GitHub Actions 用)

IAM → ID プロバイダ → プロバイダを追加:

- プロバイダのタイプ: OpenID Connect
- プロバイダの URL: `https://token.actions.githubusercontent.com`
- 対象者(Audience): `sts.amazonaws.com`

> アカウント内に同じ OIDC プロバイダが既にある場合は、新規作成せず既存を使います。

## C. IAM ロール作成(GitHub Actions 用)

GitHub Actions が assume する、対象バケットのみ操作できる最小権限ロールを作成します。

1. **権限ポリシー**を作成
   - IAM → ポリシー → 作成 → JSON に `aws/s3-access-policy.json` を貼り付け
   - 名前(推奨): `karura-sample-wiki-s3-deploy`
2. **ロール**を作成
   - IAM → ロール → 作成 → カスタム信頼ポリシー → `aws/oidc-trust-policy.json` を貼り付け
     (`{{AWS_ACCOUNT_ID}}` を実値に置換)
   - 上で作った `karura-sample-wiki-s3-deploy` ポリシーをアタッチ
   - 名前(推奨): `karura-sample-wiki-github-deploy`
   - 作成後、**ロール ARN** を控える(D で使用)

> 信頼ポリシーは `sub` を `main` ブランチに**完全一致**で限定しています。公開リポジトリでも、
> 別リポジトリ・別ブランチ・フォークからの assume を拒否します。

## D. GitHub Variables 登録(GitHub Actions 用)

GitHub → リポジトリ → Settings → Secrets and variables → Actions → **Variables** タブ → New variable:

| 名前 | 値 |
|---|---|
| `AWS_ROLE_ARN` | C で控えたロール ARN(例: `arn:aws:iam::{{AWS_ACCOUNT_ID}}:role/karura-sample-wiki-github-deploy`) |
| `AWS_REGION` | `ap-northeast-1` |
| `S3_BUCKET` | `karura-sample-life-insurance-artifacts` |

> いずれも機密ではないため Variables で十分です(Secrets ではありません)。

## E. ローカル手動デプロイ用の認証(`pnpm deploy:s3` を使う場合)

ローカルから `pnpm deploy:s3` する各自の環境に、C と同じ S3 権限を付与します。AWS の利用形態で方法が分かれます。

- **IAM Identity Center(SSO)の場合**(推奨):
  - 権限セットに `aws/s3-access-policy.json` 相当のポリシーをアタッチ
  - 手元で `aws configure sso` → `aws sso login`
- **IAM ユーザ + アクセスキーの場合**:
  - ユーザに `karura-sample-wiki-s3-deploy` ポリシーをアタッチ
  - 手元で `aws configure`(アクセスキー ID / シークレットを入力)

設定後、`aws sts get-caller-identity` が通ることを確認してから `pnpm deploy:s3` を実行します。

## F. ブランチ保護(強く推奨)

デプロイゲートを設けない構成(`main` への push で自動デプロイ)のため、**`main` のブランチ保護が唯一かつ最後の砦**です。公開リポジトリである以上、最低限これだけは有効化してください。

GitHub → Settings → Branches → Add branch ruleset(または Branch protection rule):

- 対象ブランチ: `main`
- Require a pull request before merging(直 push 禁止)
- Require approvals(1 名以上のレビュー必須)

---

## 初回デプロイ

セットアップ完了後、いずれかで初回デプロイします。

- ローカル: `pnpm deploy:s3`
- 自動: 何か変更を `main` にマージ、または GitHub → Actions → "Deploy KARURA artifacts to S3" → Run workflow

完了後、公開 URL で表示を確認します。

http://karura-sample-life-insurance-artifacts.s3-website-ap-northeast-1.amazonaws.com

## トラブルシューティング

| 症状 | 原因と対処 |
|---|---|
| ページ遷移で 404 | `trailingSlash: true`(`docusaurus.config.ts`)が効いているか確認。ビルドし直して再 sync |
| Actions で `Not authorized to perform sts:AssumeRoleWithWebIdentity` | 信頼ポリシーの `sub` / `aud` の値、ロール ARN(`AWS_ROLE_ARN`)を再確認 |
| `pnpm deploy:s3` で認証エラー | `aws sts get-caller-identity` が通るか確認(E のローカル認証) |
| 古いファイルが残る | `aws s3 sync ... --delete` 済みか確認(両経路とも `--delete` 付き) |
