import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Stage, PerspectiveCamera, Html, useProgress } from '@react-three/drei';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

const Model = ({ url }) => {
    const geom = useLoader(STLLoader, url);
    const meshRef = useRef();

    React.useMemo(() => {
        if (geom) {
            geom.computeVertexNormals();
            geom.center();
        }
    }, [geom]);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.005;
        }
    });

    return (
        <mesh ref={meshRef} castShadow receiveShadow>
            <primitive object={geom} attach="geometry" />
            <meshStandardMaterial
                color="#f8fafc"
                roughness={0.4}
                metalness={0.1}
            />
        </mesh>
    );
};

const Loader = () => {
    const { progress } = useProgress();
    return (
        <Html center>
            <div className="flex flex-col items-center gap-4 w-64">
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div
                        className="bg-blue-500 h-full transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <span className="text-slate-400 font-bold tracking-[0.2em] text-[10px] uppercase">
                    Initialisation {Math.round(progress)}%
                </span>
            </div>
        </Html>
    );
};

const Expertise3D = () => {
    return (
        <section id="expertise" className="py-24 bg-[#0f172a] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,58,138,0.1),transparent)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 pt-8">
                    <h2 className="text-sm font-bold text-blue-500 tracking-widest uppercase mb-4">Innovation Digitale</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                        Notre <span className="text-slate-400">Expertise</span> Digitale
                    </h3>
                </div>

                <div className="h-[500px] md:h-[650px] w-full rounded-[2.5rem] bg-[#020617] border border-slate-800/50 shadow-2xl relative overflow-hidden">
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4.5], fov: 40 }}>
                        <color attach="background" args={['#020617']} />

                        <ambientLight intensity={1.5} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
                        <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />
                        <pointLight position={[0, 5, 5]} intensity={1.5} />

                        <Suspense fallback={<Loader />}>
                            <Stage environment="studio" intensity={0.8} contactShadow={{ opacity: 0.3, blur: 2 }}>
                                <Model url="/src/assets/dental-decimated.stl" />
                            </Stage>
                        </Suspense>
                    </Canvas>

                    <div className="absolute top-8 left-8 z-20 pointer-events-none">
                        <div className="flex items-center gap-3 bg-slate-900/40 backdrop-blur-xl px-4 py-2 rounded-full border border-white/5 shadow-2xl">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                            <span className="text-white/80 text-[10px] font-bold uppercase tracking-[0.2em]">Scan Intraoral HP</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] transition-all duration-500 group">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <h4 className="text-white font-bold mb-3">Haute Précision</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">Adaptation prothétique parfaite grâce à la capture de détails microscopiques.</p>
                    </div>
                    <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] transition-all duration-500 group">
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <h4 className="text-white font-bold mb-3">Flux Numérique</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">Intégration native avec exocad pour optimiser chaque étape de la conception.</p>
                    </div>
                    <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] transition-all duration-500 group">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        </div>
                        <h4 className="text-white font-bold mb-3">Visualisation</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">Validation pré-fabrication en temps réel pour garantir l'esthétique finale.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expertise3D;
