import React from 'react';
import {
    ShieldCheck,
    Briefcase,
    Handshake,
    Rocket,
    Target,
    Leaf
} from 'lucide-react';
import valuesImage from '../../../assets/comtranz/image6.avif';

const ValuesGrid = () => {
    const values = [
        {
            title: "Integrity",
            desc: "We uphold the highest ethical standards in all our interactions and business processes.",
            icon: ShieldCheck,
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            title: "Professionalism",
            desc: "Expertly trained manpower focused on delivering quality and excellence in every task.",
            icon: Briefcase,
            color: "text-amber-600",
            bg: "bg-amber-50"
        },
        {
            title: "Reliability",
            desc: "A consistent partner you can depend on for all your facility maintenance needs.",
            icon: Handshake,
            color: "text-emerald-600",
            bg: "bg-emerald-50"
        },
        {
            title: "Innovation",
            desc: "Leveraging modern processes and technology to optimize property performance.",
            icon: Rocket,
            color: "text-purple-600",
            bg: "bg-purple-50"
        },
        {
            title: "Customer Focus",
            desc: "Tailored solutions that prioritize the unique requirements of our diverse clientele.",
            icon: Target,
            color: "text-red-600",
            bg: "bg-red-50"
        },
        {
            title: "Sustainability",
            desc: "Commitment to creating sustainable and healthy building environments.",
            icon: Leaf,
            color: "text-green-600",
            bg: "bg-green-50"
        }
    ];

    return (
        <section className="py-20 lg:py-28 bg-white overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    {/* Left Side: Header & Image */}
                    <div className="lg:w-2/5 lg:sticky lg:top-24 h-fit" data-aos="fade-right">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f6d274]/10 border border-[#f6d274]/20 text-[#1a365d] font-bold text-xs uppercase tracking-widest mb-5">
                            <span className="w-2 h-2 rounded-full bg-[#f6d274] animate-pulse"></span>
                            Our Core Values
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1a365d] leading-tight mb-5">
                            The Core Principles That Drive Us
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                            At Comtranz Global, our values form the foundation of every service we deliver.
                        </p>

                        {/* Image */}
                        <div className="rounded-3xl overflow-hidden shadow-xl mb-6">
                            <img
                                src={valuesImage}
                                alt="Our Values"
                                className="w-full h-[280px] object-cover"
                            />
                        </div>

                        {/* Stats Badge */}
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1a365d] to-[#2d4a7c] text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="text-4xl font-black text-[#f6d274] mb-2">100%</div>
                                <p className="text-sm font-medium text-gray-300 leading-relaxed">
                                    Committed to delivering excellence in every project we undertake
                                </p>
                            </div>
                            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-[#f6d274]/10 rounded-full blur-2xl"></div>
                        </div>
                    </div>

                    {/* Right Side: Values Cards */}
                    <div className="lg:w-3/5 space-y-5">
                        {values.map((v, index) => (
                            <div
                                key={index}
                                className="group relative flex flex-col md:flex-row gap-5 p-6 rounded-2xl bg-white border-2 border-gray-100 hover:border-[#f6d274]/30 hover:shadow-lg transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                {/* Icon Container */}
                                <div className={`w-14 h-14 rounded-xl ${v.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                    <v.icon className={`w-7 h-7 ${v.color}`} />
                                </div>

                                {/* Content */}
                                <div className="flex-grow">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h4 className="text-lg md:text-xl font-black text-[#1a365d]">
                                            {v.title}
                                        </h4>
                                        <div className="h-px flex-grow bg-gray-100 hidden md:block"></div>
                                        <span className="text-sm font-bold text-gray-300 hidden md:block">
                                            0{index + 1}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                        {v.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValuesGrid;
