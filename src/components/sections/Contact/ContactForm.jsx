import React, { useState } from 'react';
import { Send, User, Mail, Phone, MessageSquare, ChevronRight } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you shortly.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="py-20 lg:py-32 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                    {/* Left Side: Text Content */}
                    <div className="w-full lg:w-1/2" data-aos="fade-right">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f6d274]/10 border border-[#f6d274]/20 text-[#315347] font-bold text-xs uppercase tracking-widest mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#f6d274] animate-pulse"></span>
                            Inquiry Form
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#315347] leading-[1.1] mb-8">
                            Let's Talk About Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#315347] to-[#064e3b]">Facility Needs</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-10">
                            Whether you need common area cleaning, technical maintenance, or a full integrated FM solution, our team is ready to provide you with a tailored plan that ensures your property's longevity and efficiency.
                        </p>

                        <div className="space-y-6">
                            {[
                                "Industry-leading response times",
                                "Tailored maintenance packages",
                                "24/7 technical support services",
                                "Registered and certified professionals"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 text-[#315347]">
                                    <div className="w-6 h-6 rounded-full bg-[#f6d274] flex items-center justify-center flex-shrink-0">
                                        <ChevronRight className="w-4 h-4 text-[#315347]" />
                                    </div>
                                    <span className="font-bold">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="w-full lg:w-1/2" data-aos="fade-left">
                        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 relative">
                            {/* Decorative Background */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f6d274]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-[#315347] ml-1">Full Name</label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                className="w-full pl-12 pr-6 py-4 rounded-xl bg-gray-50 border-transparent focus:border-[#f6d274] focus:bg-white focus:ring-0 transition-all outline-none"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-[#315347] ml-1">Email Address</label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                className="w-full pl-12 pr-6 py-4 rounded-xl bg-gray-50 border-transparent focus:border-[#f6d274] focus:bg-white focus:ring-0 transition-all outline-none"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-[#315347] ml-1">Phone Number</label>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+234..."
                                                className="w-full pl-12 pr-6 py-4 rounded-xl bg-gray-50 border-transparent focus:border-[#f6d274] focus:bg-white focus:ring-0 transition-all outline-none"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-[#315347] ml-1">Subject</label>
                                        <div className="relative">
                                            <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <select
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full pl-12 pr-6 py-4 rounded-xl bg-gray-50 border-transparent focus:border-[#f6d274] focus:bg-white focus:ring-0 transition-all outline-none appearance-none"
                                                required
                                            >
                                                <option value="">Select a service</option>
                                                <option value="Facility Maintenance">Facility Maintenance</option>
                                                <option value="Cleaning Services">Cleaning Services</option>
                                                <option value="Pest Control">Pest Control</option>
                                                <option value="Other">Other Inquiry</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#315347] ml-1">Your Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        placeholder="How can we help you?"
                                        className="w-full px-6 py-4 rounded-xl bg-gray-50 border-transparent focus:border-[#f6d274] focus:bg-white focus:ring-0 transition-all outline-none resize-none"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-5 bg-[#315347] text-white rounded-2xl font-black text-lg hover:bg-[#064e3b] hover:scale-[1.02] transform transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
                                >
                                    <Send className="w-5 h-5 text-[#f6d274]" />
                                    Send Message Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
