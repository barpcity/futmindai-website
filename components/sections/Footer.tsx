"use client";

import { Sparkles, Linkedin, Twitter, Github } from "lucide-react";
import { useTranslations } from "next-intl";

export const Footer = () => {
    const t = useTranslations("Footer");

    return (
        <footer className="border-t border-white/10 bg-black/50 py-16 px-6" aria-label="Site altbilgisi">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-linear-to-br from-primary to-accent p-[1px]">
                        <div className="w-full h-full rounded-md bg-background flex items-center justify-center">
                            <Sparkles className="w-4 h-4 text-primary" />
                        </div>
                    </div>
                    <span className="font-bold text-lg tracking-tight">
                        Future<span className="text-primary">Mind</span> AI
                    </span>
                </div>

                <nav className="flex gap-8" aria-label="Altbilgi menüsü">
                    <a href="#hizmetler" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">{t("links.services")}</a>
                    <a href="#hakkimizda" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">{t("links.about")}</a>
                    <a href="/privacy" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">{t("links.privacy")}</a>
                    <a href="/tos" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">{t("links.terms")}</a>
                </nav>

                <div className="flex gap-4">
                    {[Linkedin, Twitter, Github].map((Icon, i) => (
                        <a
                            key={i}
                            href="#"
                            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110"
                            aria-label={`Sosyal medya linki ${i + 1}`}
                        >
                            <Icon className="w-4 h-4" />
                        </a>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-sm font-medium text-gray-600">
                &copy; {new Date().getFullYear()} {t("copyright")}
            </div>
        </footer>
    );
};
