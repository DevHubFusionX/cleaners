import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post, image, index }) => {
    return (
        <article
            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            data-aos="fade-up"
            data-aos-delay={(index * 100).toString()}
        >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-[#f6d274] text-[#1a365d] rounded-full text-xs font-bold uppercase tracking-wider">
                        {post.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-8">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-[#1a365d] mb-3 group-hover:text-[#f6d274] transition-colors duration-300 line-clamp-2">
                    {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                </p>

                {/* Read More Button */}
                <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-[#1a365d] font-bold hover:text-[#f6d274] transition-colors duration-300 group-hover:gap-3"
                >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </article>
    );
};

export default BlogCard;
