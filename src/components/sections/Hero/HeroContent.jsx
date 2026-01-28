import React from 'react';
import { Link } from 'react-router-dom';

const HeroContent = () => {
    return (
        <div className="max-w-2xl" data-aos="fade-right">
            {/* Tagline */}
            <p className="text-[#f6d274] text-sm md:text-base font-semibold uppercase tracking-widest mb-4">
                Trusted Facility Management Partner
            </p>

            {/* Heading */}
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
                Excellence in{' '}
                <span className="text-[#f6d274] block mt-2">Facility</span>
                <span className="block mt-1">Management</span>
            </h1>

            {/* Description */}
            <p className="text-gray-200 text-base md:text-lg max-w-lg mb-8 leading-relaxed font-light border-l-4 border-[#f6d274] pl-5">
                Providing comprehensive facility management solutions across Nigeria. From maintenance to security, we deliver reliable services that keep your facilities running smoothly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
                <Link
                    to="/services"
                    className="bg-[#f6d274] hover:bg-[#e5c163] text-black px-7 py-3.5 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                    Our Services
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Link>

                <Link
                    to="/contact"
                    className="border border-white/40 backdrop-blur-sm bg-white/5 text-white hover:bg-white/15 px-7 py-3.5 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2 hover:border-white"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Contact Us
                </Link>
            </div>
        </div>
    );
};

export default HeroContent;
