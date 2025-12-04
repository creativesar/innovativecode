"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "2020",
    title: "The Beginning",
    description: "Founded with a vision to revolutionize digital experiences.",
  },
  {
    year: "2021",
    title: "First Major Client",
    description: "Delivered our first enterprise-scale application.",
  },
  {
    year: "2022",
    title: "Team Expansion",
    description: "Grew to a team of 15+ talented developers and designers.",
  },
  {
    year: "2023",
    title: "Global Reach",
    description: "Expanded services to clients across 3 continents.",
  },
  {
    year: "2024",
    title: "Innovation Hub",
    description: "Launched our R&D division focused on AI and Web3.",
  },
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const milestonesRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    // Animate SVG path
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();

      gsap.set(pathRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });
    }

    // Animate milestone cards
    milestonesRef.current.forEach((milestone, index) => {
      if (!milestone) return;

      gsap.fromTo(milestone,
        {
          opacity: 0,
          scale: 0.8,
          x: index % 2 === 0 ? -50 : 50,
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 0.8,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: milestone,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div className="min-h-screen py-32 px-6 relative overflow-hidden section-bg">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mb-32"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          Our Story
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
          A journey of innovation, creativity, and relentless pursuit of excellence.
        </p>
      </motion.div>

      {/* Timeline Section */}
      <div ref={containerRef} className="relative max-w-6xl mx-auto">
        {/* SVG Path */}
        <svg
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none hidden md:block"
          style={{ zIndex: 0 }}
        >
          <path
            ref={pathRef}
            d="M 50,0 Q 200,200 50,400 T 50,800 Q 200,1000 50,1200 T 50,1600"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="3"
            opacity="0.3"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--primary)" />
              <stop offset="100%" stopColor="var(--accent)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Milestones */}
        <div className="relative space-y-32 md:space-y-48">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              ref={(el) => { milestonesRef.current[index] = el }}
              className={`flex items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                } justify-center`}
            >
              <div className="modern-card w-full md:w-[45%] p-8 relative">
                <div className="absolute -top-6 left-8 px-4 py-2 bg-primary text-white rounded-full font-bold text-sm floating-element">
                  {milestone.year}
                </div>
                <h3 className="text-3xl font-bold mb-4 mt-2 gradient-text">{milestone.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-48 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
          Built by Passionate Creators
        </h2>
        <p className="text-xl text-muted-foreground leading-relaxed mb-12">
          We're a diverse team of designers, developers, and strategists united by our love for building exceptional digital products.
        </p>
        <div className="modern-card p-12">
          <div className="flex flex-wrap justify-center gap-12 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}