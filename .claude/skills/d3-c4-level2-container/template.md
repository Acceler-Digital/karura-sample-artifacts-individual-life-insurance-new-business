<!--
振る舞いルールは `.claude/skills/d3-c4-level2-container/SKILL.md`、汎用規約はリポジトリ直下の `CLAUDE.md` を参照
-->

# C4モデル レベル2: コンテナ

{{本図のスコープ(対象システム内部をコンテナ単位で描いたこと・ADR の反映状況)を1段落で記載}}

```mermaid
flowchart LR
    classDef person fill:#08427b,color:#ffffff,stroke:#052e56;
    classDef container fill:#438dd5,color:#ffffff,stroke:#2e6295;
    classDef extsys fill:#8c8c8c,color:#ffffff,stroke:#5c5c5c;

    subgraph {{利用者グループ}}
        direction TB
        {{actN}}["{{アクター名}}<br/>{{ACT-N}}"]
    end

    subgraph sys["{{対象システム名}}"]
        direction TB
        {{cntN}}["<b>{{コンテナ名}}</b><br/>[{{種別}}: {{技術}}]<br/>{{CNT-N}}"]
        {{cntM}}[("<b>{{データストア名}}</b><br/>[データストア: {{技術}}]<br/>{{CNT-M}}")]
    end

    subgraph {{外部システムグループ}}
        direction TB
        {{extN}}["{{外部システム名}}<br/>{{EXT-N}}"]
    end

    {{actN}} -->|"{{利用目的}}"| {{cntN}}
    {{cntN}} -->|"{{やり取りの概括}}"| {{cntM}}
    {{cntN}} -->|"{{連携内容}}"| {{extN}}

    class {{actN}} person;
    class {{cntN}},{{cntM}} container;
    class {{extN}} extsys;
    style sys fill:none,stroke:#1168bd,stroke-width:2px,stroke-dasharray:6 4;
```

## コンテナ

<!-- HINT:
- 種別: 利用者向けアプリケーション / 業務処理アプリケーション / 非同期処理 / バッチ / データストア
- 技術: ADR に基づかない場合は末尾に【要確認】(図のノードには付けない)
- 設計根拠: ADR に基づく場合は ADR の ID、それ以外は分割・選定の理由
-->

| ID | 種別 | 名称 | 責務 | 技術 | 設計根拠 | 関連 UC |
|---|---|---|---|---|---|---|
| {{CNT-N}} | {{種別}} | {{コンテナ名}} | {{責務}} | {{技術}} | {{設計根拠}} | {{UC-N〜M}} |

## 関係

<!-- HINT:
- 起点 / 終点: `名称: ID`
- 連携方式: 同期 / 非同期 に方式を添える(例: `非同期(メッセージキュー)`)
-->

| 起点 | 終点 | やり取りする内容 | 連携方式 | 関連 UC |
|---|---|---|---|---|
| {{名称: ID}} | {{名称: ID}} | {{やり取りする内容}} | {{連携方式}} | {{UC-N〜M}} |
