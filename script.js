// ===========================
// Kairos.ai — iTech / AI Rebar Estimation
// ===========================

const translations = {
    en: {
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.products': 'Products',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'hero.title1': 'AI Rebar Estimation',
        'hero.title2': 'Built for Construction',
        'hero.subtitle': 'Kairos.ai builds iTech — an end-to-end AI system that turns construction drawings into accurate rebar estimates and bar-bending schedules, replacing slow, error-prone manual takeoff across the AEC industry.',
        'hero.cta1': 'Explore iTech',
        'hero.cta2': 'Talk to Us',
        'services.title': 'AI Systems & Engineering Services',
        'services.subtitle': 'Beyond our products, Kairos.ai designs custom AI systems, backend infrastructure, and data platforms — the same engineering depth behind iTech.',
        'services.ai.title': 'AI Systems Design',
        'services.ai.desc': 'Custom AI solutions tailored to your business needs. We design intelligent systems that learn, adapt, and deliver measurable results.',
        'services.backend.title': 'Backend Systems',
        'services.backend.desc': 'Robust, scalable backend infrastructure that powers your applications. Built for performance, security, and reliability.',
        'services.apps.title': 'AI Applications',
        'services.apps.desc': 'Innovative AI-powered applications that transform user experiences and drive engagement. From concept to deployment.',
        'services.data.title': 'Data Analysis',
        'services.data.desc': 'Transform raw data into actionable insights. Our advanced analytics solutions help you make data-driven decisions with confidence.',
        'about.title': 'Why Choose Kairos.ai?',
        'about.intro': 'At Kairos.ai, we bring applied AI to the construction industry. Our flagship system, iTech, automates rebar estimation for AEC teams — and we build custom AI systems, backend infrastructure, and data platforms with the same engineering rigor.',
        'about.desc': 'We are dedicated to creating solutions that don\'t just save time, but unlock new possibilities for our users and customers.',
        'about.feature1': 'Cutting-edge AI technology',
        'about.feature2': 'Human-centered design approach',
        'about.feature3': 'Proven track record of success',
        'about.feature4': 'Dedicated support and partnership',
        'about.experienceTitle': 'Industry Experience',
        'about.experienceDesc': 'Our team pairs deep AI engineering with real AEC domain knowledge — reading structural drawings to produce accurate rebar quantities and bar-bending schedules that estimators and fabricators can trust.',
        'about.stat1': 'Faster Implementation',
        'about.stat2': 'Client Satisfaction',
        'about.stat3': 'Support Available',
        'contact.title': 'Let\'s Work Together',
        'contact.subtitle': 'Ready to unlock new possibilities? Get in touch with us today.',
        'contact.form.name': 'Your Name',
        'contact.form.email': 'Your Email',
        'contact.form.company': 'Company Name',
        'contact.form.message': 'Tell us about your project',
        'contact.form.submit': 'Send Message',
        'contact.info.email': 'Email',
        'contact.info.workTitle': 'Work With Us',
        'contact.info.workDesc': 'We\'re always looking for exciting new projects and partnerships.',
        'footer.tagline': 'Making every moment count',
        'footer.company': 'Company',
        'footer.about': 'About',
        'footer.services': 'Services',
        'footer.contact': 'Contact',
        'footer.servicesTitle': 'Services',
        'footer.aiSystems': 'AI Systems',
        'footer.backend': 'Backend Development',
        'footer.aiApps': 'AI Applications',
        'footer.dataAnalysis': 'Data Analysis',
        'footer.connect': 'Connect',
        'footer.linkedin': 'LinkedIn',
        'footer.github': 'GitHub',
        'footer.copyright': '© 2025 Kairos.ai. All rights reserved.',
        'products.title': 'Our Products',
        'products.subtitle': 'Applied AI for the construction industry',
        'products.itech.title': 'iTech',
        'products.itech.badge': 'B2B',
        'products.itech.tagline': 'AI Rebar Estimation for AEC',
        'products.itech.desc': 'An end-to-end AI system that turns construction drawings into accurate rebar estimates and bar-bending schedules — replacing slow, error-prone manual takeoff across the AEC industry.',
        'products.itech.feature1': 'AI Estimation',
        'products.itech.feature2': 'Rebar Takeoff',
        'products.itech.feature3': 'AEC',
        'products.itech.cta': 'Learn More',
        'products.itech.aria': 'iTech — AI Rebar Estimation for AEC',
        'nav.story': 'Our Story',
        'story.title': 'Applied AI, Built With Purpose',
        'story.subtitle': "Who we are, why we started, and where we're headed.",
        'story.passion.title': 'Our Passion',
        'story.passion.desc': 'We believe AI should solve real, tangible problems — not just impressive demos. Our passion is bringing engineering rigor to industries the tech world often overlooks, starting with construction.',
        'story.origin.title': 'How We Started',
        'story.origin.desc': "Kairos.ai began as a small team obsessed with a simple idea: use AI to give people back their time. That search led us deep into manufacturing and construction workflows, where we kept finding the same bottleneck — slow, error-prone manual rebar takeoff. So we built iTech to fix it.",
        'story.goal.title': "Where We're Headed",
        'story.goal.desc': 'We want iTech to become the standard way AEC teams estimate rebar — and to keep building AI systems, backend infrastructure, and data platforms with the same rigor for teams who need it.',
        'story.services.label': 'What We Do',
        'products.itech.spec1Label': 'Input',
        'products.itech.spec1Value': 'Construction drawings — DWG or PDF',
        'products.itech.spec2Label': 'Output',
        'products.itech.spec2Value': 'Rebar takeoff + bar-bending schedule, exportable as CSV/Excel',
        'products.itech.spec3Label': 'Pipeline',
        'products.itech.spec3Value': 'Upload → AI detection → estimate & schedule',
        'products.itechAr.badge': 'In Development',
        'products.itechAr.title': 'iTech AR',
        'products.itechAr.desc': 'A camera-based AR view for the job site — point a phone or tablet at the structure and see the AI-detected rebar layout overlaid on the physical bars in real time, for fast on-site verification against the drawing.',
        'products.itechAr.feature1': 'Real-time AR overlay of detected rebar and bar-bending schedule onto the camera view',
        'products.itechAr.feature2': 'Flags discrepancies between the physical site and the drawing',
        'products.itechAr.feature3': 'Offline capture mode for sites without reliable connectivity',
        'products.itechAr.feature4': 'Exportable on-site verification report',
    },
    'zh-TW': {
        'nav.home': '首頁',
        'nav.services': '服務項目',
        'nav.products': '產品',
        'nav.about': '關於我們',
        'nav.contact': '聯絡我們',
        'hero.title1': 'AI 鋼筋估算',
        'hero.title2': '為營建而生',
        'hero.subtitle': '優時科技打造 iTech — 端到端的 AI 系統，將施工圖自動轉換為精準的鋼筋估算與斷料彎曲表，取代營建產業耗時且易錯的人工翻樣。',
        'hero.cta1': '探索 iTech',
        'hero.cta2': '與我們聯繫',
        'services.title': 'AI 系統與工程服務',
        'services.subtitle': '除了自有產品，優時科技也打造客製 AI 系統、後端架構與數據平台 — 與 iTech 同等的工程實力。',
        'services.ai.title': 'AI 系統設計',
        'services.ai.desc': '為您的業務需求量身打造的人工智慧解決方案。我們設計能夠學習、適應並提供可衡量成果的智慧系統。',
        'services.backend.title': '後端系統',
        'services.backend.desc': '強大且可擴展的後端基礎設施，為您的應用程式提供動力。專注於性能、安全性和可靠性。',
        'services.apps.title': 'AI 應用程式',
        'services.apps.desc': '創新的人工智慧應用程式，轉變用戶體驗並提高參與度。從概念到部署，全程服務。',
        'services.data.title': '數據分析',
        'services.data.desc': '將原始數據轉化為可操作的洞察。我們先進的分析解決方案幫助您充滿信心地做出數據驅動的決策。',
        'about.title': '為什麼選擇優時科技？',
        'about.intro': '優時科技（Kairos.ai）將應用 AI 帶進營建產業。旗艦系統 iTech 為 AEC 團隊自動化鋼筋估算；我們也以同等的工程實力打造客製 AI 系統、後端架構與數據平台。',
        'about.desc': '我們致力於創造不僅節省時間，更能為用戶和客戶開啟新可能性的解決方案。',
        'about.feature1': '尖端人工智慧技術',
        'about.feature2': '以人為本的設計方法',
        'about.feature3': '經過驗證的成功記錄',
        'about.feature4': '專業支援與合作夥伴關係',
        'about.experienceTitle': '產業經驗',
        'about.experienceDesc': '我們團隊結合深厚的 AI 工程能力與真實的 AEC 領域知識 — 從判讀結構施工圖，到產出估價與加工團隊可信賴的精準鋼筋數量與斷料彎曲表。',
        'about.stat1': '更快的實施速度',
        'about.stat2': '客戶滿意度',
        'about.stat3': '全天候支援',
        'contact.title': '讓我們一起合作',
        'contact.subtitle': '準備好開啟新的可能性了嗎？立即與我們聯繫。',
        'contact.form.name': '您的姓名',
        'contact.form.email': '您的電子郵件',
        'contact.form.company': '公司名稱',
        'contact.form.message': '告訴我們您的專案',
        'contact.form.submit': '發送訊息',
        'contact.info.email': '電子郵件',
        'contact.info.workTitle': '與我們合作',
        'contact.info.workDesc': '我們始終在尋找令人興奮的新專案和合作夥伴。',
        'footer.tagline': '讓每一刻都有價值',
        'footer.company': '公司',
        'footer.about': '關於',
        'footer.services': '服務',
        'footer.contact': '聯絡',
        'footer.servicesTitle': '服務項目',
        'footer.aiSystems': 'AI 系統',
        'footer.backend': '後端開發',
        'footer.aiApps': 'AI 應用程式',
        'footer.dataAnalysis': '數據分析',
        'footer.connect': '聯絡方式',
        'footer.linkedin': 'LinkedIn',
        'footer.github': 'GitHub',
        'footer.copyright': '© 2025 Kairos.ai 優時科技. 版權所有。',
        'products.title': '我們的產品',
        'products.subtitle': '為營建產業打造的應用 AI',
        'products.itech.title': 'iTech',
        'products.itech.badge': 'B2B',
        'products.itech.tagline': 'AEC 產業的 AI 鋼筋估算系統',
        'products.itech.desc': '端到端的 AI 系統，將施工圖自動轉換為精準的鋼筋估算與斷料彎曲表，取代營建產業耗時且易錯的人工翻樣。',
        'products.itech.feature1': 'AI 估算',
        'products.itech.feature2': '鋼筋翻樣',
        'products.itech.feature3': '營建業',
        'products.itech.cta': '了解更多',
        'products.itech.aria': 'iTech — AEC 產業的 AI 鋼筋估算系統',
        'nav.story': '關於我們',
        'story.title': '懷抱使命的應用 AI',
        'story.subtitle': '我們是誰、為何出發，以及我們的目標。',
        'story.passion.title': '我們的熱情',
        'story.passion.desc': '我們相信 AI 應該解決真實且具體的問題，而不只是華麗的展示。我們的熱情是將工程紀律帶進科技業常忽略的產業，從營建業開始。',
        'story.origin.title': '我們如何開始',
        'story.origin.desc': '優時科技從一個小團隊的簡單想法出發：用 AI 把時間還給人們。這份探索帶我們深入製造與營建的工作流程，一再發現同一個瓶頸——耗時且易錯的人工鋼筋翻樣。於是我們打造了 iTech 來解決它。',
        'story.goal.title': '我們的目標',
        'story.goal.desc': '我們希望 iTech 成為 AEC 團隊估算鋼筋的標準工具，並持續以同等的工程實力，為有需要的團隊打造 AI 系統、後端架構與數據平台。',
        'story.services.label': '我們提供',
        'products.itech.spec1Label': '輸入',
        'products.itech.spec1Value': '施工圖 — DWG 或 PDF',
        'products.itech.spec2Label': '輸出',
        'products.itech.spec2Value': '鋼筋估算與斷料彎曲表，可匯出 CSV/Excel',
        'products.itech.spec3Label': '流程',
        'products.itech.spec3Value': '上傳 → AI 偵測 → 估算與排程',
        'products.itechAr.badge': '開發中',
        'products.itechAr.title': 'iTech AR',
        'products.itechAr.desc': '以相機為基礎的工地 AR 檢視——用手機或平板對準結構體，即可看到 AI 偵測的鋼筋配置即時疊加在實體鋼筋上，快速進行現場對圖核對。',
        'products.itechAr.feature1': '即時將偵測到的鋼筋與斷料彎曲表以 AR 疊加於相機畫面',
        'products.itechAr.feature2': '標示現場實況與施工圖之間的差異',
        'products.itechAr.feature3': '支援離線擷取模式，適用網路不穩定的工地',
        'products.itechAr.feature4': '可匯出現場核對報告',
    },
    ja: {
        'nav.home': 'ホーム',
        'nav.services': 'サービス',
        'nav.products': '製品',
        'nav.about': '会社概要',
        'nav.contact': 'お問い合わせ',
        'hero.title1': 'AI鉄筋積算',
        'hero.title2': '建設のために',
        'hero.subtitle': 'Kairos.aiが開発する iTech — 施工図面を高精度な鉄筋積算と加工帳に自動変換するエンドツーエンドのAIシステム。AEC業界の手作業による積算の遅さとミスを解消します。',
        'hero.cta1': 'iTechを見る',
        'hero.cta2': 'お問い合わせ',
        'services.title': '私たちのサービス',
        'services.subtitle': '最先端のAIと人間中心の設計を組み合わせ、新しい可能性を切り開きます',
        'services.ai.title': 'AIシステム設計',
        'services.ai.desc': 'お客様のビジネスニーズに合わせたカスタムAIソリューション。学習し、適応し、測定可能な結果を提供するインテリジェントシステムを設計します。',
        'services.backend.title': 'バックエンドシステム',
        'services.backend.desc': 'アプリケーションを支える堅牢でスケーラブルなバックエンドインフラストラクチャ。パフォーマンス、セキュリティ、信頼性を重視して構築されています。',
        'services.apps.title': 'AIアプリケーション',
        'services.apps.desc': 'ユーザーエクスペリエンスを変革し、エンゲージメントを促進する革新的なAI搭載アプリケーション。コンセプトから展開まで。',
        'services.data.title': 'データ分析',
        'services.data.desc': '生データを実用的な洞察に変換します。当社の高度な分析ソリューションは、自信を持ってデータ駆動型の意思決定を行うのに役立ちます。',
        'about.title': 'なぜKairos.aiを選ぶのか？',
        'about.intro': 'Kairos.aiは応用AIを建設業界に届けます。旗艦システムiTechはAECチームの鉄筋積算を自動化。同じ技術力でカスタムAIシステム、バックエンド基盤、データプラットフォームも構築します。',
        'about.desc': '私たちは、単に時間を節約するだけでなく、ユーザーやお客様に新しい可能性を開くソリューションの創造に専念しています。',
        'about.feature1': '最先端のAI技術',
        'about.feature2': '人間中心の設計アプローチ',
        'about.feature3': '実証済みの成功実績',
        'about.feature4': '専任サポートとパートナーシップ',
        'about.experienceTitle': '業界経験',
        'about.experienceDesc': '当社のチームは深いAIエンジニアリングと実際のAECドメイン知識を併せ持ち、構造図面の読み取りから、積算担当者や加工業者が信頼できる正確な鉄筋数量と加工帳の生成までを担います。',
        'about.stat1': 'より速い実装',
        'about.stat2': '顧客満足度',
        'about.stat3': 'サポート対応',
        'contact.title': '一緒に働きましょう',
        'contact.subtitle': '新しい可能性を切り開く準備はできていますか？今すぐお問い合わせください。',
        'contact.form.name': 'お名前',
        'contact.form.email': 'メールアドレス',
        'contact.form.company': '会社名',
        'contact.form.message': 'プロジェクトについて教えてください',
        'contact.form.submit': 'メッセージを送信',
        'contact.info.email': 'メール',
        'contact.info.workTitle': '一緒に働く',
        'contact.info.workDesc': '私たちは常にエキサイティングな新しいプロジェクトとパートナーシップを探しています。',
        'footer.tagline': 'すべての瞬間を価値あるものに',
        'footer.company': '会社',
        'footer.about': '会社概要',
        'footer.services': 'サービス',
        'footer.contact': 'お問い合わせ',
        'footer.servicesTitle': 'サービス',
        'footer.aiSystems': 'AIシステム',
        'footer.backend': 'バックエンド開発',
        'footer.aiApps': 'AIアプリケーション',
        'footer.dataAnalysis': 'データ分析',
        'footer.connect': '連絡先',
        'footer.linkedin': 'LinkedIn',
        'footer.github': 'GitHub',
        'footer.copyright': '© 2025 Kairos.ai. All rights reserved.',
        'products.title': '製品紹介',
        'products.subtitle': '建設業界のための応用AI',
        'products.itech.title': 'iTech',
        'products.itech.badge': 'B2B',
        'products.itech.tagline': 'AEC業界向け AI鉄筋積算システム',
        'products.itech.desc': '施工図面を高精度な鉄筋積算と加工帳に自動変換するエンドツーエンドのAIシステム。AEC業界の手作業による積算の遅さとミスを解消します。',
        'products.itech.feature1': 'AI積算',
        'products.itech.feature2': '鉄筋拾い',
        'products.itech.feature3': 'AEC',
        'products.itech.cta': '詳しく見る',
        'products.itech.aria': 'iTech — AEC業界向け AI鉄筋積算システム',
        'nav.story': '私たちの物語',
        'story.title': '目的を持って築く応用AI',
        'story.subtitle': '私たちが何者で、なぜ始め、どこへ向かうのか。',
        'story.passion.title': '私たちの情熱',
        'story.passion.desc': '私たちはAIが実際の具体的な課題を解決すべきだと信じています——単なる印象的なデモではありません。テック業界が見過ごしがちな産業に、建設業を皮切りにエンジニアリングの厳密さを届けることが私たちの情熱です。',
        'story.origin.title': '私たちの始まり',
        'story.origin.desc': 'Kairos.aiは、AIで人々に時間を取り戻すというシンプルな発想に取り憑かれた小さなチームから始まりました。その探求の中で製造業と建設業の現場を深く掘り下げ、何度も同じボトルネックに突き当たりました——遅くミスの多い手作業の鉄筋積算です。そこで私たちはiTechを開発しました。',
        'story.goal.title': '私たちが目指す先',
        'story.goal.desc': 'iTechをAEC業界における鉄筋積算の標準にし、同じ厳密さでAIシステム、バックエンド基盤、データプラットフォームを必要とするチームのために構築し続けたいと考えています。',
        'story.services.label': '私たちの事業',
        'products.itech.spec1Label': '入力',
        'products.itech.spec1Value': '施工図面 — DWGまたはPDF',
        'products.itech.spec2Label': '出力',
        'products.itech.spec2Value': '鉄筋積算と配筋表、CSV/Excelで出力可能',
        'products.itech.spec3Label': 'パイプライン',
        'products.itech.spec3Value': 'アップロード → AI検出 → 積算とスケジュール作成',
        'products.itechAr.badge': '開発中',
        'products.itechAr.title': 'iTech AR',
        'products.itechAr.desc': '現場向けカメラベースのAR表示。スマートフォンやタブレットを構造物に向けると、AIが検出した鉄筋配置がリアルタイムで実物の鉄筋に重ねて表示され、現場での図面照合を迅速に行えます。',
        'products.itechAr.feature1': '検出された鉄筋と配筋表をカメラ映像にリアルタイムでARオーバーレイ表示',
        'products.itechAr.feature2': '現場の実物と図面との差異を検出・表示',
        'products.itechAr.feature3': '通信が不安定な現場向けのオフライン撮影モード',
        'products.itechAr.feature4': '現場照合レポートの出力',
    },
    es: {
        'nav.home': 'Inicio',
        'nav.services': 'Servicios',
        'nav.products': 'Productos',
        'nav.about': 'Acerca de',
        'nav.contact': 'Contacto',
        'hero.title1': 'Estimación de Acero con IA',
        'hero.title2': 'para la Construcción',
        'hero.subtitle': 'Kairos.ai desarrolla iTech, un sistema de IA integral que convierte los planos de construcción en estimaciones precisas de acero y listas de despiece, reemplazando el cálculo manual lento y propenso a errores en el sector AEC.',
        'hero.cta1': 'Explorar iTech',
        'hero.cta2': 'Contáctanos',
        'services.title': 'Nuestros Servicios',
        'services.subtitle': 'Combinamos IA de vanguardia con diseño centrado en el ser humano para desbloquear nuevas posibilidades',
        'services.ai.title': 'Diseño de Sistemas de IA',
        'services.ai.desc': 'Soluciones de IA personalizadas adaptadas a las necesidades de su negocio. Diseñamos sistemas inteligentes que aprenden, se adaptan y ofrecen resultados medibles.',
        'services.backend.title': 'Sistemas Backend',
        'services.backend.desc': 'Infraestructura backend robusta y escalable que impulsa sus aplicaciones. Construida para rendimiento, seguridad y confiabilidad.',
        'services.apps.title': 'Aplicaciones de IA',
        'services.apps.desc': 'Aplicaciones innovadoras impulsadas por IA que transforman las experiencias de los usuarios y aumentan el compromiso. Desde el concepto hasta el despliegue.',
        'services.data.title': 'Análisis de Datos',
        'services.data.desc': 'Transforme datos sin procesar en información accionable. Nuestras soluciones de análisis avanzado le ayudan a tomar decisiones basadas en datos con confianza.',
        'about.title': '¿Por qué elegir Kairos.ai?',
        'about.intro': 'En Kairos.ai llevamos la IA aplicada al sector de la construcción. Nuestro sistema insignia, iTech, automatiza la estimación de acero para equipos AEC; y construimos sistemas de IA a medida, infraestructura backend y plataformas de datos con el mismo rigor de ingeniería.',
        'about.desc': 'Nos dedicamos a crear soluciones que no solo ahorran tiempo, sino que desbloquean nuevas posibilidades para nuestros usuarios y clientes.',
        'about.feature1': 'Tecnología de IA de vanguardia',
        'about.feature2': 'Enfoque de diseño centrado en el ser humano',
        'about.feature3': 'Historial comprobado de éxito',
        'about.feature4': 'Soporte dedicado y asociación',
        'about.experienceTitle': 'Experiencia en la Industria',
        'about.experienceDesc': 'Nuestro equipo combina una sólida ingeniería de IA con conocimiento real del sector AEC: desde leer planos estructurales hasta generar cantidades de acero precisas y listas de despiece en las que estimadores y talleres pueden confiar.',
        'about.stat1': 'Implementación Más Rápida',
        'about.stat2': 'Satisfacción del Cliente',
        'about.stat3': 'Soporte Disponible',
        'contact.title': 'Trabajemos Juntos',
        'contact.subtitle': '¿Listo para desbloquear nuevas posibilidades? Póngase en contacto con nosotros hoy.',
        'contact.form.name': 'Su Nombre',
        'contact.form.email': 'Su Correo Electrónico',
        'contact.form.company': 'Nombre de la Empresa',
        'contact.form.message': 'Cuéntenos sobre su proyecto',
        'contact.form.submit': 'Enviar Mensaje',
        'contact.info.email': 'Correo Electrónico',
        'contact.info.workTitle': 'Trabaje Con Nosotros',
        'contact.info.workDesc': 'Siempre estamos buscando nuevos proyectos emocionantes y asociaciones.',
        'footer.tagline': 'Haciendo que cada momento cuente',
        'footer.company': 'Empresa',
        'footer.about': 'Acerca de',
        'footer.services': 'Servicios',
        'footer.contact': 'Contacto',
        'footer.servicesTitle': 'Servicios',
        'footer.aiSystems': 'Sistemas de IA',
        'footer.backend': 'Desarrollo Backend',
        'footer.aiApps': 'Aplicaciones de IA',
        'footer.dataAnalysis': 'Análisis de Datos',
        'footer.connect': 'Conectar',
        'footer.linkedin': 'LinkedIn',
        'footer.github': 'GitHub',
        'footer.copyright': '© 2025 Kairos.ai. Todos los derechos reservados.',
        'products.title': 'Nuestros Productos',
        'products.subtitle': 'IA aplicada para el sector de la construcción',
        'products.itech.title': 'iTech',
        'products.itech.badge': 'B2B',
        'products.itech.tagline': 'Estimación de Acero con IA para AEC',
        'products.itech.desc': 'Un sistema de IA integral que convierte los planos de construcción en estimaciones precisas de acero y listas de despiece, reemplazando el cálculo manual lento y propenso a errores en el sector AEC.',
        'products.itech.feature1': 'Estimación IA',
        'products.itech.feature2': 'Despiece de Acero',
        'products.itech.feature3': 'AEC',
        'products.itech.cta': 'Saber Más',
        'products.itech.aria': 'iTech — Estimación de Acero con IA para AEC',
        'nav.story': 'Nuestra Historia',
        'story.title': 'IA Aplicada, Construida con Propósito',
        'story.subtitle': 'Quiénes somos, por qué empezamos y hacia dónde vamos.',
        'story.passion.title': 'Nuestra Pasión',
        'story.passion.desc': 'Creemos que la IA debe resolver problemas reales y tangibles, no solo demostraciones impresionantes. Nuestra pasión es llevar rigor de ingeniería a industrias que el mundo tecnológico suele pasar por alto, empezando por la construcción.',
        'story.origin.title': 'Cómo Empezamos',
        'story.origin.desc': 'Kairos.ai comenzó como un pequeño equipo obsesionado con una idea simple: usar la IA para devolverle el tiempo a las personas. Esa búsqueda nos llevó a fondo en los flujos de trabajo de manufactura y construcción, donde encontramos una y otra vez el mismo cuello de botella: el despiece manual de armadura, lento y propenso a errores. Así que construimos iTech para resolverlo.',
        'story.goal.title': 'Hacia Dónde Vamos',
        'story.goal.desc': 'Queremos que iTech se convierta en la forma estándar en que los equipos AEC estiman armadura, y seguir construyendo sistemas de IA, infraestructura backend y plataformas de datos con el mismo rigor para los equipos que lo necesiten.',
        'story.services.label': 'Lo Que Hacemos',
        'products.itech.spec1Label': 'Entrada',
        'products.itech.spec1Value': 'Planos de construcción — DWG o PDF',
        'products.itech.spec2Label': 'Salida',
        'products.itech.spec2Value': 'Despiece de armadura y planilla de doblado, exportable a CSV/Excel',
        'products.itech.spec3Label': 'Proceso',
        'products.itech.spec3Value': 'Subir → Detección con IA → Estimación y planilla',
        'products.itechAr.badge': 'En Desarrollo',
        'products.itechAr.title': 'iTech AR',
        'products.itechAr.desc': 'Una vista de realidad aumentada basada en cámara para la obra — apunta un teléfono o tableta hacia la estructura y ve la disposición de armadura detectada por IA superpuesta en tiempo real sobre las barras físicas, para una verificación rápida en obra contra el plano.',
        'products.itechAr.feature1': 'Superposición AR en tiempo real de la armadura detectada y la planilla de doblado sobre la vista de cámara',
        'products.itechAr.feature2': 'Señala discrepancias entre la obra física y el plano',
        'products.itechAr.feature3': 'Modo de captura sin conexión para obras sin conectividad confiable',
        'products.itechAr.feature4': 'Informe de verificación en obra exportable',
    },
    it: {
        'nav.home': 'Home',
        'nav.services': 'Servizi',
        'nav.products': 'Prodotti',
        'nav.about': 'Chi Siamo',
        'nav.contact': 'Contatti',
        'hero.title1': 'Stima dei Ferri con IA',
        'hero.title2': 'per le Costruzioni',
        'hero.subtitle': 'Kairos.ai sviluppa iTech, un sistema di IA end-to-end che trasforma i disegni costruttivi in stime precise dei ferri d\'armatura e distinte di piegatura, sostituendo il computo manuale lento e soggetto a errori nel settore AEC.',
        'hero.cta1': 'Scopri iTech',
        'hero.cta2': 'Contattaci',
        'services.title': 'I Nostri Servizi',
        'services.subtitle': 'Combiniamo intelligenza artificiale all\'avanguardia con un design incentrato sull\'uomo per sbloccare nuove possibilità',
        'services.ai.title': 'Progettazione Sistemi AI',
        'services.ai.desc': 'Soluzioni AI personalizzate su misura per le esigenze della tua azienda. Progettiamo sistemi intelligenti che apprendono, si adattano e forniscono risultati misurabili.',
        'services.backend.title': 'Sistemi Backend',
        'services.backend.desc': 'Infrastruttura backend robusta e scalabile che alimenta le tue applicazioni. Costruita per prestazioni, sicurezza e affidabilità.',
        'services.apps.title': 'Applicazioni AI',
        'services.apps.desc': 'Applicazioni innovative basate sull\'AI che trasformano l\'esperienza utente e aumentano il coinvolgimento. Dal concept al deployment.',
        'services.data.title': 'Analisi dei Dati',
        'services.data.desc': 'Trasforma i dati grezzi in insight azionabili. Le nostre soluzioni di analisi avanzata ti aiutano a prendere decisioni basate sui dati con sicurezza.',
        'about.title': 'Perché Scegliere Kairos.ai?',
        'about.intro': 'In Kairos.ai portiamo l\'IA applicata al settore delle costruzioni. Il nostro sistema di punta, iTech, automatizza il computo dei ferri per i team AEC; e realizziamo sistemi AI su misura, infrastrutture backend e piattaforme dati con lo stesso rigore ingegneristico.',
        'about.desc': 'Ci dedichiamo a creare soluzioni che non solo fanno risparmiare tempo, ma sbloccano nuove possibilità per i nostri utenti e clienti.',
        'about.feature1': 'Tecnologia AI all\'avanguardia',
        'about.feature2': 'Approccio di design incentrato sull\'uomo',
        'about.feature3': 'Track record comprovato di successo',
        'about.feature4': 'Supporto dedicato e partnership',
        'about.experienceTitle': 'Esperienza nel Settore',
        'about.experienceDesc': 'Il nostro team unisce una solida ingegneria dell\'IA a una reale conoscenza del settore AEC: dalla lettura dei disegni strutturali alla generazione di quantità di ferri precise e distinte di piegatura affidabili per computisti e officine.',
        'about.stat1': 'Implementazione Più Rapida',
        'about.stat2': 'Soddisfazione del Cliente',
        'about.stat3': 'Supporto Disponibile',
        'contact.title': 'Lavoriamo Insieme',
        'contact.subtitle': 'Pronto a sbloccare nuove possibilità? Contattaci oggi stesso.',
        'contact.form.name': 'Il Tuo Nome',
        'contact.form.email': 'La Tua Email',
        'contact.form.company': 'Nome dell\'Azienda',
        'contact.form.message': 'Parlaci del tuo progetto',
        'contact.form.submit': 'Invia Messaggio',
        'contact.info.email': 'Email',
        'contact.info.workTitle': 'Lavora Con Noi',
        'contact.info.workDesc': 'Siamo sempre alla ricerca di nuovi progetti entusiasmanti e partnership.',
        'footer.tagline': 'Far contare ogni momento',
        'footer.company': 'Azienda',
        'footer.about': 'Chi Siamo',
        'footer.services': 'Servizi',
        'footer.contact': 'Contatti',
        'footer.servicesTitle': 'Servizi',
        'footer.aiSystems': 'Sistemi AI',
        'footer.backend': 'Sviluppo Backend',
        'footer.aiApps': 'Applicazioni AI',
        'footer.dataAnalysis': 'Analisi dei Dati',
        'footer.connect': 'Connettiti',
        'footer.linkedin': 'LinkedIn',
        'footer.github': 'GitHub',
        'footer.copyright': '© 2025 Kairos.ai. Tutti i diritti riservati.',
        'products.title': 'I Nostri Prodotti',
        'products.subtitle': 'IA applicata per il settore delle costruzioni',
        'products.itech.title': 'iTech',
        'products.itech.badge': 'B2B',
        'products.itech.tagline': 'Stima dei Ferri d\'Armatura con IA per l\'AEC',
        'products.itech.desc': 'Un sistema di IA end-to-end che trasforma i disegni costruttivi in stime precise dei ferri d\'armatura e distinte di piegatura, sostituendo il computo manuale lento e soggetto a errori nel settore AEC.',
        'products.itech.feature1': 'Stima IA',
        'products.itech.feature2': 'Computo Ferri',
        'products.itech.feature3': 'AEC',
        'products.itech.cta': 'Scopri di Più',
        'products.itech.aria': 'iTech — Stima dei Ferri d\'Armatura con IA per l\'AEC',
        'nav.story': 'La Nostra Storia',
        'story.title': 'IA Applicata, Costruita con Uno Scopo',
        'story.subtitle': 'Chi siamo, perché siamo partiti e dove stiamo andando.',
        'story.passion.title': 'La Nostra Passione',
        'story.passion.desc': 'Crediamo che l\'IA debba risolvere problemi reali e concreti, non solo demo d\'effetto. La nostra passione è portare rigore ingegneristico in settori spesso trascurati dal mondo tech, a partire dall\'edilizia.',
        'story.origin.title': 'Come Siamo Partiti',
        'story.origin.desc': 'Kairos.ai è nata come un piccolo team ossessionato da un\'idea semplice: usare l\'IA per restituire tempo alle persone. Questa ricerca ci ha portati a fondo nei flussi di lavoro della manifattura e dell\'edilizia, dove abbiamo trovato ripetutamente lo stesso collo di bottiglia: il computo manuale delle armature, lento e soggetto a errori. Così abbiamo costruito iTech per risolverlo.',
        'story.goal.title': 'Dove Stiamo Andando',
        'story.goal.desc': 'Vogliamo che iTech diventi il modo standard con cui i team AEC stimano le armature, e continuare a costruire sistemi IA, infrastrutture backend e piattaforme dati con lo stesso rigore per i team che ne hanno bisogno.',
        'story.services.label': 'Cosa Facciamo',
        'products.itech.spec1Label': 'Input',
        'products.itech.spec1Value': 'Disegni edili — DWG o PDF',
        'products.itech.spec2Label': 'Output',
        'products.itech.spec2Value': 'Computo armature e distinta di piegatura, esportabile in CSV/Excel',
        'products.itech.spec3Label': 'Flusso',
        'products.itech.spec3Value': 'Caricamento → Rilevamento IA → Stima e distinta',
        'products.itechAr.badge': 'In Sviluppo',
        'products.itechAr.title': 'iTech AR',
        'products.itechAr.desc': 'Una vista AR basata su fotocamera per il cantiere — inquadra la struttura con telefono o tablet e vedi la disposizione delle armature rilevate dall\'IA sovrapposta in tempo reale alle barre fisiche, per una rapida verifica in cantiere rispetto al disegno.',
        'products.itechAr.feature1': 'Sovrapposizione AR in tempo reale delle armature rilevate e della distinta di piegatura sulla fotocamera',
        'products.itechAr.feature2': 'Segnala le discrepanze tra il cantiere reale e il disegno',
        'products.itechAr.feature3': 'Modalità di acquisizione offline per cantieri senza connettività affidabile',
        'products.itechAr.feature4': 'Report di verifica in cantiere esportabile',
    },
    fr: {
        'nav.home': 'Accueil',
        'nav.services': 'Services',
        'nav.products': 'Produits',
        'nav.about': 'À Propos',
        'nav.contact': 'Contact',
        'hero.title1': 'Estimation des Armatures par IA',
        'hero.title2': 'pour la Construction',
        'hero.subtitle': 'Kairos.ai développe iTech, un système d\'IA de bout en bout qui transforme les plans de construction en estimations précises d\'armatures et en nomenclatures de façonnage, remplaçant le métré manuel lent et source d\'erreurs dans le secteur AEC.',
        'hero.cta1': 'Découvrir iTech',
        'hero.cta2': 'Contactez-nous',
        'services.title': 'Nos Services',
        'services.subtitle': 'Nous combinons une IA de pointe avec un design centré sur l\'humain pour débloquer de nouvelles possibilités',
        'services.ai.title': 'Conception de Systèmes IA',
        'services.ai.desc': 'Solutions IA personnalisées adaptées aux besoins de votre entreprise. Nous concevons des systèmes intelligents qui apprennent, s\'adaptent et fournissent des résultats mesurables.',
        'services.backend.title': 'Systèmes Backend',
        'services.backend.desc': 'Infrastructure backend robuste et évolutive qui alimente vos applications. Construite pour la performance, la sécurité et la fiabilité.',
        'services.apps.title': 'Applications IA',
        'services.apps.desc': 'Applications innovantes propulsées par l\'IA qui transforment l\'expérience utilisateur et stimulent l\'engagement. Du concept au déploiement.',
        'services.data.title': 'Analyse de Données',
        'services.data.desc': 'Transformez les données brutes en informations exploitables. Nos solutions d\'analyse avancée vous aident à prendre des décisions basées sur les données en toute confiance.',
        'about.title': 'Pourquoi Choisir Kairos.ai ?',
        'about.intro': 'Chez Kairos.ai, nous mettons l\'IA appliquée au service du secteur de la construction. Notre système phare, iTech, automatise l\'estimation des armatures pour les équipes AEC ; et nous concevons des systèmes IA sur mesure, des infrastructures backend et des plateformes de données avec la même rigueur d\'ingénierie.',
        'about.desc': 'Nous nous consacrons à créer des solutions qui ne font pas que gagner du temps, mais ouvrent de nouvelles possibilités pour nos utilisateurs et clients.',
        'about.feature1': 'Technologie IA de pointe',
        'about.feature2': 'Approche de conception centrée sur l\'humain',
        'about.feature3': 'Historique de succès prouvé',
        'about.feature4': 'Support dédié et partenariat',
        'about.experienceTitle': 'Expérience Industrielle',
        'about.experienceDesc': 'Notre équipe associe une solide ingénierie IA à une vraie connaissance du secteur AEC : de la lecture des plans de structure à la production de quantités d\'armatures précises et de nomenclatures de façonnage fiables pour les métreurs et les ateliers.',
        'about.stat1': 'Mise en Œuvre Plus Rapide',
        'about.stat2': 'Satisfaction Client',
        'about.stat3': 'Support Disponible',
        'contact.title': 'Travaillons Ensemble',
        'contact.subtitle': 'Prêt à débloquer de nouvelles possibilités ? Contactez-nous dès aujourd\'hui.',
        'contact.form.name': 'Votre Nom',
        'contact.form.email': 'Votre Email',
        'contact.form.company': 'Nom de l\'Entreprise',
        'contact.form.message': 'Parlez-nous de votre projet',
        'contact.form.submit': 'Envoyer le Message',
        'contact.info.email': 'Email',
        'contact.info.workTitle': 'Travaillez Avec Nous',
        'contact.info.workDesc': 'Nous sommes toujours à la recherche de nouveaux projets passionnants et de partenariats.',
        'footer.tagline': 'Faire compter chaque moment',
        'footer.company': 'Entreprise',
        'footer.about': 'À Propos',
        'footer.services': 'Services',
        'footer.contact': 'Contact',
        'footer.servicesTitle': 'Services',
        'footer.aiSystems': 'Systèmes IA',
        'footer.backend': 'Développement Backend',
        'footer.aiApps': 'Applications IA',
        'footer.dataAnalysis': 'Analyse de Données',
        'footer.connect': 'Connectez-vous',
        'footer.linkedin': 'LinkedIn',
        'footer.github': 'GitHub',
        'footer.copyright': '© 2025 Kairos.ai. Tous droits réservés.',
        'products.title': 'Nos Produits',
        'products.subtitle': 'IA appliquée pour le secteur de la construction',
        'products.itech.title': 'iTech',
        'products.itech.badge': 'B2B',
        'products.itech.tagline': 'Estimation des Armatures par IA pour l\'AEC',
        'products.itech.desc': 'Un système d\'IA de bout en bout qui transforme les plans de construction en estimations précises d\'armatures et en nomenclatures de façonnage, remplaçant le métré manuel lent et source d\'erreurs dans le secteur AEC.',
        'products.itech.feature1': 'Estimation IA',
        'products.itech.feature2': 'Métré Armatures',
        'products.itech.feature3': 'AEC',
        'products.itech.cta': 'En Savoir Plus',
        'products.itech.aria': 'iTech — Estimation des Armatures par IA pour l\'AEC',
        'nav.story': 'Notre Histoire',
        'story.title': 'IA Appliquée, Construite avec un But',
        'story.subtitle': 'Qui nous sommes, pourquoi nous avons commencé, et où nous allons.',
        'story.passion.title': 'Notre Passion',
        'story.passion.desc': 'Nous pensons que l\'IA doit résoudre des problèmes réels et concrets — pas seulement produire des démos impressionnantes. Notre passion est d\'apporter une rigueur d\'ingénierie à des secteurs souvent négligés par le monde de la tech, en commençant par la construction.',
        'story.origin.title': 'Comment Nous Avons Commencé',
        'story.origin.desc': 'Kairos.ai a débuté comme une petite équipe obsédée par une idée simple : utiliser l\'IA pour redonner du temps aux gens. Cette quête nous a menés au cœur des flux de travail de la fabrication et de la construction, où nous avons retrouvé le même goulot d\'étranglement : le métré manuel des armatures, lent et sujet aux erreurs. Nous avons donc conçu iTech pour le résoudre.',
        'story.goal.title': 'Où Nous Allons',
        'story.goal.desc': 'Nous voulons qu\'iTech devienne la méthode de référence pour l\'estimation des armatures par les équipes AEC, et continuer à construire des systèmes IA, des infrastructures backend et des plateformes de données avec la même rigueur pour les équipes qui en ont besoin.',
        'story.services.label': 'Ce Que Nous Faisons',
        'products.itech.spec1Label': 'Entrée',
        'products.itech.spec1Value': 'Plans de construction — DWG ou PDF',
        'products.itech.spec2Label': 'Sortie',
        'products.itech.spec2Value': 'Métré d\'armatures et plan de façonnage, exportable en CSV/Excel',
        'products.itech.spec3Label': 'Pipeline',
        'products.itech.spec3Value': 'Téléversement → Détection IA → Estimation et plan',
        'products.itechAr.badge': 'En Développement',
        'products.itechAr.title': 'iTech AR',
        'products.itechAr.desc': 'Une vue en réalité augmentée basée sur la caméra pour le chantier — pointez un téléphone ou une tablette vers la structure et voyez la disposition des armatures détectées par l\'IA superposée en temps réel aux barres physiques, pour une vérification rapide sur site par rapport au plan.',
        'products.itechAr.feature1': 'Superposition AR en temps réel des armatures détectées et du plan de façonnage sur la vue caméra',
        'products.itechAr.feature2': 'Signale les écarts entre le chantier réel et le plan',
        'products.itechAr.feature3': 'Mode de capture hors ligne pour les chantiers sans connectivité fiable',
        'products.itechAr.feature4': 'Rapport de vérification sur site exportable',
    },
    ko: {
        'nav.home': '홈',
        'nav.services': '서비스',
        'nav.products': '제품',
        'nav.about': '소개',
        'nav.contact': '문의',
        'hero.title1': 'AI 철근 산출',
        'hero.title2': '건설을 위한',
        'hero.subtitle': 'Kairos.ai가 개발한 iTech — 시공 도면을 정확한 철근 산출과 가공 목록으로 자동 변환하는 엔드투엔드 AI 시스템으로, AEC 산업의 느리고 오류가 많은 수작업 산출을 대체합니다.',
        'hero.cta1': 'iTech 살펴보기',
        'hero.cta2': '문의하기',
        'services.title': '서비스',
        'services.subtitle': '최첨단 AI와 인간 중심 디자인을 결합하여 새로운 가능성을 열어갑니다',
        'services.ai.title': 'AI 시스템 설계',
        'services.ai.desc': '비즈니스 요구에 맞춘 맞춤형 AI 솔루션. 학습하고 적응하며 측정 가능한 결과를 제공하는 지능형 시스템을 설계합니다.',
        'services.backend.title': '백엔드 시스템',
        'services.backend.desc': '애플리케이션을 구동하는 견고하고 확장 가능한 백엔드 인프라. 성능, 보안, 안정성을 위해 구축되었습니다.',
        'services.apps.title': 'AI 애플리케이션',
        'services.apps.desc': '사용자 경험을 혁신하고 참여를 촉진하는 AI 기반 혁신 애플리케이션. 컨셉부터 배포까지.',
        'services.data.title': '데이터 분석',
        'services.data.desc': '원시 데이터를 실행 가능한 인사이트로 전환합니다. 고급 분석 솔루션으로 자신감 있는 데이터 기반 의사결정을 지원합니다.',
        'about.title': '왜 Kairos.ai를 선택하나요?',
        'about.intro': 'Kairos.ai는 응용 AI를 건설 산업에 제공합니다. 대표 시스템 iTech는 AEC 팀의 철근 산출을 자동화하며, 동일한 엔지니어링 역량으로 맞춤형 AI 시스템, 백엔드 인프라, 데이터 플랫폼을 구축합니다.',
        'about.desc': '시간을 절약할 뿐만 아니라 사용자와 고객에게 새로운 가능성을 열어주는 솔루션을 만드는 데 전념합니다.',
        'about.feature1': '최첨단 AI 기술',
        'about.feature2': '인간 중심 디자인 접근법',
        'about.feature3': '검증된 성공 실적',
        'about.feature4': '전담 지원 및 파트너십',
        'about.experienceTitle': '산업 경험',
        'about.experienceDesc': '저희 팀은 깊은 AI 엔지니어링 역량과 실제 AEC 도메인 지식을 결합합니다 — 구조 도면 판독부터 견적 담당자와 가공업체가 신뢰할 수 있는 정확한 철근 수량과 가공목록 생성까지 수행합니다.',
        'about.stat1': '더 빠른 구현',
        'about.stat2': '고객 만족도',
        'about.stat3': '지원 가능',
        'contact.title': '함께 일해요',
        'contact.subtitle': '새로운 가능성을 열 준비가 되셨나요? 오늘 바로 연락주세요.',
        'contact.form.name': '이름',
        'contact.form.email': '이메일',
        'contact.form.company': '회사명',
        'contact.form.message': '프로젝트에 대해 알려주세요',
        'contact.form.submit': '메시지 보내기',
        'contact.info.email': '이메일',
        'contact.info.workTitle': '함께 일하기',
        'contact.info.workDesc': '흥미로운 새 프로젝트와 파트너십을 항상 찾고 있습니다.',
        'footer.tagline': '모든 순간을 가치있게',
        'footer.company': '회사',
        'footer.about': '소개',
        'footer.services': '서비스',
        'footer.contact': '문의',
        'footer.servicesTitle': '서비스',
        'footer.aiSystems': 'AI 시스템',
        'footer.backend': '백엔드 개발',
        'footer.aiApps': 'AI 애플리케이션',
        'footer.dataAnalysis': '데이터 분석',
        'footer.connect': '연결',
        'footer.linkedin': 'LinkedIn',
        'footer.github': 'GitHub',
        'footer.copyright': '© 2025 Kairos.ai. All rights reserved.',
        'products.title': '제품 소개',
        'products.subtitle': '건설 산업을 위한 응용 AI',
        'products.itech.title': 'iTech',
        'products.itech.badge': 'B2B',
        'products.itech.tagline': 'AEC 산업을 위한 AI 철근 산출 시스템',
        'products.itech.desc': '시공 도면을 정확한 철근 산출과 가공 목록으로 자동 변환하는 엔드투엔드 AI 시스템으로, AEC 산업의 느리고 오류가 많은 수작업 산출을 대체합니다.',
        'products.itech.feature1': 'AI 산출',
        'products.itech.feature2': '철근 물량',
        'products.itech.feature3': 'AEC',
        'products.itech.cta': '자세히 보기',
        'products.itech.aria': 'iTech — AEC 산업을 위한 AI 철근 산출 시스템',
        'nav.story': '우리의 이야기',
        'story.title': '목적을 담은 응용 AI',
        'story.subtitle': '우리가 누구인지, 왜 시작했는지, 그리고 어디로 향하는지.',
        'story.passion.title': '우리의 열정',
        'story.passion.desc': '우리는 AI가 인상적인 데모가 아니라 실제적이고 구체적인 문제를 해결해야 한다고 믿습니다. 우리의 열정은 테크 업계가 흔히 간과하는 산업에 엔지니어링의 엄격함을 가져오는 것이며, 건설업이 그 시작입니다.',
        'story.origin.title': '우리의 시작',
        'story.origin.desc': '優時科技(Kairos.ai)는 AI로 사람들에게 시간을 돌려준다는 단순한 아이디어에 몰두한 작은 팀에서 시작했습니다. 그 탐구는 제조업과 건설업의 업무 흐름 깊숙이 이어졌고, 우리는 계속해서 같은 병목을 발견했습니다 — 느리고 오류가 많은 수작업 철근 적산. 그래서 우리는 이를 해결하기 위해 iTech를 만들었습니다.',
        'story.goal.title': '우리가 향하는 곳',
        'story.goal.desc': 'iTech가 AEC 팀이 철근을 적산하는 표준적인 방법이 되기를 바라며, 필요로 하는 팀들을 위해 동일한 엄격함으로 AI 시스템, 백엔드 인프라, 데이터 플랫폼을 계속 구축하고자 합니다.',
        'story.services.label': '우리가 하는 일',
        'products.itech.spec1Label': '입력',
        'products.itech.spec1Value': '시공도면 — DWG 또는 PDF',
        'products.itech.spec2Label': '출력',
        'products.itech.spec2Value': '철근 적산 및 배근 스케줄, CSV/Excel로 내보내기 가능',
        'products.itech.spec3Label': '파이프라인',
        'products.itech.spec3Value': '업로드 → AI 감지 → 적산 및 스케줄',
        'products.itechAr.badge': '개발 중',
        'products.itechAr.title': 'iTech AR',
        'products.itechAr.desc': '현장을 위한 카메라 기반 AR 뷰 — 휴대폰이나 태블릿을 구조물에 비추면 AI가 감지한 철근 배치가 실시간으로 실제 철근 위에 겹쳐 표시되어, 도면과의 빠른 현장 대조가 가능합니다.',
        'products.itechAr.feature1': '감지된 철근과 배근 스케줄을 카메라 화면에 실시간 AR로 오버레이',
        'products.itechAr.feature2': '현장 실물과 도면 간의 차이를 표시',
        'products.itechAr.feature3': '연결이 불안정한 현장을 위한 오프라인 캡처 모드',
        'products.itechAr.feature4': '내보내기 가능한 현장 검증 리포트',
    },
    de: {
        'nav.home': 'Startseite',
        'nav.services': 'Dienstleistungen',
        'nav.products': 'Produkte',
        'nav.about': 'Über Uns',
        'nav.contact': 'Kontakt',
        'hero.title1': 'KI-Bewehrungskalkulation',
        'hero.title2': 'für das Bauwesen',
        'hero.subtitle': 'Kairos.ai entwickelt iTech — ein durchgängiges KI-System, das Baupläne in präzise Bewehrungskalkulationen und Biegelisten umwandelt und so die langsame, fehleranfällige manuelle Mengenermittlung in der AEC-Branche ersetzt.',
        'hero.cta1': 'iTech entdecken',
        'hero.cta2': 'Kontakt',
        'services.title': 'Unsere Dienstleistungen',
        'services.subtitle': 'Wir kombinieren modernste KI mit menschenzentriertem Design, um neue Möglichkeiten zu erschließen',
        'services.ai.title': 'KI-Systemdesign',
        'services.ai.desc': 'Maßgeschneiderte KI-Lösungen für Ihre Geschäftsanforderungen. Wir entwickeln intelligente Systeme, die lernen, sich anpassen und messbare Ergebnisse liefern.',
        'services.backend.title': 'Backend-Systeme',
        'services.backend.desc': 'Robuste, skalierbare Backend-Infrastruktur, die Ihre Anwendungen antreibt. Entwickelt für Leistung, Sicherheit und Zuverlässigkeit.',
        'services.apps.title': 'KI-Anwendungen',
        'services.apps.desc': 'Innovative KI-gestützte Anwendungen, die Benutzererfahrungen transformieren und Engagement fördern. Vom Konzept bis zur Bereitstellung.',
        'services.data.title': 'Datenanalyse',
        'services.data.desc': 'Verwandeln Sie Rohdaten in umsetzbare Erkenntnisse. Unsere fortschrittlichen Analyselösungen helfen Ihnen, datengestützte Entscheidungen mit Zuversicht zu treffen.',
        'about.title': 'Warum Kairos.ai Wählen?',
        'about.intro': 'Bei Kairos.ai bringen wir angewandte KI in die Baubranche. Unser Flaggschiff iTech automatisiert die Bewehrungskalkulation für AEC-Teams — und wir bauen mit derselben technischen Sorgfalt maßgeschneiderte KI-Systeme, Backend-Infrastruktur und Datenplattformen.',
        'about.desc': 'Wir widmen uns der Entwicklung von Lösungen, die nicht nur Zeit sparen, sondern neue Möglichkeiten für unsere Benutzer und Kunden erschließen.',
        'about.feature1': 'Modernste KI-Technologie',
        'about.feature2': 'Menschenzentrierter Designansatz',
        'about.feature3': 'Nachgewiesene Erfolgsbilanz',
        'about.feature4': 'Engagierter Support und Partnerschaft',
        'about.experienceTitle': 'Branchenerfahrung',
        'about.experienceDesc': 'Unser Team verbindet tiefe KI-Entwicklung mit echtem AEC-Fachwissen — vom Lesen von Statikplänen bis zur Erstellung präziser Bewehrungsmengen und Biegelisten, auf die sich Kalkulatoren und Biegebetriebe verlassen können.',
        'about.stat1': 'Schnellere Implementierung',
        'about.stat2': 'Kundenzufriedenheit',
        'about.stat3': 'Support Verfügbar',
        'contact.title': 'Lassen Sie Uns Zusammenarbeiten',
        'contact.subtitle': 'Bereit, neue Möglichkeiten zu erschließen? Kontaktieren Sie uns noch heute.',
        'contact.form.name': 'Ihr Name',
        'contact.form.email': 'Ihre E-Mail',
        'contact.form.company': 'Firmenname',
        'contact.form.message': 'Erzählen Sie uns von Ihrem Projekt',
        'contact.form.submit': 'Nachricht Senden',
        'contact.info.email': 'E-Mail',
        'contact.info.workTitle': 'Arbeiten Sie Mit Uns',
        'contact.info.workDesc': 'Wir suchen stets nach spannenden neuen Projekten und Partnerschaften.',
        'footer.tagline': 'Jeden Moment zählen lassen',
        'footer.company': 'Unternehmen',
        'footer.about': 'Über Uns',
        'footer.services': 'Dienstleistungen',
        'footer.contact': 'Kontakt',
        'footer.servicesTitle': 'Dienstleistungen',
        'footer.aiSystems': 'KI-Systeme',
        'footer.backend': 'Backend-Entwicklung',
        'footer.aiApps': 'KI-Anwendungen',
        'footer.dataAnalysis': 'Datenanalyse',
        'footer.connect': 'Verbinden',
        'footer.linkedin': 'LinkedIn',
        'footer.github': 'GitHub',
        'footer.copyright': '© 2025 Kairos.ai. Alle Rechte vorbehalten.',
        'products.title': 'Unsere Produkte',
        'products.subtitle': 'Angewandte KI für die Baubranche',
        'products.itech.title': 'iTech',
        'products.itech.badge': 'B2B',
        'products.itech.tagline': 'KI-Bewehrungskalkulation für die AEC-Branche',
        'products.itech.desc': 'Ein durchgängiges KI-System, das Baupläne in präzise Bewehrungskalkulationen und Biegelisten umwandelt und so die langsame, fehleranfällige manuelle Mengenermittlung in der AEC-Branche ersetzt.',
        'products.itech.feature1': 'KI-Kalkulation',
        'products.itech.feature2': 'Bewehrung',
        'products.itech.feature3': 'AEC',
        'products.itech.cta': 'Mehr Erfahren',
        'products.itech.aria': 'iTech — KI-Bewehrungskalkulation für die AEC-Branche',
        'nav.story': 'Unsere Geschichte',
        'story.title': 'Angewandte KI mit Zweck',
        'story.subtitle': 'Wer wir sind, warum wir angefangen haben und wohin wir wollen.',
        'story.passion.title': 'Unsere Leidenschaft',
        'story.passion.desc': 'Wir glauben, dass KI reale, greifbare Probleme lösen sollte — nicht nur beeindruckende Demos. Unsere Leidenschaft ist es, technische Sorgfalt in Branchen zu bringen, die die Tech-Welt oft übersieht, beginnend mit dem Bauwesen.',
        'story.origin.title': 'Wie Wir Angefangen Haben',
        'story.origin.desc': 'Kairos.ai begann als kleines Team, das von einer einfachen Idee besessen war: mit KI den Menschen ihre Zeit zurückzugeben. Diese Suche führte uns tief in Fertigungs- und Baubranche-Arbeitsabläufe, wo wir immer wieder auf denselben Engpass stießen — langsame, fehleranfällige manuelle Bewehrungsaufmaße. Also haben wir iTech gebaut, um das zu lösen.',
        'story.goal.title': 'Wohin Wir Wollen',
        'story.goal.desc': 'Wir wollen, dass iTech zur Standardmethode wird, mit der AEC-Teams Bewehrung schätzen — und weiterhin mit derselben Sorgfalt KI-Systeme, Backend-Infrastruktur und Datenplattformen für Teams bauen, die sie brauchen.',
        'story.services.label': 'Was Wir Tun',
        'products.itech.spec1Label': 'Eingabe',
        'products.itech.spec1Value': 'Baupläne — DWG oder PDF',
        'products.itech.spec2Label': 'Ausgabe',
        'products.itech.spec2Value': 'Bewehrungsaufmaß und Biegeliste, exportierbar als CSV/Excel',
        'products.itech.spec3Label': 'Ablauf',
        'products.itech.spec3Value': 'Hochladen → KI-Erkennung → Schätzung & Liste',
        'products.itechAr.badge': 'In Entwicklung',
        'products.itechAr.title': 'iTech AR',
        'products.itechAr.desc': 'Eine kamerabasierte AR-Ansicht für die Baustelle — richten Sie ein Telefon oder Tablet auf die Struktur und sehen Sie die KI-erkannte Bewehrungsanordnung in Echtzeit über die physischen Stäbe gelegt, für eine schnelle Vor-Ort-Prüfung gegen den Plan.',
        'products.itechAr.feature1': 'Echtzeit-AR-Überlagerung der erkannten Bewehrung und Biegeliste auf die Kameraansicht',
        'products.itechAr.feature2': 'Markiert Abweichungen zwischen Baustelle und Plan',
        'products.itechAr.feature3': 'Offline-Erfassungsmodus für Baustellen ohne zuverlässige Verbindung',
        'products.itechAr.feature4': 'Exportierbarer Vor-Ort-Prüfbericht',
    }
};

