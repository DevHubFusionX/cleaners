import React, { useEffect } from 'react';
import ServicesHero from '../components/sections/Services/ServicesHero';
import ServicesGrid from '../components/sections/Services/ServicesGrid';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen">
            <ServicesHero />
            <ServicesGrid />

            {/* CTA Section */}
            <section className="py-20 lg:py-28 bg-[#315347] relative overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight" data-aos="fade-up">
                            Ready to Experience Premium Facility Management?
                        </h2>
                        <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                            Let's discuss how our comprehensive solutions can transform your property maintenance and operations.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-10 py-5 bg-[#f6d274] text-[#315347] rounded-2xl font-bold text-lg hover:bg-[#e5c163] hover:scale-105 transition-all duration-300 shadow-xl"
                            >
                                <Mail className="w-5 h-5" />
                                Request a Quote
                            </Link>
                            <a
                                href="tel:+2348038102340"
                                className="inline-flex items-center gap-2 px-10 py-5 bg-white/10 text-white rounded-2xl font-bold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 border-2 border-white/20"
                            >
                                <Phone className="w-5 h-5" />
                                Call Us Now
                            </a>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#f6d274]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f6d274]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
            </section>
        </div>
    );
};

export default Services;
