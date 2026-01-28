import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Phone, Mail, ArrowRight, Shield, Tool, Clock } from 'lucide-react';
import bgImage from '../../assets/comtranz/image2.avif';

const FacilityMaintenance = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        "Plumbing Repairs & Maintenance",
        "Electrical Systems Installation & Repair",
        "HVAC (Heating, Ventilation, & Air Conditioning) Services",
        "Structural Maintenance & General Repairs",
        "Building Audits & Condition Assessments",
        "Water Management Systems"
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Header / Hero */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#1a365d] overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={bgImage} alt="Facility Maintenance" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#1a365d]/85"></div>
                </div>
                <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-black mb-6" data-aos="fade-up">Facility <span className="text-[#f6d274]">Maintenance</span></h1>
                    <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl" data-aos="fade-up" data-aos-delay="100">
                        Reliable and professional maintenance solutions to keep your facility in optimal condition.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div data-aos="fade-right">
                            <h2 className="text-3xl md:text-4xl font-black text-[#1a365d] mb-6">Expert Solutions for Your Property</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                At Comtranz Global, we understand that well-maintained facilities are crucial for the productivity and safety of your occupants. Our comprehensive maintenance programs are designed to identify and resolve issues before they become costly repairs.
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#f6d274] flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
                            <div className="bg-gray-50 p-8 rounded-3xl text-center shadow-sm">
                                <Shield className="w-12 h-12 text-[#1a365d] mx-auto mb-4" />
                                <h4 className="font-bold text-[#1a365d]">Safety First</h4>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-3xl text-center shadow-sm">
                                <Tool className="w-12 h-12 text-[#1a365d] mx-auto mb-4" />
                                <h4 className="font-bold text-[#1a365d]">Expert Tools</h4>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-3xl text-center shadow-sm">
                                <Clock className="w-12 h-12 text-[#1a365d] mx-auto mb-4" />
                                <h4 className="font-bold text-[#1a365d]">24/7 Response</h4>
                            </div>
                            <div className="bg-[#f6d274] p-8 rounded-3xl text-center shadow-md">
                                <h3 className="text-4xl font-black text-[#1a365d]">99%</h3>
                                <p className="text-[#1a365d] font-bold text-xs uppercase tracking-wider">Uptime</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 lg:py-28 bg-[#1a365d] relative overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-8" data-aos="fade-up">Need Expert Maintenance Services?</h2>
                    <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="100">
                        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#f6d274] text-[#1a365d] rounded-xl font-bold hover:bg-[#e5c163] transition-all duration-300">
                            <Mail className="w-5 h-5" />
                            Request a Quote
                        </Link>
                        <a href="tel:+2348038102340" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-xl font-bold border border-white/20 hover:bg-white/20 transition-all duration-300">
                            <Phone className="w-5 h-5" />
                            Call Us Now
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FacilityMaintenance;