let currentLang = 'en';

const langLabels = {
    'en': 'EN',
    'zh-TW': '繁中',
    'ja': '日本',
    'es': 'ES',
    'it': 'IT',
    'fr': 'FR',
    'ko': '한국',
    'de': 'DE'
};

function setLanguage(lang) {
    currentLang = lang;

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // Update aria-label attributes
    document.querySelectorAll('[data-i18n-aria-label]').forEach(element => {
        const key = element.getAttribute('data-i18n-aria-label');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('aria-label', translations[lang][key]);
        }
    });

    // Update current language display
    const currentLangDisplay = document.getElementById('currentLang');
    if (currentLangDisplay) {
        currentLangDisplay.textContent = langLabels[lang];
    }

    // Update active language option
    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        }
    });

    // Update URL with language parameter
    const url = new URL(window.location);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url);

    // Update canonical link to self-reference the current language variant
    const canonicalLink = document.getElementById('canonicalLink');
    if (canonicalLink) {
        const baseURL = 'https://www.kairosaitech.com/';
        canonicalLink.href = (lang === 'en') ? baseURL : baseURL + '?lang=' + lang;
    }

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Save preference
    localStorage.setItem('preferredLanguage', lang);
}

// Language dropdown toggle
const langSelector = document.getElementById('langSelector');
const langDropdown = document.getElementById('langDropdown');

