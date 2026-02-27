"use client";

import { Code2, BrainCircuit, Globe, Cpu, Database } from "lucide-react";

export const TechMarquee = () => {
    const techs = [
        { name: "Python", icon: Code2 },
        { name: "Next.js", icon: Globe },
        { name: "OpenAI GPT-4", icon: BrainCircuit },
        { name: "Anthropic Claude", icon: BrainCircuit },
        { name: "PyTorch", icon: Cpu },
        { name: "React", icon: Code2 },
        { name: "PostgreSQL", icon: Database },
        { name: "Docker", icon: Cpu },
        { name: "AWS", icon: Globe },
        { name: "Redis", icon: Database },
    ];

    return (
        <div className="relative py-8 border-y border-white/5 bg-black/50 overflow-hidden" aria-label="Kullanılan teknolojiler">
            <div className="absolute inset-y-0 left-0 w-40 bg-linear-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-40 bg-linear-to-l from-background to-transparent z-10" />

            <div
                className="flex gap-12"
                style={{ animation: "scroll 50s linear infinite" }}
            >
                {[...techs, ...techs, ...techs, ...techs].map((tech, i) => (
                    <div key={i} className="flex items-center gap-3 shrink-0 group cursor-default">
                        <tech.icon className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors" />
                        <span className="text-gray-500 font-bold text-sm uppercase tracking-widest group-hover:text-white transition-colors">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>

            <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .flex:hover {
          animation-play-state: paused !important;
        }
      `}</style>
        </div>
    );
};

export const ClientLogos = () => {
    const clients = ["TechStart", "DataFlow", "InnovateTR", "CloudPeak", "AIVentures", "SmartSoft"];

    return (
        <section className="py-20 px-6" aria-label="Güvenilen markalar">
            <div className="max-w-7xl mx-auto">
                <p className="text-center text-sm font-semibold text-gray-500 mb-10 uppercase tracking-[0.2em]">Sektör Liderleri Tarafından Güveniliyor</p>
                <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {clients.map((client, i) => (
                        <div
                            key={i}
                            className="text-2xl md:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-600 hover:from-white hover:to-gray-300 transition-all cursor-default"
                        >
                            {client}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
