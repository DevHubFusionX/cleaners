import React, { useState } from 'react';
import Logo from './Header/Logo';
import NavLinks from './Header/NavLinks';
import HeaderActions from './Header/HeaderActions';
import MobileMenu from './Header/MobileMenu';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-[999] py-3 shadow-md border-b border-gray-100 transition-all duration-300">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Logo />

                <nav className="hidden lg:block">
                    <NavLinks />
                </nav>

                <div className="hidden lg:block">
                    <HeaderActions />
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden p-2 text-[#315347] hover:bg-gray-100 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

                <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
            </div>
        </header>
    );
};

export default Header;
