export const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Futmind AI Technologies",
    alternateName: "FutmindAI",
    url: "https://futmind.ai",
    logo: "https://futmind.ai/logo.png",
    description:
        "Türkiye merkezli yapay zeka ve özel yazılım şirketi. Kurumsal AI danışmanlığı, LLM entegrasyonu, özel yazılım geliştirme ve dijital dönüşüm çözümleri sunuyoruz.",
    foundingDate: "2021",
    numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 5,
        maxValue: 20,
    },
    areaServed: {
        "@type": "Country",
        name: "Turkey",
    },
    knowsAbout: [
        "Yapay Zeka",
        "Makine Öğrenimi",
        "Büyük Dil Modelleri (LLM)",
        "Özel Yazılım Geliştirme",
        "Dijital Dönüşüm",
        "Otomasyon",
        "SaaS Geliştirme",
        "ChatGPT Entegrasyonu",
        "RAG Sistemleri",
    ],
    contactPoint: {
        "@type": "ContactPoint",
        email: "hello@futmind.ai",
        contactType: "sales",
        availableLanguage: ["Turkish", "English"],
    },
    sameAs: [],
};

export const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Futmind AI",
    url: "https://futmind.ai",
    description:
        "Yapay zeka danışmanlığı ve özel yazılım çözümleri sunan Türkiye merkezli teknoloji şirketi.",
    publisher: {
        "@type": "Organization",
        name: "Futmind AI Technologies",
    },
    inLanguage: "tr",
};

export const professionalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Futmind AI Technologies",
    url: "https://futmind.ai",
    description:
        "Kurumsal AI danışmanlığı, özel yazılım geliştirme, LLM entegrasyonu ve dijital dönüşüm hizmetleri sunan yazılım şirketi.",
    priceRange: "$$",
    areaServed: {
        "@type": "Country",
        name: "Turkey",
    },
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Yazılım & AI Hizmetleri",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "AI Danışmanlığı",
                    description:
                        "Yapay zeka stratejileri ve özelleştirilmiş LLM entegrasyonları. GPT-4, Claude entegrasyonu, RAG sistemleri ve AI chatbot geliştirme.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Özel Yazılım Geliştirme",
                    description:
                        "Modern teknolojilerle ölçeklenebilir web ve mobil uygulamalar. SaaS platform geliştirme, API tasarımı ve cloud mimarisi.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Otomasyon Çözümleri",
                    description:
                        "İş süreçlerini akıllı sistemlerle otomatize etme. Workflow otomasyonu, veri pipeline, sistem entegrasyonu ve RPA çözümleri.",
                },
            },
        ],
    },
};

export const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Futmind AI proje süreci nasıl işliyor?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "İlk görüşmede ihtiyaçlarınızı analiz ediyoruz, ardından detaylı bir proje planı sunuyoruz. Agile metodoloji ile haftalık sprintler halinde ilerliyoruz. Her sprint sonunda demo yapılır ve geri bildirimlerinize göre yön belirlenir.",
            },
        },
        {
            "@type": "Question",
            name: "Futmind AI hangi teknolojileri kullanıyor?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Next.js, React, Python, FastAPI, OpenAI, LangChain, PostgreSQL ve AWS gibi modern ve kanıtlanmış teknolojilerle çalışıyoruz. Projenizin ihtiyacına göre en uygun teknoloji yığınını seçiyoruz.",
            },
        },
        {
            "@type": "Question",
            name: "Yazılım projesi fiyatlandırması nasıl yapılıyor?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Her proje benzersiz olduğu için, ihtiyaçlarınıza göre özelleştirilmiş fiyat teklifi sunuyoruz. İlk 15 dakikalık danışmanlık görüşmemiz ücretsizdir ve bu görüşmede kapsam, bütçe ve zaman çizelgesi belirlenebilir.",
            },
        },
        {
            "@type": "Question",
            name: "Proje sonrası destek ve bakım sağlıyor musunuz?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Evet, tüm projelerimizde 3 ay ücretsiz destek ve bakım hizmeti sunuyoruz. Ayrıca uzun vadeli destek paketlerimiz ile projenizin sorunsuz çalışmasını garanti altına alıyoruz.",
            },
        },
        {
            "@type": "Question",
            name: "Yapay zeka entegrasyonu mevcut sistemlerimize nasıl uygulanır?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Mevcut altyapınızı analiz ederek, iş süreçlerinize en uygun AI modellerini entegre ediyoruz. API tabanlı entegrasyonlar sayesinde mevcut sistemlerinizi bozmadan yapay zeka yeteneklerini ekliyoruz.",
            },
        },
        {
            "@type": "Question",
            name: "Hangi sektörlere hizmet veriyorsunuz?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "E-ticaret, fintech, sağlık teknolojisi, eğitim, lojistik ve daha pek çok sektörde faaliyet gösteren startup'lardan enterprise şirketlere kadar geniş bir yelpazede hizmet veriyoruz.",
            },
        },
    ],
};

export default function JsonLd() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationJsonLd),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteJsonLd),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(professionalServiceJsonLd),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqJsonLd),
                }}
            />
        </>
    );
}
