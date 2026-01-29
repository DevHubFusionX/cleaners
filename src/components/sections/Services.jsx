import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './Services/ServiceCard';
import { services } from '../../data/servicesData';

// Import images
import img1 from '../../assets/comtranz/image2.avif';
import img2 from '../../assets/comtranz/image3.avif';
import img3 from '../../assets/comtranz/image5.avif';
import img4 from '../../assets/comtranz/image7.avif';
import img5 from '../../assets/comtranz/image9.avif';
import img6 from '../../assets/comtranz/image10.avif';

const Services = () => {
    // Map service IDs to images
    const serviceImages = {
        'facility-maintenance': img1,
        'cleaning-janitorial': img2,
        'landscaping': img3,
        'security-oversight': img4,
        'pest-control': img5,
        'facility-consultancy': img6
    };

    return (
        <section className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
            {/* Clean Pattern Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dotted-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" fill="#315347" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dotted-grid)" />
                </svg>
            </div>

            {/* Decorative soft glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f6d274]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    {/* Left Panel - Header */}
                    <div className="w-full lg:w-1/3 lg:sticky lg:top-32 lg:self-start" data-aos="fade-right">
                        <p className="text-[#f6d274] text-sm font-semibold uppercase tracking-widest mb-3 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-[#f6d274]"></span>
                            What We Provide
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#315347] leading-tight mb-6">
                            Facility Management Services
                        </h2>
                        <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8">
                            We offer comprehensive facility management solutions to ensure your premises remain safe, functional, and well-maintained.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-[#f6d274] hover:bg-[#e5c163] text-black px-7 py-3.5 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Request a Quote
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>

                    {/* Right Panel - Service Cards Grid */}
                    <div className="w-full lg:w-2/3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-left">
                            {services.map((service, index) => (
                                <ServiceCard
                                    key={service.id}
                                    service={service}
                                    image={serviceImages[service.id]}
                                    delay={index * 100}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
