'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText, Globe } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
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
                    <div className="w-20 h-20 rounded-[2rem] bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center mb-10">
                        <ShieldCheck className="w-10 h-10 text-neon-blue" />
                    </div>
                    <h1 className="font-display text-4xl md:text-7xl font-black uppercase mb-8">Privacy <br /> <span className="text-white/40">Architecture</span></h1>
                    <p className="text-white/40 text-lg md:text-xl leading-relaxed mb-20 font-medium">
                        At Crowdflow Laboratories, we treat your biological and spatial data as encrypted assets.
                        Our system design prioritizes absolute anonymity through edge-computing.
                    </p>
                </motion.div>

                <div className="space-y-32">
                    <section>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                                <Lock className="w-6 h-6 text-neon-purple" />
                            </div>
                            <h2 className="text-2xl font-display font-black uppercase tracking-tight">Data Encryption</h2>
                        </div>
                        <div className="space-y-6 text-white/50 leading-relaxed text-sm md:text-base">
                            <p>We implement military-grade AES-256 encryption for all data points traveling across our stadium network. Your personal identity remains decoupled from your spatial movements at all times.</p>
                            <p>Spatial telemetry is purged every 24 hours to ensure no persistent tracking of individual attendees occurs beyond the live event window.</p>
                        </div>
                    </section>

                    <section>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                                <Eye className="w-6 h-6 text-neon-green" />
                            </div>
                            <h2 className="text-2xl font-display font-black uppercase tracking-tight">Optical Processing</h2>
                        </div>
                        <div className="space-y-6 text-white/50 leading-relaxed text-sm md:text-base">
                            <p>Our visual sensors utilize edge-AI to convert optical streams into mathematical vectors locally on the device. No raw video feed ever enters our central cloud storage.</p>
                            <p>We analyze "Blobs" and "Vectors"—not faces. Your unique biological markers are never harvested or stored.</p>
                        </div>
                    </section>

                    <section className="p-10 rounded-[3rem] bg-white/5 border border-white/10 border-dashed">
                        <h3 className="font-display text-xl font-black uppercase mb-4">Request Data Log</h3>
                        <p className="text-white/30 text-xs mb-8">You have the right to request a full dump of all diagnostic telemetry associated with your device token.</p>
                        <button className="px-8 py-4 bg-white text-black font-black text-[10px] uppercase tracking-widest rounded-2xl">
                            Initialize Data Dump
                        </button>
                    </section>
                </div>

                <footer className="mt-40 pt-10 border-t border-white/5 text-[10px] text-white/20 uppercase font-black tracking-[0.3em]">
                    Effective: April 2026 // v1.0.4-LOCKED
                </footer>
            </main>
        </div>
    );
}
