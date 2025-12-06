'use client';

import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

function DataStream({ scrollSpeed }: { scrollSpeed: React.MutableRefObject<number> }) {
    const lineCount = 50;
    const particleCount = 200;

    // Create grid lines
    const lines = useMemo(() => {
        const temp = [];
        for (let i = 0; i < lineCount; i++) {
            const x = (Math.random() - 0.5) * 40;
            const z = (Math.random() - 0.5) * 20; // depth
            const length = 20 + Math.random() * 20;
            temp.push({ x, z, length, speed: 0.1 + Math.random() * 0.2 });
        }
        return temp;
    }, []);

    // Use instanced mesh for particles for performance
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const lightRef = useRef<THREE.Group>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);

    // Initial positions
    const particles = useMemo(() => {
        return new Array(particleCount).fill(0).map(() => ({
            lineIndex: Math.floor(Math.random() * lineCount),
            y: (Math.random() - 0.5) * 40,
            speedOffset: 0.5 + Math.random()
        }));
    }, [lines]);

    useFrame((state, delta) => {
        if (!meshRef.current) return;

        // Dampen scroll speed influence back to 0
        scrollSpeed.current = THREE.MathUtils.lerp(scrollSpeed.current, 0, 0.05);
        const boost = 1 + Math.abs(scrollSpeed.current) * 5; // Speed multiplier

        particles.forEach((p, i) => {
            const line = lines[p.lineIndex];

            // Move particle
            p.y -= delta * 5 * line.speed * p.speedOffset * boost;

            // Reset if out of bounds
            if (p.y < -20) p.y = 20;

            dummy.position.set(line.x, p.y, line.z);
            dummy.scale.set(0.1, 0.8 * boost, 0.1); // Stretch when fast
            dummy.updateMatrix();
            meshRef.current!.setMatrixAt(i, dummy.matrix);
        });
        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <>
            <instancedMesh ref={meshRef} args={[undefined, undefined, particleCount]}>
                <capsuleGeometry args={[0.1, 1, 4, 8]} />
                <meshBasicMaterial color="#00ffff" toneMapped={false} />
            </instancedMesh>

            {/* Background Grid Lines (Static) */}
            <group>
                {lines.map((line, i) => (
                    <mesh key={i} position={[line.x, 0, line.z]}>
                        <boxGeometry args={[0.05, 40, 0.05]} />
                        <meshBasicMaterial color="#4c1d95" opacity={0.2} transparent />
                    </mesh>
                ))}
            </group>
        </>
    );
}

export const FiberOpticBackground = () => {
    const scrollSpeed = useRef(0);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            const current = window.scrollY;
            const delta = current - lastScrollY;
            scrollSpeed.current = delta * 0.01; // Sensitivity
            lastScrollY = current;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed inset-0 z-0 bg-black">
            <Canvas camera={{ position: [0, 0, 15], fov: 60 }} gl={{ antialias: false }}>
                <color attach="background" args={['#050505']} />
                <fog attach="fog" args={['#050505', 10, 30]} />

                <DataStream scrollSpeed={scrollSpeed} />

                <EffectComposer>
                    <Bloom luminanceThreshold={0.5} intensity={2} radius={0.8} />
                </EffectComposer>
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />
        </div>
    );
};
