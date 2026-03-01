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
        <a href="#pricing" className="group relative flex flex-col h-full bg-[#020617] rounded-[1.5rem] border border-slate-800/50 hover:border-blue-500/30 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
            {/* 3D Canvas Container */}
            <div className="h-[160px] w-full relative">
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
                <div className="absolute top-3 left-3 z-10">
                    <div className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/5 shadow-lg">
                        <div className={`w-1 h-1 rounded-full animate-pulse ${colorClass}`}></div>
                        <span className="text-white text-[7px] font-bold uppercase tracking-[0.1em]">{subtitle}</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-4 pt-0 flex flex-col items-center text-center">
                <h4 className="text-sm font-black text-white mb-1.5 tracking-tight group-hover:text-blue-400 transition-colors uppercase leading-tight">
                    {title}
                </h4>
                <p className="text-slate-400 text-[11px] leading-relaxed max-w-[180px]">
                    {description}
                </p>

                <div className="mt-3 flex items-center gap-1.5 text-[8px] font-bold text-blue-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-1 group-hover:translate-y-0">
                    <span>Voir le tarif</span>
                    <svg className="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </div>
            </div>
        </a>
    );
};

const Expertise3D = () => {
    const expertiseItems = [
        {
            id: 'gouttiere',
            title: 'Gouttière',
            subtitle: 'Conception 3D',
            description: 'Gouttières occlusales et d\'alignement conçues numériquement pour un ajustement parfait.',
            model: <ToothModel />,
            colorClass: 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]'
        },
        {
            id: 'crown-m',
            title: 'Couronne ceramo-métallique',
            subtitle: 'Tradition & Précision',
            description: 'L\'alliance de la robustesse métallique et de l\'esthétique céramique pour une durabilité maximale.',
            model: <CrownModel />,
            colorClass: 'bg-slate-500 shadow-[0_0_8px_rgba(100,116,139,0.8)]'
        },
        {
            id: 'crown-c',
            title: 'Couronne ceramo-ceramic',
            subtitle: 'Esthétique Pure',
            description: 'Translucidité naturelle et biocompatibilité totale pour un sourire invisiblement restauré.',
            model: <CrownModel />,
            colorClass: 'bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.8)]'
        },
        {
            id: 'crown-m-i',
            title: 'Couronne ceramo-métallique sur implant',
            subtitle: 'Restauration sur Implant',
            description: 'Solutions prothétiques vissées ou scellées sur piliers implantaires avec une stabilité optimale.',
            model: <ImplantModel />,
            colorClass: 'bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]'
        },
        {
            id: 'crown-c-i',
            title: 'Couronne ceramo-ceramic sur implant',
            subtitle: 'Excellence sur Implant',
            description: 'Le summum de la technologie implantaire combiné à une esthétique céramique de haut niveau.',
            model: <ImplantModel />,
            colorClass: 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]'
        },
        {
            id: 'facette',
            title: 'Facette',
            subtitle: 'Design du Sourire',
            description: 'Laminés ultra-fins pour une transformation esthétique minimale-invasive et éclatante.',
            model: <CrownModel />,
            colorClass: 'bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]'
        },
        {
            id: 'crown-coule',
            title: 'Couronne coulé',
            subtitle: 'Solidité Éprouvée',
            description: 'Restauration classique et robuste, idéale pour les secteurs postérieurs nécessitant une grande résistance.',
            model: <CrownModel />,
            colorClass: 'bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]'
        }
    ];

    return (
        <section id="echantillons" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/background.png"
                    alt=""
                    className="w-full h-full object-cover opacity-20 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(37,99,235,0.05),transparent_40%)] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.05),transparent_40%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-blue-500 tracking-[0.3em] uppercase mb-4 animate-pulse">Standard Excellence</h2>
                    <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-tight">
                        Échantillons <span className="text-slate-500/50"></span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 xl:gap-12">
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
            </div>
        </section>
    );
};

export default Expertise3D;
