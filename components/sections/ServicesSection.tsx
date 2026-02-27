"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BrainCircuit, Code2, Zap, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

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
        <motion.article
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay }}
            className="group relative"
        >
            <div className="relative p-8 rounded-3xl bg-linear-to-b from-white/5 to-transparent border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden h-full">
                <div className={`absolute -inset-px rounded-3xl bg-linear-to-b ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />

                <div className={`relative w-14 h-14 rounded-2xl bg-linear-to-br ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl`}>
                    <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{description}</p>

                <ul className="space-y-2 mt-auto">
                    {features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                            <CheckCircle2 className="w-4 h-4 text-primary/70 shrink-0" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.article>
    );
};

export const ServicesSection = () => {
    const t = useTranslations("Services");

    return (
        <section id="hizmetler" className="py-32 px-6 relative" aria-label="Hizmetlerimiz">
            <div className="max-w-7xl mx-auto">
                <motion.header
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-block text-primary font-mono text-sm font-bold tracking-[0.2em] uppercase mb-4 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 shadow-lg shadow-primary/5">
                        {t("badge")}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                        {t("titlePrefix")}
                        <span className="block mt-2 bg-clip-text text-transparent bg-linear-to-r from-primary via-purple-400 to-secondary">
                            {t("titleHighlight")}
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
                        {t("description")}
                    </p>
                </motion.header>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ServiceCard
                        icon={BrainCircuit}
                        title={t("list.0.title")}
                        description={t("list.0.description")}
                        features={t.raw("list.0.features") as string[]}
                        gradient="from-cyan-500 to-blue-600"
                        delay={0}
                    />
                    <ServiceCard
                        icon={Code2}
                        title={t("list.1.title")}
                        description={t("list.1.description")}
                        features={t.raw("list.1.features") as string[]}
                        gradient="from-purple-500 to-pink-600"
                        delay={0.1}
                    />
                    <ServiceCard
                        icon={Zap}
                        title={t("list.2.title")}
                        description={t("list.2.description")}
                        features={t.raw("list.2.features") as string[]}
                        gradient="from-amber-500 to-orange-600"
                        delay={0.2}
                    />
                </div>
            </div>
        </section>
    );
};
