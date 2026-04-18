'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, Clock, Utensils, Coffee, ChevronRight, Zap, Loader2, ArrowUp, ArrowRight, ArrowLeft, MoreHorizontal, User, Compass } from 'lucide-react';
import DashboardLayout from '../dashboard/layout';

// Visual Map Component
function InteractiveArenaMap({ active }: { active: boolean }) {
    return (
        <div className="relative w-full h-full bg-[#08080a] overflow-hidden flex items-center justify-center">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(#1e1e24 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            {/* Stadium Outline (Stylized) */}
            <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 w-full h-full p-10">
                {/* Outer Wall */}
                <path d="M400 50C150 50 50 150 50 300C50 450 150 550 400 550C650 550 750 450 750 300C750 150 650 50 400 50Z"
                    stroke="#ffffff05" strokeWidth="2" fill="#0b0b0d" />

                {/* Field / Center */}
                <rect x="250" y="200" width="300" height="200" rx="15" stroke="#ffffff03" strokeWidth="1" fill="#131317" />

                {/* Concourse Rings */}
                <ellipse cx="400" cy="300" rx="280" ry="180" stroke="#ffffff05" strokeWidth="1" strokeDasharray="8 8" />
                <ellipse cx="400" cy="300" rx="200" ry="130" stroke="#ffffff05" strokeWidth="1" />

                {/* Path Animation */}
                <AnimatePresence>
                    {active && (
                        <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            d="M180 430 L320 430 L320 330 L520 330 L520 220"
                            stroke="#00f2ff"
                            strokeWidth="3"
                            strokeLinecap="round"
                            className="drop-shadow-[0_0_10px_rgba(0,242,255,0.4)]"
                        />
                    )}
                </AnimatePresence>

                {/* User Marker */}
                <g transform="translate(180, 430)">
                    <circle r="6" fill="#00f2ff" className="animate-pulse" />
                    <circle r="12" stroke="#00f2ff22" strokeWidth="1" />
                    <text y="22" textAnchor="middle" fill="#00f2ff" style={{ fontSize: '10px' }} className="font-black uppercase tracking-[0.2em]">YOU</text>
                </g>

                {/* Destination Marker */}
                <g transform="translate(520, 220)">
                    <motion.g
                        initial={{ scale: 0 }}
                        animate={{ scale: active ? 1 : 0.8 }}
                    >
                        <circle r="6" fill={active ? "#ff0066" : "#ffffff10"} />
                        <motion.circle
                            animate={{ scale: [1, 2, 1], opacity: [0.2, 0.4, 0.2] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            r="15" stroke={active ? "#ff006644" : "#ffffff05"} strokeWidth="1"
                        />
                        <text y="-25" textAnchor="middle" fill={active ? "#ff0066" : "#ffffff10"} style={{ fontSize: '10px' }} className="font-black uppercase tracking-[0.2em]">GOAL</text>
                    </motion.g>
                </g>
            </svg>

            {/* Scale Indicator - Moved to Bottom Right Corner snugly */}
            <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-lg border border-white/5 backdrop-blur-sm">
                <div className="w-8 h-[1px] bg-white/10 relative">
                    <div className="absolute left-0 -top-1 w-[1px] h-2 bg-white/20" />
                    <div className="absolute right-0 -top-1 w-[1px] h-2 bg-white/20" />
                </div>
                <span className="text-[8px] font-mono text-white/30 truncate">25M</span>
            </div>

            {/* Map Controls - Vertical Strip */}
            <div className="absolute left-6 bottom-6 flex flex-col gap-1">
                <button className="w-8 h-8 rounded-lg bg-black/40 border border-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white/20 text-xs font-bold">+</button>
                <button className="w-8 h-8 rounded-lg bg-black/40 border border-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white/20 text-xs font-bold">-</button>
            </div>

            {/* Compass - Top Right Hub */}
            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/40 border border-white/5 flex items-center justify-center backdrop-blur-sm">
                <Compass className="w-5 h-5 text-white/10 animate-spin-slow" />
            </div>
        </div>
    );
}

export default function SmartNavigation() {
    const [destination, setDestination] = useState('');
    const [isCalculating, setIsCalculating] = useState(false);
    const [showDirections, setShowDirections] = useState(false);

    const routes = [
        { from: 'Current Location', to: 'Section 108', time: '4 min', distance: '280m', tags: ['Fastest'], difficulty: 'Low' },
        { from: 'Current Location', to: 'Main Entry', time: '12 min', distance: '900m', tags: ['Crowded'], difficulty: 'High' },
    ];

    const stalls = [
        { name: 'VIP Lounge', type: 'Relax', wait: '2 min', status: 'Available', color: '#00f2ff' },
        { name: 'North Concessions', type: 'Food', wait: '18 min', status: 'Heavy', color: '#ff0066' },
        { name: 'East Gate Washrooms', type: 'Service', wait: '1 min', status: 'Clear', color: '#00ffaa' },
        { name: 'Merchandise Hub', type: 'Shop', wait: '5 min', status: 'Steady', color: '#bf00ff' },
    ];

    const handleCalculate = () => {
        if (!destination) return;
        setIsCalculating(true);
        setShowDirections(false);
        setTimeout(() => {
            setIsCalculating(false);
            setShowDirections(true);
        }, 1500);
    };

    return (
        <DashboardLayout>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: Search & Routes */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="glass-card">
                        <h2 className="text-xl font-display font-bold uppercase mb-6 flex items-center gap-2">
                            <Navigation className="w-5 h-5 text-neon-blue" /> Smart Router
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-2">Start Point</label>
                                <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-neon-blue" />
                                    <span className="text-sm font-bold">My Current GPS Location</span>
                                </div>
                            </div>
                            <div className="flex justify-center -my-2 relative z-10">
                                <div className="w-8 h-8 rounded-full glass flex items-center justify-center border border-white/10">
                                    <MoreHorizontal className="w-3 h-3 text-white/20 rotate-90" />
                                </div>
                            </div>
                            <div>
                                <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-2">Destination</label>
                                <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex items-center gap-3">
                                    <MapPin className="w-4 h-4 text-gray-400" />
                                    <input
                                        type="text"
                                        value={destination}
                                        onChange={(e) => setDestination(e.target.value)}
                                        placeholder="Enter Seat, Stall, or Gate"
                                        className="bg-transparent border-none outline-none text-sm w-full font-bold placeholder:text-white/20"
                                    />
                                </div>
                            </div>
                            <button
                                onClick={handleCalculate}
                                disabled={isCalculating || !destination}
                                className="w-full py-4 bg-neon-blue text-background font-black rounded-lg uppercase tracking-widest text-xs mt-4 hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {isCalculating ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Syncing Path...
                                    </>
                                ) : (
                                    'Calculate Fastest Route'
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-[10px] font-mono text-gray-400 uppercase tracking-widest px-2">Operational Suggestions</h3>
                        {routes.map((route, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                onClick={() => { setDestination(route.to); handleCalculate(); }}
                                className={`glass-card p-4 transition-all cursor-pointer group ${destination === route.to ? 'border-neon-blue ring-1 ring-neon-blue/20' : 'hover:border-white/20'}`}
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-sm font-bold group-hover:text-neon-blue transition-colors uppercase tracking-tight">Route to {route.to}</span>
                                        <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest">{route.distance} // {route.difficulty} Traffic</span>
                                    </div>
                                    <span className="text-lg font-display text-neon-blue font-bold tracking-tighter">{route.time}</span>
                                </div>
                                <div className="flex gap-2">
                                    {route.tags.map(tag => (
                                        <span key={tag} className="px-2 py-0.5 rounded bg-neon-blue/10 border border-neon-blue/20 text-[8px] font-black text-neon-blue uppercase tracking-widest">{tag}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Center/Right: Visual Map & HUD */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="glass-card h-[480px] relative overflow-hidden p-0 border-white/5 flex flex-col">
                        {/* MAP AREA */}
                        <div className="flex-1 relative order-2 lg:order-1">
                            <InteractiveArenaMap active={showDirections} />

                            {/* MINIMAL HUD ELEMENTS (NOT OVERLAPPING CENTER) */}
                            <div className="absolute top-6 left-6 pointer-events-none">
                                <motion.div
                                    animate={{ opacity: showDirections ? 1 : 0.3 }}
                                    className="bg-black/60 backdrop-blur-xl p-3 border border-white/5 rounded-xl flex items-center gap-3"
                                >
                                    <div className={`w-1.5 h-1.5 rounded-full ${showDirections ? 'bg-neon-blue animate-pulse' : 'bg-white/10'}`} />
                                    <span className="text-[8px] font-black uppercase text-white/40 tracking-widest">
                                        {showDirections ? 'Real-Time Pathing' : 'Awaiting Destination'}
                                    </span>
                                </motion.div>
                            </div>

                            <div className="absolute top-6 right-16 pointer-events-none">
                                <motion.div
                                    animate={{ opacity: showDirections ? 1 : 0 }}
                                    className="bg-black/60 backdrop-blur-xl px-4 py-2 border border-white/5 rounded-xl flex items-center gap-4 shadow-2xl"
                                >
                                    <Clock className="w-4 h-4 text-neon-blue" />
                                    <div>
                                        <p className="text-[10px] text-white/30 font-black uppercase tracking-widest">ETA</p>
                                        <p className="text-sm font-black text-white italic">19:14 PM</p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* NAVIGATION STEP PROMPT (MOVE TO BOTTOM EDGE PANEL) */}
                            <AnimatePresence>
                                {showDirections && (
                                    <motion.div
                                        initial={{ x: 100, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        className="absolute bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-24 w-[90%] md:w-auto bg-black border border-neon-blue/20 p-4 rounded-2xl backdrop-blur-3xl shadow-3xl pointer-events-auto"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center">
                                                <Zap className="w-5 h-5 text-neon-blue" />
                                            </div>
                                            <div>
                                                <p className="text-[9px] text-neon-blue font-black uppercase tracking-[0.2em] mb-0.5">Instruction Hub</p>
                                                <p className="text-sm font-black uppercase text-white tracking-tight">Turn Right at Hub</p>
                                                <p className="text-[8px] text-white/20 font-bold uppercase tracking-widest">45m Remaining // Level 1</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="glass-card">
                            <h3 className="font-display text-lg font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
                                <Utensils className="w-5 h-5 text-neon-purple" /> Queue Intelligence
                            </h3>
                            <div className="space-y-3">
                                {stalls.map((stall, i) => (
                                    <div key={i} className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors cursor-pointer group">
                                        <div className="flex items-center gap-4">
                                            <div className="w-1 h-8 rounded-full" style={{ backgroundColor: stall.color }} />
                                            <div>
                                                <p className="text-sm font-bold group-hover:text-white transition-colors uppercase tracking-tight">{stall.name}</p>
                                                <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest">{stall.type}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-black uppercase" style={{ color: stall.color }}>{stall.wait}</p>
                                            <p className="text-[10px] text-white/20 font-black uppercase tracking-widest">{stall.status}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="glass-card bg-neon-blue/5 border-neon-blue/20 flex flex-col justify-between">
                            <div>
                                <h3 className="font-display text-lg font-black uppercase tracking-widest mb-2 text-neon-blue">Neural Rewards</h3>
                                <p className="text-[10px] text-white/30 font-black uppercase mb-8 tracking-widest">Personalized Logic Node</p>
                                <div className="flex gap-5 items-center mb-8">
                                    <div className="w-20 h-20 rounded-3xl bg-black border border-white/10 flex items-center justify-center shadow-2xl relative overflow-hidden group">
                                        <Coffee className="w-10 h-10 text-neon-blue relative z-10" />
                                        <div className="absolute inset-0 bg-neon-blue/5 group-hover:bg-neon-blue/20 transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-black uppercase tracking-tight">Free Coffee Node</h4>
                                        <p className="text-xs text-white/30 leading-relaxed max-w-[180px]">Claim your game-day espresso at StarBucks Zone B – Zero latency.</p>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full py-5 bg-white text-black font-black uppercase text-[10px] tracking-[0.2em] rounded-xl hover:bg-neon-blue hover:text-white transition-all shadow-2xl">
                                Route to Reward
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
