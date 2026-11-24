// ===========================
// Kairos.ai — SetTime / AI Rebar Estimation
// ===========================

// Snapshot the raw query string before any later code can strip it (the
// DOMContentLoaded handler below removes all non-"lang" params from the URL).
const RAW_QUERY_STRING = window.location.search;

const translations = {
    en: {
        'nav.home': 'Home',
        'nav.products': 'Products',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'hero.title1': 'AI Solutions',
        'hero.title2': 'for AEC & Construction',
        'hero.subtitle': 'Kairos.ai builds AI solutions for the AEC industry — starting with SetTime, AI preconstruction that turns construction drawings into takeoff and shop drawings: rebar today, with concrete and formwork in development and MEP and HVAC planned.',
        'hero.cta1': 'Explore SetTime',
        'hero.cta2': 'Talk to Us',
        'about.title': 'Why Choose Kairos.ai?',
        'about.intro': 'At Kairos.ai, we build AI solutions for the AEC industry. Our first product, SetTime, automates rebar estimation for AEC teams — the starting point of that broader mission — and we build custom AI systems, backend infrastructure, and data platforms with the same engineering rigor.',
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
        'footer.contact': 'Contact',
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
        'products.itech.title': 'SetTime',
        'products.itech.badge': 'B2B',
        'products.itech.tagline': 'SetTime — Right before it sets',
        'products.itech.desc': 'AI preconstruction for fabricators: construction drawings in, quantities and shop drawings out — replacing slow, error-prone manual takeoff across the AEC industry. Rebar takeoff ships today; concrete and formwork are in development; MEP and HVAC are planned.',
        'products.itech.feature1': 'AI Estimation',
        'products.itech.feature2': 'Rebar Takeoff',
        'products.itech.feature3': 'AEC',
        'products.itech.cta': 'Learn more about SetTime',
        'products.itech.aria': 'SetTime — AI Preconstruction for AEC',
        'nav.story': 'Our Story',
        'story.title': 'Applied AI, Built With Purpose',
        'story.subtitle': "Who we are, why we started, and where we're headed.",
        'story.passion.title': 'Our Passion',
        'story.passion.desc': 'We believe AI should solve real, tangible problems — not just impressive demos. Our passion is bringing engineering rigor to industries the tech world often overlooks, starting with construction.',
        'story.origin.title': 'How We Started',
        'story.origin.desc': "Kairos.ai began as a small team obsessed with a simple idea: use AI to give people back their time. That search led us deep into manufacturing and construction workflows, where we kept finding the same bottleneck — slow, error-prone manual rebar takeoff. So we built SetTime to fix it.",
        'story.goal.title': "Where We're Headed",
        'story.goal.desc': 'We want SetTime to become the standard way AEC teams do preconstruction takeoff — from rebar to concrete, formwork, MEP and HVAC — and to keep building AI systems, backend infrastructure, and data platforms with the same rigor for teams who need it.',
        'products.itech.spec1Label': 'Input',
        'products.itech.spec1Value': 'Construction drawings — DWG or PDF',
        'products.itech.spec2Label': 'Output',
        'products.itech.spec2Value': 'Rebar takeoff + bar-bending schedule, exportable as CSV/Excel',
        'products.itech.spec3Label': 'Pipeline',
        'products.itech.spec3Value': 'Upload → AI detection → estimate & schedule',
        'products.roadmap.badge': 'Roadmap',
        'products.roadmap.title': 'From rebar to the whole preconstruction workflow',
        'products.roadmap.desc': 'SetTime starts with rebar and extends the same drawing-to-quantities engine across the fabricator\'s workflow.',
        'products.roadmap.feature1': 'Rebar takeoff and bar schedule — shipping',
        'products.roadmap.feature2': 'Concrete quantities and formwork area — in development',
        'products.roadmap.feature3': 'MEP and HVAC takeoff — planned',
        'products.roadmap.feature4': 'BVBS machine output for bending machines — planned',
    },
    'zh-TW': {
        'nav.home': '首頁',
        'nav.products': '產品',
        'nav.about': '關於我們',
        'nav.contact': '聯絡我們',
        'hero.title1': 'AI 解決方案',
        'hero.title2': '為 AEC 與營建而生',
        'hero.subtitle': '優時科技打造 AEC 產業的 AI 解決方案 — 從 SetTime 起步，這套 AI 施工前置作業系統將施工圖轉換為算量與加工圖：鋼筋已上線，混凝土與模板開發中，機電（MEP）與空調（HVAC）規劃中。',
        'hero.cta1': '探索 SetTime',
        'hero.cta2': '與我們聯繫',
        'about.title': '為什麼選擇優時科技？',
        'about.intro': '優時科技（Kairos.ai）打造 AEC 產業的 AI 解決方案。首項產品 SetTime 為 AEC 團隊自動化鋼筋估算，是這個更大使命的起點；我們也以同等的工程實力打造客製 AI 系統、後端架構與數據平台。',
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
        'footer.contact': '聯絡',
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
        'products.itech.title': 'SetTime',
        'products.itech.badge': 'B2B',
        'products.itech.tagline': 'SetTime — 凝固之前，一次到位',
        'products.itech.desc': '為加工廠打造的 AI 施工前置作業：施工圖進，算量與加工圖出，取代營建產業耗時且易錯的人工算量。鋼筋算量已上線；混凝土與模板開發中；機電（MEP）與空調（HVAC）規劃中。',
        'products.itech.feature1': 'AI 估算',
        'products.itech.feature2': '鋼筋翻樣',
        'products.itech.feature3': '營建業',
        'products.itech.cta': '了解更多 SetTime',
        'products.itech.aria': 'SetTime — AEC 產業的 AI 施工前置作業系統',
        'nav.story': '關於我們',
        'story.title': '懷抱使命的應用 AI',
        'story.subtitle': '我們是誰、為何出發，以及我們的目標。',
        'story.passion.title': '我們的熱情',
        'story.passion.desc': '我們相信 AI 應該解決真實且具體的問題，而不只是華麗的展示。我們的熱情是將工程紀律帶進科技業常忽略的產業，從營建業開始。',
        'story.origin.title': '我們如何開始',
        'story.origin.desc': '優時科技從一個小團隊的簡單想法出發：用 AI 把時間還給人們。這份探索帶我們深入製造與營建的工作流程，一再發現同一個瓶頸——耗時且易錯的人工鋼筋翻樣。於是我們打造了 SetTime 來解決它。',
        'story.goal.title': '我們的目標',
        'story.goal.desc': '我們希望 SetTime 成為 AEC 團隊進行施工前置算量的標準方式——從鋼筋延伸到混凝土、模板、機電（MEP）與空調（HVAC）——同時以同樣的嚴謹度，為有需要的團隊持續打造 AI 系統、後端基礎架構與數據平台。',
        'products.itech.spec1Label': '輸入',
        'products.itech.spec1Value': '施工圖 — DWG 或 PDF',
        'products.itech.spec2Label': '輸出',
        'products.itech.spec2Value': '鋼筋估算與斷料彎曲表，可匯出 CSV/Excel',
        'products.itech.spec3Label': '流程',
        'products.itech.spec3Value': '上傳 → AI 偵測 → 估算與排程',
        'products.roadmap.badge': '產品路線圖',
        'products.roadmap.title': '從鋼筋到完整的施工前置作業',
        'products.roadmap.desc': 'SetTime 從鋼筋起步，並把同一套「從圖面到數量」的引擎延伸到加工廠的整個工作流程。',
        'products.roadmap.feature1': '鋼筋算量與斷料彎曲表 — 已上線',
        'products.roadmap.feature2': '混凝土數量與模板面積 — 開發中',
        'products.roadmap.feature3': '機電（MEP）與空調（HVAC）算量 — 規劃中',
        'products.roadmap.feature4': '供彎鋼筋機使用的 BVBS 輸出 — 規劃中',
    },
    ja: {
        'nav.home': 'ホーム',
        'nav.products': '製品',
        'nav.about': '会社概要',
        'nav.contact': 'お問い合わせ',
        'hero.title1': 'AIソリューション',
        'hero.title2': 'AEC・建設のために',
        'hero.subtitle': 'Kairos.ai は AEC 業界向けの AI ソリューションを開発しています。第一弾の SetTime は、施工図から数量と加工図を作成する AI プレコンストラクション。鉄筋は提供中、コンクリートと型枠は開発中、設備（MEP）と空調（HVAC）は計画中です。',
        'hero.cta1': 'SetTimeを見る',
        'hero.cta2': 'お問い合わせ',
        'about.title': 'なぜKairos.aiを選ぶのか？',
        'about.intro': 'Kairos.aiはAEC業界向けのAIソリューションを開発します。最初の製品SetTimeはAECチームの鉄筋積算を自動化 — その大きな使命の出発点です。同じ技術力でカスタムAIシステム、バックエンド基盤、データプラットフォームも構築します。',
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
        'footer.contact': 'お問い合わせ',
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
        'products.itech.title': 'SetTime',
        'products.itech.badge': 'B2B',
        'products.itech.tagline': 'SetTime — 固まる前に、ぴたりと決める',
        'products.itech.desc': '加工会社向けの AI プレコンストラクション。施工図を入れると数量と加工図が出てくるため、遅くてミスの出やすい手作業の積算を置き換えます。鉄筋積算は提供中、コンクリートと型枠は開発中、設備（MEP）と空調（HVAC）は計画中です。',
        'products.itech.feature1': 'AI積算',
        'products.itech.feature2': '鉄筋拾い',
        'products.itech.feature3': 'AEC',
        'products.itech.cta': 'SetTime について詳しく見る',
        'products.itech.aria': 'SetTime — AEC 向け AI プレコンストラクション',
        'nav.story': '私たちの物語',
        'story.title': '目的を持って築く応用AI',
        'story.subtitle': '私たちが何者で、なぜ始め、どこへ向かうのか。',
        'story.passion.title': '私たちの情熱',
        'story.passion.desc': '私たちはAIが実際の具体的な課題を解決すべきだと信じています——単なる印象的なデモではありません。テック業界が見過ごしがちな産業に、建設業を皮切りにエンジニアリングの厳密さを届けることが私たちの情熱です。',
        'story.origin.title': '私たちの始まり',
        'story.origin.desc': 'Kairos.aiは、AIで人々に時間を取り戻すというシンプルな発想に取り憑かれた小さなチームから始まりました。その探求の中で製造業と建設業の現場を深く掘り下げ、何度も同じボトルネックに突き当たりました——遅くミスの多い手作業の鉄筋積算です。そこで私たちはSetTimeを開発しました。',
        'story.goal.title': '私たちが目指す先',
        'story.goal.desc': 'SetTime を、鉄筋からコンクリート、型枠、設備（MEP）、空調（HVAC）まで、AEC チームがプレコンストラクションの積算を行う標準的な手段にしたい。あわせて、必要とするチームのために AI システム、バックエンド基盤、データ基盤も同じ厳密さで開発し続けます。',
        'products.itech.spec1Label': '入力',
        'products.itech.spec1Value': '施工図面 — DWGまたはPDF',
        'products.itech.spec2Label': '出力',
        'products.itech.spec2Value': '鉄筋積算と配筋表、CSV/Excelで出力可能',
        'products.itech.spec3Label': 'パイプライン',
        'products.itech.spec3Value': 'アップロード → AI検出 → 積算とスケジュール作成',
        'products.roadmap.badge': 'ロードマップ',
        'products.roadmap.title': '鉄筋からプレコンストラクション全体へ',
        'products.roadmap.desc': 'SetTime は鉄筋から始め、図面から数量を出す同じエンジンを加工会社のワークフロー全体に広げます。',
        'products.roadmap.feature1': '鉄筋積算と配筋表 — 提供中',
        'products.roadmap.feature2': 'コンクリート数量と型枠面積 — 開発中',
        'products.roadmap.feature3': '設備（MEP）と空調（HVAC）の積算 — 計画中',
        'products.roadmap.feature4': '曲げ加工機向け BVBS 出力 — 計画中',
    },
    es: {
        'nav.home': 'Inicio',
        'nav.products': 'Productos',
        'nav.about': 'Acerca de',
        'nav.contact': 'Contacto',
        'hero.title1': 'Soluciones de IA',
        'hero.title2': 'para AEC y Construcción',
        'hero.subtitle': 'Kairos.ai desarrolla soluciones de IA para el sector AEC. Empieza con SetTime, preconstrucción con IA que convierte planos de construcción en mediciones y planos de taller: armaduras hoy, hormigón y encofrado en desarrollo, instalaciones (MEP) y climatización (HVAC) planificadas.',
        'hero.cta1': 'Explorar SetTime',
        'hero.cta2': 'Contáctanos',
        'about.title': '¿Por qué elegir Kairos.ai?',
        'about.intro': 'En Kairos.ai desarrollamos soluciones de IA para el sector AEC. Nuestro primer producto, SetTime, automatiza la estimación de acero para equipos AEC — el punto de partida de esa misión más amplia; y construimos sistemas de IA a medida, infraestructura backend y plataformas de datos con el mismo rigor de ingeniería.',
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
        'footer.contact': 'Contacto',
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
        'products.itech.title': 'SetTime',
        'products.itech.badge': 'B2B',
        'products.itech.tagline': 'SetTime — Justo a tiempo, antes de que fragüe',
        'products.itech.desc': 'Preconstrucción con IA para fabricantes: entran los planos de construcción, salen mediciones y planos de taller, sustituyendo el cómputo manual, lento y propenso a errores. El cómputo de armaduras ya está disponible; hormigón y encofrado están en desarrollo; instalaciones (MEP) y climatización (HVAC) están planificadas.',
        'products.itech.feature1': 'Estimación IA',
        'products.itech.feature2': 'Despiece de Acero',
        'products.itech.feature3': 'AEC',
        'products.itech.cta': 'Más información sobre SetTime',
        'products.itech.aria': 'SetTime — preconstrucción con IA para AEC',
        'nav.story': 'Nuestra Historia',
        'story.title': 'IA Aplicada, Construida con Propósito',
        'story.subtitle': 'Quiénes somos, por qué empezamos y hacia dónde vamos.',
        'story.passion.title': 'Nuestra Pasión',
        'story.passion.desc': 'Creemos que la IA debe resolver problemas reales y tangibles, no solo demostraciones impresionantes. Nuestra pasión es llevar rigor de ingeniería a industrias que el mundo tecnológico suele pasar por alto, empezando por la construcción.',
        'story.origin.title': 'Cómo Empezamos',
        'story.origin.desc': 'Kairos.ai comenzó como un pequeño equipo obsesionado con una idea simple: usar la IA para devolverle el tiempo a las personas. Esa búsqueda nos llevó a fondo en los flujos de trabajo de manufactura y construcción, donde encontramos una y otra vez el mismo cuello de botella: el despiece manual de armadura, lento y propenso a errores. Así que construimos SetTime para resolverlo.',
        'story.goal.title': 'Hacia Dónde Vamos',
        'story.goal.desc': 'Queremos que SetTime sea la forma estándar en que los equipos AEC hacen el cómputo de preconstrucción, de las armaduras al hormigón, el encofrado, las instalaciones (MEP) y la climatización (HVAC), y seguir creando sistemas de IA, infraestructura backend y plataformas de datos con el mismo rigor para quienes los necesiten.',
        'products.itech.spec1Label': 'Entrada',
        'products.itech.spec1Value': 'Planos de construcción — DWG o PDF',
        'products.itech.spec2Label': 'Salida',
        'products.itech.spec2Value': 'Despiece de armadura y planilla de doblado, exportable a CSV/Excel',
        'products.itech.spec3Label': 'Proceso',
        'products.itech.spec3Value': 'Subir → Detección con IA → Estimación y planilla',
        'products.roadmap.badge': 'Hoja de ruta',
        'products.roadmap.title': 'De las armaduras a todo el flujo de preconstrucción',
        'products.roadmap.desc': 'SetTime empieza por las armaduras y extiende el mismo motor de plano a cantidades a todo el flujo de trabajo del fabricante.',
        'products.roadmap.feature1': 'Cómputo de armaduras y lista de doblado — disponible',
        'products.roadmap.feature2': 'Cantidades de hormigón y superficie de encofrado — en desarrollo',
        'products.roadmap.feature3': 'Cómputo de instalaciones (MEP) y climatización (HVAC) — planificado',
        'products.roadmap.feature4': 'Salida BVBS para máquinas de doblado — planificado',
    },
    it: {
        'nav.home': 'Home',
        'nav.products': 'Prodotti',
        'nav.about': 'Chi Siamo',
        'nav.contact': 'Contatti',
        'hero.title1': 'Soluzioni IA',
        'hero.title2': 'per AEC e Costruzioni',
        'hero.subtitle': 'Kairos.ai sviluppa soluzioni di IA per il settore AEC. Parte da SetTime, precostruzione con IA che trasforma i disegni di cantiere in computi e disegni di officina: armature oggi, calcestruzzo e casseratura in sviluppo, impianti (MEP) e climatizzazione (HVAC) pianificati.',
        'hero.cta1': 'Scopri SetTime',
        'hero.cta2': 'Contattaci',
        'about.title': 'Perché Scegliere Kairos.ai?',
        'about.intro': 'In Kairos.ai sviluppiamo soluzioni IA per il settore AEC. Il nostro primo prodotto, SetTime, automatizza il computo dei ferri per i team AEC — il punto di partenza di questa missione più ampia; e realizziamo sistemi AI su misura, infrastrutture backend e piattaforme dati con lo stesso rigore ingegneristico.',
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
        'footer.contact': 'Contatti',
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
        'products.itech.title': 'SetTime',
        'products.itech.badge': 'B2B',
        'products.itech.tagline': 'SetTime — Al momento giusto, prima che faccia presa',
        'products.itech.desc': 'Precostruzione con IA per le officine: entrano i disegni di cantiere, escono computi e disegni di officina, al posto del computo manuale, lento e soggetto a errori. Il computo delle armature è disponibile; calcestruzzo e casseratura sono in sviluppo; impianti (MEP) e climatizzazione (HVAC) sono pianificati.',
        'products.itech.feature1': 'Stima IA',
        'products.itech.feature2': 'Computo Ferri',
        'products.itech.feature3': 'AEC',
        'products.itech.cta': 'Scopri di più su SetTime',
        'products.itech.aria': 'SetTime — precostruzione con IA per AEC',
        'nav.story': 'La Nostra Storia',
        'story.title': 'IA Applicata, Costruita con Uno Scopo',
        'story.subtitle': 'Chi siamo, perché siamo partiti e dove stiamo andando.',
        'story.passion.title': 'La Nostra Passione',
        'story.passion.desc': 'Crediamo che l\'IA debba risolvere problemi reali e concreti, non solo demo d\'effetto. La nostra passione è portare rigore ingegneristico in settori spesso trascurati dal mondo tech, a partire dall\'edilizia.',
        'story.origin.title': 'Come Siamo Partiti',
        'story.origin.desc': 'Kairos.ai è nata come un piccolo team ossessionato da un\'idea semplice: usare l\'IA per restituire tempo alle persone. Questa ricerca ci ha portati a fondo nei flussi di lavoro della manifattura e dell\'edilizia, dove abbiamo trovato ripetutamente lo stesso collo di bottiglia: il computo manuale delle armature, lento e soggetto a errori. Così abbiamo costruito SetTime per risolverlo.',
        'story.goal.title': 'Dove Stiamo Andando',
        'story.goal.desc': 'Vogliamo che SetTime diventi il modo standard in cui i team AEC fanno il computo di precostruzione, dalle armature al calcestruzzo, alla casseratura, agli impianti (MEP) e alla climatizzazione (HVAC), e continuare a costruire sistemi di IA, infrastruttura backend e piattaforme dati con lo stesso rigore per chi ne ha bisogno.',
        'products.itech.spec1Label': 'Input',
        'products.itech.spec1Value': 'Disegni edili — DWG o PDF',
        'products.itech.spec2Label': 'Output',
        'products.itech.spec2Value': 'Computo armature e distinta di piegatura, esportabile in CSV/Excel',
        'products.itech.spec3Label': 'Flusso',
        'products.itech.spec3Value': 'Caricamento → Rilevamento IA → Stima e distinta',
        'products.roadmap.badge': 'Roadmap',
        'products.roadmap.title': 'Dalle armature all\'intero flusso di precostruzione',
        'products.roadmap.desc': 'SetTime parte dalle armature ed estende lo stesso motore da disegno a quantità all\'intero flusso di lavoro dell\'officina.',
        'products.roadmap.feature1': 'Computo armature e distinta di piegatura — disponibile',
        'products.roadmap.feature2': 'Quantità di calcestruzzo e superfici di casseratura — in sviluppo',
        'products.roadmap.feature3': 'Computo impianti (MEP) e climatizzazione (HVAC) — pianificato',
        'products.roadmap.feature4': 'Output BVBS per piegatrici — pianificato',
    },
    fr: {
        'nav.home': 'Accueil',
        'nav.products': 'Produits',
        'nav.about': 'À Propos',
        'nav.contact': 'Contact',
        'hero.title1': 'Solutions IA',
        'hero.title2': 'pour l\'AEC et la Construction',
        'hero.subtitle': 'Kairos.ai développe des solutions d\'IA pour le secteur AEC. Tout commence avec SetTime, une préconstruction par IA qui transforme les plans de construction en métrés et plans d\'atelier : armatures aujourd\'hui, béton et coffrage en développement, lots techniques (MEP) et CVC (HVAC) prévus.',
        'hero.cta1': 'Découvrir SetTime',
        'hero.cta2': 'Contactez-nous',
        'about.title': 'Pourquoi Choisir Kairos.ai ?',
        'about.intro': 'Chez Kairos.ai, nous développons des solutions IA pour le secteur AEC. Notre premier produit, SetTime, automatise l\'estimation des armatures pour les équipes AEC — le point de départ de cette mission plus large ; et nous concevons des systèmes IA sur mesure, des infrastructures backend et des plateformes de données avec la même rigueur d\'ingénierie.',
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
        'footer.contact': 'Contact',
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
        'products.itech.title': 'SetTime',
        'products.itech.badge': 'B2B',
        'products.itech.tagline': 'SetTime — Au bon moment, juste avant la prise',
        'products.itech.desc': 'Préconstruction par IA pour les fabricants : les plans de construction entrent, les métrés et plans d\'atelier sortent, à la place du métré manuel, lent et sujet aux erreurs. Le métré d\'armatures est disponible ; béton et coffrage sont en développement ; lots techniques (MEP) et CVC (HVAC) sont prévus.',
        'products.itech.feature1': 'Estimation IA',
        'products.itech.feature2': 'Métré Armatures',
        'products.itech.feature3': 'AEC',
        'products.itech.cta': 'En savoir plus sur SetTime',
        'products.itech.aria': 'SetTime — préconstruction par IA pour l\'AEC',
        'nav.story': 'Notre Histoire',
        'story.title': 'IA Appliquée, Construite avec un But',
        'story.subtitle': 'Qui nous sommes, pourquoi nous avons commencé, et où nous allons.',
        'story.passion.title': 'Notre Passion',
        'story.passion.desc': 'Nous pensons que l\'IA doit résoudre des problèmes réels et concrets — pas seulement produire des démos impressionnantes. Notre passion est d\'apporter une rigueur d\'ingénierie à des secteurs souvent négligés par le monde de la tech, en commençant par la construction.',
        'story.origin.title': 'Comment Nous Avons Commencé',
        'story.origin.desc': 'Kairos.ai a débuté comme une petite équipe obsédée par une idée simple : utiliser l\'IA pour redonner du temps aux gens. Cette quête nous a menés au cœur des flux de travail de la fabrication et de la construction, où nous avons retrouvé le même goulot d\'étranglement : le métré manuel des armatures, lent et sujet aux erreurs. Nous avons donc conçu SetTime pour le résoudre.',
        'story.goal.title': 'Où Nous Allons',
        'story.goal.desc': 'Nous voulons que SetTime devienne la façon standard dont les équipes AEC font le métré de préconstruction, des armatures au béton, au coffrage, aux lots techniques (MEP) et au CVC (HVAC), et continuer à bâtir des systèmes d\'IA, une infrastructure backend et des plateformes de données avec la même rigueur pour ceux qui en ont besoin.',
        'products.itech.spec1Label': 'Entrée',
        'products.itech.spec1Value': 'Plans de construction — DWG ou PDF',
        'products.itech.spec2Label': 'Sortie',
        'products.itech.spec2Value': 'Métré d\'armatures et plan de façonnage, exportable en CSV/Excel',
        'products.itech.spec3Label': 'Pipeline',
        'products.itech.spec3Value': 'Téléversement → Détection IA → Estimation et plan',
        'products.roadmap.badge': 'Feuille de route',
        'products.roadmap.title': 'Des armatures à toute la préconstruction',
        'products.roadmap.desc': 'SetTime commence par les armatures et étend le même moteur plan-vers-quantités à tout le flux de travail du fabricant.',
        'products.roadmap.feature1': 'Métré d\'armatures et nomenclature de façonnage — disponible',
        'products.roadmap.feature2': 'Quantités de béton et surfaces de coffrage — en développement',
        'products.roadmap.feature3': 'Métré des lots techniques (MEP) et du CVC (HVAC) — prévu',
        'products.roadmap.feature4': 'Sortie BVBS pour cintreuses — prévu',
    },
    ko: {
        'nav.home': '홈',
        'nav.products': '제품',
        'nav.about': '소개',
        'nav.contact': '문의',
        'hero.title1': 'AI 솔루션',
        'hero.title2': 'AEC와 건설을 위한',
        'hero.subtitle': 'Kairos.ai는 AEC 산업을 위한 AI 솔루션을 만듭니다. 첫 제품 SetTime은 시공도면을 물량과 제작도면으로 바꾸는 AI 시공 전 단계(Preconstruction) 솔루션으로, 철근은 제공 중이며 콘크리트와 거푸집은 개발 중, 설비(MEP)와 공조(HVAC)는 계획 중입니다.',
        'hero.cta1': 'SetTime 살펴보기',
        'hero.cta2': '문의하기',
        'about.title': '왜 Kairos.ai를 선택하나요?',
        'about.intro': 'Kairos.ai는 AEC 산업을 위한 AI 솔루션을 만듭니다. 첫 제품인 SetTime은 AEC 팀의 철근 산출을 자동화하며, 이는 더 큰 목표의 시작점입니다. 동일한 엔지니어링 역량으로 맞춤형 AI 시스템, 백엔드 인프라, 데이터 플랫폼도 구축합니다.',
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
        'footer.contact': '문의',
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
        'products.itech.title': 'SetTime',
        'products.itech.badge': 'B2B',
        'products.itech.tagline': 'SetTime — 굳기 전에, 딱 맞춰',
        'products.itech.desc': '제작 업체를 위한 AI 시공 전 단계 솔루션: 시공도면을 넣으면 물량과 제작도면이 나와, 느리고 오류가 잦은 수작업 물량 산출을 대체합니다. 철근 물량 산출은 제공 중이며, 콘크리트와 거푸집은 개발 중, 설비(MEP)와 공조(HVAC)는 계획 중입니다.',
        'products.itech.feature1': 'AI 산출',
        'products.itech.feature2': '철근 물량',
        'products.itech.feature3': 'AEC',
        'products.itech.cta': 'SetTime 자세히 보기',
        'products.itech.aria': 'SetTime — AEC를 위한 AI 시공 전 단계 솔루션',
        'nav.story': '우리의 이야기',
        'story.title': '목적을 담은 응용 AI',
        'story.subtitle': '우리가 누구인지, 왜 시작했는지, 그리고 어디로 향하는지.',
        'story.passion.title': '우리의 열정',
        'story.passion.desc': '우리는 AI가 인상적인 데모가 아니라 실제적이고 구체적인 문제를 해결해야 한다고 믿습니다. 우리의 열정은 테크 업계가 흔히 간과하는 산업에 엔지니어링의 엄격함을 가져오는 것이며, 건설업이 그 시작입니다.',
        'story.origin.title': '우리의 시작',
        'story.origin.desc': '優時科技(Kairos.ai)는 AI로 사람들에게 시간을 돌려준다는 단순한 아이디어에 몰두한 작은 팀에서 시작했습니다. 그 탐구는 제조업과 건설업의 업무 흐름 깊숙이 이어졌고, 우리는 계속해서 같은 병목을 발견했습니다 — 느리고 오류가 많은 수작업 철근 적산. 그래서 우리는 이를 해결하기 위해 SetTime을 만들었습니다.',
        'story.goal.title': '우리가 향하는 곳',
        'story.goal.desc': 'SetTime이 철근부터 콘크리트, 거푸집, 설비(MEP), 공조(HVAC)까지 AEC 팀이 시공 전 물량 산출을 하는 표준 방식이 되기를 바라며, 필요한 팀을 위해 AI 시스템, 백엔드 인프라, 데이터 플랫폼도 같은 엄밀함으로 계속 만들어 갑니다.',
        'products.itech.spec1Label': '입력',
        'products.itech.spec1Value': '시공도면 — DWG 또는 PDF',
        'products.itech.spec2Label': '출력',
        'products.itech.spec2Value': '철근 적산 및 배근 스케줄, CSV/Excel로 내보내기 가능',
        'products.itech.spec3Label': '파이프라인',
        'products.itech.spec3Value': '업로드 → AI 감지 → 적산 및 스케줄',
        'products.roadmap.badge': '로드맵',
        'products.roadmap.title': '철근에서 시공 전 단계 전체로',
        'products.roadmap.desc': 'SetTime은 철근에서 시작해, 도면에서 물량을 뽑는 같은 엔진을 제작 업체의 전체 업무 흐름으로 넓혀 갑니다.',
        'products.roadmap.feature1': '철근 물량 산출과 가공표 — 제공 중',
        'products.roadmap.feature2': '콘크리트 물량과 거푸집 면적 — 개발 중',
        'products.roadmap.feature3': '설비(MEP)와 공조(HVAC) 물량 산출 — 계획 중',
        'products.roadmap.feature4': '철근 절곡기용 BVBS 출력 — 계획 중',
    },
    de: {
        'nav.home': 'Startseite',
        'nav.products': 'Produkte',
        'nav.about': 'Über Uns',
        'nav.contact': 'Kontakt',
        'hero.title1': 'KI-Lösungen',
        'hero.title2': 'für AEC und Bauwesen',
        'hero.subtitle': 'Kairos.ai entwickelt KI-Lösungen für die AEC-Branche. Den Anfang macht SetTime, KI für die Bauvorbereitung (Preconstruction), die Konstruktionspläne in Mengen und Werkstattzeichnungen verwandelt: Bewehrung heute, Beton und Schalung in Entwicklung, MEP und HVAC geplant.',
        'hero.cta1': 'SetTime entdecken',
        'hero.cta2': 'Kontakt',
        'about.title': 'Warum Kairos.ai Wählen?',
        'about.intro': 'Bei Kairos.ai entwickeln wir KI-Lösungen für die AEC-Branche. Unser erstes Produkt, SetTime, automatisiert die Bewehrungskalkulation für AEC-Teams — der Ausgangspunkt dieser größeren Mission; und wir bauen mit derselben technischen Sorgfalt maßgeschneiderte KI-Systeme, Backend-Infrastruktur und Datenplattformen.',
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
        'footer.contact': 'Kontakt',
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
        'products.itech.title': 'SetTime',
        'products.itech.badge': 'B2B',
        'products.itech.tagline': 'SetTime — Auf den Punkt, bevor es abbindet',
        'products.itech.desc': 'KI für die Bauvorbereitung in Betrieben: Konstruktionspläne rein, Mengen und Werkstattzeichnungen raus, statt langsamer und fehleranfälliger manueller Ermittlung. Die Bewehrungsermittlung ist verfügbar; Beton und Schalung sind in Entwicklung; MEP und HVAC sind geplant.',
        'products.itech.feature1': 'KI-Kalkulation',
        'products.itech.feature2': 'Bewehrung',
        'products.itech.feature3': 'AEC',
        'products.itech.cta': 'Mehr über SetTime erfahren',
        'products.itech.aria': 'SetTime — KI für die Bauvorbereitung in der AEC-Branche',
        'nav.story': 'Unsere Geschichte',
        'story.title': 'Angewandte KI mit Zweck',
        'story.subtitle': 'Wer wir sind, warum wir angefangen haben und wohin wir wollen.',
        'story.passion.title': 'Unsere Leidenschaft',
        'story.passion.desc': 'Wir glauben, dass KI reale, greifbare Probleme lösen sollte — nicht nur beeindruckende Demos. Unsere Leidenschaft ist es, technische Sorgfalt in Branchen zu bringen, die die Tech-Welt oft übersieht, beginnend mit dem Bauwesen.',
        'story.origin.title': 'Wie Wir Angefangen Haben',
        'story.origin.desc': 'Kairos.ai begann als kleines Team, das von einer einfachen Idee besessen war: mit KI den Menschen ihre Zeit zurückzugeben. Diese Suche führte uns tief in Fertigungs- und Baubranche-Arbeitsabläufe, wo wir immer wieder auf denselben Engpass stießen — langsame, fehleranfällige manuelle Bewehrungsaufmaße. Also haben wir SetTime gebaut, um das zu lösen.',
        'story.goal.title': 'Wohin Wir Wollen',
        'story.goal.desc': 'Wir möchten, dass SetTime zum Standard wird, wie AEC-Teams die Mengenermittlung in der Bauvorbereitung erledigen, von der Bewehrung über Beton und Schalung bis zu MEP und HVAC, und weiterhin mit derselben Sorgfalt KI-Systeme, Backend-Infrastruktur und Datenplattformen für Teams bauen, die sie brauchen.',
        'products.itech.spec1Label': 'Eingabe',
        'products.itech.spec1Value': 'Baupläne — DWG oder PDF',
        'products.itech.spec2Label': 'Ausgabe',
        'products.itech.spec2Value': 'Bewehrungsaufmaß und Biegeliste, exportierbar als CSV/Excel',
        'products.itech.spec3Label': 'Ablauf',
        'products.itech.spec3Value': 'Hochladen → KI-Erkennung → Schätzung & Liste',
        'products.roadmap.badge': 'Roadmap',
        'products.roadmap.title': 'Von der Bewehrung zur gesamten Bauvorbereitung',
        'products.roadmap.desc': 'SetTime beginnt bei der Bewehrung und erweitert dieselbe Engine von Plan zu Mengen auf den gesamten Arbeitsablauf des Betriebs.',
        'products.roadmap.feature1': 'Bewehrungsermittlung und Biegeliste — verfügbar',
        'products.roadmap.feature2': 'Betonmengen und Schalungsflächen — in Entwicklung',
        'products.roadmap.feature3': 'MEP- und HVAC-Mengenermittlung — geplant',
        'products.roadmap.feature4': 'BVBS-Ausgabe für Biegemaschinen — geplant',
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

    // Update html lang attribute
    document.documentElement.lang = lang === 'zh-TW' ? 'zh-Hant' : lang;

    // Save preference
    try { localStorage.setItem('preferredLanguage', lang); } catch (e) {}
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

// Language options are plain links to the per-language pages; remember the choice
document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', () => {
        try { localStorage.setItem('preferredLanguage', option.getAttribute('data-lang')); } catch (e) {}
    });
});

