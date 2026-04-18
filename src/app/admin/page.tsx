'use client';

import { motion } from 'framer-motion';
import { ShieldAlert, Users, Radio, MessageSquare, AlertCircle, ChevronRight, Activity, Zap, Play, Square } from 'lucide-react';
import DashboardLayout from '../dashboard/layout';

export default function AdminPanel() {
    const staff = [
        { name: 'Marcus Chen', role: 'Security Lead', sector: 'North', status: 'Active' },
        { name: 'Sarah Miller', role: 'Crowd Marshal', sector: 'West Entry', status: 'On Break' },
        { name: 'David Ross', role: 'Floor Manager', sector: 'Concourse A', status: 'Active' },
        { name: 'Elena Vance', role: 'Guest Services', sector: 'VIP Deck', status: 'In Mission' },
    ];

    const systemStatus = [
        { label: 'AI Prediction Core', status: 'Operational', color: 'neon-green' },
        { label: 'Spatial Gateway', status: 'Syncing', color: 'neon-blue' },
        { label: 'Crowd Nodes', status: 'Active (421/421)', color: 'neon-green' },
        { label: 'Emergency Protocol', status: 'Standby', color: 'gray-500' },
    ];

    return (
        <DashboardLayout>
            <div className="space-y-8">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-display font-black tracking-tight uppercase">
                            Live <span className="text-neon-pink">Coordination</span>
                        </h1>
                        <p className="text-gray-500 font-medium font-mono text-xs uppercase tracking-widest">Access Level: <span className="text-white">Venue Administrator</span></p>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-6 py-2 bg-red-600/10 border border-red-600/30 text-red-500 text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-red-600/20 transition-all flex items-center gap-2">
                            <ShieldAlert className="w-4 h-4" /> Broadcast Emergency
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
                    {/* Status Sidebar */}
                    <div className="xl:col-span-1 space-y-6">
                        <div className="glass-card">
                            <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">System Integrity</h3>
                            <div className="space-y-4">
                                {systemStatus.map((sys, i) => (
                                    <div key={i} className="flex justify-between items-center">
                                        <span className="text-xs font-medium text-gray-300">{sys.label}</span>
                                        <span className={`text-[10px] font-bold text-${sys.color} uppercase tracking-tighter`}>{sys.status}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="glass-card">
                            <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Staff Directory</h3>
                            <div className="space-y-4">
                                {staff.map((s, i) => (
                                    <div key={i} className="flex items-center justify-between group cursor-pointer">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold group-hover:border-neon-blue transition-all">
                                                {s.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold group-hover:text-neon-blue transition-colors">Staff ID: {s.name.split(' ')[0]}</p>
                                                <p className="text-[10px] text-gray-500">{s.sector}</p>
                                            </div>
                                        </div>
                                        <div className={`w-1.5 h-1.5 rounded-full ${s.status === 'Active' ? 'bg-neon-green shadow-[0_0_5px_#39ff14]' : 'bg-gray-600'}`} />
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-6 py-2 text-[10px] font-bold uppercase tracking-widest border border-white/5 hover:bg-white/5 rounded transition-all">
                                Manage All Staff
                            </button>
                        </div>
                    </div>

                    {/* Main Control Dashboard */}
                    <div className="xl:col-span-3 space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Real-time Incident Feed */}
                            <div className="glass-card">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="font-display text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                                        <Activity className="w-4 h-4 text-neon-blue" /> Incident Log
                                    </h3>
                                    <span className="text-[10px] text-gray-500 font-mono">LIVE // UPDATING</span>
                                </div>
                                <div className="space-y-4 h-64 overflow-y-auto pr-2 custom-scrollbar">
                                    {[
                                        { time: '19:42:01', level: 'info', msg: 'System suggested alternate route for Section 302.', icon: Zap },
                                        { time: '19:35:12', level: 'warning', msg: 'Heavy congestion detected at North Gate.', icon: AlertCircle },
                                        { time: '19:28:44', level: 'staff', msg: 'Staff Marcus Chen deployed to Section 204.', icon: Radio },
                                        { time: '19:20:05', level: 'info', msg: 'Wait time at Prime Burgers optimized to 6 min.', icon: Zap },
                                    ].map((log, i) => (
                                        <div key={i} className="flex gap-4 border-l border-white/5 pl-4 pb-2 group">
                                            <span className="text-[10px] font-mono text-gray-600 mt-0.5">{log.time}</span>
                                            <div>
                                                <p className="text-xs text-gray-300 leading-relaxed group-hover:text-white transition-colors">{log.msg}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Coordination Tools */}
                            <div className="glass-card flex flex-col">
                                <h3 className="font-display text-sm font-bold uppercase tracking-wider mb-6">Execution Panel</h3>
                                <div className="flex-1 grid grid-cols-2 gap-4">
                                    <button className="flex flex-col items-center justify-center gap-3 bg-neon-blue/5 border border-neon-blue/20 rounded-xl hover:bg-neon-blue/10 transition-all p-4 group">
                                        <Zap className="w-8 h-8 text-neon-blue group-hover:scale-110 transition-transform" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">Re-Optimize Flow</span>
                                    </button>
                                    <button className="flex flex-col items-center justify-center gap-3 bg-neon-purple/5 border border-neon-purple/20 rounded-xl hover:bg-neon-purple/10 transition-all p-4 group">
                                        <Radio className="w-8 h-8 text-neon-purple group-hover:scale-110 transition-transform" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">Sync Comms</span>
                                    </button>
                                    <button className="flex flex-col items-center justify-center gap-3 bg-neon-green/5 border border-neon-green/20 rounded-xl hover:bg-neon-green/10 transition-all p-4 group">
                                        <Users className="w-8 h-8 text-neon-green group-hover:scale-110 transition-transform" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">Redeploy Marshals</span>
                                    </button>
                                    <button className="flex flex-col items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all p-4 group">
                                        <MessageSquare className="w-8 h-8 text-gray-400 group-hover:scale-110 transition-transform" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">Lobby Chat</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Dynamic Crowd Prediction Map (Top View Simple) */}
                        <div className="glass-card">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-display text-sm font-bold uppercase tracking-wider">Crowd Rerouting Controls</h3>
                                <div className="flex gap-2">
                                    <button className="p-2 glass rounded-lg border-white/5"><Play className="w-3 h-3" /></button>
                                    <button className="p-2 glass rounded-lg border-white/5"><Square className="w-3 h-3" /></button>
                                </div>
                            </div>
                            <div className="h-80 relative bg-[#050510] rounded-xl overflow-hidden border border-white/5">
                                {/* This would be a 2D Heatmap Grid */}
                                <div className="absolute inset-0 grid grid-cols-12 grid-rows-8 opacity-20">
                                    {Array.from({ length: 96 }).map((_, i) => (
                                        <div key={i} className="border border-white/5 border-dashed" />
                                    ))}
                                </div>

                                {/* Simulated Moving Crowd Blobs */}
                                <motion.div
                                    animate={{ x: [100, 300, 100], y: [50, 150, 50] }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    className="absolute w-32 h-32 bg-neon-pink/20 blur-3xl rounded-full"
                                />
                                <motion.div
                                    animate={{ x: [400, 150, 400], y: [180, 80, 180] }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute w-40 h-40 bg-neon-blue/20 blur-3xl rounded-full"
                                />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-[80%] h-[80%] border-4 border-white/5 rounded-[3rem] relative">
                                        {/* Labels */}
                                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-gray-600 uppercase">North Stand</span>
                                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-gray-600 uppercase">South Stand</span>

                                        {/* Interactive Nodes */}
                                        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-neon-green/40 border border-neon-green rounded-full cursor-pointer transition-transform hover:scale-150" />
                                        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-neon-pink/40 border border-neon-pink rounded-full cursor-pointer transition-transform hover:scale-150" />
                                        <div className="absolute top-1/2 right-1/2 w-3 h-3 bg-neon-blue/40 border border-neon-blue rounded-full cursor-pointer transition-transform hover:scale-150" />
                                    </div>
                                </div>

                                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center px-4">
                                    <div className="flex gap-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded bg-neon-green" />
                                            <span className="text-[10px] font-mono text-gray-500 uppercase">Optimal</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded bg-neon-pink" />
                                            <span className="text-[10px] font-mono text-gray-500 uppercase">Critical</span>
                                        </div>
                                    </div>
                                    <p className="text-[10px] font-mono text-white/30 truncate">Click nodes to prioritize rerouting override logic.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
