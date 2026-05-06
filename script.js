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
        'nav.products': 'Products',
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
        'solutions.keywords.tag14': 'Intelligent Factory',
        'products.title': 'Our Products',
        'products.subtitle': 'B2B AI platforms built for enterprises and lean teams — plus consumer apps from our labs',
        'products.itech.title': 'AI Apprentice iTech',
        'products.itech.badge': 'B2B',
        'products.itech.tagline': 'AI + AR Skills Transfer Platform',
        'products.itech.desc': 'Transfer decades of master craftsman expertise to new apprentices in months using AI quantification and AR real-time guidance. Revolutionizing manufacturing skill preservation.',
        'products.itech.feature1': 'AI + AR',
        'products.itech.feature2': 'Skill Transfer',
        'products.itech.feature3': 'Manufacturing',
        'products.itech.cta': 'Learn More',
        'products.itech.stat1': 'Faster onboarding',
        'products.itech.stat2num': 'Months',
        'products.itech.stat2': 'vs years to master',
        'products.itech.stat3': 'Real-time guidance',
        'products.vcom.badge': 'B2B',
        'products.vcom.tagline': 'Hire a virtual company in 5 minutes',
        'products.vcom.desc': 'A virtual company of AI coworkers — Anna, Kai, and Oliver — that runs the operating cadence of a real team. Built for solo founders and lean orgs who need leverage, not headcount.',
        'products.vcom.feature1': 'AI Coworkers',
        'products.vcom.feature2': 'Standups',
        'products.vcom.feature3': 'Solo Founders',
        'products.vcom.cta': 'Learn More',
        'products.vcom.stat1unit': 'min',
        'products.vcom.stat1': 'to launch',
        'products.vcom.stat2': 'AI coworkers',
        'products.vcom.stat3': 'Always on',
        'products.others.title': 'Other Products',
        'products.others.subtitle': 'Consumer apps from the Kairos.ai labs',
        'products.voicesketch.badge': 'iOS App',
        'products.voicesketch.tagline': 'Transform voice to visual notes',
        'products.voicesketch.desc': 'Convert spoken content into organized visual learning materials. Perfect for students and professionals who want to capture ideas efficiently.',
        'products.voicesketch.feature1': 'AI-Powered',
        'products.voicesketch.feature2': '10 Languages',
        'products.voicesketch.feature3': 'Visual Notes',
        'products.voicesketch.cta': 'Learn More',
        'products.w2e.badge': 'Coming Soon',
        'products.w2e.tagline': 'What to Eat - Never wonder again',
        'products.w2e.desc': 'AI-powered food discovery app that helps you decide what to eat based on your preferences, location, and mood. Say goodbye to mealtime indecision.',
        'products.w2e.feature1': 'AI-Powered',
        'products.w2e.feature2': 'Location-Based',
        'products.w2e.feature3': 'Food Discovery',
        'products.w2e.cta': 'Learn More'
    },
    'zh-TW': {
        'nav.home': '首頁',
        'nav.services': '服務項目',
        'nav.products': '產品',
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
        'solutions.keywords.tag14': '智能工廠',
        'products.title': '我們的產品',
        'products.subtitle': '為企業與精實團隊打造的 B2B AI 平台，以及來自實驗室的消費級應用',
        'products.itech.title': 'AI學徒 iTech',
        'products.itech.badge': 'B2B',
        'products.itech.tagline': 'AI + AR 技能傳承平台',
        'products.itech.desc': '用 AI 量化師傅數十年功力，搭配 AR 即時指導，讓新手在數月內習得製造業核心技藝。徹底改變技能傳承模式。',
        'products.itech.feature1': 'AI + AR',
        'products.itech.feature2': '技能傳承',
        'products.itech.feature3': '製造業',
        'products.itech.cta': '了解更多',
        'products.itech.stat1': '更快上手',
        'products.itech.stat2num': '數月',
        'products.itech.stat2': '取代多年苦練',
        'products.itech.stat3': '即時指導',
        'products.vcom.badge': 'B2B',
        'products.vcom.tagline': '5 分鐘聘用一間虛擬公司',
        'products.vcom.desc': '由 AI 同事 Anna、Kai、Oliver 組成的虛擬公司，以真實團隊的節奏運作。為單人創辦人與精實組織打造，要的是槓桿，不是人頭。',
        'products.vcom.feature1': 'AI 同事',
        'products.vcom.feature2': '每日站會',
        'products.vcom.feature3': '單人創辦人',
        'products.vcom.cta': '了解更多',
        'products.vcom.stat1unit': '分鐘',
        'products.vcom.stat1': '即可上線',
        'products.vcom.stat2': 'AI 同事',
        'products.vcom.stat3': '全天候運轉',
        'products.others.title': '其他產品',
        'products.others.subtitle': 'Kairos.ai 實驗室推出的消費級應用',
        'products.voicesketch.badge': 'iOS 應用程式',
        'products.voicesketch.tagline': '將語音轉化為視覺筆記',
        'products.voicesketch.desc': '將口述內容轉換為有組織的視覺學習素材。非常適合希望高效捕捉想法的學生和專業人士。',
        'products.voicesketch.feature1': 'AI 驅動',
        'products.voicesketch.feature2': '10 種語言',
        'products.voicesketch.feature3': '視覺筆記',
        'products.voicesketch.cta': '了解更多',
        'products.w2e.badge': '即將推出',
        'products.w2e.tagline': '吃什麼 - 不再煩惱選擇',
        'products.w2e.desc': 'AI 驅動的美食探索應用，根據您的偏好、位置和心情幫您決定吃什麼。告別用餐選擇困難症。',
        'products.w2e.feature1': 'AI 驅動',
        'products.w2e.feature2': '基於位置',
        'products.w2e.feature3': '美食探索',
        'products.w2e.cta': '了解更多'
    },
    ja: {
        'nav.home': 'ホーム',
        'nav.services': 'サービス',
        'nav.products': '製品',
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
        'solutions.keywords.tag14': 'インテリジェントファクトリー',
        'products.title': '製品紹介',
        'products.subtitle': '企業と少人数チームのためのB2B AIプラットフォーム、そしてラボ発のコンシューマーアプリ',
        'products.itech.title': 'AI弟子 iTech',
        'products.itech.badge': 'B2B',
        'products.itech.tagline': 'AI + AR 技能伝承プラットフォーム',
        'products.itech.desc': 'AIによる定量化とARリアルタイムガイダンスで、熟練職人の数十年の技を数ヶ月で新人に伝承。製造業の技能継承を革新します。',
        'products.itech.feature1': 'AI + AR',
        'products.itech.feature2': '技能伝承',
        'products.itech.feature3': '製造業',
        'products.itech.cta': '詳しく見る',
        'products.itech.stat1': '習得を加速',
        'products.itech.stat2num': '数ヶ月',
        'products.itech.stat2': '従来の数年を短縮',
        'products.itech.stat3': 'リアルタイム支援',
        'products.vcom.badge': 'B2B',
        'products.vcom.tagline': '5分でバーチャル会社を雇う',
        'products.vcom.desc': 'Anna・Kai・OliverというAI同僚で構成されるバーチャル会社。実チームと同じ運営リズムで動きます。人員ではなくレバレッジを必要とする一人創業者と少数精鋭組織のために。',
        'products.vcom.feature1': 'AI同僚',
        'products.vcom.feature2': 'スタンドアップ',
        'products.vcom.feature3': '一人創業者',
        'products.vcom.cta': '詳しく見る',
        'products.vcom.stat1unit': '分',
        'products.vcom.stat1': 'で起動',
        'products.vcom.stat2': 'AI同僚',
        'products.vcom.stat3': '24時間稼働',
        'products.others.title': 'その他の製品',
        'products.others.subtitle': 'Kairos.ai ラボ発のコンシューマーアプリ',
        'products.voicesketch.badge': 'iOSアプリ',
        'products.voicesketch.tagline': '音声をビジュアルノートに変換',
        'products.voicesketch.desc': '話した内容を整理された視覚的な学習教材に変換します。アイデアを効率的にキャプチャしたい学生やプロフェッショナルに最適です。',
        'products.voicesketch.feature1': 'AI搭載',
        'products.voicesketch.feature2': '10言語対応',
        'products.voicesketch.feature3': 'ビジュアルノート',
        'products.voicesketch.cta': '詳しく見る',
        'products.w2e.badge': '近日公開',
        'products.w2e.tagline': '何食べる？ - もう迷わない',
        'products.w2e.desc': 'AIを活用したフード発見アプリ。好み、場所、気分に基づいて食事を提案します。食事選びの悩みにさようなら。',
        'products.w2e.feature1': 'AI搭載',
        'products.w2e.feature2': '位置情報連携',
        'products.w2e.feature3': 'フード発見',
        'products.w2e.cta': '詳しく見る'
    },
    es: {
        'nav.home': 'Inicio',
        'nav.services': 'Servicios',
        'nav.products': 'Productos',
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
        'solutions.keywords.tag14': 'Fábrica Inteligente',
        'products.title': 'Nuestros Productos',
        'products.subtitle': 'Plataformas de IA B2B para empresas y equipos ágiles, además de apps de consumo desde nuestros laboratorios',
        'products.itech.title': 'AI Aprendiz iTech',
        'products.itech.badge': 'B2B',
        'products.itech.tagline': 'Plataforma de Transferencia de Habilidades con IA + AR',
        'products.itech.desc': 'Transfiere décadas de experiencia artesanal a nuevos aprendices en meses mediante cuantificación con IA y guía en tiempo real con AR. Revolucionando la preservación de habilidades manufactureras.',
        'products.itech.feature1': 'IA + AR',
        'products.itech.feature2': 'Transferencia',
        'products.itech.feature3': 'Manufactura',
        'products.itech.cta': 'Saber Más',
        'products.itech.stat1': 'Onboarding más rápido',
        'products.itech.stat2num': 'Meses',
        'products.itech.stat2': 'en vez de años',
        'products.itech.stat3': 'Guía en tiempo real',
        'products.vcom.badge': 'B2B',
        'products.vcom.tagline': 'Contrata una empresa virtual en 5 minutos',
        'products.vcom.desc': 'Una empresa virtual de compañeros de IA — Anna, Kai y Oliver — que opera con el ritmo de un equipo real. Hecha para fundadores en solitario y organizaciones ágiles que necesitan apalancamiento, no más personal.',
        'products.vcom.feature1': 'Compañeros IA',
        'products.vcom.feature2': 'Standups',
        'products.vcom.feature3': 'Fundadores Solo',
        'products.vcom.cta': 'Saber Más',
        'products.vcom.stat1unit': 'min',
        'products.vcom.stat1': 'para lanzar',
        'products.vcom.stat2': 'Compañeros IA',
        'products.vcom.stat3': 'Siempre activo',
        'products.others.title': 'Otros Productos',
        'products.others.subtitle': 'Apps de consumo desde los laboratorios de Kairos.ai',
        'products.voicesketch.badge': 'App iOS',
        'products.voicesketch.tagline': 'Transforma la voz en notas visuales',
        'products.voicesketch.desc': 'Convierte contenido hablado en materiales de aprendizaje visual organizados. Perfecto para estudiantes y profesionales que desean capturar ideas de manera eficiente.',
        'products.voicesketch.feature1': 'Impulsado por IA',
        'products.voicesketch.feature2': '10 Idiomas',
        'products.voicesketch.feature3': 'Notas Visuales',
        'products.voicesketch.cta': 'Saber Más',
        'products.w2e.badge': 'Próximamente',
        'products.w2e.tagline': 'Qué Comer - No más indecisión',
        'products.w2e.desc': 'Aplicación de descubrimiento de comida impulsada por IA que te ayuda a decidir qué comer según tus preferencias, ubicación y estado de ánimo. Di adiós a la indecisión a la hora de comer.',
        'products.w2e.feature1': 'Impulsado por IA',
        'products.w2e.feature2': 'Basado en Ubicación',
        'products.w2e.feature3': 'Descubre Comida',
        'products.w2e.cta': 'Saber Más'
    },
    it: {
        'nav.home': 'Home',
        'nav.services': 'Servizi',
        'nav.products': 'Prodotti',
        'nav.about': 'Chi Siamo',
        'nav.contact': 'Contatti',
        'hero.title1': 'Fai Contare Ogni',
        'hero.title2': 'Momento',
        'hero.subtitle': 'In Kairos.ai crediamo che il tempo sia la risorsa più preziosa. La nostra missione è ridefinire il modo in cui le persone vivono e gestiscono il tempo attraverso applicazioni AI innovative e sistemi intelligenti.',
        'hero.cta1': 'Inizia Ora',
        'hero.cta2': 'I Nostri Servizi',
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
        'about.intro': 'In Kairos.ai, la nostra missione è ridefinire il modo in cui le persone vivono e gestiscono il tempo attraverso l\'AI innovativa. Ci concentriamo nell\'aiutare le aziende manifatturiere tradizionali nella trasformazione digitale applicando sistemi basati sull\'AI, analisi dei dati e automazione intelligente ad ambienti di produzione reali.',
        'about.desc': 'Ci dedichiamo a creare soluzioni che non solo fanno risparmiare tempo, ma sbloccano nuove possibilità per i nostri utenti e clienti.',
        'about.feature1': 'Tecnologia AI all\'avanguardia',
        'about.feature2': 'Approccio di design incentrato sull\'uomo',
        'about.feature3': 'Track record comprovato di successo',
        'about.feature4': 'Supporto dedicato e partnership',
        'about.experienceTitle': 'Esperienza nel Settore',
        'about.experienceDesc': 'Il nostro team ha assistito fabbriche di semiconduttori nell\'ottimizzazione dei processi e ha implementato sistemi di analisi dati e AI per impianti di produzione solare, portando metodi di produzione avanzati alle linee produttive.',
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
        'solutions.title': 'Kairos.ai Sistemi AI, Fabbrica Intelligente e Soluzioni di Trasformazione Digitale',
        'solutions.subtitle': 'La tecnologia AI professionale aiuta il settore manifatturiero a raggiungere aggiornamenti intelligenti',
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
        'products.subtitle': 'Piattaforme AI B2B per aziende e team snelli, più app consumer dai nostri laboratori',
        'products.itech.title': 'AI Apprendista iTech',
        'products.itech.badge': 'B2B',
        'products.itech.tagline': 'Piattaforma di Trasferimento Competenze AI + AR',
        'products.itech.desc': 'Trasferisci decenni di esperienza artigianale ai nuovi apprendisti in pochi mesi grazie alla quantificazione AI e alla guida in tempo reale AR. Rivoluzionando la conservazione delle competenze manifatturiere.',
        'products.itech.feature1': 'AI + AR',
        'products.itech.feature2': 'Trasferimento',
        'products.itech.feature3': 'Manifatturiero',
        'products.itech.cta': 'Scopri di Più',
        'products.itech.stat1': 'Onboarding più veloce',
        'products.itech.stat2num': 'Mesi',
        'products.itech.stat2': 'invece di anni',
        'products.itech.stat3': 'Guida in tempo reale',
        'products.vcom.badge': 'B2B',
        'products.vcom.tagline': 'Assumi un\'azienda virtuale in 5 minuti',
        'products.vcom.desc': 'Un\'azienda virtuale di colleghi AI — Anna, Kai e Oliver — che lavora con la cadenza operativa di un team reale. Pensata per fondatori solo e organizzazioni snelle che vogliono leva, non più organico.',
        'products.vcom.feature1': 'Colleghi AI',
        'products.vcom.feature2': 'Standup',
        'products.vcom.feature3': 'Fondatori Solo',
        'products.vcom.cta': 'Scopri di Più',
        'products.vcom.stat1unit': 'min',
        'products.vcom.stat1': 'per lanciare',
        'products.vcom.stat2': 'Colleghi AI',
        'products.vcom.stat3': 'Sempre attivo',
        'products.others.title': 'Altri Prodotti',
        'products.others.subtitle': 'App consumer dai laboratori Kairos.ai',
        'products.voicesketch.badge': 'App iOS',
        'products.voicesketch.tagline': 'Trasforma la voce in note visive',
        'products.voicesketch.desc': 'Converti i contenuti parlati in materiali di apprendimento visivi organizzati. Perfetto per studenti e professionisti che vogliono catturare idee in modo efficiente.',
        'products.voicesketch.feature1': 'Basato su AI',
        'products.voicesketch.feature2': '10 Lingue',
        'products.voicesketch.feature3': 'Note Visive',
        'products.voicesketch.cta': 'Scopri di Più',
        'products.w2e.badge': 'Prossimamente',
        'products.w2e.tagline': 'Cosa Mangiare - Non più indecisioni',
        'products.w2e.desc': 'App di scoperta del cibo basata sull\'AI che ti aiuta a decidere cosa mangiare in base alle tue preferenze, posizione e umore. Addio all\'indecisione a tavola.',
        'products.w2e.feature1': 'Basato su AI',
        'products.w2e.feature2': 'Basato sulla Posizione',
        'products.w2e.feature3': 'Scopri Cibo',
        'products.w2e.cta': 'Scopri di Più'
    },
    fr: {
        'nav.home': 'Accueil',
        'nav.services': 'Services',
        'nav.products': 'Produits',
        'nav.about': 'À Propos',
        'nav.contact': 'Contact',
        'hero.title1': 'Faites Compter Chaque',
        'hero.title2': 'Moment',
        'hero.subtitle': 'Chez Kairos.ai, nous croyons que le temps est la ressource la plus précieuse. Notre mission est de redéfinir la façon dont les gens vivent et gèrent le temps grâce à des applications AI innovantes et des systèmes intelligents.',
        'hero.cta1': 'Commencer',
        'hero.cta2': 'Nos Services',
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
        'about.intro': 'Chez Kairos.ai, notre mission est de redéfinir la façon dont les gens vivent et gèrent le temps grâce à une IA innovante. Nous nous concentrons sur l\'aide aux entreprises manufacturières traditionnelles dans leur transformation numérique en appliquant des systèmes basés sur l\'IA, l\'analyse de données et l\'automatisation intelligente aux environnements de production réels.',
        'about.desc': 'Nous nous consacrons à créer des solutions qui ne font pas que gagner du temps, mais ouvrent de nouvelles possibilités pour nos utilisateurs et clients.',
        'about.feature1': 'Technologie IA de pointe',
        'about.feature2': 'Approche de conception centrée sur l\'humain',
        'about.feature3': 'Historique de succès prouvé',
        'about.feature4': 'Support dédié et partenariat',
        'about.experienceTitle': 'Expérience Industrielle',
        'about.experienceDesc': 'Notre équipe a assisté des usines de semi-conducteurs dans l\'optimisation des processus et a également mis en œuvre des systèmes d\'analyse de données et d\'IA pour des usines de fabrication solaire, apportant des méthodes de fabrication avancées aux lignes de production.',
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
        'solutions.title': 'Kairos.ai Systèmes IA, Usine Intelligente et Solutions de Transformation Numérique',
        'solutions.subtitle': 'La technologie IA professionnelle aide le secteur manufacturier à atteindre des mises à niveau intelligentes',
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
        'products.subtitle': 'Plateformes IA B2B pour les entreprises et équipes lean, plus des apps grand public issues de nos labos',
        'products.itech.title': 'AI Apprenti iTech',
        'products.itech.badge': 'B2B',
        'products.itech.tagline': 'Plateforme de Transfert de Compétences AI + AR',
        'products.itech.desc': 'Transférez des décennies d\'expertise artisanale aux nouveaux apprentis en quelques mois grâce à la quantification AI et au guidage AR en temps réel. Révolutionner la préservation des compétences manufacturières.',
        'products.itech.feature1': 'AI + AR',
        'products.itech.feature2': 'Transfert',
        'products.itech.feature3': 'Manufacturier',
        'products.itech.cta': 'En Savoir Plus',
        'products.itech.stat1': 'Montée en compétence accélérée',
        'products.itech.stat2num': 'Mois',
        'products.itech.stat2': 'au lieu d\'années',
        'products.itech.stat3': 'Guidage temps réel',
        'products.vcom.badge': 'B2B',
        'products.vcom.tagline': 'Embauchez une entreprise virtuelle en 5 minutes',
        'products.vcom.desc': 'Une entreprise virtuelle de collègues IA — Anna, Kai et Oliver — qui suit la cadence opérationnelle d\'une vraie équipe. Conçue pour les fondateurs solo et les structures lean qui cherchent du levier, pas des effectifs.',
        'products.vcom.feature1': 'Collègues IA',
        'products.vcom.feature2': 'Standups',
        'products.vcom.feature3': 'Fondateurs Solo',
        'products.vcom.cta': 'En Savoir Plus',
        'products.vcom.stat1unit': 'min',
        'products.vcom.stat1': 'pour lancer',
        'products.vcom.stat2': 'Collègues IA',
        'products.vcom.stat3': 'Toujours actif',
        'products.others.title': 'Autres Produits',
        'products.others.subtitle': 'Apps grand public des labos Kairos.ai',
        'products.voicesketch.badge': 'App iOS',
        'products.voicesketch.tagline': 'Transformez la voix en notes visuelles',
        'products.voicesketch.desc': 'Convertissez le contenu parlé en matériaux d\'apprentissage visuels organisés. Parfait pour les étudiants et les professionnels qui souhaitent capturer des idées efficacement.',
        'products.voicesketch.feature1': 'Propulsé par IA',
        'products.voicesketch.feature2': '10 Langues',
        'products.voicesketch.feature3': 'Notes Visuelles',
        'products.voicesketch.cta': 'En Savoir Plus',
        'products.w2e.badge': 'Bientôt Disponible',
        'products.w2e.tagline': 'Quoi Manger - Plus d\'hésitation',
        'products.w2e.desc': 'Application de découverte culinaire basée sur l\'IA qui vous aide à décider quoi manger selon vos préférences, votre emplacement et votre humeur. Dites adieu à l\'indécision à table.',
        'products.w2e.feature1': 'Propulsé par IA',
        'products.w2e.feature2': 'Basé sur la Localisation',
        'products.w2e.feature3': 'Découverte Culinaire',
        'products.w2e.cta': 'En Savoir Plus'
    },
    ko: {
        'nav.home': '홈',
        'nav.services': '서비스',
        'nav.products': '제품',
        'nav.about': '소개',
        'nav.contact': '문의',
        'hero.title1': '모든 순간을',
        'hero.title2': '가치있게',
        'hero.subtitle': 'Kairos.ai는 시간이 가장 소중한 자원이라고 믿습니다. 혁신적인 AI 애플리케이션과 지능형 시스템을 통해 사람들이 시간을 경험하고 관리하는 방식을 재정의하는 것이 우리의 사명입니다.',
        'hero.cta1': '시작하기',
        'hero.cta2': '서비스 보기',
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
        'about.intro': 'Kairos.ai의 사명은 혁신적인 AI를 통해 사람들이 시간을 경험하고 관리하는 방식을 재정의하는 것입니다. AI 기반 시스템, 데이터 분석, 지능형 자동화를 실제 생산 환경에 적용하여 전통 제조 기업의 디지털 전환을 지원하는 데 집중합니다.',
        'about.desc': '시간을 절약할 뿐만 아니라 사용자와 고객에게 새로운 가능성을 열어주는 솔루션을 만드는 데 전념합니다.',
        'about.feature1': '최첨단 AI 기술',
        'about.feature2': '인간 중심 디자인 접근법',
        'about.feature3': '검증된 성공 실적',
        'about.feature4': '전담 지원 및 파트너십',
        'about.experienceTitle': '산업 경험',
        'about.experienceDesc': '저희 팀은 반도체 공장의 공정 최적화를 지원하고, 태양광 제조 공장에 데이터 분석 및 AI 시스템을 구현하여 첨단 제조 방법을 생산 라인에 도입했습니다.',
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
        'solutions.title': 'Kairos.ai AI 시스템, 스마트 팩토리 및 디지털 전환 솔루션',
        'solutions.subtitle': '전문 AI 기술로 제조업의 지능화 업그레이드 실현',
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
        'products.subtitle': '기업과 린 팀을 위한 B2B AI 플랫폼, 그리고 우리 랩에서 만든 컨슈머 앱',
        'products.itech.title': 'AI 견습생 iTech',
        'products.itech.badge': 'B2B',
        'products.itech.tagline': 'AI + AR 기술 전수 플랫폼',
        'products.itech.desc': 'AI 정량화와 AR 실시간 가이드를 통해 숙련 장인의 수십 년 노하우를 수개월 만에 신입에게 전수합니다. 제조업 기술 보존을 혁신합니다.',
        'products.itech.feature1': 'AI + AR',
        'products.itech.feature2': '기술 전수',
        'products.itech.feature3': '제조업',
        'products.itech.cta': '자세히 보기',
        'products.itech.stat1': '온보딩 가속',
        'products.itech.stat2num': '몇 달',
        'products.itech.stat2': '수년이 아닌',
        'products.itech.stat3': '실시간 가이드',
        'products.vcom.badge': 'B2B',
        'products.vcom.tagline': '5분 만에 가상 회사를 채용하세요',
        'products.vcom.desc': 'Anna, Kai, Oliver로 구성된 AI 동료들의 가상 회사. 실제 팀과 같은 운영 리듬으로 움직입니다. 인원이 아니라 레버리지가 필요한 1인 창업자와 린 조직을 위해 설계되었습니다.',
        'products.vcom.feature1': 'AI 동료',
        'products.vcom.feature2': '스탠드업',
        'products.vcom.feature3': '1인 창업자',
        'products.vcom.cta': '자세히 보기',
        'products.vcom.stat1unit': '분',
        'products.vcom.stat1': '만에 시작',
        'products.vcom.stat2': 'AI 동료',
        'products.vcom.stat3': '24/7 가동',
        'products.others.title': '기타 제품',
        'products.others.subtitle': 'Kairos.ai 랩에서 만든 컨슈머 앱',
        'products.voicesketch.badge': 'iOS 앱',
        'products.voicesketch.tagline': '음성을 비주얼 노트로 변환',
        'products.voicesketch.desc': '음성 콘텐츠를 체계적인 시각적 학습 자료로 변환합니다. 아이디어를 효율적으로 캡처하려는 학생과 전문가에게 완벽합니다.',
        'products.voicesketch.feature1': 'AI 기반',
        'products.voicesketch.feature2': '10개 언어',
        'products.voicesketch.feature3': '비주얼 노트',
        'products.voicesketch.cta': '자세히 보기',
        'products.w2e.badge': '출시 예정',
        'products.w2e.tagline': '뭐 먹지 - 더 이상 고민 없이',
        'products.w2e.desc': '선호도, 위치, 기분에 따라 뭘 먹을지 결정을 도와주는 AI 기반 음식 발견 앱. 식사 시간 고민에 작별을.',
        'products.w2e.feature1': 'AI 기반',
        'products.w2e.feature2': '위치 기반',
        'products.w2e.feature3': '음식 발견',
        'products.w2e.cta': '자세히 보기'
    },
    de: {
        'nav.home': 'Startseite',
        'nav.services': 'Dienstleistungen',
        'nav.products': 'Produkte',
        'nav.about': 'Über Uns',
        'nav.contact': 'Kontakt',
        'hero.title1': 'Jeden Moment',
        'hero.title2': 'Zählen Lassen',
        'hero.subtitle': 'Bei Kairos.ai glauben wir, dass Zeit die wertvollste Ressource ist. Unsere Mission ist es, durch innovative KI-Anwendungen und intelligente Systeme neu zu definieren, wie Menschen Zeit erleben und verwalten.',
        'hero.cta1': 'Jetzt Starten',
        'hero.cta2': 'Unsere Dienste',
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
        'about.intro': 'Bei Kairos.ai ist es unsere Mission, durch innovative KI neu zu definieren, wie Menschen Zeit erleben und verwalten. Wir konzentrieren uns darauf, traditionelle Fertigungsunternehmen bei der digitalen Transformation zu unterstützen, indem wir KI-gesteuerte Systeme, Datenanalyse und intelligente Automatisierung in reale Produktionsumgebungen einbringen.',
        'about.desc': 'Wir widmen uns der Entwicklung von Lösungen, die nicht nur Zeit sparen, sondern neue Möglichkeiten für unsere Benutzer und Kunden erschließen.',
        'about.feature1': 'Modernste KI-Technologie',
        'about.feature2': 'Menschenzentrierter Designansatz',
        'about.feature3': 'Nachgewiesene Erfolgsbilanz',
        'about.feature4': 'Engagierter Support und Partnerschaft',
        'about.experienceTitle': 'Branchenerfahrung',
        'about.experienceDesc': 'Unser Team hat Halbleiterfabriken bei der Prozessoptimierung unterstützt und Datenanalyse- und KI-Systeme für Solarfertigungsanlagen implementiert, um fortschrittliche Fertigungsmethoden in Produktionslinien einzubringen.',
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
        'solutions.title': 'Kairos.ai KI-Systeme, Intelligente Fabrik und Digitale Transformationslösungen',
        'solutions.subtitle': 'Professionelle KI-Technologie hilft der Fertigung, intelligente Upgrades zu erreichen',
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
        'products.subtitle': 'B2B-KI-Plattformen für Unternehmen und schlanke Teams — plus Consumer-Apps aus unseren Labs',
        'products.itech.title': 'KI-Lehrling iTech',
        'products.itech.badge': 'B2B',
        'products.itech.tagline': 'KI + AR Kompetenztransfer-Plattform',
        'products.itech.desc': 'Übertragen Sie jahrzehntelange Handwerksexpertise in wenigen Monaten auf neue Lehrlinge durch KI-Quantifizierung und AR-Echtzeitführung. Revolution der Kompetenzbewahrung in der Fertigung.',
        'products.itech.feature1': 'KI + AR',
        'products.itech.feature2': 'Kompetenztransfer',
        'products.itech.feature3': 'Fertigung',
        'products.itech.cta': 'Mehr Erfahren',
        'products.itech.stat1': 'Schnelleres Onboarding',
        'products.itech.stat2num': 'Monate',
        'products.itech.stat2': 'statt Jahre',
        'products.itech.stat3': 'Echtzeit-Anleitung',
        'products.vcom.badge': 'B2B',
        'products.vcom.tagline': 'Stellen Sie eine virtuelle Firma in 5 Minuten ein',
        'products.vcom.desc': 'Eine virtuelle Firma aus KI-Kollegen — Anna, Kai und Oliver — die im Takt eines echten Teams arbeitet. Gebaut für Solo-Gründer und schlanke Organisationen, die Hebel statt Headcount brauchen.',
        'products.vcom.feature1': 'KI-Kollegen',
        'products.vcom.feature2': 'Standups',
        'products.vcom.feature3': 'Solo-Gründer',
        'products.vcom.cta': 'Mehr Erfahren',
        'products.vcom.stat1unit': 'min',
        'products.vcom.stat1': 'bis zum Start',
        'products.vcom.stat2': 'KI-Kollegen',
        'products.vcom.stat3': 'Immer online',
        'products.others.title': 'Weitere Produkte',
        'products.others.subtitle': 'Consumer-Apps aus den Kairos.ai Labs',
        'products.voicesketch.badge': 'iOS App',
        'products.voicesketch.tagline': 'Stimme in visuelle Notizen umwandeln',
        'products.voicesketch.desc': 'Wandeln Sie gesprochene Inhalte in organisierte visuelle Lernmaterialien um. Perfekt für Studenten und Fachleute, die Ideen effizient erfassen möchten.',
        'products.voicesketch.feature1': 'KI-Gestützt',
        'products.voicesketch.feature2': '10 Sprachen',
        'products.voicesketch.feature3': 'Visuelle Notizen',
        'products.voicesketch.cta': 'Mehr Erfahren',
        'products.w2e.badge': 'Demnächst',
        'products.w2e.tagline': 'Was Essen - Nie wieder grübeln',
        'products.w2e.desc': 'KI-gestützte Food-Discovery-App, die Ihnen hilft, basierend auf Vorlieben, Standort und Stimmung zu entscheiden, was Sie essen möchten. Verabschieden Sie sich von der Essensunentschlossenheit.',
        'products.w2e.feature1': 'KI-Gestützt',
        'products.w2e.feature2': 'Standortbasiert',
        'products.w2e.feature3': 'Food Discovery',
        'products.w2e.cta': 'Mehr Erfahren'
    }
};

