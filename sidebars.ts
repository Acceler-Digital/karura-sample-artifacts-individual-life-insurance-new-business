import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: "category",
      label: "D0. プロジェクト管理",
      items: [
        {
          type: "doc",
          id: "D0.project-management/poject-index",
          label: "プロジェクトインデックス",
        },
        {
          type: "doc",
          id: "D0.project-management/artifact-flow",
          label: "成果物フロー",
        },
      ],
    },
    {
      type: "category",
      label: "D1. ビジネス要求",
      items: [
        {
          type: "doc",
          id: "D1.business-requirements/business-requirement-document",
          label: "ビジネス要件定義書",
        },
        {
          type: "doc",
          id: "D1.business-requirements/actor-list",
          label: "アクター一覧",
        },
        {
          type: "doc",
          id: "D1.business-requirements/domain-definition-document",
          label: "ドメイン定義書",
        },
        {
          type: "doc",
          id: "D1.business-requirements/product-requirement-document",
          label: "プロダクト要求仕様書",
        },
        {
          type: "category",
          label: "ドメイン要求仕様書",
          items: [
            {
              type: "doc",
              id: "D1.business-requirements/domain-requirements/hear-requirement-document",
              label: "意向把握",
            },
            {
              type: "doc",
              id: "D1.business-requirements/domain-requirements/design-requirement-document",
              label: "設計書作成",
            },
            {
              type: "doc",
              id: "D1.business-requirements/domain-requirements/appl-requirement-document",
              label: "申込受付",
            },
            {
              type: "doc",
              id: "D1.business-requirements/domain-requirements/decl-requirement-document",
              label: "告知受付",
            },
            {
              type: "doc",
              id: "D1.business-requirements/domain-requirements/undw-requirement-document",
              label: "引受査定",
            },
            {
              type: "doc",
              id: "D1.business-requirements/domain-requirements/prem-requirement-document",
              label: "第一回保険料収納",
            },
            {
              type: "doc",
              id: "D1.business-requirements/domain-requirements/book-requirement-document",
              label: "契約成立(計上)",
            },
            {
              type: "doc",
              id: "D1.business-requirements/domain-requirements/plcy-requirement-document",
              label: "保険証券発行",
            },
            {
              type: "doc",
              id: "D1.business-requirements/domain-requirements/prod-requirement-document",
              label: "商品仕様管理",
            },
            {
              type: "doc",
              id: "D1.business-requirements/domain-requirements/cust-requirement-document",
              label: "顧客情報管理",
            },
            {
              type: "doc",
              id: "D1.business-requirements/domain-requirements/chnl-requirement-document",
              label: "募集チャネル管理",
            },
            {
              type: "doc",
              id: "D1.business-requirements/domain-requirements/suit-requirement-document",
              label: "募集コンプライアンス証跡管理",
            },
            {
              type: "doc",
              id: "D1.business-requirements/domain-requirements/kyc-requirement-document",
              label: "本人確認(KYC)",
            },
            {
              type: "doc",
              id: "D1.business-requirements/domain-requirements/asf-requirement-document",
              label: "反社チェック",
            },
            {
              type: "doc",
              id: "D1.business-requirements/domain-requirements/esign-requirement-document",
              label: "電子署名",
            },
            {
              type: "doc",
              id: "D1.business-requirements/domain-requirements/audit-requirement-document",
              label: "統制・証跡管理(アクセス制御・監査ログ・電子帳簿保存)",
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
