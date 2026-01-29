import React, { useEffect } from 'react';
import AboutHero from '../components/sections/About/AboutHero';
import AboutMain from '../components/sections/About/AboutMain';
import MissionVision from '../components/sections/About/MissionVision';
import ValuesGrid from '../components/sections/About/ValuesGrid';
import { Link } from 'react-router-dom';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen">
            <AboutHero />
            <AboutMain />
            <MissionVision />
            <ValuesGrid />

            {/* CTA Section */}
            <section className="py-20 lg:py-32 bg-[#f6d274] relative overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#065f46] mb-8 leading-tight max-w-4xl mx-auto" data-aos="fade-up">
                        Ready to Transform Your <br className="hidden md:block" /> Facility Management?
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="100">
                        <Link
                            to="/contact"
                            className="px-10 py-5 bg-[#065f46] text-white rounded-2xl font-bold text-lg hover:bg-emerald-900 hover:scale-105 transition-all duration-300 shadow-xl"
                        >
                            Get Started Now
                        </Link>
                        <a
                            href="tel:+2348038102340"
                            className="px-10 py-5 bg-white text-[#065f46] rounded-2xl font-bold text-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-xl border border-transparent"
                        >
                            Give Us a Call
                        </a>
                    </div>
                </div>
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#065f46]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
            </section>
        </div>
    );
};

export default About;
