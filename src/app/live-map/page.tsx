'use client';

import Sidebar from '@/components/Sidebar';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Layers, MousePointer2, ZoomIn, Info, Eye, Zap, AlertCircle } from 'lucide-react';
import Stadium from '@/components/canvas/Stadium';
import DashboardLayout from '../dashboard/layout';

export default function LiveMapView() {
    const [activeLayer, setActiveLayer] = useState('heatmap');

    const layers = [
        { id: 'heatmap', label: 'Crowd Heatmap', icon: Zap, color: 'text-neon-blue' },
        { id: 'staff', label: 'Staff Locations', icon: Eye, color: 'text-neon-green' },
        { id: 'exits', label: 'Emergency Exits', icon: AlertCircle, color: 'text-neon-pink' },
    ];

    return (
        <DashboardLayout>
            <div className="h-full flex flex-col gap-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-display font-black tracking-tight uppercase">
                            3D <span className="text-neon-blue">Live Map</span>
                        </h1>
                        <p className="text-gray-500 font-medium">Interactive spatial twin of <span className="text-white">Crypto.com Arena</span></p>
                    </div>

                    <div className="flex bg-white/5 border border-white/10 rounded-xl p-1">
                        {layers.map((layer) => (
                            <button
                                key={layer.id}
                                onClick={() => setActiveLayer(layer.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeLayer === layer.id
                                    ? 'bg-neon-blue text-background shadow-[0_0_15px_rgba(0,242,255,0.4)]'
                                    : 'text-gray-500 hover:text-white'
                                    }`}
                            >
                                <layer.icon className="w-4 h-4" />
                                {layer.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex-1 glass-card p-0 relative overflow-hidden group">
                    {/* 3D Canvas */}
                    <div className="absolute inset-0 bg-black/40">
                        <Canvas shadows gl={{ antialias: true }}>
                            <PerspectiveCamera makeDefault position={[30, 15, 30]} fov={40} />
                            <Suspense fallback={null}>
                                <Stadium />
                                <OrbitControls
                                    makeDefault
                                    minPolarAngle={0}
                                    maxPolarAngle={Math.PI / 2.1}
                                    enableDamping
                                />
                                <Environment preset="city" />
                            </Suspense>
                        </Canvas>
                    </div>

                    {/* HUD Overlay */}
                    <div className="absolute top-6 left-6 pointer-events-none">
                        <div className="glass-card flex flex-col gap-4 p-4 pointer-events-auto">
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">System Online</span>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs text-gray-500 font-bold uppercase">Sector Efficiency</p>
                                <p className="text-xl font-display text-neon-blue font-bold">94.2%</p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-6 right-6 flex flex-col gap-3">
                        <button className="w-12 h-12 glass items-center justify-center flex rounded-xl text-white hover:text-neon-blue transition-colors border border-white/10">
                            <ZoomIn className="w-5 h-5" />
                        </button>
                        <button className="w-12 h-12 glass items-center justify-center flex rounded-xl text-white hover:text-neon-blue transition-colors border border-white/10">
                            <Layers className="w-5 h-5" />
                        </button>
                        <button className="w-12 h-12 glass items-center justify-center flex rounded-xl text-white hover:text-neon-blue transition-colors border border-white/10">
                            <Info className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Map Controls Tooltip */}
                    <div className="absolute bottom-6 left-6 flex items-center gap-2 text-[10px] font-mono text-white/30 uppercase tracking-widest">
                        <MousePointer2 className="w-3 h-3" />
                        Left Click to Rotate // Scroll to Zoom
                    </div>
                </div>

                {/* Data Panel */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="glass-card p-4">
                        <h4 className="text-[10px] font-mono text-neon-blue uppercase tracking-widest mb-3">Occupancy Sector A</h4>
                        <div className="flex items-end gap-2">
                            <span className="text-3xl font-bold">8,421</span>
                            <span className="text-[10px] text-neon-green mb-1 font-bold">+12% vs last match</span>
                        </div>
                    </div>
                    <div className="glass-card p-4">
                        <h4 className="text-[10px] font-mono text-neon-purple uppercase tracking-widest mb-3">Avg Flow Speed</h4>
                        <div className="flex items-end gap-2">
                            <span className="text-3xl font-bold">1.4 m/s</span>
                            <span className="text-[10px] text-gray-500 mb-1 font-bold">Optimized Range</span>
                        </div>
                    </div>
                    <div className="glass-card p-4 border-neon-pink/30 shadow-[0_0_15px_rgba(255,0,255,0.1)]">
                        <h4 className="text-[10px] font-mono text-neon-pink uppercase tracking-widest mb-3">Congestion Zone</h4>
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-neon-pink/10 border border-neon-pink/20">
                                <AlertCircle className="w-4 h-4 text-neon-pink" />
                            </div>
                            <span className="text-sm font-bold">Section 204 Bottleneck</span>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
