"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export const LanguageSwitcher = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages = [
        { code: "tr", label: "TR" },
        { code: "en", label: "EN" }
    ];

    const currentLanguage = languages.find(l => l.code === locale) || languages[0];

    const handleLocaleChange = (newLocale: string) => {
        setIsOpen(false);
        if (newLocale === locale) return;

        // Pathname usually starts with /tr or /en
        // E.g. /tr/hizmetler -> /en/hizmetler
        // E.g. /tr -> /en
        let newPath = pathname;
        if (pathname.startsWith(`/${locale}/`)) {
            newPath = pathname.replace(`/${locale}/`, `/${newLocale}/`);
        } else if (pathname === `/${locale}`) {
            newPath = `/${newLocale}`;
        } else if (pathname === "/") {
            newPath = `/${newLocale}`;
        }

        router.push(newPath);
    };

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-bold text-gray-300 hover:text-white"
                aria-label="Dil Değiştir"
            >
                <Globe className="w-4 h-4 text-primary" />
                <span>{currentLanguage.label}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 top-full mt-2 w-24 bg-black/90 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50 py-1"
                    >
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleLocaleChange(lang.code)}
                                className={`w-full text-left px-4 py-2 text-sm font-bold transition-colors flex items-center justify-between ${locale === lang.code ? "bg-primary/20 text-primary" : "text-gray-400 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                {lang.label}
                                {locale === lang.code && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
