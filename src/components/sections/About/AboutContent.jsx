import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent = () => {
    const coreValues = [
        { text: 'Integrity', icon: '✓' },
        { text: 'Professionalism', icon: '✓' },
        { text: 'Reliability', icon: '✓' },
        { text: 'Customer Focus', icon: '✓' },
    ];

    return (
        <div data-aos="fade-left">
            {/* Tagline */}
            <p className="text-[#f6d274] text-sm font-semibold uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-[#f6d274]"></span>
                About Us
            </p>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1a365d] leading-tight mb-6">
                Your Trusted Facility Management Partner
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8">
                Comtranz Global Facility Management is a Nigerian-registered company (RC: 1525588) specializing in integrated facility management services since 2018. We ensure safe, functional, and well-maintained building environments for residential, commercial, and institutional clients.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                {coreValues.map((value, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="w-8 h-8 rounded-lg bg-[#1a365d] flex items-center justify-center">
                            <svg className="w-4 h-4 text-[#f6d274]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <span className="text-[#1a365d] font-semibold text-sm lg:text-base">{value.text}</span>
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-[#f6d274] hover:bg-[#e5c163] text-black px-7 py-3.5 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </Link>
        </div>
    );
};

export default AboutContent;
