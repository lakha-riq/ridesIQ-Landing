'use client';
import React, { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import { Navigation } from '@/components/Navigation';
import { BlogCard } from '@/components/BlogCard';
import { BlogSidebar } from '@/components/BlogSidebar';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { popularPosts, recentPosts, tags } from '@/data/blogData';
import { getParsedBlogEntries } from '@/util/blogUtils';

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  content: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  category: string;
  readtime: string;
  publishedAt: Date;
};

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const parsed = await getParsedBlogEntries();
      console.log(parsed);
      setBlogPosts(parsed);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation customColor="text-white" />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background & Overlays */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/70" />
          <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white text-sm font-medium"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Fleet Management Insights
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
              >
                <span className="text-white">Stay Updated with the </span>
                <span className="bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent">
                  Latest in Fleet Management
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-white/90 leading-relaxed"
              >
                Expert insights, industry trends, and technology updates to keep
                your fleet ahead.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Hero Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 md:px-8 pt-36 flex flex-col md:flex-row gap-8">
        <section className="w-full md:w-3/4 space-y-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.slug} {...post} index={index} />
          ))}
        </section>

        <aside className="w-full md:w-1/4">
          <BlogSidebar
            popularPosts={blogPosts}
            recentPosts={blogPosts}
            tags={tags}
          />
        </aside>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
