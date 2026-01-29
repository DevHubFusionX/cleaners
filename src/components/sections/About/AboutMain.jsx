import React from 'react';
import { companyInfo } from '../../../data/companyInfo';
import imgMain from '../../../assets/comtranz/image11.avif';
import { CheckCircle2 } from 'lucide-react';

const AboutMain = () => {
    const highlights = [
        "Residential estates management",
        "Commercial facility maintenance",
        "Corporate institutional services",
        "24/7 emergency response support"
    ];

    return (
        <section className="py-16 lg:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Image Column */}
                    <div className="w-full lg:w-1/2" data-aos="fade-right">
                        <div className="relative">
                            {/* Main Image */}
                            <div className="rounded-3xl overflow-hidden shadow-2xl relative">
                                <img
                                    src={imgMain}
                                    alt="Comtranz Operations"
                                    className="w-full h-[400px] md:h-[550px] object-cover"
                                />
                            </div>

                            {/* Overlapping Info Box */}
                            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-[#315347] p-6 md:p-8 rounded-3xl shadow-2xl z-20 max-w-[240px]">
                                <div className="flex items-baseline gap-2 mb-2">
                                    <div className="text-5xl font-black text-[#f6d274]">7</div>
                                    <div className="text-2xl font-bold text-[#f6d274]">+</div>
                                </div>
                                <div className="text-white font-bold text-sm uppercase tracking-wide leading-tight">
                                    Years of Excellence
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="w-full lg:w-1/2" data-aos="fade-left">
                        <p className="text-[#f6d274] text-sm font-semibold uppercase tracking-widest mb-4 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-[#f6d274]"></span>
                            Who We Are
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#315347] leading-tight mb-6">
                            Nigeria's Trusted Facility Management Partner
                        </h2>

                        <div className="space-y-5 text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                            <p>
                                <strong className="text-[#315347]">{companyInfo.name}</strong> is a Nigerian-registered company ({companyInfo.rcNumber}) that has been delivering excellence in facility management since {companyInfo.established}.
                            </p>
                            <p>
                                Founded by <strong className="text-[#315347]">{companyInfo.founder}</strong>, we specialize in providing integrated facility management solutions that ensure your properties remain safe, functional, and well-maintained.
                            </p>
                        </div>

                        {/* Key Services Highlights */}
                        <div className="grid grid-cols-1 gap-3 mb-8">
                            {highlights.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#f6d274] flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Compact Stats */}
                        <div className="flex flex-wrap gap-8 pt-6 border-t border-gray-200">
                            <div>
                                <div className="text-sm text-gray-500 mb-1">Established</div>
                                <div className="text-2xl font-black text-[#315347]">{companyInfo.established}</div>
                            </div>
                            <div className="h-12 w-px bg-gray-200"></div>
                            <div>
                                <div className="text-sm text-gray-500 mb-1">Location</div>
                                <div className="text-2xl font-black text-[#315347]">Lagos, NG</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMain;
