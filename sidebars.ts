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
              id: "D1.business-requirements/domain-requirements/domain-common-requirement-document",
              label: "ドメイン共通要求仕様書",
            },
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
              id: "D1.business-requirements/domain-requirements/customer-requirement-document",
              label: "顧客情報管理要求仕様書",
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
        {
          type: "doc",
          id: "D1.business-requirements/user-story-list",
          label: "ユーザーストーリー一覧",
        },
        {
          type: "doc",
          id: "D1.business-requirements/use-case-list",
          label: "ユースケース一覧",
        },
        {
          type: "doc",
          id: "D1.business-requirements/screen-concepts",
          label: "画面コンセプト集",
        },
      ],
    },
    {
      type: "category",
      label: "D2. システム要件",
      items: [
        {
          type: "doc",
          id: "D2.system-requirements/function-list",
          label: "機能一覧",
        },
        {
          type: "doc",
          id: "D2.system-requirements/external-system-list",
          label: "外部システム一覧",
        },
        {
          type: "doc",
          id: "D2.system-requirements/c4-level1-system-context",
          label: "C4モデル レベル1: システムコンテキスト",
        },
        {
          type: "category",
          label: "C4モデル レベル1: シーケンス",
          items: [
            {
              type: "category",
              label: "意向把握",
              items: [
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/HEAR_意向把握/UC-1_意向把握を開始し募集権限を確認する",
                  label: "UC-1: 意向把握を開始し募集権限を確認する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/HEAR_意向把握/UC-2_意向項目を聴取・記録し意向を確定する",
                  label: "UC-2: 意向項目を聴取・記録し意向を確定する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/HEAR_意向把握/UC-3_意向情報取得の本人同意を取得する",
                  label: "UC-3: 意向情報取得の本人同意を取得する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/HEAR_意向把握/UC-4_意向把握の募集コンプライアンス証跡を発生・連携する",
                  label: "UC-4: 意向把握の募集コンプライアンス証跡を発生・連携する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/HEAR_意向把握/UC-5_確定済み意向を修正・撤回する",
                  label: "UC-5: 確定済み意向を修正・撤回する",
                },
              ],
            },
            {
              type: "category",
              label: "設計書作成",
              items: [
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/DESIGN_設計書作成/UC-6_確定意向を受領し商品・特約を選択してプランを構成する",
                  label: "UC-6: 確定意向を受領し商品・特約を選択してプランを構成する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/DESIGN_設計書作成/UC-7_保険料を試算する",
                  label: "UC-7: 保険料を試算する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/DESIGN_設計書作成/UC-8_設計プランの意向整合性を検証する",
                  label: "UC-8: 設計プランの意向整合性を検証する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/DESIGN_設計書作成/UC-9_複数プランを比較・提示し確定して申込へ引き渡す",
                  label: "UC-9: 複数プランを比較・提示し確定して申込へ引き渡す",
                },
              ],
            },
            {
              type: "category",
              label: "申込受付",
              items: [
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/APPL_申込受付/UC-10_申込項目を入力・検証する",
                  label: "UC-10: 申込項目を入力・検証する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/APPL_申込受付/UC-11_関係者整合(被保険者同意要否)を検証する",
                  label: "UC-11: 関係者整合(被保険者同意要否)を検証する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/APPL_申込受付/UC-12_本人確認・反社・電子署名の確認結果を待ち合わせ申込を確定する",
                  label: "UC-12: 本人確認・反社・電子署名の確認結果を待ち合わせ申込を確定する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/APPL_申込受付/UC-13_停留申込を業務上収束させる",
                  label: "UC-13: 停留申込を業務上収束させる",
                },
              ],
            },
            {
              type: "category",
              label: "告知受付",
              items: [
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/DECL_告知受付/UC-14_告知を本人入力する",
                  label: "UC-14: 告知を本人入力する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/DECL_告知受付/UC-15_要配慮個人情報の取得同意を取得する",
                  label: "UC-15: 要配慮個人情報の取得同意を取得する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/DECL_告知受付/UC-16_告知を本人確認・電子署名で確定する",
                  label: "UC-16: 告知を本人確認・電子署名で確定する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/DECL_告知受付/UC-17_確定告知の訂正を申し出る",
                  label: "UC-17: 確定告知の訂正を申し出る",
                },
              ],
            },
            {
              type: "category",
              label: "引受査定",
              items: [
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/UNDW_引受査定/UC-18_告知情報を引受査定の根拠として参照する",
                  label: "UC-18: 告知情報を引受査定の根拠として参照する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/UNDW_引受査定/UC-19_査定経路を振り分ける(自動-医的)",
                  label: "UC-19: 査定経路を振り分ける(自動/医的)",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/UNDW_引受査定/UC-20_自動判定を実行し判定根拠を記録する",
                  label: "UC-20: 自動判定を実行し判定根拠を記録する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/UNDW_引受査定/UC-21_医的査定を実施し判定根拠・覆し理由を記録する",
                  label: "UC-21: 医的査定を実施し判定根拠・覆し理由を記録する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/UNDW_引受査定/UC-22_査定イレギュラー案件を収束させる",
                  label: "UC-22: 査定イレギュラー案件を収束させる",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/UNDW_引受査定/UC-23_自動判定基準を調整する",
                  label: "UC-23: 自動判定基準を調整する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/UNDW_引受査定/UC-24_機械学習で査定を高度化する",
                  label: "UC-24: [フェーズ2] 機械学習で査定を高度化する",
                },
              ],
            },
            {
              type: "category",
              label: "第一回保険料収納",
              items: [
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/PREM_第一回保険料収納/UC-25_収納手段・収納金額を確定する",
                  label: "UC-25: 収納手段・収納金額を確定する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/PREM_第一回保険料収納/UC-26_収納成立を手段別成立条件で検知する",
                  label: "UC-26: 収納成立を手段別成立条件で検知する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/PREM_第一回保険料収納/UC-27_責任開始日を確定する",
                  label: "UC-27: 責任開始日を確定する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/PREM_第一回保険料収納/UC-28_収納不成立を再依頼・代替手段提示で収束させる",
                  label: "UC-28: 収納不成立を再依頼・代替手段提示で収束させる",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/PREM_第一回保険料収納/UC-29_二重収納を冪等に防止・是正する",
                  label: "UC-29: 二重収納を冪等に防止・是正する",
                },
              ],
            },
            {
              type: "category",
              label: "契約成立(計上)",
              items: [
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/BOOK_契約成立(計上)/UC-30_引受可決と収納成立の双方充足を検知し自動計上する",
                  label: "UC-30: 引受可決と収納成立の双方充足を検知し自動計上する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/BOOK_契約成立(計上)/UC-31_既存契約管理システムへ連携し受領確認で計上完了とする",
                  label: "UC-31: 既存契約管理システムへ連携し受領確認で計上完了とする",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/BOOK_契約成立(計上)/UC-32_二重計上を冪等に防止・是正する",
                  label: "UC-32: 二重計上を冪等に防止・是正する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/BOOK_契約成立(計上)/UC-33_計上滞留を滞留管理し業務時間内に処理する",
                  label: "UC-33: 計上滞留を滞留管理し業務時間内に処理する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/BOOK_契約成立(計上)/UC-34_確定顧客情報を既存契約管理システムへ引き渡す",
                  label: "UC-34: 確定顧客情報を既存契約管理システムへ引き渡す",
                },
              ],
            },
            {
              type: "category",
              label: "保険証券発行",
              items: [
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/PLCY_保険証券発行/UC-35_証券データを確定契約内容と差異なく生成する",
                  label: "UC-35: 証券データを確定契約内容と差異なく生成する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/PLCY_保険証券発行/UC-36_保険証券を交付する(電子交付-物理発送)",
                  label: "UC-36: 保険証券を交付する(電子交付/物理発送)",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/PLCY_保険証券発行/UC-37_電子交付証券の保全データを保有する",
                  label: "UC-37: 電子交付証券の保全データを保有する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/PLCY_保険証券発行/UC-38_二重発行・二重発送を冪等に防止する",
                  label: "UC-38: 二重発行・二重発送を冪等に防止する",
                },
              ],
            },
            {
              type: "category",
              label: "顧客情報管理",
              items: [
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/CUST_顧客情報管理/UC-39_契約主体(申込人-被保険者-受取人)を区別して保持する",
                  label: "UC-39: 契約主体(申込人/被保険者/受取人)を区別して保持する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/CUST_顧客情報管理/UC-40_顧客を名寄せ判定する(不確実時は別人物扱い)",
                  label: "UC-40: 顧客を名寄せ判定する(不確実時は別人物扱い)",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/CUST_顧客情報管理/UC-41_同意撤回時に手続き継続可否を判定し関係ドメインへ連絡する",
                  label: "UC-41: 同意撤回時に手続き継続可否を判定し関係ドメインへ連絡する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/CUST_顧客情報管理/UC-42_個人情報の開示・訂正・利用停止請求に対応する",
                  label: "UC-42: 個人情報の開示・訂正・利用停止請求に対応する",
                },
              ],
            },
            {
              type: "category",
              label: "募集コンプライアンス証跡管理",
              items: [
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/SUIT_募集コンプライアンス証跡管理/UC-43_募集コンプライアンス証跡を網羅集約し欠落を検証する",
                  label: "UC-43: 募集コンプライアンス証跡を網羅集約し欠落を検証する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/SUIT_募集コンプライアンス証跡管理/UC-44_保全済み証跡への改変試行を検知しエスカレーションする",
                  label: "UC-44: 保全済み証跡への改変試行を検知しエスカレーションする",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/SUIT_募集コンプライアンス証跡管理/UC-45_案件証跡を時系列再構成・提示する",
                  label: "UC-45: 案件証跡を時系列再構成・提示する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/SUIT_募集コンプライアンス証跡管理/UC-46_疑義案件をレビュー対象として連携する",
                  label: "UC-46: 疑義案件をレビュー対象として連携する",
                },
              ],
            },
            {
              type: "category",
              label: "本人確認(KYC)",
              items: [
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/KYC_本人確認(KYC)/UC-47_取引時確認(本人特定事項)を外部サービス連携で実施する",
                  label: "UC-47: 取引時確認(本人特定事項)を外部サービス連携で実施する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/KYC_本人確認(KYC)/UC-48_KYC の外部不達・タイムアウト時に再依頼・縮退運用で業務継続する",
                  label: "UC-48: KYC の外部不達・タイムアウト時に再依頼・縮退運用で業務継続する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/KYC_本人確認(KYC)/UC-49_KYC の「要目視」「保留」案件を目視判定する",
                  label: "UC-49: KYC の「要目視」「保留」案件を目視判定する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/KYC_本人確認(KYC)/UC-50_疑わしい取引の兆候を検知し届出要否判断に付す",
                  label: "UC-50: 疑わしい取引の兆候を検知し届出要否判断に付す",
                },
              ],
            },
            {
              type: "category",
              label: "反社チェック",
              items: [
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/ASF_反社チェック/UC-51_契約関係者の反社該当性を外部サービスへ照合する",
                  label: "UC-51: 契約関係者の反社該当性を外部サービスへ照合する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/ASF_反社チェック/UC-52_関係者変更時に反社再チェックを起票する",
                  label: "UC-52: 関係者変更時に反社再チェックを起票する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/ASF_反社チェック/UC-53_「要確認(類似・あいまい一致)」を最終判断する",
                  label: "UC-53: 「要確認(類似・あいまい一致)」を最終判断する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/ASF_反社チェック/UC-54_反社該当確定時に進行停止しエスカレーションする",
                  label: "UC-54: 反社該当確定時に進行停止しエスカレーションする",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/ASF_反社チェック/UC-55_反社判定情報を限定開示で機密管理する",
                  label: "UC-55: 反社判定情報を限定開示で機密管理する",
                },
              ],
            },
            {
              type: "category",
              label: "電子署名",
              items: [
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/ESIGN_電子署名/UC-56_確定文書に本人が電子署名する",
                  label: "UC-56: 確定文書に本人が電子署名する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/ESIGN_電子署名/UC-57_真実性措置(タイムスタンプ)付与を外部サービスへ依頼する",
                  label: "UC-57: 真実性措置(タイムスタンプ)付与を外部サービスへ依頼する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/ESIGN_電子署名/UC-58_外部署名検証結果を受領し証跡として保持する",
                  label: "UC-58: 外部署名検証結果を受領し証跡として保持する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/ESIGN_電子署名/UC-59_署名の不達・期限超過・検証不成立を再署名で収束する",
                  label: "UC-59: 署名の不達・期限超過・検証不成立を再署名で収束する",
                },
              ],
            },
            {
              type: "category",
              label: "統制・証跡管理",
              items: [
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/AUDIT_統制・証跡管理/UC-60_アクセス権限を申請・承認する",
                  label: "UC-60: アクセス権限を申請・承認する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/AUDIT_統制・証跡管理/UC-61_アクセス権限を定期棚卸し不要権限を剥奪する",
                  label: "UC-61: アクセス権限を定期棚卸し不要権限を剥奪する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/AUDIT_統制・証跡管理/UC-62_監査対象業務イベントを各工程から収集・改ざん不能に保全する",
                  label: "UC-62: 監査対象業務イベントを各工程から収集・改ざん不能に保全する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/AUDIT_統制・証跡管理/UC-63_証跡を 10 年保持し参照可能性を維持する",
                  label: "UC-63: 証跡を 10 年保持し参照可能性を維持する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/AUDIT_統制・証跡管理/UC-64_証跡を説明可能な形で提供する(監査・第三者診断・監督官庁)",
                  label: "UC-64: 証跡を説明可能な形で提供する(監査・第三者診断・監督官庁)",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/AUDIT_統制・証跡管理/UC-65_真実性・可視性不充足-証跡消失を業務収束する",
                  label: "UC-65: 真実性・可視性不充足/証跡消失を業務収束する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/AUDIT_統制・証跡管理/UC-66_緊急時の例外アクセス(ブレイクグラス)を統制下で行使する",
                  label: "UC-66: 緊急時の例外アクセス(ブレイクグラス)を統制下で行使する",
                },
              ],
            },
            {
              type: "category",
              label: "横断",
              items: [
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/COMMON_横断/UC-67_本プロダクトにログインする",
                  label: "UC-67: 本プロダクトにログインする",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/COMMON_横断/UC-68_業務通知を配信する",
                  label: "UC-68: 業務通知を配信する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/COMMON_横断/UC-69_中断した業務を再開する",
                  label: "UC-69: 中断した業務を再開する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/COMMON_横断/UC-70_業務帳票を出力する",
                  label: "UC-70: 業務帳票を出力する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/COMMON_横断/UC-71_本人同意を取得・撤回・更新する",
                  label: "UC-71: 本人同意を取得・撤回・更新する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/COMMON_横断/UC-72_外部連携障害時に縮退運用する",
                  label: "UC-72: 外部連携障害時に縮退運用する",
                },
                {
                  type: "doc",
                  id: "D2.system-requirements/c4-level1-sequences/COMMON_横断/UC-73_例外局面で次に取るべき業務行動を提示する",
                  label: "UC-73: 例外局面で次に取るべき業務行動を提示する",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
