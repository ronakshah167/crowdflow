'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, User, Lock, Mail, ChevronRight, ShieldCheck, Globe } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();
    const [currentImg, setCurrentImg] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const stadiumImages = [
        'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80',
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImg((prev) => (prev + 1) % stadiumImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate login saving
        localStorage.setItem('user-session', JSON.stringify({ email, timestamp: Date.now() }));
        router.push('/dashboard');
    };

    return (
        <div className="min-h-screen bg-[#030305] text-white flex flex-col md:flex-row">
            {/* Visual Side with Stadium Images */}
            <div className="relative w-full md:w-1/2 h-64 md:h-screen overflow-hidden border-r border-white/5">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentImg}
                        src={stadiumImages[currentImg]}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 0.4, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 w-full h-full object-cover grayscale"
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-black/80 z-10" />
                <div className="absolute bottom-12 left-12 z-20 hidden md:block">
                    <h2 className="font-display font-black text-6xl uppercase tracking-tighter leading-none mb-4">
                        Autonomous <br /> <span className="text-neon-blue">Authentication</span>
                    </h2>
                    <p className="text-white/20 text-sm font-bold uppercase tracking-[0.3em]">Neural Network Node v1.0.4</p>
                </div>
            </div>

            {/* Form Side */}
            <div className="flex-1 flex items-center justify-center p-8 md:p-20 relative overflow-hidden">
                <div className="w-full max-w-md relative z-10">
                    <Link href="/" className="inline-flex items-center gap-4 group mb-16 px-5 py-2 rounded-full border border-white/5 hover:border-white/10 transition-all">
                        <ArrowLeft className="w-4 h-4 text-neon-blue group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 group-hover:text-white">Back to Hub</span>
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h1 className="text-4xl font-display font-black uppercase mb-4 tracking-tight">Access <span className="text-neon-blue">System</span></h1>
                        <p className="text-white/30 text-sm mb-12 font-medium">Authorized personnel only. Please provide your neural credentials to synchronize with the stadium grid.</p>

                        <form onSubmit={handleLogin} className="space-y-6 mb-12">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] ml-2">Protocol ID</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        placeholder="user@crowdflow.ai"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 pl-12 text-sm outline-none focus:border-neon-blue transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] ml-2">Neural Pin</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        placeholder="••••••••"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 pl-12 text-sm outline-none focus:border-neon-blue transition-all"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-5 rounded-2xl bg-white text-black font-black uppercase tracking-[0.2em] hover:bg-neon-blue transition-all shadow-[0_0_50px_rgba(255,255,255,0.05)] hover:shadow-[0_0_50px_rgba(0,242,255,0.2)]"
                            >
                                Initialize Login
                            </button>
                        </form>

                        <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-widest text-white/30">
                            <span className="cursor-pointer hover:text-white transition-colors">Emergency Reset</span>
                            <span className="cursor-pointer hover:text-white transition-colors">Request Access Card</span>
                        </div>
                    </motion.div>

                    <div className="mt-20 pt-10 border-t border-white/5 flex gap-8 justify-center grayscale opacity-10">
                        <ShieldCheck className="w-6 h-6" />
                        <Globe className="w-6 h-6" />
                        <Lock className="w-6 h-6" />
                    </div>
                </div>
            </div>
        </div>
    );
}