if (langSelector && langDropdown) {
    langSelector.addEventListener('click', (e) => {
        e.stopPropagation();
        const open = langDropdown.classList.toggle('show');
        langSelector.classList.toggle('active', open);
        langSelector.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!langSelector.contains(e.target) && !langDropdown.contains(e.target)) {
            langDropdown.classList.remove('show');
            langSelector.classList.remove('active');
            langSelector.setAttribute('aria-expanded', 'false');
        }
    });
}

// Language option selection
document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');
        setLanguage(lang);
        langDropdown.classList.remove('show');
        langSelector.classList.remove('active');
        if (langSelector) langSelector.setAttribute('aria-expanded', 'false');
    });
});

// Load language preference (prioritize URL parameter over saved preference)
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    const savedLang = localStorage.getItem('preferredLanguage');

    // Strip unknown query parameters (e.g. ?s= from WordPress search bots)
    // Only ?lang= is a valid parameter for this site
    const allowedParams = ['lang'];
    const cleanUrl = new URL(window.location);
    let hasUnknownParams = false;
    for (const key of [...cleanUrl.searchParams.keys()]) {
        if (!allowedParams.includes(key)) {
            cleanUrl.searchParams.delete(key);
            hasUnknownParams = true;
        }
    }
    if (hasUnknownParams) {
        window.history.replaceState({}, '', cleanUrl);
    }

    // Prioritize URL parameter, then saved preference, then default to 'en'
    const langToSet = (urlLang && ['zh-TW', 'en', 'ja', 'es', 'it', 'fr', 'ko', 'de'].includes(urlLang)) ? urlLang : (savedLang || 'en');
    setLanguage(langToSet);
});

