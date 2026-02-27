"use client";

import { motion, useInView } from "framer-motion";
import { Target, Shield, Lightbulb, Users, Award, TrendingUp, Globe } from "lucide-react";
import { useRef } from "react";
import { useTranslations } from "next-intl";

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

export const AboutSection = () => {
    const t = useTranslations("About");

    return (
        <section id="hakkimizda" className="py-32 px-6 relative overflow-hidden" aria-label="Hakkımızda">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/3 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.header
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-primary font-mono text-sm font-bold tracking-[0.2em] uppercase mb-4 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 shadow-lg shadow-primary/5">
                        {t("badge")}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                        {t("titlePrefix")}
                        <span className="text-primary"> {t("titleHighlight")}</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed font-medium">
                        {t("description")}
                    </p>
                </motion.header>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {[
                        {
                            icon: Target,
                            title: t("card1Title"),
                            description: t("card1Desc"),
                        },
                        {
                            icon: Shield,
                            title: t("card2Title"),
                            description: t("card2Desc"),
                        },
                        {
                            icon: Lightbulb,
                            title: t("card3Title"),
                            description: t("card3Desc"),
                        },
                        {
                            icon: Users,
                            title: t("card4Title"),
                            description: t("card4Desc"),
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-3xl bg-white/5 border border-white/10 group hover:border-primary/40 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors shadow-lg shadow-primary/5">
                                <item.icon className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed font-medium">{item.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-3xl bg-linear-to-r from-primary/10 via-purple-500/10 to-secondary/10 border border-white/10 p-10 md:p-14 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-noise opacity-20" />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center relative z-10">
                        {[
                            { icon: Award, value: parseInt(t("stat1Value")), suffix: t("stat1Suffix"), label: t("stat1Label") },
                            { icon: Users, value: parseInt(t("stat2Value")), suffix: t("stat2Suffix"), label: t("stat2Label") },
                            { icon: TrendingUp, value: parseInt(t("stat3Value")), suffix: t("stat3Suffix"), label: t("stat3Label") },
                            { icon: Globe, value: parseInt(t("stat4Value")), suffix: t("stat4Suffix"), label: t("stat4Label") },
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <stat.icon className="w-8 h-8 text-primary mb-4 filter drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
                                <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
                                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-sm font-bold text-gray-300 uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
