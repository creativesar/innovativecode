// components/StatsCounter.tsx
"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Users, Target, Award, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Clients Worldwide", color: "from-purple-600 to-indigo-600" },
  { icon: Target, value: 98, suffix: "%", label: "Success Rate", color: "from-cyan-600 to-blue-600" },
  { icon: Award, value: 600, suffix: "+", label: "Projects Delivered", color: "from-orange-600 to-pink-600" },
  { icon: Clock, value: 24, suffix: "/7", label: "Dedicated Support", color: "from-emerald-600 to-teal-600" },
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
          duration: 2.5,
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
        [".stats-heading", ".stats-subheading", ".stat-card"],
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
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-300/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-300/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative">
        {/* Heading */}
        <h2 className="stats-heading text-5xl md:text-6xl font-black mb-4">
          <span className="block text-slate-900">Results That</span>
          <span className="block text-gradient-hero">Speak Volumes</span>
        </h2>

        {/* Subheading */}
        <p className="stats-subheading mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Trusted by businesses worldwide with proven track record of success
        </p>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="stat-card"
            >
              <div className="relative p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />

                {/* Icon */}
                <div className={`relative w-14 h-14 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>

                {/* Number */}
                <div className="relative">
                  <span
                    ref={(el) => { counterRefs.current[i] = el; }}
                    className={`block text-5xl md:text-6xl font-black tabular-nums bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}
                  >
                    0{stat.suffix}
                  </span>

                  {/* Glow effect */}
                  <div className={`absolute -inset-4 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none bg-gradient-to-r ${stat.color} rounded-full`} />
                </div>

                {/* Label */}
                <p className="mt-4 text-base font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                  {stat.label}
                </p>

                {/* Animated underline */}
                <div className={`mt-4 mx-auto h-1 w-0 bg-gradient-to-r ${stat.color} rounded-full group-hover:w-16 transition-all duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Indicator */}
        <div className="mt-16">
          <p className="inline-flex items-center gap-3 text-sm text-slate-500 font-medium">
            <span className="relative flex">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            Live • Real-time updated • December 2025
          </p>
        </div>
      </div>
    </section>
  );
}