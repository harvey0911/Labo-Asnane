import React from 'react';

const serviceData = [
    {
        title: "Prothèses Conjointes",
        desc: "Prothèses fixes incluant des couronnes céramo-métalliques et entièrement céramiques.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>
        )
    },
    {
        title: "Implants & Barres",
        desc: "Solutions d'implantologie avancées, totale sur barre (Pilotis & D'Acker-man).",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.492-3.053c.217-.266.15-.665-.118-.902l-1.328-1.18a.652.652 0 0 0-.902.118l-3.052 2.492m9.897-9.897v.001M10.42 10.42l3.158-3.158m0 0a2.75 2.75 0 0 0-3.889-3.889l-5.657 5.657a2.75 2.75 0 0 0 0 3.889l3.889 3.889a2.75 2.75 0 0 0 3.889 0l5.657-5.657a2.75 2.75 0 0 0 0-3.889l-3.889-3.889Z" />
            </svg>
        )
    },
    {
        title: "Support exocad",
        desc: "Conception et fabrication assistée par ordinateur de haute précision avec exocad.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
            </svg>
        )
    },
    {
        title: "Gouttières & Aligneurs",
        desc: "Aligneurs transparents et gouttières fonctionnelles conçus pour le confort.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
            </svg>
        )
    }
];

const Services = () => {
    return (
        <section id="services" className="pt-24 pb-12 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">Notre Expertise</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Services Complets de <span className="font-light text-slate-400">Laboratoire</span></h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 text-red-50 lg:grid-cols-4 gap-8 text-black">
                    {serviceData.map((s, i) => (
                        <div key={i} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-blue-100/50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                {s.icon}
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h4>
                            <p className="text-slate-500 leading-relaxed font-medium">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
