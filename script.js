// ===========================
// Data Stream Background Effect
// ===========================

(function createDataStream() {
    const canvas = document.createElement('canvas');
    canvas.id = 'dataStreamCanvas';
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
        opacity: 0.15;
    `;
    document.body.insertBefore(canvas, document.body.firstChild);

    const ctx = canvas.getContext('2d');
    let streams = [];
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initStreams();
    }

    function initStreams() {
        streams = [];
        const columns = Math.floor(canvas.width / 20);
        for (let i = 0; i < columns; i++) {
            streams.push({
                x: i * 20,
                y: Math.random() * canvas.height,
                speed: 1 + Math.random() * 3,
                chars: [],
                length: 5 + Math.floor(Math.random() * 15)
            });
            for (let j = 0; j < streams[i].length; j++) {
                streams[i].chars.push(chars[Math.floor(Math.random() * chars.length)]);
            }
        }
    }

    function draw() {
        ctx.fillStyle = 'rgba(13, 17, 23, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        streams.forEach(stream => {
            stream.chars.forEach((char, i) => {
                const y = stream.y - i * 20;
                if (y > 0 && y < canvas.height) {
                    const alpha = 1 - (i / stream.length);
                    if (i === 0) {
                        ctx.fillStyle = `rgba(0, 212, 255, ${alpha})`;
                        ctx.shadowColor = 'rgba(0, 212, 255, 0.8)';
                        ctx.shadowBlur = 10;
                    } else {
                        ctx.fillStyle = `rgba(0, 212, 255, ${alpha * 0.5})`;
                        ctx.shadowBlur = 0;
                    }
                    ctx.font = '14px monospace';
                    ctx.fillText(char, stream.x, y);
                }
            });

            stream.y += stream.speed;
            if (stream.y - stream.length * 20 > canvas.height) {
                stream.y = 0;
                stream.chars = stream.chars.map(() => chars[Math.floor(Math.random() * chars.length)]);
            }

            if (Math.random() < 0.01) {
                const idx = Math.floor(Math.random() * stream.chars.length);
                stream.chars[idx] = chars[Math.floor(Math.random() * chars.length)];
            }
        });

        requestAnimationFrame(draw);
    }

    window.addEventListener('resize', debounce(resizeCanvas, 250));

    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    resizeCanvas();
    draw();
})();

// ===========================
// Internationalization (i18n)
// ===========================

const translations = {
    en: {
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'hero.title1': 'Make Every Moment',
        'hero.title2': 'Count',
        'hero.subtitle': 'At Kairos.ai, we believe time is the most valuable resource. Our mission is to reshape how people experience and manage time through innovative AI applications and intelligent systems.',
        'hero.cta1': 'Get Started',
        'hero.cta2': 'Our Services',
        'services.title': 'Our Services',
        'services.subtitle': 'We combine cutting-edge AI with human-centered design to unlock new possibilities',
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
        'about.intro': 'At Kairos.ai, our mission is to reshape how people experience and manage time through innovative AI. We focus on helping traditional manufacturing companies undergo digital transformation by applying AI-driven systems, data analytics, and intelligent automation to real production environments.',
        'about.desc': 'We are dedicated to creating solutions that don\'t just save time, but unlock new possibilities for our users and customers.',
        'about.feature1': 'Cutting-edge AI technology',
        'about.feature2': 'Human-centered design approach',
        'about.feature3': 'Proven track record of success',
        'about.feature4': 'Dedicated support and partnership',
        'about.experienceTitle': 'Industry Experience',
        'about.experienceDesc': 'Our team has assisted semiconductor factories in process optimization, and has also implemented data analysis and AI systems for solar manufacturing plants, bringing advanced manufacturing methods to production lines.',
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
        'solutions.title': 'Kairos.ai AI Systems, Smart Factory & Digital Transformation Solutions',
        'solutions.subtitle': 'Professional AI technology helps manufacturing achieve intelligent upgrades',
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
        'solutions.keywords.tag14': 'Intelligent Factory'
    },
    'zh-TW': {
        'nav.home': '首頁',
        'nav.services': '服務項目',
        'nav.about': '關於我們',
        'nav.contact': '聯絡我們',
        'hero.title1': '讓每一刻',
        'hero.title2': '都有價值',
        'hero.subtitle': '在優時科技，我們相信時間是最寶貴的資源。我們的使命是透過創新的人工智慧應用程式和智慧系統，重塑人們體驗和管理時間的方式。',
        'hero.cta1': '立即開始',
        'hero.cta2': '我們的服務',
        'services.title': '我們的服務',
        'services.subtitle': '我們結合尖端人工智慧與人性化設計，開創新的可能性',
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
        'about.intro': '優時科技（Kairos.ai）致力於透過 AI 技術，重新定義企業如何運用與管理時間。我們專注協助傳統工廠導入 AI 與數位化系統，將生產流程、數據與決策串聯，實際提升效率、降低成本並改善品質。',
        'about.desc': '我們致力於創造不僅節省時間，更能為用戶和客戶開啟新可能性的解決方案。',
        'about.feature1': '尖端人工智慧技術',
        'about.feature2': '以人為本的設計方法',
        'about.feature3': '經過驗證的成功記錄',
        'about.feature4': '專業支援與合作夥伴關係',
        'about.experienceTitle': '產業經驗',
        'about.experienceDesc': '我們團隊曾協助半導體工廠進行製程優化，也曾為太陽能製造廠導入數據分析與 AI 系統，能將先進製造業的方法實際落地到生產線。',
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
        'solutions.title': '優時科技 AI系統、智慧工廠、數位轉型解決方案',
        'solutions.subtitle': '專業 AI 技術協助製造業實現智慧化升級',
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
        'solutions.keywords.tag14': '智能工廠'
    },
    ja: {
        'nav.home': 'ホーム',
        'nav.services': 'サービス',
        'nav.about': '会社概要',
        'nav.contact': 'お問い合わせ',
        'hero.title1': 'すべての瞬間を',
        'hero.title2': '価値あるものに',
        'hero.subtitle': 'Kairos.aiでは、時間が最も貴重な資源であると信じています。革新的なAIアプリケーションとインテリジェントシステムを通じて、人々が時間を体験し管理する方法を再構築することが私たちの使命です。',
        'hero.cta1': '今すぐ始める',
        'hero.cta2': 'サービス一覧',
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
        'about.intro': 'Kairos.aiは、革新的なAIを通じて人々が時間を体験し管理する方法を再構築することを使命としています。私たちは、AI駆動システム、データ分析、インテリジェントオートメーションを実際の生産環境に適用することで、伝統的な製造企業のデジタルトランスフォーメーションを支援することに注力しています。',
        'about.desc': '私たちは、単に時間を節約するだけでなく、ユーザーやお客様に新しい可能性を開くソリューションの創造に専念しています。',
        'about.feature1': '最先端のAI技術',
        'about.feature2': '人間中心の設計アプローチ',
        'about.feature3': '実証済みの成功実績',
        'about.feature4': '専任サポートとパートナーシップ',
        'about.experienceTitle': '業界経験',
        'about.experienceDesc': '当社のチームは、半導体工場のプロセス最適化を支援し、太陽光発電製造工場にデータ分析とAIシステムを導入し、先進的な製造手法を生産ラインに実装してきました。',
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
        'solutions.title': 'Kairos.ai AIシステム、スマートファクトリー、デジタルトランスフォーメーションソリューション',
        'solutions.subtitle': 'プロフェッショナルなAI技術で製造業のインテリジェントアップグレードを実現',
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
        'solutions.keywords.tag14': 'インテリジェントファクトリー'
    },
    es: {
        'nav.home': 'Inicio',
        'nav.services': 'Servicios',
        'nav.about': 'Acerca de',
        'nav.contact': 'Contacto',
        'hero.title1': 'Haz que Cada Momento',
        'hero.title2': 'Cuente',
        'hero.subtitle': 'En Kairos.ai, creemos que el tiempo es el recurso más valioso. Nuestra misión es transformar cómo las personas experimentan y gestionan el tiempo a través de aplicaciones de IA innovadoras y sistemas inteligentes.',
        'hero.cta1': 'Comenzar',
        'hero.cta2': 'Nuestros Servicios',
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
        'about.intro': 'En Kairos.ai, nuestra misión es transformar cómo las personas experimentan y gestionan el tiempo a través de IA innovadora. Nos enfocamos en ayudar a empresas manufactureras tradicionales a realizar su transformación digital mediante la aplicación de sistemas impulsados por IA, análisis de datos y automatización inteligente en entornos de producción reales.',
        'about.desc': 'Nos dedicamos a crear soluciones que no solo ahorran tiempo, sino que desbloquean nuevas posibilidades para nuestros usuarios y clientes.',
        'about.feature1': 'Tecnología de IA de vanguardia',
        'about.feature2': 'Enfoque de diseño centrado en el ser humano',
        'about.feature3': 'Historial comprobado de éxito',
        'about.feature4': 'Soporte dedicado y asociación',
        'about.experienceTitle': 'Experiencia en la Industria',
        'about.experienceDesc': 'Nuestro equipo ha asistido a fábricas de semiconductores en la optimización de procesos, y también ha implementado sistemas de análisis de datos e IA para plantas de fabricación solar, llevando métodos de fabricación avanzados a líneas de producción.',
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
        'solutions.title': 'Kairos.ai Sistemas de IA, Fábrica Inteligente y Soluciones de Transformación Digital',
        'solutions.subtitle': 'La tecnología profesional de IA ayuda a la manufactura a lograr actualizaciones inteligentes',
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
        'solutions.keywords.tag14': 'Fábrica Inteligente'
    }
};

let currentLang = 'zh-TW';

const langLabels = {
    'en': 'EN',
    'zh-TW': '繁中',
    'ja': '日本',
    'es': 'ES'
};

// ===========================
// Dynamic Canonical URL Update
// ===========================

function updateCanonicalURL() {
    // Get the current URL and parse lang parameter
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');

    // Get or create canonical link element
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
    }

    // Set canonical URL based on lang parameter
    const baseURL = 'https://www.kairosaitech.com/';
    if (langParam && ['zh-TW', 'en', 'ja', 'es'].includes(langParam)) {
        // Self-referencing canonical for language-specific pages
        canonicalLink.setAttribute('href', `${baseURL}?lang=${langParam}`);
    } else {
        // Default canonical for base URL
        canonicalLink.setAttribute('href', baseURL);
    }
}

// Update canonical URL immediately when script loads
updateCanonicalURL();

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

    // Update canonical URL
    updateCanonicalURL();

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

    // Prioritize URL parameter, then saved preference, then default to 'zh-TW'
    const langToSet = (urlLang && ['zh-TW', 'en', 'ja', 'es'].includes(urlLang)) ? urlLang : (savedLang || 'zh-TW');
    setLanguage(langToSet);
});

// ===========================
// Background Image Slider
// ===========================

let currentSlide = 0;
const slides = document.querySelectorAll('.bg-slide');
const totalSlides = slides.length;

function changeSlide() {
    // Remove active class from current slide
    slides[currentSlide].classList.remove('active');

    // Move to next slide
    currentSlide = (currentSlide + 1) % totalSlides;

    // Add active class to new slide
    slides[currentSlide].classList.add('active');
}

// Change slide every 5 seconds
setInterval(changeSlide, 5000);

// ===========================
// Mobile Navigation Toggle
// ===========================

const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Animate hamburger icon
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ===========================
// Navbar Scroll Effect
// ===========================

const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===========================
// Smooth Scroll for Navigation
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Scroll Reveal Animation
// ===========================

const revealElements = document.querySelectorAll('.service-card, .about-content, .visual-card');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('reveal', 'active');
        }
    });
};

// Initial check
revealOnScroll();

// Check on scroll
window.addEventListener('scroll', revealOnScroll);

// Add reveal class to elements
revealElements.forEach(element => {
    element.classList.add('reveal');
});

// ===========================
// Contact Form Handling
// ===========================

const contactForm = document.getElementById('contactForm');
const submitButton = contactForm ? contactForm.querySelector('button[type="submit"]') : null;
const submitButtonDefaultText = submitButton ? submitButton.textContent : '';

if (contactForm) {
    contactForm.addEventListener('submit', async(e) => {
        e.preventDefault();

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
        }

        const formData = new FormData(contactForm);

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alert('Thank you! Your message has been sent.');
                contactForm.reset();
            } else {
                alert('There was an issue sending your message. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Unable to send your message right now. Please try again later.');
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = submitButtonDefaultText || 'Send Message';
            }
        }
    });
}

// ===========================
// Parallax Effect for Hero
// ===========================

const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;

    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// ===========================
// Interactive Gradient Orbs
// ===========================

const orbs = document.querySelectorAll('.gradient-orb');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 20;
        const x = mouseX * speed;
        const y = mouseY * speed;

        orb.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// ===========================
// Performance Optimization
// ===========================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll-heavy functions
const debouncedReveal = debounce(revealOnScroll, 100);
window.addEventListener('scroll', debouncedReveal);

// ===========================
// Loading Animation
// ===========================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===========================
// Active Navigation Link
// ===========================

const sections = document.querySelectorAll('section[id]');

const highlightNavigation = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

        if (!navLink) {
            return;
        }

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add('active');
        } else {
            navLink.classList.remove('active');
        }
    });
};

window.addEventListener('scroll', highlightNavigation);

// ===========================
// Particle Text Effect
// ===========================

(function() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null, radius: 100 };
    let animationId = null;
    let isAnimating = false;
    const text = 'Kairos.ai';

    // Set canvas size
    function resizeCanvas() {
        const hero = document.querySelector('.hero');
        if (hero) {
            canvas.width = hero.offsetWidth;
            canvas.height = hero.offsetHeight;
        }
        initParticles();
    }

    // Particle class
    class Particle {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.baseX = x;
            this.baseY = y;
            this.size = 2;
            this.color = color;
            this.density = (Math.random() * 30) + 1;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }

        update() {
            if (mouse.x === null || mouse.y === null) {
                // Return to base position when mouse is not over canvas
                if (this.x !== this.baseX) {
                    let dx = this.x - this.baseX;
                    this.x -= dx / 10;
                }
                if (this.y !== this.baseY) {
                    let dy = this.y - this.baseY;
                    this.y -= dy / 10;
                }
                return;
            }

            // Calculate distance between mouse and particle
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouse.radius) {
                // Push particles away from mouse
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                let force = (mouse.radius - distance) / mouse.radius;
                let directionX = forceDirectionX * force * this.density;
                let directionY = forceDirectionY * force * this.density;
                this.x -= directionX;
                this.y -= directionY;
            } else {
                // Return to base position with easing
                if (this.x !== this.baseX) {
                    let dx = this.x - this.baseX;
                    this.x -= dx / 10;
                }
                if (this.y !== this.baseY) {
                    let dy = this.y - this.baseY;
                    this.y -= dy / 10;
                }
            }
        }
    }

    // Initialize particles from text
    function initParticles() {
        particles = [];

        if (canvas.width === 0 || canvas.height === 0) return;

        // Calculate font size based on canvas width
        let fontSize = Math.min(canvas.width / 10, 90);
        if (canvas.width < 768) {
            fontSize = Math.min(canvas.width / 6, 45);
        }

        // Create temporary canvas for text rendering
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');

        // Set temp canvas size
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;

        // Use system fonts that support Chinese characters
        const fontFamily = '"PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", "Noto Sans CJK SC", "WenQuanYi Micro Hei", "Heiti SC", sans-serif';
        tempCtx.fillStyle = 'white';
        tempCtx.font = `bold ${fontSize}px ${fontFamily}`;
        tempCtx.textAlign = 'center';
        tempCtx.textBaseline = 'middle';

        // Position text - centered horizontally, lower position vertically
        const textX = tempCanvas.width / 2;
        const textY = tempCanvas.height * 0.22;

        // Draw text once with center alignment
        tempCtx.fillText(text, textX, textY);

        // Get image data from temp canvas
        const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
        const data = imageData.data;

        // Sample pixels and create particles
        const gap = 3; // Sampling gap - smaller = more particles

        for (let y = 0; y < tempCanvas.height; y += gap) {
            for (let x = 0; x < tempCanvas.width; x += gap) {
                const index = (y * tempCanvas.width + x) * 4;
                const alpha = data[index + 3];

                if (alpha > 128) {
                    // Create particle with gradient color
                    const hue = 210 + (x / canvas.width) * 30; // Blue gradient
                    const color = `hsla(${hue}, 80%, 70%, 0.9)`;
                    particles.push(new Particle(x, y, color));
                }
            }
        }
    }

    // Animation loop
    function animate() {
        if (!isAnimating) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particles.length; i++) {
            particles[i].draw();
            particles[i].update();
        }

        animationId = requestAnimationFrame(animate);
    }

    // Start animation
    function startAnimation() {
        if (!isAnimating) {
            isAnimating = true;
            animate();
        }
    }

    // Stop animation
    function stopAnimation() {
        isAnimating = false;
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    }

    // Mouse events
    canvas.addEventListener('mousemove', function(e) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    canvas.addEventListener('mouseleave', function() {
        mouse.x = null;
        mouse.y = null;
    });

    // Touch events for mobile
    canvas.addEventListener('touchmove', function(e) {
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        mouse.x = touch.clientX - rect.left;
        mouse.y = touch.clientY - rect.top;
    }, { passive: false });

    canvas.addEventListener('touchend', function() {
        mouse.x = null;
        mouse.y = null;
    });

    // Initialize on DOM ready
    function init() {
        resizeCanvas();
        startAnimation();
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Also reinitialize on window load to ensure fonts are loaded
    window.addEventListener('load', function() {
        resizeCanvas();
    });

    // Handle resize
    window.addEventListener('resize', debounce(resizeCanvas, 250));

    // Handle visibility change to pause/resume animation
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            stopAnimation();
        } else {
            startAnimation();
        }
    });

    // Expose reinit function globally for language changes
    window.reinitParticles = function() {
        resizeCanvas();
    };
})();