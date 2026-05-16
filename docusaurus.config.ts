import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const isOffline = process.env.OFFLINE === "true";

const config: Config = {
  title: "[SAMPLE]新契約システム成果物Wiki",
  tagline: "プロジェクト成果物テンプレート",
  url: "https://example.com",
  baseUrl: "/",
  favicon: "img/favicon.png",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  future: {
    experimental_router: isOffline ? "hash" : "browser",
  },
  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
  },
  markdown: {
    mermaid: true,
    format: "detect",
  },

  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          exclude: ["**/*.tsv", "**/*.drawio", "**/system-test/**"],
        },
        blog: false,
      } satisfies Preset.Options,
    ],
  ],


  themes: [
    "@docusaurus/theme-mermaid",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["ja", "en"],
        indexBlog: false,
        docsRouteBasePath: "/",
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: "[SAMPLE]新契約システム成果物Wiki",
      items: [
        {
          type: "docSidebar",
          sidebarId: "docs",
          label: "Docs",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `© ${new Date().getFullYear()} Acceler Digital LLC. Licensed under Apache License 2.0`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
