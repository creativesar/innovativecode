"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
 

export function ModernHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Initial state
        gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], {
            y: 50,
            opacity: 0,
        });

        // Animation sequence
        tl.to(glowRef.current, {
            opacity: 0.6,
            duration: 2,
            ease: "power2.inOut",
        })
            .to(titleRef.current, {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
            }, "-=1.5")
            .to(subtitleRef.current, {
                y: 0,
                opacity: 1,
                duration: 1,
            }, "-=0.8")
            .to(ctaRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.8,
            }, "-=0.8");

        // Mouse movement parallax effect
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            const x = (clientX - innerWidth / 2) / 50;
            const y = (clientY - innerHeight / 2) / 50;

            gsap.to(glowRef.current, {
                x: x * 2,
                y: y * 2,
                duration: 1,
                ease: "power1.out",
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, { scope: containerRef });

    return (
        <div
            ref={containerRef}
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Background Glow */}
            <div
                ref={glowRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] opacity-0 pointer-events-none"
            />

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <h1
                    ref={titleRef}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8"
                >
                    Build <span className="text-gradient animate-pulse">Future</span>
                    <br />
                    Digital Experiences
                </h1>

                <p
                    ref={subtitleRef}
                    className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    We craft premium websites and applications that blend stunning aesthetics with powerful functionality.
                </p>

            <div
                ref={ctaRef}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
                <Link href="/contact" className="btn-orbit group">
                    Start Your Project
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </Link>
                <Link href="/projects" className="btn-chroma group">
                    View Our Work
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                </Link>
            </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-30" />
        </div>
    );
}
