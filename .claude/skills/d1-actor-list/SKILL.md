---
name: d1-actor-list
description: アクター一覧の新規作成・更新・レビューを支援する。AI駆動開発成果物フローのビジネス要求(D1)に位置する成果物で、本システムに関わるすべての人間アクター(関係者)を一覧化する文書。TOGAFのActor Catalog相当。BRDの下流に位置する成果物。後続の成果物であるプロダクト要求仕様書やユーザーストーリー一覧、C4モデルレベル1、C4モデルレベル2、L1シーケンス、L2シーケンスなど、様々な成果物から参照される。BRD策定後、アクター整理の段階で呼び出す。
---

# D1: アクター一覧

## inputする成果物

| 成果物のパス | 内容 |
|---|---|
| `templates/D1.business-requirements/actor-list-template.md` | アクター一覧テンプレート(章構成・分類軸・記述方針・セルフチェック) |
| `docs/D1.business-requirements/business-requirement-document.md` | 上流のBRD(スコープ・対象ユーザー概要・コンプライアンス制約 等を参照) |
| `docs/D1.business-requirements/actor-list.md` | 既存アクター一覧(更新・レビュー時のみ参照。新規作成時は未存在) |

## outputする成果物

| 成果物のパス | 内容 |
|---|---|
| `docs/D1.business-requirements/actor-list.md` | アクター一覧本体 |

## 新規作成時の振る舞い

新規作成時(`docs/D1.business-requirements/actor-list.md` 未存在)は **ユーザーへのヒアリングを行わず**、上流の BRD と業界一般知識から人間アクターを推定して直接生成する。

1. BRD(`docs/D1.business-requirements/business-requirement-document.md`)を読み込み、スコープ・対象ユーザー概要・コンプライアンス制約 等から人間アクター候補を分類軸(種別・境界・関与の仕方)ごとに抽出する
2. 直接利用者・間接受け手・統制監督・関係部門 の各観点で網羅性を確認する
3. テンプレート(`templates/D1.business-requirements/actor-list-template.md`)の形式に従って書き出す。BRD・業界知識から確定できない値には要確認マーカーを付ける

## 下流への伝搬関係

作成・更新時は以下の下流成果物との整合を意識する:

| 下流成果物 | アクター一覧から何を引く |
|---|---|
| プロダクト要求仕様書 | 全般(特にシステムの利用ユーザー) |
| ユーザーストーリー一覧 | 全般(ユーザーストーリーのユーザーそのものがアクター一覧そのもの) |
| C4モデルレベル1 | システムの利用ユーザー |
| C4モデルレベル2 | システムの利用ユーザー |
| L1シーケンス | システムの利用ユーザー |
| L2シーケンス | システムの利用ユーザー |