const LANG_PATHS = { 'zh-TW': '/zh-tw/', 'ja': '/ja/', 'es': '/es/', 'it': '/it/', 'fr': '/fr/', 'ko': '/ko/', 'de': '/de/' };
const lookupLangPath = (code) => (code && Object.prototype.hasOwnProperty.call(LANG_PATHS, code) ? LANG_PATHS[code] : null);

window.addEventListener('DOMContentLoaded', () => {
    const pageLang = document.documentElement.getAttribute('data-page-lang') || 'en';

    if (pageLang === 'en') {
        let saved = null;
        try { saved = localStorage.getItem('preferredLanguage'); } catch (e) { saved = null; }
        const urlLang = new URLSearchParams(window.location.search).get('lang');
        const target = urlLang === 'en' ? null : (lookupLangPath(urlLang) || lookupLangPath(saved));
        if (target) {
            window.location.replace(target + window.location.hash);
            return;
        }
        if (window.location.search) {
            const cleanUrl = new URL(window.location);
            cleanUrl.search = '';
            window.history.replaceState({}, '', cleanUrl);
        }
    }

    setLanguage(pageLang);
});

// ===========================
// Extra i18n — new sections (merged into translations)
// ===========================
const extraI18n = {
    en: {
        'products.demo.caption': 'SetTime portal walkthrough on a synthetic sample plan.',
        'clients.tag': 'Live deployments',
        'clients.title': 'SetTime is running on real projects',
        'clients.subtitle': 'SetTime is already estimating rebar on live construction projects.',
        'clients.stat.companies': 'Companies',
        'clients.stat.countries': 'Countries',
        'nav.how': 'How it works',
        'nav.pilot': 'Pilot',
        'hero.badge': 'AI for AEC & Construction',
        'hero.metric1label': 'Faster takeoff',
        'hero.metric2label': 'Estimate accuracy',
        'hero.metric3label': 'Drawings parsed',
        'process.title': 'From drawing to schedule',
        'process.subtitle': 'SetTime runs the full rebar takeoff pipeline — no manual counting, no spreadsheet errors.',
        'process.step1.title': 'Upload drawings',
        'process.step1.desc': 'Drop in structural drawings — PDF or CAD. SetTime ingests plans, sections, and details.',
        'process.step2.title': 'AI detects rebar',
        'process.step2.desc': 'Computer-vision models read bars, sizes, spacing, and laps directly from the drawings.',
        'process.step3.title': 'Estimate & schedule',
        'process.step3.desc': 'Get accurate quantities, weights, and a bar-bending schedule ready to export.',
        'footer.tagline': 'AI solutions for the AEC and construction industry, starting with SetTime, AI preconstruction.',
        'pilot.tag': 'Now Recruiting',
        'pilot.title': 'Now Recruiting Pilot Clients',
        'pilot.desc': "We're partnering with AEC firms to pilot SetTime on real projects — bring your drawings, help shape the product, and get early access before general release.",
        'pilot.cta': 'Apply for the Pilot Program',
        'form.sending': 'Sending…',
        'form.success': 'Thank you! Your message has been sent.',
        'form.error': 'There was an issue sending your message. Please try again.',
        'form.errorNetwork': 'Unable to send your message right now. Please try again later.',
        'form.errorFallback': 'You can also reach us directly at support@kairosaitech.com.',
        'faq.tag': 'FAQ',
        'faq.title': 'Frequently Asked Questions',
        'faq.subtitle': 'Common questions about SetTime and Kairos.ai, answered directly.',
        'faq.q1': 'What is SetTime and how does it estimate rebar?',
        'faq.a1': 'SetTime is Kairos.ai\'s AI preconstruction software for fabricators. It turns construction drawings (PDF or CAD) into rebar quantities, weights, and an exportable bar-bending schedule, with computer vision reading bar sizes, spacing, and laps directly from the drawings — replacing slow, error-prone manual takeoff. Rebar is shipping today; concrete and formwork quantities are in development; MEP and HVAC takeoff are planned.',
        'faq.q2': 'Who is SetTime for?',
        'faq.a2': 'SetTime is built for the AEC (architecture, engineering, construction) industry — serving contractors, rebar fabricators, structural engineers, and estimating teams who need faster, more accurate rebar takeoff and a shorter bid-prep time.',
        'faq.q3': 'What does SetTime output?',
        'faq.a3': 'SetTime produces accurate rebar quantities, weights, and an exportable bar-bending schedule — ready for procurement, fabrication scheduling, and cost estimation.',
        'faq.q4': 'What else does Kairos.ai offer besides SetTime?',
        'faq.a4': 'SetTime is Kairos.ai\'s first product for the AEC industry — rebar takeoff is the starting point, with concrete, formwork, MEP and HVAC on the roadmap. Beyond SetTime, we also provide custom AI systems design, backend infrastructure, AI application development, and data analysis platforms — built with the same engineering rigor.',
        'faq.q5': 'How is AI rebar takeoff different from manual takeoff and CAD detailing plugins?',
        'faq.a5': "Manual takeoff means an estimator counts and measures bars by hand from the drawing. CAD detailing plugins automate detailing and bar-bending schedule generation inside a CAD tool, working from a model that's already been drawn. AI rebar takeoff like SetTime instead reads the drawing itself — PDF or CAD — and detects bar sizes, spacing, and laps directly, producing quantities and a bar-bending schedule without a detailer building the model first.",
        'faq.q6': 'Where does human review still matter in AI rebar takeoff?',
        'faq.a6': "AI rebar takeoff isn't fully automatic, and SetTime doesn't claim it is. Congested details, splice and lap rules, and mid-project revisions still call for an estimator's judgment. SetTime's job is to speed up the counting step and reduce spreadsheet errors — experienced estimators still review the output before it goes into a bid or fabrication order.",
        'faq.q7': "Is SetTime the same product as iTech?",
        'faq.a7': "Yes. SetTime is the new name of iTech, Kairos.ai's AI rebar estimation system, renamed on September 9, 2026. The AI engine, accuracy, and pipeline are unchanged — only the name is new.",
        'faq.q8': "Where is the official SetTime product page?",
        'faq.a8': "The official SetTime product page is https://settime.kairosaitech.com. SetTime is built by Kairos.ai (優時科技), a Taiwan-based company developing AI for the AEC industry; www.kairosaitech.com is the company homepage. AEC firms can apply for the SetTime pilot program through the contact form.",
        'faq.q9': "What is preconstruction takeoff, and which trades will SetTime cover?",
        'faq.a9': "Preconstruction takeoff is the quantity work done before building starts: reading the drawings and counting materials so a fabricator or contractor can bid, order and schedule. SetTime starts with rebar (shipping today: bar quantities, weights and a bar-bending schedule), is developing concrete quantities and formwork area, and plans MEP and HVAC takeoff.",
        'faq.q10': "How can I try SetTime?",
        'faq.a10': "Apply for the free pilot at https://settime.kairosaitech.com/#pilot: send one structural drawing and SetTime returns the rebar material list within 24 hours of receiving it. You can also apply through the contact form at https://www.kairosaitech.com/#contact.",
        'nav.news': 'News',
        'news.tag': 'News',
        'news.title': 'Latest News',
        'news.subtitle': 'Updates on our products and company.',
        'news.item1.date': 'September 9, 2026',
        'news.item1.title': 'iTech is now SetTime',
        'news.item1.desc': "We renamed iTech to SetTime to better capture what the product delivers — precise rebar estimates and bar-bending schedules, ready right before the concrete sets. The AI engine, accuracy, and pipeline are unchanged.",
        'news.item1.cta': 'Visit the SetTime product page →'
    },
    'zh-TW': {
        'products.demo.caption': 'SetTime 平台操作示範，使用合成範例圖面。',
        'clients.tag': '實際部署',
        'clients.title': 'SetTime 已在實際專案中運作',
        'clients.subtitle': 'SetTime 已在進行中的營建專案裡實際執行鋼筋估算。',
        'clients.stat.companies': '合作企業',
        'clients.stat.countries': '國家／地區',
        'nav.how': '運作方式',
        'nav.pilot': '試點',
        'hero.badge': 'AI AEC 與營建解決方案',
        'hero.metric1label': '更快翻樣',
        'hero.metric2label': '估算準確度',
        'hero.metric3label': '已解析圖面',
        'process.title': '從圖面到斷料表',
        'process.subtitle': 'SetTime 跑完整鋼筋翻樣流程 — 免人工計算、零試算表錯誤。',
        'process.step1.title': '上傳圖面',
        'process.step1.desc': '匯入結構施工圖（PDF 或 CAD），SetTime 解析平面、剖面與細部。',
        'process.step2.title': 'AI 辨識鋼筋',
        'process.step2.desc': '電腦視覺模型直接從圖面讀取鋼筋號數、間距與搭接。',
        'process.step3.title': '估算與斷料',
        'process.step3.desc': '產出精準數量、重量與可匯出的鋼筋斷料彎曲表。',
        'footer.tagline': '為 AEC 與營建產業打造的 AI 解決方案 — 從 SetTime AI 施工前置作業起步。',
        'pilot.tag': '招募中',
        'pilot.title': '招募 SetTime 試點客戶',
        'pilot.desc': '我們正與 AEC 廠商合作，在真實專案中試行 SetTime — 提供您的圖面、參與產品打磨，並在正式發布前搶先使用。',
        'pilot.cta': '申請加入試點計畫',
        'form.sending': '傳送中…',
        'form.success': '感謝您！訊息已送出。',
        'form.error': '訊息送出時發生問題，請再試一次。',
        'form.errorNetwork': '目前無法送出訊息，請稍後再試。',
        'form.errorFallback': '您也可以直接透過 support@kairosaitech.com 與我們聯繫。',
        'faq.tag': '常見問題',
        'faq.title': '常見問題 FAQ',
        'faq.subtitle': '關於 SetTime 與優時科技的常見問題，直接解答。',
        'faq.q1': 'SetTime 是什麼？如何進行鋼筋估算？',
        'faq.a1': 'SetTime 是優時科技為加工廠打造的 AI 施工前置作業軟體。它將施工圖（PDF 或 CAD）轉換為鋼筋數量、重量與可匯出的斷料彎曲表，並以電腦視覺直接從圖面讀取鋼筋尺寸、間距與搭接，取代耗時且易錯的人工算量。鋼筋已上線；混凝土與模板算量開發中；機電（MEP）與空調（HVAC）算量規劃中。',
        'faq.q2': 'SetTime 適用於哪些對象？',
        'faq.a2': 'SetTime 專為 AEC（建築、工程、營建）產業設計，服務承包商、鋼筋加工廠、結構技師與估價團隊，加速鋼筋翻樣與用量估算，提升準確度並縮短備標時間。',
        'faq.q3': 'SetTime 會輸出什麼？',
        'faq.a3': 'SetTime 產出精準的鋼筋數量、重量與可匯出的鋼筋斷料彎曲表，可用於採購、加工排程與成本估算。',
        'faq.q4': '除了 SetTime，優時科技還提供什麼？',
        'faq.a4': 'SetTime 是優時科技在 AEC 產業的第一個產品——鋼筋算量是起點，路線圖還包含混凝土、模板、機電（MEP）與空調（HVAC）。除了 SetTime，我們也提供客製 AI 系統設計、後端基礎架構、AI 應用開發與數據分析平台，同樣以嚴謹的工程標準打造。',
        'faq.q5': 'AI 鋼筋估算和人工翻樣、CAD 繪圖外掛有什麼不同？',
        'faq.a5': '人工翻樣是估算人員從圖面手動計數、量測鋼筋。CAD 繪圖外掛則是在 CAD 軟體內、根據已完成的模型自動產生詳圖與斷料彎曲表。像 SetTime 這樣的 AI 鋼筋估算，則是直接讀取施工圖（PDF 或 CAD），自動偵測鋼筋尺寸、間距與搭接，不需要先由繪圖人員建立模型，就能產出估算數量與斷料彎曲表。',
        'faq.q6': 'AI 鋼筋估算中，哪些地方仍需要人工複核？',
        'faq.a6': 'AI 鋼筋估算並非全自動，SetTime 也不會如此宣稱。複雜密集的節點、搭接規則，以及專案中途的圖面變更，仍需要估算人員的專業判斷。SetTime 的角色是加快計數速度、減少試算表錯誤 — 產出結果送入標單或加工訂單前，仍應由有經驗的估算人員複核。',
        'faq.q7': "SetTime 和 iTech 是同一個產品嗎？",
        'faq.a7': "是的。SetTime 是優時科技 Kairos.ai 的 AI 鋼筋估算系統 iTech 的新名稱，於 2026 年 9 月 9 日正式更名。AI 引擎、準確度與作業流程皆不變，只有名稱更新。",
        'faq.q8': "SetTime 的官方產品頁面在哪裡？",
        'faq.a8': "SetTime 官方產品頁面為 https://settime.kairosaitech.com。SetTime 由台灣的優時科技 Kairos.ai 開發，專注於 AEC／營建產業的 AI 解決方案；www.kairosaitech.com 為公司官網。AEC 企業可透過聯絡表單申請 SetTime 試點計畫。",
        'faq.q9': "什麼是施工前置算量？SetTime 會涵蓋哪些工種？",
        'faq.a9': "施工前置算量是在動工前完成的數量工作：讀圖並清點材料，讓加工廠或營造廠能報價、訂料與排程。SetTime 從鋼筋起步（已上線：鋼筋數量、重量與斷料彎曲表），正在開發混凝土數量與模板面積，並規劃機電（MEP）與空調（HVAC）算量。",
        'faq.q10': "要如何試用 SetTime？",
        'faq.a10': "可至 https://settime.kairosaitech.com/#pilot 申請免費試點：提供一張結構施工圖，SetTime 會在收到後 24 小時內回傳鋼筋料單。也可以透過 https://www.kairosaitech.com/#contact 的聯絡表單提出試點申請。",
        'nav.news': '最新消息',
        'news.tag': '最新消息',
        'news.title': '最新消息',
        'news.subtitle': '關於我們產品與公司的最新動態。',
        'news.item1.date': '2026 年 9 月 9 日',
        'news.item1.title': 'iTech 更名為 SetTime',
        'news.item1.desc': '我們將 iTech 更名為 SetTime，更貼切傳達產品的核心承諾 — 在混凝土澆置前，提供精準的鋼筋估算與斷料彎曲表。AI 引擎、準確度與流程完全不變。',
        'news.item1.cta': '前往 SetTime 產品頁面 →'
    },
    ja: {
        'products.demo.caption': '合成サンプル図面で見る SetTime ポータルの操作デモ。',
        'clients.tag': '稼働中の導入先',
        'clients.title': 'SetTime は実際のプロジェクトで稼働中',
        'clients.subtitle': 'SetTime は、進行中の建設プロジェクトですでに鉄筋の積算に使われています。',
        'clients.stat.companies': '導入企業',
        'clients.stat.countries': '国・地域',
        'nav.how': '仕組み',
        'nav.pilot': 'パイロット',
        'hero.badge': 'AEC・建設向けAIソリューション',
        'hero.metric1label': '積算の高速化',
        'hero.metric2label': '積算精度',
        'hero.metric3label': '解析した図面',
        'process.title': '図面から加工帳まで',
        'process.subtitle': 'SetTimeが鉄筋積算の全工程を自動化 — 手作業の集計も表計算ミスもなし。',
        'process.step1.title': '図面をアップロード',
        'process.step1.desc': '構造図（PDF・CAD）を取り込み、SetTimeが平面・断面・詳細を解析。',
        'process.step2.title': 'AIが鉄筋を検出',
        'process.step2.desc': 'コンピュータビジョンが鉄筋の径・ピッチ・継手を図面から直接読み取り。',
        'process.step3.title': '積算と加工帳',
        'process.step3.desc': '正確な数量・重量と、出力可能な鉄筋加工帳を生成。',
        'footer.tagline': 'AEC・建設業界のためのAIソリューション — SetTime（AIプレコンストラクション）から始動。',
        'pilot.tag': '募集中',
        'pilot.title': 'パイロット導入企業を募集中',
        'pilot.desc': '実プロジェクトでSetTimeを試験導入していただけるAEC企業を募集しています — 図面をお持ちいただき、製品づくりにご参加、正式リリース前の先行アクセスをご提供します。',
        'pilot.cta': 'パイロットプログラムに応募する',
        'form.sending': '送信中…',
        'form.success': 'ありがとうございます！メッセージを送信しました。',
        'form.error': '送信中に問題が発生しました。もう一度お試しください。',
        'form.errorNetwork': '現在メッセージを送信できません。後ほどお試しください。',
        'form.errorFallback': 'support@kairosaitech.com まで直接ご連絡いただくこともできます。',
        'faq.tag': 'よくある質問',
        'faq.title': 'よくある質問',
        'faq.subtitle': 'SetTimeと優時科技に関するよくある質問にお答えします。',
        'faq.q1': 'SetTimeとは何ですか？どのように鉄筋を積算しますか？',
        'faq.a1': 'SetTime は Kairos.ai が加工会社向けに開発する AI プレコンストラクション・ソフトウェアです。施工図（PDF または CAD）を鉄筋の数量・重量と出力可能な配筋表に変換し、コンピュータビジョンで図面から鉄筋の径・間隔・重ね継手を直接読み取って、遅くてミスの出やすい手作業の積算を置き換えます。鉄筋は提供中、コンクリートと型枠の数量は開発中、設備（MEP）と空調（HVAC）の積算は計画中です。',
        'faq.q2': 'SetTimeは誰のためのものですか？',
        'faq.a2': 'SetTimeはAEC（建築・エンジニアリング・建設）業界向けに開発され、施工業者、鉄筋加工業者、構造技術者、積算チームが、より速く正確な鉄筋積算と入札準備期間の短縮を実現できます。',
        'faq.q3': 'SetTimeは何を出力しますか？',
        'faq.a3': 'SetTimeは正確な鉄筋数量・重量と、出力可能な鉄筋加工帳を生成します。調達、加工スケジュール、コスト積算にすぐ使えます。',
        'faq.q4': 'SetTime以外に優時科技は何を提供していますか？',
        'faq.a4': 'SetTime は Kairos.ai にとって AEC 業界向けの最初の製品です。鉄筋積算が出発点で、ロードマップにはコンクリート、型枠、設備（MEP）、空調（HVAC）があります。SetTime のほかにも、カスタム AI システム設計、バックエンド基盤、AI アプリケーション開発、データ分析基盤を、同じ技術的厳密さで提供しています。',
        'faq.q5': 'AI鉄筋積算は、手作業の積算やCAD配筋プラグインとどう違いますか？',
        'faq.a5': '手作業の積算は、担当者が図面から鉄筋を目視で数え、寸法を測るものです。CAD配筋プラグインは、すでに作成済みのモデルをもとにCADソフト内で配筋詳細図や鉄筋加工帳を自動生成します。SetTimeのようなAI鉄筋積算は、図面（PDFまたはCAD）そのものを直接読み取り、鉄筋のサイズ・間隔・重ね継手を検出することで、モデルを事前に作成することなく数量と鉄筋加工帳を算出します。',
        'faq.q6': 'AI鉄筋積算でも、人による確認が必要なのはどこですか？',
        'faq.a6': 'AI鉄筋積算は完全自動ではなく、SetTimeもそう謳っていません。配筋が密集した箇所、重ね継手のルール、工事途中の図面変更などは、依然として積算担当者の判断が必要です。SetTimeの役割は数量算出のスピードを上げ、表計算のミスを減らすことです — 見積りや加工発注に使う前には、経験ある担当者による確認が推奨されます。',
        'faq.q7': "SetTimeはiTechと同じ製品ですか？",
        'faq.a7': "はい。SetTimeは、優時科技 Kairos.ai のAI鉄筋積算システム「iTech」の新しい名称で、2026年9月9日に名称を変更しました。AIエンジン、精度、処理パイプラインは変わらず、名称のみが新しくなっています。",
        'faq.q8': "SetTimeの公式製品ページはどこですか？",
        'faq.a8': "SetTimeの公式製品ページは https://settime.kairosaitech.com です。SetTimeは、AEC業界向けのAIを開発する台湾の企業 Kairos.ai（優時科技）が開発しています。www.kairosaitech.com は会社のホームページです。AEC企業はお問い合わせフォームからSetTimeのパイロットプログラムに応募できます。",
        'faq.q9': "プレコンストラクションの積算とは何ですか？SetTime はどの工種に対応しますか？",
        'faq.a9': "プレコンストラクションの積算とは、着工前に行う数量作業のことです。図面を読み、材料を数えて、加工会社や施工会社が見積・発注・工程計画を行えるようにします。SetTime は鉄筋から始まり（提供中：鉄筋の数量・重量と配筋表）、コンクリート数量と型枠面積を開発中で、設備（MEP）と空調（HVAC）の積算を計画しています。",
        'faq.q10': "SetTime はどうすれば試せますか？",
        'faq.a10': "https://settime.kairosaitech.com/#pilot から無料パイロットに申し込めます。構造図を 1 枚送ると、受領から 24 時間以内に鉄筋の加工表を返します。https://www.kairosaitech.com/#contact のお問い合わせフォームからも申し込めます。",
        'nav.news': 'ニュース',
        'news.tag': 'ニュース',
        'news.title': '最新ニュース',
        'news.subtitle': '製品と会社の最新情報。',
        'news.item1.date': '2026年9月9日',
        'news.item1.title': 'iTechはSetTimeに名称変更しました',
        'news.item1.desc': '製品が提供する価値 — コンクリート打設の直前に届く正確な鉄筋積算と加工帳 — をより的確に表すため、iTechをSetTimeに改称しました。AIエンジン、精度、処理フローに変更はありません。',
        'news.item1.cta': 'SetTime製品ページへ →'
    },
    es: {
        'products.demo.caption': 'Recorrido por el portal de SetTime con un plano de muestra sintético.',
        'clients.tag': 'Implementaciones activas',
        'clients.title': 'SetTime ya funciona en proyectos reales',
        'clients.subtitle': 'SetTime ya estima el acero de refuerzo en obras en curso.',
        'clients.stat.companies': 'Empresas',
        'clients.stat.countries': 'Países',
        'nav.how': 'Cómo funciona',
        'nav.pilot': 'Piloto',
        'hero.badge': 'IA para AEC y Construcción',
        'hero.metric1label': 'Cómputo más rápido',
        'hero.metric2label': 'Precisión de estimación',
        'hero.metric3label': 'Planos procesados',
        'process.title': 'Del plano al despiece',
        'process.subtitle': 'SetTime ejecuta todo el flujo de cómputo de acero — sin conteo manual ni errores de hoja de cálculo.',
        'process.step1.title': 'Sube los planos',
        'process.step1.desc': 'Carga planos estructurales (PDF o CAD); SetTime procesa plantas, secciones y detalles.',
        'process.step2.title': 'La IA detecta el acero',
        'process.step2.desc': 'Modelos de visión leen barras, diámetros, separación y solapes desde los planos.',
        'process.step3.title': 'Estima y programa',
        'process.step3.desc': 'Obtén cantidades y pesos precisos y una lista de despiece lista para exportar.',
        'footer.tagline': 'Soluciones de IA para el sector AEC y de la construcción, comenzando con SetTime, preconstrucción con IA.',
        'pilot.tag': 'Buscando Ahora',
        'pilot.title': 'Buscando Clientes Piloto',
        'pilot.desc': 'Nos asociamos con empresas AEC para probar SetTime en proyectos reales — trae tus planos, ayuda a dar forma al producto y obtén acceso anticipado antes del lanzamiento general.',
        'pilot.cta': 'Postula al Programa Piloto',
        'form.sending': 'Enviando…',
        'form.success': '¡Gracias! Tu mensaje ha sido enviado.',
        'form.error': 'Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.',
        'form.errorNetwork': 'No se puede enviar tu mensaje ahora. Inténtalo más tarde.',
        'form.errorFallback': 'También puedes contactarnos directamente en support@kairosaitech.com.',
        'faq.tag': 'Preguntas Frecuentes',
        'faq.title': 'Preguntas Frecuentes',
        'faq.subtitle': 'Preguntas comunes sobre SetTime y Kairos.ai, respondidas directamente.',
        'faq.q1': '¿Qué es SetTime y cómo estima el acero de refuerzo?',
        'faq.a1': 'SetTime es el software de preconstrucción con IA de Kairos.ai para fabricantes. Convierte planos de construcción (PDF o CAD) en cantidades y pesos de armadura y una lista de doblado exportable, y su visión por computador lee diámetros, separaciones y empalmes directamente de los planos, sustituyendo el cómputo manual, lento y propenso a errores. Las armaduras ya están disponibles; las cantidades de hormigón y encofrado están en desarrollo; el cómputo de instalaciones (MEP) y climatización (HVAC) está planificado.',
        'faq.q2': '¿Para quién es SetTime?',
        'faq.a2': 'SetTime está diseñado para la industria AEC (arquitectura, ingeniería, construcción) — para contratistas, fabricantes de acero, ingenieros estructurales y equipos de cómputo que necesitan un despiece más rápido y preciso y menos tiempo de preparación de ofertas.',
        'faq.q3': '¿Qué entrega SetTime?',
        'faq.a3': 'SetTime produce cantidades y pesos precisos de acero, y una lista de despiece exportable — lista para compras, programación de fabricación y estimación de costos.',
        'faq.q4': '¿Qué más ofrece Kairos.ai además de SetTime?',
        'faq.a4': 'SetTime es el primer producto de Kairos.ai para el sector AEC: el cómputo de armaduras es el punto de partida, y la hoja de ruta incluye hormigón, encofrado, instalaciones (MEP) y climatización (HVAC). Además de SetTime, ofrecemos diseño de sistemas de IA a medida, infraestructura backend, desarrollo de aplicaciones de IA y plataformas de análisis de datos, con el mismo rigor de ingeniería.',
        'faq.q5': '¿En qué se diferencia el despiece de acero con IA del despiece manual y de los plugins de detallado CAD?',
        'faq.a5': 'El despiece manual significa que un estimador cuenta y mide las barras a mano a partir del plano. Los plugins de detallado CAD automatizan el detallado y la generación de la lista de despiece dentro de una herramienta CAD, partiendo de un modelo ya dibujado. El despiece de acero con IA, como SetTime, en cambio lee directamente el plano — PDF o CAD — y detecta el diámetro, la separación y los solapes de las barras, generando cantidades y una lista de despiece sin que un delineante tenga que construir antes el modelo.',
        'faq.q6': '¿Dónde sigue siendo importante la revisión humana en el despiece de acero con IA?',
        'faq.a6': 'El despiece de acero con IA no es totalmente automático, y SetTime no afirma que lo sea. Los detalles congestionados, las reglas de empalme y solape, y las revisiones a mitad de proyecto siguen requiriendo el criterio de un estimador. La función de SetTime es acelerar el conteo y reducir errores de hoja de cálculo — los estimadores con experiencia deben revisar igualmente el resultado antes de usarlo en una oferta o una orden de fabricación.',
        'faq.q7': "¿SetTime es el mismo producto que iTech?",
        'faq.a7': "Sí. SetTime es el nuevo nombre de iTech, el sistema de estimación de acero con IA de Kairos.ai, renombrado el 9 de septiembre de 2026. El motor de IA, la precisión y el flujo de trabajo no cambian; solo el nombre es nuevo.",
        'faq.q8': "¿Dónde está la página oficial del producto SetTime?",
        'faq.a8': "La página oficial del producto SetTime es https://settime.kairosaitech.com. SetTime está desarrollado por Kairos.ai (優時科技), una empresa taiwanesa que crea IA para el sector AEC; www.kairosaitech.com es la página de la empresa. Las empresas AEC pueden solicitar el programa piloto de SetTime a través del formulario de contacto.",
        'faq.q9': "¿Qué es el cómputo de preconstrucción y qué oficios cubrirá SetTime?",
        'faq.a9': "El cómputo de preconstrucción es el trabajo de cantidades previo a la obra: leer los planos y contar materiales para que un fabricante o constructor pueda ofertar, pedir y planificar. SetTime empieza por las armaduras (disponible hoy: cantidades, pesos y lista de doblado), desarrolla las cantidades de hormigón y la superficie de encofrado, y tiene previsto el cómputo de instalaciones (MEP) y climatización (HVAC).",
        'faq.q10': "¿Cómo puedo probar SetTime?",
        'faq.a10': "Solicite el piloto gratuito en https://settime.kairosaitech.com/#pilot: envíe un plano estructural y SetTime devuelve la lista de armadura en las 24 horas siguientes a recibirlo. También puede solicitarlo con el formulario de contacto en https://www.kairosaitech.com/#contact.",
        'nav.news': 'Noticias',
        'news.tag': 'Noticias',
        'news.title': 'Últimas Noticias',
        'news.subtitle': 'Novedades sobre nuestros productos y la empresa.',
        'news.item1.date': '9 de septiembre de 2026',
        'news.item1.title': 'iTech ahora se llama SetTime',
        'news.item1.desc': 'Renombramos iTech a SetTime para reflejar mejor lo que ofrece el producto — estimaciones precisas de acero y listas de despiece, listas justo antes de que fragüe el concreto. El motor de IA, la precisión y el flujo de trabajo no cambian.',
        'news.item1.cta': 'Visita la página del producto SetTime →'
    },
    it: {
        'products.demo.caption': 'Panoramica del portale SetTime su una planimetria di esempio sintetica.',
        'clients.tag': 'Implementazioni attive',
        'clients.title': 'SetTime è già al lavoro su progetti reali',
        'clients.subtitle': "SetTime sta già stimando l'armatura in cantieri attivi.",
        'clients.stat.companies': 'Aziende',
        'clients.stat.countries': 'Paesi',
        'nav.how': 'Come funziona',
        'nav.pilot': 'Pilota',
        'hero.badge': 'IA per AEC e Costruzioni',
        'hero.metric1label': 'Computo più rapido',
        'hero.metric2label': 'Precisione di stima',
        'hero.metric3label': 'Disegni elaborati',
        'process.title': 'Dal disegno alla distinta',
        'process.subtitle': "SetTime esegue l'intero flusso di computo dei ferri — niente conteggi manuali né errori di foglio di calcolo.",
        'process.step1.title': 'Carica i disegni',
        'process.step1.desc': 'Importa i disegni strutturali (PDF o CAD); SetTime elabora piante, sezioni e dettagli.',
        'process.step2.title': "L'IA rileva i ferri",
        'process.step2.desc': 'Modelli di visione leggono barre, diametri, passo e sovrapposizioni dai disegni.',
        'process.step3.title': 'Stima e distinta',
        'process.step3.desc': 'Ottieni quantità e pesi precisi e una distinta di piegatura pronta da esportare.',
        'footer.tagline': 'Soluzioni IA per il settore AEC e delle costruzioni, a partire da SetTime, la precostruzione con IA.',
        'pilot.tag': 'Ricerca Aperta',
        'pilot.title': 'Cerchiamo Clienti Pilota',
        'pilot.desc': 'Collaboriamo con aziende AEC per testare SetTime su progetti reali — porta i tuoi disegni, aiuta a plasmare il prodotto e ottieni accesso anticipato prima del rilascio generale.',
        'pilot.cta': 'Candidati al Programma Pilota',
        'form.sending': 'Invio in corso…',
        'form.success': 'Grazie! Il tuo messaggio è stato inviato.',
        'form.error': "Si è verificato un problema nell'invio del messaggio. Riprova.",
        'form.errorNetwork': 'Impossibile inviare il messaggio ora. Riprova più tardi.',
        'form.errorFallback': "Puoi anche contattarci direttamente all'indirizzo support@kairosaitech.com.",
        'faq.tag': 'Domande Frequenti',
        'faq.title': 'Domande Frequenti',
        'faq.subtitle': 'Domande comuni su SetTime e Kairos.ai, con risposte dirette.',
        'faq.q1': "Cos'è SetTime e come stima i ferri d'armatura?",
        'faq.a1': 'SetTime è il software di precostruzione con IA di Kairos.ai per le officine. Trasforma i disegni di cantiere (PDF o CAD) in quantità e pesi di armatura e in una distinta di piegatura esportabile, e la sua visione artificiale legge diametri, passi e sovrapposizioni direttamente dai disegni, al posto del computo manuale, lento e soggetto a errori. Le armature sono disponibili; le quantità di calcestruzzo e casseratura sono in sviluppo; il computo di impianti (MEP) e climatizzazione (HVAC) è pianificato.',
        'faq.q2': 'A chi si rivolge SetTime?',
        'faq.a2': "SetTime è progettato per il settore AEC (architettura, ingegneria, costruzioni) — al servizio di imprese, carpenterie, ingegneri strutturisti e team di computo che necessitano di un rilievo dei ferri più rapido e preciso e tempi di offerta più brevi.",
        'faq.q3': 'Cosa produce SetTime in output?',
        'faq.a3': "SetTime produce quantità e pesi precisi dei ferri e una distinta di piegatura esportabile — pronta per acquisti, pianificazione della produzione e stima dei costi.",
        'faq.q4': 'Cos\'altro offre Kairos.ai oltre a SetTime?',
        'faq.a4': 'SetTime è il primo prodotto di Kairos.ai per il settore AEC: il computo delle armature è il punto di partenza, e la roadmap comprende calcestruzzo, casseratura, impianti (MEP) e climatizzazione (HVAC). Oltre a SetTime offriamo progettazione di sistemi di IA su misura, infrastruttura backend, sviluppo di applicazioni di IA e piattaforme di analisi dei dati, con lo stesso rigore ingegneristico.',
        'faq.q5': 'In cosa il computo ferri con IA è diverso dal computo manuale e dai plugin di dettaglio CAD?',
        'faq.a5': "Il computo manuale significa che un computista conta e misura le barre a mano dal disegno. I plugin di dettaglio CAD automatizzano il dettaglio e la generazione della distinta di piegatura all'interno di uno strumento CAD, partendo da un modello già disegnato. Il computo ferri con IA come SetTime, invece, legge direttamente il disegno — PDF o CAD — e rileva diametro, passo e sovrapposizioni delle barre, producendo quantità e distinta di piegatura senza che un disegnatore debba prima costruire il modello.",
        'faq.q6': 'Dove conta ancora la revisione umana nel computo ferri con IA?',
        'faq.a6': "Il computo ferri con IA non è completamente automatico, e SetTime non lo dichiara tale. Dettagli congestionati, regole di giunzione e sovrapposizione, e revisioni in corso d'opera richiedono ancora il giudizio di un computista esperto. Il compito di SetTime è velocizzare il conteggio e ridurre gli errori di foglio di calcolo — l'output va comunque rivisto da un computista esperto prima di entrare in un'offerta o in un ordine di produzione.",
        'faq.q7': "SetTime è lo stesso prodotto di iTech?",
        'faq.a7': "Sì. SetTime è il nuovo nome di iTech, il sistema di Kairos.ai per il computo dei ferri d'armatura con IA, rinominato il 9 settembre 2026. Motore IA, precisione e pipeline restano invariati: cambia solo il nome.",
        'faq.q8': "Dov'è la pagina ufficiale del prodotto SetTime?",
        'faq.a8': "La pagina ufficiale del prodotto SetTime è https://settime.kairosaitech.com. SetTime è sviluppato da Kairos.ai (優時科技), un'azienda taiwanese che sviluppa IA per il settore AEC; www.kairosaitech.com è il sito aziendale. Le aziende AEC possono candidarsi al programma pilota di SetTime tramite il modulo di contatto.",
        'faq.q9': "Cos'è il computo di precostruzione e quali lavorazioni coprirà SetTime?",
        'faq.a9': "Il computo di precostruzione è il lavoro sulle quantità che precede il cantiere: leggere i disegni e contare i materiali perché un'officina o un'impresa possa offrire, ordinare e programmare. SetTime parte dalle armature (disponibile oggi: quantità, pesi e distinta di piegatura), sta sviluppando le quantità di calcestruzzo e le superfici di casseratura, e pianifica il computo di impianti (MEP) e climatizzazione (HVAC).",
        'faq.q10': "Come posso provare SetTime?",
        'faq.a10': "Richieda il pilota gratuito su https://settime.kairosaitech.com/#pilot: invii un disegno strutturale e SetTime restituisce la distinta delle armature entro 24 ore dal ricevimento. Può farlo anche con il modulo di contatto su https://www.kairosaitech.com/#contact.",
        'nav.news': 'Notizie',
        'news.tag': 'Notizie',
        'news.title': 'Ultime Notizie',
        'news.subtitle': 'Novità sui nostri prodotti e sull\'azienda.',
        'news.item1.date': '9 settembre 2026',
        'news.item1.title': 'iTech ora si chiama SetTime',
        'news.item1.desc': "Abbiamo rinominato iTech in SetTime per riflettere meglio ciò che offre il prodotto — stime precise dei ferri e distinte di piegatura, pronte proprio prima della presa del calcestruzzo. Il motore AI, la precisione e il flusso di lavoro restano invariati.",
        'news.item1.cta': 'Vai alla pagina del prodotto SetTime →'
    },
    fr: {
        'products.demo.caption': "Visite du portail SetTime sur un plan d'exemple synthétique.",
        'clients.tag': 'Déploiements en cours',
        'clients.title': 'SetTime tourne déjà sur des projets réels',
        'clients.subtitle': 'SetTime estime déjà les armatures sur des chantiers en cours.',
        'clients.stat.companies': 'Entreprises',
        'clients.stat.countries': 'Pays',
        'nav.how': 'Comment ça marche',
        'nav.pilot': 'Pilote',
        'hero.badge': "IA pour l'AEC et la Construction",
        'hero.metric1label': 'Métré plus rapide',
        'hero.metric2label': "Précision d'estimation",
        'hero.metric3label': 'Plans traités',
        'process.title': 'Du plan à la nomenclature',
        'process.subtitle': "SetTime exécute tout le flux de métré des armatures — sans comptage manuel ni erreurs de tableur.",
        'process.step1.title': 'Importez les plans',
        'process.step1.desc': 'Chargez les plans de structure (PDF ou CAO) ; SetTime traite plans, coupes et détails.',
        'process.step2.title': "L'IA détecte les armatures",
        'process.step2.desc': 'Des modèles de vision lisent barres, diamètres, espacements et recouvrements depuis les plans.',
        'process.step3.title': 'Estimez et planifiez',
        'process.step3.desc': 'Obtenez quantités et poids précis et une nomenclature de façonnage prête à exporter.',
        'footer.tagline': 'Solutions IA pour le secteur AEC et de la construction, à commencer par SetTime, la préconstruction par IA.',
        'pilot.tag': 'Recrutement en cours',
        'pilot.title': 'Recherche de Clients Pilotes',
        'pilot.desc': "Nous nous associons à des entreprises AEC pour tester SetTime sur des projets réels — apportez vos plans, participez à façonner le produit et bénéficiez d'un accès anticipé avant le lancement général.",
        'pilot.cta': 'Postuler au Programme Pilote',
        'form.sending': 'Envoi en cours…',
        'form.success': 'Merci ! Votre message a été envoyé.',
        'form.error': "Un problème est survenu lors de l'envoi. Veuillez réessayer.",
        'form.errorNetwork': "Impossible d'envoyer votre message pour le moment. Réessayez plus tard.",
        'form.errorFallback': 'Vous pouvez aussi nous contacter directement à support@kairosaitech.com.',
        'faq.tag': 'FAQ',
        'faq.title': 'Questions Fréquentes',
        'faq.subtitle': "Questions courantes sur SetTime et Kairos.ai, avec des réponses directes.",
        'faq.q1': "Qu'est-ce que SetTime et comment estime-t-il les armatures ?",
        'faq.a1': 'SetTime est le logiciel de préconstruction par IA de Kairos.ai pour les fabricants. Il transforme les plans de construction (PDF ou CAD) en quantités et poids d\'armatures et en nomenclature de façonnage exportable, et sa vision par ordinateur lit diamètres, espacements et recouvrements directement sur les plans, à la place du métré manuel, lent et sujet aux erreurs. Les armatures sont disponibles ; les quantités de béton et de coffrage sont en développement ; le métré des lots techniques (MEP) et du CVC (HVAC) est prévu.',
        'faq.q2': 'À qui s\'adresse SetTime ?',
        'faq.a2': "SetTime est conçu pour le secteur AEC (architecture, ingénierie, construction) — au service des entreprises, des façonniers, des ingénieurs structure et des équipes de métré qui ont besoin d'un métré des armatures plus rapide et plus précis, et d'une préparation d'offres plus courte.",
        'faq.q3': "Que produit SetTime ?",
        'faq.a3': "SetTime produit des quantités et poids précis d'armatures, ainsi qu'une nomenclature de façonnage exportable — prête pour les achats, la planification de fabrication et l'estimation des coûts.",
        'faq.q4': "Que propose Kairos.ai en plus de SetTime ?",
        'faq.a4': 'SetTime est le premier produit de Kairos.ai pour le secteur AEC : le métré d\'armatures est le point de départ, et la feuille de route comprend béton, coffrage, lots techniques (MEP) et CVC (HVAC). Au-delà de SetTime, nous proposons la conception de systèmes d\'IA sur mesure, une infrastructure backend, le développement d\'applications d\'IA et des plateformes d\'analyse de données, avec la même rigueur d\'ingénierie.',
        'faq.q5': "En quoi le métré d'armatures par IA diffère-t-il du métré manuel et des plugins de ferraillage CAO ?",
        'faq.a5': "Le métré manuel signifie qu'un métreur compte et mesure les barres à la main sur le plan. Les plugins de ferraillage CAO automatisent le ferraillage et la génération de la nomenclature de façonnage à l'intérieur d'un outil CAO, à partir d'une maquette déjà réalisée. Le métré d'armatures par IA, comme SetTime, lit directement le plan — PDF ou CAO — et détecte diamètre, espacement et recouvrements des barres, produisant quantités et nomenclature de façonnage sans qu'un dessinateur ait d'abord à construire la maquette.",
        'faq.q6': "Où la relecture humaine reste-t-elle importante dans le métré d'armatures par IA ?",
        'faq.a6': "Le métré d'armatures par IA n'est pas entièrement automatique, et SetTime ne le prétend pas. Les zones de ferraillage dense, les règles de recouvrement et de jonction, ainsi que les révisions en cours de projet, requièrent toujours le jugement d'un métreur expérimenté. Le rôle de SetTime est d'accélérer le comptage et de réduire les erreurs de tableur — le résultat doit toujours être relu par un métreur expérimenté avant d'entrer dans une offre ou un ordre de fabrication.",
        'faq.q7': "SetTime est-il le même produit qu'iTech ?",
        'faq.a7': "Oui. SetTime est le nouveau nom d'iTech, le système d'estimation des armatures par IA de Kairos.ai, renommé le 9 septembre 2026. Le moteur d'IA, la précision et le pipeline restent inchangés : seul le nom est nouveau.",
        'faq.q8': "Où se trouve la page produit officielle de SetTime ?",
        'faq.a8': "La page produit officielle de SetTime est https://settime.kairosaitech.com. SetTime est développé par Kairos.ai (優時科技), une entreprise taïwanaise qui conçoit de l'IA pour le secteur AEC ; www.kairosaitech.com est le site de l'entreprise. Les entreprises AEC peuvent postuler au programme pilote SetTime via le formulaire de contact.",
        'faq.q9': "Qu'est-ce que le métré de préconstruction, et quels corps de métier SetTime couvrira-t-il ?",
        'faq.a9': "Le métré de préconstruction est le travail sur les quantités qui précède le chantier : lire les plans et compter les matériaux pour qu'un fabricant ou une entreprise puisse chiffrer, commander et planifier. SetTime commence par les armatures (disponible aujourd'hui : quantités, poids et nomenclature de façonnage), développe les quantités de béton et les surfaces de coffrage, et prévoit le métré des lots techniques (MEP) et du CVC (HVAC).",
        'faq.q10': "Comment essayer SetTime ?",
        'faq.a10': "Demandez le pilote gratuit sur https://settime.kairosaitech.com/#pilot : envoyez un plan de structure et SetTime renvoie la nomenclature d'armatures dans les 24 heures suivant sa réception. Vous pouvez aussi passer par le formulaire de contact sur https://www.kairosaitech.com/#contact.",
        'nav.news': 'Actualités',
        'news.tag': 'Actualités',
        'news.title': 'Dernières Actualités',
        'news.subtitle': "Nouveautés sur nos produits et l'entreprise.",
        'news.item1.date': '9 septembre 2026',
        'news.item1.title': "iTech s'appelle désormais SetTime",
        'news.item1.desc': "Nous avons renommé iTech en SetTime pour mieux refléter ce que le produit offre — des estimations précises des armatures et des nomenclatures de façonnage, prêtes juste avant la prise du béton. Le moteur IA, la précision et le flux de travail restent inchangés.",
        'news.item1.cta': 'Voir la page produit SetTime →'
    },
    ko: {
        'products.demo.caption': '합성 샘플 도면으로 살펴보는 SetTime 포털.',
        'clients.tag': '실제 도입 현황',
        'clients.title': 'SetTime은 실제 프로젝트에서 활용되고 있습니다',
        'clients.subtitle': 'SetTime은 이미 진행 중인 건설 프로젝트에서 철근을 산출하고 있습니다.',
        'clients.stat.companies': '기업',
        'clients.stat.countries': '국가',
        'nav.how': '작동 방식',
        'nav.pilot': '파일럿',
        'hero.badge': 'AEC·건설을 위한 AI 솔루션',
        'hero.metric1label': '더 빠른 산출',
        'hero.metric2label': '산출 정확도',
        'hero.metric3label': '처리한 도면',
        'process.title': '도면에서 가공목록까지',
        'process.subtitle': 'SetTime이 철근 산출 전 과정을 자동화 — 수작업 집계도, 스프레드시트 오류도 없습니다.',
        'process.step1.title': '도면 업로드',
        'process.step1.desc': '구조 도면(PDF·CAD)을 올리면 SetTime이 평면·단면·상세를 분석합니다.',
        'process.step2.title': 'AI가 철근 인식',
        'process.step2.desc': '컴퓨터 비전이 도면에서 철근 호칭·간격·이음을 직접 읽어냅니다.',
        'process.step3.title': '산출 및 가공',
        'process.step3.desc': '정확한 수량·중량과 내보내기 가능한 철근 가공목록을 생성합니다.',
        'footer.tagline': 'AEC 및 건설 산업을 위한 AI 솔루션 — SetTime(AI 시공 전 단계)에서 시작합니다.',
        'pilot.tag': '모집 중',
        'pilot.title': '파일럿 고객 모집 중',
        'pilot.desc': '실제 프로젝트에서 SetTime을 시범 도입할 AEC 기업을 모집합니다 — 도면을 제공하고 제품 개선에 참여하며 정식 출시 전 우선 이용 기회를 얻으세요.',
        'pilot.cta': '파일럿 프로그램 신청하기',
        'form.sending': '전송 중…',
        'form.success': '감사합니다! 메시지가 전송되었습니다.',
        'form.error': '메시지 전송 중 문제가 발생했습니다. 다시 시도해 주세요.',
        'form.errorNetwork': '지금은 메시지를 보낼 수 없습니다. 나중에 다시 시도해 주세요.',
        'form.errorFallback': 'support@kairosaitech.com 으로 직접 연락하실 수도 있습니다.',
        'faq.tag': '자주 묻는 질문',
        'faq.title': '자주 묻는 질문',
        'faq.subtitle': 'SetTime과 Kairos.ai에 대해 자주 묻는 질문에 답합니다.',
        'faq.q1': 'SetTime이란 무엇이며 철근을 어떻게 산출하나요?',
        'faq.a1': 'SetTime은 Kairos.ai가 제작 업체를 위해 만든 AI 시공 전 단계(Preconstruction) 소프트웨어입니다. 시공도면(PDF 또는 CAD)을 철근 물량·중량과 내보낼 수 있는 철근 가공표로 변환하고, 컴퓨터 비전이 도면에서 철근 직경, 간격, 이음을 직접 읽어 느리고 오류가 잦은 수작업 물량 산출을 대체합니다. 철근은 제공 중이며, 콘크리트와 거푸집 물량은 개발 중, 설비(MEP)와 공조(HVAC) 물량 산출은 계획 중입니다.',
        'faq.q2': 'SetTime은 누구를 위한 것인가요?',
        'faq.a2': 'SetTime은 AEC(건축·엔지니어링·건설) 산업을 위해 만들어졌으며, 시공사, 철근 가공업체, 구조 엔지니어, 산출 팀이 더 빠르고 정확한 철근 산출과 더 짧은 입찰 준비 시간을 얻도록 돕습니다.',
        'faq.q3': 'SetTime은 무엇을 출력하나요?',
        'faq.a3': 'SetTime은 정확한 철근 수량·중량과 내보내기 가능한 철근 가공목록을 생성합니다 — 구매, 가공 일정 수립, 원가 산출에 바로 사용할 수 있습니다.',
        'faq.q4': 'SetTime 외에 Kairos.ai는 무엇을 제공하나요?',
        'faq.a4': 'SetTime은 Kairos.ai가 AEC 산업에 내놓은 첫 제품으로, 철근 물량 산출이 출발점이며 로드맵에는 콘크리트, 거푸집, 설비(MEP), 공조(HVAC)가 포함됩니다. SetTime 외에도 맞춤형 AI 시스템 설계, 백엔드 인프라, AI 애플리케이션 개발, 데이터 분석 플랫폼을 같은 엔지니어링 엄밀함으로 제공합니다.',
        'faq.q5': 'AI 철근 산출은 수기 산출이나 CAD 배근 플러그인과 무엇이 다른가요?',
        'faq.a5': '수기 산출은 견적 담당자가 도면에서 철근을 직접 세고 측정하는 방식입니다. CAD 배근 플러그인은 이미 작성된 모델을 기반으로 CAD 툴 안에서 배근 상세도와 가공목록을 자동 생성합니다. SetTime과 같은 AI 철근 산출은 이와 달리 도면(PDF 또는 CAD) 자체를 직접 읽어 철근 규격, 간격, 이음 길이를 감지해, 별도로 모델을 만들지 않고도 수량과 가공목록을 산출합니다.',
        'faq.q6': 'AI 철근 산출에서도 사람의 검토가 여전히 필요한 부분은 어디인가요?',
        'faq.a6': 'AI 철근 산출은 완전 자동화가 아니며, SetTime도 그렇게 주장하지 않습니다. 철근이 밀집된 구간, 이음·겹침 규정, 프로젝트 중 도면 변경 등은 여전히 숙련된 견적 담당자의 판단이 필요합니다. SetTime의 역할은 산출 속도를 높이고 스프레드시트 오류를 줄이는 것이며, 입찰이나 가공 발주에 쓰이기 전에는 숙련된 담당자의 검토를 거쳐야 합니다.',
        'faq.q7': "SetTime은 iTech와 같은 제품인가요?",
        'faq.a7': "네. SetTime은 Kairos.ai(優時科技)의 AI 철근 산출 시스템 iTech의 새 이름으로, 2026년 9월 9일에 이름이 변경되었습니다. AI 엔진, 정확도, 처리 파이프라인은 그대로이며 이름만 새로워졌습니다.",
        'faq.q8': "SetTime 공식 제품 페이지는 어디인가요?",
        'faq.a8': "SetTime 공식 제품 페이지는 https://settime.kairosaitech.com 입니다. SetTime은 AEC 산업을 위한 AI를 개발하는 대만 기업 Kairos.ai(優時科技)가 만들었으며, www.kairosaitech.com은 회사 홈페이지입니다. AEC 기업은 문의 양식을 통해 SetTime 파일럿 프로그램에 신청할 수 있습니다.",
        'faq.q9': "시공 전 물량 산출(Preconstruction takeoff)이란 무엇이며 SetTime은 어떤 공종을 다루나요?",
        'faq.a9': "시공 전 물량 산출은 착공 전에 하는 물량 작업입니다. 도면을 읽고 자재를 세어 제작 업체나 시공사가 견적, 발주, 공정 계획을 세울 수 있게 합니다. SetTime은 철근에서 시작하며(현재 제공 중: 철근 물량, 중량, 가공표), 콘크리트 물량과 거푸집 면적을 개발 중이고, 설비(MEP)와 공조(HVAC) 물량 산출을 계획하고 있습니다.",
        'faq.q10': "SetTime을 어떻게 사용해 볼 수 있나요?",
        'faq.a10': "https://settime.kairosaitech.com/#pilot 에서 무료 파일럿을 신청하세요. 구조 도면 한 장을 보내면 접수 후 24시간 이내에 철근 가공표를 돌려드립니다. https://www.kairosaitech.com/#contact 의 문의 양식으로도 신청할 수 있습니다.",
        'nav.news': '소식',
        'news.tag': '소식',
        'news.title': '최신 소식',
        'news.subtitle': '제품 및 회사 관련 최신 소식입니다.',
        'news.item1.date': '2026년 9월 9일',
        'news.item1.title': 'iTech가 SetTime으로 이름을 바꿨습니다',
        'news.item1.desc': '제품이 전달하는 가치 — 콘크리트가 굳기 직전에 제공되는 정확한 철근 산출과 가공목록 — 을 더 잘 담기 위해 iTech를 SetTime으로 이름을 바꿨습니다. AI 엔진, 정확도, 처리 과정은 그대로입니다.',
        'news.item1.cta': 'SetTime 제품 페이지로 이동 →'
    },
    de: {
        'products.demo.caption': 'Rundgang durch das SetTime-Portal anhand eines synthetischen Beispielplans.',
        'clients.tag': 'Aktive Einsätze',
        'clients.title': 'SetTime läuft bereits in echten Projekten',
        'clients.subtitle': 'SetTime ermittelt bereits Bewehrung auf laufenden Bauprojekten.',
        'clients.stat.companies': 'Unternehmen',
        'clients.stat.countries': 'Länder',
        'nav.how': 'So funktioniert es',
        'nav.pilot': 'Pilot',
        'hero.badge': 'KI für AEC und Bauwesen',
        'hero.metric1label': 'Schnellere Kalkulation',
        'hero.metric2label': 'Kalkulationsgenauigkeit',
        'hero.metric3label': 'Verarbeitete Pläne',
        'process.title': 'Vom Plan zur Biegeliste',
        'process.subtitle': 'SetTime führt den gesamten Bewehrungs-Workflow aus — ohne manuelles Zählen, ohne Tabellenfehler.',
        'process.step1.title': 'Pläne hochladen',
        'process.step1.desc': 'Lade Statikpläne (PDF oder CAD) hoch; SetTime verarbeitet Grundrisse, Schnitte und Details.',
        'process.step2.title': 'KI erkennt Bewehrung',
        'process.step2.desc': 'Computer-Vision liest Stäbe, Durchmesser, Abstände und Übergreifungen direkt aus den Plänen.',
        'process.step3.title': 'Kalkulieren & planen',
        'process.step3.desc': 'Erhalte präzise Mengen und Gewichte sowie eine exportfertige Biegeliste.',
        'footer.tagline': 'KI-Lösungen für die AEC- und Baubranche — beginnend mit SetTime, KI für die Bauvorbereitung.',
        'pilot.tag': 'Jetzt Gesucht',
        'pilot.title': 'Pilotkunden Gesucht',
        'pilot.desc': 'Wir arbeiten mit AEC-Unternehmen zusammen, um SetTime in echten Projekten zu erproben — bringen Sie Ihre Pläne mit, gestalten Sie das Produkt mit und erhalten Sie frühzeitigen Zugang vor dem allgemeinen Start.',
        'pilot.cta': 'Für das Pilotprogramm bewerben',
        'form.sending': 'Wird gesendet…',
        'form.success': 'Danke! Ihre Nachricht wurde gesendet.',
        'form.error': 'Beim Senden Ihrer Nachricht ist ein Problem aufgetreten. Bitte erneut versuchen.',
        'form.errorNetwork': 'Ihre Nachricht kann derzeit nicht gesendet werden. Bitte später erneut versuchen.',
        'form.errorFallback': 'Sie erreichen uns auch direkt unter support@kairosaitech.com.',
        'faq.tag': 'FAQ',
        'faq.title': 'Häufig gestellte Fragen',
        'faq.subtitle': 'Häufige Fragen zu SetTime und Kairos.ai, direkt beantwortet.',
        'faq.q1': 'Was ist SetTime und wie kalkuliert es Bewehrung?',
        'faq.a1': 'SetTime ist die KI-Software von Kairos.ai für die Bauvorbereitung in Betrieben. Sie verwandelt Konstruktionspläne (PDF oder CAD) in Bewehrungsmengen, Gewichte und eine exportierbare Biegeliste; Computer Vision liest Stabdurchmesser, Abstände und Übergreifungen direkt aus den Plänen und ersetzt die langsame, fehleranfällige manuelle Ermittlung. Bewehrung ist verfügbar; Beton- und Schalungsmengen sind in Entwicklung; MEP- und HVAC-Mengenermittlung sind geplant.',
        'faq.q2': 'Für wen ist SetTime gedacht?',
        'faq.a2': 'SetTime wurde für die AEC-Branche (Architektur, Ingenieurwesen, Bauwesen) entwickelt — für Bauunternehmen, Bewehrungsbetriebe, Statiker und Kalkulationsteams, die ein schnelleres, genaueres Bewehrungsaufmaß und kürzere Angebotszeiten benötigen.',
        'faq.q3': 'Was liefert SetTime als Ergebnis?',
        'faq.a3': 'SetTime erzeugt präzise Bewehrungsmengen und -gewichte sowie eine exportierbare Biegeliste — einsatzbereit für Beschaffung, Fertigungsplanung und Kostenkalkulation.',
        'faq.q4': 'Was bietet Kairos.ai neben SetTime noch an?',
        'faq.a4': 'SetTime ist das erste Produkt von Kairos.ai für die AEC-Branche: Die Bewehrungsermittlung ist der Ausgangspunkt, die Roadmap umfasst Beton, Schalung, MEP und HVAC. Neben SetTime bieten wir individuelles KI-Systemdesign, Backend-Infrastruktur, KI-Anwendungsentwicklung und Datenanalyseplattformen, mit derselben technischen Sorgfalt.',
        'faq.q5': 'Wie unterscheidet sich KI-Bewehrungsaufmaß von manuellem Aufmaß und CAD-Bewehrungs-Plugins?',
        'faq.a5': 'Beim manuellen Aufmaß zählt und misst ein Kalkulator die Stäbe von Hand aus der Zeichnung. CAD-Bewehrungs-Plugins automatisieren die Bewehrungsführung und die Erstellung der Biegeliste innerhalb eines CAD-Tools, ausgehend von einem bereits erstellten Modell. KI-Bewehrungsaufmaß wie SetTime liest dagegen direkt die Zeichnung — PDF oder CAD — und erkennt Stabdurchmesser, Abstände und Übergreifungen, um Mengen und eine Biegeliste zu erzeugen, ohne dass zuvor ein Modell erstellt werden muss.',
        'faq.q6': 'Wo ist beim KI-Bewehrungsaufmaß weiterhin menschliche Prüfung nötig?',
        'faq.a6': 'KI-Bewehrungsaufmaß ist nicht vollautomatisch, und das behauptet SetTime auch nicht. Bei dicht bewehrten Details, Stoß- und Übergreifungsregeln sowie Planänderungen während des Projekts ist weiterhin das Urteil eines erfahrenen Kalkulators gefragt. SetTime beschleunigt das Zählen und reduziert Tabellenfehler — erfahrene Kalkulatoren sollten das Ergebnis dennoch prüfen, bevor es in ein Angebot oder einen Fertigungsauftrag einfließt.',
        'faq.q7': "Ist SetTime dasselbe Produkt wie iTech?",
        'faq.a7': "Ja. SetTime ist der neue Name von iTech, dem KI-System von Kairos.ai für die Bewehrungskalkulation, umbenannt am 9. September 2026. KI-Engine, Genauigkeit und Pipeline bleiben unverändert — nur der Name ist neu.",
        'faq.q8': "Wo ist die offizielle Produktseite von SetTime?",
        'faq.a8': "Die offizielle Produktseite von SetTime ist https://settime.kairosaitech.com. SetTime wird von Kairos.ai (優時科技) entwickelt, einem Unternehmen aus Taiwan, das KI für die AEC-Branche baut; www.kairosaitech.com ist die Unternehmenswebsite. AEC-Unternehmen können sich über das Kontaktformular für das SetTime-Pilotprogramm bewerben.",
        'faq.q9': "Was ist Mengenermittlung in der Bauvorbereitung, und welche Gewerke deckt SetTime ab?",
        'faq.a9': "Mengenermittlung in der Bauvorbereitung ist die Mengenarbeit vor Baubeginn: Pläne lesen und Materialien zählen, damit ein Betrieb oder Bauunternehmen kalkulieren, bestellen und planen kann. SetTime beginnt bei der Bewehrung (heute verfügbar: Mengen, Gewichte und Biegeliste), entwickelt Betonmengen und Schalungsflächen und plant die Mengenermittlung für MEP und HVAC.",
        'faq.q10': "Wie kann ich SetTime ausprobieren?",
        'faq.a10': "Beantragen Sie den kostenlosen Pilot unter https://settime.kairosaitech.com/#pilot: Senden Sie einen Konstruktionsplan, und SetTime liefert die Bewehrungsliste innerhalb von 24 Stunden nach Eingang. Sie können auch das Kontaktformular unter https://www.kairosaitech.com/#contact nutzen.",
        'nav.news': 'News',
        'news.tag': 'News',
        'news.title': 'Neuigkeiten',
        'news.subtitle': 'Neuigkeiten zu unseren Produkten und dem Unternehmen.',
        'news.item1.date': '9. September 2026',
        'news.item1.title': 'iTech heißt jetzt SetTime',
        'news.item1.desc': 'Wir haben iTech in SetTime umbenannt, um besser zu vermitteln, was das Produkt leistet — präzise Bewehrungsmengen und Biegelisten, fertig kurz bevor der Beton abbindet. KI-Engine, Genauigkeit und Ablauf bleiben unverändert.',
        'news.item1.cta': 'Zur SetTime-Produktseite →'
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
        if (window.__lenis) { window.__lenis.scrollTo(top, { duration: 1.2 }); return; }
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
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    sectionEls.forEach(s => nio.observe(s));
}

const processEl = document.querySelector('.process');
if (processEl && !prefersReduced) {
    if ('IntersectionObserver' in window) {
        new IntersectionObserver((en) => processEl.classList.toggle('is-live', en[en.length - 1].isIntersecting), { rootMargin: '-8% 0px -8% 0px' }).observe(processEl);
    } else {
        processEl.classList.add('is-live');
    }
}

// ===========================
// Scroll engine: progress rail + spine draw + grid parallax
// ===========================
const root = document.documentElement;
const rail = document.querySelector('.scroll-rail');
const spineEl = document.querySelector('.spine');
const gridEl = document.querySelector('.bg-grid');
const scanEl = document.querySelector('.bg-scan');
let ticking = false;
function onScroll() {
    const scrollTop = window.pageYOffset;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const p = docH > 0 ? Math.min(scrollTop / docH, 1) : 0;
    if (rail) rail.style.setProperty('--p', p);
    if (spineEl) spineEl.style.setProperty('--spine-fill', (p * 100).toFixed(2) + '%');
    if (gridEl) gridEl.style.setProperty('--grid-shift', (-scrollTop * 0.04).toFixed(1) + 'px');
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
        if (!scanEl) return;
        scanEl.style.setProperty('--mx', (e.clientX / window.innerWidth * 100).toFixed(1) + '%');
        scanEl.style.setProperty('--my', (e.clientY / window.innerHeight * 100).toFixed(1) + '%');
    }, 12));
}