// ===========================
// Extra i18n — new sections (merged into translations)
// ===========================
const extraI18n = {
    en: {
        'nav.how': 'How it works',
        'hero.badge': 'AI Rebar Estimation · AEC',
        'hero.metric1label': 'Faster takeoff',
        'hero.metric2label': 'Estimate accuracy',
        'hero.metric3label': 'Drawings parsed',
        'process.title': 'From drawing to schedule',
        'process.subtitle': 'iTech runs the full rebar takeoff pipeline — no manual counting, no spreadsheet errors.',
        'process.step1.title': 'Upload drawings',
        'process.step1.desc': 'Drop in structural drawings — PDF or CAD. iTech ingests plans, sections, and details.',
        'process.step2.title': 'AI detects rebar',
        'process.step2.desc': 'Computer-vision models read bars, sizes, spacing, and laps directly from the drawings.',
        'process.step3.title': 'Estimate & schedule',
        'process.step3.desc': 'Get accurate quantities, weights, and a bar-bending schedule ready to export.',
        'footer.tagline': 'AI rebar estimation and applied AI for the construction industry.',
        'form.sending': 'Sending…',
        'form.success': 'Thank you! Your message has been sent.',
        'form.error': 'There was an issue sending your message. Please try again.',
        'form.errorNetwork': 'Unable to send your message right now. Please try again later.'
    },
    'zh-TW': {
        'nav.how': '運作方式',
        'hero.badge': 'AI 鋼筋估算 · 營建',
        'hero.metric1label': '更快翻樣',
        'hero.metric2label': '估算準確度',
        'hero.metric3label': '已解析圖面',
        'process.title': '從圖面到斷料表',
        'process.subtitle': 'iTech 跑完整鋼筋翻樣流程 — 免人工計算、零試算表錯誤。',
        'process.step1.title': '上傳圖面',
        'process.step1.desc': '匯入結構施工圖（PDF 或 CAD），iTech 解析平面、剖面與細部。',
        'process.step2.title': 'AI 辨識鋼筋',
        'process.step2.desc': '電腦視覺模型直接從圖面讀取鋼筋號數、間距與搭接。',
        'process.step3.title': '估算與斷料',
        'process.step3.desc': '產出精準數量、重量與可匯出的鋼筋斷料彎曲表。',
        'footer.tagline': '為營建產業打造的 AI 鋼筋估算與應用 AI。',
        'form.sending': '傳送中…',
        'form.success': '感謝您！訊息已送出。',
        'form.error': '訊息送出時發生問題，請再試一次。',
        'form.errorNetwork': '目前無法送出訊息，請稍後再試。'
    },
    ja: {
        'nav.how': '仕組み',
        'hero.badge': 'AI鉄筋積算 · 建設',
        'hero.metric1label': '積算の高速化',
        'hero.metric2label': '積算精度',
        'hero.metric3label': '解析した図面',
        'process.title': '図面から加工帳まで',
        'process.subtitle': 'iTechが鉄筋積算の全工程を自動化 — 手作業の集計も表計算ミスもなし。',
        'process.step1.title': '図面をアップロード',
        'process.step1.desc': '構造図（PDF・CAD）を取り込み、iTechが平面・断面・詳細を解析。',
        'process.step2.title': 'AIが鉄筋を検出',
        'process.step2.desc': 'コンピュータビジョンが鉄筋の径・ピッチ・継手を図面から直接読み取り。',
        'process.step3.title': '積算と加工帳',
        'process.step3.desc': '正確な数量・重量と、出力可能な鉄筋加工帳を生成。',
        'footer.tagline': '建設業界のためのAI鉄筋積算と応用AI。',
        'form.sending': '送信中…',
        'form.success': 'ありがとうございます！メッセージを送信しました。',
        'form.error': '送信中に問題が発生しました。もう一度お試しください。',
        'form.errorNetwork': '現在メッセージを送信できません。後ほどお試しください。'
    },
    es: {
        'nav.how': 'Cómo funciona',
        'hero.badge': 'Estimación de Acero con IA · AEC',
        'hero.metric1label': 'Cómputo más rápido',
        'hero.metric2label': 'Precisión de estimación',
        'hero.metric3label': 'Planos procesados',
        'process.title': 'Del plano al despiece',
        'process.subtitle': 'iTech ejecuta todo el flujo de cómputo de acero — sin conteo manual ni errores de hoja de cálculo.',
        'process.step1.title': 'Sube los planos',
        'process.step1.desc': 'Carga planos estructurales (PDF o CAD); iTech procesa plantas, secciones y detalles.',
        'process.step2.title': 'La IA detecta el acero',
        'process.step2.desc': 'Modelos de visión leen barras, diámetros, separación y solapes desde los planos.',
        'process.step3.title': 'Estima y programa',
        'process.step3.desc': 'Obtén cantidades y pesos precisos y una lista de despiece lista para exportar.',
        'footer.tagline': 'Estimación de acero con IA e IA aplicada para la construcción.',
        'form.sending': 'Enviando…',
        'form.success': '¡Gracias! Tu mensaje ha sido enviado.',
        'form.error': 'Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.',
        'form.errorNetwork': 'No se puede enviar tu mensaje ahora. Inténtalo más tarde.'
    },
    it: {
        'nav.how': 'Come funziona',
        'hero.badge': 'Stima dei Ferri con IA · AEC',
        'hero.metric1label': 'Computo più rapido',
        'hero.metric2label': 'Precisione di stima',
        'hero.metric3label': 'Disegni elaborati',
        'process.title': 'Dal disegno alla distinta',
        'process.subtitle': "iTech esegue l'intero flusso di computo dei ferri — niente conteggi manuali né errori di foglio di calcolo.",
        'process.step1.title': 'Carica i disegni',
        'process.step1.desc': 'Importa i disegni strutturali (PDF o CAD); iTech elabora piante, sezioni e dettagli.',
        'process.step2.title': "L'IA rileva i ferri",
        'process.step2.desc': 'Modelli di visione leggono barre, diametri, passo e sovrapposizioni dai disegni.',
        'process.step3.title': 'Stima e distinta',
        'process.step3.desc': 'Ottieni quantità e pesi precisi e una distinta di piegatura pronta da esportare.',
        'footer.tagline': "Stima dei ferri con IA e IA applicata per le costruzioni.",
        'form.sending': 'Invio in corso…',
        'form.success': 'Grazie! Il tuo messaggio è stato inviato.',
        'form.error': "Si è verificato un problema nell'invio del messaggio. Riprova.",
        'form.errorNetwork': 'Impossibile inviare il messaggio ora. Riprova più tardi.'
    },
    fr: {
        'nav.how': 'Comment ça marche',
        'hero.badge': 'Estimation des Armatures par IA · AEC',
        'hero.metric1label': 'Métré plus rapide',
        'hero.metric2label': "Précision d'estimation",
        'hero.metric3label': 'Plans traités',
        'process.title': 'Du plan à la nomenclature',
        'process.subtitle': "iTech exécute tout le flux de métré des armatures — sans comptage manuel ni erreurs de tableur.",
        'process.step1.title': 'Importez les plans',
        'process.step1.desc': 'Chargez les plans de structure (PDF ou CAO) ; iTech traite plans, coupes et détails.',
        'process.step2.title': "L'IA détecte les armatures",
        'process.step2.desc': 'Des modèles de vision lisent barres, diamètres, espacements et recouvrements depuis les plans.',
        'process.step3.title': 'Estimez et planifiez',
        'process.step3.desc': 'Obtenez quantités et poids précis et une nomenclature de façonnage prête à exporter.',
        'footer.tagline': "Estimation des armatures par IA et IA appliquée pour la construction.",
        'form.sending': 'Envoi en cours…',
        'form.success': 'Merci ! Votre message a été envoyé.',
        'form.error': "Un problème est survenu lors de l'envoi. Veuillez réessayer.",
        'form.errorNetwork': "Impossible d'envoyer votre message pour le moment. Réessayez plus tard."
    },
    ko: {
        'nav.how': '작동 방식',
        'hero.badge': 'AI 철근 산출 · 건설',
        'hero.metric1label': '더 빠른 산출',
        'hero.metric2label': '산출 정확도',
        'hero.metric3label': '처리한 도면',
        'process.title': '도면에서 가공목록까지',
        'process.subtitle': 'iTech가 철근 산출 전 과정을 자동화 — 수작업 집계도, 스프레드시트 오류도 없습니다.',
        'process.step1.title': '도면 업로드',
        'process.step1.desc': '구조 도면(PDF·CAD)을 올리면 iTech가 평면·단면·상세를 분석합니다.',
        'process.step2.title': 'AI가 철근 인식',
        'process.step2.desc': '컴퓨터 비전이 도면에서 철근 호칭·간격·이음을 직접 읽어냅니다.',
        'process.step3.title': '산출 및 가공',
        'process.step3.desc': '정확한 수량·중량과 내보내기 가능한 철근 가공목록을 생성합니다.',
        'footer.tagline': '건설 산업을 위한 AI 철근 산출과 응용 AI.',
        'form.sending': '전송 중…',
        'form.success': '감사합니다! 메시지가 전송되었습니다.',
        'form.error': '메시지 전송 중 문제가 발생했습니다. 다시 시도해 주세요.',
        'form.errorNetwork': '지금은 메시지를 보낼 수 없습니다. 나중에 다시 시도해 주세요.'
    },
    de: {
        'nav.how': 'So funktioniert es',
        'hero.badge': 'KI-Bewehrungskalkulation · AEC',
        'hero.metric1label': 'Schnellere Kalkulation',
        'hero.metric2label': 'Kalkulationsgenauigkeit',
        'hero.metric3label': 'Verarbeitete Pläne',
        'process.title': 'Vom Plan zur Biegeliste',
        'process.subtitle': 'iTech führt den gesamten Bewehrungs-Workflow aus — ohne manuelles Zählen, ohne Tabellenfehler.',
        'process.step1.title': 'Pläne hochladen',
        'process.step1.desc': 'Lade Statikpläne (PDF oder CAD) hoch; iTech verarbeitet Grundrisse, Schnitte und Details.',
        'process.step2.title': 'KI erkennt Bewehrung',
        'process.step2.desc': 'Computer-Vision liest Stäbe, Durchmesser, Abstände und Übergreifungen direkt aus den Plänen.',
        'process.step3.title': 'Kalkulieren & planen',
        'process.step3.desc': 'Erhalte präzise Mengen und Gewichte sowie eine exportfertige Biegeliste.',
        'footer.tagline': 'KI-Bewehrungskalkulation und angewandte KI für das Bauwesen.',
        'form.sending': 'Wird gesendet…',
        'form.success': 'Danke! Ihre Nachricht wurde gesendet.',
        'form.error': 'Beim Senden Ihrer Nachricht ist ein Problem aufgetreten. Bitte erneut versuchen.',
        'form.errorNetwork': 'Ihre Nachricht kann derzeit nicht gesendet werden. Bitte später erneut versuchen.'
    }
};
if (typeof translations === 'object') {
    Object.keys(extraI18n).forEach(function (l) {
        if (translations[l]) Object.assign(translations[l], extraI18n[l]);
    });
}

