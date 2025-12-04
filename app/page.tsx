"use client";

import { Navbar } from "@/components/landing/navbar";
import { RevampedHero } from "@/components/landing/revamped-hero";
import { RevampedServices } from "@/components/landing/revamped-services";
import { ProcessSection } from "@/components/landing/process-section";
import { RevampedTestimonials } from "@/components/landing/revamped-testimonials";
import { RevampedFeatures } from "@/components/landing/revamped-features";
import { RevampedPortfolio } from "@/components/landing/revamped-portfolio";
import { RevampedPricing } from "@/components/landing/revamped-pricing";
import { RevampedFAQ } from "@/components/landing/revamped-faq";
import { RevampedFooter } from "@/components/landing/revamped-footer";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#050511] text-white overflow-hidden">
      <Navbar />
      <RevampedHero />
      <RevampedServices />
      <ProcessSection />
      <RevampedTestimonials />
      <RevampedFeatures />
      <RevampedPortfolio />
      <RevampedPricing />
      <RevampedFAQ />
      <RevampedFooter />
    </main>
  );
}