// ===========================
// Traffic source attribution (UTM + referrer)
// ===========================
// Captures utm_source/medium/campaign from the URL, or infers a source from
// document.referrer (google, linkedin, chatgpt/openai, etc.) when no UTM tags
// are present. First-touch is persisted in localStorage so it survives to the
// contact form even if the visitor lands on one page and converts on another;
// a fresh UTM-tagged visit overwrites it (last campaign click wins).
const UTM_STORAGE_KEY = 'kairos_attribution';

// [hostLabel, source, medium]. hostLabel must be the label immediately
// before the TLD (e.g. "google.com", "mail.google.com" match; a spoofed
// "google.attacker.com" does not, since "attacker.com" has a dot after it).
const REFERRER_BRANDS = [
    ['google', 'google', 'organic'],
    ['bing', 'bing', 'organic'],
    ['linkedin', 'linkedin', 'social'],
    ['chatgpt', 'chatgpt', 'ai-referral'],
    ['openai', 'openai', 'ai-referral'],
    ['perplexity', 'perplexity', 'ai-referral'],
    ['claude', 'claude', 'ai-referral'],
    ['anthropic', 'anthropic', 'ai-referral'],
    ['facebook', 'facebook', 'social'],
    ['fb', 'facebook', 'social'],
    ['twitter', 'x', 'social'],
    ['x', 'x', 'social'],
    ['github', 'github', 'referral']
];

