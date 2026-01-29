import React from 'react';
import { Link } from 'react-router-dom';
import PricingCard from './Pricing/PricingCard';

const Pricing = () => {
    const plans = [
        {
            name: 'Basic',
            price: '49.99',
            description: 'Essential cleaning services for small offices and residential units.',
            features: [
                'Dusting & wipe-down',
                'Vacuuming & mopping',
                'Full sanitization',
                'Trash removal',
            ],
            popular: false,
        },
        {
            name: 'Standard',
            price: '79.99',
            description: 'Comprehensive maintenance for medium businesses and retail spaces.',
            features: [
                'Full sanitization',
                'Scrubbing of sinks',
                'Exterior full cleaning',
                'Window polishing',
            ],
            popular: true,
        },
        {
            name: 'Premium',
            price: '99.99',
            description: 'Full-service facility management for large estates and corporate HQ.',
            features: [
                'Exterior full cleaning',
                'Fridge & oven cleaning',
                'Carpet deep cleaning',
                'Extra focus on areas',
            ],
            popular: false,
        },
    ];

    return (
        <section className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#f6d274]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
                    <p className="text-[#f6d274] text-sm font-semibold uppercase tracking-widest mb-3 inline-flex items-center gap-2">
                        <span className="w-8 h-0.5 bg-[#f6d274]"></span>
                        Plans and Pricing
                        <span className="w-8 h-0.5 bg-[#f6d274]"></span>
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#065f46] leading-tight mb-4">
                        Affordable Cleaning Plans for Every Need
                    </h2>
                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                        Choose from our range of flexible cleaning and maintenance plans designed to fit your specific requirements and budget.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
                    {plans.map((plan, index) => (
                        <PricingCard key={index} plan={plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
