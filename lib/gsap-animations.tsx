"use client";

import { useEffect, useRef, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

// Text Split Animation Hook
export function useTextReveal(ref: RefObject<HTMLElement>, delay = 0) {
    useEffect(() => {
        if (!ref.current) return;

        const text = ref.current.textContent || "";
        ref.current.innerHTML = text
            .split("")
            .map((char) => `<span class="inline-block opacity-0 translate-y-full">${char === " " ? "&nbsp;" : char}</span>`)
            .join("");

        const chars = ref.current.querySelectorAll("span");

        gsap.to(chars, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.03,
            ease: "power3.out",
            delay,
            scrollTrigger: {
                trigger: ref.current,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        });
    }, [ref, delay]);
}

// Parallax Effect Hook
export function useParallax(ref: RefObject<HTMLElement>, speed = 0.5) {
    useEffect(() => {
        if (!ref.current) return;

        gsap.to(ref.current, {
            yPercent: -50 * speed,
            ease: "none",
            scrollTrigger: {
                trigger: ref.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });
    }, [ref, speed]);
}

// Reveal Animation Hook
export function useRevealAnimation(ref: RefObject<HTMLElement>, delay = 0) {
    useEffect(() => {
        if (!ref.current) return;

        gsap.fromTo(
            ref.current,
            { opacity: 0, y: 60 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, [ref, delay]);
}

// Stagger Children Animation Hook
export function useStaggerReveal(containerRef: RefObject<HTMLElement>, childSelector: string, stagger = 0.1) {
    useEffect(() => {
        if (!containerRef.current) return;

        const children = containerRef.current.querySelectorAll(childSelector);

        gsap.fromTo(
            children,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, [containerRef, childSelector, stagger]);
}

// 3D Tilt Effect Hook
export function useTilt3D(ref: RefObject<HTMLElement>, intensity = 15) {
    useEffect(() => {
        if (!ref.current) return;

        const element = ref.current;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -intensity;
            const rotateY = ((x - centerX) / centerX) * intensity;

            gsap.to(element, {
                rotateX,
                rotateY,
                transformPerspective: 1000,
                duration: 0.3,
                ease: "power2.out",
            });
        };

        const handleMouseLeave = () => {
            gsap.to(element, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.5,
                ease: "power2.out",
            });
        };

        element.addEventListener("mousemove", handleMouseMove);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            element.removeEventListener("mousemove", handleMouseMove);
            element.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [ref, intensity]);
}

// Magnetic Button Effect Hook
export function useMagneticButton(ref: RefObject<HTMLElement>, strength = 0.3) {
    useEffect(() => {
        if (!ref.current) return;

        const element = ref.current;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(element, {
                x: x * strength,
                y: y * strength,
                duration: 0.3,
                ease: "power2.out",
            });
        };

        const handleMouseLeave = () => {
            gsap.to(element, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "elastic.out(1, 0.3)",
            });
        };

        element.addEventListener("mousemove", handleMouseMove);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            element.removeEventListener("mousemove", handleMouseMove);
            element.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [ref, strength]);
}

// Floating Animation
export function useFloatingAnimation(ref: RefObject<HTMLElement>, amplitude = 20, duration = 3) {
    useEffect(() => {
        if (!ref.current) return;

        gsap.to(ref.current, {
            y: `+=${amplitude}`,
            duration,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
        });
    }, [ref, amplitude, duration]);
}
