'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Play, Info, Share2, Maximize2 } from 'lucide-react';
import Link from 'next/link';

export default function TrailerPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-neon-blue selection:text-black font-sans">
            {/* Background Grain/Texture */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50 overflow-hidden" />

            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 p-8 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
                <Link href="/" className="flex items-center gap-4 group px-4 py-2 rounded-full border border-white/5 hover:border-white/20 transition-all">
                    <ArrowLeft className="w-5 h-5 text-neon-blue transition-transform group-hover:-translate-x-1" />
                    <span className="font-display font-black text-sm tracking-tighter uppercase">Return to Hub</span>
                </Link>
                <div className="flex gap-4">
                    <button className="p-3 rounded-full border border-white/5 hover:bg-white/5 transition-all">
                        <Share2 className="w-4 h-4 text-white/50" />
                    </button>
                    <button className="p-3 rounded-full border border-white/5 hover:bg-white/5 transition-all">
                        <Info className="w-4 h-4 text-white/50" />
                    </button>
                </div>
            </nav>

            <main className="relative h-screen flex flex-col justify-center items-center px-6">
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative w-full max-w-7xl aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,1)] group"
                >
                    <video
                        src="https://assets.mixkit.co/videos/preview/mixkit-stadium-lights-shining-at-night-4437-large.mp4"
                        controls
                        autoPlay
                        className="w-full h-full object-cover"
                    />

                    {/* UI Overlay on Video Hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md">
                            <Maximize2 className="w-10 h-10 text-white" />
                        </div>
                    </div>
                </motion.div>

                {/* Video Info Section */}
                <div className="w-full max-w-7xl mt-16 flex flex-col md:flex-row justify-between items-start gap-12">
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20">
                                <span className="text-[10px] text-neon-blue font-black uppercase tracking-widest">Cinema 4K</span>
                            </div>
                            <span className="text-white/20 text-xs font-mono uppercase">Version 1.0.4 // Master</span>
                        </div>
                        <h1 className="font-display text-4xl md:text-6xl font-black uppercase mb-6 leading-none">
                            Stadium Experience <span className="text-neon-blue">Architecture</span>
                        </h1>
                        <p className="text-white/30 leading-relaxed text-sm md:text-base">
                            This cinematic sequence explores the intersection of neural network monitoring and
                            live human attendance within the Apex Arena ecosystem. View how the Crowdflow
                            architecture manages the pulse of the arena in real-time.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="w-full md:w-80 grid grid-cols-1 gap-4"
                    >
                        <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                            <h4 className="text-[10px] font-bold text-white/40 uppercase mb-4 tracking-widest">Metadata</h4>
                            <div className="space-y-3">
                                <div className="flex justify-between text-xs font-mono">
                                    <span className="text-white/20">Framerate</span>
                                    <span className="text-white/60">60 FPS</span>
                                </div>
                                <div className="flex justify-between text-xs font-mono">
                                    <span className="text-white/20">Bitrate</span>
                                    <span className="text-white/60">12.4 Mbps</span>
                                </div>
                                <div className="flex justify-between text-xs font-mono">
                                    <span className="text-white/20">Audio</span>
                                    <span className="text-white/60">Spatial High</span>
                                </div>
                            </div>
                        </div>
                        <button className="w-full py-5 rounded-3xl bg-neon-blue text-black font-black text-xs uppercase tracking-[0.2em]">
                            Download Asset
                        </button>
                    </motion.div>
                </div>
            </main>

            {/* Background Glow */}
            <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-neon-blue/10 blur-[150px] -z-10 rounded-full" />
        </div>
    );
}
