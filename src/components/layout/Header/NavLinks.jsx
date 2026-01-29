import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
    const links = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact Us', path: '/contact' },
    ];

    return (
        <ul className="flex items-center gap-8">
            {links.map((link) => (
                <li key={link.name} className="relative group">
                    <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                            `text-sm font-bold uppercase tracking-wider bg-transparent p-2 rounded-lg transition-all duration-300 ${isActive
                                ? 'text-[#f6d274]'
                                : 'text-[#315347] hover:text-[#f6d274] hover:bg-gray-50'
                            }`
                        }
                    >
                        {link.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default NavLinks;
