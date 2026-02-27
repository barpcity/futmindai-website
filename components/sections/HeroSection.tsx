"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { useTranslations } from "next-intl";

const AuroraBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[600px] opacity-30">
            <div
                className="absolute inset-0 blur-[120px]"
                style={{
                    background: "conic-gradient(from 180deg at 50% 50%, #00d4ff 0deg, #a855f7 120deg, #22d3ee 240deg, #00d4ff 360deg)",
                    animation: "aurora 15s ease-in-out infinite",
                }}
            />
        </div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[500px] opacity-20">
            <div
                className="absolute inset-0 blur-[100px]"
                style={{
                    background: "conic-gradient(from 0deg at 50% 50%, #a855f7 0deg, #00d4ff 180deg, #a855f7 360deg)",
                    animation: "aurora 20s ease-in-out infinite reverse",
                }}
            />
        </div>

        <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
        />

        <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
                backgroundImage: `
          linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
        `,
                backgroundSize: "80px 80px",
            }}
        />

        <style jsx>{`
      @keyframes aurora {
        0%, 100% { transform: rotate(0deg) scale(1); }
        50% { transform: rotate(180deg) scale(1.1); }
      }
    `}</style>
    </div>
);

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

export const HeroSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const t = useTranslations("Hero");

    return (
        <section ref={ref} id="hero" className="relative min-h-screen flex items-center overflow-hidden" aria-label="Ana başlık">
            <div className="absolute inset-0 bg-background" />
            <AuroraBackground />
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

                    <motion.div
                        style={{ y, opacity }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm shadow-xl shadow-primary/5"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                            </span>
                            <span className="text-sm font-medium text-gray-200">{t("badgeOpen")}</span>
                            <div className="h-4 w-px bg-white/20 mx-2" />
                            <span className="text-sm text-primary font-semibold">{t("badgeQuarter")}</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 tracking-tight"
                        >
                            <span className="block text-white">{t("headlinePrefix")}</span>
                            <span className="block mt-2 bg-clip-text text-transparent bg-linear-to-r from-primary via-purple-400 to-secondary break-words">
                                {t("headlineSuffix")}
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed font-medium mx-auto lg:mx-0"
                        >
                            {t.rich('subtitle', {
                                important: (chunks) => <strong className="text-white font-semibold">{chunks}</strong>
                            })}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-12"
                        >
                            <motion.a
                                href="#iletisim"
                                whileHover={{ scale: 1.02, boxShadow: "0 0 50px rgba(0,212,255,0.4)" }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative px-8 py-4 rounded-full bg-white text-black font-bold flex items-center justify-center gap-2 overflow-hidden w-full sm:w-auto min-w-[200px]"
                            >
                                <span className="relative z-10">{t("ctaPrimary")}</span>
                                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                                <div className="absolute inset-0 bg-linear-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.a>
                            <motion.a
                                href="#otomasyon-showcase"
                                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-4 w-full sm:w-auto rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 font-semibold text-center mt-2 sm:mt-0"
                            >
                                {t("ctaSecondary")}
                            </motion.a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0"
                        >
                            {[
                                { value: parseInt(t("stat1Value")), suffix: t("stat1Suffix"), label: t("stat1Label") },
                                { value: parseInt(t("stat2Value")), suffix: t("stat2Suffix"), label: t("stat2Label") },
                                { value: parseInt(t("stat3Value")), suffix: t("stat3Suffix"), label: t("stat3Label") },
                            ].map((stat, i) => (
                                <div key={i} className="text-center lg:text-left">
                                    <div className="text-2xl md:text-3xl font-black text-white mb-1 tracking-tight">
                                        <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <div className="flex-1 relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] w-full lg:absolute lg:-right-20 lg:top-0 lg:w-[55%] lg:h-full">
                        <SplineScene
                            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                >
                    <span className="text-[10px] uppercase tracking-widest text-primary font-bold">{t("scrollExplore")}</span>
                    <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center pt-2">
                        <motion.div className="w-1.5 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(0,212,255,0.8)]" />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};
