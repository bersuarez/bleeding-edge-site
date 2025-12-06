'use client';

import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Environment, ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';

// --- Rack Unit Component ---
function RackUnit({ position, uIndex, onHover }: { position: [number, number, number], uIndex: number, onHover: (idx: number | null) => void }) {
    const meshRef = useRef<THREE.Group>(null);
    const [hovered, setHovered] = useState(false);
    const [hasServer, setHasServer] = useState(false);

    // Deterministic "random" server placement/types
    useMemo(() => {
        const random = Math.sin(uIndex * 9999);
        setHasServer(random > -0.2); // 60% chance of having a server
    }, [uIndex]);

    useFrame((state, delta) => {
        if (meshRef.current) {
            // Slide out effect
            const targetX = hovered ? 0.5 : 0;
            meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, position[0] + targetX, delta * 8);

            // Pulse LED effect if server exists
            if (hasServer && uIndex % 3 === 0) {
                // Just simulation, logic handled in material ideally but kept simple here
            }
        }
    });

    if (!hasServer) return null; // Empty slot

    return (
        <group
            ref={meshRef}
            position={position}
            onPointerOver={(e) => { e.stopPropagation(); setHovered(true); onHover(uIndex); }}
            onPointerOut={() => { setHovered(false); onHover(null); }}
        >
            {/* Server Chassis */}
            <mesh>
                <boxGeometry args={[3.8, 0.18, 2.5]} />
                <meshStandardMaterial
                    color={hovered ? "#222" : "#111"}
                    metalness={0.8}
                    roughness={0.2}
                    emissive={hovered ? "#200000" : "#000"}
                />
            </mesh>

            {/* Front Panel LEDs */}
            <mesh position={[1.8, 0, 1.26]}>
                <boxGeometry args={[0.1, 0.1, 0.05]} />
                <meshBasicMaterial color={hovered ? "#ff0000" : "#00ff00"} />
            </mesh>

            {/* Grill Texture Simulation (Stripes) */}
            <mesh position={[0, 0, 1.26]}>
                <planeGeometry args={[3.6, 0.14]} />
                <meshBasicMaterial color="#000" opacity={0.5} transparent />
            </mesh>
        </group>
    );
}

// --- Main Rack Assembly ---
function Rack({ onUnitHover }: { onUnitHover: (idx: number | null) => void }) {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            // Subtle Mouse Parallax
            const x = state.pointer.x * 0.2;
            const y = state.pointer.y * 0.1;
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x, 0.1);
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y, 0.1);
        }
    });

    return (
        <group ref={groupRef}>
            {/* Rack Frame */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[4.2, 9, 2.8]} />
                <meshPhysicalMaterial
                    color="#050505"
                    metalness={0.9}
                    roughness={0.5}
                    transparent
                    opacity={0.3}
                    wireframe
                />
            </mesh>

            {/* Rack Posts */}
            <mesh position={[-2.1, 0, 1.4]}> <boxGeometry args={[0.1, 9, 0.1]} /> <meshStandardMaterial color="#333" /> </mesh>
            <mesh position={[2.1, 0, 1.4]}> <boxGeometry args={[0.1, 9, 0.1]} /> <meshStandardMaterial color="#333" /> </mesh>
            <mesh position={[-2.1, 0, -1.4]}> <boxGeometry args={[0.1, 9, 0.1]} /> <meshStandardMaterial color="#333" /> </mesh>
            <mesh position={[2.1, 0, -1.4]}> <boxGeometry args={[0.1, 9, 0.1]} /> <meshStandardMaterial color="#333" /> </mesh>

            {/* Units */}
            {[...Array(42)].map((_, i) => (
                <RackUnit
                    key={i}
                    uIndex={i + 1}
                    position={[0, -4.2 + (i * 0.205), 0]} // Stack 'em up
                    onHover={onUnitHover}
                />
            ))}
        </group>
    );
}

export const ServerRack3D = () => {
    const [hoveredUnit, setHoveredUnit] = useState<number | null>(null);

    const getUnitSpecs = (u: number) => {
        // Generate deterministic fake specs based on U number
        if (!u) return null;
        const types = ['AI Training Node', 'Storage Array', 'Inference Unit', 'Network Core'];
        const type = types[u % types.length];
        return {
            id: `U${u}`,
            type,
            power: `${(u * 50 + 500)}W`,
            status: u % 5 === 0 ? 'MAINTENANCE' : 'ONLINE'
        };
    };

    const specs = hoveredUnit ? getUnitSpecs(hoveredUnit) : null;

    return (
        <div className="w-full h-[600px] relative">
            <Canvas camera={{ position: [5, 0, 8], fov: 45 }}>
                <fog attach="fog" args={['#000', 5, 20]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#ff0000" distance={20} />
                <spotLight position={[-10, 10, 5]} angle={0.3} penumbra={1} intensity={2} color="#444" />

                <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                    <Rack onUnitHover={setHoveredUnit} />
                </Float>

                <ContactShadows resolution={1024} scale={20} blur={2} opacity={0.5} far={10} color="#ff0000" />
                <Environment preset="city" />
            </Canvas>

            {/* HTML Overlay for Specs */}
            {specs && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20">
                    {/* We offset it slightly so it appears next to the rack or on top */}
                    <div className="transform translate-x-[200px] bg-black/80 backdrop-blur-md border border-red-500/50 p-4 rounded-xl shadow-[0_0_30px_rgba(255,0,0,0.2)] text-left w-64 animate-in fade-in slide-in-from-left-4 duration-200">
                        <div className="flex justify-between items-center mb-2 border-b border-white/10 pb-2">
                            <h3 className="text-red-500 font-bold font-mono text-xl">{specs.id}</h3>
                            <span className={`text-[10px] px-2 py-0.5 rounded-full ${specs.status === 'ONLINE' ? 'bg-green-500/20 text-green-500' : 'bg-yellow-500/20 text-yellow-500'}`}>
                                {specs.status}
                            </span>
                        </div>
                        <div className="space-y-1 text-sm font-mono">
                            <div className="flex justify-between text-gray-400"><span>Type:</span> <span className="text-white">{specs.type}</span></div>
                            <div className="flex justify-between text-gray-400"><span>Power:</span> <span className="text-white">{specs.power}</span></div>
                            <div className="flex justify-between text-gray-400"><span>Uplink:</span> <span className="text-white">2x 100GbE</span></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
