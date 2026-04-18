'use client';

import { motion } from 'framer-motion';
import { Wine, Star, Users, ShieldCheck, ChevronRight, ArrowLeft, Gem } from 'lucide-react';
import Link from 'next/link';

export default function HospitalityPage() {
    const suites = [
        { name: 'Executive Terrace', capacity: '20-30 Guests', features: ['Private Balcony', 'Premium Catering', 'VIP Entrance'] },
        { id: 'Club Lounge', capacity: 'Unlimited', features: ['All-inclusive F&B', 'Padded Seats', 'Private Restrooms'] },
        { name: 'Field Cabanas', capacity: '10-20 Guests', features: ['Field Access', 'Personal Host', 'Luxury Seating'] },
    ];

    return (
        <div className="min-h-screen bg-[#030305] text-white font-sans">
            <nav className="p-8 sticky top-0 bg-[#030305]/80 backdrop-blur-xl z-50 border-b border-white/5">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-4 group">
                        <ArrowLeft className="w-5 h-5 text-neon-blue transition-transform group-hover:-translate-x-1" />
                        <span className="font-display font-black text-xl tracking-tighter uppercase text-white">CROWDFLOW</span>
                    </Link>
                    <button className="px-6 py-2 bg-neon-blue text-black font-black text-[10px] uppercase tracking-widest rounded-lg hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all">
                        Inquire Now
                    </button>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-24">
                <div className="flex flex-col items-center text-center mb-32">
                    <div className="w-20 h-20 rounded-3xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center mb-10 shadow-[0_0_50px_rgba(0,242,255,0.1)]">
                        <Gem className="w-10 h-10 text-neon-blue" />
                    </div>
                    <h1 className="font-display text-6xl md:text-[7rem] font-black uppercase mb-10 leading-[0.85]">
                        Hospitality <br /> <span className="text-neon-blue">Nodes</span>
                    </h1>
                    <p className="text-white/30 text-xl max-w-2xl leading-relaxed">
                        Elevated sanctuaries designed for high-throughput networking and premium athletic immersion.
                        Experience the zenith of venue hospitality.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {suites.map((suite, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-10 rounded-[3rem] bg-white/5 border border-white/5 hover:border-neon-blue/30 transition-all duration-500"
                        >
                            <h3 className="text-2xl font-display font-black uppercase mb-2 text-white">{suite.name}</h3>
                            <p className="text-[10px] font-bold text-neon-blue uppercase tracking-widest mb-10">{suite.capacity}</p>

                            <ul className="space-y-4 mb-12">
                                {suite.features.map((feat, j) => (
                                    <li key={j} className="flex items-center gap-3 text-sm text-white/40 group-hover:text-white transition-colors">
                                        <div className="w-1 h-1 rounded-full bg-neon-blue" /> {feat}
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-4 bg-black/40 border border-white/10 rounded-2xl flex items-center justify-between px-6 group-hover:border-neon-blue/40 transition-all">
                                <span className="text-[10px] font-black uppercase tracking-widest">Detail Matrix</span>
                                <ChevronRight className="w-4 h-4 text-neon-blue group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-40 grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/5 p-12 md:p-24 rounded-[4rem] border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-blue/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div>
                        <h2 className="text-4xl md:text-6xl font-display font-black uppercase mb-12">Elite <br /> Service</h2>
                        <div className="space-y-10">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center shrink-0">
                                    <ShieldCheck className="w-6 h-6 text-neon-blue" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Dedicated Concierge</h4>
                                    <p className="text-white/30 text-sm">Personal staff at every node to ensure seamless asset delivery and support.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-xl bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center shrink-0">
                                    <Star className="w-6 h-6 text-neon-purple" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Pre-Event Access</h4>
                                    <p className="text-white/30 text-sm">Enter the arena through private gateways 2 hours prior to node initialization.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
