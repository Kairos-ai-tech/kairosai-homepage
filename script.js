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
        'about.desc': 'We are dedicated to creating solutions that don\'t just save time, but unlock new possibilities for our users and customers.',
        'about.feature1': 'Cutting-edge AI technology',
        'about.feature2': 'Human-centered design approach',
        'about.feature3': 'Proven track record of success',
        'about.feature4': 'Dedicated support and partnership',
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
        'footer.copyright': '© 2025 Kairos.ai. All rights reserved.'
    },
    'zh-TW': {
        'nav.home': '首頁',
        'nav.services': '服務項目',
        'nav.about': '關於我們',
        'nav.contact': '聯絡我們',
        'hero.title1': '讓每一刻',
        'hero.title2': '都有價值',
        'hero.subtitle': '在 Kairos.ai，我們相信時間是最寶貴的資源。我們的使命是透過創新的人工智慧應用程式和智慧系統，重塑人們體驗和管理時間的方式。',
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
        'about.title': '為什麼選擇 Kairos.ai？',
        'about.desc': '我們致力於創造不僅節省時間，更能為用戶和客戶開啟新可能性的解決方案。',
        'about.feature1': '尖端人工智慧技術',
        'about.feature2': '以人為本的設計方法',
        'about.feature3': '經過驗證的成功記錄',
        'about.feature4': '專業支援與合作夥伴關係',
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
        'footer.copyright': '© 2025 Kairos.ai. 版權所有。'
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
        'about.desc': '私たちは、単に時間を節約するだけでなく、ユーザーやお客様に新しい可能性を開くソリューションの創造に専念しています。',
        'about.feature1': '最先端のAI技術',
        'about.feature2': '人間中心の設計アプローチ',
        'about.feature3': '実証済みの成功実績',
        'about.feature4': '専任サポートとパートナーシップ',
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
        'footer.copyright': '© 2025 Kairos.ai. All rights reserved.'
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
        'about.desc': 'Nos dedicamos a crear soluciones que no solo ahorran tiempo, sino que desbloquean nuevas posibilidades para nuestros usuarios y clientes.',
        'about.feature1': 'Tecnología de IA de vanguardia',
        'about.feature2': 'Enfoque de diseño centrado en el ser humano',
        'about.feature3': 'Historial comprobado de éxito',
        'about.feature4': 'Soporte dedicado y asociación',
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
        'footer.copyright': '© 2025 Kairos.ai. Todos los derechos reservados.'
    }
};

let currentLang = 'zh-TW';

const langLabels = {
    'en': 'EN',
    'zh-TW': '繁中',
    'ja': '日本',
    'es': 'ES'
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

    // Save preference
    localStorage.setItem('preferredLanguage', lang);
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

// Load saved language preference
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'zh-TW';
    setLanguage(savedLang);
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