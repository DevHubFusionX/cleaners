import React, { useState } from 'react';

const FAQAccordion = ({ faqs }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => {
                const isActive = activeIndex === index;
                return (
                    <div
                        key={index}
                        className={`group border rounded-2xl transition-all duration-300 ${isActive
                            ? 'border-[#f6d274] bg-white shadow-xl'
                            : 'border-gray-200 bg-gray-50/50 hover:bg-white hover:shadow-md'
                            }`}
                    >
                        <button
                            onClick={() => setActiveIndex(isActive ? -1 : index)}
                            className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                        >
                            <span className={`font-bold text-lg transition-colors duration-300 ${isActive ? 'text-[#315347]' : 'text-gray-700'
                                }`}>
                                {faq.question}
                            </span>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isActive ? 'bg-[#315347] text-[#f6d274]' : 'bg-gray-200 text-gray-500'
                                }`}>
                                <svg
                                    className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default FAQAccordion;
