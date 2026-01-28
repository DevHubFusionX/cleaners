import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { companyInfo } from '../../../data/companyInfo';

const ContactInfo = () => {
    const infoItems = [
        {
            icon: MapPin,
            title: "Our Location",
            content: companyInfo.address,
            link: "https://maps.google.com/?q=" + encodeURIComponent(companyInfo.address),
            color: "text-blue-500",
            bg: "bg-blue-50"
        },
        {
            icon: Phone,
            title: "Phone Number",
            content: companyInfo.phone,
            link: `tel:${companyInfo.phone.replace(/\s/g, '')}`,
            color: "text-green-500",
            bg: "bg-green-50"
        },
        {
            icon: Mail,
            title: "Email Address",
            content: companyInfo.email,
            link: `mailto:${companyInfo.email}`,
            color: "text-amber-500",
            bg: "bg-amber-50"
        },
        {
            icon: Clock,
            title: "Office Hours",
            content: "Mon - Sat: 8:00 AM - 6:00 PM",
            link: null,
            color: "text-purple-500",
            bg: "bg-purple-50"
        }
    ];

    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {infoItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group text-center"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <item.icon className={`w-8 h-8 ${item.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-[#1a365d] mb-3">{item.title}</h3>
                            {item.link ? (
                                <a
                                    href={item.link}
                                    target={item.icon === MapPin ? "_blank" : "_self"}
                                    rel="noreferrer"
                                    className="text-gray-600 hover:text-[#f6d274] transition-colors line-clamp-2"
                                >
                                    {item.content}
                                </a>
                            ) : (
                                <p className="text-gray-600">{item.content}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;
