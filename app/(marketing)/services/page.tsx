"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Code2, Palette, Smartphone, Globe, Zap, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks",
    features: ["Next.js & React", "TypeScript", "API Integration", "Performance Optimization"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile solutions",
    features: ["iOS & Android", "React Native", "Flutter", "App Store Deployment"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive user experiences",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Lightning-fast, optimized applications",
    features: ["Core Web Vitals", "SEO Optimization", "Caching Strategies", "CDN Setup"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Code2,
    title: "Custom Development",
    description: "Tailored solutions for unique challenges",
    features: ["API Development", "Database Design", "Cloud Architecture", "DevOps"],
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Users,
    title: "Consulting",
    description: "Strategic guidance for digital transformation",
    features: ["Tech Stack Selection", "Architecture Review", "Team Training", "Best Practices"],
    color: "from-violet-500 to-purple-500",
  },
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    sectionsRef.current.forEach((section, index) => {
      if (!section) return;

      // Keep only fade in animation, remove parallax effect
      gsap.fromTo(section,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen section-bg">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-[60vh] flex items-center justify-center px-6"
      >
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Comprehensive digital solutions tailored to your needs
          </p>
        </div>
      </motion.div>

      {/* Service Sections */}
      <div className="space-y-32 pb-32">
        {services.map((service, index) => (
          <div
            key={service.title}
            ref={(el) => { sectionsRef.current[index] = el }}
            className="min-h-screen flex items-center justify-center px-6 relative"
          >
            <div className="service-card max-w-5xl w-full">
              <div className="modern-card p-12 md:p-16 relative overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.color} opacity-10 blur-3xl rounded-full`} />

                <div className="relative z-10">
                  <div className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-8 floating-element`}>
                    <service.icon size={48} />
                  </div>

                  <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
                    {service.title}
                  </h2>

                  <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {service.features.map((feature) => (
                      <motion.div
                        key={feature}
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 modern-card"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
                        <span className="text-lg">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}