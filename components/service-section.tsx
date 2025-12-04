"use client";

import { motion } from "framer-motion";
import { ModernCard } from "@/components/modern-card";
import { Code, Layout, Megaphone, Palette, Smartphone } from "lucide-react";

const services = [
    {
        title: "Web Development",
        description: "Crafting high-performance, scalable, and secure web solutions tailored to your business needs, from engaging websites to complex web applications.",
        icon: Code,
    },
    {
        title: "UI/UX Design",
        description: "Designing intuitive and captivating user interfaces and experiences that delight users and drive conversions, focusing on usability and aesthetic appeal.",
        icon: Layout,
    },
    {
        title: "Digital Marketing",
        description: "Implementing data-driven strategies across SEO, PPC, social media, and content to enhance your online visibility, engage your audience, and boost growth.",
        icon: Megaphone,
    },
    {
        title: "Graphic Designing",
        description: "Creating stunning visual assets, from brand identity and logos to marketing collateral, ensuring your brand makes a memorable impact.",
        icon: Palette,
    },
    {
        title: "Mobile Applications",
        description: "Developing native and cross-platform mobile apps for iOS and Android that deliver seamless performance and exceptional user experiences on every device.",
        icon: Smartphone,
    },
];

export function ServiceSection() {
    return (
        <section className="py-20 bg-white section-bg">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    {/* Content removed as requested */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <ModernCard className="h-full">
                                <div className="flex flex-col items-center text-center p-6">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-4 text-cyan-600 floating-element">
                                        <service.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-purple-600">{service.title}</h3>
                                    <p className="text-sm text-slate-600">
                                        {service.description}
                                    </p>
                                </div>
                            </ModernCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}