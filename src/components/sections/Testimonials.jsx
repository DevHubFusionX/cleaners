import React, { useState, useEffect, useCallback } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Import local images to use for testimonials
import img1 from '../../assets/comtranz/image5.avif';
import img2 from '../../assets/comtranz/image6.avif';
import img3 from '../../assets/comtranz/image7.avif';

const testimonials = [
    {
        name: "Engr. Wale Adenuga",
        role: "Facility Manager, Commercial Hub",
        content: "Comtranz Global has transformed how we manage our commercial properties. Their technical expertise and responsive maintenance team have significantly reduced our downtime and operational costs.",
        image: img1,
        rating: 5
    },
    {
        name: "Mrs. Chioma Okeke",
        role: "Estate Chairperson, Victoria Island",
        content: "We've tried several facility management companies, but none match the professionalism and attention to detail provided by Comtranz. Our residents are extremely satisfied with the level of service.",
        image: img2,
        rating: 5
    },
    {
        name: "Mr. David Adeleke",
        role: "Operations Director, Corporate HQ",
        content: "Their integrated approach to FM is seamless. From janitorial services to complex electrical maintenance, Comtranz Global handles it all with remarkable efficiency and integrity.",
        image: img3,
        rating: 5
    }
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextSlide = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setTimeout(() => setIsAnimating(false), 500);
    }, [isAnimating]);

    const prevSlide = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setTimeout(() => setIsAnimating(false), 500);
    }, [isAnimating]);

    useEffect(() => {
        const timer = setInterval(nextSlide, 6000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section className="py-24 lg:py-32 bg-[#065f46] relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#f6d274] rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-emerald-400 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center mb-16" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#f6d274] font-bold text-xs uppercase tracking-widest mb-4">
                        <span className="w-2 h-2 rounded-full bg-[#f6d274]"></span>
                        Testimonials
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
                        Hear What Our Clients <span className="text-[#f6d274]">Say About Us</span>
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto relative group">
                    {/* Carousel Container */}
                    <div className="relative overflow-hidden min-h-[450px] sm:min-h-[400px] md:min-h-[350px] flex items-center">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-all duration-700 ease-in-out transform flex flex-col items-center justify-center ${index === activeIndex
                                    ? 'opacity-100 translate-x-0'
                                    : index < activeIndex
                                        ? 'opacity-0 -translate-x-full'
                                        : 'opacity-0 translate-x-full'
                                    }`}
                            >
                                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl relative w-full max-w-4xl mx-auto">
                                    <Quote className="absolute top-4 right-4 sm:top-8 sm:right-8 w-8 h-8 sm:w-12 sm:h-12 text-[#f6d274]/20" />

                                    <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12">
                                        <div className="relative flex-shrink-0">
                                            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#f6d274]/30 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                                />
                                            </div>
                                            <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-[#f6d274] p-1.5 sm:p-2 rounded-lg sm:rounded-xl shadow-lg">
                                                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[#065f46] fill-current" />
                                            </div>
                                        </div>

                                        <div className="flex-grow text-center md:text-left">
                                            <div className="flex justify-center md:justify-start gap-1 mb-3 sm:mb-4">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-[#f6d274] fill-current" />
                                                ))}
                                            </div>
                                            <p className="text-base sm:text-lg md:text-xl text-gray-200 italic mb-4 sm:mb-6 leading-relaxed font-medium">
                                                "{testimonial.content}"
                                            </p>
                                            <div>
                                                <h4 className="text-lg sm:text-xl font-black text-white mb-0.5 sm:mb-1">{testimonial.name}</h4>
                                                <p className="text-[#f6d274] font-bold text-[10px] sm:text-xs uppercase tracking-widest">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center mt-8 sm:mt-12 gap-4 sm:gap-6">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-[#f6d274] hover:text-[#065f46] hover:border-[#f6d274] transition-all duration-300 transform active:scale-95 group"
                        >
                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-[#f6d274] hover:text-[#065f46] hover:border-[#f6d274] transition-all duration-300 transform active:scale-95 group"
                        >
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center mt-6 sm:mt-8 gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`h-1.5 sm:h-2 transition-all duration-300 rounded-full ${index === activeIndex ? 'w-6 sm:w-8 bg-[#f6d274]' : 'w-1.5 sm:w-2 bg-white/20 hover:bg-white/40'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
