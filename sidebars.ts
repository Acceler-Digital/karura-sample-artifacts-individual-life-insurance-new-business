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
      ],
    },
  ],
};

export default sidebars;
