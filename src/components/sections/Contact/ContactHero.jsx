import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../../../assets/comtranz/image11.avif';

const ContactHero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#1a365d] overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={bgImage}
                    alt="Contact Us"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#1a365d]/85"></div>
            </div>

            {/* Background Decorations */}
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f6d274]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#f6d274]/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
                <nav className="flex justify-center items-center gap-2 text-sm font-medium text-gray-400 mb-6" data-aos="fade-up">
                    <Link to="/" className="hover:text-[#f6d274] transition-colors">Home</Link>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    <span className="text-[#f6d274]">Contact Us</span>
                </nav>

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-4" data-aos="fade-up" data-aos-delay="100">
                    Get in <span className="text-[#f6d274]">Touch</span>
                </h1>
                <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                    Have a question or need a professional facility management solution? Reach out to our expert team today and let's discuss how we can help.
                </p>
            </div>
        </section>
    );
};

export default ContactHero;
