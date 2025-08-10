'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ChevronRight,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  Mail,
} from 'lucide-react';
import { format } from 'date-fns';
import { Navigation } from '../../../components/Navigation';
import { BlogSidebar } from '../../../components/BlogSidebar';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getParsedBlogEntries } from '@/util/blogUtils';
import { tags } from '@/data/blogData';
import Image from 'next/image';
import Footer from '@/components/Footer';

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

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [allPosts, setAllPosts] = useState<any[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPost = async () => {
      const parsed = await getParsedBlogEntries();
      setAllPosts(parsed);
      setBlogPosts(parsed);
      const matchedPost = parsed.find((p) => p.slug === slug);
      setPost(matchedPost);
    };
    fetchPost();
  }, [slug]);

  if (!post) {
    return (
      <div className="text-center py-12 text-gray-600">Post not found.</div>
    );
  }

  const renderContent = (content: string) =>
    content.split('\n\n').map((block, index) => {
      if (block.startsWith('###')) {
        return (
          <h3 key={index} className="text-xl font-bold mt-6 mb-3">
            {block.replace('### ', '')}
          </h3>
        );
      }
      if (block.startsWith('##')) {
        return (
          <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
            {block.replace('## ', '')}
          </h2>
        );
      }
      if (block.includes('- ')) {
        return (
          <ul key={index} className="list-disc pl-6 mb-4 space-y-2">
            {block.split('\n').map((item, i) => (
              <li key={i} className="text-gray-600">
                {item.replace('- ', '')}
              </li>
            ))}
          </ul>
        );
      }
      return (
        <p key={index} className="mb-4 text-gray-600 leading-relaxed">
          {block}
        </p>
      );
    });

  return (
    <div className="min-h-screen bg-white">
      <Navigation customColor="text-white" />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/70" />
          <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white text-sm font-medium"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              {post.category}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-white"
            >
              {post.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center gap-6 text-white/90"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={10}
                  height={10}
                  className="w-10 h-10 rounded-full"
                />
                <div className="text-left">
                  <div className="font-medium">{post.author.name}</div>
                  <div className="text-sm text-white/70">
                    {post.author.role}
                  </div>
                </div>
              </div>
              <div className="w-2 h-8 bg-white/50" />
              <div className="text-sm">
                {format(post.publishedAt, 'MMM d, yyyy')}
              </div>
              <div className="w-2 h-8 bg-white/50" />
              <div className="text-sm">{post.readtime}</div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Main Content */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Share Buttons */}
              <div className="flex items-center gap-4 mb-8">
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator
                        .share({
                          title: post?.title,
                          text: 'Check out this post!',
                          url: window.location.href,
                        })
                        .then(() => console.log('Shared successfully'))
                        .catch((err) => console.error('Share failed:', err));
                    } else {
                      alert('Sharing not supported on this device. 😢');
                    }
                  }}
                  className="text-gray-600 cur font-medium flex items-center hover:text-[#678FCA] transition-colors"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </button>
                {/* <div className="flex items-center gap-2">
                  {[Twitter, Linkedin, Facebook, Mail].map((Icon, idx) => (
                    <button
                      key={idx}
                      className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#678FCA]/10 text-gray-600 hover:text-[#678FCA] flex items-center justify-center transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                    </button>
                  ))}
                </div> */}
              </div>

              <article className="prose prose-lg max-w-none list-none">
                {renderContent(post.content)}
              </article>

              {/* Tags */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {['Fleet Management', 'AI', 'Analytics'].map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${tag
                        .toLowerCase()
                        .replace(/\s+/g, '-')}`}
                      className="px-3 py-1 bg-gray-100 hover:bg-[#678FCA]/10 text-gray-700 hover:text-[#678FCA] rounded-full text-sm transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar
                popularPosts={blogPosts}
                recentPosts={blogPosts}
                tags={tags}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#678FCA] via-[#99D5C9] to-[#678FCA] shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent" />
            <div className="relative px-6 py-20 sm:px-12 sm:py-28">
              <div className="max-w-3xl mx-auto text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8"
                >
                  Ready to Transform Your Fleet?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-xl text-white/90 mb-12"
                >
                  Join thousands of fleet managers who trust RidesIQ
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <button className="bg-white text-[#678FCA] px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105 flex items-center group">
                    Get Started Today
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
