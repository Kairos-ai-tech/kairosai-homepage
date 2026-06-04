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
        'services.factory.title': 'Factory Process Optimization',
        'services.factory.desc': 'Modernize and optimize your manufacturing processes with AI-driven solutions. We help improve efficiency, reduce costs, and enhance quality control in your operations.',
        'services.custom.title': 'Customized Solutions',
        'services.custom.desc': 'Tailored projects designed specifically for your unique business needs. From concept to completion, we build bespoke solutions that perfectly fit your requirements.',
        'tech.title': 'Powered by Leading Technologies',
        'tech.subtitle': 'We leverage cutting-edge tools and frameworks to deliver exceptional results',
        'tech.ml': 'Machine Learning',
        'tech.cloud': 'Cloud Infrastructure',
        'tech.api': 'RESTful APIs',
        'tech.db': 'Database Systems',
        'tech.neural': 'Neural Networks',
        'tech.devops': 'DevOps & CI/CD',
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
        'solutions.title': 'Kairos.ai AI Systems & Data Intelligence Solutions',
        'solutions.subtitle': 'Applied AI — from rebar estimation to custom AI systems and data platforms',
        'solutions.ai.title': 'AI Systems Design & Implementation',
        'solutions.ai.desc': 'Kairos.ai provides professional AI systems design services, from requirements analysis, system architecture design, AI model development to system integration, creating customized AI solutions for enterprises. Our AI systems cover machine learning, deep learning, computer vision, natural language processing and other fields, helping enterprises implement AI applications in smart factories, production optimization, quality control and other scenarios.',
        'solutions.ai.badge1': 'Machine Learning',
        'solutions.ai.badge2': 'Deep Learning',
        'solutions.ai.badge3': 'Computer Vision',
        'solutions.factory.title': 'Smart Factory Construction & Optimization',
        'solutions.factory.desc': 'Smart Factory is the core of Industry 4.0. Kairos.ai specializes in smart factory construction and optimization services. We provide intelligent manufacturing solutions such as process monitoring, production line automation, predictive maintenance, and quality inspection. Through IoT, AI, and big data analysis technologies, we build truly smart factories to improve production efficiency, reduce operating costs, and enhance product quality. We have extensive smart factory implementation experience in semiconductor manufacturing, solar energy industry, food processing and other fields.',
        'solutions.factory.badge1': 'Process Monitoring',
        'solutions.factory.badge2': 'Production Automation',
        'solutions.factory.badge3': 'Predictive Maintenance',
        'solutions.transform.title': 'Manufacturing Digital Transformation Services',
        'solutions.transform.desc': 'Digital transformation is the key for enterprises to maintain competitiveness. Kairos.ai helps traditional manufacturing industries undergo comprehensive digital transformation, from digital infrastructure, data platform construction, AI system implementation to smart manufacturing realization. Our digital transformation services include: enterprise process digitization, production data management systems, AI-driven decision support systems, smart factory transformation planning, etc. Through systematic digital transformation strategies, we help enterprises transition from traditional manufacturing to smart manufacturing and achieve industrial upgrading.',
        'solutions.transform.badge1': 'Process Digitization',
        'solutions.transform.badge2': 'Data Platform',
        'solutions.transform.badge3': 'AI Implementation',
        'solutions.data.title': 'Manufacturing AI Data Analysis Platform',
        'solutions.data.desc': 'Data is the core asset of smart factories. Kairos.ai\'s AI data analysis platform integrates multi-source data such as production equipment data, quality data, and material data, using AI technology for real-time monitoring, anomaly detection, trend prediction, and process optimization. Our data analysis solutions help enterprises: improve yield, reduce downtime, optimize production scheduling, and reduce energy consumption. Through data-driven decision-making, we achieve precise management and continuous improvement of smart factories.',
        'solutions.data.badge1': 'Real-time Monitoring',
        'solutions.data.badge2': 'Anomaly Detection',
        'solutions.data.badge3': 'Trend Prediction',
        'solutions.keywords.title': 'Industry Keywords',
        'solutions.keywords.tag1': 'Kairos.ai',
        'solutions.keywords.tag2': 'Kairos.ai',
        'solutions.keywords.tag3': 'AI Systems',
        'solutions.keywords.tag4': 'Smart Factory',
        'solutions.keywords.tag5': 'Digital Transformation',
        'solutions.keywords.tag6': 'AI Systems Design',
        'solutions.keywords.tag7': 'Smart Manufacturing',
        'solutions.keywords.tag8': 'Industry 4.0',
        'solutions.keywords.tag9': 'Process Optimization',
        'solutions.keywords.tag10': 'AI Data Analysis',
        'solutions.keywords.tag11': 'Semiconductor AI',
        'solutions.keywords.tag12': 'Solar Smart Factory',
        'solutions.keywords.tag13': 'Digital Transformation Experts',
        'solutions.keywords.tag14': 'Intelligent Factory',
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
        'services.factory.title': '工廠流程優化',
        'services.factory.desc': '透過人工智慧驅動的解決方案，現代化和優化您的製造流程。我們幫助提高效率、降低成本並增強您營運的品質控制。',
        'services.custom.title': '客製化解決方案',
        'services.custom.desc': '專為您獨特的業務需求量身設計的客製化專案。從概念到完成，我們構建完全符合您要求的定制解決方案。',
        'tech.title': '頂尖科技驅動',
        'tech.subtitle': '我們運用尖端工具和框架，提供卓越成果',
        'tech.ml': '機器學習',
        'tech.cloud': '雲端基礎設施',
        'tech.api': 'RESTful APIs',
        'tech.db': '資料庫系統',
        'tech.neural': '神經網路',
        'tech.devops': 'DevOps & CI/CD',
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
        'solutions.title': '優時科技 AI 系統與數據智慧解決方案',
        'solutions.subtitle': '應用 AI — 從鋼筋估算到客製 AI 系統與數據平台',
        'solutions.ai.title': 'AI系統設計與導入',
        'solutions.ai.desc': '優時科技 Kairos.ai 提供專業的 AI系統設計服務，從需求分析、系統架構設計、AI 模型開發到系統整合，為企業打造客製化的 AI 解決方案。我們的 AI系統涵蓋機器學習、深度學習、電腦視覺、自然語言處理等領域，協助企業在 智慧工廠、生產優化、品質控制等場景中實現 AI 應用。',
        'solutions.ai.badge1': '機器學習',
        'solutions.ai.badge2': '深度學習',
        'solutions.ai.badge3': '電腦視覺',
        'solutions.factory.title': '智慧工廠建置與優化',
        'solutions.factory.desc': '智慧工廠是工業 4.0 的核心，優時科技專精於智慧工廠建置與優化服務。我們提供製程監控、產線自動化、預測性維護、品質檢測等智慧製造解決方案。透過 IoT 物聯網、AI 人工智慧、大數據分析等技術，打造真正的智慧工廠，提升生產效率、降低營運成本、提高產品品質。我們在半導體製造、太陽能產業、食品加工等領域擁有豐富的智慧工廠實作經驗。',
        'solutions.factory.badge1': '製程監控',
        'solutions.factory.badge2': '產線自動化',
        'solutions.factory.badge3': '預測性維護',
        'solutions.transform.title': '製造業數位轉型服務',
        'solutions.transform.desc': '數位轉型是企業保持競爭力的關鍵。優時科技協助傳統製造業進行全方位的數位轉型，從數位化基礎建設、數據平台搭建、AI 系統導入到智慧製造實現。我們的數位轉型服務包含：企業流程數位化、生產數據管理系統、AI 驅動的決策支援系統、智慧工廠轉型規劃等。透過系統性的數位轉型策略，協助企業從傳統製造邁向智慧製造，實現產業升級。',
        'solutions.transform.badge1': '流程數位化',
        'solutions.transform.badge2': '數據平台',
        'solutions.transform.badge3': 'AI 導入',
        'solutions.data.title': '製造業 AI 數據分析平台',
        'solutions.data.desc': '數據是智慧工廠的核心資產。優時科技的 AI 數據分析平台整合生產設備數據、品質數據、物料數據等多源資料，運用 AI 技術進行即時監控、異常檢測、趨勢預測、製程優化。我們的數據分析解決方案協助企業：提升良率、減少停機時間、優化生產排程、降低能源消耗。透過數據驅動的決策，實現智慧工廠的精準管理與持續改善。',
        'solutions.data.badge1': '即時監控',
        'solutions.data.badge2': '異常檢測',
        'solutions.data.badge3': '趨勢預測',
        'solutions.keywords.title': '產業關鍵字',
        'solutions.keywords.tag1': '優時科技',
        'solutions.keywords.tag2': 'Kairos.ai',
        'solutions.keywords.tag3': 'AI系統',
        'solutions.keywords.tag4': '智慧工廠',
        'solutions.keywords.tag5': '數位轉型',
        'solutions.keywords.tag6': 'AI系統設計',
        'solutions.keywords.tag7': '智慧製造',
        'solutions.keywords.tag8': '工業4.0',
        'solutions.keywords.tag9': '製程優化',
        'solutions.keywords.tag10': 'AI 數據分析',
        'solutions.keywords.tag11': '半導體 AI',
        'solutions.keywords.tag12': '太陽能智慧工廠',
        'solutions.keywords.tag13': '數位轉型專家',
        'solutions.keywords.tag14': '智能工廠',
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
        'services.factory.title': '工場プロセスの最適化',
        'services.factory.desc': 'AI駆動のソリューションで製造プロセスを近代化および最適化します。効率を向上させ、コストを削減し、運用における品質管理を強化します。',
        'services.custom.title': 'カスタマイズソリューション',
        'services.custom.desc': 'お客様独自のビジネスニーズに合わせて特別に設計されたカスタマイズプロジェクト。コンセプトから完成まで、お客様の要件に完璧に適合するソリューションを構築します。',
        'tech.title': '最先端技術による実現',
        'tech.subtitle': '最新のツールとフレームワークを活用し、卓越した成果を提供します',
        'tech.ml': '機械学習',
        'tech.cloud': 'クラウドインフラストラクチャ',
        'tech.api': 'RESTful APIs',
        'tech.db': 'データベースシステム',
        'tech.neural': 'ニューラルネットワーク',
        'tech.devops': 'DevOps & CI/CD',
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
        'solutions.title': 'Kairos.ai AIシステムとデータインテリジェンスソリューション',
        'solutions.subtitle': '応用AI — 鉄筋積算からカスタムAIシステム、データプラットフォームまで',
        'solutions.ai.title': 'AIシステム設計と導入',
        'solutions.ai.desc': 'Kairos.aiは、要件分析、システムアーキテクチャ設計、AIモデル開発からシステム統合まで、企業向けにカスタマイズされたAIソリューションを構築する専門的なAIシステム設計サービスを提供します。当社のAIシステムは、機械学習、ディープラーニング、コンピュータビジョン、自然言語処理などの分野をカバーし、スマートファクトリー、生産最適化、品質管理などのシナリオでAIアプリケーションの実装を支援します。',
        'solutions.ai.badge1': '機械学習',
        'solutions.ai.badge2': 'ディープラーニング',
        'solutions.ai.badge3': 'コンピュータビジョン',
        'solutions.factory.title': 'スマートファクトリー構築と最適化',
        'solutions.factory.desc': 'スマートファクトリーはインダストリー4.0の中核です。Kairos.aiはスマートファクトリーの構築と最適化サービスを専門としています。プロセス監視、生産ライン自動化、予知保全、品質検査などのインテリジェント製造ソリューションを提供します。IoT、AI、ビッグデータ分析などの技術を通じて、真のスマートファクトリーを構築し、生産効率を向上させ、運営コストを削減し、製品品質を向上させます。半導体製造、太陽光発電産業、食品加工などの分野で豊富なスマートファクトリー実装経験を持っています。',
        'solutions.factory.badge1': 'プロセス監視',
        'solutions.factory.badge2': '生産自動化',
        'solutions.factory.badge3': '予知保全',
        'solutions.transform.title': '製造業デジタルトランスフォーメーションサービス',
        'solutions.transform.desc': 'デジタルトランスフォーメーションは企業が競争力を維持するための鍵です。Kairos.aiは、デジタルインフラストラクチャ、データプラットフォーム構築、AIシステム導入からスマート製造実現まで、伝統的な製造業の包括的なデジタルトランスフォーメーションを支援します。当社のデジタルトランスフォーメーションサービスには、企業プロセスのデジタル化、生産データ管理システム、AI駆動の意思決定支援システム、スマートファクトリー変革計画などが含まれます。体系的なデジタルトランスフォーメーション戦略を通じて、企業が従来の製造からスマート製造への移行を支援し、産業のアップグレードを実現します。',
        'solutions.transform.badge1': 'プロセスデジタル化',
        'solutions.transform.badge2': 'データプラットフォーム',
        'solutions.transform.badge3': 'AI導入',
        'solutions.data.title': '製造業AIデータ分析プラットフォーム',
        'solutions.data.desc': 'データはスマートファクトリーの中核資産です。Kairos.aiのAIデータ分析プラットフォームは、生産設備データ、品質データ、材料データなどのマルチソースデータを統合し、AI技術を使用してリアルタイム監視、異常検出、トレンド予測、プロセス最適化を行います。当社のデータ分析ソリューションは、企業が歩留まりを向上させ、ダウンタイムを削減し、生産スケジューリングを最適化し、エネルギー消費を削減することを支援します。データ駆動型の意思決定を通じて、スマートファクトリーの精密な管理と継続的な改善を実現します。',
        'solutions.data.badge1': 'リアルタイム監視',
        'solutions.data.badge2': '異常検出',
        'solutions.data.badge3': 'トレンド予測',
        'solutions.keywords.title': '業界キーワード',
        'solutions.keywords.tag1': 'Kairos.ai',
        'solutions.keywords.tag2': 'Kairos.ai',
        'solutions.keywords.tag3': 'AIシステム',
        'solutions.keywords.tag4': 'スマートファクトリー',
        'solutions.keywords.tag5': 'デジタルトランスフォーメーション',
        'solutions.keywords.tag6': 'AIシステム設計',
        'solutions.keywords.tag7': 'スマート製造',
        'solutions.keywords.tag8': 'インダストリー4.0',
        'solutions.keywords.tag9': 'プロセス最適化',
        'solutions.keywords.tag10': 'AIデータ分析',
        'solutions.keywords.tag11': '半導体AI',
        'solutions.keywords.tag12': '太陽光スマートファクトリー',
        'solutions.keywords.tag13': 'デジタルトランスフォーメーション専門家',
        'solutions.keywords.tag14': 'インテリジェントファクトリー',
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
        'services.factory.title': 'Optimización de Procesos de Fábrica',
        'services.factory.desc': 'Modernice y optimice sus procesos de fabricación con soluciones impulsadas por IA. Ayudamos a mejorar la eficiencia, reducir costos y mejorar el control de calidad en sus operaciones.',
        'services.custom.title': 'Soluciones Personalizadas',
        'services.custom.desc': 'Proyectos a medida diseñados específicamente para sus necesidades comerciales únicas. Desde el concepto hasta la finalización, construimos soluciones personalizadas que se ajustan perfectamente a sus requisitos.',
        'tech.title': 'Impulsados por Tecnologías Líderes',
        'tech.subtitle': 'Aprovechamos herramientas y marcos de vanguardia para ofrecer resultados excepcionales',
        'tech.ml': 'Aprendizaje Automático',
        'tech.cloud': 'Infraestructura en la Nube',
        'tech.api': 'APIs RESTful',
        'tech.db': 'Sistemas de Base de Datos',
        'tech.neural': 'Redes Neuronales',
        'tech.devops': 'DevOps & CI/CD',
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
        'solutions.title': 'Kairos.ai Sistemas de IA y Soluciones de Inteligencia de Datos',
        'solutions.subtitle': 'IA aplicada — desde la estimación de acero hasta sistemas de IA a medida y plataformas de datos',
        'solutions.ai.title': 'Diseño e Implementación de Sistemas de IA',
        'solutions.ai.desc': 'Kairos.ai proporciona servicios profesionales de diseño de sistemas de IA, desde análisis de requisitos, diseño de arquitectura de sistemas, desarrollo de modelos de IA hasta integración de sistemas, creando soluciones de IA personalizadas para empresas. Nuestros sistemas de IA cubren aprendizaje automático, aprendizaje profundo, visión por computadora, procesamiento de lenguaje natural y otros campos, ayudando a las empresas a implementar aplicaciones de IA en fábricas inteligentes, optimización de producción, control de calidad y otros escenarios.',
        'solutions.ai.badge1': 'Aprendizaje Automático',
        'solutions.ai.badge2': 'Aprendizaje Profundo',
        'solutions.ai.badge3': 'Visión por Computadora',
        'solutions.factory.title': 'Construcción y Optimización de Fábrica Inteligente',
        'solutions.factory.desc': 'La Fábrica Inteligente es el núcleo de la Industria 4.0. Kairos.ai se especializa en servicios de construcción y optimización de fábricas inteligentes. Proporcionamos soluciones de fabricación inteligente como monitoreo de procesos, automatización de líneas de producción, mantenimiento predictivo e inspección de calidad. A través de tecnologías IoT, IA y análisis de big data, construimos verdaderas fábricas inteligentes para mejorar la eficiencia de producción, reducir costos operativos y mejorar la calidad del producto. Tenemos amplia experiencia en implementación de fábricas inteligentes en fabricación de semiconductores, industria de energía solar, procesamiento de alimentos y otros campos.',
        'solutions.factory.badge1': 'Monitoreo de Procesos',
        'solutions.factory.badge2': 'Automatización de Producción',
        'solutions.factory.badge3': 'Mantenimiento Predictivo',
        'solutions.transform.title': 'Servicios de Transformación Digital en Manufactura',
        'solutions.transform.desc': 'La transformación digital es la clave para que las empresas mantengan la competitividad. Kairos.ai ayuda a las industrias manufactureras tradicionales a realizar una transformación digital integral, desde infraestructura digital, construcción de plataformas de datos, implementación de sistemas de IA hasta realización de fabricación inteligente. Nuestros servicios de transformación digital incluyen: digitalización de procesos empresariales, sistemas de gestión de datos de producción, sistemas de apoyo a decisiones impulsados por IA, planificación de transformación de fábricas inteligentes, etc. A través de estrategias sistemáticas de transformación digital, ayudamos a las empresas a pasar de la fabricación tradicional a la fabricación inteligente y lograr la actualización industrial.',
        'solutions.transform.badge1': 'Digitalización de Procesos',
        'solutions.transform.badge2': 'Plataforma de Datos',
        'solutions.transform.badge3': 'Implementación de IA',
        'solutions.data.title': 'Plataforma de Análisis de Datos de IA para Manufactura',
        'solutions.data.desc': 'Los datos son el activo central de las fábricas inteligentes. La plataforma de análisis de datos de IA de Kairos.ai integra datos de múltiples fuentes como datos de equipos de producción, datos de calidad y datos de materiales, utilizando tecnología de IA para monitoreo en tiempo real, detección de anomalías, predicción de tendencias y optimización de procesos. Nuestras soluciones de análisis de datos ayudan a las empresas a: mejorar el rendimiento, reducir el tiempo de inactividad, optimizar la programación de producción y reducir el consumo de energía. A través de la toma de decisiones basada en datos, logramos una gestión precisa y mejora continua de las fábricas inteligentes.',
        'solutions.data.badge1': 'Monitoreo en Tiempo Real',
        'solutions.data.badge2': 'Detección de Anomalías',
        'solutions.data.badge3': 'Predicción de Tendencias',
        'solutions.keywords.title': 'Palabras Clave de la Industria',
        'solutions.keywords.tag1': 'Kairos.ai',
        'solutions.keywords.tag2': 'Kairos.ai',
        'solutions.keywords.tag3': 'Sistemas de IA',
        'solutions.keywords.tag4': 'Fábrica Inteligente',
        'solutions.keywords.tag5': 'Transformación Digital',
        'solutions.keywords.tag6': 'Diseño de Sistemas de IA',
        'solutions.keywords.tag7': 'Fabricación Inteligente',
        'solutions.keywords.tag8': 'Industria 4.0',
        'solutions.keywords.tag9': 'Optimización de Procesos',
        'solutions.keywords.tag10': 'Análisis de Datos de IA',
        'solutions.keywords.tag11': 'IA de Semiconductores',
        'solutions.keywords.tag12': 'Fábrica Inteligente Solar',
        'solutions.keywords.tag13': 'Expertos en Transformación Digital',
        'solutions.keywords.tag14': 'Fábrica Inteligente',
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
        'services.factory.title': 'Ottimizzazione Processi di Fabbrica',
        'services.factory.desc': 'Modernizza e ottimizza i tuoi processi produttivi con soluzioni basate sull\'AI. Ti aiutiamo a migliorare l\'efficienza, ridurre i costi e migliorare il controllo qualità.',
        'services.custom.title': 'Soluzioni Personalizzate',
        'services.custom.desc': 'Progetti su misura progettati specificamente per le tue esigenze aziendali uniche. Dal concept al completamento, costruiamo soluzioni che si adattano perfettamente ai tuoi requisiti.',
        'tech.title': 'Alimentati dalle Tecnologie Leader',
        'tech.subtitle': 'Sfruttiamo strumenti e framework all\'avanguardia per offrire risultati eccezionali',
        'tech.ml': 'Machine Learning',
        'tech.cloud': 'Infrastruttura Cloud',
        'tech.api': 'API RESTful',
        'tech.db': 'Sistemi di Database',
        'tech.neural': 'Reti Neurali',
        'tech.devops': 'DevOps & CI/CD',
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
        'solutions.title': 'Kairos.ai Sistemi AI e Soluzioni di Intelligenza dei Dati',
        'solutions.subtitle': 'IA applicata — dalla stima dei ferri d\'armatura ai sistemi AI su misura e alle piattaforme dati',
        'solutions.ai.title': 'Progettazione e Implementazione di Sistemi AI',
        'solutions.ai.desc': 'Kairos.ai fornisce servizi professionali di progettazione di sistemi AI, dall\'analisi dei requisiti, progettazione dell\'architettura di sistema, sviluppo di modelli AI fino all\'integrazione di sistema, creando soluzioni AI personalizzate per le aziende. I nostri sistemi AI coprono machine learning, deep learning, computer vision, elaborazione del linguaggio naturale e altri campi.',
        'solutions.ai.badge1': 'Machine Learning',
        'solutions.ai.badge2': 'Deep Learning',
        'solutions.ai.badge3': 'Computer Vision',
        'solutions.factory.title': 'Costruzione e Ottimizzazione della Fabbrica Intelligente',
        'solutions.factory.desc': 'La Fabbrica Intelligente è il cuore dell\'Industria 4.0. Kairos.ai è specializzata in servizi di costruzione e ottimizzazione di fabbriche intelligenti. Forniamo soluzioni di produzione intelligente come monitoraggio dei processi, automazione delle linee di produzione, manutenzione predittiva e ispezione della qualità.',
        'solutions.factory.badge1': 'Monitoraggio Processi',
        'solutions.factory.badge2': 'Automazione Produzione',
        'solutions.factory.badge3': 'Manutenzione Predittiva',
        'solutions.transform.title': 'Servizi di Trasformazione Digitale per il Manifatturiero',
        'solutions.transform.desc': 'La trasformazione digitale è la chiave per mantenere la competitività aziendale. Kairos.ai aiuta le industrie manifatturiere tradizionali a realizzare una trasformazione digitale completa, dall\'infrastruttura digitale, alla costruzione di piattaforme dati, all\'implementazione di sistemi AI fino alla realizzazione della produzione intelligente.',
        'solutions.transform.badge1': 'Digitalizzazione Processi',
        'solutions.transform.badge2': 'Piattaforma Dati',
        'solutions.transform.badge3': 'Implementazione AI',
        'solutions.data.title': 'Piattaforma di Analisi Dati AI per il Manifatturiero',
        'solutions.data.desc': 'I dati sono l\'asset centrale delle fabbriche intelligenti. La piattaforma di analisi dati AI di Kairos.ai integra dati da più fonti utilizzando la tecnologia AI per il monitoraggio in tempo reale, il rilevamento delle anomalie, la previsione delle tendenze e l\'ottimizzazione dei processi.',
        'solutions.data.badge1': 'Monitoraggio in Tempo Reale',
        'solutions.data.badge2': 'Rilevamento Anomalie',
        'solutions.data.badge3': 'Previsione Tendenze',
        'solutions.keywords.title': 'Parole Chiave del Settore',
        'solutions.keywords.tag1': 'Kairos.ai',
        'solutions.keywords.tag2': 'Kairos.ai',
        'solutions.keywords.tag3': 'Sistemi AI',
        'solutions.keywords.tag4': 'Fabbrica Intelligente',
        'solutions.keywords.tag5': 'Trasformazione Digitale',
        'solutions.keywords.tag6': 'Progettazione Sistemi AI',
        'solutions.keywords.tag7': 'Produzione Intelligente',
        'solutions.keywords.tag8': 'Industria 4.0',
        'solutions.keywords.tag9': 'Ottimizzazione Processi',
        'solutions.keywords.tag10': 'Analisi Dati AI',
        'solutions.keywords.tag11': 'AI Semiconduttori',
        'solutions.keywords.tag12': 'Fabbrica Intelligente Solare',
        'solutions.keywords.tag13': 'Esperti Trasformazione Digitale',
        'solutions.keywords.tag14': 'Fabbrica Intelligente',
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
        'services.factory.title': 'Optimisation des Processus d\'Usine',
        'services.factory.desc': 'Modernisez et optimisez vos processus de fabrication avec des solutions basées sur l\'IA. Nous aidons à améliorer l\'efficacité, réduire les coûts et améliorer le contrôle qualité.',
        'services.custom.title': 'Solutions Sur Mesure',
        'services.custom.desc': 'Projets sur mesure conçus spécifiquement pour vos besoins commerciaux uniques. Du concept à la réalisation, nous construisons des solutions qui correspondent parfaitement à vos exigences.',
        'tech.title': 'Propulsé par les Technologies de Pointe',
        'tech.subtitle': 'Nous exploitons des outils et frameworks de pointe pour fournir des résultats exceptionnels',
        'tech.ml': 'Apprentissage Automatique',
        'tech.cloud': 'Infrastructure Cloud',
        'tech.api': 'APIs RESTful',
        'tech.db': 'Systèmes de Bases de Données',
        'tech.neural': 'Réseaux de Neurones',
        'tech.devops': 'DevOps & CI/CD',
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
        'solutions.title': 'Kairos.ai Systèmes IA et Solutions d\'Intelligence des Données',
        'solutions.subtitle': 'IA appliquée — de l\'estimation des armatures aux systèmes IA sur mesure et plateformes de données',
        'solutions.ai.title': 'Conception et Mise en Œuvre de Systèmes IA',
        'solutions.ai.desc': 'Kairos.ai fournit des services professionnels de conception de systèmes IA, de l\'analyse des besoins, la conception de l\'architecture système, le développement de modèles IA jusqu\'à l\'intégration système, créant des solutions IA personnalisées pour les entreprises. Nos systèmes IA couvrent l\'apprentissage automatique, le deep learning, la vision par ordinateur, le traitement du langage naturel et d\'autres domaines.',
        'solutions.ai.badge1': 'Apprentissage Automatique',
        'solutions.ai.badge2': 'Deep Learning',
        'solutions.ai.badge3': 'Vision par Ordinateur',
        'solutions.factory.title': 'Construction et Optimisation d\'Usine Intelligente',
        'solutions.factory.desc': 'L\'Usine Intelligente est au cœur de l\'Industrie 4.0. Kairos.ai est spécialisé dans les services de construction et d\'optimisation d\'usines intelligentes. Nous fournissons des solutions de fabrication intelligente telles que la surveillance des processus, l\'automatisation des lignes de production, la maintenance prédictive et l\'inspection qualité.',
        'solutions.factory.badge1': 'Surveillance des Processus',
        'solutions.factory.badge2': 'Automatisation de Production',
        'solutions.factory.badge3': 'Maintenance Prédictive',
        'solutions.transform.title': 'Services de Transformation Numérique pour le Manufacturier',
        'solutions.transform.desc': 'La transformation numérique est la clé pour que les entreprises maintiennent leur compétitivité. Kairos.ai aide les industries manufacturières traditionnelles à réaliser une transformation numérique complète, de l\'infrastructure numérique à la construction de plateformes de données, l\'implémentation de systèmes IA jusqu\'à la réalisation de la fabrication intelligente.',
        'solutions.transform.badge1': 'Numérisation des Processus',
        'solutions.transform.badge2': 'Plateforme de Données',
        'solutions.transform.badge3': 'Implémentation IA',
        'solutions.data.title': 'Plateforme d\'Analyse de Données IA pour le Manufacturier',
        'solutions.data.desc': 'Les données sont l\'actif central des usines intelligentes. La plateforme d\'analyse de données IA de Kairos.ai intègre des données multi-sources en utilisant la technologie IA pour la surveillance en temps réel, la détection d\'anomalies, la prédiction de tendances et l\'optimisation des processus.',
        'solutions.data.badge1': 'Surveillance en Temps Réel',
        'solutions.data.badge2': 'Détection d\'Anomalies',
        'solutions.data.badge3': 'Prédiction de Tendances',
        'solutions.keywords.title': 'Mots-clés du Secteur',
        'solutions.keywords.tag1': 'Kairos.ai',
        'solutions.keywords.tag2': 'Kairos.ai',
        'solutions.keywords.tag3': 'Systèmes IA',
        'solutions.keywords.tag4': 'Usine Intelligente',
        'solutions.keywords.tag5': 'Transformation Numérique',
        'solutions.keywords.tag6': 'Conception Systèmes IA',
        'solutions.keywords.tag7': 'Fabrication Intelligente',
        'solutions.keywords.tag8': 'Industrie 4.0',
        'solutions.keywords.tag9': 'Optimisation des Processus',
        'solutions.keywords.tag10': 'Analyse de Données IA',
        'solutions.keywords.tag11': 'IA Semi-conducteurs',
        'solutions.keywords.tag12': 'Usine Intelligente Solaire',
        'solutions.keywords.tag13': 'Experts Transformation Numérique',
        'solutions.keywords.tag14': 'Usine Intelligente',
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
        'services.factory.title': '공장 프로세스 최적화',
        'services.factory.desc': 'AI 기반 솔루션으로 제조 프로세스를 현대화하고 최적화합니다. 효율성 향상, 비용 절감, 품질 관리 강화를 도와드립니다.',
        'services.custom.title': '맞춤형 솔루션',
        'services.custom.desc': '고유한 비즈니스 요구에 맞게 특별히 설계된 맞춤형 프로젝트. 컨셉부터 완성까지 요구 사항에 완벽히 맞는 솔루션을 구축합니다.',
        'tech.title': '최첨단 기술로 구동',
        'tech.subtitle': '최신 도구와 프레임워크를 활용하여 탁월한 결과를 제공합니다',
        'tech.ml': '머신러닝',
        'tech.cloud': '클라우드 인프라',
        'tech.api': 'RESTful API',
        'tech.db': '데이터베이스 시스템',
        'tech.neural': '신경망',
        'tech.devops': 'DevOps & CI/CD',
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
        'solutions.title': 'Kairos.ai AI 시스템 및 데이터 인텔리전스 솔루션',
        'solutions.subtitle': '응용 AI — 철근 산출부터 맞춤형 AI 시스템과 데이터 플랫폼까지',
        'solutions.ai.title': 'AI 시스템 설계 및 구현',
        'solutions.ai.desc': 'Kairos.ai는 요구사항 분석, 시스템 아키텍처 설계, AI 모델 개발부터 시스템 통합까지 전문적인 AI 시스템 설계 서비스를 제공하여 기업을 위한 맞춤형 AI 솔루션을 구축합니다. 머신러닝, 딥러닝, 컴퓨터 비전, 자연어 처리 등의 분야를 다룹니다.',
        'solutions.ai.badge1': '머신러닝',
        'solutions.ai.badge2': '딥러닝',
        'solutions.ai.badge3': '컴퓨터 비전',
        'solutions.factory.title': '스마트 팩토리 구축 및 최적화',
        'solutions.factory.desc': '스마트 팩토리는 인더스트리 4.0의 핵심입니다. Kairos.ai는 스마트 팩토리 구축 및 최적화 서비스를 전문으로 합니다. 공정 모니터링, 생산 라인 자동화, 예측 정비, 품질 검사 등 지능형 제조 솔루션을 제공합니다.',
        'solutions.factory.badge1': '공정 모니터링',
        'solutions.factory.badge2': '생산 자동화',
        'solutions.factory.badge3': '예측 정비',
        'solutions.transform.title': '제조업 디지털 전환 서비스',
        'solutions.transform.desc': '디지털 전환은 기업이 경쟁력을 유지하는 핵심입니다. Kairos.ai는 디지털 인프라, 데이터 플랫폼 구축, AI 시스템 도입부터 스마트 제조 실현까지 전통 제조업의 종합적인 디지털 전환을 지원합니다.',
        'solutions.transform.badge1': '프로세스 디지털화',
        'solutions.transform.badge2': '데이터 플랫폼',
        'solutions.transform.badge3': 'AI 도입',
        'solutions.data.title': '제조업 AI 데이터 분석 플랫폼',
        'solutions.data.desc': '데이터는 스마트 팩토리의 핵심 자산입니다. Kairos.ai의 AI 데이터 분석 플랫폼은 다중 소스 데이터를 통합하여 AI 기술로 실시간 모니터링, 이상 감지, 트렌드 예측, 공정 최적화를 수행합니다.',
        'solutions.data.badge1': '실시간 모니터링',
        'solutions.data.badge2': '이상 감지',
        'solutions.data.badge3': '트렌드 예측',
        'solutions.keywords.title': '산업 키워드',
        'solutions.keywords.tag1': 'Kairos.ai',
        'solutions.keywords.tag2': 'Kairos.ai',
        'solutions.keywords.tag3': 'AI 시스템',
        'solutions.keywords.tag4': '스마트 팩토리',
        'solutions.keywords.tag5': '디지털 전환',
        'solutions.keywords.tag6': 'AI 시스템 설계',
        'solutions.keywords.tag7': '스마트 제조',
        'solutions.keywords.tag8': '인더스트리 4.0',
        'solutions.keywords.tag9': '공정 최적화',
        'solutions.keywords.tag10': 'AI 데이터 분석',
        'solutions.keywords.tag11': '반도체 AI',
        'solutions.keywords.tag12': '태양광 스마트 팩토리',
        'solutions.keywords.tag13': '디지털 전환 전문가',
        'solutions.keywords.tag14': '지능형 공장',
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
        'services.factory.title': 'Fabrikprozessoptimierung',
        'services.factory.desc': 'Modernisieren und optimieren Sie Ihre Fertigungsprozesse mit KI-gesteuerten Lösungen. Wir helfen, Effizienz zu steigern, Kosten zu senken und die Qualitätskontrolle zu verbessern.',
        'services.custom.title': 'Maßgeschneiderte Lösungen',
        'services.custom.desc': 'Individuell gestaltete Projekte, speziell für Ihre einzigartigen Geschäftsanforderungen. Vom Konzept bis zur Fertigstellung bauen wir Lösungen, die perfekt zu Ihren Anforderungen passen.',
        'tech.title': 'Angetrieben von Führenden Technologien',
        'tech.subtitle': 'Wir nutzen modernste Tools und Frameworks, um außergewöhnliche Ergebnisse zu liefern',
        'tech.ml': 'Maschinelles Lernen',
        'tech.cloud': 'Cloud-Infrastruktur',
        'tech.api': 'RESTful APIs',
        'tech.db': 'Datenbanksysteme',
        'tech.neural': 'Neuronale Netze',
        'tech.devops': 'DevOps & CI/CD',
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
        'solutions.title': 'Kairos.ai KI-Systeme und Datenintelligenz-Lösungen',
        'solutions.subtitle': 'Angewandte KI — von der Bewehrungskalkulation bis zu maßgeschneiderten KI-Systemen und Datenplattformen',
        'solutions.ai.title': 'KI-Systemdesign und -Implementierung',
        'solutions.ai.desc': 'Kairos.ai bietet professionelle KI-Systemdesign-Dienste, von der Anforderungsanalyse, Systemarchitekturdesign, KI-Modellentwicklung bis zur Systemintegration, um maßgeschneiderte KI-Lösungen für Unternehmen zu erstellen. Unsere KI-Systeme umfassen maschinelles Lernen, Deep Learning, Computer Vision, natürliche Sprachverarbeitung und weitere Bereiche.',
        'solutions.ai.badge1': 'Maschinelles Lernen',
        'solutions.ai.badge2': 'Deep Learning',
        'solutions.ai.badge3': 'Computer Vision',
        'solutions.factory.title': 'Aufbau und Optimierung Intelligenter Fabriken',
        'solutions.factory.desc': 'Die Intelligente Fabrik ist der Kern von Industrie 4.0. Kairos.ai ist spezialisiert auf den Aufbau und die Optimierung intelligenter Fabriken. Wir bieten intelligente Fertigungslösungen wie Prozessüberwachung, Produktionslinienautomatisierung, vorausschauende Wartung und Qualitätsprüfung.',
        'solutions.factory.badge1': 'Prozessüberwachung',
        'solutions.factory.badge2': 'Produktionsautomatisierung',
        'solutions.factory.badge3': 'Vorausschauende Wartung',
        'solutions.transform.title': 'Digitale Transformationsdienste für die Fertigung',
        'solutions.transform.desc': 'Die digitale Transformation ist der Schlüssel für Unternehmen, um wettbewerbsfähig zu bleiben. Kairos.ai hilft traditionellen Fertigungsunternehmen bei einer umfassenden digitalen Transformation, von der digitalen Infrastruktur über den Aufbau von Datenplattformen und die Implementierung von KI-Systemen bis hin zur Realisierung intelligenter Fertigung.',
        'solutions.transform.badge1': 'Prozessdigitalisierung',
        'solutions.transform.badge2': 'Datenplattform',
        'solutions.transform.badge3': 'KI-Implementierung',
        'solutions.data.title': 'KI-Datenanalyseplattform für die Fertigung',
        'solutions.data.desc': 'Daten sind das zentrale Asset intelligenter Fabriken. Die KI-Datenanalyseplattform von Kairos.ai integriert Multi-Source-Daten und nutzt KI-Technologie für Echtzeitüberwachung, Anomalieerkennung, Trendvorhersage und Prozessoptimierung.',
        'solutions.data.badge1': 'Echtzeitüberwachung',
        'solutions.data.badge2': 'Anomalieerkennung',
        'solutions.data.badge3': 'Trendvorhersage',
        'solutions.keywords.title': 'Branchenschlüsselwörter',
        'solutions.keywords.tag1': 'Kairos.ai',
        'solutions.keywords.tag2': 'Kairos.ai',
        'solutions.keywords.tag3': 'KI-Systeme',
        'solutions.keywords.tag4': 'Intelligente Fabrik',
        'solutions.keywords.tag5': 'Digitale Transformation',
        'solutions.keywords.tag6': 'KI-Systemdesign',
        'solutions.keywords.tag7': 'Intelligente Fertigung',
        'solutions.keywords.tag8': 'Industrie 4.0',
        'solutions.keywords.tag9': 'Prozessoptimierung',
        'solutions.keywords.tag10': 'KI-Datenanalyse',
        'solutions.keywords.tag11': 'Halbleiter-KI',
        'solutions.keywords.tag12': 'Solar Intelligente Fabrik',
        'solutions.keywords.tag13': 'Experten Digitale Transformation',
        'solutions.keywords.tag14': 'Intelligente Fabrik',
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

    // Reinitialize particles after language change
    if (typeof window.reinitParticles === 'function') {
        setTimeout(window.reinitParticles, 100);
    }
}

