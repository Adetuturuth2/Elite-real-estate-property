"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";
import { MapPin, Search, Filter, Layers, Navigation as NavIcon, MessageCircle } from "lucide-react";

const containerStyle = {
    width: "100%",
    height: "100%",
};

const center = {
    lat: 40.7128,
    lng: -74.006,
};

const properties = [
    {
        id: 1,
        lat: 40.7128,
        lng: -74.006,
        title: "Skyline Royale Penthouse",
        price: "$3,450,000",
        type: "Buy",
        color: "#C6A75E",
        image: "https://images.unsplash.com/photo-1567496898731-f39b119108d4?q=80&w=400&auto=format&fit=crop"
    },
    {
        id: 2,
        lat: 40.7589,
        lng: -73.9851,
        title: "Elite Business Plaza",
        price: "$45/sqft",
        type: "Lease",
        color: "#F97316",
        image: "https://images.unsplash.com/photo-1497366216548-fa86236b1c2a?q=80&w=400&auto=format&fit=crop"
    },
    {
        id: 3,
        lat: 40.7829,
        lng: -73.9654,
        title: "Central Park Suite",
        price: "$8,500/mo",
        type: "Rent",
        color: "#3B82F6",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400&auto=format&fit=crop"
    },
];

export default function MapPage() {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "", // Placeholder
    });

    const [selected, setSelected] = useState<typeof properties[0] | null>(null);

    return (
        <main className="h-screen bg-navy flex flex-col overflow-hidden">
            <Navbar />

            <div className="flex-1 mt-20 flex flex-col lg:flex-row">
                {/* Sidebar */}
                <div className="w-full lg:w-[400px] border-r border-white/5 bg-premium-dark flex flex-col z-20">
                    <div className="p-6 border-b border-white/5">
                        <div className="relative">
                            <Search className="absolute left-3 top-3 text-gold/50" size={16} />
                            <input
                                type="text"
                                placeholder="Search City or Estate..."
                                className="w-full bg-white/5 border border-white/10 text-white p-3 pl-10 rounded-sm focus:border-gold outline-none text-sm"
                            />
                        </div>

                        <div className="flex gap-2 mt-4">
                            {['Buy', 'Rent', 'Lease'].map(type => (
                                <button key={type} className="flex-1 border border-white/10 py-2 rounded-sm text-[10px] uppercase font-bold tracking-widest hover:border-gold hover:text-gold transition-all">
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                        {properties.map((p) => (
                            <div
                                key={p.id}
                                onClick={() => setSelected(p)}
                                className={`glass group rounded-sm border-l-4 hover:border-gold transition-all cursor-pointer flex gap-4 p-3 ${selected?.id === p.id ? "border-gold bg-white/10" : "border-transparent"}`}
                            >
                                <div className="w-24 h-24 shrink-0 overflow-hidden rounded-sm">
                                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className="text-white text-sm font-serif truncate pr-2">{p.title}</h4>
                                    </div>
                                    <div className="flex items-center text-white/40 text-[10px] mb-2 uppercase tracking-widest">
                                        <MapPin size={10} className="mr-1 text-gold" />
                                        Manhattan, NY
                                    </div>
                                    <div className="flex justify-between items-end mt-auto">
                                        <span className="text-gold font-serif text-sm">{p.price}</span>
                                        <span className="text-[9px] uppercase tracking-tighter text-white/30 bg-white/5 px-2 py-0.5">{p.type}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Map Area */}
                <div className="flex-1 relative bg-navy/50">
                    {!isLoaded ? (
                        <div className="absolute inset-0 flex items-center justify-center text-gold/30 flex-col space-y-4">
                            <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin" />
                            <p className="text-sm uppercase tracking-[0.3em] font-bold">Initializing Luxury Vision...</p>
                            <p className="text-[10px] text-white/20 italic">(Please set GOOGLE_MAPS_API_KEY in environment)</p>
                        </div>
                    ) : (
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={13}
                            options={{
                                styles: [
                                    { elementType: "geometry", stylers: [{ color: "#0B1C2D" }] },
                                    { elementType: "labels.text.stroke", stylers: [{ color: "#0B1C2D" }] },
                                    { elementType: "labels.text.fill", stylers: [{ color: "#C6A75E" }] },
                                    // ... Dark mode map styles ...
                                ],
                                disableDefaultUI: true,
                                zoomControl: true,
                            }}
                        >
                            {properties.map(p => (
                                <Marker
                                    key={p.id}
                                    position={{ lat: p.lat, lng: p.lng }}
                                    onClick={() => setSelected(p)}
                                    icon={{
                                        path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",
                                        fillColor: p.color,
                                        fillOpacity: 1,
                                        strokeColor: "#ffffff",
                                        strokeWeight: 2,
                                        scale: 1.5
                                    }}
                                />
                            ))}

                            {selected && (
                                <InfoWindow
                                    position={{ lat: selected.lat, lng: selected.lng }}
                                    onCloseClick={() => setSelected(null)}
                                >
                                    <div className="p-2 min-w-[200px]">
                                        <h4 className="text-navy font-bold">{selected.title}</h4>
                                        <p className="text-navy/70 text-sm mb-2">{selected.price}</p>
                                        <button className="w-full bg-navy text-white py-2 text-xs font-bold uppercase tracking-widest hover:bg-gold">
                                            Contact Agent
                                        </button>
                                    </div>
                                </InfoWindow>
                            )}
                        </GoogleMap>
                    )}

                    {/* Map Controls Floating */}
                    <div className="absolute top-6 right-6 flex flex-col space-y-3 z-10">
                        <button className="glass p-3 text-gold hover:bg-gold hover:text-navy transition-all shadow-xl">
                            <Layers size={20} />
                        </button>
                        <button className="glass p-3 text-gold hover:bg-gold hover:text-navy transition-all shadow-xl">
                            <NavIcon size={20} />
                        </button>
                        <button className="glass p-3 text-gold hover:bg-gold hover:text-navy transition-all shadow-xl">
                            <Filter size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