function inferSourceFromReferrer(referrer) {
    if (!referrer) return { source: 'direct', medium: 'none' };
    let host = '';
    try { host = new URL(referrer).hostname.replace(/^www\./, ''); } catch (e) { return { source: 'direct', medium: 'none' }; }
    if (host === window.location.hostname.replace(/^www\./, '')) return { source: 'direct', medium: 'none' };
    for (const [label, source, medium] of REFERRER_BRANDS) {
        // Trailing TLD may be a single label (.com) or ccTLD pair (.com.tw, .co.jp).
        if (new RegExp('(^|\\.)' + label + '\\.[^.]+(\\.[a-z]{2})?$').test(host)) return { source, medium };
    }
    return { source: host, medium: 'referral' };
}

function setFieldValue(id, value) {
    const field = document.getElementById(id);
    if (field) field.value = value || '';
}

// UTM values are attacker-controllable (anyone can craft ?utm_source=... and
// send the link to a victim) and flow unsanitized into a FormSubmit email
// template. Strip angle brackets and cap length before they ever reach a form
// field or localStorage.
function sanitizeAttributionValue(value) {
    return String(value || '').trim().replace(/[<>]/g, '').replace(/[\r\n]+/g, ' ').slice(0, 120);
}

// Cached so the hidden fields can be repopulated after contactForm.reset()
// wipes them back to their blank HTML defaults on a repeat submission.
let cachedAttribution = null;

