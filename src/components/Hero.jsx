import React from 'react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-900">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1920&q=80"
                    alt="Dental Laboratory"
                    className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">

                {/* Text Content */}
                <div className="w-full md:w-3/5 md:pr-12 animate-fade-in-up">


                    <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                        Précision & Art dans <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Chaque Sourire.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
                        Redéfinir les soins dentaires grâce à la technologie CAO-FAO avancée, des couronnes fabriquées avec expertise, des implants et des solutions esthétiques sur mesure visant la perfection.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all duration-300">
                            Découvrir les Tarifs
                        </button>
                        <button className="glass-dark text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-2">
                            Contacter le Laboratoire
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Contact info floating card */}
                <div className="w-full md:w-2/5 mt-16 md:mt-0 flex justify-end">
                    <div className="glass-dark p-8 rounded-3xl w-full max-w-md shadow-2xl border border-slate-700/50 backdrop-blur-xl animate-[fade-in-up_1s_ease-out_0.2s_forwards] opacity-0">
                        <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/30">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-blue-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Accès Direct au Labo</h3>
                        <p className="text-slate-400 mb-6">Disponible pour consultations prioritaires et cas urgents.</p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                                <div className="text-blue-400 font-bold bg-blue-900/30 px-3 py-1 rounded-lg text-sm">FIX</div>
                                <div className="text-white text-lg font-medium">05.37.77.02.71</div>
                            </div>
                            <div className="flex flex-col gap-2 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                                <div className="flex items-center gap-4">
                                    <div className="text-cyan-400 font-bold bg-cyan-900/30 px-3 py-1 rounded-lg text-sm">GSM</div>
                                    <div className="text-white text-lg font-medium">06.22.15.90.45</div>
                                </div>
                                <div className="text-slate-300 pl-[4.5rem]">06.61.44.49.49</div>
                                <div className="text-slate-300 pl-[4.5rem]">06.02.03.62.24</div>
                            </div>
                            <div className="flex items-start gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                                <div className="text-purple-400 font-bold bg-purple-900/30 px-3 py-1 rounded-lg text-sm">ADRESSE</div>
                                <div className="text-white text-base font-medium leading-tight">
                                    10, RUE DAYET IFRAH<br />
                                    AGDAL - RABAT
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
