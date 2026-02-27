"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Mail, Brain, Database, Send, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export const AutomationShowcase = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const pathLength1 = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
    const pathLength2 = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
    const pathLength3 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

    const opacity1 = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
    const opacity2 = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
    const opacity3 = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
    const opacity4 = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);

    const t = useTranslations("Automation");

    return (
        <section
            id="otomasyon-showcase"
            ref={containerRef}
            className="py-32 px-6 relative bg-black/40 overflow-hidden"
            aria-label="Otomasyon Showcase"
        >
            <div className="max-w-5xl mx-auto">
                <motion.header
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="inline-block text-primary font-mono text-sm font-bold tracking-[0.2em] uppercase mb-4 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 shadow-lg shadow-primary/5">
                        {t("badge")}
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
                        {t("titlePrefix")} <span className="text-secondary line-through opacity-50">{t("titleStrike")}</span>
                        <br /> <span className="text-primary italic">{t("titleHighlight")}</span>{t("titleSuffix")}
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
                        {t("description")}
                    </p>
                </motion.header>

                <div className="relative h-[600px] md:h-[300px] max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">

                    <motion.div
                        style={{ opacity: opacity1 }}
                        className="flex flex-col items-center relative z-10 w-full md:w-auto"
                    >
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                            <Mail className="w-8 h-8 text-gray-300" />
                        </div>
                        <div className="mt-4 text-center">
                            <h4 className="font-bold text-white mb-1">{t("node1Title")}</h4>
                            <p className="text-xs text-gray-500 font-medium bg-white/5 px-3 py-1 rounded-full border border-white/5">
                                {t("node1Desc")}
                            </p>
                        </div>
                    </motion.div>

                    <div className="hidden md:block absolute top-[40px] left-[80px] w-[20%] h-[2px]">
                        <svg className="w-full h-full" preserveAspectRatio="none">
                            <line x1="0" y1="0" x2="100%" y2="0" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" />
                            <motion.line
                                x1="0" y1="0" x2="100%" y2="0" stroke="#00d4ff" strokeWidth="2"
                                style={{ pathLength: pathLength1 }}
                                className="drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]"
                            />
                        </svg>
                    </div>
                    <ArrowRight className="md:hidden w-6 h-6 text-primary my-4 opacity-50" />

                    <motion.div
                        style={{ opacity: opacity2 }}
                        className="flex flex-col items-center relative z-10 w-full md:w-auto"
                    >
                        <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-linear-to-br from-primary/20 to-accent/20 border border-primary/50 flex items-center justify-center backdrop-blur-md shadow-[0_0_40px_rgba(0,212,255,0.2)] animate-pulse">
                            <Brain className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                        </div>
                        <div className="mt-4 text-center">
                            <h4 className="font-bold text-primary mb-1 text-lg">{t("node2Title")}</h4>
                            <p className="text-xs text-primary/70 font-medium bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                                {t("node2Desc")}
                            </p>
                        </div>
                    </motion.div>

                    <div className="hidden md:block absolute top-[40px] left-[calc(50%+48px)] w-[20%] h-[2px]">
                        <svg className="w-full h-full" preserveAspectRatio="none">
                            <line x1="0" y1="0" x2="100%" y2="0" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" />
                            <motion.line
                                x1="0" y1="0" x2="100%" y2="0" stroke="#a855f7" strokeWidth="2"
                                style={{ pathLength: pathLength2 }}
                                className="drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
                            />
                        </svg>
                    </div>
                    <ArrowRight className="md:hidden w-6 h-6 text-accent my-4 opacity-50" />

                    <motion.div
                        style={{ opacity: opacity3 }}
                        className="flex flex-col items-center relative z-10 w-full md:w-auto"
                    >
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/5 border border-white/20 flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.05)] relative">
                            <div className="absolute inset-0 rounded-full border-t-2 border-accent animate-spin" style={{ animationDuration: '3s' }} />
                            <Database className="w-8 h-8 text-accent" />
                        </div>
                        <div className="mt-4 text-center">
                            <h4 className="font-bold text-white mb-1">{t("node3Title")}</h4>
                            <p className="text-xs text-accent/70 font-medium bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                                {t("node3Desc")}
                            </p>
                        </div>
                    </motion.div>

                    <div className="hidden md:block absolute top-[40px] right-[80px] w-[15%] h-[2px]">
                        <svg className="w-full h-full" preserveAspectRatio="none">
                            <line x1="0" y1="0" x2="100%" y2="0" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" />
                            <motion.line
                                x1="0" y1="0" x2="100%" y2="0" stroke="#10b981" strokeWidth="2"
                                style={{ pathLength: pathLength3 }}
                                className="drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                            />
                        </svg>
                    </div>
                    <ArrowRight className="md:hidden w-6 h-6 text-emerald-400 my-4 opacity-50" />

                    <motion.div
                        style={{ opacity: opacity4 }}
                        className="flex flex-col items-center relative z-10 w-full md:w-auto"
                    >
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                            <Send className="w-8 h-8 text-emerald-400" />
                        </div>
                        <div className="mt-4 text-center">
                            <h4 className="font-bold text-emerald-400 mb-1">{t("node4Title")}</h4>
                            <p className="text-xs text-emerald-400/70 font-medium bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                                {t("node4Desc")}
                            </p>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};
