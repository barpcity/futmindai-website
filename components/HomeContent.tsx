"use client";

import { Navbar } from "./sections/Navbar";
import { HeroSection } from "./sections/HeroSection";
import { TechMarquee, ClientLogos } from "./sections/MarqueeSections";
import { BentoFeatures } from "./sections/BentoFeatures";
import { AutomationShowcase } from "./sections/AutomationShowcase";
import { CaseStudiesSection } from "./sections/CaseStudies";
import { ServicesSection } from "./sections/ServicesSection";
import { AboutSection } from "./sections/AboutSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { FAQSection } from "./sections/FAQSection";
import { ContactForm } from "./sections/ContactForm";
import { CTASection } from "./sections/CTASection";
import { Footer } from "./sections/Footer";

// ============================================
// MAIN EXPORT
// ============================================

export default function HomeContent() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <TechMarquee />
            <ClientLogos />

            {/* Premium Overhaul Sections */}
            <BentoFeatures />
            <AutomationShowcase />
            <CaseStudiesSection />

            <ServicesSection />
            <AboutSection />
            <TestimonialsSection />
            <FAQSection />

            {/* Lead Generation & CTA */}
            <ContactForm />
            <CTASection />

            <Footer />
        </>
    );
}
