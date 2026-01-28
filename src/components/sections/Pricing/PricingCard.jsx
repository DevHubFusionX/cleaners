import React from 'react';
import { Link } from 'react-router-dom';

const PricingCard = ({ plan }) => {
    return (
        <div className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-[#f6d274] scale-105' : ''}`}>
            {/* Popular Badge */}
            {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#f6d274] text-black text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                        Most Popular
                    </span>
                </div>
            )}

            {/* Plan Icon */}
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${plan.popular ? 'bg-[#1a365d]' : 'bg-[#f6d274]/20'}`}>
                <svg className={`w-8 h-8 ${plan.popular ? 'text-[#f6d274]' : 'text-[#1a365d]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            </div>

            {/* Plan Name */}
            <h3 className="text-xl font-bold text-[#1a365d] mb-2">{plan.name}</h3>

            {/* Price */}
            <div className="flex items-baseline mb-4">
                <span className="text-2xl font-bold text-[#1a365d]">$</span>
                <span className="text-5xl font-black text-[#1a365d]">{plan.price}</span>
                <span className="text-gray-500 ml-2">/month</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">{plan.description}</p>

            {/* Features */}
            <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#1a365d]/10 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-[#1a365d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                ))}
            </ul>

            {/* CTA Button */}
            <Link
                to="/pricing"
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-300 ${plan.popular
                        ? 'bg-[#f6d274] hover:bg-[#e5c163] text-black shadow-lg hover:shadow-xl'
                        : 'bg-[#1a365d] hover:bg-[#2d4a7c] text-white'
                    }`}
            >
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </Link>
        </div>
    );
};

export default PricingCard;
