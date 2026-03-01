import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    <div className="lg:col-span-2">
                        <div className="flex items-center mb-6">
                            <img src="/logo.png" alt="Labo Asnane Logo" className="h-14 w-auto" />
                        </div>
                        <p className="text-slate-400 mb-8 max-w-sm">
                            Votre partenaire de confiance pour des prothèses dentaires de haute précision, alliant innovation numérique et excellence esthétique.
                        </p>

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

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Contactez-nous</h4>
                        <ul className="space-y-4">
                            <li className="flex flex-col">
                                <span className="text-slate-500 text-sm font-semibold mb-1 uppercase tracking-wider">Fixe</span>
                                <span className="text-slate-300 font-medium text-lg hover:text-blue-400 transition-colors cursor-pointer">{import.meta.env.VITE_CONTACT_FIX || "05.37.77.02.71"}</span>
                            </li>
                            <li className="flex flex-col pt-2 opacity-10">
                                <div className="w-full h-px bg-slate-700"></div>
                            </li>
                            <li className="flex flex-col">
                                <span className="text-slate-500 text-sm font-semibold mb-1 uppercase tracking-wider">Mobile / GSM</span>
                                <div className="flex flex-col gap-1">
                                    <span className="text-slate-300 font-medium text-lg hover:text-blue-400 transition-colors cursor-pointer">{import.meta.env.VITE_CONTACT_GSM_1 || "06.61.44.49.49"}</span>
                                    <span className="text-slate-300 font-medium text-lg hover:text-blue-400 transition-colors cursor-pointer">{import.meta.env.VITE_CONTACT_GSM_2 || "06.22.15.90.45"}</span>
                                    <span className="text-slate-300 font-medium text-lg hover:text-blue-400 transition-colors cursor-pointer">{import.meta.env.VITE_CONTACT_GSM_3 || "06.02.03.62.24"}</span>
                                </div>
                            </li>
                            <li className="flex flex-col pt-2 opacity-10">
                                <div className="w-full h-px bg-slate-700"></div>
                            </li>
                            <li className="flex flex-col">
                                <span className="text-slate-500 text-sm font-semibold mb-1 uppercase tracking-wider">Adresse</span>
                                <address className="text-slate-300 font-medium not-italic leading-relaxed text-lg whitespace-pre-line">
                                    {import.meta.env.VITE_CONTACT_ADDRESS?.replace(', ', '\n') || "10, RUE DAYET IFRAH\nAGDAL - RABAT"}
                                </address>
                            </li>
                            <li className="flex flex-col pt-2 opacity-10">
                                <div className="w-full h-px bg-slate-700"></div>
                            </li>
                            <li className="flex flex-col">
                                <span className="text-slate-500 text-sm font-semibold mb-1 uppercase tracking-wider">E-mail</span>
                                <a href="mailto:laboasnane@gmail.com" className="text-slate-300 font-medium text-lg hover:text-blue-400 transition-colors">laboasnane@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Liens Rapides</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Accueil</a></li>
                            <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Nos Services</a></li>
                            <li><a href="#echantillons" className="text-slate-400 hover:text-white transition-colors">Échantillons</a></li>
                            <li><a href="#pricing" className="text-slate-400 hover:text-white transition-colors">Grille Tarifaire</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Conditions d'Utilisation</a></li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm text-center md:text-left">
                        &copy; {new Date().getFullYear()} Labo Asnane. Tous droits réservés.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/profile.php?id=61585137891792" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                            <div className="w-4 h-4 bg-current opacity-80" style={{ maskImage: "url('https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg')", maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskImage: "url('https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg')", WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center' }}></div>
                        </a>
                        <a href="https://www.instagram.com/labo_asnane?igsh=MW5kd2hmZHJqbGJ2" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-gradient-to-tr hover:from-purple-500 hover:to-orange-500 hover:text-white transition-all">
                            <div className="w-4 h-4 bg-current opacity-80" style={{ maskImage: "url('https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg')", maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskImage: "url('https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg')", WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center' }}></div>
                        </a>
                        <a href="https://www.linkedin.com/in/laboratoire-asnane-a5a30b3b4/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-700 hover:text-white transition-all">
                            <div className="w-4 h-4 bg-current opacity-80" style={{ maskImage: "url('https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg')", maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskImage: "url('https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg')", WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center' }}></div>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
