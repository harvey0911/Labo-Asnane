import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stage, PerspectiveCamera, Html, useProgress, Float, Environment } from '@react-three/drei';
import { ToothModel, ImplantModel, CrownModel } from './ThreeD/DentalExpertiseModels';

const Loader = () => {
    const { progress } = useProgress();
    return (
        <Html center>
            <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{Math.round(progress)}%</span>
            </div>
        </Html>
    );
};

const ModelCard = ({ title, subtitle, description, model, colorClass }) => {
    return (
        <div className="group relative flex flex-col h-full bg-[#020617] rounded-[2.5rem] border border-slate-800/50 hover:border-blue-500/30 transition-all duration-500 overflow-hidden shadow-2xl">
            {/* 3D Canvas Container */}
            <div className="h-[300px] w-full relative">
                <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 40 }}>
                    <Suspense fallback={<Loader />}>
                        <Stage environment="city" intensity={0.5} contactShadow={{ opacity: 0.2, blur: 2 }}>
                            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                                {model}
                            </Float>
                        </Stage>
                        <Environment preset="night" />
                    </Suspense>
                </Canvas>

                {/* Overlay Badge */}
                <div className="absolute top-6 left-6 z-10">
                    <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5 shadow-xl">
                        <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${colorClass}`}></div>
                        <span className="text-white text-[9px] font-bold uppercase tracking-[0.15em]">{subtitle}</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-8 pt-0 flex flex-col items-center text-center">
                <h4 className="text-2xl font-black text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors uppercase">
                    {title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed max-w-[250px]">
                    {description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-[10px] font-bold text-blue-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <span>Explorer l'innovation</span>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

const Expertise3D = () => {
    const expertiseItems = [
        {
            id: 'tooth',
            title: 'Diagnostic',
            subtitle: 'Scan Intraoral 8K',
            description: 'Capture numérique haute fidélité pour un diagnostic d’une précision millimétrique.',
            model: <ToothModel />,
            colorClass: 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]'
        },
        {
            id: 'implant',
            title: 'Implantologie',
            subtitle: 'Conception CAO/FAO',
            description: 'Solutions d’implants sur mesure avec intégration osseuse optimisée par algorithme.',
            model: <ImplantModel />,
            colorClass: 'bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.8)]'
        },
        {
            id: 'crown',
            title: 'Restauration',
            subtitle: 'Esthétique Premium',
            description: 'Couronnes et facettes en céramique pressée alliant robustesse et translucidité naturelle.',
            model: <CrownModel />,
            colorClass: 'bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]'
        }
    ];

    return (
        <section id="expertise" className="py-32 bg-[#0f172a] relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(37,99,235,0.05),transparent_40%)] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.05),transparent_40%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20 lg:mb-24">
                    <h2 className="text-sm font-bold text-blue-500 tracking-[0.3em] uppercase mb-4 animate-pulse">Standard Excellence</h2>
                    <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-tight">
                        Expertise <span className="text-slate-500/50">Tridimensionnelle</span>
                    </h3>
                    <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        L'alliance de la technologie de pointe et de l'artisanat de précision pour redéfinir les standards de la dentisterie moderne.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
                    {expertiseItems.map((item) => (
                        <ModelCard
                            key={item.id}
                            title={item.title}
                            subtitle={item.subtitle}
                            description={item.description}
                            model={item.model}
                            colorClass={item.colorClass}
                        />
                    ))}
                </div>

                {/* Tech Badges Footer */}
                <div className="mt-24 flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                    <span className="text-white font-black text-2xl tracking-tighter italic">EXOCAD</span>
                    <span className="text-white font-black text-2xl tracking-tighter italic">3SHAPE</span>
                    <span className="text-white font-black text-2xl tracking-tighter italic">VITA</span>
                    <span className="text-white font-black text-2xl tracking-tighter italic">IVOCLAR</span>
                </div>
            </div>
        </section>
    );
};

export default Expertise3D;
