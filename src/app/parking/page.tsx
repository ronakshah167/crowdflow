'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Car, BatteryCharging, Shield, Map, Timer, Compass, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function ParkingPage() {
    const lots = [
        { id: 'Alpha-1', capacity: '82%', type: 'Standard', status: 'Optimal' },
        { id: 'Alpha-2', capacity: '95%', type: 'Standard', status: 'Near Full' },
        { id: 'Beta-EV', capacity: '45%', type: 'Electric Only', status: 'Available' },
        { id: 'Gamma-VIP', capacity: '30%', type: 'Premium', status: 'Reserved' },
        { id: 'Delta-Bus', capacity: '12%', type: 'Transport', status: 'Free' },
    ];

    return (
        <div className="min-h-screen bg-[#030305] text-white selection:bg-neon-blue selection:text-black font-sans">
            <nav className="p-8 sticky top-0 bg-[#030305]/80 backdrop-blur-xl z-50 border-b border-white/5">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-4 group">
                        <ArrowLeft className="w-5 h-5 text-neon-blue transition-transform group-hover:-translate-x-1" />
                        <span className="font-display font-black text-xl tracking-tighter uppercase">CROWDFLOW<span className="text-neon-blue">AI</span></span>
                    </Link>
                    <div className="px-5 py-2 rounded-full border border-white/10 bg-white/5">
                        <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">System Status: Active</span>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                    <div>
                        <h1 className="font-display text-5xl md:text-8xl font-black uppercase mb-10 leading-[0.85]">
                            Neural <br /> <span className="text-neon-blue">Logistics</span>
                        </h1>
                        <p className="text-white/30 text-base md:text-xl leading-relaxed mb-12">
                            Our autonomous parking grid redirects traffic in real-time to prevent stadium
                            bottlenecks and ensure a <span className="text-white">4.2 minute</span> average park-to-seat duration.
                        </p>
                        <div className="flex gap-4">
                            <button className="px-10 py-5 bg-neon-blue text-black font-black rounded-2xl text-[11px] uppercase tracking-[0.2em] shadow-[0_0_50px_rgba(0,242,255,0.1)]">
                                Activate Auto-Route
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-10 bg-neon-blue/10 blur-[100px] -z-10 rounded-full" />
                        <div className="p-8 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8">
                                <Compass className="w-12 h-12 text-neon-blue/20 animate-spin-slow" />
                            </div>
                            <h3 className="text-2xl font-display font-black uppercase mb-8">Grid Analysis</h3>
                            <div className="space-y-6">
                                {lots.map((lot, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className="flex justify-between items-end">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">{lot.type}</span>
                                                <span className="text-lg font-display font-black uppercase">{lot.id}</span>
                                            </div>
                                            <span className={`text-[10px] font-black uppercase tracking-widest ${lot.status === 'Optimal' ? 'text-neon-green' : 'text-neon-blue'}`}>{lot.status}</span>
                                        </div>
                                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: lot.capacity }}
                                                transition={{ duration: 1.5, delay: i * 0.2 }}
                                                className={`h-full ${parseInt(lot.capacity) > 90 ? 'bg-neon-purple' : 'bg-neon-blue'} shadow-[0_0_10px_rgba(var(--neon-blue-rgb),0.5)]`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/5 group hover:border-neon-blue/20 transition-all">
                        <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center mb-10 border border-white/10 group-hover:scale-110 transition-transform">
                            <BatteryCharging className="w-7 h-7 text-neon-green" />
                        </div>
                        <h4 className="font-display font-black text-xl uppercase mb-4">EV-Sync</h4>
                        <p className="text-white/30 text-sm leading-relaxed">Integrated charging nodes that sync with your session duration.</p>
                    </div>
                    <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/5 group hover:border-neon-blue/20 transition-all">
                        <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center mb-10 border border-white/10 group-hover:scale-110 transition-transform">
                            <Shield className="w-7 h-7 text-neon-purple" />
                        </div>
                        <h4 className="font-display font-black text-xl uppercase mb-4">Secure-Guard</h4>
                        <p className="text-white/30 text-sm leading-relaxed">Continuous thermal and visual monitoring of all docked assets.</p>
                    </div>
                    <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/5 group hover:border-neon-blue/20 transition-all">
                        <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center mb-10 border border-white/10 group-hover:scale-110 transition-transform">
                            <Timer className="w-7 h-7 text-neon-blue" />
                        </div>
                        <h4 className="font-display font-black text-xl uppercase mb-4">Eco-Flow</h4>
                        <p className="text-white/30 text-sm leading-relaxed">Proprietary logic reducing idle time and carbon output by 40%.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
