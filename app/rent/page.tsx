import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, MapPin, Bed, Bath, Move, MessageCircle, Shield, Wifi, Car } from "lucide-react";

export default function RentPage() {
    return (
        <main className="min-h-screen bg-navy flex flex-col pt-32">
            <Navbar />

            {/* Header */}
            <section className="container mx-auto px-6 mb-16 text-center">
                <div className="max-w-3xl mx-auto">
                    <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">Refined Living</span>
                    <h1 className="text-5xl font-serif text-white mb-6">Premium Properties for Rent</h1>
                    <p className="text-white/60 text-lg leading-relaxed font-light">
                        Live comfortably in carefully selected rental homes designed to match your lifestyle
                        and budget. Experience luxury without the long-term commitment.
                    </p>
                </div>
            </section>

            {/* Search & Filters Bar */}
            <div className="container mx-auto px-6 mb-12">
                <div className="glass p-6 rounded-sm border-gold/10 flex flex-wrap gap-4 items-end">
                    <div className="flex-1 min-w-[200px] space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Location</label>
                        <input type="text" placeholder="Select Area" className="w-full bg-white/5 border border-white/10 text-white p-3 text-sm rounded-sm focus:border-gold outline-none" />
                    </div>
                    <div className="w-full md:w-auto min-w-[150px] space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Monthly Budget</label>
                        <select className="w-full bg-white/5 border border-white/10 text-white p-3 text-sm rounded-sm focus:border-gold outline-none">
                            <option className="bg-navy">$2k - $5k</option>
                            <option className="bg-navy">$5k - $10k</option>
                            <option className="bg-navy">$10k - $20k</option>
                            <option className="bg-navy">$20k+</option>
                        </select>
                    </div>
                    <div className="w-full md:w-auto min-w-[150px] space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Furnished</label>
                        <select className="w-full bg-white/5 border border-white/10 text-white p-3 text-sm rounded-sm focus:border-gold outline-none">
                            <option className="bg-navy">Any</option>
                            <option className="bg-navy">Fully Furnished</option>
                            <option className="bg-navy">Unfurnished</option>
                        </select>
                    </div>
                    <div className="w-full md:w-auto min-w-[150px] space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Amenities</label>
                        <select className="w-full bg-white/5 border border-white/10 text-white p-3 text-sm rounded-sm focus:border-gold outline-none">
                            <option className="bg-navy">Pool & Gym</option>
                            <option className="bg-navy">Security</option>
                            <option className="bg-navy">Parking</option>
                        </select>
                    </div>
                    <button className="bg-gold text-navy px-8 py-3.5 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-gold-dark transition-all">
                        Find Rental
                    </button>
                </div>
            </div>

            <section className="container mx-auto px-6 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1000&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1000&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1600585154340-be61ead1833c?q=80&w=1000&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1000&auto=format&fit=crop"
                    ].map((imgUrl, i) => (
                        <div key={i} className="group glass border-white/5 hover:border-gold/30 transition-all duration-500 overflow-hidden">
                            <div className="relative h-72 overflow-hidden">
                                <img
                                    src={imgUrl}
                                    alt="Rental"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-navy/80 backdrop-blur-md text-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-gold/20">
                                    Rent
                                </div>
                                <div className="absolute bottom-4 right-4 glass px-4 py-2 text-white font-serif text-lg">
                                    $8,500/mo
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl text-white mb-2 group-hover:text-gold transition-colors">Azure Sky Residence</h3>
                                <p className="text-sm text-white/50 font-light mb-6 line-clamp-2">
                                    A fully furnished 3-bedroom luxury apartment featuring modern interiors, a gourmet kitchen and world-class amenities.
                                </p>

                                <div className="flex justify-between items-center mb-6 py-4 border-y border-white/5">
                                    <div className="flex items-center space-x-2 text-white/60">
                                        <Bed size={16} className="text-gold" />
                                        <span className="text-xs">3 Beds</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-white/60">
                                        <Bath size={16} className="text-gold" />
                                        <span className="text-xs">2 Baths</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-white/60 text-gold font-bold">
                                        <Shield size={16} />
                                        <span className="text-[10px] uppercase tracking-widest">24/7 Security</span>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <button className="flex-1 bg-white/5 border border-white/10 text-white py-3 rounded-sm text-[10px] uppercase tracking-widest font-bold hover:bg-gold hover:text-navy transition-all">
                                        View Property
                                    </button>
                                    <a
                                        href="https://wa.me/your-number"
                                        className="bg-gold/10 border border-gold/20 p-3 rounded-sm text-gold hover:bg-gold hover:text-navy transition-all"
                                    >
                                        <MessageCircle size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
