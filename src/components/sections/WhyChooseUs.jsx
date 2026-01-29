import React from 'react';

// Import background image
import chooseImage from '../../assets/comtranz/image6.avif';

const WhyChooseUs = () => {
    const stats = [
        { value: '100', suffix: '%', label: 'Satisfaction Rate' },
        { value: '180', suffix: '+', label: 'Successful Projects' },
        { value: '370', suffix: '+', label: 'Happy Clients Served' },
        { value: '90', suffix: '+', label: 'Cleaning Professionals' },
    ];

    return (
        <section className="py-20 lg:py-28 relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={chooseImage}
                    alt="Facility Management"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#065f46]/90"></div>
            </div>

            {/* Decorative blur elements */}
            <div className="absolute inset-0 opacity-10 z-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-[#f6d274] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f6d274] rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Header */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-16" data-aos="fade-up">
                    <div className="max-w-xl">
                        <p className="text-[#f6d274] text-sm font-semibold uppercase tracking-widest mb-3 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-[#f6d274]"></span>
                            Why Choose Us
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                            Making a Difference, One Clean at a Time
                        </h2>
                    </div>
                    <p className="text-gray-300 text-base lg:text-lg max-w-md leading-relaxed">
                        We combine professionalism, reliability, and innovation to deliver facility management solutions that exceed expectations.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" data-aos="fade-up" data-aos-delay="100">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 text-center hover:bg-white/10 transition-colors duration-300"
                        >
                            <div className="flex items-baseline justify-center mb-2">
                                <span className="text-4xl md:text-5xl lg:text-6xl font-black text-[#f6d274]">
                                    {stat.value}
                                </span>
                                <span className="text-2xl md:text-3xl font-bold text-[#f6d274]">
                                    {stat.suffix}
                                </span>
                            </div>
                            <p className="text-white/80 text-sm lg:text-base font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
