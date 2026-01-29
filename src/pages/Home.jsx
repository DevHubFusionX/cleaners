import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import VideoSection from '../components/sections/VideoSection';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';

const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            <main>
                <Hero />
                <About />
                <Services />
                <WhyChooseUs />
                <VideoSection />
                
                <Testimonials />
                <FAQ />
                {/* Additional sections will go here */}
            </main>
        </div>
    );
};

export default Home;
