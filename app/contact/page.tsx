"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react";

export default function ContactPage() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for reaching out to Elite Real Estate. Our concierge team will contact you shortly.");
    };

    return (
        <main className="min-h-screen bg-navy flex flex-col pt-32">
            <Navbar />

            {/* Header */}
            <section className="container mx-auto px-6 mb-24 text-center">
                <div className="max-w-2xl mx-auto">
                    <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block underline underline-offset-8 decoration-gold/30">Immediate Concierge</span>
                    <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Let's Find Your Dream Property</h1>
                    <p className="text-white/60 text-lg leading-relaxed font-light">
                        Our private advisors are ready to guide you towards your next extraordinary investment.
                        Experience personalized service at the highest level.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Contact Info */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-serif text-white">Contact Information</h2>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 glass flex items-center justify-center text-gold shrink-0 border-gold/20">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">Global Headquarters</h4>
                                        <p className="text-white/40 text-sm font-light">123 Luxury Avenue, Penthouse Level, Manhattan, NY 10001</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 glass flex items-center justify-center text-gold shrink-0 border-gold/20">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">Private Line</h4>
                                        <p className="text-white/40 text-sm font-light">+1 (234) 567-890</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 glass flex items-center justify-center text-gold shrink-0 border-gold/20">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">Concierge Email</h4>
                                        <p className="text-white/40 text-sm font-light">concierge@eliterealestate.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 glass flex items-center justify-center text-gold shrink-0 border-gold/20">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">Service Hours</h4>
                                        <p className="text-white/40 text-sm font-light">24/7 Dedicated Client Support</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass p-8 border-gold/30">
                            <h4 className="text-gold font-serif text-lg mb-4">Direct WhatsApp Support</h4>
                            <p className="text-white/50 text-sm font-light mb-6">Need an immediate response? Chat with a property advisor now.</p>
                            <a
                                href="https://wa.me/your-number"
                                className="flex items-center justify-center space-x-3 bg-gold text-navy py-3 font-bold uppercase tracking-widest text-[10px] hover:bg-gold-dark transition-all"
                            >
                                <MessageCircle size={18} />
                                <span>Start Chat Now</span>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-7">
                        <div className="glass-dark p-12 rounded-sm border-gold/20 shadow-2xl">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full bg-white/5 border border-white/10 text-white p-4 text-sm rounded-sm focus:border-gold outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            className="w-full bg-white/5 border border-white/10 text-white p-4 text-sm rounded-sm focus:border-gold outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Phone Number</label>
                                        <input
                                            type="tel"
                                            className="w-full bg-white/5 border border-white/10 text-white p-4 text-sm rounded-sm focus:border-gold outline-none transition-all"
                                            placeholder="+1 (234) 567-890"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Property Interest</label>
                                        <select className="w-full bg-white/5 border border-white/10 text-white p-4 text-sm rounded-sm focus:border-gold outline-none transition-all">
                                            <option className="bg-navy">Luxury Mansion</option>
                                            <option className="bg-navy">Oceanfront Villa</option>
                                            <option className="bg-navy">City Penthouse</option>
                                            <option className="bg-navy">Commercial Lease</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Your Message</label>
                                    <textarea
                                        required
                                        rows={5}
                                        className="w-full bg-white/5 border border-white/10 text-white p-4 text-sm rounded-sm focus:border-gold outline-none transition-all"
                                        placeholder="Tell us about your dream property requirements..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gold text-navy py-5 rounded-sm font-bold uppercase tracking-[0.3em] text-xs hover:bg-gold-dark hover:shadow-[0_0_30px_rgba(198,167,94,0.3)] transition-all flex items-center justify-center space-x-3 group"
                                >
                                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    <span>Send Inquiry</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
