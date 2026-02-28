import React from 'react';

const PriceItem = ({ name, price, sub }) => (
    <div className="flex justify-between items-center py-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors px-2 rounded-lg">
        <div className="flex flex-col">
            <span className="text-slate-800 font-semibold">{name}</span>
            {sub && <span className="text-sm text-slate-500">{sub}</span>}
        </div>
        <div className="flex items-center gap-2">
            <span className="text-slate-400 text-sm">MAD</span>
            <span className="text-blue-600 font-bold text-xl">{price}</span>
        </div>
    </div>
);

const Pricing = () => {
    const prices = {
        fixed: {
            ceramoMetallic: import.meta.env.VITE_PRICE_FIXED_CERAMO_METALLIC || "300",
            ceramoCeramic: import.meta.env.VITE_PRICE_FIXED_CERAMO_CERAMIC || "500",
            ceramoMetallicImplant: import.meta.env.VITE_PRICE_FIXED_CERAMO_METALLIC_IMPLANT || "450",
            ceramoCeramicImplant: import.meta.env.VITE_PRICE_FIXED_CERAMO_CERAMIC_IMPLANT || "700",
        },
        other: {
            facette: import.meta.env.VITE_PRICE_OTHER_FACETTE || "600",
            coule: import.meta.env.VITE_PRICE_OTHER_COULE || "400",
            maryland: import.meta.env.VITE_PRICE_OTHER_MARYLAND || "600",
            provisoire: import.meta.env.VITE_PRICE_OTHER_PROVISOIRE || "150",
            inlayCore: import.meta.env.VITE_PRICE_OTHER_INLAY_CORE || "500",
            onlayCore: import.meta.env.VITE_PRICE_OTHER_ONLAY_CORE || "550",
            provisoireFraise: import.meta.env.VITE_PRICE_OTHER_PROVISOIRE_FRAISE || "100",
            alignersGeneric: import.meta.env.VITE_PRICE_OTHER_ALIGNERS_GENERIC || "500",
        },
        advanced: {
            barre: {
                pilotis: import.meta.env.VITE_PRICE_BARRE_PILOTIS || "5000",
                ackerman: import.meta.env.VITE_PRICE_BARRE_ACKERMAN || "6000",
            },
            gouttiere: {
                aligners: import.meta.env.VITE_PRICE_GOUTTIERE_ALIGNERS || "300",
                contention: import.meta.env.VITE_PRICE_GOUTTIERE_CONTENTION || "200",
                blanchissem: import.meta.env.VITE_PRICE_GOUTTIERE_BLANCHISSEM || "200",
            },
            cadcam: {
                totaleIvoclar: import.meta.env.VITE_PRICE_CADCAM_TOTALE_IVOCLAR || "2000",
                totaleGeneric: import.meta.env.VITE_PRICE_CADCAM_TOTALE_GENERIC || "800",
            }
        }
    };

    return (
        <section id="pricing" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">Tarifs Transparents</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Grille Tarifaire <span className="text-slate-400 font-normal">Professionnelle</span></h3>
                    </div>
                    <p className="text-slate-500 max-w-md md:text-right font-medium">Une tarification standardisée pour des services de laboratoire dentaire de haute qualité, offrant le meilleur rapport qualité-prix pour les prothèses CAO-FAO avancées.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-0 opacity-50"></div>
                        <h4 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3 relative z-10">
                            <span className="w-2 h-8 bg-blue-600 rounded-full inline-block"></span>
                            Prothèses Fixes
                        </h4>
                        <div className="relative z-10">
                            <PriceItem name="Couronne ceramo-métallique" price={prices.fixed.ceramoMetallic} />
                            <PriceItem name="Couronne ceramo-ceramic" price={prices.fixed.ceramoCeramic} />
                            <div className="mt-8 mb-4 flex items-center gap-4">
                                <h5 className="font-bold text-slate-700">Sur Implant</h5>
                                <div className="flex-1 h-px bg-slate-200"></div>
                            </div>
                            <PriceItem name="Couronne ceramo-métallique sur implant" price={prices.fixed.ceramoMetallicImplant} />
                            <PriceItem name="Couronne ceramo-ceramic sur implant" price={prices.fixed.ceramoCeramicImplant} />
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-50 rounded-bl-full -z-0 opacity-50"></div>
                        <h4 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3 relative z-10">
                            <span className="w-2 h-8 bg-cyan-500 rounded-full inline-block"></span>
                            Prothèses et Autres
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 relative z-10">
                            <div>
                                <PriceItem name="Facette" price={prices.other.facette} />
                                <PriceItem name="Couronne coulé" price={prices.other.coule} />
                                <PriceItem name="Couronne MARYLAND" price={prices.other.maryland} />
                                <PriceItem name="Provisoire" price={prices.other.provisoire} />
                            </div>
                            <div>
                                <PriceItem name="Inlay-core" price={prices.other.inlayCore} />
                                <PriceItem name="Onlay-core" price={prices.other.onlayCore} />
                                <PriceItem name="Provisoire fraisé" price={prices.other.provisoireFraise} />
                                <PriceItem name="Les aligneurs" price={prices.other.alignersGeneric} />
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden lg:col-span-2 text-white">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full filter blur-[100px] opacity-20 -z-0"></div>
                        <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 relative z-10">
                            <span className="w-2 h-8 bg-blue-400 rounded-full inline-block"></span>
                            Services Avancés (Barre, Gouttière, exocad)
                        </h4>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                            <div>
                                <h5 className="text-blue-400 font-bold mb-4 border-b border-slate-700 pb-2">Totale Sur Barre</h5>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="font-medium text-slate-200">Pilotis</div>
                                            <div className="text-xs text-slate-400">avec dents Ivoclar</div>
                                        </div>
                                        <div className="font-bold text-xl text-white">{prices.advanced.barre.pilotis} <span className="text-xs text-slate-500">MAD (EA)</span></div>
                                    </div>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="font-medium text-slate-200">D'Acker-man</div>
                                            <div className="text-xs text-slate-400">avec dents Ivoclar</div>
                                        </div>
                                        <div className="font-bold text-xl text-white">{prices.advanced.barre.ackerman} <span className="text-xs text-slate-500">MAD (EA)</span></div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h5 className="text-blue-400 font-bold mb-4 border-b border-slate-700 pb-2">Gouttière</h5>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-slate-200">Les aligneurs</span>
                                        <span className="font-bold text-xl text-white">{prices.advanced.gouttiere.aligners}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-slate-200">Gouttiers contention</span>
                                        <span className="font-bold text-xl text-white">{prices.advanced.gouttiere.contention}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-slate-200">Gouttiere blanchissem</span>
                                        <span className="font-bold text-xl text-white">{prices.advanced.gouttiere.blanchissem}</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h5 className="text-blue-400 font-bold mb-4 border-b border-slate-700 pb-2">Support exocad</h5>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start">
                                        <span className="font-medium text-slate-200">Montage Totale Ivoclar<br /><span className="text-sm font-normal text-slate-400">Haut et bas</span></span>
                                        <span className="font-bold text-xl text-white">{prices.advanced.cadcam.totaleIvoclar}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-slate-200">Montage Totale</span>
                                        <span className="font-bold text-xl text-white">{prices.advanced.cadcam.totaleGeneric}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Pricing;