// ===========================
// Utilities
// ===========================
function debounce(func, wait) {
    let t;
    return function (...args) { clearTimeout(t); t = setTimeout(() => func.apply(this, args), wait); };
}
const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ===========================
// Mobile Navigation Toggle
// ===========================
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

function setHamburger(open) {
    if (!hamburger) return;
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    const spans = hamburger.querySelectorAll('span');
    if (open) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        const open = navMenu.classList.toggle('active');
        setHamburger(open);
    });
    navLinks.forEach(link => link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        setHamburger(false);
    }));
}

// ===========================
// Navbar scroll state
// ===========================
const navbar = document.querySelector('.navbar');

// ===========================
// Smooth scroll for in-page anchors
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href.length < 2) return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.pageYOffset - 70;
        window.scrollTo({ top, behavior: prefersReduced ? 'auto' : 'smooth' });
    });
});

// ===========================
// Reveal on scroll (IntersectionObserver)
// ===========================
const revealEls = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window && !prefersReduced) {
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(el => io.observe(el));
} else {
    revealEls.forEach(el => el.classList.add('is-visible'));
}

// ===========================
// Counters
// ===========================
const counters = document.querySelectorAll('[data-count]');
function runCounter(el) {
    const target = parseFloat(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    if (prefersReduced) { el.innerHTML = target + '<span>' + suffix + '</span>'; return; }
    const dur = 1400; const start = performance.now();
    function tick(now) {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = Math.round(target * eased);
        el.innerHTML = val + '<span>' + suffix + '</span>';
        if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
}
if ('IntersectionObserver' in window) {
    const cio = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { runCounter(entry.target); cio.unobserve(entry.target); }
        });
    }, { threshold: 0.6 });
    counters.forEach(el => cio.observe(el));
} else {
    counters.forEach(runCounter);
}

