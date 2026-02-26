"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Award, Users, Globe, CheckCircle2 } from "lucide-react";

const Counter = ({ value, label }: { value: string, label: string }) => (
    <div className="text-center group">
        <motion.h3
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif text-gold mb-2"
        >
            {value}
        </motion.h3>
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold group-hover:text-gold transition-colors">
            {label}
        </p>
    </div>
);

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-navy flex flex-col pt-32">
            <Navbar />

            {/* Hero Section */}
            <section className="container mx-auto px-6 mb-24 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">Our Legacy</span>
                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">About Elite Real Estate</h1>
                    <p className="text-white/60 text-xl leading-relaxed font-light">
                        Founded on the pillars of integrity and innovation, Elite Real Estate
                        has redefined the landscape of global luxury properties. We don't just
                        facilitate transactions — we build enduring legacies.
                    </p>
                </motion.div>
            </section>

            {/* Hero Image Group */}
            <section className="container mx-auto px-6 mb-32">
                <div className="grid grid-cols-12 gap-6 h-[400px] md:h-[600px]">
                    <div className="col-span-8 overflow-hidden rounded-sm border border-gold/10">
                        <img
                            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
                            alt="Elite Skyline"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                        />
                    </div>
                    <div className="col-span-4 grid grid-rows-2 gap-6">
                        <div className="overflow-hidden rounded-sm border border-gold/10">
                            <img
                                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
                                alt="Luxury Interior"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="overflow-hidden rounded-sm border border-gold/20 bg-navy flex flex-col items-center justify-center p-10 group hover:bg-gold transition-all duration-500">
                            <div className="border-2 border-gold p-4 mb-4 group-hover:border-navy transition-colors">
                                <span className="text-3xl font-serif font-bold text-gold group-hover:text-navy tracking-[0.2em]">ELITE</span>
                            </div>
                            <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold group-hover:text-navy transition-colors">EST. 1998</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Sections */}
            <section className="container mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-serif text-white underline underline-offset-[16px] decoration-gold/30">Our Story</h2>
                        <p className="text-white/60 leading-relaxed text-lg font-light">
                            Elite Real Estate was founded with a vision to redefine how luxury properties are bought, sold, and leased.
                            We combine market intelligence, cutting-edge technology, and personalized service to deliver extraordinary experiences.
                            Our journey began in the heart of New York, and today, our network spans the most prestigious corners of the globe.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                            <div className="flex items-start space-x-3">
                                <CheckCircle2 className="text-gold shrink-0" size={20} />
                                <span className="text-sm text-white/80">Market Intelligence Pioneers</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckCircle2 className="text-gold shrink-0" size={20} />
                                <span className="text-sm text-white/80">Unmatched Concierge Service</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckCircle2 className="text-gold shrink-0" size={20} />
                                <span className="text-sm text-white/80">Billion-Dollar Portfolio</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckCircle2 className="text-gold shrink-0" size={20} />
                                <span className="text-sm text-white/80">Global Trust & Integrity</span>
                            </div>
                        </div>
                    </div>
                    <div className="glass p-12 space-y-12">
                        <div>
                            <h3 className="text-gold font-serif text-2xl mb-4">Our Mission</h3>
                            <p className="text-white/50 font-light leading-relaxed">To connect clients with exceptional properties while providing unmatched professionalism and integrity.</p>
                        </div>
                        <div className="border-t border-white/10 pt-12">
                            <h3 className="text-gold font-serif text-2xl mb-4">Our Vision</h3>
                            <p className="text-white/50 font-light leading-relaxed">To become the most trusted luxury real estate brand globally, setting the gold standard for prestige living.</p>
                        </div>
                    </div>
                </div>

                {/* Counters */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 py-20 border-y border-white/5">
                    <Counter value="12B+" label="Value Sold" />
                    <Counter value="450+" label="Elite Estates" />
                    <Counter value="25+" label="Years Active" />
                    <Counter value="15k+" label="Global Clients" />
                </div>
            </section>

            {/* Core Values */}
            <section className="bg-premium-dark/50 py-32">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">The Elite Standard</span>
                        <h2 className="text-4xl font-serif text-white">Our Values</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Integrity", text: "Honesty and transparency in every transaction.", icon: Shield },
                            { title: "Excellence", text: "Committing to the highest standards of luxury.", icon: Award },
                            { title: "Innovation", text: "Leveraging technology for superior insights.", icon: Globe },
                            { title: "Client First", text: "Tailoring our service to your unique lifestyle.", icon: Users },
                        ].map((value, i) => (
                            <div key={i} className="group glass p-10 hover:border-gold/50 transition-all text-center">
                                <div className="w-16 h-16 glass mx-auto flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform border-gold/20">
                                    <value.icon size={32} />
                                </div>
                                <h4 className="text-white font-serif text-xl mb-4">{value.title}</h4>
                                <p className="text-sm text-white/40 font-light leading-relaxed">{value.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
