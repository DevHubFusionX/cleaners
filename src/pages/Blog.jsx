import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import BlogHero from '../components/sections/Blog/BlogHero';
import BlogGrid from '../components/sections/Blog/BlogGrid';
import { Mail } from 'lucide-react';
import { blogPosts } from '../data/blogData';

const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Comtranz Global Blog",
    "description": "Expert insights on facility management, cleaning best practices, maintenance tips, and industry trends in Nigeria.",
    "url": "https://www.comtranzglobal.com/blog",
    "publisher": {
        "@type": "Organization",
        "name": "Comtranz Global Facility Management",
        "url": "https://www.comtranzglobal.com"
    },
    "blogPost": blogPosts.map(post => ({
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "datePublished": post.date,
        "author": {
            "@type": "Person",
            "name": post.author
        },
        "url": `https://www.comtranzglobal.com/blog/${post.id}`
    }))
};

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="Blog | Facility Management Insights"
                description="Stay informed with expert articles on facility management, cleaning best practices, maintenance tips, pest control, landscaping, and sustainability in Nigeria."
                path="/blog"
                structuredData={blogSchema}
            />
            <BlogHero />
            <BlogGrid />

            {/* Newsletter CTA Section */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#315347] to-[#064e3b] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-[#f6d274] rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Mail className="w-8 h-8 text-[#315347]" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-white mb-4" data-aos="fade-up">
                                Stay Updated with Our Newsletter
                            </h2>
                            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                                Get the latest facility management tips, industry insights, and exclusive updates delivered to your inbox.
                            </p>

                            <form className="max-w-md mx-auto" onSubmit={(e) => e.preventDefault()} data-aos="fade-up" data-aos-delay="200">
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="flex-grow px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#f6d274]"
                                        required
                                        aria-label="Email address for newsletter subscription"
                                    />
                                    <button
                                        type="submit"
                                        className="px-8 py-4 bg-[#f6d274] text-[#315347] rounded-xl font-bold hover:bg-[#e5c163] transition-colors duration-300 whitespace-nowrap"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                                <p className="text-gray-400 text-sm mt-4">
                                    We respect your privacy. Unsubscribe at any time.
                                </p>
                            </form>
                        </div>

                        {/* Decorative Circles */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#f6d274]/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
