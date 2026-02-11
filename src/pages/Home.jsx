import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Comtranz Global Facility Management",
    "description": "Nigeria's trusted provider of integrated facility maintenance, cleaning, landscaping, security, and pest control services since 2018.",
    "url": "https://www.comtranzglobal.com",
    "telephone": "+234-803-810-2340",
    "email": "comtranzcgc@gmail.com",
    "founder": {
        "@type": "Person",
        "name": "Festus Alase"
    },
    "foundingDate": "2018",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lagos",
        "addressCountry": "NG"
    },
    "areaServed": {
        "@type": "Country",
        "name": "Nigeria"
    },
    "serviceType": [
        "Facility Maintenance",
        "Cleaning & Janitorial Services",
        "Landscaping & External Works",
        "Security Oversight",
        "Pest Control",
        "Facility Consultancy"
    ],
    "priceRange": "$$"
};

const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="Premium Facility Management in Nigeria"
                description="Comtranz Global — Nigeria's trusted provider of integrated facility maintenance, cleaning, landscaping, security, and pest control services. Excellence since 2018."
                path="/"
                structuredData={localBusinessSchema}
            />
            <main>
                <Hero />
                <About />
                <Services />
                <WhyChooseUs />
                <Testimonials />
                <FAQ />
            </main>
        </div>
    );
};

export default Home;
