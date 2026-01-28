import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { Calendar, Clock, User, ArrowLeft, Share2, MessageSquare } from 'lucide-react';

const BlogDetail = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === parseInt(id) || p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [post]);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center text-center p-4">
                <div>
                    <h2 className="text-4xl font-black text-[#1a365d] mb-4">Post Not Found</h2>
                    <Link to="/blog" className="inline-flex items-center gap-2 text-[#f6d274] font-bold">
                        <ArrowLeft className="w-5 h-5" /> Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8" data-aos="fade-up">
                        <Link to="/" className="hover:text-[#f6d274]">Home</Link>
                        <ArrowLeft className="w-3 h-3 rotate-180" />
                        <Link to="/blog" className="hover:text-[#f6d274]">Blog</Link>
                        <ArrowLeft className="w-3 h-3 rotate-180" />
                        <span className="text-[#f6d274] truncate">{post.title}</span>
                    </nav>

                    {/* Header */}
                    <div className="mb-12" data-aos="fade-up">
                        <span className="inline-block px-4 py-1 bg-[#f6d274]/10 text-[#1a365d] text-xs font-black uppercase tracking-widest rounded-full mb-6">
                            {post.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#1a365d] leading-tight mb-8">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{post.readTime}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Admin</span>
                            </div>
                        </div>
                    </div>

                    {/* Content Placeholder */}
                    <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6" data-aos="fade-up" data-aos-delay="100">
                        <p className="text-xl font-medium text-gray-800 italic border-l-4 border-[#f6d274] pl-6 font-serif">
                            {post.excerpt}
                        </p>
                        <p>
                            Professional facility management is more than just fixing things when they break. It's about proactive care, strategic planning, and ensuring that every aspect of a building environment supports the comfort and productivity of its occupants.
                        </p>
                        <p>
                            At Comtranz Global, we've seen firsthand how integrated solutions can reduce long-term costs and improve the overall lifespan of property assets. Whether it's through improved energy efficiency, rigorous cleaning standards, or advanced security oversight, the goal remains the same: excellence in every detail.
                        </p>
                        {/* More static content to fill the page */}
                        <div className="bg-gray-50 p-8 rounded-3xl my-12">
                            <h3 className="text-2xl font-black text-[#1a365d] mb-4">The Impact of Quality Management</h3>
                            <p>Proper maintenance can save property owners up to 20% in annual operational costs. By investing in professional oversight, you're not just maintaining a building—you're protecting an investment.</p>
                        </div>
                    </div>

                    {/* Footer / Share */}
                    <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap justify-between items-center gap-6">
                        <div className="flex items-center gap-4">
                            <span className="font-bold text-[#1a365d]">Share this post:</span>
                            <div className="flex gap-2">
                                {[Share2, MessageSquare].map((Icon, i) => (
                                    <button key={i} className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center hover:bg-[#f6d274] hover:text-[#1a365d] transition-all">
                                        <Icon className="w-4 h-4" />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <Link to="/blog" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a365d] text-white rounded-xl font-bold hover:bg-[#f6d274] hover:text-[#1a365d] transition-all">
                            <ArrowLeft className="w-4 h-4" /> Back to Blog
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
