"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export function HeroSection() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-subtitle",
        { y: 30, opacity: 0, rotationZ: 5 },
        { y: 0, opacity: 1, rotationZ: 0, duration: 0.7 }
      )
        .fromTo(
          ".hero-title",
          { y: 40, opacity: 0, rotationZ: -5 },
          { y: 0, opacity: 1, rotationZ: 0, duration: 0.8 },
          "-=0.4"
        )
        .fromTo(
          ".hero-description",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          ".hero-buttons",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          ".hero-card",
          { y: 50, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 1.0, ease: "elastic.out(1, 0.5)" },
          "-=0.6"
        );

      // Subtle background animation
      gsap.to(".bg-element-1", {
        rotation: 360,
        repeat: -1,
        duration: 60,
        ease: "none",
      });
      gsap.to(".bg-element-2", {
        rotation: -360,
        repeat: -1,
        duration: 75,
        ease: "none",
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background text-foreground">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-element-1 absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full blur-3xl opacity-50 bg-primary/10" />
        <div className="bg-element-2 absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full blur-3xl opacity-30 bg-secondary/10" />
      </div>

      <div className="container mx-auto px-4 md:px-6 text-center z-10">
        <span className="hero-subtitle inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          Innovate. Design. Elevate Your Brand.
        </span>
        <h1 className="hero-title text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
          Your Vision, Our Code. <br />
          <span className="text-primary">Unlocking Digital Potential.</span>
        </h1>
        <p className="hero-description text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          At InnovativeCode, we transform ambitious ideas into stunning digital
          realities. Partner with us for bespoke web solutions, cutting-edge
          design, and data-driven marketing strategies that propel your
          business forward.
        </p>

        <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="xl" variant="glow" asChild>
            <Link href="/contact">
              Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button size="xl" variant="outlineGlow" asChild>
            <Link href="/projects">
              View Our Work
            </Link>
          </Button>
        </div>

        {/* Floating Elements / 3D Placeholder */}
        <div className="hero-card mt-16 relative mx-auto max-w-4xl aspect-video rounded-xl border border-border/50 bg-card shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-primary/5" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-muted-foreground font-mono text-sm">Interactive 3D Element / Dashboard Preview</p>
          </div>
        </div>
      </div>
    </section>
  );
}
