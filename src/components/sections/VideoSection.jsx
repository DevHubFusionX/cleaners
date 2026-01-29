import React, { useState } from 'react';

// Import video thumbnail
import videoThumb from '../../assets/comtranz/image3.avif';

const VideoSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="py-20 lg:py-28 bg-gray-50">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="relative max-w-5xl mx-auto" data-aos="fade-up">
                    {/* Video Container */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                        {!isPlaying ? (
                            <>
                                {/* Thumbnail */}
                                <img
                                    src={videoThumb}
                                    alt="Facility Management Video"
                                    className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-[#315347]/40 group-hover:bg-[#315347]/50 transition-colors duration-300"></div>

                                {/* Play Button */}
                                <button
                                    onClick={() => setIsPlaying(true)}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <div className="relative">
                                        {/* Pulse animation */}
                                        <div className="absolute inset-0 bg-[#f6d274] rounded-full animate-ping opacity-25"></div>
                                        <div className="relative w-20 h-20 md:w-24 md:h-24 bg-[#f6d274] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                                            <svg className="w-8 h-8 md:w-10 md:h-10 text-[#315347] ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </button>

                                {/* Caption */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <p className="text-white text-lg md:text-xl font-bold drop-shadow-lg">
                                        See How We Transform Your Facilities
                                    </p>
                                </div>
                            </>
                        ) : (
                            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] bg-black">
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                                    title="Facility Management Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                {/* Close button */}
                                <button
                                    onClick={() => setIsPlaying(false)}
                                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors z-10"
                                >
                                    <svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#f6d274] rounded-2xl -z-10"></div>
                    <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-[#315347]/20 rounded-2xl -z-10"></div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
