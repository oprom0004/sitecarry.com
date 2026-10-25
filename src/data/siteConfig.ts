export interface PricingTier {
  id: string;
  name: string;
  price: number;
  priceDisplay: string;
  period?: string;
  description: string;
  highlight?: boolean;
  timeline: string;
  scope: {
    pages: string;
    posts: string;
    templates: string;
    languages: string;
    forms: string;
    seoGeo: string;
    integrations?: string;
  };
  features: string[];
  deliverables: string[];
}

export interface CarePlan {
  id: string;
  name: string;
  monthlyFee: number;
  monthlyFeeDisplay: string;
  description: string;
  features: string[];
}

export interface AddOn {
  item: string;
  priceRange: string;
  unit: string;
  note: string;
}

export type Lang = 'en' | 'ja' | 'zh-tw';

export const pricingTiersByLang: Record<Lang, PricingTier[]> = {
  en: [
    {
      id: "essential",
      name: "Essential Migration",
      price: 1490,
      priceDisplay: "$1,490",
      description: "Designed for corporate brochure & marketing websites seeking sub-second speed, security, and a clean modern baseline. Zero-risk link equity preservation ensures existing rankings and healthy URLs carry over with zero 404s.",
      timeline: "2–3 weeks",
      highlight: false,
      scope: {
        pages: "Up to 15 standard corporate pages (Home, About, Services, Contact, Terms, etc.)",
        posts: "Up to 150 historical articles / resources (automated batch migration & cleaning)",
        templates: "3 responsive core layouts",
        languages: "Single language",
        forms: "1 validated secure contact form",
        seoGeo: "Healthy URLs 1:1 Preserved & Semantic Schema",
      },
      features: [
        "Link Equity Protection: Existing healthy URLs retained 1:1; automated 301 redirects for modified paths (zero 404 broken links)",
        "Native GEO & AI Search Ready: Clean semantic HTML5 easily cited by ChatGPT & Perplexity",
        "Sub-second global CDN loading (Google Core Web Vitals 90+ crawl efficiency)",
        "Permanently end plugin exploits & repeated malware (pure static, no public PHP server)",
        "Automated extraction & cleansing of contaminated legacy code and hidden spam links",
        "Client-owned Git repository & $0/mo global cloud deployment (Cloudflare Pages)",
        "30-day post-launch warranty bugfix guarantee",
      ],
      deliverables: [
        "Staging preview URL for full acceptance testing",
        "Exhaustive 301 redirect validation report & Google Search Console sync",
        "Zero-downtime DNS switchover plan with rollback protocol",
        "CMS editor walkthrough & handover documentation",
      ],
    },
    {
      id: "business",
      name: "Business Rebuild",
      price: 3490,
      priceDisplay: "$3,490",
      description: "Our flagship modernization package. Complete responsive UI redesign, structured headless CMS, enterprise SEO meta & JSON-LD Knowledge Graph, and deep GEO optimization for AI search engines.",
      timeline: "4–6 weeks",
      highlight: true,
      scope: {
        pages: "Up to 30 custom modular pages",
        posts: "Up to 500 articles / case studies",
        templates: "6 structured modular templates",
        languages: "Single language",
        forms: "Up to 2 secure lead & inquiry forms",
        seoGeo: "Malformed URL Clean-up & Full JSON-LD Knowledge Graph",
        integrations: "1 standard third-party integration (CRM / Analytics / Mailer)",
      },
      features: [
        "Advanced SEO & GEO Architecture: 100% legacy ranking authority preservation + rich JSON-LD Knowledge Graph (Organization, Article, FAQ, Services)",
        "AI Search Engine (GEO) Native Optimization: Eliminates 30+ plugin wrapper bloat so LLMs (Perplexity, ChatGPT, Gemini) accurately parse and recommend your business",
        "Legacy URL Normalization & 301 Smart Mapping: Restructure bloated date paths, `/?p=123`, and messy slugs into clean modern routes with global CDN 301 redirects",
        "Permanently end PHP server vulnerabilities & repeated malware reinfections (Astro / Next.js)",
        "Tailored Headless CMS editor workflow (Keystatic, Decap, or private WP API)",
        "Sub-second global CDN performance (Google PageSpeed 95+ desktop & mobile)",
        "30-day post-launch warranty bugfix guarantee",
      ],
      deliverables: [
        "Interactive staging environment with 2 feedback rounds",
        "Exhaustive 301 redirect audit covering all historical URLs",
        "Production deployment to Cloudflare Pages / Vercel / AWS",
        "Admin handover video & operational guide",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise & Decoupled Commerce",
      price: 6900,
      priceDisplay: "$6,900",
      description: "Engineered for high-volume WooCommerce / B2C stores, multi-language hubs, and transactional portals. Decouples storefront from backend to eliminate Magecart checkout skimmers, survive flash-sale traffic spikes, and dominate Google Shopping & AI shopping search (GEO).",
      timeline: "6–8 weeks",
      highlight: false,
      scope: {
        pages: "Up to 60 custom catalog & portal layouts",
        posts: "Up to 2,500 products / resources (with variants, attributes & orders)",
        templates: "8 modular templates (Catalog, PDP, Cart/Checkout, Category, Blog, etc.)",
        languages: "Up to 2 languages included (with strict hreflang)",
        forms: "Forms + Tokenized Stripe / Shopify decoupled checkout",
        seoGeo: "Product/Offer Schema & Multi-Language hreflang Routing",
        integrations: "Decoupled Checkout + Global CDN instant search + ERP/CRM/Mailer sync",
      },
      features: [
        "Enterprise E-Commerce SEO & GEO Dominance: Native Product, Offer, AggregateRating, and BreadcrumbList JSON-LD schema enabling rich snippet display on Google & AI shopping agents",
        "Decoupled E-Commerce Architecture: Public product catalog on global CDN, 100% immune to Magecart checkout skimmers",
        "Enterprise URL & Taxonomy Normalization: Deep category, tag, and product slug optimization with automated 301 mapping and strict multi-language hreflang routing",
        "Flash-sale traffic spike immunity: Storefront never crashes under paid ad traffic surges",
        "Tokenized PCI-compliant checkout (Stripe / Shopify headless integration)",
        "Full catalog migration (products, variations, attributes, inventory metadata, and customer order logs)",
        "30-day post-launch warranty & checkout flow guarantee",
      ],
      deliverables: [
        "Decoupled commerce staging with end-to-end sandbox payment validation",
        "Full product & taxonomy 301 redirect validation report",
        "Zero-downtime DNS switchover protocol with cart freeze transition schedule",
        "Live staging handover with operational guide for product & order management",
      ],
    },
  ],

  "zh-tw": [
    {
      id: "essential",
      name: "基礎靜態遷移 (Essential)",
      price: 1490,
      priceDisplay: "$1,490",
      description: "適用於企業形象與展示型官網，追求極速載入、物理資安防護與乾淨現代基底。健康舊站網址 1:1 無損繼承，確保移轉過程零 SEO 排名流失。",
      timeline: "2–3 週",
      highlight: false,
      scope: {
        pages: "常規企業官網全站標準頁面全包（約 15 頁以內，涵蓋首頁、關於、服務、聯絡等核心頁面）",
        posts: "既有歷史文章與資料全量遷移（150 篇以內全包，腳本自動清洗）",
        templates: "3 套響應式標準版型",
        languages: "單一主要語系",
        forms: "1 組安全加密諮詢表單",
        seoGeo: "健康網址 1:1 保留與語意 Schema",
      },
      features: [
        "歷史權重保全：既有正常網址 1:1 保留，異動路徑自動配置 301 永久重定向（零 404 死鏈）",
        "原生 GEO 適配：純語意 HTML5 代碼，供 ChatGPT、Perplexity 快速檢索引用",
        "Google 測速 90+ 基準與毫秒級全球 CDN 分散式載入（大幅提升爬蟲抓取效率）",
        "徹底終結外掛漏洞與反覆掛馬（純靜態架構，無公網 PHP 伺服器可被黑）",
        "遷移過程過濾惡意腳本與無用資料庫冗餘，純淨輸出",
        "程式碼全數託管至客戶私有儲存庫，部署至客戶 CDN（每月 $0 主機月租）",
        "上線後 30 天交付瑕疵免費修復保固",
      ],
      deliverables: [
        "測試機預覽環境供全站功能驗收",
        "完整 301 重定向對齊清單與狀態查核報告",
        "零停機 DNS 切換方案與緊急復原回滾指南",
        "無頭後台操作教學影片與交接文件",
      ],
    },
    {
      id: "business",
      name: "商業重構旗艦 (Business)",
      price: 3490,
      priceDisplay: "$3,490",
      description: "主力推薦旗艦方案。高質感現代 UI 重構、直覺無頭 CMS 後台，搭配企業級 SEO Meta、JSON-LD 知識圖譜與深層 GEO（AI 搜尋）優化。",
      timeline: "4–6 週",
      highlight: true,
      scope: {
        pages: "最多 30 個客製專屬頁面",
        posts: "最多 500 篇分類文章 / 案例庫",
        templates: "6 套結構化模組版型",
        languages: "單一主要語系",
        forms: "最多 2 組商機與線索表單（無伺服器 API 傳輸）",
        seoGeo: "畸形網址規範化清洗 + 完整 Schema 知識圖譜",
        integrations: "1 項標準第三方系統整合（CRM / 電子報 / 行銷工具）",
      },
      features: [
        "企業級 SEO 權重延續：全站歷史 URL 窮舉式對照，確保舊站搜尋排名無損交接",
        "深度 GEO（AI 搜尋）優化：去除 30+ 冗餘外掛標籤，原生內嵌 JSON-LD 知識圖譜（機構、服務、常見問答）",
        "畸形路徑規範化重組：清理深層日期目錄、`/?p=xxx` 與冗餘層級，建立現代乾淨短路徑並配置全球 CDN 301 映射矩陣",
        "徹底終結 PHP 伺服器漏洞與外掛漏洞（Astro / Next.js 無公網資料庫）",
        "高質感現代化響應式 UI 重構與結構化內容模型（案例庫、產品中心、技術專欄）",
        "配置好用的無頭視覺化後台（支援 Markdown / Git 或私有隔離 WP）",
        "上線後 30 天交付瑕疵免費修復保固",
      ],
      deliverables: [
        "互動測試機驗收環境（含 2 輪反饋修訂收斂）",
        "涵蓋所有歷史 URL 的窮舉式 301 重定向校驗清冊",
        "正式部署至 Cloudflare Pages / Vercel / AWS",
        "管理員後台操作教學影片與維護手冊",
      ],
    },
    {
      id: "enterprise",
      name: "企業級無頭電商與大規模重構",
      price: 6900,
      priceDisplay: "$6,900",
      description: "專為高交易量 WooCommerce / B2C 電商、多語系門戶與高負載交易網站打造。前後端徹底解耦，物理杜絕結帳頁側錄木馬（Magecart），抗大促廣告爆量不卡死，並原生適配 Google 購物與 AI 導購搜尋（GEO）。",
      timeline: "6–8 週",
      highlight: false,
      scope: {
        pages: "最多 60 個客製頁面與商品專題落地頁",
        posts: "最多 2,500 個商品或文章（含多規格變體、屬性與歷史訂單紀錄）",
        templates: "8 套模組化版型（首頁、商品詳情 PDP、購物車/結帳、分類頁、文章等）",
        languages: "內含最多 2 種語系（配置嚴格 hreflang 國際化標籤）",
        forms: "商務表單 + 權杖化 Stripe / Shopify 解耦結帳系統",
        seoGeo: "商品 Product/Offer 結構化與多語系 hreflang 路由",
        integrations: "無頭結帳 + 毫秒級全站商品極速搜尋 + ERP/庫存/行銷工具同步",
      },
      features: [
        "電商 SEO 與 GEO 導購稱霸：原生內嵌 Product、Offer、AggregateRating 商品結構化資料，搶佔 Google 購物與 AI 導購摘要",
        "無頭電商現代架構：商品目錄由全球 CDN 秒級分發，毫秒級瀏覽，大促流量激增絕不卡死",
        "物理杜絕 Magecart 結帳側錄木馬（合規 PCI-DSS 託管權杖化結帳，伺服器不碰信用卡號）",
        "完整遷移商品規格、多屬性變体、庫存屬性與歷史顧客訂單記錄",
        "電商路由與分類層級優化：商品網址、分類目錄與多語系 hreflang 嚴格對齊，歷史外鏈與購物權重 100% 傳遞",
        "客戶端與 CDN 即時商品搜尋，支援多維度屬性快速篩選",
        "上線後 30 天交付瑕疵與結帳交易流程免費保固",
      ],
      deliverables: [
        "無頭電商測試機沙盒環境（含完整端對端金流付款與訂單驗收測試）",
        "完整商品與分類 301 永久重定向驗證報告清冊",
        "零停機 DNS 切換指南（附切換期間購物車凍結與訂單過渡安全計劃）",
        "測試機交付教育訓練影片與商品/訂單日常管理操作手冊",
      ],
    },
  ],

  ja: [
    {
      id: "essential",
      name: "エッセンシャル移行 (Essential)",
      price: 1490,
      priceDisplay: "$1,490",
      description: "コーポレートサイトやブランド紹介サイトに最適。高速表示、PHP脆弱性の完全排除に加え、健全な既存URLの1:1保持により既存のSEO評価を安全に引き継ぎます。",
      timeline: "2〜3 週間",
      highlight: false,
      scope: {
        pages: "基本固定ページ 15ページまで（トップ・会社概要・事業案内・お問い合わせ等全網羅）",
        posts: "既存記事・投稿 150件まで（スクリプト自動一括クレンジング移行）",
        templates: "基本レイアウト 3パターン",
        languages: "単一言語（1言語）",
        forms: "セキュア問い合わせフォーム 1点",
        seoGeo: "正常URL 1:1保持＆基本構造化マークアップ",
      },
      features: [
        "被リンク・検索資産の保護：正常URLは1:1で完全保持、変更URLには自動301リダイレクト（404エラーゼロ）",
        "AI検索（GEO）ネイティブ対応：ChatGPTやPerplexityが認識しやすいクリーンなHTML5構造",
        "Core Web Vitals 90+基準：グローバルCDN配信によりGoogleのクロール効率を最大化",
        "PHP脆弱性・改ざんの根本遮断（静的配信のため攻撃可能なPHPサーバーが存在しません）",
        "悪意あるスクリプトや不要データベースの自動クレンジング",
        "成果物は貴社Gitリポジトリへ納品・自社アカウント運用（サーバー代月額$0〜）",
        "公開後30日間の無償瑕疵修正保証付き",
      ],
      deliverables: [
        "プレビュー検証環境の提供",
        "全件301リダイレクト照合レポート",
        "ダウンタイムゼロのDNS切り替え計画書・ロールバック手順",
        "CMS操作マニュアル・引き渡しドキュメント",
      ],
    },
    {
      id: "business",
      name: "ビジネスリニューアル (Business)",
      price: 3490,
      priceDisplay: "$3,490",
      description: "主力推奨プラン。デザインの完全刷新、直感的なヘッドレスCMS、企業向けSEOメタ＆JSON-LD知識グラフ、そしてAI検索（GEO）最適化を網羅した本格リニューアル。",
      timeline: "4〜6 週間",
      highlight: true,
      scope: {
        pages: "カスタム設計ページ 30ページまで",
        posts: "記事・導入事例・リソース 500件まで",
        templates: "モジュール別テンプレート 6パターン",
        languages: "単一言語（1言語）",
        forms: "サーバーレス問い合わせ・商談フォーム 2点まで",
        seoGeo: "不適切な旧URLの正規化整理 ＋ JSON-LD知識グラフ",
        integrations: "外部ツール連携 1点（CRM / メルマガ / 計測等）",
      },
      features: [
        "高度なSEO＆GEOアーキテクチャ：既存検索順位の完全継承 ＋ JSON-LD知識グラフ（企業・サービス・FAQ）",
        "AI検索エンジン（GEO）最適化：30以上のプラグインタグ冗長性を排除し、PerplexityやChatGPTの引用精度を向上",
        "旧URL構造の最適化・301スマートマッピング：冗長な日付階層やパラメータURL（`/?p=xxx`）をクリーンな短縮URLへ再構築し、グローバルCDN 301で評価を完全継承",
        "PHPサーバー脆弱性・プラグイン改ざんの物理的根絶（Astro/Next.js）",
        "構造化コンテンツ設計（導入事例・製品一覧・コラム等）とモダンデザイン刷新",
        "直感的に更新できるヘッドレスCMS管理画面の導入",
        "公開後30日間の無償瑕疵修正保証付き",
      ],
      deliverables: [
        "プレビューステージング環境（2回の修正フィードバック対応）",
        "全履歴URLを網羅した301リダイレクト完全照合レポート",
        "Cloudflare Pages / Vercel / AWSへの本番デプロイ",
        "管理画面レクチャー動画および運用マニュアル",
      ],
    },
    {
      id: "enterprise",
      name: "エンタープライズ＆ヘッドレスEC構築",
      price: 6900,
      priceDisplay: "$6,900",
      description: "高トラフィックのWooCommerce / B2C ECサイトや多言語メディア向け。商品カタログと決済処理をヘッドレスに分離し、決済情報スキミング（Magecart）を物理的に根絶。セール時のアクセス集中耐性とGoogleショッピング・AI購買検索（GEO）最適化を両立します。",
      timeline: "6〜8 週間",
      highlight: false,
      scope: {
        pages: "カスタム設計LP・固定ページ 60ページまで",
        posts: "商品・記事 2,500点まで（バリエーション・属性・過去注文履歴）",
        templates: "EC・メディア向け 8パターン（商品一覧・詳細PDP・カート・決済等）",
        languages: "2言語まで対応（厳密なhreflang・多言語ルーティング設計）",
        forms: "フォーム一式 ＋ Stripe / Shopify ヘッドレス決済連携",
        seoGeo: "商品構造化データ＆多言語hreflangルーティング",
        integrations: "ヘッドレス決済 ＋ グローバルCDN高速商品検索 ＋ 在庫/CRM/メルマガ同期",
      },
      features: [
        "EC向けSEO＆GEO購買最適化：Product・Offer・レビュー構造化データを標準実装し、GoogleショッピングやAI導線で優位に",
        "ヘッドレスEC現代アーキテクチャ：商品カタログのCDN秒速表示によりセール時のアクセス集中によるサーバー停止ゼロ",
        "Magecart決済スキミングの物理的排除（PCI-DSS準拠のトークン化決済・サーバー非保持）",
        "商品データ、多属性バリエーション、在庫SKU、過去注文履歴の完全移行",
        "ECルーティング最適化：商品URL・カテゴリ・多言語hreflangの正規化と301リダイレクトによる検索資産の完全継承",
        "ミリ秒単位で絞り込めるグローバルCDN高速商品検索・ファセットフィルター",
        "公開後30日間の無償瑕疵＆決済導線保証付き",
      ],
      deliverables: [
        "ヘッドレスECステージング環境（本番相当の決済サンドボックス検証完了）",
        "全商品・カテゴリの301リダイレクト完全照合レポート",
        "ダウンタイムゼロのDNS切り替え手順書（移行時のカート停止・注文同期手順付き）",
        "納品時レクチャー動画および商品・受注運用マニュアル",
      ],
    },
  ],
};

export function getPricingTiers(lang: Lang = 'en'): PricingTier[] {
  return pricingTiersByLang[lang] || pricingTiersByLang['en'];
}

export const siteConfig = {
  brandName: "SiteCarry",
  domain: "sitecarry.com",
  canonicalUrl: "https://sitecarry.com",
  defaultLanguage: "en",
  supportedLanguages: [
    { code: "en", label: "English", flag: "US / EN", path: "/" },
    { code: "ja", label: "日本語", flag: "JP", path: "/ja/" },
    { code: "zh-tw", label: "繁體中文", flag: "TW", path: "/zh-tw/" },
  ],
  tagline: "WordPress Migration & Website Rebuilds",
  slogan: "Move your website forward. Keep what matters.",
  contactEmail: "hello@sitecarry.com",
  timezones: "UTC+8 / UTC-7 / UTC+9 coverage",
  reviewPriceUSD: 149,

  pricingTiers: pricingTiersByLang['en'],

  carePlans: [
    {
      id: "care",
      name: "Care Maintenance",
      monthlyFee: 79,
      monthlyFeeDisplay: "$79",
      description: "Proactive uptime alerts, build monitoring, and automated safety checks for quiet peace of mind.",
      features: [
        "24/7 uptime & DNS latency monitoring",
        "Automated build failure alerts & instant diagnostics",
        "Monthly repository & dependency security scan",
        "Backup verification & restore drill report",
      ],
    },
    {
      id: "care-plus",
      name: "Care Plus",
      monthlyFee: 199,
      monthlyFeeDisplay: "$199",
      description: "All Care monitoring features plus dedicated monthly development hours for copy updates and layout tweaks.",
      features: [
        "All Care plan monitoring & security checks",
        "2 hours of developer changes every month (copy, assets, minor tweaks)",
        "Quarterly SEO health & Core Web Vitals report",
        "Priority email turnaround (within 1 business day)",
      ],
    },
  ] as CarePlan[],

  addOns: [
    {
      item: "Additional page (reusing existing template)",
      priceRange: "$80 – $150",
      unit: "per page",
      note: "Customer provides final text and media assets",
    },
    {
      item: "New standalone page template",
      priceRange: "$300 – $600",
      unit: "per template",
      note: "Includes custom responsive design & component assembly",
    },
    {
      item: "Additional 100 posts (same schema)",
      priceRange: "$200 – $400",
      unit: "per 100 posts",
      note: "Bulk extraction, format cleanup, and media relocation",
    },
    {
      item: "E-Commerce catalog migration (per 500 SKUs)",
      priceRange: "$300 – $600",
      unit: "per 500 SKUs",
      note: "Variations, images, custom taxonomy & metadata extraction",
    },
    {
      item: "Decoupled payment gateway integration",
      priceRange: "$500 – $1,200",
      unit: "per gateway",
      note: "Stripe Elements, Shopify Storefront, PayPal, or localized payment provider",
    },
    {
      item: "Additional language branch",
      priceRange: "+25% – 40%",
      unit: "of base build cost",
      note: "Hreflang routing & UI dictionary; client provides translated copy",
    },
    {
      item: "Standard third-party integration",
      priceRange: "$250 – $600",
      unit: "per integration",
      note: "e.g., HubSpot, Mailchimp, Calendly, Zapier webhook",
    },
  ] as AddOn[],
};
