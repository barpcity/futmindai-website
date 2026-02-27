"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useTranslations } from "next-intl";

export const TestimonialsSection = () => {
    const t = useTranslations("Testimonials");

    const testimonials = [
        {
            name: t("list.0.name"),
            role: t("list.0.role"),
            text: t("list.0.text"),
            rating: 5,
        },
        {
            name: t("list.1.name"),
            role: t("list.1.role"),
            text: t("list.1.text"),
            rating: 5,
        },
        {
            name: t("list.2.name"),
            role: t("list.2.role"),
            text: t("list.2.text"),
            rating: 5,
        }
    ];

    return (
        <section id="referanslar" className="py-32 px-6 bg-black/50" aria-label="Referanslar ve Yorumlar">
            <div className="max-w-7xl mx-auto">
                <motion.header
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-block text-secondary font-mono text-sm tracking-widest uppercase mb-4 font-bold">
                        {t("badge")}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">{t("titlePrefix")} <br className="hidden md:block" /> {t("titleSuffix")}</h2>
                </motion.header>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.article
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 rounded-3xl bg-white/5 border border-white/10 relative group hover:border-white/20 transition-colors"
                        >
                            <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-primary/10 transition-colors" />
                            <div className="flex gap-1 mb-6">
                                {[...Array(t.rating)].map((_, j) => (
                                    <Star key={j} className="w-5 h-5 fill-primary text-primary drop-shadow-[0_0_8px_rgba(0,212,255,0.6)]" />
                                ))}
                            </div>
                            <p className="text-gray-300 mb-8 relative z-10 font-medium leading-relaxed italic">"{t.text}"</p>
                            <div>
                                <strong className="block text-white font-bold text-lg">{t.name}</strong>
                                <span className="text-primary text-sm font-semibold">{t.role}</span>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};
