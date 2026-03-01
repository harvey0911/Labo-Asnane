import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

export const ToothModel = () => {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <group ref={meshRef}>
            {/* Tooth Crown */}
            <mesh position={[0, 0.5, 0]} castShadow>
                <sphereGeometry args={[1, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
                <meshStandardMaterial
                    color="#ffffff"
                    roughness={0.1}
                    metalness={0.05}
                    envMapIntensity={2}
                />
            </mesh>
            {/* Roots */}
            <mesh position={[-0.4, -0.4, 0]} rotation={[0, 0, 0.2]} castShadow>
                <cylinderGeometry args={[0.4, 0.1, 1.2, 16]} />
                <meshStandardMaterial color="#f8fafc" roughness={0.3} />
            </mesh>
            <mesh position={[0.4, -0.4, 0]} rotation={[0, 0, -0.2]} castShadow>
                <cylinderGeometry args={[0.4, 0.1, 1.2, 16]} />
                <meshStandardMaterial color="#f8fafc" roughness={0.3} />
            </mesh>
        </group>
    );
};

export const ImplantModel = () => {
    const meshRef = useRef();

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <group ref={meshRef}>
            {/* Abutment */}
            <mesh position={[0, 1, 0]} castShadow>
                <cylinderGeometry args={[0.6, 0.6, 0.5, 32]} />
                <meshStandardMaterial color="#e2e8f0" metalness={1} roughness={0.2} />
            </mesh>
            {/* Screw Body */}
            <mesh position={[0, -0.2, 0]} castShadow>
                <cylinderGeometry args={[0.5, 0.3, 2, 32]} />
                <meshStandardMaterial color="#94a3b8" metalness={1} roughness={0.3} />
            </mesh>
            {/* Threads (simplified) */}
            {[...Array(6)].map((_, i) => (
                <mesh key={i} position={[0, -0.8 + i * 0.3, 0]} rotation={[0.1, 0, 0]}>
                    <torusGeometry args={[0.52, 0.05, 16, 32]} />
                    <meshStandardMaterial color="#64748b" metalness={1} roughness={0.3} />
                </mesh>
            ))}
        </group>
    );
};

export const CrownModel = () => {
    const meshRef = useRef();

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <group ref={meshRef}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh castShadow>
                    <cylinderGeometry args={[0.8, 1, 1.2, 32, 1, false, 0, Math.PI * 2]} />
                    <MeshDistortMaterial
                        color="#60a5fa"
                        speed={2}
                        distort={0.2}
                        radius={1}
                        roughness={0}
                        metalness={0.5}
                        transparent
                        opacity={0.8}
                    />
                </mesh>
            </Float>
            {/* Inner Connector */}
            <mesh position={[0, -0.4, 0]}>
                <cylinderGeometry args={[0.4, 0.4, 0.8, 16]} />
                <meshStandardMaterial color="#f1f5f9" metalness={0.8} />
            </mesh>
        </group>
    );
};
