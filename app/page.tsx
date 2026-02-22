"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { 
  ArrowRight, 
  Code2, 
  BrainCircuit, 
  Zap,
  Mail,
  Sparkles,
  CheckCircle2,
  Globe,
  Cpu,
  Database
} from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

// ============================================
// PREMIUM BACKGROUND EFFECTS
// ============================================

const AuroraBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Aurora effect */}
    <div className="absolute top-0 left-1/4 w-[800px] h-[600px] opacity-30">
      <div 
        className="absolute inset-0 blur-[120px]"
        style={{
          background: "conic-gradient(from 180deg at 50% 50%, #00d4ff 0deg, #a855f7 120deg, #22d3ee 240deg, #00d4ff 360deg)",
          animation: "aurora 15s ease-in-out infinite",
        }}
      />
    </div>
    <div className="absolute bottom-0 right-1/4 w-[600px] h-[500px] opacity-20">
      <div 
        className="absolute inset-0 blur-[100px]"
        style={{
          background: "conic-gradient(from 0deg at 50% 50%, #a855f7 0deg, #00d4ff 180deg, #a855f7 360deg)",
          animation: "aurora 20s ease-in-out infinite reverse",
        }}
      />
    </div>
    
    {/* Noise overlay */}
    <div 
      className="absolute inset-0 opacity-[0.015]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}
    />
    
    {/* Grid */}
    <div 
      className="absolute inset-0 opacity-[0.02]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    />
    
    <style jsx>{`
      @keyframes aurora {
        0%, 100% { transform: rotate(0deg) scale(1); }
        50% { transform: rotate(180deg) scale(1.1); }
      }
    `}</style>
  </div>
);

// ============================================
// ANIMATED COUNTER
// ============================================

const AnimatedNumber = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      className="tabular-nums"
    >
      {isInView && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {value}{suffix}
        </motion.span>
      )}
    </motion.span>
  );
};

// ============================================
// NAVBAR
// ============================================

