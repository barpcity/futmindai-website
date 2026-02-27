"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Clock, DollarSign } from "lucide-react";
import { useTranslations } from "next-intl";

export const CaseStudiesSection = () => {
    const t = useTranslations("CaseStudies");

    const cases = [
        {
            title: t("list.0.title"),
            client: t("list.0.client"),
            description: t("list.0.description"),
            metrics: [
                { icon: Clock, label: t("list.0.metrics.0.label"), value: t("list.0.metrics.0.value"), color: "text-green-400" },
                { icon: DollarSign, label: t("list.0.metrics.1.label"), value: t("list.0.metrics.1.value"), color: "text-emerald-400" },
            ],
            tags: ["RAG", "Python", "Vector DB", "Next.js"],
            gradient: "from-emerald-500/20 to-teal-900/40",
            border: "border-emerald-500/30",
        },
        {
            title: t("list.1.title"),
            client: t("list.1.client"),
            description: t("list.1.description"),
            metrics: [
                { icon: BarChart3, label: t("list.1.metrics.0.label"), value: t("list.1.metrics.0.value"), color: "text-blue-400" },
                { icon: Clock, label: t("list.1.metrics.1.label"), value: t("list.1.metrics.1.value"), color: "text-cyan-400" },
            ],
            tags: ["AWS Lambda", "Node.js", "RPA", "PostgreSQL"],
            gradient: "from-blue-500/20 to-indigo-900/40",
            border: "border-blue-500/30",
        },
        {
            title: t("list.2.title"),
            client: t("list.2.client"),
            description: t("list.2.description"),
            metrics: [
                { icon: Clock, label: t("list.2.metrics.0.label"), value: t("list.2.metrics.0.value"), color: "text-purple-400" },
                { icon: BarChart3, label: t("list.2.metrics.1.label"), value: t("list.2.metrics.1.value"), color: "text-fuchsia-400" },
            ],
            tags: ["OpenAI Whisper", "WebSockets", "React", "FastAPI"],
            gradient: "from-purple-500/20 to-fuchsia-900/40",
            border: "border-purple-500/30",
        }
    ];

    return (
        <section id="case-studies" className="py-32 px-6 relative overflow-hidden" aria-label="Başarı Hikayeleri">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.header
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-block text-primary font-mono text-sm font-bold tracking-[0.2em] uppercase mb-4 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 shadow-lg shadow-primary/5">
                        {t("badge")}
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
                        {t("titlePrefix")}
                        <span className="block text-primary mt-2">{t("titleHighlight")}</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
                        {t("description")}
                    </p>
                </motion.header>

                <div className="grid lg:grid-cols-3 gap-8">
                    {cases.map((project, i) => (
                        <motion.article
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            className={`group relative p-8 rounded-3xl bg-linear-to-br ${project.gradient} border ${project.border} backdrop-blur-md overflow-hidden flex flex-col h-full`}
                        >
                            <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

                            <div className="relative z-10 flex-1 flex flex-col">
                                <div className="mb-6 flex justify-between items-start">
                                    <span className="text-xs font-bold text-gray-300 uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full border border-white/5">
                                        {project.client}
                                    </span>
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 group-hover:scale-110 transition-all cursor-pointer">
                                        <ArrowUpRight className="w-5 h-5 text-white" />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                                    {project.description}
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    {project.metrics.map((metric, j) => (
                                        <div key={j} className="bg-black/30 rounded-2xl p-4 border border-white/5">
                                            <metric.icon className={`w-5 h-5 ${metric.color} mb-2`} />
                                            <div className={`text-2xl font-black ${metric.color} mb-1`}>{metric.value}</div>
                                            <div className="text-xs text-gray-400 font-semibold">{metric.label}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/10">
                                    {project.tags.map((tag, k) => (
                                        <span key={k} className="text-xs font-medium text-gray-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};
