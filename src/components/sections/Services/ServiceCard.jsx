import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service, image, icon, index, delay }) => {
    const aosDelay = (delay || index * 100 || 0).toString();

    return (
        <div
            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            data-aos="fade-up"
            data-aos-delay={aosDelay}
        >
            {/* Header: Image or Icon */}
            {image ? (
                <div className="relative h-64 overflow-hidden">
                    <img
                        src={image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/80 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-2xl font-black text-white">{service.title}</h3>
                    </div>
                </div>
            ) : (
                <div className="p-8 pb-0">
                    <div className="w-16 h-16 rounded-2xl bg-[#f6d274]/20 flex items-center justify-center text-[#1a365d] mb-6 group-hover:scale-110 group-hover:bg-[#f6d274] transition-all duration-300">
                        {icon}
                    </div>
                    <h3 className="text-2xl font-black text-[#1a365d] mb-2">{service.title}</h3>
                </div>
            )}

            {/* Content */}
            <div className="p-8 pt-6">
                <ul className="space-y-3 mb-8">
                    {service.items.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#f6d274] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a365d] text-white rounded-xl font-bold hover:bg-[#f6d274] hover:text-[#1a365d] transition-all duration-300 group-hover:scale-105"
                >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;
