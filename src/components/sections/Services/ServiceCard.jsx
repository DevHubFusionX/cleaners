import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service, image, index }) => {
    return (
        <div
            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            data-aos="fade-up"
            data-aos-delay={index * 100}
        >
            {/* Image */}
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

            {/* Content */}
            <div className="p-8">
                <ul className="space-y-3 mb-6">
                    {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#f6d274] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
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
