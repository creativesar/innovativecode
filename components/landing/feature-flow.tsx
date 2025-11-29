"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlassCard } from "@/components/ui/glass-card";
import { Code2, Rocket, Palette, Globe, Smartphone, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        title: "Modern Web Development",
        description: "Scalable, high-performance applications built with Next.js.",
        icon: Globe,
        align: "left",
    },
    {
        title: "UI/UX Design",
        description: "Intuitive experiences that delight users.",
        icon: Palette,
        align: "right",
    },
    {
        title: "Mobile Apps",
        description: "Native and cross-platform solutions.",
        icon: Smartphone,
        align: "left",
    },
    {
        title: "Digital Strategy",
        description: "Data-driven growth for your business.",
        icon: Rocket,
        align: "right",
    },
    {
        title: "Clean Code",
        description: "Maintainable and documented codebases.",
        icon: Code2,
        align: "left",
    },
    {
        title: "Performance",
        description: "Optimized for speed and efficiency.",
        icon: Zap,
        align: "right",
    },
];

export function FeatureFlow() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        cardsRef.current.forEach((card, index) => {
            if (!card) return;

            const direction = index % 2 === 0 ? -100 : 100;

            gsap.fromTo(card,
                {
                    x: direction,
                    opacity: 0,
                    rotate: direction > 0 ? 5 : -5
                },
                {
                    x: 0,
                    opacity: 1,
                    rotate: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        end: "top 50%",
                        scrub: 1,
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-32 px-6 relative overflow-hidden min-h-screen flex flex-col items-center">
            <div className="max-w-4xl w-full space-y-32">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                        Our Expertise
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A journey through our digital capabilities.
                    </p>
                </div>

                {features.map((feature, index) => (
                    <div
                        key={feature.title}
                        ref={(el) => { cardsRef.current[index] = el }}
                        className={`flex w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                    >
                        <GlassCard className="w-full md:w-[60%] p-8 backdrop-blur-md border-white/20">
                            <div className="flex items-start gap-6">
                                <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                                    <feature.icon size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-lg text-muted-foreground">{feature.description}</p>
                                </div>
                            </div>
                        </GlassCard>
                    </div>
                ))}
            </div>

            {/* Decorative background line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent -z-10" />
        </section>
    );
}
