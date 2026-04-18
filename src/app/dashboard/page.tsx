'use client';

import { motion } from 'framer-motion';
import { Users, Timer, Navigation, Zap, AlertTriangle, Coffee, MapPin, Compass, Droplets } from 'lucide-react';
import StadiumMap from '@/components/StadiumMap';

const StatCard = ({ icon: Icon, label, value, color }: any) => (
    <div className="bg-white/5 border border-white/5 p-6 rounded-[2rem] flex flex-col gap-4 hover:border-white/10 transition-all group">
        <div className={`w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center group-hover:border-${color}/40 transition-colors`}>
            <Icon className={`w-6 h-6 text-${color}`} />
        </div>
        <div>
            <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">{label}</p>
            <h3 className="text-2xl font-display font-black mt-1 uppercase">{value}</h3>
        </div>
    </div>
);

export default function Dashboard() {
    return (
        <div className="space-y-8 pb-20">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight uppercase leading-none">
                        Commander <span className="text-neon-blue">Module</span>
                    </h1>
                </div>
                <div className="flex gap-4">
                    <div className="px-6 py-3 rounded-2xl bg-white text-black font-display font-black text-xs uppercase tracking-widest hover:bg-neon-blue transition-all cursor-pointer">
                        Sync Neural Link
                    </div>
                </div>
            </div>

            {/* Main Viewport Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
                {/* 3D Map Viewport - TAKES MOST SPACE */}
                <div className="xl:col-span-3 h-[600px] md:h-[750px] relative">
                    <StadiumMap />
                    <div className="absolute top-6 right-6 z-30 pointer-events-none">
                        <div className="bg-black/90 backdrop-blur-3xl border border-white/10 p-4 rounded-2xl flex items-center gap-4 shadow-2xl">
                            <Navigation className="w-4 h-4 text-neon-blue" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Neural Pathfinding Active</span>
                        </div>
                    </div>
                </div>

                {/* Simplified Sidebar with Actions & Status */}
                <div className="xl:col-span-1 space-y-6">
                    {/* Live Recommendations - Replaced charts */}
                    <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/5 h-full flex flex-col">
                        <h3 className="font-display text-xl font-bold uppercase tracking-wider mb-8 flex items-center gap-3 text-neon-blue">
                            Neural Stream
                        </h3>
                        <div className="flex-1 space-y-6 overflow-y-auto pr-2 custom-scrollbar">
                            {[
                                { title: 'Optimal Path: Gate B', desc: 'Main route detected high congestion. Gate B reduces travel by 4 mins.', color: 'neon-green' },
                                { title: 'Sustenance Opportunity', desc: 'Sushi Express currently has 0 wait time in your sector.', color: 'neon-blue' },
                                { title: 'Crowd Wave Detected', desc: 'Slight density increase at Section 102. Advising slight detour.', color: 'neon-purple' },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative pl-6 border-l border-white/10 group cursor-default"
                                >
                                    <div className={`absolute left-[-1px] top-0 h-4 w-[2px] bg-${item.color}`} />
                                    <h4 className="text-sm font-bold text-white mb-2 uppercase group-hover:text-neon-blue transition-colors">{item.title}</h4>
                                    <p className="text-xs text-white/30 leading-relaxed font-medium">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/5">
                            <h4 className="text-[10px] font-black uppercase text-white/20 mb-6 tracking-widest">Closest Logic Nodes</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-2xl bg-black border border-white/10 text-center">
                                    <Droplets className="w-5 h-5 text-neon-blue mx-auto mb-2" />
                                    <span className="block text-[8px] font-black text-white/30 uppercase">Washrooms</span>
                                    <span className="font-bold text-xs">200m</span>
                                </div>
                                <div className="p-4 rounded-2xl bg-black border border-white/10 text-center">
                                    <Coffee className="w-5 h-5 text-neon-green mx-auto mb-2" />
                                    <span className="block text-[8px] font-black text-white/30 uppercase">Dining</span>
                                    <span className="font-bold text-xs">50m</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fast-Link Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    icon={Users}
                    label="Current Sector Load"
                    value="18,432"
                    color="neon-blue"
                />
                <StatCard
                    icon={Timer}
                    label="Wait Delta"
                    value="-4.2 min"
                    color="neon-green"
                />
                <StatCard
                    icon={Compass}
                    label="Spatial Accuracy"
                    value="99.9%"
                    color="neon-purple"
                />
                <StatCard
                    icon={AlertTriangle}
                    label="Threat Level"
                    value="Stable"
                    color="neon-pink"
                />
            </div>

            {/* Dining Quick-Select */}
            <div className="p-10 rounded-[3rem] bg-white/5 border border-white/5">
                <div className="flex justify-between items-center mb-10">
                    <h3 className="font-display text-2xl font-black uppercase">Live <span className="text-neon-blue">Sustenance</span> Wait Times</h3>
                    <div className="flex gap-2">
                        <div className="px-4 py-1.5 rounded-full border border-white/10 text-[9px] font-black uppercase">All Categories</div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        { name: 'Prime Burgers', wait: '8m', loc: 'Section 102', color: 'neon-green' },
                        { name: 'Arena Tacos', wait: '15m', loc: 'Section 104', color: 'neon-pink' },
                        { name: 'Sushi Express', wait: '0m', loc: 'Sector A', color: 'neon-blue' },
                        { name: 'Beer Garden', wait: '12m', loc: 'Rooftop', color: 'neon-purple' },
                    ].map((item, i) => (
                        <div key={i} className="p-6 rounded-3xl bg-black border border-white/5 hover:border-white/20 transition-all group">
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-start">
                                    <span className={`text-[10px] font-black uppercase tracking-widest text-${item.color}`}>{item.loc}</span>
                                    <div className="w-1.5 h-1.5 rounded-full bg-neon-green" />
                                </div>
                                <h4 className="text-lg font-display font-bold uppercase">{item.name}</h4>
                                <div className="flex items-center gap-2">
                                    <Timer className="w-3 h-3 text-white/20" />
                                    <span className="font-black text-xl">{item.wait}</span>
                                    <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Wait</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
