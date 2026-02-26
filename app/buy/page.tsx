import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MortgageCalculator from "@/components/MortgageCalculator";
import { Search, MapPin, Bed, Bath, Move, Heart, MessageCircle } from "lucide-react";

export default function BuyPage() {
    return (
        <main className="min-h-screen bg-navy flex flex-col pt-32">
            <Navbar />

            {/* Header */}
            <section className="container mx-auto px-6 mb-16">
                <div className="max-w-3xl">
                    <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">Own Your Legacy</span>
                    <h1 className="text-5xl font-serif text-white mb-6">Discover Properties for Sale</h1>
                    <p className="text-white/60 text-lg leading-relaxed font-light">
                        Find exclusive homes in prime neighborhoods. Whether you're buying your first home
                        or expanding your investment portfolio, Elite Real Estate ensures a smooth, rewarding experience.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-12 mb-24">
                {/* Sidebar Filters */}
                <div className="lg:col-span-1 space-y-8">
                    <div className="glass p-6 rounded-sm border-gold/10">
                        <h3 className="text-white font-serif text-lg mb-6 border-b border-white/5 pb-4">Refine Search</h3>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-gold block">Location</label>
                                <input type="text" placeholder="Select City" className="w-full bg-white/5 border border-white/10 text-white p-3 text-sm rounded-sm focus:border-gold transition-colors outline-none" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-gold block">Price Range</label>
                                <select className="w-full bg-white/5 border border-white/10 text-white p-3 text-sm rounded-sm focus:border-gold transition-colors outline-none font-sans">
                                    <option className="bg-navy">$1M - $3M</option>
                                    <option className="bg-navy">$3M - $5M</option>
                                    <option className="bg-navy">$5M - $10M</option>
                                    <option className="bg-navy">$10M+</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-gold block">Bedrooms</label>
                                    <select className="w-full bg-white/5 border border-white/10 text-white p-3 text-sm rounded-sm focus:border-gold transition-colors outline-none font-sans">
                                        <option className="bg-navy">1+</option>
                                        <option className="bg-navy">3+</option>
                                        <option className="bg-navy">5+</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-gold block">Bathrooms</label>
                                    <select className="w-full bg-white/5 border border-white/10 text-white p-3 text-sm rounded-sm focus:border-gold transition-colors outline-none font-sans">
                                        <option className="bg-navy">1+</option>
                                        <option className="bg-navy">2+</option>
                                        <option className="bg-navy">4+</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-gold block">Property Type</label>
                                <div className="space-y-2 pt-2">
                                    {['Mansion', 'Villa', 'Penthouse', 'Smart Home'].map(type => (
                                        <label key={type} className="flex items-center space-x-3 cursor-pointer group">
                                            <input type="checkbox" className="w-4 h-4 accent-gold bg-transparent border-white/20" />
                                            <span className="text-sm text-white/60 group-hover:text-gold transition-colors">{type}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <button className="w-full bg-gold text-navy py-3 rounded-sm text-[10px] uppercase tracking-widest font-bold hover:bg-gold-dark transition-all mt-4">
                                Apply Filters
                            </button>
                        </div>
                    </div>

                    {/* Mortgage Calculator Integration */}
                    <MortgageCalculator />
                </div>

                {/* Listings Grid */}
                <div className="lg:col-span-3">
                    <div className="flex justify-between items-center mb-8 text-sm">
                        <span className="text-white/40">Showing <span className="text-gold font-bold">12</span> Properties</span>
                        <div className="flex items-center space-x-4">
                            <span className="text-white/40">Sort by:</span>
                            <select className="bg-transparent text-gold font-bold outline-none cursor-pointer">
                                <option className="bg-navy">Newest First</option>
                                <option className="bg-navy">Price: High to Low</option>
                                <option className="bg-navy">Price: Low to High</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { id: 1, img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1000&auto=format&fit=crop" },
                            { id: 2, img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop" },
                            { id: 3, img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000&auto=format&fit=crop" },
                            { id: 4, img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop" },
                            { id: 5, img: "https://images.unsplash.com/photo-1600585154340-be61ead1833c?q=80&w=1000&auto=format&fit=crop" },
                            { id: 6, img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop" }
                        ].map((prop, i) => (
                            <div key={i} className="group glass border-white/5 hover:border-gold/30 transition-all duration-500 overflow-hidden">
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={prop.img}
                                        alt="Property"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <button className="absolute top-4 right-4 p-2 glass rounded-full text-white hover:text-red-500 transition-colors">
                                        <Heart size={18} />
                                    </button>
                                    <div className="absolute top-4 left-4 bg-navy/80 backdrop-blur-md text-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-gold/20">
                                        Buy
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl text-white mb-1 group-hover:text-gold transition-colors">Royal Heights Estate</h3>
                                            <div className="flex items-center text-white/40 text-[10px] uppercase tracking-widest">
                                                <MapPin size={12} className="mr-1 text-gold" />
                                                Beverly Hills, CA
                                            </div>
                                        </div>
                                        <span className="text-gold font-serif text-lg">$5,250,000</span>
                                    </div>

                                    <div className="flex gap-4 mb-6 border-t border-white/5 pt-4">
                                        <div className="flex items-center space-x-1 text-sm text-white/60">
                                            <Bed size={16} className="text-gold" />
                                            <span>5</span>
                                        </div>
                                        <div className="flex items-center space-x-1 text-sm text-white/60">
                                            <Bath size={16} className="text-gold" />
                                            <span>6</span>
                                        </div>
                                        <div className="flex items-center space-x-1 text-sm text-white/60">
                                            <Move size={16} className="text-gold" />
                                            <span>4,500 sqft</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <button className="flex-1 bg-white/5 border border-white/10 text-white py-3 rounded-sm text-[10px] uppercase tracking-widest font-bold hover:bg-gold hover:text-navy hover:border-gold transition-all">
                                            View Details
                                        </button>
                                        <button className="bg-gold/10 border border-gold/20 p-3 rounded-sm text-gold hover:bg-gold hover:text-navy transition-all">
                                            <MessageCircle size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-16 flex justify-center space-x-2">
                        {[1, 2, 3, "...", 10].map((p, i) => (
                            <button key={i} className={`w-10 h-10 flex items-center justify-center text-xs font-bold border ${p === 1 ? "bg-gold text-navy border-gold" : "border-white/10 text-white hover:border-gold hover:text-gold"} transition-all`}>
                                {p}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
