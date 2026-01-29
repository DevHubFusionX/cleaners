import React from 'react';
import FAQAccordion from './FAQ/FAQAccordion';

const FAQ = () => {
    const faqs = [
        {
            question: "What range of services do you offer?",
            answer: "We offer comprehensive facility management including electrical and plumbing maintenance, cleaning and janitorial services, landscaping, security oversight, pest control, and facility consultancy/audits."
        },
        {
            question: "How do I request a quote for your services?",
            answer: "You can request a quote by clicking the 'Request a Quote' button on our services page or by contacting us directly via phone at +234 803 810 2340 or email at info@comtranzglobal.com."
        },
        {
            question: "What areas of Nigeria do you cover?",
            answer: "While we are based in Lagos, we provide integrated facility management solutions to residential, commercial, and institutional clients across major cities in Nigeria."
        },
        {
            question: "Do you provide eco-friendly cleaning services?",
            answer: "Yes, we prioritize health and safety by using environmentally friendly cleaning products and sustainable waste management practices wherever possible."
        },
        {
            question: "How do you ensure service quality?",
            answer: "We maintain high standards through rigorous staff training, regular quality audits, building condition monitoring, and a strong commitment to customer feedback and continuous improvement."
        }
    ];

    return (
        <section className="py-20 lg:py-28 bg-white overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Left Column - Text Content */}
                    <div className="w-full lg:w-2/5" data-aos="fade-right">
                        <p className="text-[#f6d274] text-sm font-semibold uppercase tracking-widest mb-3 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-[#f6d274]"></span>
                            Common Questions
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#065f46] leading-tight mb-6">
                            Frequency Asked <br /> Questions
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Got questions about our services? We've gathered the most common inquiries to help you understand how we can help you maintain your facilities better.
                        </p>

                        {/* Static Help Card */}
                        <div className="bg-[#065f46] rounded-2xl p-8 text-white relative overflow-hidden group">
                            <div className="relative z-10">
                                <h4 className="text-xl font-bold mb-2">Still have questions?</h4>
                                <p className="text-gray-300 text-sm mb-6">Our team is ready to help you with anything you need.</p>
                                <a
                                    href="tel:+2348038102340"
                                    className="inline-flex items-center gap-2 bg-[#f6d274] text-[#065f46] px-6 py-3 rounded-xl font-bold text-sm hover:scale-105 transition-transform duration-300"
                                >
                                    Contact Support
                                </a>
                            </div>
                            {/* Decorative Circle */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#f6d274]/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                        </div>
                    </div>

                    {/* Right Column - Accordion */}
                    <div className="w-full lg:w-3/5" data-aos="fade-left">
                        <FAQAccordion faqs={faqs} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
