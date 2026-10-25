export type Lang = 'en' | 'ja' | 'zh-tw';

export const translations = {
  en: {
    nav: {
      services: "Services",
      migration: "Migration",
      rebuild: "Rebuild",
      pricing: "Pricing",
      process: "Process",
      work: "Work",
      about: "About",
      astroPage: "WordPress to Astro",
      nextjsPage: "WordPress to Next.js",
      guides: "Guides",
      getEstimate: "Get an Estimate",
    },
    hero: {
      title: "Transform WordPress & PHP Sites into Fast, Secure Astro / Next.js Websites.",
      subtitle: "In the AI era, permanently end public PHP vulnerabilities and repeat malware. We decouple your frontend into edge static code with zero public PHP runtimes or exposed databases. Sub-second speed, $0/mo hosting, and 100% legacy SEO retention.",
      inputPlaceholder: "Enter your website URL (e.g. https://yourcompany.com)",
      ctaPrimary: "Get Free Site Assessment & Plan",
      ctaSecondary: "View 3 Fixed-Price Packages",
      trust1: "100% Free Technical Inquiry",
      trust2: "Full URL Audit & Fixed-Price Scope",
      trust3: "No Server Passwords Required",
    },
    frameworks: {
      title: "Decoupled Target Frameworks",
      subtitle: "Engineered modern architectures tailored to your content scale, traffic patterns, and operational team.",
      astro: {
        title: "WordPress to Astro",
        desc: "Pure static pre-rendering, 100/100 Core Web Vitals, sub-second edge response, and $0/mo hosting overhead.",
        cta: "Explore Astro Spec",
      },
      nextjs: {
        title: "WordPress to Next.js",
        desc: "React App Router, dynamic server components, custom user portals, and headless CMS integration.",
        cta: "Explore Next.js Spec",
      },
      php: {
        title: "Legacy PHP Overhaul",
        desc: "Decommission aging PHP 5.x/7.x and custom backends, eliminate host EOL alerts, and retire unpatched databases.",
        cta: "Explore PHP Migration",
      },
      audit: {
        title: "PHP Version Checker",
        desc: "Instant live HTTP header inspection against active CVE vulnerabilities and end-of-life runtimes.",
        cta: "Run Free Audit",
      },
    },
    architecturePillars: {
      title: "Core Advantages of Migrating from WordPress & PHP to Modern Static Architecture",
      subtitle: "Moving from vulnerable dynamic servers to Astro or Next.js permanently solves malware exploits, high hosting bills, broken links, and search visibility.",
      items: [
        {
          title: "Permanently End PHP Runtime Flaws, WordPress Core & Plugin Exploits",
          desc: "In the AI era, automated hacker bots scan public dynamic servers 24/7. The root problem goes far deeper than third-party plugins: aging PHP runtime flaws (such as CVE-2024-4577 remote code execution and end-of-life unpatched runtimes) and WordPress core REST API endpoints are constantly probed. A single vulnerability results in injected webshells, hidden gambling links, or Chrome red-screen blacklisting. Antivirus plugins fail because dynamic PHP and public databases remain exposed. Rebuilding into pure static architecture completely eliminates the PHP runtime and database from your public server—leaving automated bots zero attack surface.",
        },
        {
          title: "SEO & GEO Friendly: Native Architecture for Google and AI Search Engines",
          desc: "Eliminate bloated code from 30+ plugins. Output pure semantic HTML5 natively embedded with Schema (JSON-LD) knowledge graphs. This not only speeds up Google crawl indexing and preserves historical authority, but enables modern AI engines like ChatGPT, Perplexity, and Google AI Overviews to accurately understand, cite, and recommend your products.",
        },
        {
          title: "Zero-Risk Link Equity Retention: Print Brochures, Client Bookmarks & Google Ranks Never Break",
          desc: "Many businesses delay redesigns out of fear that changing URLs will wipe out years of Google authority or break links printed on physical brochures and spec sheets. We audit your entire historical route topology: healthy URLs are preserved 1:1, while malformed legacy paths (like /?p=123 or bloated date directories) are cleanly normalized with permanent CDN edge 301 redirects—guaranteeing 100% backlink equity transfer and zero 404 errors.",
        },
        {
          title: "No PHP Server Needed: Eliminate Expensive WordPress Hosting Monthly Bills",
          desc: "Traditional WordPress requires high-spec VPS or managed hosting to handle heavy dynamic database queries, costing hundreds of dollars each month in hosting fees and plugin licenses. Decoupled static sites deploy directly to global edge networks (like Cloudflare Pages), loading in under 1 second worldwide with generous free tiers that reduce monthly hosting bills to near $0.",
        },
      ],
    },
    solutions: {
      title: "Keep what matters. Modernize everything else.",
      subtitle: "We don't sell throwaway redesigns. We extract your content, clean your code, safeguard your customer data, and deploy modern frontends with seamless editorial management.",
      cards: [
        {
          title: "Lightning Static Delivery",
          desc: "Pages pre-rendered into pure HTML/CSS delivered via global CDN edge nodes (Cloudflare/Vercel). Sub-second load times and 95+ Core Web Vitals.",
        },
        {
          title: "Zero Database Exploitation Risk",
          desc: "No public PHP interpreter, no exposed MySQL ports, no live plugin runtimes on the live domain. Customer inquiries bypass on-server databases securely.",
        },
        {
          title: "Strict 1:1 URL Parity & 301 Rules",
          desc: "Every single page, article, and resource URL is documented. Legacy addresses are maintained or permanently mapped so your links and rankings stay intact.",
        },
        {
          title: "Your Choice of Editing Workflow",
          desc: "Keep WordPress exclusively as a private Headless editor, or switch to lightweight modern CMS / Markdown options. Your team stays in control.",
        },
      ],
    },
    testimonials: {
      title: "Verified Client Experiences",
      subtitle: "Feedback from businesses that migrated away from vulnerable legacy WordPress setups.",
      items: [
        {
          quote: "Our WordPress site was infected with thousands of hidden spam gambling links that triggered Google Search Console warnings. After three failed cleanups with standard plugins, SiteCarry rebuilt the entire site into static Astro. Every single technical datasheet and old product link stayed intact. Load time dropped to 0.8s, and we haven't had a single security alert since.",
          author: "David H.",
          role: "Operations Director",
          company: "Industrial Automation Systems (USA)",
        },
        {
          quote: "Six years of editorial archives across 400+ articles were bogging down our server. Page loads were 7 seconds and major WordPress core updates routinely broke custom templates. SiteCarry migrated everything into a clean static architecture with 1:1 URL parity. Our Google PageSpeed jumped from 35 to 98, and our mobile bounce rate decreased immediately.",
          author: "Kenji S.",
          role: "Editor-in-Chief",
          company: "Enterprise Technology Insights (Tokyo, Japan)",
        },
        {
          quote: "We avoided redesigning for years because hundreds of product URLs were already printed on physical trade show brochures and partner price sheets. SiteCarry mapped every single legacy path flawlessly. Contact forms now deliver encrypted submissions straight to our CRM, eliminating the worry of on-server database breaches.",
          author: "Mark Lin",
          role: "IT & Systems Manager",
          company: "Global Sourcing & Trading Corp (Taiwan)",
        },
      ],
    },
    reviewBanner: {
      title: "Need clarity before committing to a full rebuild?",
      desc: "Our $149 Migration Review delivers a complete URL inventory, plugin audit, risk checklist, and architectural proposal in 3–5 business days. 100% credited toward your build when you sign within 30 days.",
      cta: "Pay $149 Online & Start Review",
    },
    pricingSection: {
      title: "Fixed-Price Rebuild Packages. Native SEO & GEO Optimization.",
      subtitle: "Permanently end WordPress vulnerabilities and expensive PHP server bills. Every package includes 1:1 legacy URL mapping (zero 404 broken links), Google Core Web Vitals 90+ speed, and structured Schema knowledge graphs for ChatGPT & Perplexity citations. No surprise hourly billing.",
      viewFullPricing: "View Full Pricing & Add-on Rates",
      mostPopular: "Most Popular",
      timelineLabel: "Typical Timeline",
      startProject: "Request Free Assessment with",
      from: "From",
      scopePages: "Pages / Views",
      scopePosts: "Articles / Products",
      scopeTemplates: "Templates",
      scopeLanguages: "Languages",
      scopeForms: "Forms / Checkout",
      scopeSeoGeo: "SEO & GEO Scope",
      inquiryNoteTitle: "How Consultation Works:",
      inquiryNoteDesc: "SiteCarry is an engineering consultancy. All packages begin with a free site crawl & scope review. No payment or credit card required upfront.",
      whatsIncluded: "What's Included",
      sharedInclusionsTitle: "Standard Inclusions in Every SiteCarry Contract",
      sharedInclusions: [
        {
          title: "Link Equity Protection & 301 Rules",
          desc: "Healthy URLs preserved 1:1; malformed legacy paths normalized with permanent 301 redirects so zero backlinks or rankings are lost.",
        },
        {
          title: "Full Client Ownership",
          desc: "Code deposited in client's Git repository. Deployed to client's CDN account.",
        },
        {
          title: "Zero-Downtime Cutover",
          desc: "DNS migration protocol with immediate rollback safeguards prepared.",
        },
        {
          title: "30-Day Defect Warranty",
          desc: "Guaranteed defect resolution covering all agreed project specifications.",
        },
      ],
    },
    processSection: {
      title: "A planned, zero-surprise launch workflow.",
      subtitle: "We follow a disciplined engineering protocol from day one to launch day, ensuring your live business is never disrupted.",
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "My site was hacked or injected with hidden spam links. Can this migration clean it completely?",
          a: "Yes. In traditional WordPress, malware often reinfects files via hidden backdoors or database injections. During our migration, we do not copy contaminated server files. We crawl and extract legitimate content (text, images, author metadata) through isolated data pipelines, scrubbing all malicious script injections and hidden spam outbound links before generating clean, pure static code.",
        },
        {
          q: "Do you guarantee that my previous Google rankings will bounce back after a rebuild?",
          a: "We believe in complete professional honesty: For healthy, unpenalized websites, our strict 1:1 URL parity and canonical replication guarantees zero migration loss. However, if a website has already been severely hacked, blacklisted, or penalized by Google, no ethical engineer can guarantee an overnight rank recovery. What we deliver is vital triage: we completely halt security hemorrhaging, purge malicious links, implement proper 410 Gone headers for hacker-generated spam URLs, and build a sub-second, clean foundation so Google can re-evaluate and regain trust in your domain.",
        },
        {
          q: "Without an on-server database, how do customer inquiries and contact forms work securely?",
          a: "Instead of storing sensitive customer inquiries, names, and emails in an exposed, hackable MySQL database on your public web server, forms are routed through secure, serverless API endpoints (such as Postmark, Resend, or your private CRM/webhook). Data is encrypted in transit and delivered directly to your authorized email or internal database. There is simply no public database on the web server for attackers to dump or access.",
        },
        {
          q: "Will our product PDF manuals, datasheets, and historical image URLs break?",
          a: "No. All static media assets—including product catalogs, whitepapers, spec sheets, and high-resolution images—are cataloged and migrated to match their exact original paths (e.g., /wp-content/uploads/2021/04/datasheet.pdf). Existing bookmarks, customer downloads, and external references continue to work seamlessly.",
        },
        {
          q: "How does clean static code benefit traditional SEO and new AI search engines (GEO)?",
          a: "Traditional dynamic sites generate heavy HTML code filled with thousands of unnecessary plugin wrapper tags. A decoupled static site delivers pure semantic HTML5 with microdata and JSON-LD schema. For Google, this drastically reduces crawl latency and maximizes your crawl budget. For modern AI search engines (such as ChatGPT, Perplexity, and Google AI Overviews), clean structured markup allows AI bots to parse your company services and product specifications accurately without parsing errors.",
        },
        {
          q: "How will my team publish new content or edit pages after the migration?",
          a: "We configure an editing workflow tailored to your team's comfort level. If your content team loves the familiar WordPress dashboard, we can retain WordPress strictly as a private, password-protected Headless CMS behind a private domain. Alternatively, if you wish to eliminate PHP maintenance entirely, we configure intuitive, modern Git-based visual editors (such as Keystatic or Decap) that allow seamless drafting and publishing with zero server overhead.",
        },
        {
          q: "Who pays for the ongoing hosting?",
          a: "You retain 100% ownership. We set up the deployment on your own accounts (e.g., Cloudflare Pages, Vercel, or AWS). For most small-to-medium business sites, hosting on Cloudflare Pages is $0/month on the generous free tier, slashing your previous server bills.",
        },
        {
          q: "Do you support WooCommerce stores, membership sites, and e-commerce portals?",
          a: "Yes, absolutely—and B2C transactional websites are often the ones in the most urgent need of modern decoupled architecture. Traditional WooCommerce sites on dynamic PHP are frequent targets for checkout skimmers (Magecart attacks that steal customer credit card details) and database leaks of customer shipping addresses. Furthermore, PHP server latency during ad traffic spikes causes heavy cart abandonment. We migrate e-commerce sites to modern decoupled architectures (such as Next.js Commerce): product catalogs load instantaneously via global edge static pre-rendering, while checkout is routed through secure, PCI-compliant hosted gateways (like Stripe Checkout or Shopify Storefront). Your live web server never stores sensitive payment data, hackers cannot inject checkout skimmers, and your site handles massive flash-sale traffic spikes without crashing.",
        },
      ],
    },
    ctaFooter: {
      title: "Ready to protect your website and eliminate vulnerabilities?",
      subtitle: "Share your existing site URL and tell us about your goals. We'll reply promptly with practical recommendations and honest timeline estimates.",
      btnPrimary: "View Packages & Book Online",
      btnSecondary: "Request Free Site Assessment",
      emailNote: "Prefer direct email? Send your website details to",
    },
    footer: {
      about: "SiteCarry specializes in WordPress migration, legacy dynamic website rebuilds, and decoupled static modernization for businesses in the US, Europe, Japan, and Taiwan.",
      servicesCol: "Services",
      companyCol: "Company",
      legalCol: "Legal & Standards",
      rights: "All rights reserved. SiteCarry. Built for reliability.",
    },
  },

  ja: {
    nav: {
      services: "サービス",
      migration: "サイト移行",
      rebuild: "リニューアル",
      pricing: "料金プラン",
      process: "制作の流れ",
      work: "移行実績・事例",
      about: "私たちについて",
      astroPage: "WordPress to Astro",
      nextjsPage: "WordPress to Next.js",
      guides: "技術ガイド",
      getEstimate: "お見積り相談",
    },
    hero: {
      title: "WordPress・PHPサイトを、安全で現代的なAstro / Next.jsサイトへ改造・移行。",
      subtitle: "AI時代におけるPHP脆弱性と繰り返す改ざん被害を根本遮断。公開サーバーからPHP実行環境とDBを物理的に排除し、自動化攻撃を完全無力化。執筆フローと検索順位を100%維持しながら、秒未満の高速表示とサーバー代$0運用を実現します。",
      inputPlaceholder: "現行サイトのURLを入力（例: https://yourcompany.com）",
      ctaPrimary: "無料サイト診断・お見積りを依頼",
      ctaSecondary: "3つの固定価格パッケージを見る",
      trust1: "完全無料の技術診断相談",
      trust2: "URL精査・確定見積書を提示",
      trust3: "サーバーパスワードの提出不要",
    },
    frameworks: {
      title: "移行先モダンアーキテクチャ",
      subtitle: "コンテンツ規模、アクセス傾向、社内運用体制に合わせて最適な静的構成をご提案します。",
      astro: {
        title: "WordPress to Astro",
        desc: "完全静的プリレンダリング、Core Web Vitals満点、0.8秒以内の高速表示、月額$0ホスティング運用。",
        cta: "Astro移行仕様を見る",
      },
      nextjs: {
        title: "WordPress to Next.js",
        desc: "React App Router対応、動的サーバーコンポーネント、独自ポータル開発、柔軟なHeadless連携。",
        cta: "Next.js移行仕様を見る",
      },
      php: {
        title: "旧型PHPサイト刷新",
        desc: "PHP 5.x/7.xや独自CMSを完全退役、サーバー停止勧告の解消、老朽化データベースの完全撤去。",
        cta: "PHP移行仕様を見る",
      },
      audit: {
        title: "PHPバージョン診断",
        desc: "WebサイトのHTTPヘッダーを瞬時に解析し、現在晒されているCVE脆弱性とEOL状況をチェック。",
        cta: "無料診断を実行する",
      },
    },
    architecturePillars: {
      title: "成長企業が従来のWordPress・PHPから現代の静的構成へ移行する4つの核心的メリット",
      subtitle: "脆弱な動的サーバーから純静的エッジ構成へ移行し、改ざん被害・高額なサーバー代・リンク切れ・AI検索対応の課題を根本解決します。",
      items: [
        {
          title: "PHPランタイム・WordPress本体・プラグイン脆弱性の完全排除",
          desc: "AI時代において、自動化された攻撃スクリプトは世界中の動的サーバーを24時間スキャンしています。脆弱性の根本原因はプラグインだけに留まらず、老朽化したPHPランタイム自体の欠陥（CVE-2024-4577等のRCEやEOL終了）およびWordPress本体のAPIエンドポイントにも存在します。動的PHPとデータベースが公開されている限り、対症療法としてのウイルス駆除を行っても再感染を繰り返します。純静的アーキテクチャへ再構築することで、公開サーバーからPHP実行環境とデータベースを完全に排除し、改ざん・スパム埋め込みを根本から遮断します。",
        },
        {
          title: "SEO・GEO（AI検索）ネイティブ対応：Google評価とAIからの推薦を両立",
          desc: "30個以上のプラグインによる肥大化したコードを一掃。Schema（JSON-LD）構造化データを標準実装した純粋なHTML5を出力します。Googleのクロール効率を高めて順位評価を守るだけでなく、ChatGPT、Perplexity、Google AI Overviewsなどの最新AI検索エンジンが貴社の製品情報を正確に認識し、回答として引用・推薦できるようにします。",
        },
        {
          title: "検索評価・被リンクの完全継承：紙の製品カタログ、名刺QRコード、既存顧客のリンクを完全保護",
          desc: "多くの企業がリニューアルをためらう最大の理由は、過去の製品URLが無効化し、紙のカタログや展示会パンフレット、名刺に印刷されたURLがリンク切れ（404エラー）になる恐怖です。当社は現行サイトの全URLを網羅的に精査：正常なURLは1:1で維持し、不適切な旧URL（/?p=123や冗長な日付階層）はCDNエッジで301恒久リダイレクトを設定することで、被リンク評価を100%引き継ぎ、リンク切れを完全に防止します。",
        },
        {
          title: "PHPサーバー不要：毎月高額なWordPress専用サーバー・保守費用をゼロへ",
          desc: "従来のWordPressは重いデータベース処理のために高スペックなVPSや専用サーバーが必要で、毎月数万円単位のサーバー代や保守費用がかかり続けていました。純静的WebはCloudflare Pages等のグローバルエッジCDNへ直接配置されるため、世界各地から1秒未満で表示され、手厚い無料枠により月額サーバー費用をほぼ$0へ圧縮できます。",
        },
      ],
    },
    solutions: {
      title: "価値ある資産を守り、土台を刷新する。",
      subtitle: "単なる見た目だけのデザイン変更ではありません。これまで積み上げたSEO評価や記事データを丁寧に移行し、AstroやNext.jsを活用した高速・安全な現代的構成へ導きます。",
      cards: [
        {
          title: "世界水準の高速静的配信",
          desc: "Cloudflare等のエッジネットワークから瞬時にHTMLを配信。Core Web Vitals 95点以上の高速表示を実現し、離脱率を大幅に改善します。",
        },
        {
          title: "公開データベース侵害リスクのゼロ化",
          desc: "公開サーバー上で動くPHPやデータベースが存在しないため、CMSやサーバーを狙った不正アクセスや顧客データ流出リスクを根本から排除できます。",
        },
        {
          title: "徹底したURL保持・301リダイレクト",
          desc: "既存ページのURL構造を精査し、可能な限り同一URLを維持。変更が必要な場合は厳密な301恒久転送を設定し、SEO評価の毀損を防ぎます。",
        },
        {
          title: "自社に適した更新管理環境の選択",
          desc: "WordPressを非公開の管理画面として残す「Headless構成」や、直感的で軽量なGit CMSなど、お客様の運用体制に最適な更新環境をご提案します。",
        },
      ],
    },
    testimonials: {
      title: "クライアントの実績・評価",
      subtitle: "老朽化したWordPressから移行し、セキュリティ不安と表示遅延から解放された企業の声。",
      items: [
        {
          quote: "当社のWordPressサイトに大量の不正な外部誘導リンクが埋め込まれ、Google Search Consoleから警告を受けました。他社で複数回ウイルス駆除をしても再発していましたが、SiteCarryに依頼してAstro静的構成へ完全移行。数百点のPDF図面や旧URLがそのまま残り、表示速度も0.8秒に。以来、警告は一度も出ていません。",
          author: "David H.",
          role: "オペレーションディレクター",
          company: "産業用オートメーション機器メーカー（米国）",
        },
        {
          quote: "6年間蓄積した400記事以上の専門コラムがありましたが、プラグイン過多で表示に7秒以上かかり、WordPressのコア更新のたびに画面が崩れていました。SiteCarryはすべての記事URLを1:1で狂いなく静的化してくれ、PageSpeedは35点から98点へと劇的に改善。スマホの離脱率も目に見えて下がりました。",
          author: "Kenji S.",
          role: "編集長",
          company: "ビジネスIT情報メディア（日本・東京）",
        },
        {
          quote: "紙の製品カタログや名刺に記載された数百ものURLが無効になるのが怖く、長年リニューアルを躊躇していました。SiteCarryは画像や資料のパスまで完璧に一致させてくれました。問い合わせフォームも暗号化されて直接メールへ届くため、データベース流出の心配がなくなり安心しています。",
          author: "林 氏",
          role: "ITマネージャー",
          company: "国際貿易商社（台湾）",
        },
      ],
    },
    reviewBanner: {
      title: "本格的な移行を決める前に、リスクと範囲を精査しませんか？",
      desc: "$149の「詳細診断レビュー」では、全URLリスト、プラグイン監査、移行リスク、推奨設計書を3〜5営業日で作成。30日以内に本契約をいただいた場合は診断費用を全額工事費に充当いたします。",
      cta: "$149をオンライン決済して診断開始",
    },
    pricingSection: {
      title: "明朗な固定価格パッケージ。既存SEO順位の完全継承とAI検索（GEO）最適化。",
      subtitle: "PHPサーバーの脆弱性や高額な保守費用を根本から解決。全プランに1:1の旧URL完全保持（404リンク切れゼロ）、Core Web Vitals 90+の高速化、ChatGPTやPerplexityに引用されやすい構造化データを標準提供。追加工数の請求はありません。",
      viewFullPricing: "料金表とオプション一覧を見る",
      mostPopular: "推奨プラン",
      timelineLabel: "標準工期目安",
      startProject: "このプランで無料相談する",
      from: "〜",
      scopePages: "固定・LPページ",
      scopePosts: "商品・記事数",
      scopeTemplates: "テンプレート",
      scopeLanguages: "対応言語数",
      scopeForms: "決済・フォーム",
      scopeSeoGeo: "SEO・AI検索(GEO)",
      inquiryNoteTitle: "ご相談・契約の流れ：",
      inquiryNoteDesc: "当社は技術コンサルティングサービスです。オンライン決済による即時課金は行いません。まずは現行URLの無料診断を行い、確定した見積書に合意いただいた上で着手いたします。",
      whatsIncluded: "パッケージ内容",
      sharedInclusionsTitle: "SiteCarryの全契約における標準提供保証",
      sharedInclusions: [
        {
          title: "被リンク資産保護＆301正規化",
          desc: "正常なURLは1:1で維持し、不適切な旧URLは恒久301リダイレクトで正規化。検索順位と外部被リンクを損ないません。",
        },
        {
          title: "成果物の完全な自社帰属",
          desc: "ソースコードはお客様のGitリポジトリへ納品。CDNも自社アカウントで直接運用。",
        },
        {
          title: "ダウンタイムゼロの移行",
          desc: "ロールバック手順を整備したDNS切り替えプロトコルにより業務停止を防止。",
        },
        {
          title: "30日間の無償瑕疵保証",
          desc: "合意した仕様に基づく不具合に対し、公開後30日間の無償修正を保証。",
        },
      ],
    },
    processSection: {
      title: "綿密な手順設計で、業務の中断をゼロに。",
      subtitle: "事前のURL・アセット精査から本番DNS切り替えまで、徹底したエンジニアリング手順により現行業務への影響を回避します。",
    },
    faq: {
      title: "よくあるご質問",
      items: [
        {
          q: "過去にハッキングされ、不正なスパムリンクが埋め込まれたサイトも完全に綺麗にできますか？",
          a: "はい、可能です。従来のWordPressではバックドアが残存して再発しがちですが、当社の移行では汚染されたサーバーファイルをそのままコピーすることはいたしません。隔離された安全な環境で正当な記事本文や画像データのみを抽出し、不正な埋め込みスクリプトや隠しリンクを完全に除去した上でクリーンな静的HTMLを生成します。",
        },
        {
          q: "リニューアルを行えば、過去に落ちてしまった検索順位は元通り回復しますか？",
          a: "私たちは技術者として誠実にお答えします。未感染で正常なサイトであれば、1:1のURL保持と構造維持により順位低下は発生しません。しかし、過去に悪質な改ざんを受けてGoogleからペナルティや警告を受けたサイトについて、誰であっても「即時の順位回復」を保証することはできません。当社ができる確実な支援は、出血を完全に止め、410 Gone処理によって不正なゴミURLのクローラー消費を食い止め、Googleが再度信頼できる清潔な土台を作り直すことです。",
        },
        {
          q: "データベースが存在しない場合、問い合わせフォームの送信内容は安全に届きますか？",
          a: "公開サーバー上の無防備なMySQLに顧客情報を保存する代わりに、サーバーレスAPI（PostmarkやResend、CRM連携など）を通じて安全に暗号化され、ご指定のメールアドレスや社内ツールへ直接送信されます。サーバー上に公開データベースが存在しないため、第三者にデータを抜き取られるリスクが構造的になくなります。",
        },
        {
          q: "製品のPDFカタログや技術仕様書、画像のURLも壊れずに移行できますか？",
          a: "はい、すべて1:1で保持されます。製品マニュアル、仕様書PDF、写真などの静的アセットは、従来のパス（例：/wp-content/uploads/2021/04/manual.pdf）と完全に同一のURL構造で静的ホスティングへ配置されます。既存のブックマークや印刷物のリンクも正常に機能し続けます。",
        },
        {
          q: "クリーンな静的コードは、SEOや最新のAI検索（GEO）にどのように寄与しますか？",
          a: "不要なプラグインが出力する大量のゴミタグを排除し、純粋なHTML5とSchema（JSON-LD）構造化データを実装します。これによりGoogleのクローラーの巡回効率（Crawl Budget）が大幅に向上するだけでなく、ChatGPTやPerplexityなどのAI検索エンジンが貴社の製品情報を正確に認識・引用できるようにします。",
        },
        {
          q: "リニューアル後のブログ投稿や新着情報の更新はどのように行いますか？",
          a: "お客様の運用体制に合わせた最適な更新フローを構築します。これまで通りWordPressの管理画面に慣れ親しんだチームであれば、WordPressを非公開の「Headless CMS」として裏側でのみ運用可能です。また、PHPサーバーの保守を完全に無くしたい場合は、直感的に操作できるモダンなGit CMSをご用意します。",
        },
        {
          q: "移行後のサーバー月額費用は誰が支払いますか？",
          a: "すべてお客様ご自身のクラウド管理アカウント（Cloudflare Pagesなど）へ納品されます。中小規模の一般的な企業サイトであれば、Cloudflare Pagesの無料利用枠で十分に収まるため、月額サーバー費用をほぼ$0へ圧縮できます。",
        },
        {
          q: "WooCommerceなどのECサイト、会員制ポータル、決済を伴うサイトも対応可能ですか？",
          a: "はい、完全に対応可能です。むしろB2CのECサイトこそ、静的解耦（Decoupled）アーキテクチャによるセキュリティと速度向上が最も切実に求められています。従来の動的PHPによるWooCommerceは、決済画面への不正スクリプト埋め込み（クレジットカード情報搾取のMagecart攻撃）や顧客の配送先データの流出リスクに常に晒されています。さらに、広告出稿時のアクセス集中によるサーバーダウンや表示遅延は致命的なカゴ落ちを招きます。当社はこれらをNext.js Commerce等のモダン構成へ移行：商品一覧や詳細はCDNから瞬時に秒速表示しつつ、決済はStripe Checkout等の最高水準PCI-DSS準拠ゲートウェイへ安全に切り離します。サーバー側にクレジットカード情報が一切残らないため改ざんリスクを排除でき、急激なアクセス急増時も安定稼働を維持します。",
        },
      ],
    },
    ctaFooter: {
      title: "老朽化したサイトを、安全で高速な資産へ刷新しませんか？",
      subtitle: "現在お持ちのWebサイトのURLとご要望をお知らせください。技術的な所見と現実的な工期・お見積もり目安を速やかにご返信いたします。",
      btnPrimary: "料金プランを確認・オンラインで着手予約",
      btnSecondary: "無料サイト診断・お見積りを依頼",
      emailNote: "メールでのご相談も直接承ります：",
    },
    footer: {
      about: "SiteCarryは、日本・米国・欧州・台湾の企業に向け、WordPressの安全な移行、旧型動的サイトの再構築、静的モダン化を提供するエンジニアリングスタジオです。",
      servicesCol: "サービス一覧",
      companyCol: "会社概要",
      legalCol: "規約・ガイドライン",
      rights: "All rights reserved. SiteCarry. 堅牢なWeb基盤をお届けします。",
    },
  },

  'zh-tw': {
    nav: {
      services: "服務項目",
      migration: "老站移轉",
      rebuild: "現代化改版",
      pricing: "收費方案",
      process: "交付流程",
      work: "移轉實績",
      about: "關於我們",
      astroPage: "WordPress 至 Astro",
      nextjsPage: "WordPress 至 Next.js",
      guides: "技術指南",
      getEstimate: "取得報價評估",
    },
    hero: {
      title: "將 WordPress、PHP 網站，改造成安全、現代的 Astro / Next.js 網站。",
      subtitle: "在 AI 時代，徹底終結公網 PHP 漏洞與反覆被黑。公網物理剔除 PHP 執行環境與動態資料庫，讓黑客攻擊無從下手；完整保留發文習慣與歷史 SEO 權重，全球秒開，每月主機費降為 $0。",
      inputPlaceholder: "請輸入現有網站網址（例如 https://yourcompany.com）",
      ctaPrimary: "免費獲取網站診斷與方案",
      ctaSecondary: "查看 3 大固定價格方案",
      trust1: "100% 免費技術詢盤評估",
      trust2: "出具完整 URL 清冊與固定報價",
      trust3: "無需提供伺服器密碼",
    },
    frameworks: {
      title: "移轉目標現代架構",
      subtitle: "根據您的內容規模、流量結構與團隊維護習慣，提供最適切的純靜態解耦架構。",
      astro: {
        title: "WordPress 至 Astro",
        desc: "純靜態預先渲染，Core Web Vitals 滿分，0.8 秒秒開，每月 $0 伺服器託管成本。",
        cta: "查看 Astro 移轉規格",
      },
      nextjs: {
        title: "WordPress 至 Next.js",
        desc: "React App Router 架構，支援動態伺服器元件、專屬會員入口與無頭 CMS 整合。",
        cta: "查看 Next.js 移轉規格",
      },
      php: {
        title: "老舊 PHP 架構翻新",
        desc: "徹底退役陳舊的 PHP 5.x/7.x 與自研後台，消除主機商停機警告，移除未修補資料庫。",
        cta: "查看 PHP 移轉規格",
      },
      audit: {
        title: "PHP 版本與資安診斷",
        desc: "即時檢測網站 HTTP 標頭，清查當前暴露的 CVE 漏洞與過期 PHP 運行環境。",
        cta: "進行免費檢測",
      },
    },
    architecturePillars: {
      title: "為什麼成長型企業要將老舊 WordPress / PHP 升級為純靜態架構？",
      subtitle: "從傳統動態伺服器移轉至 Astro 或 Next.js，徹底根治長年困擾企業的外掛漏洞、被黑焦慮、高額主機費與舊網址失效難題。",
      items: [
        {
          title: "徹底終結 PHP 底層、WordPress 核心與外掛漏洞（告別反覆掛馬）",
          desc: "在 AI 時代，黑客的自動化攻擊腳本 24 小時無休止掃描全球公網。問題往往不只在第三方外掛，更在於老舊 PHP 運行環境本身（如 CVE-2024-4577 遠端代碼執行、EOL 終止維護）以及 WordPress 核心的 REST API 與資料庫漏洞。傳統 WordPress 網站只要稍有一處未修補，整台伺服器就會被植入 Webshell、暗藏幾千條博彩暗鏈或被 Google 標記紅標封殺。普通「殺毒外掛」根本無法根治，因為動態 PHP 與資料庫依然暴露在公網。重構為純靜態架構後，公網伺服器壓根沒有 PHP 解釋器與資料庫，黑客自動化腳本無從發起攻擊，徹底終結反覆被黑的惡夢。",
        },
        {
          title: "SEO 與 GEO 友好：原生適配 Google 與新一代 AI 搜尋引擎",
          desc: "徹底拋棄三十多個臃腫外掛生成的垃圾代碼。輸出標準語意化 HTML5 並自動內嵌 Schema（JSON-LD）知識圖譜。這不僅大幅降低 Google 爬蟲抓取延遲、完整繼承原有搜尋權重，更能讓潛在客戶在 ChatGPT、Perplexity、Google AI Overviews 等新一代 AI 工具查找產業資訊時，精準讀懂、引用並推薦貴公司的產品與業務。",
        },
        {
          title: "歷史權重無損繼承：紙本型錄、名片 QR Code 與老客戶連結一個都不壞",
          desc: "許多企業多年不敢改版，最怕幾百個產品網址全廢、印在展會型錄與名片上的連結全變 404 死鏈。我們在切換前全面審查舊站路由：健康網址 1:1 嚴格對齊，而針對 WordPress 常見的畸形路徑（如 /?p=123、冗長日期目錄），則提供標準化短路徑清洗並在全域 CDN 配置永久 301 重定向，既掃除歷史技術債，又確保 Google 權重與歷史外鏈 100% 無損傳遞。",
        },
        {
          title: "不需要 PHP 伺服器，省下每個月昂貴的 WordPress 主機月租",
          desc: "傳統 WordPress 為了支撐龐大的資料庫動態查詢，必須租用高規格的 VPS 或昂貴的託管主機，每年光伺服器月租與外掛授權費就要數萬元。純靜態網站直接部署在 Cloudflare Pages 等全球 CDN 雲端網路上，全球秒開，且享有充裕的免費額度，直接將每月昂貴的主機月租降至接近 $0，也不再需要每個月花錢找人打補丁維護。",
        },
      ],
    },
    solutions: {
      title: "保全核心資產，徹底現代化其餘一切",
      subtitle: "我們不賣拋棄式的外觀改版。我們完整保留您的歷史內容與排名資產，升級為極速、安全且管理順暢的現代純靜態架構。",
      cards: [
        {
          title: "全球頂級靜態分發",
          desc: "透過全球 300+ CDN 雲端節點即時分發預先渲染的純 HTML/CSS。實現 95 分以上的 Core Web Vitals，大幅提升訪客留存率。",
        },
        {
          title: "徹底杜絕資料庫攻擊隱患",
          desc: "公開前端完全沒有運作中的 PHP 或 MySQL 端口，客戶提交的表單直接經過安全端對端加密通道投遞，前台無庫可盜。",
        },
        {
          title: "嚴格 1:1 網址對齊與 301 映射",
          desc: "清查全站每篇既有文章、分頁與分類網址，確保路徑一致；若有結構調整則配置永久 301 轉址，保障累積多年的搜尋引擎權重與外鏈。",
        },
        {
          title: "貼合團隊習慣的後台發布流程",
          desc: "可選擇保留 WordPress 作為純後台（Headless 架構），亦可遷移至零伺服器維護成本的現代 Git CMS，文章編輯輕鬆順暢。",
        },
      ],
    },
    testimonials: {
      title: "真實客戶回饋與實績",
      subtitle: "告別資安焦慮與卡頓困擾的企業真實移轉回饋。",
      items: [
        {
          quote: "去年我們網站被黑客塞入大量隱形的博彩外鏈，收到 Google Search Console 的懲罰警告。找人清理了三次還是反覆復發。SiteCarry 團隊把全站改成 Astro 純靜態，數百份產品 PDF 與原網址完全一模一樣保留。現在開啟不到 1 秒，再也沒收到任何資安警報，終於能安心睡覺了。",
          author: "David H.",
          role: "營運總監",
          company: "工業自動化設備製造商（美國）",
        },
        {
          quote: "我們累積了 6 年、400 多篇深度產業報導，外掛堆了 30 多個，開啟要 7 秒以上，每次 WordPress 核心升級都會崩掉幾個頁面。SiteCarry 幫我們 1:1 遷移為極速靜態架構，網址完全沒變，Google PageSpeed 從 35 分直接跳到 98 分，手機端跳出率顯著下降。",
          author: "Kenji S.",
          role: "總編輯",
          company: "商業科技產業智庫媒體（日本東京）",
        },
        {
          quote: "以前最擔心改版會把印在實體產品型錄與名片上的幾百個網址搞廢，一直不敢動。SiteCarry 的 1:1 網址映射做得極為精準，連型錄 PDF 檔路徑都完全對得上。而且表單直接加密傳送到指定信箱，前台公網不再掛著資料庫，徹底解決了客戶資料外洩的顧慮。",
          author: "林經理",
          role: "資訊主管",
          company: "跨國採購貿易企業（台灣）",
        },
      ],
    },
    reviewBanner: {
      title: "在決定全面改版前，先徹底掌握全站架構與風險？",
      desc: "USD $149「深度遷移診斷」為您完整爬梳所有 URL、外掛依賴、風險清單與專屬架構建議書，3–5 個工作天交付。簽約委託改版者，診斷費全額折抵工程款。",
      cta: "線上支付 $149 立即啟動審查",
    },
    pricingSection: {
      title: "固定總價方案。原生保全 SEO 排名與 AI 搜尋（GEO）優勢。",
      subtitle: "徹底終結 PHP 伺服器漏洞掛馬與昂貴主機月租。全方案皆包含 1:1 舊站網址精確對齊（零 404 死鏈）、Google 測速 90+ 爬取提速，並原生內嵌 Schema 知識圖譜供 ChatGPT 與 Perplexity 引用。絕無工時灌水追加。",
      viewFullPricing: "查看完整方案與增項費率",
      mostPopular: "主推推薦",
      timelineLabel: "標準工作時程",
      startProject: "以此方案評估諮詢（免費）",
      from: "起",
      scopePages: "頁面與版型",
      scopePosts: "商品與文章",
      scopeTemplates: "模組版型",
      scopeLanguages: "支援語系",
      scopeForms: "結帳與表單",
      scopeSeoGeo: "SEO 與 GEO 保全",
      inquiryNoteTitle: "詢盤與簽約流程承諾：",
      inquiryNoteDesc: "我們並非線上扣款商城。每個老網站的 URL 數量、資料庫狀況與功能各異。請先提交網址進行免費技術評估，雙方確認固定總價與交付範疇後再簽約開工。",
      whatsIncluded: "本方案包含交付項目",
      sharedInclusionsTitle: "SiteCarry 全專案標準交付保證",
      sharedInclusions: [
        {
          title: "外鏈權重保全與 301 智能規範化",
          desc: "正常網址 1:1 原樣保留，畸形舊路徑智能配置 301 永久重定向，確保 Google 權重與歷史外鏈 0 損失。",
        },
        {
          title: "客戶 100% 程式碼自主所有權",
          desc: "原始碼交付至客戶指定 Git 儲存庫，部署至客戶自有名下 CDN 帳戶。",
        },
        {
          title: "零停機平滑切換上線",
          desc: "完整 DNS 切換方案與緊急復原回滾清單，業務與訂單不中斷。",
        },
        {
          title: "30 天交付瑕疵保固承諾",
          desc: "合約範疇內之功能瑕疵，上線後 30 天內享有工程團隊免費修復。",
        },
      ],
    },
    processSection: {
      title: "嚴謹工程化把關，確保營運不中斷。",
      subtitle: "從初期的資產盤點到正式上線的 DNS 切換，我們依循嚴謹的交付標準，讓您的業務順利交接。",
    },
    faq: {
      title: "常見問題",
      items: [
        {
          q: "我的網站曾經被黑客塞入大量垃圾外鏈，重構能徹底清理乾淨嗎？",
          a: "完全可以。傳統 WordPress 網站因為木馬後門常藏匿於深層目錄或資料庫中，普通殺毒很容易復發。而在我們的重構工程中，絕不盲目複製原本污染的伺服器檔案，而是在隔離沙箱中透過專用管線提取乾淨的文章正文、產品資料與圖片，徹底篩除所有惡意腳本與隱形外鏈，重新生成乾淨純粹的靜態網頁。",
        },
        {
          q: "重構後能保證我以前的 Google 搜尋排名恢復嗎？",
          a: "我們堅持給予客戶最誠實的專業回答：對於未受污染的正常站點，我們透過嚴格的 1:1 網址保留與 Canonical 繼承，確保改版零流量損失。但對於已經被黑客深度篡改、甚至遭到 Google 降權或警告的受損站點，任何工程師都無法保證排名立刻反彈。我們能做到的是立即止血、清除垃圾外鏈、配置 410 Gone 徹底清除黑客生成的死鏈，為搜尋引擎重新建立信任打好最乾淨的底子。",
        },
        {
          q: "純靜態網站沒有資料庫，客戶提交的詢盤表單怎麼安全接收？",
          a: "不同於傳統將客戶資料明文存放在容易被黑的伺服器 MySQL 資料庫中，我們的表單採用現代無伺服器加密通道（如 Postmark、Resend 或直接推送到您私有的 CRM / 企業信箱）。資料在傳輸過程中全程加密，公網伺服器上壓根沒有資料庫，黑客完全無庫可盜。",
        },
        {
          q: "我們原本的產品 PDF 型錄、規格書和舊圖片路徑會失效嗎？",
          a: "絕不失效。所有靜態資源檔案（包括 PDF 型錄、技術說明書、產品圖片）皆會全量抓取，並維持與原站完全一致的路徑存放（例如 /wp-content/uploads/2021/04/datasheet.pdf）。老客戶的瀏覽器書籤、外部合作方的引用連結依然暢通無阻。",
        },
        {
          q: "乾淨的靜態程式碼對傳統 SEO 和現代 AI 搜尋（GEO）有何好處？",
          a: "傳統動態網站往往伴隨大量外掛生成的垃圾標籤與臃腫程式碼。解耦後的純靜態網站輸出標準語意化 HTML5，並自動內嵌 Schema 結構化實體標記（JSON-LD）。對 Google 而言，大幅降低了抓取延遲與伺服器消耗；對 ChatGPT、Perplexity 等新一代 AI 搜尋而言，乾淨的結構使 AI 能更精準讀懂並引用貴公司的產品與業務資訊。",
        },
        {
          q: "改版上線之後，公司的編輯或行銷人員該如何發布新文章？",
          a: "我們會根據貴團隊的維護習慣配置最舒適的編輯方案。若團隊習慣 WordPress 的操作介面，可將 WordPress 保留為非公開、受密碼保護的純後台（Headless CMS）；若希望徹底免除 PHP 伺服器的維護心力，我們可配置直覺的現代 Git CMS（如 Keystatic），一般人員皆能在半小時內輕鬆上手發布。",
        },
        {
          q: "改版上線後的每個月主機託管費由誰支付？",
          a: "所有專案皆部署至客戶自有的帳戶（例如 Cloudflare Pages 或 Vercel）。對於一般中小企業展示站，Cloudflare Pages 的免費額度非常充裕，幾乎可將您原先每個月昂貴的 WordPress 主機費用降至 $0。",
        },
        {
          q: "你們是否支援 WooCommerce 電商購物、會員專區或交易型網站？",
          a: "完全支援，而且 2C 交易型電商網站恰恰是資安與速度最迫切需要的領域！傳統基於動態 PHP 的 WooCommerce 站點是黑客最垂涎的目標：黑客常在外掛中植入惡意腳本暗中盜刷顧客信用卡（Magecart 側錄攻擊），或整庫竊取顧客收件地址與訂單資料；且遇到大促或投放廣告流量突增時，動態 PHP 伺服器極易卡死導致訂單大量流失。我們將電商網站升級為現代解耦架構（如 Next.js Commerce）：所有商品目錄與詳情頁透過全球 300+ CDN 雲端節點極速秒開，大幅提高結帳轉化率；結帳環節則直接對接 Stripe Checkout 等通過最高等級 PCI-DSS 安全認證的託管通道。公網伺服器完全不碰、不存信用卡敏感數據，黑客根本無法側錄盜刷，面對高並發流量依然穩如泰山。",
        },
      ],
    },
    ctaFooter: {
      title: "準備好擺脫資安隱患，讓網站穩健升級了嗎？",
      subtitle: "請提供您現有的網站網址與主要改版需求。我們將認真檢視並儘速回覆具體建議與客製時程評估。",
      btnPrimary: "線上選購方案 · 支付定金開工",
      btnSecondary: "免費填表 · 取得架構評估",
      emailNote: "不想填寫表單？亦可直接寄信至",
    },
    footer: {
      about: "SiteCarry 專注於為美國、歐洲、日本與台灣企業，提供安全可靠的 WordPress 老站移轉、架構重構與靜態現代化服務。",
      servicesCol: "核心服務",
      companyCol: "關於我們",
      legalCol: "條款與隱私",
      rights: "All rights reserved. SiteCarry. 專業平穩的網站現代化基石。",
    },
  },
} as const;
