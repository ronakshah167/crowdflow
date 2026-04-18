'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Cookie, Settings, Shield, Clock } from 'lucide-react';
import Link from 'next/link';

export default function CookiesPage() {
    return (
        <div className="min-h-screen bg-[#030305] text-white selection:bg-neon-blue selection:text-black font-sans">
            <nav className="p-8 border-b border-white/5">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-4 group">
                        <ArrowLeft className="w-5 h-5 text-neon-blue transition-transform group-hover:-translate-x-1" />
                        <span className="font-display font-black text-xl tracking-tighter uppercase">CROWDFLOW<span className="text-neon-blue">AI</span></span>
                    </Link>
                </div>
            </nav>

            <main className="max-w-4xl mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="w-20 h-20 rounded-[2rem] bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center mb-10">
                        <Cookie className="w-10 h-10 text-neon-purple" />
                    </div>
                    <h1 className="font-display text-4xl md:text-7xl font-black uppercase mb-8">Cookie <br /> <span className="text-white/40">Manifest</span></h1>
                    <p className="text-white/40 text-lg md:text-xl leading-relaxed mb-20 font-medium">
                        To maintain high-fidelity synchronization with the arena, we utilize small data
                        nodes (cookies) to persist state across your attendance window.
                    </p>
                </motion.div>

                <div className="space-y-16">
                    <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-4">
                                <Settings className="w-6 h-6 text-neon-blue" />
                                <h3 className="text-xl font-display font-black uppercase">Functional Nodes</h3>
                            </div>
                            <div className="w-12 h-6 rounded-full bg-neon-blue/20 border border-neon-blue/30 flex items-center px-1">
                                <div className="w-4 h-4 rounded-full bg-neon-blue shadow-[0_0_10px_rgba(0,242,255,0.8)] translate-x-6 transition-transform" />
                            </div>
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed">Essential for venue authentication and real-time dashboard persistence. These cannot be deactivated without compromising core-logic entry.</p>
                    </div>

                    <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-4">
                                <Shield className="w-6 h-6 text-neon-purple" />
                                <h3 className="text-xl font-display font-black uppercase">Security Nodes</h3>
                            </div>
                            <div className="w-12 h-6 rounded-full bg-neon-blue/20 border border-white/10 flex items-center px-1">
                                <div className="w-4 h-4 rounded-full bg-neon-blue shadow-[0_0_10px_rgba(0,242,255,0.8)] translate-x-6 transition-transform" />
                            </div>
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed">Used to detect and prevent unauthorized access attempts and maintain the integrity of our neural network.</p>
                    </div>

                    <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-4">
                                <Clock className="w-6 h-6 text-neon-green" />
                                <h3 className="text-xl font-display font-black uppercase">Expiring Nodes</h3>
                            </div>
                            <div className="w-12 h-6 bg-white/5 rounded-full border border-white/10 flex items-center px-1 cursor-pointer">
                                <div className="w-4 h-4 rounded-full bg-white/20 transition-transform" />
                            </div>
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed">Optional diagnostic data used to improve future venue iterations. These nodes expire 7 days post-event.</p>
                    </div>
                </div>

                <div className="mt-20 flex gap-4">
                    <button className="px-10 py-5 bg-white text-black font-black text-[11px] uppercase tracking-[0.2em] rounded-2xl">
                        Accept Logic
                    </button>
                    <button className="px-10 py-5 border border-white/10 text-white/50 font-black text-[11px] uppercase tracking-[0.2em] rounded-2xl">
                        Wipe Local Buffer
                    </button>
                </div>
            </main>
        </div>
    );
}
