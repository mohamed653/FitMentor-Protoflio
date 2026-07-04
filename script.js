(function () {
    const LANG_KEY = 'fitmentor-lang';

    const translations = {
        en: {
            pageTitle: 'Mohamed Hamed | IFBB Pro & Fitness Coach',
            lang: { toggleLabel: 'Language' },
            nav: {
                about: 'About',
                services: 'Services',
                achievements: 'Achievements',
                contact: 'Contact',
            },
            hero: {
                badge: 'IFBB Pro · Hybrid Athlete',
                title: 'Forge Your <span class="text-gradient">Legacy</span>',
                subtitle: 'Elite-level coaching for those who refuse to settle. Built for hypertrophy, performance, and peak physique development.',
                cta: 'Start Your Transformation',
                app: 'Get FitMentor App',
                imageAlt: 'Mohamed Hamed - Professional IFBB Pro',
            },
            about: {
                label: 'About',
                title: 'The Iron Forge',
                desc: 'Relentless dedication. Precision programming. Zero excuses.',
                body: 'Welcome to the iron forge. I am Mohamed Hamed, a Professional IFBB Pro and Hybrid Athlete. My philosophy is built on relentless dedication, focusing on optimal training splits for heavy muscular hypertrophy and peak physical development. Whether you\'re aiming to dominate on the competitive stage or completely reconstruct your physique, I engineer the precise blueprints to get you there.',
            },
            services: {
                label: 'Services',
                title: 'My Arsenal',
                desc: 'Science-backed protocols tailored to your goals.',
                coaching: {
                    title: 'Online Coaching',
                    desc: 'Customized, aggressive workout routines and check-ins designed specifically for your goals — bulking, cutting, or athletic performance. Total accountability.',
                },
                nutrition: {
                    title: 'Nutrition Protocols',
                    desc: 'No cookie-cutter diets. Strict, science-backed nutritional programming fueled to maximize your gains, aid recovery, and strip away body fat.',
                },
            },
            achievements: {
                label: 'Achievements',
                title: 'The Resume',
                desc: 'Built in the trenches, proven on stage.',
                ifbb: {
                    title: 'IFBB Professional',
                    desc: 'Earned professional status competing against the top athletes in the world.',
                },
                olympia: {
                    title: 'Mr. Olympia',
                    desc: 'Secured 3rd Place at Mr. Olympia in the fiercely competitive Men\'s Physique category.',
                },
                experience: {
                    title: 'Years Elite Experience',
                    desc: 'Years in the trenches building physiques and guiding athletes to their absolute peak.',
                },
            },
            contact: {
                label: 'Contact',
                title: 'Ready to Work?',
                location: 'Location',
                locationValue: 'Mansoura, Egypt',
                email: 'Email',
                copyright: '© 2026 Mohamed Hamed. All rights reserved.',
            },
            download: {
                aria: 'Download FitMentor app',
                title: 'Download FitMentor',
                subtitle: 'Your personal fitness coach in your pocket',
                button: 'Download App',
                dismiss: 'Dismiss download bar',
            },
        },
        ar: {
            pageTitle: 'محمد حامد | محترف IFBB ومدرب لياقة',
            lang: { toggleLabel: 'اللغة' },
            nav: {
                about: 'عني',
                services: 'الخدمات',
                achievements: 'الإنجازات',
                contact: 'تواصل',
            },
            hero: {
                badge: 'محترف IFBB · رياضي هجين',
                title: 'اصنع <span class="text-gradient">إرثك</span>',
                subtitle: 'تدريب على مستوى النخبة لمن يرفض الاكتفاء. مصمم لبناء العضلات والأداء وتطوير الجسم إلى أقصى حد.',
                cta: 'ابدأ تحولك',
                app: 'حمّل تطبيق FitMentor',
                imageAlt: 'محمد حامد - محترف IFBB',
            },
            about: {
                label: 'عني',
                title: 'مصهر الحديد',
                desc: 'تفانٍ لا يلين. برمجة دقيقة. بلا أعذار.',
                body: 'مرحباً بك في مصهر الحديد. أنا محمد حامد، محترف IFBB ورياضي هجين. فلسفتي مبنية على التفاني المستمر، مع التركيز على برامج التدريب المثلى لبناء العضلات الضخمة والتطور البدني الأقصى. سواء كنت تستهدف التفوق على منصة المنافسة أو إعادة بناء جسدك بالكامل، أصمم لك المخططات الدقيقة للوصول إلى هدفك.',
            },
            services: {
                label: 'الخدمات',
                title: 'ترسانتي',
                desc: 'بروتوكولات مدعومة بالعلم ومصممة لأهدافك.',
                coaching: {
                    title: 'التدريب أونلاين',
                    desc: 'برامج تمرين مكثفة ومتابعة دورية مصممة خصيصاً لأهدافك — التضخيم، التنشيف، أو الأداء الرياضي. مساءلة كاملة.',
                },
                nutrition: {
                    title: 'بروتوكولات التغذية',
                    desc: 'لا حميات جاهزة. برمجة غذائية صارمة ومدعومة بالعلم لتعظيم مكاسبك، تحسين التعافي، وحرق الدهون.',
                },
            },
            achievements: {
                label: 'الإنجازات',
                title: 'السيرة الذاتية',
                desc: 'بُني في المعسكر، وأُثبت على المسرح.',
                ifbb: {
                    title: 'محترف IFBB',
                    desc: 'حصلت على الاحتراف بعد المنافسة مع أفضل الرياضيين في العالم.',
                },
                olympia: {
                    title: 'مستر أولمبيا',
                    desc: 'حصلت على المركز الثالث في مستر أولمبيا في فئة الرجال فيزيك الاحترافية.',
                },
                experience: {
                    title: 'سنوات خبرة النخبة',
                    desc: 'سنوات في الميدان لبناء الأجسام وتوجيه الرياضيين إلى ذروة أدائهم.',
                },
            },
            contact: {
                label: 'تواصل',
                title: 'جاهز للعمل؟',
                location: 'الموقع',
                locationValue: 'المنصورة، مصر',
                email: 'البريد الإلكتروني',
                copyright: '© 2026 محمد حامد. جميع الحقوق محفوظة.',
            },
            download: {
                aria: 'حمّل تطبيق FitMentor',
                title: 'حمّل FitMentor',
                subtitle: 'مدربك الشخصي في جيبك',
                button: 'حمّل التطبيق',
                dismiss: 'إغلاق شريط التحميل',
            },
        },
    };

    function getNestedValue(obj, path) {
        return path.split('.').reduce((acc, key) => acc?.[key], obj);
    }

    function setLanguage(lang) {
        const t = translations[lang];
        if (!t) return;

        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.title = t.pageTitle;

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            const value = getNestedValue(t, key);
            if (value == null) return;

            if (el.hasAttribute('data-i18n-html')) {
                el.innerHTML = value;
            } else {
                el.textContent = value;
            }
        });

        document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
            const mappings = el.getAttribute('data-i18n-attr').split(';');
            mappings.forEach((mapping) => {
                const [attr, key] = mapping.trim().split(':');
                const value = getNestedValue(t, key);
                if (value != null) el.setAttribute(attr, value);
            });
        });

        document.querySelectorAll('.lang-btn').forEach((btn) => {
            const isActive = btn.dataset.lang === lang;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', String(isActive));
        });

        localStorage.setItem(LANG_KEY, lang);
    }

    const savedLang = localStorage.getItem(LANG_KEY);
    const initialLang = savedLang === 'ar' ? 'ar' : 'en';
    setLanguage(initialLang);

    document.querySelectorAll('.lang-btn').forEach((btn) => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    const nav = document.getElementById('nav');
    const downloadBar = document.getElementById('download-bar');
    const dismissBtn = document.getElementById('download-dismiss');
    const DISMISS_KEY = 'fitmentor-download-dismissed';

    function onScroll() {
        nav.classList.toggle('scrolled', window.scrollY > 20);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach((el) => observer.observe(el));

    function showDownloadBar() {
        document.body.classList.add('has-download-bar');
        downloadBar.classList.remove('hidden');
    }

    function hideDownloadBar() {
        downloadBar.classList.add('hidden');
        document.body.classList.remove('has-download-bar');
        sessionStorage.setItem(DISMISS_KEY, '1');
    }

    if (!sessionStorage.getItem(DISMISS_KEY)) {
        showDownloadBar();
    } else {
        downloadBar.classList.add('hidden');
    }

    dismissBtn.addEventListener('click', hideDownloadBar);
})();
