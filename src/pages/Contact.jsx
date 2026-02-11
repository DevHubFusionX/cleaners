import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import ContactHero from '../components/sections/Contact/ContactHero';
import ContactInfo from '../components/sections/Contact/ContactInfo';
import ContactForm from '../components/sections/Contact/ContactForm';

const contactSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Comtranz Global Facility Management",
    "url": "https://www.comtranzglobal.com",
    "telephone": "+234-803-810-2340",
    "email": "comtranzcgc@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lagos",
        "addressCountry": "NG"
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "contactPoint": [
        {
            "@type": "ContactPoint",
            "telephone": "+234-803-810-2340",
            "contactType": "Customer Service",
            "areaServed": "NG",
            "availableLanguage": "English"
        },
        {
            "@type": "ContactPoint",
            "email": "info@comtranzglobal.com",
            "contactType": "General Inquiry"
        }
    ]
};

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="Contact Us"
                description="Get in touch with Comtranz Global Facility Management. Request a quote, schedule a consultation, or reach our Lagos office for premium facility management services across Nigeria."
                path="/contact"
                structuredData={contactSchema}
            />
            <ContactHero />
            <ContactInfo />
            <ContactForm />

            {/* Map Section Placeholder */}
            <section className="h-[400px] md:h-[500px] bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center bg-[#315347]/5">
                    <div className="text-center p-8">
                        <div className="w-16 h-16 bg-[#315347] rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-[#f6d274]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-black text-[#315347] mb-2">Our Presence in Lagos</h3>
                        <p className="text-gray-600">Serving residential and commercial clients across Nigeria's economic hub.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
