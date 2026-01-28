import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: 'Facebook', url: '#', icon: Facebook },
        { name: 'Twitter', url: '#', icon: Twitter },
        { name: 'Instagram', url: '#', icon: Instagram },
        { name: 'LinkedIn', url: '#', icon: Linkedin },
    ];

    return (
        <footer className="bg-[#1a365d] pt-20 text-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
                    {/* Column 1: Company Info */}
                    <div className="lg:col-span-4 max-w-sm">
                        <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
                            <div className="w-34 h-24 flex items-center justify-center p-1 group-hover:scale-110 transition-transform duration-300 bg-white rounded-md">
                                <img src={logoImg} alt="Comtranz Logo" className="w-full h-full object-contain" />
                            </div>

                        </Link>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Ensuring safe, functional, and well-maintained building environments for residential, commercial, and institutional clients since 2018.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#f6d274] group-hover:text-black transition-colors duration-300">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Phone</span>
                                    <a href="tel:+2348038102340" className="text-white hover:text-[#f6d274] transition-colors">+234 803 810 2340</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#f6d274] group-hover:text-black transition-colors duration-300">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Email</span>
                                    <a href="mailto:info@comtranzglobal.com" className="text-white hover:text-[#f6d274] transition-colors">info@comtranzglobal.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-xl font-bold mb-8 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#f6d274] rounded-full"></span>
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Services', path: '/services' },
                                { name: 'Contact Us', path: '/contact' },
                                { name: 'Blog', path: '/blog' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path} className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#f6d274] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className="lg:col-span-3">
                        <h4 className="text-xl font-bold mb-8 relative inline-block">
                            Our Services
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#f6d274] rounded-full"></span>
                        </h4>
                        <ul className="space-y-4 text-gray-400">
                            <li>Facility Maintenance</li>
                            <li>Cleaning & Janitorial</li>
                            <li>Landscaping</li>
                            <li>Security Oversight</li>
                            <li>Pest Control</li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter & Social */}
                    <div className="lg:col-span-3">
                        <h4 className="text-xl font-bold mb-8 relative inline-block">
                            Our Newsletter
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#f6d274] rounded-full"></span>
                        </h4>
                        <p className="text-gray-400 mb-6 text-sm">Subscribe to get the latest updates and tips for your facility.</p>
                        <form className="mb-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative group">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-[#f6d274] transition-colors"
                                />
                                <button className="absolute right-2 top-2 bottom-2 bg-[#f6d274] hover:bg-[#e5c163] text-[#1a365d] rounded-lg px-4 flex items-center justify-center transition-colors">
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </form>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#f6d274] hover:text-[#1a365d] hover:-translate-y-1 transition-all duration-300 group"
                                >
                                    <span className="sr-only">{social.name}</span>
                                    <social.icon className="w-5 h-5 opacity-70 group-hover:opacity-100" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright Bar */}
                <div className="py-8 text-center text-sm text-gray-500">
                    <p>© {currentYear} Comtranz Global Facility Management. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
