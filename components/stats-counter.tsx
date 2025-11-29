// components/StatsCounter.tsx
"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 500, suffix: "+", label: "Clients Worldwide" },
  { value: 98, suffix: "%", label: "Success Rate" },
  { value: 600, suffix: "+", label: "Projects Delivered" },
  { value: 24, suffix: "/7", label: "Dedicated Support" },
];

export default function StatsCounter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
  const ctx = gsap.context(() => {
    counterRefs.current.forEach((el, i) => {
      if (!el) return;
      let obj = { val: 0 };

      gsap.to(obj, {
        val: stats[i].value,
        duration: 2.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
        onUpdate: () => {
          el.textContent =
            new Intl.NumberFormat("en-GB").format(Math.round(obj.val)) +
            stats[i].suffix;
        },
      });
    });

    gsap.fromTo(
      [".heading", ".subheading", ".stat-card"],
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      }
    );
  }, sectionRef);

  return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading — Exactly 60px */}
        <h2 className="heading text-[60px] leading-[68px] font-black text-gray-900">
          Results That Speak
        </h2>
        <h2 className="heading mt-1 text-[60px] leading-[68px] font-black">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
            For Themselves
          </span>
        </h2>

        {/* Subheading — Exactly 18px */}
        <p className="subheading mt-8 text-[18px] leading-relaxed text-gray-600 max-w-3xl mx-auto font-light">
          Trusted by 500+ businesses worldwide with a 98% success rate and 24/7 dedicated support.
        </p>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card group">
              <div className="relative inline-block">
                <span
                  ref={(el) => (counterRefs.current[i] = el)}
                  className="block text-5xl md:text-6xl lg:text-7xl font-black tabular-nums text-gray-900
                             group-hover:scale-110 group-hover:text-transparent 
                             group-hover:bg-clip-text group-hover:bg-gradient-to-r 
                             group-hover:from-blue-600 group-hover:to-purple-600
                             transition-all duration-500"
                >
                  0{stat.suffix}
                </span>

                <div className="absolute -inset-4 blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none">
                  <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
                </div>
              </div>

              <p className="mt-5 text-lg font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                {stat.label}
              </p>

              <div className="mt-4 mx-auto h-1 w-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full 
                              group-hover:w-20 transition-all duration-700" />
            </div>
          ))}
        </div>

        {/* Live Indicator */}
        <div className="mt-20">
          <p className="inline-flex items-center gap-3 text-sm md:text-base text-gray-500 font-medium">
            <span className="relative flex">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            Live • Real-time updated • November 2025
          </p>
        </div>
      </div>
    </section>
  );
}