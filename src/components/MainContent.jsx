import React from 'react';

const PricePill = ({ price }) => (
    <span className="bg-[#1c5f9f] text-white font-bold py-1 px-3 rounded-full text-sm md:text-base inline-block whitespace-nowrap">
        {price}
    </span>
);

const SectionHeader = ({ title }) => (
    <div className="bg-[#1c5f9f] text-white font-bold text-xl md:text-2xl py-2 px-4 shadow-md w-full text-center uppercase tracking-wider mb-4">
        {title}
    </div>
);

const MainContent = () => {
    return (
        <div className="flex flex-col p-4 md:p-8 w-full max-w-4xl mx-auto bg-white">

            {/* Top Title */}
            <div className="flex justify-between items-baseline mb-6 border-b-2 border-gray-100 pb-4">
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b4582]">Expertise</h1>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1c5f9f] uppercase">PROTHÈSES CONJOINTES</h2>
            </div>

            {/* Fixed Prosthetics Section */}
            <div className="mb-8 relative">
                <h3 className="text-xl md:text-2xl font-bold text-[#0b4582] mb-4">Fixed Prosthetics</h3>

                {/* Row 1 */}
                <div className="flex justify-between items-center mb-6 pl-4 md:pl-8">
                    <div className="flex items-center gap-4">
                        <span className="text-lg md:text-xl font-medium text-gray-800">Couronne ceramo-métallique</span>
                        <span className="text-lg md:text-xl font-medium text-gray-800">:</span>
                        <PricePill price="300 DH" />
                    </div>
                    {/* Image Placeholder */}
                    <div className="w-32 md:w-48 h-16 md:h-20 bg-gray-200 rounded-xl border-4 border-[#0b4582] shadow-lg flex items-center justify-center overflow-hidden">
                        <span className="text-xs text-gray-500 font-semibold">Teeth Img</span>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="flex justify-between items-center pl-4 md:pl-8">
                    <div className="flex items-center gap-4">
                        <span className="text-lg md:text-xl font-medium text-gray-800">Couronne ceramo-ceramic</span>
                        <span className="text-lg md:text-xl font-medium text-gray-800 ml-2">:</span>
                        <PricePill price="500 DH" />
                    </div>
                    {/* Image Placeholder */}
                    <div className="w-32 md:w-48 h-16 md:h-20 bg-gray-200 rounded-xl border-4 border-[#0b4582] shadow-lg flex items-center justify-center overflow-hidden mt-2 md:-mt-4">
                        <span className="text-xs text-gray-500 font-semibold">Teeth Img 2</span>
                    </div>
                </div>
            </div>

            {/* Sur Implant Section */}
            <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#0b4582] mb-4 border-b-2 border-[#1c5f9f] pb-1 inline-block pr-8">Sur Implant</h3>

                <div className="flex flex-col md:flex-row items-center gap-6 pl-4 md:pl-8">
                    {/* Left Image Placeholder */}
                    <div className="w-32 md:w-40 h-20 md:h-24 bg-gray-800 rounded-xl border-4 border-[#0b4582] shadow-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-xs text-gray-400 font-semibold">Implant Img</span>
                    </div>

                    <div className="flex flex-col gap-4 w-full">
                        <div className="flex justify-between items-center w-full max-w-lg">
                            <span className="text-lg md:text-xl font-medium text-gray-800">Couronne ceramo-métallique sur implant</span>
                            <div className="flex items-center gap-2">
                                <span className="text-lg font-medium">:</span>
                                <PricePill price="450 DH" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center w-full max-w-lg">
                            <span className="text-lg md:text-xl font-medium text-gray-800">Couronne ceramo-ceramic sur implant</span>
                            <div className="flex items-center gap-2">
                                <span className="text-lg font-medium">:</span>
                                <PricePill price="700 DH" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grey Grid Section */}
            <div className="bg-[#f0f4f8] rounded-2xl border-2 border-gray-300 p-6 md:p-8 mb-10 relative shadow-inner">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 relative z-10 w-full md:w-2/3">

                    <div className="flex justify-between items-center">
                        <span className="text-base md:text-lg font-medium text-gray-800">Facette</span>
                        <div className="flex items-center gap-2"><span className="text-gray-600">:</span><PricePill price="600 DH" /></div>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-base md:text-lg font-medium text-gray-800">Couronne coulé</span>
                        <div className="flex items-center gap-2"><span className="text-gray-600">:</span><PricePill price="400 DH" /></div>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-base md:text-lg font-medium text-gray-800">Couronne MARYLAND</span>
                        <div className="flex items-center gap-2"><span className="text-gray-600">:</span><PricePill price="600 DH" /></div>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-base md:text-lg font-medium text-gray-800">Provisoire</span>
                        <div className="flex items-center gap-2"><span className="text-gray-600">:</span><PricePill price="150 DH" /></div>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-base md:text-lg font-medium text-gray-800">Inlay-core</span>
                        <div className="flex items-center gap-2"><span className="text-gray-600">:</span><PricePill price="500 DH" /></div>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-base md:text-lg font-medium text-gray-800">Provisoire fraisé</span>
                        <div className="flex items-center gap-2"><span className="text-gray-600">:</span><PricePill price="100 DH" /></div>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-base md:text-lg font-medium text-gray-800">Onlay-core</span>
                        <div className="flex items-center gap-2"><span className="text-gray-600">:</span><PricePill price="550 DH" /></div>
                    </div>
                    <div className="hidden md:block"></div>

                    <div className="flex justify-between items-center">
                        <span className="text-base md:text-lg font-medium text-gray-800">les aligneurs</span>
                        <div className="flex items-center gap-2"><span className="text-gray-600">:</span><PricePill price="500 DH" /></div>
                    </div>
                </div>

                {/* Floating Image in Grid */}
                <div className="mt-6 md:mt-0 md:absolute md:-right-4 md:-bottom-6 w-full md:w-64 h-24 bg-gray-800 rounded-xl border-4 border-[#0b4582] shadow-lg flex items-center justify-center z-20">
                    <span className="text-xs text-gray-400 font-semibold">Prosthesis Img</span>
                </div>
            </div>

            {/* TOTALE SUR BARRE Section */}
            <div className="mb-8">
                <SectionHeader title="TOTALE SUR BARRE" />
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 p-4">
                    <div className="flex flex-col gap-6 w-full md:w-2/3">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col">
                                <span className="text-lg md:text-xl font-medium text-gray-800">Total sur barre Pilotis</span>
                                <span className="text-sm text-[#1c5f9f]">(avec dents Ivoclar)</span>
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-lg font-medium">:</span>
                                <PricePill price="5000 DH" />
                                <span className="text-sm font-bold text-gray-700 ml-1">(EA)</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-start">
                            <div className="flex flex-col">
                                <span className="text-lg md:text-xl font-medium text-gray-800">Total sur barre D'Acker-man</span>
                                <span className="text-sm text-[#1c5f9f]">(avec dents Ivoclar)</span>
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-lg font-medium">:</span>
                                <PricePill price="6000 DH" />
                                <span className="text-sm font-bold text-gray-700 ml-1">(EA)</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Placeholder */}
                    <div className="w-full md:w-64 h-28 bg-gray-200 rounded-xl border-4 border-[#0b4582] shadow-lg flex items-center justify-center">
                        <span className="text-xs text-gray-500 font-semibold">Teeth Barre Img</span>
                    </div>
                </div>
            </div>

            {/* GOUTTIÈRE Section */}
            <div className="mb-8">
                <SectionHeader title="GOUTTIÈRE" />
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 p-4">
                    <div className="flex flex-col gap-4 w-full md:w-2/3">
                        <div className="flex justify-between items-center bg-gray-50 md:bg-transparent rounded-lg p-2 md:p-0">
                            <span className="text-lg md:text-xl font-medium text-gray-800">Les aligneurs</span>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-lg font-medium">:</span>
                                <PricePill price="300 DH" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center bg-gray-50 md:bg-transparent rounded-lg p-2 md:p-0">
                            <span className="text-lg md:text-xl font-medium text-gray-800">Gouttiers contention</span>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-lg font-medium">:</span>
                                <PricePill price="200 DH" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center bg-gray-50 md:bg-transparent rounded-lg p-2 md:p-0">
                            <span className="text-lg md:text-xl font-medium text-gray-800">Gouttiere blanchissem</span>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-lg font-medium">:</span>
                                <PricePill price="200 DH" />
                            </div>
                        </div>
                    </div>

                    {/* Right Image Placeholder */}
                    <div className="w-full md:w-64 h-24 bg-[#0b4582] rounded-xl border-4 border-white shadow-[0_0_10px_rgba(0,0,0,0.5)] flex items-center justify-center">
                        <span className="text-xs text-white font-semibold">Aligneurs Img</span>
                    </div>
                </div>
            </div>

            {/* SUPPORT CAD-CAM Section */}
            <div className="mb-4">
                <SectionHeader title="SUPPORT CAD-CAM" />
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 p-4">
                    <div className="flex flex-col gap-4 w-full md:w-2/3 mt-2">
                        <div className="flex justify-between items-center">
                            <span className="text-lg md:text-xl font-medium text-gray-800">Montage Totale Ivoclar haut et bas</span>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-lg font-medium">:</span>
                                <PricePill price="2000 DH" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-lg md:text-xl font-medium text-gray-800">Montage Totale</span>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-lg font-medium">:</span>
                                <PricePill price="800 DH" />
                            </div>
                        </div>
                    </div>

                    {/* Right Image and Badge */}
                    <div className="flex flex-col items-center gap-2 md:-mt-12 group relative">
                        <div className="w-48 md:w-56 h-32 bg-yellow-100 rounded-xl border-4 border-[#0b4582] shadow-lg flex items-center justify-center relative overflow-hidden">
                            <span className="text-xs text-yellow-800 font-semibold">CAD CAM Img</span>
                        </div>
                        <div className="-mt-6 z-10 hidden md:block">
                            <span className="bg-[#1c5f9f] text-white font-bold py-1 px-4 rounded-full text-lg shadow-md">2000 DH</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Contact Numbers */}
            <div className="mt-8 pt-8 pb-4 text-center">
                <div className="text-lg md:text-2xl font-bold flex flex-wrap justify-center gap-x-8 gap-y-2 text-gray-900">
                    <span>Fix: 05.37.77.02.71</span>
                    <span>Gsm: 06.61.44.49.49 • 06.02.03.62.24</span>
                </div>
                <div className="text-lg md:text-2xl font-bold mt-2 text-gray-900">
                    <span>06.22.15.90.45 • 06.22.15.90.45</span>
                </div>
            </div>

        </div>
    );
};

export default MainContent;