// Falls back to sessionStorage when localStorage specifically throws or is
// unavailable (e.g. some in-app browsers, extensions, or partial storage
// restrictions that only affect localStorage) so dedup still works across
// reloads in that case. Note this does NOT cover a browser configuration
// that blocks ALL Web Storage (e.g. Safari "Block All Cookies" blocks both
// localStorage and sessionStorage) — for that narrow case both calls below
// return null, capture degrades to "fresh on every reload" (form still
// populates correctly each time; the GA4 event just isn't deduped), and
// there is no storage-based fix available since no persistence mechanism
// survives a full storage lockout.
function readAttributionStore() {
    try { const v = localStorage.getItem(UTM_STORAGE_KEY); if (v) return v; } catch (e) { /* unavailable */ }
    try { return sessionStorage.getItem(UTM_STORAGE_KEY); } catch (e) { return null; }
}
function writeAttributionStore(value) {
    try { localStorage.setItem(UTM_STORAGE_KEY, value); return; } catch (e) { /* unavailable */ }
    try { sessionStorage.setItem(UTM_STORAGE_KEY, value); } catch (e) { /* both unavailable, in-memory only */ }
}

function applyAttributionToForm(attribution) {
    setFieldValue('utmSource', attribution.source);
    setFieldValue('utmMedium', attribution.medium);
    setFieldValue('utmCampaign', attribution.campaign);
    setFieldValue('landingPage', attribution.landingPage);
}