// ===========================
// Active nav highlight (IntersectionObserver)
// ===========================
const sectionEls = document.querySelectorAll('section[id]');
if ('IntersectionObserver' in window) {
    const nio = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
            }
        });
    }, { threshold: 0.5 });
    sectionEls.forEach(s => nio.observe(s));
}

// ===========================
// Scroll engine: progress rail + spine draw + grid parallax
// ===========================
const root = document.documentElement;
const rail = document.querySelector('.scroll-rail');
let ticking = false;
function onScroll() {
    const scrollTop = window.pageYOffset;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const p = docH > 0 ? Math.min(scrollTop / docH, 1) : 0;
    if (rail) rail.style.setProperty('--p', p);
    root.style.setProperty('--spine-fill', (p * 100).toFixed(2) + '%');
    root.style.setProperty('--grid-shift', (-scrollTop * 0.04).toFixed(1) + 'px');
    if (navbar) navbar.classList.toggle('scrolled', scrollTop > 60);
    ticking = false;
}
window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
}, { passive: true });
onScroll();

// ===========================
// Pointer-reactive blueprint glow (desktop)
// ===========================
if (!prefersReduced && window.matchMedia('(pointer:fine)').matches) {
    window.addEventListener('mousemove', debounce((e) => {
        root.style.setProperty('--mx', (e.clientX / window.innerWidth * 100).toFixed(1) + '%');
        root.style.setProperty('--my', (e.clientY / window.innerHeight * 100).toFixed(1) + '%');
    }, 12));
}

