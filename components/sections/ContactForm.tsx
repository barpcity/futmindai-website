"use client";

import { motion } from "framer-motion";
import { Send, Calendar, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";

export const ContactForm = () => {
    const t = useTranslations("Contact");
    const [activeTab, setActiveTab] = useState<"form" | "calendly">("form");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        budget: "$5,000 - $10,000 (MVP)",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || t("errMsg"));
            }

            setStatus("success");
            setFormData({ name: "", company: "", email: "", budget: "$5,000 - $10,000 (MVP)", message: "" });
        } catch (error: any) {
            console.error(error);
            setStatus("error");
            setErrorMessage(error.message || t("errMsg"));
        }
    };

    return (
        <section id="iletisim-form" className="py-24 px-6 relative" aria-label="İletişim ve Randevu">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-20">

                    {/* Left Text */}
                    <div className="flex-1 md:py-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black mb-6 tracking-tight line-clamp-3 leading-tight"
                        >
                            {t("titlePrefix")} <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">{t("titleHighlight")}</span> {t("titleSuffix")}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-400 leading-relaxed max-w-md mb-8"
                        >
                            {t("description")}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex gap-4 mb-8"
                        >
                            <button
                                onClick={() => setActiveTab("form")}
                                className={`flex-1 py-3 px-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${activeTab === "form"
                                    ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                <Send className="w-4 h-4" />
                                {t("tabForm")}
                            </button>
                            <button
                                onClick={() => setActiveTab("calendly")}
                                className={`flex-1 py-3 px-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${activeTab === "calendly"
                                    ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                <Calendar className="w-4 h-4" />
                                {t("tabCalendly")}
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Form Area */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md relative overflow-hidden">
                            {/* Glow effect */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />

                            {activeTab === "form" ? (
                                <form className="relative z-10 space-y-5" onSubmit={handleSubmit}>
                                    {status === "success" && (
                                        <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-4 rounded-xl flex items-center gap-3">
                                            <CheckCircle2 className="w-6 h-6 shrink-0" />
                                            <p className="font-medium text-sm">{t("successMsg")}</p>
                                        </div>
                                    )}
                                    {status === "error" && (
                                        <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-xl text-sm font-medium pr-2">
                                            {errorMessage}
                                        </div>
                                    )}

                                    <div className="grid grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">{t("formName")}</label>
                                            <input required type="text" name="name" value={formData.name} onChange={handleChange} disabled={status === "loading"} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600 disabled:opacity-50" placeholder={t("formNameHolder")} />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">{t("formCompany")}</label>
                                            <input type="text" name="company" value={formData.company} onChange={handleChange} disabled={status === "loading"} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600 disabled:opacity-50" placeholder={t("formCompanyHolder")} />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">{t("formEmail")}</label>
                                        <input required type="email" name="email" value={formData.email} onChange={handleChange} disabled={status === "loading"} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600 disabled:opacity-50" placeholder={t("formEmailHolder")} />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">{t("formBudget")}</label>
                                        <select name="budget" value={formData.budget} onChange={handleChange} disabled={status === "loading"} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none disabled:opacity-50">
                                            <option className="bg-gray-900">$5,000 - $10,000 (MVP)</option>
                                            <option className="bg-gray-900">$10,000 - $25,000</option>
                                            <option className="bg-gray-900">$25,000 - $50,000 (Enterprise)</option>
                                            <option className="bg-gray-900">$50,000+</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">{t("formMessage")}</label>
                                        <textarea
                                            required
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            disabled={status === "loading"}
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600 resize-none h-32 disabled:opacity-50"
                                            placeholder={t("formMessageHolder")}
                                        />
                                    </div>

                                    <button
                                        disabled={status === "loading"}
                                        className="w-full group relative px-8 py-4 rounded-xl bg-primary text-black font-black text-lg flex items-center justify-center gap-2 overflow-hidden hover:scale-[1.02] transition-transform disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
                                    >
                                        <span className="relative z-10 hover:text-white transition-colors">
                                            {status === "loading" ? t("btnSubmitting") : t("btnSubmit")}
                                        </span>
                                        {status === "loading" ? (
                                            <Loader2 className="w-5 h-5 relative z-10 animate-spin transition-all" />
                                        ) : (
                                            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:text-white transition-all" />
                                        )}
                                        <div className="absolute inset-0 bg-linear-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </button>
                                </form>
                            ) : (
                                <div className="relative z-10 h-[450px] flex flex-col items-center justify-center text-center">
                                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                        <Calendar className="w-10 h-10 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{t("meetTitle")}</h3>
                                    <p className="text-gray-400 mb-8 max-w-xs">{t("meetDesc")}</p>

                                    <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-white text-black font-bold flex items-center gap-2 hover:bg-gray-200 transition-colors">
                                        {t("meetBtn")} <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            )}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
