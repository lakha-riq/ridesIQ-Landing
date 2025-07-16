'use client';
import React from 'react';
import Footer from '@/components/Footer';
import { Navigation } from '@/components/Navigation';
import { BlogCard } from '@/components/BlogCard';
import { BlogSidebar } from '@/components/BlogSidebar';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

import { blogPosts, popularPosts, recentPosts, tags } from '@/data/blogData'; // ✅ Importing from new file

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation customColor="text-white" />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
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
                24/7 Support Available
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
              >
                <span className="text-white">Get in Touch with </span>
                <span className="bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent">
                  RidesIQ
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-white/90 leading-relaxed"
              >
                Have questions? Need a demo? Our team is here to help you with
                all your fleet tracking needs.
              </motion.p>
            </motion.div>
          </div>
        </div>

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
            popularPosts={popularPosts}
            recentPosts={recentPosts}
            tags={tags}
          />
        </aside>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
