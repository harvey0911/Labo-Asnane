import React, { useState, useEffect } from 'react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                {/* Logo */}
                <div className="flex items-center gap-3 cursor-pointer group">
                    <div className="bg-gradient-to-tr from-blue-600 to-cyan-400 p-2 rounded-xl text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className={`text-xl font-black tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>Labo</span>
                        <span className={`text-base font-bold tracking-wide ${scrolled ? 'text-blue-600' : 'text-blue-600 md:text-blue-400'}`}>Asnane</span>
                    </div>
                </div>

                {/* Navigation - Hidden on Mobile */}
                <nav className="hidden md:block">
                    <ul className={`flex gap-8 font-semibold text-sm tracking-wide ${scrolled ? 'text-slate-600' : 'text-white'}`}>
                        <li><a href="#services" className="hover:text-blue-500 transition-colors">Services</a></li>
                        <li><a href="#expertise" className="hover:text-blue-500 transition-colors">Expertise</a></li>
                        <li><a href="#pricing" className="hover:text-blue-500 transition-colors">Tarifs</a></li>
                        <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
                    </ul>
                </nav>

                {/* Action Button */}
                <div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                        Commander en Ligne
                    </button>
                </div>

            </div>
        </header>
    );
};

export default Header;
