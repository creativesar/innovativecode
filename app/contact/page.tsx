"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useGSAP(() => {
    // Animate background based on focus
    if (backgroundRef.current) {
      const tl = gsap.timeline({ paused: true });

      tl.to(backgroundRef.current, {
        scale: 1.2,
        rotate: 10,
        duration: 0.8,
        ease: "power2.out",
      });

      if (focusedField) {
        tl.play();
      } else {
        tl.reverse();
      }
    }
  }, { dependencies: [focusedField], scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen py-32 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div
        ref={backgroundRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Let's Connect
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassCard className="p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 rounded-full bg-primary text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </GlassCard>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
              </p>
            </div>

            <div className="space-y-6">
              <GlassCard className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">info@innovativecode.com</p>
                </div>
              </GlassCard>

              <GlassCard className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground">+44 744 144 2917</p>
                </div>
              </GlassCard>

              <GlassCard className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Office</h3>
                  <p className="text-muted-foreground">
                    UK<br />
                  </p>
                </div>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
