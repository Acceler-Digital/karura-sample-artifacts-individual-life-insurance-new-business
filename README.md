# KARURA 成果物サンプル - 生命保険 新契約システム

エンタープライズ向けAI駆動開発統合ソリューション「[KARURA](https://github.com/Acceler-Digital/karura)」（以下、KARURA）を使って実プロジェクトを進めた場合に、どのような成果物体系が生まれるのかを具体的に示すサンプルリポジトリです。

架空の生命保険会社「Sample生命保険株式会社」における 個人保険（終身保険・定期保険・医療保険・がん保険 等）の新契約手続きWebという題材で、成果物を順次配置していきます。

## 何が置いてあるか

成果物本体は [docs/](docs/) 配下、Claude による生成・更新を支援するスキル定義(章構成・書き方ヒントを埋め込んだテンプレート同梱)は [.claude/skills/](.claude/skills/) 配下に、それぞれフェーズ区分で収録しています。

| フェーズ | 成果物本体 | スキル(テンプレート同梱) |
|---|---|---|
| **D0** プロジェクト管理 | [docs/D0.project-management/](docs/D0.project-management/) | — |
| **D1** ビジネス要求 | [docs/D1.business-requirements/](docs/D1.business-requirements/) | [.claude/skills/](.claude/skills/)(各 `d1-*/SKILL.md` + `template.md`) |

フェーズ間の依存関係や成果物の生成順については [docs/D0.project-management/artifact-flow.md](docs/D0.project-management/artifact-flow.md) を参照してください。


## 環境構築
### ドキュメントサイトをローカルで立ち上げる

[docs/](docs/) 配下のMarkdownは [Docusaurus 3](https://docusaurus.io/) でWikiサイトとしてプレビューできます。サイドバー構成は [sidebars.ts](sidebars.ts) を参照してください。

```bash
# 依存関係インストール
pnpm install

# 開発サーバー起動（ホットリロード付き）
pnpm start
# → http://localhost:3000 で閲覧

# 本番ビルド
pnpm build

# ビルド後のプレビュー
pnpm serve

# オフライン閲覧用ビルド（hash router・検索インデックス同梱）
pnpm build:offline
```

#### 前提条件

- Node.js 18 以上
- pnpm 9 以上

### 成果物の整備状況を確認する

[docs/](docs/) 配下に残っている未確定マーカー（プレースホルダ `{{xxx}}` と要確認マーカー `要確認`）の件数・該当ファイルを表示します。レビュー時の気付き支援用で、CI で fail させる目的ではありません（スクリプトは常に exit 0）。

```bash
pnpm check:markers
```

実体は [scripts/check-markers.sh](scripts/check-markers.sh) です。マーカー記法そのものについては [CLAUDE.md](CLAUDE.md) §1〜§3 を参照してください。

## Claude で成果物を生成・更新する

本リポジトリは Claude（Claude Code 等）を介した成果物の生成・更新を前提に整備されています。

- **プロジェクト共通の慣習**: [CLAUDE.md](CLAUDE.md) にプレースホルダ書式（`{{xxx}}`）・要確認マーカー運用・ファイル配置規約・サイドバー登録ルール・参照元の境界（D0 は明示指示なしには参照しない 等）が集約されており、Claude が自動で参照します
- **成果物固有の慣習**: 各成果物のスキルが [.claude/skills/](.claude/skills/) に配置されており、Claude Code から `/d1-business-requirement-document` のようにスラッシュコマンドで呼び出すと、章構成・上下流の伝搬関係を踏まえた生成・更新ができます
- **テンプレート**: 各スキルディレクトリ `.claude/skills/<skill-name>/template.md` に、章構成と書き方ヒント（HINTコメント）を埋め込んだ雛形を同梱しています。本リポジトリは Claude を中核に据える前提のため、テンプレートはスキルが読み込む内部リソースとして扱い、スキル+テンプレートを1単位で他プロジェクトへ流用できる構成にしています

## 画面・デザイン成果物の前提（Figma 併走）

本リポジトリでは、**画面に関わる成果物は Figma を併走させることを前提**としています。Markdown 側は「画面体験の方向性・原則・代表シーンの言葉」を、Figma 側は「ムードボード・代表シーン・全画面ワイヤーの絵」を、それぞれフェーズ別に持つ役割分担です。

| 成果物 | Markdown 側の責務 | Figma 側の責務 |
|---|---|---|
| [画面コンセプト集（D1）](docs/D1.business-requirements/screen-concepts.md) | 画面体験のコンセプト宣言・体験原則（3-5）・代表シーン（2-3、最大5）の正本 | ムードボード/スタイルタイル + 代表シーン用ラフ（数枚） |
| 画面要件群（D2、未整備） | 全画面の画面要件項目（表示項目・状態・遷移・バリデーション）の正本 | 全画面のワイヤーフレーム（中忠実度） |
| デザインカンプ・デザインシステム（D3 以降、未整備） | — | ハイファイ・コンポーネント・トークン |

D1 段階は **ビジネスサイドが議論・合意できるサイズ**（数枚の代表シーン + 体験原則の合意）に Figma 投資を絞り、全画面のワイヤー網羅は D2 以降に降ろします。下流のワイヤーフレーム・画面遷移図・全画面要件は、D1 で合意した体験原則と代表シーンを **判断基準にして** 設計者・エンジニアが起こす建付けです。

### Figma MCP

Claude Code（claude.ai 経由）から Figma file を読み取り操作できます。本リポジトリには以下が設定済みです:

- **読み取り系ツール 11 件**（`whoami` / `get_metadata` / `get_design_context` / `get_screenshot` 等）を [.claude/settings.json](.claude/settings.json) で allowlist 済み（権限プロンプトを省略）
- **書き込み系ツール**（`use_figma` / `create_new_file` 等）は **意図的に allowlist 外**（設計成果物の生成・上書きは常に明示確認を経由）

初回利用時は claude.ai 経由の OAuth 認証が必要です。Figma file の作成・編集を Claude に依頼するには **Editor 以上のシート** が必要です（View シートでは書き込み不可）。

## リポジトリ構成

```
.
├── docs/                          # 成果物本体
│   ├── D0.project-management/     # D0 プロジェクト管理
│   └── D1.business-requirements/  # D1 ビジネス要求
├── .claude/
│   └── skills/                    # Claude スキル定義（フェーズ別、テンプレート同梱）
│       └── d1-business-requirement-document/
│           ├── SKILL.md           # スキル本体
│           └── template.md        # 成果物テンプレート（章構成・書き方ヒント入り）
├── scripts/                       # 補助スクリプト
│   └── check-markers.sh           # 未確定マーカー集計
├── sidebars.ts                    # Docusaurus サイドバー定義
├── docusaurus.config.ts           # Docusaurus 設定
├── CLAUDE.md                      # プロジェクト共通の慣習（Claude が自動参照）
└── package.json
```

## 関連リポジトリ

- [KARURA](https://github.com/Acceler-Digital/karura) — 本サンプルの元となるAI駆動開発ソリューション本体

## ライセンス

本リポジトリに含まれるドキュメント・図・設定ファイルは [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) の下で提供されます。全文は同梱の [LICENSE](LICENSE) を参照してください。
