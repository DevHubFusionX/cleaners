import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { services } from '../../data/servicesData';
import { CheckCircle2, Phone, Mail, ArrowLeft, Shield, Clock, Award } from 'lucide-react';
import SEO from '../../components/SEO';

// Map service IDs to specific icons or background images if desired
const serviceMeta = {
    'facility-maintenance': { icon: Shield, color: 'emerald' },
    'cleaning-janitorial': { icon: Clock, color: 'green' },
    'landscaping': { icon: Award, color: 'emerald' },
    'security-oversight': { icon: Shield, color: 'green' },
    'pest-control': { icon: Shield, color: 'emerald' },
    'facility-consultancy': { icon: Award, color: 'emerald' },
};

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const service = services.find(s => s.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!service) {
            navigate('/services');
        }
    }, [service, navigate]);

    if (!service) return null;

    const Icon = serviceMeta[id]?.icon || Shield;

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
            "@type": "Organization",
            "name": "Comtranz Global Facility Management",
            "url": "https://www.comtranzglobal.com",
            "telephone": "+234-803-810-2340"
        },
        "areaServed": {
            "@type": "Country",
            "name": "Nigeria"
        },
        "url": `https://www.comtranzglobal.com/services/${service.id}`
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.comtranzglobal.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://www.comtranzglobal.com/services"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": service.title,
                "item": `https://www.comtranzglobal.com/services/${service.id}`
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <SEO
                title={service.title}
                description={service.description}
                path={`/services/${service.id}`}
                structuredData={[serviceSchema, breadcrumbSchema]}
            />

            {/* Header / Hero */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#315347] overflow-hidden text-center text-white">
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <nav className="flex justify-center items-center gap-2 text-sm font-medium text-gray-400 mb-6" aria-label="Breadcrumb" data-aos="fade-up">
                        <Link to="/" className="hover:text-[#f6d274] transition-colors">Home</Link>
                        <ArrowLeft className="w-3 h-3 rotate-180" aria-hidden="true" />
                        <Link to="/services" className="hover:text-[#f6d274] transition-colors">Services</Link>
                    </nav>
                    <h1 className="text-4xl md:text-6xl font-black mb-6" data-aos="fade-up">
                        {service.title.split(' ').map((word, i) => (
                            <span key={i} className={i === service.title.split(' ').length - 1 ? "text-[#f6d274]" : ""}>{word} </span>
                        ))}
                    </h1>
                </div>
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#f6d274]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f6d274]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {/* Left: Content */}
                            <div className="md:col-span-2" data-aos="fade-right">
                                <h2 className="text-3xl font-black text-[#315347] mb-6">Overview</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    {service.description}
                                </p>
                                <h3 className="text-xl font-bold text-[#315347] mb-4">Key Features</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {service.items.map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl">
                                            <CheckCircle2 className="w-5 h-5 text-[#f6d274] flex-shrink-0" />
                                            <span className="text-gray-700 text-sm font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: Sidebar CTA */}
                            <div className="md:col-span-1" data-aos="fade-left">
                                <div className="bg-[#315347] p-8 rounded-3xl text-white sticky top-24">
                                    <div className="w-12 h-12 bg-[#f6d274] rounded-xl flex items-center justify-center mb-6">
                                        <Icon className="w-6 h-6 text-[#315347]" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Ready to start?</h3>
                                    <p className="text-gray-300 text-sm mb-8 last:mb-0">
                                        Get a personalized quote for your facility today. Our team is ready to assist you.
                                    </p>
                                    <div className="space-y-4">
                                        <Link to="/contact" className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#f6d274] text-[#315347] rounded-xl font-bold hover:bg-[#e5c163] transition-all duration-300">
                                            <Mail className="w-5 h-5" />
                                            Get Quote
                                        </Link>
                                        <a href="tel:+2348038102340" className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 text-white rounded-xl font-bold border border-white/20 hover:bg-white/20 transition-all duration-300">
                                            <Phone className="w-5 h-5" />
                                            Call Us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