let currentLang = 'zh-TW';

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
        canonicalLink.href = (lang === 'zh-TW') ? baseURL : baseURL + '?lang=' + lang;
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
    const langToSet = (urlLang && ['zh-TW', 'en', 'ja', 'es', 'it', 'fr', 'ko', 'de'].includes(urlLang)) ? urlLang : (savedLang || 'zh-TW');
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
            description: 'Scroll the Kairos.ai homepage to one of its main sections: home, about, solutions, products, team, or contact.',
            inputSchema: {
                type: 'object',
                required: ['section'],
                properties: {
                    section: {
                        type: 'string',
                        enum: ['home', 'about', 'solutions', 'products', 'team', 'contact'],
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
                    tagline: 'AI systems, smart factory solutions, and digital transformation for manufacturing.',
                    contact: 'kairos.ai.tech@gmail.com',
                    homepage: 'https://www.kairosaitech.com/',
                    locales: ['en', 'zh-TW', 'ja', 'es', 'it', 'fr', 'ko', 'de'],
                    productFamilies: {
                        b2b: ['Smart factory solutions', 'AI quality inspection', 'MES integration', 'Digital transformation consulting'],
                        b2c: ['VoiceSketch', 'W2E', 'AI學徒']
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

// ===========================
// Other Products tab toggle
// ===========================
(function initOtherProductsToggle() {
    const root = document.querySelector('[data-products-toggle]');
    if (!root) return;

    const tabs = root.querySelectorAll('.products-others-tab');
    const panels = root.querySelectorAll('.product-panel');
    if (!tabs.length || !panels.length) return;

    function activate(target) {
        tabs.forEach((tab) => {
            const match = tab.getAttribute('data-toggle-to') === String(target);
            tab.classList.toggle('is-active', match);
            tab.setAttribute('aria-selected', match ? 'true' : 'false');
        });
        panels.forEach((panel) => {
            const match = panel.getAttribute('data-panel') === String(target);
            panel.classList.toggle('is-active', match);
        });
    }

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-toggle-to');
            if (target == null) return;
            activate(target);
        });
    });
})();
