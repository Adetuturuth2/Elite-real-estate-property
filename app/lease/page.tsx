import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, MapPin, Building, Briefcase, Ruler, Download, ChevronRight, MessageCircle } from "lucide-react";

export default function LeasePage() {
    return (
        <main className="min-h-screen bg-navy flex flex-col pt-32">
            <Navbar />

            {/* Header */}
            <section className="container mx-auto px-6 mb-16">
                <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
                    <div className="max-w-2xl">
                        <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">Business Excellence</span>
                        <h1 className="text-5xl font-serif text-white mb-6">Flexible Lease Opportunities</h1>
                        <p className="text-white/60 text-lg leading-relaxed font-light">
                            Commercial and residential lease options crafted for flexibility,
                            convenience, and growth. Empower your business in prime locations.
                        </p>
                    </div>
                    <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition-all flex items-center space-x-3 mb-2">
                        <Download size={18} />
                        <span>Download Brochure</span>
                    </button>
                </div>
            </section>

            {/* Filters */}
            <div className="container mx-auto px-6 mb-16">
                <div className="glass-dark p-10 rounded-sm border-gold/20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="space-y-3">
                            <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Category</label>
                            <div className="flex gap-2">
                                <button className="flex-1 bg-gold text-navy py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest">Commercial</button>
                                <button className="flex-1 border border-white/10 text-white/40 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:border-gold/50">Residential</button>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Lease Term</label>
                            <select className="w-full bg-white/5 border border-white/10 text-white p-3 text-sm rounded-sm focus:border-gold outline-none">
                                <option className="bg-navy">Short-term (1-3 yrs)</option>
                                <option className="bg-navy">Long-term (5+ yrs)</option>
                                <option className="bg-navy">Month-to-Month</option>
                            </select>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Size Range</label>
                            <select className="w-full bg-white/5 border border-white/10 text-white p-3 text-sm rounded-sm focus:border-gold outline-none">
                                <option className="bg-navy">500 - 2,000 sqft</option>
                                <option className="bg-navy">2,000 - 5,000 sqft</option>
                                <option className="bg-navy">5,000+ sqft</option>
                            </select>
                        </div>

                        <div className="flex items-end">
                            <button className="w-full bg-gold text-navy py-3.5 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-gold-dark transition-all shadow-[0_0_15px_rgba(198,167,94,0.3)]">
                                Search Spaces
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <section className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 mb-24">
                {[
                    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
                ].map((imgUrl, i) => (
                    <div key={i} className="group flex flex-col glass border-white/5 hover:border-gold/30 transition-all duration-500 overflow-hidden">
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src={imgUrl}
                                alt="Lease Space"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute top-4 left-4 bg-gold text-navy px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                                Premium Lease
                            </div>
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                            <h3 className="text-2xl font-serif text-white mb-2">Elite Business Plaza</h3>
                            <div className="flex items-center text-white/40 text-[10px] uppercase tracking-widest mb-6">
                                <MapPin size={12} className="mr-1 text-gold" />
                                Financial District, NY
                            </div>

                            <p className="text-sm text-white/50 font-light mb-8 leading-relaxed">
                                Position your business in a premium commercial environment with open layouts and advanced security systems.
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-8 mt-auto">
                                <div className="flex items-center space-x-3">
                                    <Ruler size={18} className="text-gold" />
                                    <div>
                                        <span className="text-[10px] text-white/40 block leading-none">Size</span>
                                        <span className="text-sm font-bold">2,500 sqft</span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Briefcase size={18} className="text-gold" />
                                    <div>
                                        <span className="text-[10px] text-white/40 block leading-none">Usage</span>
                                        <span className="text-sm font-bold">Office</span>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                                <span className="text-gold font-serif text-xl">$45 / sqft</span>
                                <a href="https://wa.me/your-number" className="text-gold hover:text-white transition-colors">
                                    <MessageCircle size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* FAQ Section */}
            <section className="bg-premium-dark/50 py-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="text-gold text-sm uppercase tracking-[0.4em] font-bold mb-4 block">Lease Process</span>
                        <h2 className="text-4xl font-serif text-white">Frequently Asked Questions</h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: "What are the standard lease durations?", a: "We offer flexible terms ranging from 12-month residential leases to 10-year commercial agreements with renewal options." },
                            { q: "Is maintenance included in the lease?", a: "For our premium managed properties, 24/7 maintenance and concierge services are included in the base lease rate." },
                            { q: "Can handles commercial lease customization?", a: "Yes, we facilitate architectural customization for commercial tenants to align the space with their brand identity." }
                        ].map((faq, i) => (
                            <div key={i} className="glass p-6 rounded-sm border-white/5 hover:border-gold/20 transition-all cursor-pointer group">
                                <div className="flex justify-between items-center mb-4">
                                    <h4 className="text-white font-serif tracking-wide">{faq.q}</h4>
                                    <ChevronRight size={18} className="text-gold group-hover:translate-x-1 transition-transform" />
                                </div>
                                <p className="text-sm text-white/40 font-light leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
