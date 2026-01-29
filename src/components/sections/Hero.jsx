import React from 'react';
import HeroContent from './Hero/HeroContent';
import SocialLinks from './Hero/SocialLinks';

import heroBg from '../../assets/comtranz/image3.avif';

const Hero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden flex items-center bg-[#315347]">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Modern Facility Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#315347]/95 via-[#315347]/80 to-[#315347]/40"></div>
            </div>

            {/* Vertical Social Links - Left Side */}
            <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-30">
                <SocialLinks />
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-16">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
                    {/* Left Content */}
                    <div className="w-full lg:w-3/5 lg:pl-12">
                        <HeroContent />
                    </div>

                    {/* Right Side - Stats Card */}
                    <div className="hidden lg:block w-full lg:w-2/5">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                            <h3 className="text-white text-xl font-bold mb-6 border-b border-white/20 pb-4">Why Choose Us</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-[#f6d274]/20 flex items-center justify-center">
                                        <span className="text-[#f6d274] text-2xl font-black">7+</span>
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold">Years Experience</p>
                                        <p className="text-gray-300 text-sm">Since 2018</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-[#f6d274]/20 flex items-center justify-center">
                                        <span className="text-[#f6d274] text-2xl font-black">50+</span>
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold">Clients Served</p>
                                        <p className="text-gray-300 text-sm">Across Nigeria</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-[#f6d274]/20 flex items-center justify-center">
                                        <span className="text-[#f6d274] text-2xl font-black">6</span>
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold">Core Services</p>
                                        <p className="text-gray-300 text-sm">Full-Spectrum Solutions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Social Links */}
                <div className="flex lg:hidden justify-center mt-8">
                    <SocialLinks />
                </div>
            </div>
        </section>
    );
};

export default Hero;
