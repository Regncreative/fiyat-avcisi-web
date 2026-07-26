export type Locale = 'en' | 'tr'

export const translations = {
  en: {
    meta: {
      title: 'Fiyat Avcısı — E-commerce price tracking',
      description:
        'Open-source price tracking panel for e-commerce products: alerts, crawler pipeline, and dashboard.',
    },
    nav: {
      demo: 'Demo',
      features: 'Features',
      why: 'Why',
      faq: 'FAQ',
      github: 'GitHub',
      cta: 'Live Demo',
    },
    hero: {
      brand: 'Fiyat Avcısı',
      tagline:
        'An open-source price tracking panel for e-commerce. Follow products, get drop alerts, and keep the dashboard clear.',
      ctaPrimary: 'View on GitHub',
      ctaSecondary: 'Live Demo',
      hint: 'Portfolio / showcase site — the app lives in its own monorepo.',
    },
    badges: {
      openSource: 'open source',
      typescript: 'TypeScript',
      license: 'license',
      stack: 'React · Express · PostgreSQL',
      queue: 'BullMQ · Redis',
    },
    demo: {
      title: 'See it live',
      subtitle: 'A quick look at the tracking panel — open the live demo to try it yourself.',
      demoCta: 'Open live demo',
      detailsTitle: 'Product detail',
      detailsSubtitle: 'Price history, alerts, and product status at a glance.',
    },
    features: {
      title: 'What it does',
      subtitle: 'Built for tracking, alerting, and comparing prices across stores.',
      items: [
        {
          title: 'Product tracking',
          body: 'Add products from supported marketplaces and keep an eye on price history over time.',
        },
        {
          title: 'Price alerts',
          body: 'Set a target price or percentage drop and get notified when the deal appears.',
        },
        {
          title: 'Crawler pipeline',
          body: 'Background workers fetch and refresh listings through a queue-based crawler pipeline.',
        },
        {
          title: 'Comparison',
          body: 'Compare offers and trends so you can decide when to buy — or wait.',
        },
        {
          title: 'Dashboard',
          body: 'A focused control panel for tracked items, alert rules, and crawl status.',
        },
      ],
    },
    why: {
      title: 'Why open source',
      subtitle: 'A portfolio project you can read, run, and fork.',
      items: [
        {
          title: 'Transparent stack',
          body: 'React frontend, Express API, PostgreSQL, Redis, and BullMQ — real production-shaped pieces.',
        },
        {
          title: 'Learn by reading',
          body: 'See how crawlers, queues, and alert rules fit together in one monorepo.',
        },
        {
          title: 'MIT licensed',
          body: 'Use it, fork it, or adapt the patterns for your own experiments.',
        },
      ],
    },
    stack: {
      title: 'Tech stack',
      subtitle: 'The application monorepo ships with this stack.',
    },
    faq: {
      title: 'FAQ',
      items: [
        {
          q: 'Is this the app itself?',
          a: 'No. This site is the marketing / portfolio landing. The SaaS panel lives in a separate monorepo on GitHub.',
        },
        {
          q: 'Where is the source code?',
          a: 'On GitHub: Regncreative/fiyat-avcisi — React frontend plus Express / PostgreSQL / Redis / BullMQ backend.',
        },
        {
          q: 'Can I run it locally?',
          a: 'Yes. Clone the monorepo, configure env files, run migrations, then start backend and frontend with Node.js 20+, PostgreSQL, and Redis.',
        },
        {
          q: 'Is there a public login?',
          a: 'This landing does not embed the login panel. Use the monorepo (or a future demo URL) to try the product.',
        },
        {
          q: 'What license is it under?',
          a: 'MIT.',
        },
      ],
    },
    footer: {
      tagline: 'E-commerce price tracking — open source.',
      github: 'GitHub',
      license: 'MIT License',
      rights: 'Fiyat Avcısı',
    },
  },
  tr: {
    meta: {
      title: 'Fiyat Avcısı — E-ticaret fiyat takibi',
      description:
        'E-ticaret ürünleri için açık kaynak fiyat takip paneli: uyarılar, crawler pipeline ve dashboard.',
    },
    nav: {
      demo: 'Demo',
      features: 'Özellikler',
      why: 'Neden',
      faq: 'SSS',
      github: 'GitHub',
      cta: 'Canlı Demo',
    },
    hero: {
      brand: 'Fiyat Avcısı',
      tagline:
        'E-ticaret için açık kaynak fiyat takip paneli. Ürünleri izle, düşüş uyarıları al, paneli sade tut.',
      ctaPrimary: 'GitHub’da Gör',
      ctaSecondary: 'Canlı Demo',
      hint: 'Portföy / vitrin sitesi — uygulama ayrı monorepoda.',
    },
    badges: {
      openSource: 'açık kaynak',
      typescript: 'TypeScript',
      license: 'lisans',
      stack: 'React · Express · PostgreSQL',
      queue: 'BullMQ · Redis',
    },
    demo: {
      title: 'Canlı gör',
      subtitle: 'Takip panelinin kısa bir önizlemesi — denemek için canlı demoyu açın.',
      demoCta: 'Canlı demoyu aç',
      detailsTitle: 'Ürün detayı',
      detailsSubtitle: 'Fiyat geçmişi, uyarılar ve ürün durumu tek bakışta.',
    },
    features: {
      title: 'Ne yapar',
      subtitle: 'Takip, uyarı ve mağazalar arası fiyat karşılaştırması için tasarlandı.',
      items: [
        {
          title: 'Ürün takibi',
          body: 'Desteklenen pazaryerlerinden ürün ekleyin; fiyat geçmişini zaman içinde izleyin.',
        },
        {
          title: 'Fiyat uyarıları',
          body: 'Hedef fiyat veya yüzde düşüş belirleyin; fırsat geldiğinde bildirim alın.',
        },
        {
          title: 'Crawler pipeline',
          body: 'Arka plan worker’ları kuyruk tabanlı crawler ile listeleri çeker ve yeniler.',
        },
        {
          title: 'Karşılaştırma',
          body: 'Teklifleri ve trendleri karşılaştırın; ne zaman alacağınıza karar verin.',
        },
        {
          title: 'Dashboard',
          body: 'Takip edilen ürünler, uyarı kuralları ve crawl durumu için odaklı bir panel.',
        },
      ],
    },
    why: {
      title: 'Neden açık kaynak',
      subtitle: 'Okunabilir, çalıştırılabilir ve fork edilebilir bir portföy projesi.',
      items: [
        {
          title: 'Şeffaf yığın',
          body: 'React frontend, Express API, PostgreSQL, Redis ve BullMQ — üretim benzeri parçalar.',
        },
        {
          title: 'Okuyarak öğren',
          body: 'Crawler, kuyruk ve uyarı kurallarının tek monorepoda nasıl birleştiğini görün.',
        },
        {
          title: 'MIT lisanslı',
          body: 'Kullanın, fork edin veya desenleri kendi denemelerinize uyarlayın.',
        },
      ],
    },
    stack: {
      title: 'Teknoloji yığını',
      subtitle: 'Uygulama monoreposu bu yığınla geliyor.',
    },
    faq: {
      title: 'SSS',
      items: [
        {
          q: 'Bu sitenin kendisi uygulama mı?',
          a: 'Hayır. Bu site pazarlama / portföy landing’i. SaaS paneli GitHub’daki ayrı monorepoda.',
        },
        {
          q: 'Kaynak kod nerede?',
          a: 'GitHub’da: Regncreative/fiyat-avcisi — React frontend ile Express / PostgreSQL / Redis / BullMQ backend.',
        },
        {
          q: 'Yerelde çalıştırabilir miyim?',
          a: 'Evet. Monorepoyu klonlayın, env dosyalarını ayarlayın, migration çalıştırın; Node.js 20+, PostgreSQL ve Redis ile backend + frontend’i başlatın.',
        },
        {
          q: 'Herkese açık login var mı?',
          a: 'Bu landing login panelini gömmez. Denemek için monorepoyu (veya ileride demo URL’ini) kullanın.',
        },
        {
          q: 'Lisans nedir?',
          a: 'MIT.',
        },
      ],
    },
    footer: {
      tagline: 'E-ticaret fiyat takibi — açık kaynak.',
      github: 'GitHub',
      license: 'MIT Lisansı',
      rights: 'Fiyat Avcısı',
    },
  },
} as const

export type Translation = (typeof translations)[Locale]
