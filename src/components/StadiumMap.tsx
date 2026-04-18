'use client';

import React, { useState, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion, AnimatePresence } from 'framer-motion';
import { OrbitControls, PerspectiveCamera, Float, Sphere, MeshDistortMaterial, Text, Line, Html, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { Search, MapPin, Navigation, Clock, User, Coffee, LogOut, ShoppingBag, Droplets, Info, ExternalLink } from 'lucide-react';

const POIS = [
    { id: 'washroom-n', name: 'Washroom North', type: 'washroom', pos: [8, 0.5, 5], wait: '2m', distance: '120m', capacity: 'Low', level: 'L1' },
    { id: 'washroom-s', name: 'Washroom South', type: 'washroom', pos: [-8, 0.5, -5], wait: '0m', distance: '150m', capacity: 'Empty', level: 'L2' },
    { id: 'prime-burgers', name: 'Prime Burgers', type: 'food', pos: [12, 0.5, 0], wait: '12m', distance: '80m', capacity: 'High', level: 'L1' },
    { id: 'arena-tacos', name: 'Arena Tacos', type: 'food', pos: [-12, 0.5, 2], wait: '18m', distance: '210m', capacity: 'Full', level: 'L1' },
    { id: 'sushi-nexus', name: 'Sushi Nexus', type: 'food', pos: [10, 0.5, -6], wait: '8m', distance: '190m', capacity: 'Med', level: 'L3' },
    { id: 'quantum-pizza', name: 'Quantum Pizza', type: 'food', pos: [-10, 0.5, 8], wait: '5m', distance: '110m', capacity: 'Low', level: 'L2' },
    { id: 'glitch-grill', name: 'Glitch Grill', type: 'food', pos: [5, 0.5, -12], wait: '25m', distance: '300m', capacity: 'Busy', level: 'L2' },
    { id: 'main-store', name: 'Stadium Store', type: 'store', pos: [0, 0.5, 12], wait: '5m', distance: '40m', capacity: 'Med', level: 'L1' },
    { id: 'gate-a', name: 'Main Exit A', type: 'exit', pos: [0, 0.5, -15], wait: '10m', distance: '300m', capacity: 'Busy', level: 'G1' },

    // Water Stations
    { id: 'water-1', name: 'Water Station 01', type: 'water', pos: [5, 0.5, 5], wait: '0m', distance: '60m', capacity: 'Clear', level: 'L1' },
    { id: 'water-2', name: 'Water Station 02', type: 'water', pos: [-5, 0.5, 5], wait: '1m', distance: '45m', capacity: 'Clear', level: 'L1' },
    { id: 'water-3', name: 'Water Station 03', type: 'water', pos: [5, 0.5, -5], wait: '0m', distance: '85m', capacity: 'Clear', level: 'L2' },
    { id: 'water-4', name: 'Water Station 04', type: 'water', pos: [-5, 0.5, -5], wait: '0m', distance: '90m', capacity: 'Clear', level: 'L2' },
    { id: 'water-5', name: 'Water Station 05', type: 'water', pos: [10, 0.5, 10], wait: '2m', distance: '130m', capacity: 'Steady', level: 'L3' },
    { id: 'water-6', name: 'Water Station 06', type: 'water', pos: [-10, 0.5, 10], wait: '0m', distance: '140m', capacity: 'Clear', level: 'L3' },
    { id: 'water-7', name: 'Water Station 07', type: 'water', pos: [10, 0.5, -10], wait: '3m', distance: '160m', capacity: 'Steady', level: 'L1' },
    { id: 'water-8', name: 'Water Station 08', type: 'water', pos: [-10, 0.5, -10], wait: '0m', distance: '170m', capacity: 'Clear', level: 'L2' },
    { id: 'water-9', name: 'Water Station 09', type: 'water', pos: [15, 0.5, 5], wait: '1m', distance: '200m', capacity: 'Clear', level: 'L4' },
    { id: 'water-10', name: 'Water Station 10', type: 'water', pos: [-15, 0.5, -5], wait: '0m', distance: '220m', capacity: 'Clear', level: 'L4' },
];

function RealisticStadium() {
    return (
        <group>
            {/* Pitch / Grass */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
                <planeGeometry args={[22, 16]} />
                <meshStandardMaterial
                    color="#1a3c1a"
                    roughness={0.8}
                    metalness={0.1}
                />
            </mesh>

            {/* Field Markings */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                <planeGeometry args={[20, 14]} />
                <meshStandardMaterial color="#ffffff" wireframe transparent opacity={0.2} />
            </mesh>

            {/* Main Seating Bowl - Realistic Architecture */}
            <group>
                {Array.from({ length: 32 }).map((_, i) => {
                    const angle = (i / 32) * Math.PI * 2;
                    const radius = 16;
                    const x = Math.cos(angle) * radius;
                    const z = Math.sin(angle) * radius;
                    return (
                        <group key={i} position={[x, 0, z]} rotation={[0, -angle + Math.PI / 2, 0]}>
                            {/* Lower Tier */}
                            <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
                                <boxGeometry args={[3, 1, 4]} />
                                <meshStandardMaterial color="#222" roughness={0.5} />
                            </mesh>
                            {/* Upper Tier */}
                            <mesh position={[0, 2.5, 2]} rotation={[-0.4, 0, 0]} castShadow receiveShadow>
                                <boxGeometry args={[3, 1, 6]} />
                                <meshStandardMaterial color="#111" roughness={0.5} />
                            </mesh>
                            {/* Support Structure */}
                            <mesh position={[0, 1, 4]} receiveShadow>
                                <boxGeometry args={[0.2, 8, 0.2]} />
                                <meshStandardMaterial color="#333" />
                            </mesh>
                        </group>
                    );
                })}
            </group>

            {/* Stadium Roof / Exterior Ring */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 6, 0]}>
                <ringGeometry args={[18, 25, 64]} />
                <meshStandardMaterial color="#111" metalness={0.8} roughness={0.2} side={THREE.DoubleSide} />
            </mesh>

            {/* Floodlights */}
            {[[-20, 10, -15], [20, 10, -15], [-20, 10, 15], [20, 10, 15]].map((pos, i) => (
                <group key={i} position={pos as [number, number, number]}>
                    <mesh>
                        <cylinderGeometry args={[0.2, 0.3, 15, 8]} />
                        <meshStandardMaterial color="#444" />
                    </mesh>
                    <pointLight intensity={5} color="#fff" />
                    <mesh position={[0, 7.5, 0]}>
                        <boxGeometry args={[1, 0.5, 2]} />
                        <meshStandardMaterial color="#666" emissive="#fff" emissiveIntensity={5} />
                    </mesh>
                </group>
            ))}
        </group>
    );
}

function Path({ start, end }: { start: [number, number, number], end: [number, number, number] }) {
    const points = useMemo(() => [
        new THREE.Vector3(...start),
        new THREE.Vector3(start[0], 0.5, end[2]),
        new THREE.Vector3(...end)
    ], [start, end]);

    return (
        <Line
            points={points}
            color="#00f2ff"
            lineWidth={3}
            transparent
            opacity={0.8}
        />
    );
}

function UserMarker({ pos }: { pos: [number, number, number] }) {
    return (
        <group position={pos}>
            <Sphere args={[0.4, 32, 32]}>
                <meshStandardMaterial color="#00f2ff" emissive="#00f2ff" emissiveIntensity={4} />
            </Sphere>
            <Html distanceFactor={10} position={[0, 1.2, 0]} center>
                <div className="bg-neon-blue text-black px-3 py-1 rounded-full text-[10px] font-black uppercase whitespace-nowrap shadow-[0_0_20px_rgba(0,242,255,0.5)]">Operator</div>
            </Html>
        </group>
    );
}

export default function StadiumMap() {
    const [search, setSearch] = useState('');
    const [destination, setDestination] = useState<typeof POIS[0] | null>(null);
    const userPos: [number, number, number] = [0, 0.5, 1];

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const query = search.toLowerCase();
        let found = POIS.find(p => p.name.toLowerCase().includes(query) || p.type.toLowerCase().includes(query));

        if (!found) {
            if (query.includes('washroom') || query.includes('toilet')) found = POIS.find(p => p.type === 'washroom');
            if (query.includes('food') || query.includes('eat') || query.includes('restaurant')) found = POIS.find(p => p.type === 'food');
            if (query.includes('water') || query.includes('drink')) found = POIS.find(p => p.type === 'water');
            if (query.includes('exit') || query.includes('out')) found = POIS.find(p => p.type === 'exit');
            if (query.includes('store') || query.includes('shop')) found = POIS.find(p => p.type === 'store');
        }

        if (found) setDestination(found);
    };

    return (
        <div className="relative w-full h-full rounded-[3rem] overflow-hidden border border-white/5 bg-[#050507] shadow-2xl">
            {/* Search HUD */}
            <div className="absolute top-8 left-8 right-8 z-30 flex flex-col gap-5 max-w-lg">
                <form onSubmit={handleSearch} className="relative">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search: washroom, water, food..."
                        className="w-full bg-black/80 backdrop-blur-2xl border border-white/10 rounded-2xl py-5 pl-16 pr-6 text-sm font-bold uppercase tracking-widest outline-none focus:border-neon-blue transition-all"
                    />
                </form>

                <AnimatePresence>
                    {destination && (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-black/90 backdrop-blur-3xl border border-white/10 p-8 rounded-[2rem] shadow-3xl flex flex-col gap-6"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-5">
                                    <div className="w-14 h-14 rounded-2xl bg-neon-blue/10 flex items-center justify-center border border-neon-blue/20">
                                        <Navigation className="w-7 h-7 text-neon-blue" />
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-black uppercase text-white/20 tracking-widest mb-1">Target Synchronized</h4>
                                        <p className="text-xl font-display font-black uppercase text-neon-blue">{destination.name}</p>
                                    </div>
                                </div>
                                <button onClick={() => setDestination(null)} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                                    <LogOut className="w-4 h-4 text-white/20" />
                                </button>
                            </div>

                            <div className="grid grid-cols-4 gap-4 pt-6 border-t border-white/5">
                                <div className="space-y-1">
                                    <span className="text-[8px] font-black text-white/20 uppercase tracking-widest flex items-center gap-1">Level</span>
                                    <p className="text-sm font-bold text-white uppercase">{destination.level}</p>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[8px] font-black text-white/20 uppercase tracking-widest flex items-center gap-1">Wait</span>
                                    <p className="text-sm font-bold text-white uppercase">{destination.wait}</p>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[8px] font-black text-white/20 uppercase tracking-widest flex items-center gap-1">Distance</span>
                                    <p className="text-sm font-bold text-white uppercase">{destination.distance}</p>
                                </div>
                                <div className="space-y-1 text-right">
                                    <span className="text-[8px] font-black text-white/20 uppercase tracking-widest flex items-center justify-end gap-1">Status</span>
                                    <p className="text-sm font-bold text-white uppercase">{destination.capacity}</p>
                                </div>
                            </div>

                            <button className="w-full py-4 bg-neon-blue text-black font-black uppercase text-[10px] tracking-widest rounded-xl hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all">
                                Open Virtual Link
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[40, 40, 40]} fov={35} />
                <OrbitControls
                    enableDamping
                    dampingFactor={0.05}
                    maxPolarAngle={Math.PI / 2.2}
                    minDistance={15}
                    maxDistance={80}
                />

                <ambientLight intensity={0.4} />
                <spotLight position={[20, 50, 10]} angle={0.15} penumbra={1} intensity={1500} castShadow />
                <Environment preset="city" />

                <RealisticStadium />
                <UserMarker pos={userPos} />

                {destination && (
                    <Path start={userPos} end={destination.pos as [number, number, number]} />
                )}

                {POIS.map((poi) => (
                    <group key={poi.id} position={poi.pos as [number, number, number]}>
                        <mesh scale={destination?.id === poi.id ? 1.5 : 1}>
                            <sphereGeometry args={[0.2, 32, 32]} />
                            <meshStandardMaterial
                                color={destination?.id === poi.id ? "#00f2ff" : "#fff"}
                                emissive={destination?.id === poi.id ? "#00f2ff" : "#000"}
                                emissiveIntensity={2}
                                roughness={0}
                            />
                        </mesh>
                        <Html distanceFactor={15} position={[0, 0.8, 0]} center>
                            <div className={`px-3 py-1 rounded-lg border border-white/5 bg-black/80 backdrop-blur-md text-[7px] font-black uppercase tracking-widest text-white/40 transition-all ${destination?.id === poi.id ? 'border-neon-blue text-white scale-125' : ''}`}>
                                {poi.name}
                            </div>
                        </Html>
                    </group>
                ))}

                <ContactShadows position={[0, -0.01, 0]} opacity={0.4} scale={50} blur={2.4} far={10} />
            </Canvas>
        </div>
    );
}