// Language dropdown toggle
const langSelector = document.getElementById('langSelector');
const langDropdown = document.getElementById('langDropdown');

if (langSelector && langDropdown) {
    langSelector.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('show');
        langSelector.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!langSelector.contains(e.target) && !langDropdown.contains(e.target)) {
            langDropdown.classList.remove('show');
            langSelector.classList.remove('active');
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

    // Prioritize URL parameter, then saved preference, then default to 'zh-TW'
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
        'footer.tagline': 'AI rebar estimation and applied AI for the construction industry.'
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
        'footer.tagline': '為營建產業打造的 AI 鋼筋估算與應用 AI。'
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
        'footer.tagline': '建設業界のためのAI鉄筋積算と応用AI。'
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
        'footer.tagline': 'Estimación de acero con IA e IA aplicada para la construcción.'
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
        'footer.tagline': "Stima dei ferri con IA e IA applicata per le costruzioni."
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
        'footer.tagline': "Estimation des armatures par IA et IA appliquée pour la construction."
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
        'footer.tagline': '건설 산업을 위한 AI 철근 산출과 응용 AI.'
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
        'footer.tagline': 'KI-Bewehrungskalkulation und angewandte KI für das Bauwesen.'
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
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (submitButton) { submitButton.disabled = true; submitButton.textContent = 'Sending…'; }
        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) { alert('Thank you! Your message has been sent.'); contactForm.reset(); }
            else { alert('There was an issue sending your message. Please try again.'); }
        } catch (err) {
            console.error('Error submitting form:', err);
            alert('Unable to send your message right now. Please try again later.');
        } finally {
            if (submitButton) { submitButton.disabled = false; submitButton.textContent = submitButtonDefaultText || 'Send Message'; }
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
            description: 'Scroll the Kairos.ai homepage to one of its main sections: home, how, product, services, about, or contact.',
            inputSchema: {
                type: 'object',
                required: ['section'],
                properties: {
                    section: {
                        type: 'string',
                        enum: ['home', 'how', 'product', 'services', 'about', 'contact'],
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
                        b2b: ['iTech (AI rebar estimation for AEC)', 'Custom AI systems', 'Data analysis platforms']
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

