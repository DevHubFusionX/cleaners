import React from 'react';
import AboutImages from './About/AboutImages';
import AboutContent from './About/AboutContent';

const About = () => {
    return (
        <section className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#315347]/5 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Images Section */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">
                        <AboutImages />
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <AboutContent />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
