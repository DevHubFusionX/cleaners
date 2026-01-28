import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { X, Home, Info, Hammer, BookOpen, Mail, Phone, ArrowRight, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';
import Logo from './Logo';

const MobileMenu = ({ isOpen, onClose }) => {
    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const links = [
        { name: 'Home', path: '/', icon: Home },
        { name: 'About Us', path: '/about', icon: Info },
        { name: 'Services', path: '/services', icon: Hammer },
        { name: 'Blog', path: '/blog', icon: BookOpen },
        { name: 'Contact Us', path: '/contact', icon: Mail },
    ];

    const socialLinks = [
        { name: 'Facebook', url: '#', icon: Facebook },
        { name: 'Twitter', url: '#', icon: Twitter },
        { name: 'Instagram', url: '#', icon: Instagram },
        { name: 'LinkedIn', url: '#', icon: Linkedin },
    ];

    return (
        <>
            {/* Backdrop with heavy blur for focus on sidebar */}
            <div
                className={`fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300 lg:hidden ${isOpen ? 'z-[1000] opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                    }`}
                onClick={onClose}
            />

            {/* Sidebar with solid white background */}
            <div
                className={`fixed top-0 right-0 h-[100dvh] w-[320px] bg-white z-[1001] shadow-[0_0_50px_rgba(0,0,0,0.3)] transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full bg-white overflow-hidden">
                    {/* Header: White background, Logo with text branding */}
                    <div className="p-6 flex items-center justify-between border-b border-gray-100 bg-white sticky top-0 z-10">
                        <Logo />
                        <button
                            onClick={onClose}
                            className="p-2.5 bg-gray-50 text-gray-500 hover:text-red-500 hover:bg-red-50 transition-all rounded-xl"
                            aria-label="Close menu"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Navigation: Clean white list with dark text */}
                    <nav className="flex-1 overflow-y-auto p-6 bg-white">
                        <div className="mb-4">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Navigation</span>
                        </div>
                        <ul className="flex flex-col gap-2">
                            {links.map((link) => (
                                <li key={link.name}>
                                    <NavLink
                                        to={link.path}
                                        onClick={onClose}
                                        className={({ isActive }) =>
                                            `flex items-center justify-between px-5 py-4 rounded-2xl text-sm font-bold transition-all duration-300 ${isActive
                                                ? 'bg-[#1a365d] text-white shadow-xl translate-x-1'
                                                : 'text-[#1a365d] hover:bg-gray-100'
                                            }`
                                        }
                                    >
                                        <div className="flex items-center gap-4">
                                            <link.icon className={`h-5 w-5 ${link.name === 'Home' ? 'text-inherit' : ''}`} strokeWidth={2.5} />
                                            <span>{link.name}</span>
                                        </div>
                                        <ArrowRight className="h-4 w-4 opacity-30" />
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Bottom Utility Sections: Clean and Solid */}
                    <div className="p-6 bg-gray-50/50 border-t border-gray-100 mt-auto">
                        {/* Contact Info */}
                        <div className="mb-6">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4 block">Our Details</span>
                            <div className="space-y-4">
                                <a href="tel:+2348038102340" className="flex items-center gap-3 text-sm font-bold text-[#1a365d] hover:text-[#f6d274] transition-colors">
                                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-[#f6d274]" />
                                    </div>
                                    +234 803 810 2340
                                </a>
                                <a href="mailto:info@comtranzglobal.com" className="flex items-center gap-3 text-sm font-bold text-[#1a365d] hover:text-[#f6d274] transition-colors">
                                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-[#f6d274]" />
                                    </div>
                                    info@comtranzglobal.com
                                </a>
                            </div>
                        </div>

                        {/* Social Links & CTA */}
                        <div className="space-y-6">
                            <div className="flex justify-between items-center bg-white p-3 rounded-2xl shadow-sm">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:bg-[#1a365d] hover:text-white transition-all duration-300"
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>

                            <button className="w-full bg-[#1a365d] text-white px-6 py-4 rounded-2xl font-black text-sm transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-[#1a365d]/20 active:scale-95">
                                Request a Quote
                                <ArrowRight className="h-4 w-4 text-[#f6d274]" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
