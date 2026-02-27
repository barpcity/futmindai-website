"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

export const Navbar = () => {
    const { scrollY } = useScroll();
    const backgroundColor = useTransform(
        scrollY,
        [0, 100],
        ["rgba(3, 3, 3, 0)", "rgba(3, 3, 3, 0.8)"]
    );
    const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"]);

    const t = useTranslations("Navigation");

    return (
        <motion.nav
            style={{ backgroundColor, backdropFilter: backdropBlur }}
            className="fixed top-0 left-0 right-0 z-50 border-b border-white/0 transition-colors"
            role="navigation"
            aria-label="Ana menü"
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <motion.a
                    href="/"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3 group"
                >
                    <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-primary/20 transition-all group-hover:scale-105 group-hover:shadow-primary/40">
                        <div className="absolute inset-0 bg-linear-to-br from-primary via-accent to-secondary" />
                        <div className="absolute inset-[2px] rounded-[10px] bg-background flex items-center justify-center">
                            <Sparkles className="w-5 h-5 text-primary" />
                        </div>
                    </div>
                    <span className="font-bold text-xl tracking-tight text-white group-hover:text-primary transition-colors">
                        Fut<span className="text-primary group-hover:text-white transition-colors">mind</span>
                    </span>
                </motion.a>

                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-2 rounded-full border border-white/10 backdrop-blur-md"
                >
                    {[
                        { label: t("services"), href: "#hizmetler" },
                        { label: t("howItWorks"), href: "#otomasyon-showcase" },
                        { label: t("caseStudies"), href: "#case-studies" },
                        { label: t("faq"), href: "#sss" },
                    ].map((item, i) => (
                        <a
                            key={i}
                            href={item.href}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                        >
                            {item.label}
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full bg-primary group-hover:w-full transition-all duration-300 ease-out" />
                        </a>
                    ))}
                </motion.div>

                <div className="flex items-center gap-4">
                    <LanguageSwitcher />
                    <motion.a
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        href="#iletisim"
                        whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(0,212,255,0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        className="relative px-6 py-2.5 rounded-full overflow-hidden group bg-white"
                    >
                        <div className="absolute inset-0 bg-linear-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative text-black text-sm font-bold group-hover:text-white transition-colors z-10 flex items-center gap-2">
                            {t("bookMeeting")}
                        </span>
                    </motion.a>
                </div>
            </div>
        </motion.nav>
    );
};
