import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand & Map */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-gradient-to-tr from-blue-600 to-cyan-400 p-2 rounded-xl text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-xl font-black text-white tracking-tight">Labo</span>
                                <span className="text-base font-bold text-blue-500 tracking-wide">Asnane</span>
                            </div>
                        </div>
                        <p className="text-slate-400 mb-8 max-w-sm">
                            Fournir des restaurations dentaires esthétiques et fonctionnelles haut de gamme avec une précision CAO-FAO de pointe.
                        </p>

                        {/* Map Embed */}
                        <div className="w-full max-w-sm h-64 bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 relative group">
                            <iframe
                                title="Laboratory Location"
                                src="https://www.google.com/maps?q=34.005389,-6.85075&hl=fr&z=15&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Numbers */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Contactez-nous</h4>
                        <ul className="space-y-4">
                            <li className="flex flex-col">
                                <span className="text-slate-500 text-sm font-semibold mb-1 uppercase tracking-wider">Fixe</span>
                                <span className="text-slate-300 font-medium text-lg hover:text-blue-400 transition-colors cursor-pointer">05.37.77.02.71</span>
                            </li>
                            <li className="flex flex-col pt-2 opacity-10">
                                <div className="w-full h-px bg-slate-700"></div>
                            </li>
                            <li className="flex flex-col">
                                <span className="text-slate-500 text-sm font-semibold mb-1 uppercase tracking-wider">Mobile / GSM</span>
                                <div className="flex flex-col gap-1">
                                    <span className="text-slate-300 font-medium text-lg hover:text-blue-400 transition-colors cursor-pointer">06.22.15.90.45</span>
                                    <span className="text-slate-300 font-medium text-lg hover:text-blue-400 transition-colors cursor-pointer">06.61.44.49.49</span>
                                    <span className="text-slate-300 font-medium text-lg hover:text-blue-400 transition-colors cursor-pointer">06.02.03.62.24</span>
                                </div>
                            </li>
                            <li className="flex flex-col pt-2 opacity-10">
                                <div className="w-full h-px bg-slate-700"></div>
                            </li>
                            <li className="flex flex-col">
                                <span className="text-slate-500 text-sm font-semibold mb-1 uppercase tracking-wider">Adresse</span>
                                <address className="text-slate-300 font-medium not-italic leading-relaxed text-lg">
                                    10, RUE DAYET IFRAH<br />
                                    AGDAL - RABAT
                                </address>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Liens Rapides</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Accueil</a></li>
                            <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Nos Services</a></li>
                            <li><a href="#expertise" className="text-slate-400 hover:text-white transition-colors">Expertise</a></li>
                            <li><a href="#pricing" className="text-slate-400 hover:text-white transition-colors">Grille Tarifaire</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Conditions d'Utilisation</a></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm text-center md:text-left">
                        &copy; {new Date().getFullYear()} Labo Asnane. Tous droits réservés.
                    </p>
                    <div className="flex gap-4">
                        {/* Social Icons Placeholder */}
                        {['facebook', 'instagram', 'linkedin'].map((social) => (
                            <a key={social} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                                <div className="w-4 h-4 bg-current opacity-80" style={{ maskImage: `url('https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${social}.svg')`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskImage: `url('https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${social}.svg')`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center' }}></div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
