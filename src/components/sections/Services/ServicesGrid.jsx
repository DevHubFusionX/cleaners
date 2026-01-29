import React from 'react';
import { services } from '../../../data/servicesData';
import ServiceCard from './ServiceCard';

// Import images
import img1 from '../../../assets/comtranz/image2.avif';
import img2 from '../../../assets/comtranz/image3.avif';
import img3 from '../../../assets/comtranz/image5.avif';
import img4 from '../../../assets/comtranz/image7.avif';
import img5 from '../../../assets/comtranz/image9.avif';
import img6 from '../../../assets/comtranz/image10.avif';

const ServicesGrid = () => {
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
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                    <p className="text-[#f6d274] text-sm font-semibold uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
                        <span className="w-8 h-0.5 bg-[#f6d274]"></span>
                        What We Offer
                        <span className="w-8 h-0.5 bg-[#f6d274]"></span>
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#315347] leading-tight mb-6">
                        Comprehensive Facility Management Solutions
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        From routine maintenance to specialized consulting, we provide end-to-end facility management services designed to keep your properties in optimal condition.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            image={serviceImages[service.id]}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
