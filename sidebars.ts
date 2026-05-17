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
              id: "D1.business-requirements/domain-requirements/hearing-requirement-document",
              label: "意向把握要求仕様書",
            },
            {
              type: "doc",
              id: "D1.business-requirements/domain-requirements/design-requirement-document",
              label: "設計書作成要求仕様書",
            },
            {
              type: "doc",
              id: "D1.business-requirements/domain-requirements/application-requirement-document",
              label: "申込受付要求仕様書",
            },
            {
              type: "doc",
              id: "D1.business-requirements/domain-requirements/declaration-requirement-document",
              label: "告知受付要求仕様書",
            },
            {
              type: "doc",
              id: "D1.business-requirements/domain-requirements/underwriting-requirement-document",
              label: "引受査定要求仕様書",
            },
            {
              type: "doc",
              id: "D1.business-requirements/domain-requirements/premium-requirement-document",
              label: "第一回保険料収納要求仕様書",
            },
            {
              type: "doc",
              id: "D1.business-requirements/domain-requirements/booking-requirement-document",
              label: "契約成立(計上)要求仕様書",
            },
            {
              type: "doc",
              id: "D1.business-requirements/domain-requirements/policy-requirement-document",
              label: "保険証券発行要求仕様書",
            },
            {
              type: "doc",
              id: "D1.business-requirements/domain-requirements/product-specification-requirement-document",
              label: "商品仕様管理要求仕様書",
            },
            {
              type: "doc",
              id: "D1.business-requirements/domain-requirements/customer-requirement-document",
              label: "顧客情報管理要求仕様書",
            },
            {
              type: "doc",
              id: "D1.business-requirements/domain-requirements/channel-requirement-document",
              label: "募集チャネル管理要求仕様書",
            },
            {
              type: "doc",
              id: "D1.business-requirements/domain-requirements/suitability-requirement-document",
              label: "募集コンプライアンス証跡管理要求仕様書",
            },
            {
              type: "doc",
              id: "D1.business-requirements/domain-requirements/know-your-customer-requirement-document",
              label: "本人確認(KYC)要求仕様書",
            },
            {
              type: "doc",
              id: "D1.business-requirements/domain-requirements/anti-social-forces-requirement-document",
              label: "反社チェック要求仕様書",
            },
            {
              type: "doc",
              id: "D1.business-requirements/domain-requirements/electronic-signature-requirement-document",
              label: "電子署名要求仕様書",
            },
            {
              type: "doc",
              id: "D1.business-requirements/domain-requirements/audit-requirement-document",
              label: "統制・証跡管理(アクセス制御・監査ログ・電子帳簿保存)要求仕様書",
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
