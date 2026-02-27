"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

export const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const t = useTranslations("FAQ");

    // Creating array of indices based on the number of items in list
    const faqs = [0, 1, 2, 3, 4, 5].map((i) => ({
        q: t(`list.${i}.q`),
        a: t(`list.${i}.a`)
    }));

    return (
        <section id="sss" className="py-32 px-6" aria-label="Sıkça Sorulan Sorular">
            <div className="max-w-4xl mx-auto">
                <motion.header
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">{t("title")}</h2>
                    <p className="text-gray-400 font-medium">{t("description")}</p>
                </motion.header>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden"
                        >
                            <button
                                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                aria-expanded={openIndex === i}
                            >
                                <span className="font-bold text-lg text-white pr-8">{faq.q}</span>
                                <ChevronDown
                                    className={`w-6 h-6 text-primary shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-8 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