const Navbar = () => {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(3, 3, 3, 0)", "rgba(3, 3, 3, 0.8)"]
  );
  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"]);

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter: backdropBlur }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/0 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="relative w-10 h-10 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-primary via-accent to-secondary" />
            <div className="absolute inset-[2px] rounded-[10px] bg-background flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
          </div>
          <span className="font-bold text-xl tracking-tight">
            Future<span className="text-primary">Mind</span>
          </span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="hidden md:flex items-center gap-8"
        >
          {["Hizmetler", "Hakkımızda", "İletişim"].map((item, i) => (
            <a 
              key={i}
              href={`#${item.toLowerCase()}`} 
              className="text-sm text-gray-400 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </motion.div>

        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative px-6 py-2.5 rounded-full overflow-hidden group"
        >
          <div className="absolute inset-0 bg-linear-to-r from-primary to-accent opacity-100 group-hover:opacity-90 transition-opacity" />
          <span className="relative text-black text-sm font-semibold">Başlayalım</span>
        </motion.a>
      </div>
    </motion.nav>
  );
};

// ============================================
// HERO SECTION
// ============================================

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <AuroraBackground />
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left Content - Text */}
          <motion.div 
            style={{ y, opacity }} 
            className="flex-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-sm text-gray-300">Yeni projeler kabul ediyoruz</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 tracking-tight"
            >
              <span className="block text-white">Yapay Zeka ile</span>
              <span className="block mt-2 bg-clip-text text-transparent bg-linear-to-r from-primary via-purple-400 to-secondary">
                Geleceği İnşa Ediyoruz
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed"
            >
              Kurumsal AI çözümleri, özel yazılım geliştirme ve dijital dönüşüm danışmanlığı 
              ile işletmenizi bir sonraki seviyeye taşıyoruz.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-12"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, boxShadow: "0 0 50px rgba(0,212,255,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 rounded-full bg-white text-black font-bold flex items-center gap-2 overflow-hidden"
              >
                <span className="relative z-10">Ücretsiz Görüşme</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-linear-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.02 }}
                className="px-8 py-4 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300 font-medium"
              >
                Hizmetleri İncele
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
            >
              {[
                { value: 50, suffix: "+", label: "Proje" },
                { value: 98, suffix: "%", label: "Memnuniyet" },
                { value: 5, suffix: "+", label: "Yıl Deneyim" },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Robot */}
          <div className="flex-1 relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] w-full lg:absolute lg:-right-20 lg:top-0 lg:w-[55%] lg:h-full">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

// ============================================
// TECH MARQUEE
// ============================================

const TechMarquee = () => {
  const techs = [
    { name: "Python", icon: Code2 },
    { name: "Next.js", icon: Globe },
    { name: "OpenAI", icon: BrainCircuit },
    { name: "TensorFlow", icon: Cpu },
    { name: "React", icon: Code2 },
    { name: "PostgreSQL", icon: Database },
    { name: "Docker", icon: Cpu },
    { name: "AWS", icon: Globe },
  ];

  return (
    <div className="relative py-8 border-y border-white/5 bg-black/50 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-40 bg-linear-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-40 bg-linear-to-l from-background to-transparent z-10" />
      
      <div 
        className="flex gap-12"
        style={{ animation: "scroll 40s linear infinite" }}
      >
        {[...techs, ...techs, ...techs, ...techs].map((tech, i) => (
          <div key={i} className="flex items-center gap-3 shrink-0 group cursor-default">
            <tech.icon className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors" />
            <span className="text-gray-500 font-medium text-sm uppercase tracking-wider group-hover:text-white transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

// ============================================
// SERVICES SECTION
// ============================================

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features,
  gradient,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  delay: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group relative"
    >
      {/* Card */}
      <div className="relative p-8 rounded-3xl bg-linear-to-b from-white/5 to-transparent border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden h-full">
        {/* Hover glow */}
        <div className={`absolute -inset-px rounded-3xl bg-linear-to-b ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
        
        {/* Icon */}
        <div className={`relative w-14 h-14 rounded-2xl bg-linear-to-br ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        
        {/* Content */}
        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-gray-400 leading-relaxed mb-6">{description}</p>
        
        {/* Features */}
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
              <CheckCircle2 className="w-4 h-4 text-primary/70" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => (
  <section id="hizmetler" className="py-32 px-6 relative">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="inline-block text-primary font-mono text-sm tracking-widest uppercase mb-4 px-4 py-1 rounded-full bg-primary/10 border border-primary/20">
          Hizmetlerimiz
        </span>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          İşletmenizi Güçlendiren
          <span className="block mt-2 bg-clip-text text-transparent bg-linear-to-r from-primary via-purple-400 to-secondary">
            Kapsamlı Çözümler
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Startup&apos;lardan enterprise şirketlere kadar her ölçekte işletmeye 
          özel teknoloji çözümleri sunuyoruz.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard
          icon={BrainCircuit}
          title="AI Danışmanlığı"
          description="Yapay zeka stratejileri ve özelleştirilmiş LLM entegrasyonları ile verimliliği artırın."
          features={["GPT-4 & Claude Entegrasyonu", "RAG Sistemleri", "AI Chatbot Geliştirme", "Veri Analitiği"]}
          gradient="from-cyan-500 to-blue-600"
          delay={0}
        />
        <ServiceCard
          icon={Code2}
          title="Özel Yazılım"
          description="Modern teknolojilerle ölçeklenebilir, güvenli ve performanslı uygulamalar."
          features={["Web & Mobil Uygulamalar", "SaaS Platform Geliştirme", "API Tasarımı", "Cloud Architecture"]}
          gradient="from-purple-500 to-pink-600"
          delay={0.1}
        />
        <ServiceCard
          icon={Zap}
          title="Otomasyon"
          description="İş süreçlerinizi akıllı sistemlerle otomatize ederek zamandan tasarruf edin."
          features={["Workflow Otomasyonu", "Veri Pipeline", "Sistem Entegrasyonu", "RPA Çözümleri"]}
          gradient="from-amber-500 to-orange-600"
          delay={0.2}
        />
      </div>
    </div>
  </section>
);

// ============================================
// CTA SECTION
// ============================================

const CTASection = () => (
  <section className="py-32 px-6 relative overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
    </div>
    
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto text-center relative z-10"
    >
      <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
        Projenizi Hayata
        <span className="text-primary"> Geçirelim</span>
      </h2>
      <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
        15 dakikalık ücretsiz danışmanlık görüşmesi ile projenizin ihtiyaçlarını birlikte belirleyelim.
      </p>
      
      <motion.a
        id="contact"
        href="mailto:hello@futmind.ai"
        whileHover={{ scale: 1.02, boxShadow: "0 0 60px rgba(0,212,255,0.3)" }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex items-center gap-4 px-10 py-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
      >
        <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary to-accent flex items-center justify-center">
          <Mail className="w-6 h-6 text-black" />
        </div>
        <div className="text-left">
          <span className="block text-sm text-gray-500">Bize ulaşın</span>
          <span className="text-xl font-bold group-hover:text-primary transition-colors">hello@futmind.ai</span>
        </div>
        <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-primary group-hover:translate-x-1 transition-all ml-4" />
      </motion.a>
    </motion.div>
  </section>
);

// ============================================
// TESTIMONIALS SECTION
// ============================================

const testimonials = [
  {
    name: "Mehmet Yılmaz",
    role: "CTO, TechStart",
    content: "Future Mind ekibi ile çalışmak harika bir deneyimdi. AI entegrasyonları sayesinde operasyonel maliyetlerimizi %40 azalttık.",
    avatar: "M",
  },
  {
    name: "Ayşe Kaya",
    role: "Founder, DataFlow",
    content: "Profesyonel yaklaşımları ve teknik uzmanlıkları ile projemizi tam zamanında ve beklentilerin üzerinde teslim ettiler.",
    avatar: "A",
  },
  {
    name: "Can Demir",
    role: "CEO, InnovateTR",
    content: "Özelleştirilmiş AI çözümleri ile müşteri deneyimimizi tamamen dönüştürdük. Kesinlikle tavsiye ederim.",
    avatar: "C",
  },
];

const TestimonialsSection = () => (
  <section className="py-24 px-6 relative overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block text-primary font-mono text-sm tracking-widest uppercase mb-4 px-4 py-1 rounded-full bg-primary/10 border border-primary/20">
          Referanslar
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Müşterilerimiz
          <span className="text-primary"> Ne Diyor?</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center text-black font-bold">
                {testimonial.avatar}
              </div>
              <div>
                <h4 className="font-semibold group-hover:text-primary transition-colors">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">&quot;{testimonial.content}&quot;</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ============================================
// FAQ SECTION
// ============================================

const faqs = [
  {
    question: "Proje süreci nasıl işliyor?",
    answer: "İlk görüşmede ihtiyaçlarınızı analiz ediyor, ardından detaylı bir proje planı sunuyoruz. Agile metodoloji ile haftalık sprintler halinde ilerliyoruz.",
  },
  {
    question: "Hangi teknolojileri kullanıyorsunuz?",
    answer: "Next.js, React, Python, FastAPI, OpenAI, LangChain, PostgreSQL ve AWS gibi modern teknolojilerle çalışıyoruz.",
  },
  {
    question: "Fiyatlandırma nasıl yapılıyor?",
    answer: "Her proje benzersiz olduğu için, ihtiyaçlarınıza göre özelleştirilmiş fiyat teklifi sunuyoruz. Ücretsiz danışmanlık görüşmesinde detayları konuşabiliriz.",
  },
  {
    question: "Proje sonrası destek sağlıyor musunuz?",
    answer: "Evet, tüm projelerimizde 3 ay ücretsiz destek ve bakım hizmeti sunuyoruz. Uzun vadeli destek paketlerimiz de mevcuttur.",
  },
];

const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-white/10"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium group-hover:text-primary transition-colors">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-2xl text-primary"
        >
          +
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-gray-400 leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  );
};

const FAQSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block text-primary font-mono text-sm tracking-widest uppercase mb-4 px-4 py-1 rounded-full bg-primary/10 border border-primary/20">
          SSS
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Sıkça Sorulan
          <span className="text-primary"> Sorular</span>
        </h2>
      </motion.div>

      <div className="border-t border-white/10">
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
        ))}
      </div>
    </div>
  </section>
);

// ============================================
// CLIENT LOGOS SECTION
// ============================================

const ClientLogos = () => {
  const clients = ["TechStart", "DataFlow", "InnovateTR", "CloudPeak", "AIVentures", "SmartSoft"];
  
  return (
    <section className="py-16 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-widest">Güvenilen Markalar</p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-2xl font-bold text-gray-600 hover:text-primary transition-colors cursor-default"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// FOOTER
// ============================================

const Footer = () => (
  <footer className="py-12 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-linear-to-br from-primary to-secondary flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <span className="font-bold">FutureMind</span>
      </div>
      
      <div className="flex items-center gap-8 text-sm text-gray-500">
        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-white transition-colors">Twitter</a>
        <a href="#" className="hover:text-white transition-colors">GitHub</a>
      </div>
      
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Future Mind AI Technologies
      </p>
    </div>
  </footer>
);

// ============================================
// MAIN PAGE
// ============================================

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TechMarquee />
      <ClientLogos />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}

