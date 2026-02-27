"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

export const CTASection = () => {
    const t = useTranslations("CTA");

    return (
        <section id="iletisim" className="py-32 px-6 relative overflow-hidden" aria-label="İletişim Özel Tasarım">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent" />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"
                    style={{ opacity: 0.15 }}
                />
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-12 md:p-20 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl overflow-hidden relative"
                >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer" />

                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-primary to-accent mb-8 shadow-lg shadow-primary/20">
                        <Sparkles className="w-8 h-8 text-white" />
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
                        {t("titlePrefix")} <br className="hidden md:block" />
                        <span className="text-primary">{t("titleHighlight")}</span>
                    </h2>

                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                        {t("description")}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="mailto:hello@futmind.ai"
                            className="group relative px-8 py-5 rounded-full bg-white text-black font-bold text-lg flex items-center justify-center gap-3 overflow-hidden w-full sm:w-auto hover:scale-105 transition-transform"
                        >
                            <span className="relative z-10">hello@futmind.ai</span>
                            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-linear-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity" />
                        </a>
                    </div>

                    <p className="mt-8 text-sm font-semibold text-gray-500 tracking-wider uppercase">
                        {t("footerText")}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
