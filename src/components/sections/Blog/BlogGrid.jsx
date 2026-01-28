import React, { useState } from 'react';
import { blogPosts, categories } from '../../../data/blogData';
import BlogCard from './BlogCard';

// Import images
import img2 from '../../../assets/comtranz/image2.avif';
import img3 from '../../../assets/comtranz/image3.avif';
import img4 from '../../../assets/comtranz/image4.avif';
import img5 from '../../../assets/comtranz/image5.avif';
import img6 from '../../../assets/comtranz/image6.avif';
import img7 from '../../../assets/comtranz/image7.avif';

const BlogGrid = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    // Map image filenames to actual imports
    const imageMap = {
        'image2.avif': img2,
        'image3.avif': img3,
        'image4.avif': img4,
        'image5.avif': img5,
        'image6.avif': img6,
        'image7.avif': img7
    };

    // Filter posts by category
    const filteredPosts = activeCategory === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    return (
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${activeCategory === category
                                    ? 'bg-[#1a365d] text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post, index) => (
                        <BlogCard
                            key={post.id}
                            post={post}
                            image={imageMap[post.image]}
                            index={index}
                        />
                    ))}
                </div>

                {/* No posts message */}
                {filteredPosts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">No posts found in this category.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogGrid;