function captureAttribution() {
    // Read from the pre-strip snapshot, not window.location.search (which
    // may already be cleaned up by the DOMContentLoaded handler above).
    const params = new URLSearchParams(RAW_QUERY_STRING);
    const hasUtm = ['utm_source', 'utm_medium', 'utm_campaign'].some((k) => params.get(k));

    // Storage access can throw (Safari "Block All Cookies", strict privacy
    // modes, kiosk policies). readAttributionStore() falls back through
    // localStorage -> sessionStorage -> null so a storage error here can
    // never abort this script and skip the contact-form wiring after it.
    const stored = readAttributionStore();
    let storedAttribution = null;
    if (stored) {
        try { storedAttribution = JSON.parse(stored); } catch (e) { storedAttribution = null; }
    }

    let attribution = null;
    let isFreshCapture = false;

    if (hasUtm) {
        // A link may only set some utm_* params (e.g. just utm_campaign) —
        // fall back per field to the existing stored attribution instead of
        // blanking out a good prior source/medium.
        const utmSourceParam = sanitizeAttributionValue(params.get('utm_source'));
        const utmMediumParam = sanitizeAttributionValue(params.get('utm_medium'));
        const utmCampaignParam = sanitizeAttributionValue(params.get('utm_campaign'));
        let fallback;
        if (storedAttribution && (!utmSourceParam || storedAttribution.source === utmSourceParam)) {
            // Only reuse stored medium/campaign when this is the same
            // source (or the URL doesn't specify one) — otherwise a new
            // utm_source would inherit a stale, unrelated medium/campaign
            // from a previous, different-source touch.
            fallback = storedAttribution;
        } else if (utmSourceParam) {
            // Explicit new utm_source with no matching prior history —
            // don't pair it with an unrelated referrer-inferred medium
            // (e.g. a newsletter link with document.referrer stripped
            // shouldn't become medium=none).
            fallback = { source: utmSourceParam, medium: 'utm', campaign: '' };
        } else {
            const inferred = inferSourceFromReferrer(document.referrer);
            fallback = { source: sanitizeAttributionValue(inferred.source), medium: sanitizeAttributionValue(inferred.medium), campaign: '' };
        }
        const resolvedSource = utmSourceParam || fallback.source;
        const resolvedMedium = utmMediumParam || fallback.medium;
        const resolvedCampaign = utmCampaignParam || fallback.campaign;
        // A reload of the same UTM-tagged URL (or a bfcache restore) isn't a
        // new touch — only fresh if the campaign values actually changed.
        isFreshCapture = !storedAttribution
            || storedAttribution.source !== resolvedSource
            || storedAttribution.medium !== resolvedMedium
            || storedAttribution.campaign !== resolvedCampaign;
        attribution = {
            source: resolvedSource,
            medium: resolvedMedium,
            campaign: resolvedCampaign,
            // Only recompute landingPage/capturedAt on an actual new touch —
            // otherwise keep the true first-touch page instead of whatever
            // page this same-campaign revisit happens to land on.
            landingPage: isFreshCapture ? sanitizeAttributionValue(window.location.pathname + RAW_QUERY_STRING) : storedAttribution.landingPage,
            capturedAt: isFreshCapture ? new Date().toISOString() : storedAttribution.capturedAt
        };
    } else if (storedAttribution) {
        attribution = storedAttribution;
    }

    if (!attribution) {
        const inferred = inferSourceFromReferrer(document.referrer);
        attribution = {
            source: sanitizeAttributionValue(inferred.source),
            medium: sanitizeAttributionValue(inferred.medium),
            campaign: '',
            landingPage: sanitizeAttributionValue(window.location.pathname + RAW_QUERY_STRING),
            capturedAt: new Date().toISOString()
        };
        isFreshCapture = true;
    }

    // Only persist and emit the GA4 event on first capture — a cache hit
    // just replays the stored first-touch attribution into the form fields
    // without re-firing the event on every subsequent page view.
    if (isFreshCapture) {
        writeAttributionStore(JSON.stringify(attribution));
        if (typeof gtag === 'function') {
            gtag('event', 'traffic_source_captured', {
                traffic_source: attribution.source,
                traffic_medium: attribution.medium,
                traffic_campaign: attribution.campaign
            });
        }
    }

    applyAttributionToForm(attribution);
    cachedAttribution = attribution;

    return attribution;
}

