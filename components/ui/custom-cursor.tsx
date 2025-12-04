"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        if (!cursorRef.current || !cursorDotRef.current) return;

        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;

        const handleMouseMove = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.5,
                ease: "power3.out",
            });

            gsap.to(cursorDot, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
            });
        };

        const handleMouseEnter = () => {
            gsap.to(cursor, { opacity: 1, duration: 0.3 });
            gsap.to(cursorDot, { opacity: 1, duration: 0.3 });
        };

        const handleMouseLeave = () => {
            gsap.to(cursor, { opacity: 0, duration: 0.3 });
            gsap.to(cursorDot, { opacity: 0, duration: 0.3 });
        };

        // Add hover effect for interactive elements
        const interactiveElements = document.querySelectorAll("a, button, [data-cursor-hover]");

        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", () => {
                setIsHovering(true);
                gsap.to(cursor, { scale: 2, duration: 0.3 });
            });

            el.addEventListener("mouseleave", () => {
                setIsHovering(false);
                gsap.to(cursor, { scale: 1, duration: 0.3 });
            });
        });

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseenter", handleMouseEnter);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <>
            {/* Main Cursor Circle */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
                style={{ transform: "translate(-50%, -50%)" }}
            >
                <div
                    className={`w-full h-full rounded-full border-2 transition-colors duration-300 ${isHovering ? "border-purple-500 bg-purple-500/20" : "border-white"
                        }`}
                />
            </div>

            {/* Cursor Dot */}
            <div
                ref={cursorDotRef}
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
                style={{ transform: "translate(-50%, -50%)" }}
            />
        </>
    );
}
