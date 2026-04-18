'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Instance, Instances, Stars } from '@react-three/drei';
import * as THREE from 'three';

export default function Stadium() {
    const group = useRef<THREE.Group>(null);
    const ringRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y += 0.002;
        }
        if (ringRef.current) {
            ringRef.current.rotation.z += 0.01;
        }
    });

    // Generate particle positions for 'crowd'
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < 200; i++) {
            const angle = Math.random() * Math.PI * 2;
            const radius = 15 + Math.random() * 5;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            const y = Math.random() * 2;
            temp.push({ x, y, z, scale: Math.random() * 0.5 });
        }
        return temp;
    }, []);

    return (
        <group ref={group}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            {/* Stadium Base */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
                <cylinderGeometry args={[20, 25, 2, 64]} />
                <meshStandardMaterial color="#0a0a1a" roughness={0.1} metalness={0.8} />
            </mesh>

            {/* Field */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.9, 0]}>
                <planeGeometry args={[25, 15]} />
                <meshStandardMaterial
                    color="#001100"
                    emissive="#39ff14"
                    emissiveIntensity={0.1}
                    roughness={0.4}
                />
            </mesh>

            {/* Walls / Stands */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 2, 0]}>
                <torusGeometry args={[18, 2, 16, 100]} />
                <meshStandardMaterial
                    color="#1a1a2e"
                    emissive="#00f2ff"
                    emissiveIntensity={0.2}
                    transparent
                    opacity={0.8}
                />
            </mesh>

            {/* Holographic Ring */}
            <mesh ref={ringRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 8, 0]}>
                <torusGeometry args={[22, 0.1, 16, 100]} />
                <meshBasicMaterial color="#00f2ff" transparent opacity={0.5} />
            </mesh>

            {/* Crowd Flow Particles */}
            <Instances range={200}>
                <boxGeometry args={[0.2, 0.2, 0.2]} />
                <meshStandardMaterial color="#bc13fe" emissive="#bc13fe" emissiveIntensity={2} />
                {particles.map((p, i) => (
                    <Instance
                        key={i}
                        position={[p.x, p.y, p.z]}
                        scale={p.scale}
                    />
                ))}
            </Instances>

            {/* Lighting */}
            <pointLight position={[0, 10, 0]} intensity={1.5} color="#00f2ff" />
            <pointLight position={[10, 5, 10]} intensity={1} color="#bc13fe" />
            <pointLight position={[-10, 5, -10]} intensity={1} color="#39ff14" />
            <ambientLight intensity={0.2} />
        </group>
    );
}
