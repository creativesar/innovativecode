import { ModernHero } from "@/components/landing/modern-hero";
import { FeatureFlow } from "@/components/landing/feature-flow";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { ServiceSection } from "@/components/service-section";
import StatsCounter from "@/components/stats-counter";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedDiv } from "@/components/animated-div";
import { ArrowRight, Sparkles } from "lucide-react";

const ContactPreview = () => (
  <div className="relative overflow-hidden py-32">
    {/* Enhanced Background with Custom CSS */}
    <div className="absolute inset-0 -z-10">
      {/* Morphing gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl morph-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-3xl morph-blob" style={{ animationDelay: "2s" }} />

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, var(--primary) 2px, transparent 0)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
    </div>

    <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative">
      {/* Floating badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-8 shimmer backdrop-blur-sm">
        <Sparkles className="text-primary animate-pulse" size={16} />
        <span className="text-xs font-bold text-gradient">Let's Build Together</span>
      </div>

      <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
        <span className="neon-text-premium">Ready to Build Something</span>
        <br />
        <span className="text-gradient">Amazing?</span>
      </h2>

      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
        Transform your digital presence with cutting-edge solutions. Let's create something extraordinary together.
      </p>

      {/* Enhanced CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button variant="glow" size="xl" className="group" asChild>
          <Link href="/contact">
            Get Started
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
        <Button variant="outlineGlow" size="xl" className="group" asChild>
          <Link href="/about">
            Learn More
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>

      {/* Trust indicators */}
      <div className="mt-16 flex items-center justify-center gap-8 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>100+ Projects Delivered</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: "0.5s" }} />
          <span>4.9/5 Client Rating</span>
        </div>
      </div>
    </div>
  </div>
)

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Global page effects */}
      <div className="fixed inset-0 pointer-events-none -z-50">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "3s" }} />
      </div>

      <ModernHero />

      <FeatureFlow />

      <TestimonialsSection />

      <AnimatedDiv>
        <StatsCounter />
      </AnimatedDiv>

      <AnimatedDiv>
        <ContactPreview />
      </AnimatedDiv>
    </div>
  );
}
