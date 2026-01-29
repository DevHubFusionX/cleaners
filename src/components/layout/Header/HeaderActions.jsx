import React from 'react';
import { Link } from 'react-router-dom';

const HeaderActions = () => {
    return (
        <div className="flex items-center gap-6">
            <Link
                to="/contact"
                className="bg-[#f6d274] hover:bg-[#e5c163] text-black px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2"
            >
                Request a Quote
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </Link>

            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#065f46] rounded-full flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                </div>
                <a href="tel:+2348038102340" className="text-lg font-bold text-[#065f46] hover:text-[#f6d274] transition-colors">
                    +234 803 810 2340
                </a>
            </div>
        </div>
    );
};

export default HeaderActions;