// ===========================
// Contact Form Handling (FormSubmit)
// ===========================
const contactForm = document.getElementById('contactForm');
const submitButton = contactForm ? contactForm.querySelector('button[type="submit"]') : null;
const submitButtonDefaultText = submitButton ? submitButton.textContent : '';
// Resolve a translation key for the active language, with English then literal fallback.
function formMsg(key, fallback) {
    const dict = translations[currentLang] || translations.en || {};
    return dict[key] || translations.en?.[key] || fallback;
}
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (submitButton) { submitButton.disabled = true; submitButton.textContent = formMsg('form.sending', 'Sending…'); }
        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) { alert(formMsg('form.success', 'Thank you! Your message has been sent.')); contactForm.reset(); }
            else { alert(formMsg('form.error', 'There was an issue sending your message. Please try again.')); }
        } catch (err) {
            console.error('Error submitting form:', err);
            alert(formMsg('form.errorNetwork', 'Unable to send your message right now. Please try again later.'));
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
                // Restore the button's translated label rather than a stale snapshot.
                const restore = translations[currentLang]?.['contact.form.submit'] || submitButtonDefaultText || 'Send Message';
                submitButton.textContent = restore;
            }
        }
    });
}

// ===========================
// Loaded flag (hero entrance)
// ===========================
window.addEventListener('load', () => document.body.classList.add('loaded'));


