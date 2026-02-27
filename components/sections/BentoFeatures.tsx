"use client";

import { motion } from "framer-motion";
import { Server, Lock, Cpu, Globe2, Building2 } from "lucide-react";
import { useTranslations } from "next-intl";

export const BentoFeatures = () => {
    const t = useTranslations("Bento");

    return (
        <section className="py-24 px-6 relative" aria-label="Premium Özellikler">
            <div className="max-w-7xl mx-auto">
                <motion.header
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-accent font-mono text-sm font-bold tracking-[0.2em] uppercase mb-4 px-5 py-2 rounded-full bg-accent/10 border border-accent/20">
                        {t("badge")}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                        {t("title")}
                    </h2>
                </motion.header>

                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 auto-rows-[250px] gap-4">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 md:row-span-1 rounded-3xl bg-linear-to-br from-white/10 to-transparent border border-white/10 p-8 relative overflow-hidden group hover:border-white/30 transition-colors"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/40 transition-colors" />
                        <Server className="w-10 h-10 text-primary mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-2">{t("item1Title")}</h3>
                        <p className="text-gray-400 max-w-md">
                            {t("item1Desc")}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-1 md:row-span-1 rounded-3xl bg-linear-to-br from-emerald-500/10 to-transparent border border-white/10 p-8 relative overflow-hidden group hover:border-emerald-500/30 transition-colors"
                    >
                        <Lock className="w-10 h-10 text-emerald-400 mb-6" />
                        <h3 className="text-xl font-bold text-white mb-2">{t("item2Title")}</h3>
                        <p className="text-sm text-gray-400">{t("item2Desc")}</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-1 md:row-span-1 rounded-3xl bg-linear-to-br from-blue-500/10 to-transparent border border-white/10 p-8 relative overflow-hidden group hover:border-blue-500/30 transition-colors"
                    >
                        <Globe2 className="w-10 h-10 text-blue-400 mb-6 group-hover:rotate-12 transition-transform" />
                        <h3 className="text-xl font-bold text-white mb-2">{t("item3Title")}</h3>
                        <p className="text-sm text-gray-400">{t("item3Desc")}</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-2 md:row-span-1 rounded-3xl bg-linear-to-bl from-accent/20 to-transparent border border-white/10 p-8 relative overflow-hidden group hover:border-accent/40 transition-colors"
                    >
                        <div className="absolute bottom-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                            <Cpu className="w-40 h-40 text-accent mix-blend-overlay" />
                        </div>
                        <div className="relative z-10 w-full md:w-2/3">
                            <div className="flex gap-3 mb-6">
                                <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-white backdrop-blur-md">GPT-4o</span>
                                <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-white backdrop-blur-md">Claude 3.5</span>
                                <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-white backdrop-blur-md">Llama 3</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{t("item4Title")}</h3>
                            <p className="text-gray-400">
                                {t("item4Desc")}
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
