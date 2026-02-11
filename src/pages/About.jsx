import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import AboutHero from '../components/sections/About/AboutHero';
import AboutMain from '../components/sections/About/AboutMain';
import MissionVision from '../components/sections/About/MissionVision';
import ValuesGrid from '../components/sections/About/ValuesGrid';
import { Link } from 'react-router-dom';

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Comtranz Global Facility Management",
    "url": "https://www.comtranzglobal.com",
    "logo": "https://www.comtranzglobal.com/favicon.ico",
    "foundingDate": "2018",
    "founder": {
        "@type": "Person",
        "name": "Festus Alase"
    },
    "description": "Nigeria's most trusted and innovative provider of integrated facility management solutions, enabling sustainable and efficient environments across residential, commercial, and institutional properties.",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lagos",
        "addressCountry": "NG"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+234-803-810-2340",
        "contactType": "Customer Service",
        "email": "comtranzcgc@gmail.com",
        "areaServed": "NG"
    }
};

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="About Us"
                description="Learn about Comtranz Global Facility Management — Nigeria's trusted facility management company founded in 2018. Discover our mission, vision, values, and commitment to excellence in property management."
                path="/about"
                structuredData={organizationSchema}
            />
            <AboutHero />
            <AboutMain />
            <MissionVision />
            <ValuesGrid />

            {/* CTA Section */}
            <section className="py-20 lg:py-32 bg-[#f6d274] relative overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#315347] mb-8 leading-tight max-w-4xl mx-auto" data-aos="fade-up">
                        Ready to Transform Your <br className="hidden md:block" /> Facility Management?
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="100">
                        <Link
                            to="/contact"
                            className="px-10 py-5 bg-[#315347] text-white rounded-2xl font-bold text-lg hover:bg-emerald-900 hover:scale-105 transition-all duration-300 shadow-xl"
                        >
                            Get Started Now
                        </Link>
                        <a
                            href="tel:+2348038102340"
                            className="px-10 py-5 bg-white text-[#315347] rounded-2xl font-bold text-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-xl border border-transparent"
                        >
                            Give Us a Call
                        </a>
                    </div>
                </div>
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#315347]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
            </section>
        </div>
    );
};

export default About;