// ============================================================================
// WebMCP — expose site tools to AI agents loading this page.
// Spec: https://webmachinelearning.github.io/webmcp/
// ============================================================================
(function initWebMCP() {
    if (typeof navigator === 'undefined' || !navigator.modelContext || typeof navigator.modelContext.provideContext !== 'function') {
        return;
    }

    const scrollToHash = function(hash) {
        const target = document.querySelector(hash);
        if (!target) return false;
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return true;
    };

    const tools = [
        {
            name: 'navigate_section',
            description: 'Scroll the Kairos.ai homepage to one of its main sections: home, story, how, product, services, about, or contact.',
            inputSchema: {
                type: 'object',
                required: ['section'],
                properties: {
                    section: {
                        type: 'string',
                        enum: ['home', 'story', 'how', 'product', 'services', 'about', 'contact'],
                        description: 'Section anchor to scroll to.'
                    }
                }
            },
            execute: async function(input) {
                const ok = scrollToHash('#' + input.section);
                return {
                    ok,
                    url: window.location.origin + window.location.pathname + '#' + input.section
                };
            }
        },
        {
            name: 'set_language',
            description: 'Switch the Kairos.ai site language. Supported: en, zh-TW, ja, es, it, fr, ko, de.',
            inputSchema: {
                type: 'object',
                required: ['lang'],
                properties: {
                    lang: {
                        type: 'string',
                        enum: ['en', 'zh-TW', 'ja', 'es', 'it', 'fr', 'ko', 'de']
                    }
                }
            },
            execute: async function(input) {
                if (typeof window.setLanguage === 'function') {
                    window.setLanguage(input.lang);
                    return { ok: true, lang: input.lang };
                }
                const url = new URL(window.location.href);
                url.searchParams.set('lang', input.lang);
                window.location.href = url.toString();
                return { ok: true, lang: input.lang, redirected: true };
            }
        },
        {
            name: 'contact_kairos',
            description: 'Populate the Kairos.ai contact form with the user\'s name, email, and message. The user still reviews and submits the form.',
            inputSchema: {
                type: 'object',
                required: ['name', 'email', 'message'],
                properties: {
                    name: { type: 'string', description: 'Full name' },
                    email: { type: 'string', format: 'email', description: 'Reply-to email' },
                    message: { type: 'string', description: 'Inquiry body' }
                }
            },
            execute: async function(input) {
                scrollToHash('#contact');
                const form = document.querySelector('#contact form, form[action*="formsubmit.co"]');
                if (!form) return { ok: false, reason: 'contact form not found' };
                const nameEl = form.querySelector('[name="name"]');
                const emailEl = form.querySelector('[name="email"]');
                const msgEl = form.querySelector('[name="message"]');
                if (nameEl) nameEl.value = input.name;
                if (emailEl) emailEl.value = input.email;
                if (msgEl) msgEl.value = input.message;
                return { ok: true, note: 'Form populated. User review and submission still required.' };
            }
        },
        {
            name: 'get_company_info',
            description: 'Return a short structured summary of Kairos.ai (company name, tagline, contact email, locales, product families).',
            inputSchema: { type: 'object', properties: {} },
            execute: async function() {
                return {
                    name: 'Kairos.ai 優時科技',
                    tagline: 'AI rebar estimation and applied AI for the construction industry.',
                    contact: 'kairos.ai.tech@gmail.com',
                    homepage: 'https://www.kairosaitech.com/',
                    locales: ['en', 'zh-TW', 'ja', 'es', 'it', 'fr', 'ko', 'de'],
                    productFamilies: {
                        b2b: ['iTech (AI rebar estimation for AEC)', 'iTech AR (AR site verification, in development)', 'Custom AI systems', 'Data analysis platforms']
                    }
                };
            }
        }
    ];

    try {
        navigator.modelContext.provideContext({ tools });
    } catch (err) {
        if (window.console && console.warn) console.warn('[WebMCP] provideContext failed:', err);
    }
})();

