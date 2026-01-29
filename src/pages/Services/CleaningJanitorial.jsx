import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Phone, Mail, Sparkles, Droplets, Users, Shield } from 'lucide-react';
import bgImage from '../../assets/comtranz/image3.avif';

const CleaningJanitorial = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        "Commercial Office Cleaning",
        "Residential Janitorial Services",
        "Post-Construction Cleaning",
        "Deep Steam Cleaning & Sanitization",
        "Window and Façade Cleaning",
        "Industrial Floor Maintenance"
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Header / Hero */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#315347] overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={bgImage} alt="Cleaning Services" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#315347]/85"></div>
                </div>
                <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-black mb-6" data-aos="fade-up">Cleaning & <span className="text-[#f6d274]">Janitorial</span></h1>
                    <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl" data-aos="fade-up" data-aos-delay="100">
                        Pristine environments for healthier living and working spaces.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 grid grid-cols-2 gap-4" data-aos="fade-right">
                            <div className="bg-emerald-50 p-8 rounded-3xl text-center shadow-sm border border-emerald-100/50">
                                <Sparkles className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                                <h4 className="font-bold text-[#315347]">Sparkling Clean</h4>
                            </div>
                            <div className="bg-amber-50 p-8 rounded-3xl text-center shadow-sm border border-amber-100/50">
                                <Droplets className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                                <h4 className="font-bold text-[#315347]">Eco-Friendly</h4>
                            </div>
                            <div className="bg-green-50 p-8 rounded-3xl text-center shadow-sm border border-green-100/50">
                                <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
                                <h4 className="font-bold text-[#315347]">Trained Staff</h4>
                            </div>
                            <div className="bg-[#315347] p-8 rounded-3xl text-center shadow-lg">
                                <Shield className="w-12 h-12 text-[#f6d274] mx-auto mb-4" />
                                <h4 className="font-bold text-white">Fully Insured</h4>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2" data-aos="fade-left">
                            <h2 className="text-3xl md:text-4xl font-black text-[#315347] mb-6">Environmentally Conscious Janitorial Standards</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                We believe that a clean workspace is a productive workspace. Our janitorial services utilize the latest equipment and eco-friendly products to ensure your environment is not only clean but safe for everyone.
                            </p>
                            <ul className="grid grid-cols-1 gap-4 mb-8">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-[#f6d274]/20 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle2 className="w-4 h-4 text-[#315347]" strokeWidth={3} />
                                        </div>
                                        <span className="text-gray-700 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 lg:py-28 bg-[#f6d274] relative overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-[#315347] mb-8" data-aos="fade-up">Experience the Comtranz Clean.</h2>
                    <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="100">
                        <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-[#315347] text-white rounded-2xl font-bold text-lg hover:bg-[#152c4b] hover:scale-105 transition-all duration-300 shadow-xl">
                            <Mail className="w-5 h-5 text-[#f6d274]" />
                            Book a Cleaning Audit
                        </Link>
                        <a href="tel:+2348038102340" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-[#315347] rounded-2xl font-bold text-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 border border-transparent shadow-xl">
                            <Phone className="w-5 h-5 text-gray-400" />
                            Call Us Now
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

export default CleaningJanitorial;
