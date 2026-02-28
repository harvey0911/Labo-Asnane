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

                <div className="flex items-center cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img
                        src="/logo.png"
                        alt="Labo Asnane Logo"
                        className={`h-12 w-auto transition-all duration-300 ${scrolled ? 'scale-90' : 'scale-100'}`}
                    />
                </div>

                <nav className="hidden md:block">
                    <ul className={`flex gap-8 font-semibold text-sm tracking-wide ${scrolled ? 'text-slate-600' : 'text-white'}`}>
                        <li><a href="#services" className="hover:text-blue-500 transition-colors">Services</a></li>
                        <li><a href="#expertise" className="hover:text-blue-500 transition-colors">Expertise</a></li>
                        <li><a href="#pricing" className="hover:text-blue-500 transition-colors">Tarifs</a></li>
                        <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
                    </ul>
                </nav>

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
