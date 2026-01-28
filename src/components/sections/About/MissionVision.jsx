import React from 'react';
import { companyInfo } from '../../../data/companyInfo';

const MissionVision = () => {
    return (
        <section className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.02] pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Mission Card */}
                    <div
                        className="bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100"
                        data-aos="fade-up"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-[#1a365d] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-8 h-8 text-[#f6d274]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-black text-[#1a365d] mb-4">Our Mission</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {companyInfo.mission}
                        </p>
                    </div>

                    {/* Vision Card */}
                    <div
                        className="bg-[#1a365d] rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-[#f6d274] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-[#1a365d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4">Our Vision</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                {companyInfo.vision}
                            </p>
                        </div>
                        {/* Decorative Circle */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