try {
    captureAttribution();
} catch (e) {
    console.error('Attribution capture failed:', e);
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
            // FormSubmit's plain endpoint (contactForm.action, kept as the
            // no-JS fallback) returns HTTP 200 even when the destination
            // address hasn't clicked its one-time activation link yet, so a
            // bare response.ok check reports false success. The /ajax/
            // endpoint returns a JSON body with an explicit success field
            // that reflects real delivery state (incl. pending activation).
            const actionUrl = new URL(contactForm.action);
            const ajaxAction = `${actionUrl.origin}/ajax${actionUrl.pathname}`;
            const response = await fetch(ajaxAction, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { 'Accept': 'application/json' }
            });
            const data = await response.json().catch(() => null);
            if (response.ok && data && String(data.success) === 'true') {
                alert(formMsg('form.success', 'Thank you! Your message has been sent.'));
                contactForm.reset();
                // reset() also wipes the hidden attribution fields back to
                // their blank HTML defaults — restore them for a repeat submit.
                if (cachedAttribution) applyAttributionToForm(cachedAttribution);
            }
            // A failure here also covers FormSubmit's pending-activation window
            // for a not-yet-confirmed destination address (indistinguishable
            // from a real send failure via this API) - give the visitor a
            // direct fallback so a lead is never a dead end either way.
            else { alert(formMsg('form.error', 'There was an issue sending your message. Please try again.') + '\n\n' + formMsg('form.errorFallback', 'You can also reach us directly at support@kairosaitech.com.')); }
        } catch (err) {
            console.error('Error submitting form:', err);
            alert(formMsg('form.errorNetwork', 'Unable to send your message right now. Please try again later.') + '\n\n' + formMsg('form.errorFallback', 'You can also reach us directly at support@kairosaitech.com.'));
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
            description: 'Scroll the Kairos.ai homepage to one of its main sections: home, story, how, product, pilot, faq, news, about, or contact.',
            inputSchema: {
                type: 'object',
                required: ['section'],
                properties: {
                    section: {
                        type: 'string',
                        enum: ['home', 'story', 'how', 'product', 'pilot', 'faq', 'news', 'about', 'contact'],
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
                const path = input.lang === 'en' ? '/' : LANG_PATHS[input.lang];
                if (!path) return { ok: false, error: 'Unsupported language' };
                try { localStorage.setItem('preferredLanguage', input.lang); } catch (e) {}
                window.location.href = path;
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
                    tagline: 'AI solutions for the AEC and construction industry, starting with SetTime, AI preconstruction (rebar takeoff shipping; concrete and formwork in development; MEP and HVAC planned).',
                    contact: 'support@kairosaitech.com',
                    homepage: 'https://www.kairosaitech.com/',
                    products: [{ name: 'SetTime', formerly: 'iTech', category: 'AI preconstruction for AEC (rebar takeoff shipping)', url: 'https://settime.kairosaitech.com/' }],
                    locales: ['en', 'zh-TW', 'ja', 'es', 'it', 'fr', 'ko', 'de'],
                    productFamilies: {
                        b2b: ['SetTime (AI preconstruction for AEC, formerly iTech: rebar shipping, concrete and formwork in development, MEP and HVAC planned)', 'Custom AI systems', 'Data analysis platforms']
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

