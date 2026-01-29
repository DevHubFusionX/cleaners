import React from 'react';

// Import images from assets
import image4 from '../../../assets/comtranz/image4.avif';
import image9 from '../../../assets/comtranz/image9.avif';
import image10 from '../../../assets/comtranz/image10.avif';

const AboutImages = () => {
    return (
        <div className="relative" data-aos="fade-right">
            {/* Main large image */}
            <div className="relative z-10">
                <img
                    src={image4}
                    alt="Facility Management Team"
                    className="w-full max-w-md rounded-2xl shadow-2xl object-cover h-[400px]"
                />
            </div>

            {/* Overlapping image - top right */}
            <div className="absolute -top-8 -right-4 lg:right-0 z-20 hidden md:block">
                <img
                    src={image9}
                    alt="Professional Cleaning"
                    className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl shadow-xl object-cover border-4 border-white"
                />
            </div>

            {/* Overlapping image - bottom right */}
            <div className="absolute -bottom-8 right-8 lg:right-16 z-20 hidden md:block">
                <img
                    src={image10}
                    alt="Modern Facility"
                    className="w-40 h-40 lg:w-48 lg:h-48 rounded-2xl shadow-xl object-cover border-4 border-white"
                />
            </div>

            {/* Experience Badge */}
            <div className="absolute bottom-4 left-4 lg:-left-6 z-30 bg-[#315347] text-white rounded-2xl p-5 shadow-2xl">
                <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-xl bg-[#f6d274]/20 flex items-center justify-center">
                        <svg className="w-7 h-7 text-[#f6d274]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-3xl font-black text-[#f6d274]">7+</div>
                        <div className="text-sm font-medium opacity-90">Years Experience</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutImages;
