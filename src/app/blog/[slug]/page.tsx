import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/Link';

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
import { Navigation } from '@/components/Navigation';
import { BlogSidebar } from '@/components/BlogSidebar';
import Image from 'next/image';

const blogPosts = [
  {
    slug: 'maximizing-fleet-efficiency',
    title: 'Maximizing Fleet Efficiency with Real-Time Analytics',
    content: `
      Fleet management has evolved significantly in recent years, with artificial intelligence and machine learning leading the charge in operational optimization. This comprehensive guide explores how Real-Time analytics are transforming fleet operations and driving unprecedented levels of efficiency.

      ## The Role of Real time in Modern Fleet Management

      Artificial Intelligence is revolutionizing how fleet managers make decisions and optimize their operations. From predictive maintenance to route optimization, Real time algorithms are processing vast amounts of data to deliver actionable insights in real-time.

      ### Key Benefits of Real-Time Analytics:

      1. Predictive Maintenance
      - Early detection of potential vehicle issues
      - Reduced downtime and maintenance costs
      - Optimized service scheduling

      2. Route Optimization
      - Real-time traffic analysis
      - Weather-aware routing
      - Fuel consumption optimization

      3. Driver Behavior Analysis
      - Safety improvement
      - Fuel efficiency optimization
      - Performance monitoring

      ## Implementing Real time Solutions in Your Fleet

      The transition to Real-Time fleet management requires careful planning and execution. Here's a step-by-step approach to implementing these solutions effectively:

      1. Assessment Phase
      - Evaluate current operations
      - Identify key pain points
      - Define success metrics

      2. Technology Selection
      - Choose appropriate Real time solutions
      - Ensure compatibility with existing systems
      - Consider scalability requirements

      3. Implementation Strategy
      - Develop a phased approach
      - Train staff and drivers
      - Monitor and adjust as needed

      ## Measuring Success

      The impact of Real-Time analytics can be measured across various metrics:

      - Reduced fuel consumption
      - Decreased maintenance costs
      - Improved driver safety scores
      - Enhanced customer satisfaction
      - Increased operational efficiency

      ## Looking Ahead

      As Real time technology continues to evolve, we can expect even more sophisticated solutions for fleet management. Stay ahead of the curve by keeping informed about the latest developments and being ready to adapt to new technologies as they emerge.
    `,
    image:
      'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2000&q=80',
    author: {
      name: 'Sarah Johnson',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      role: 'Fleet Analytics Specialist',
    },
    publishedAt: new Date('2024-03-15'),
    readTime: '8 min read',
    category: 'Fleet Management',
  },
];

const BlogPost = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const renderContent = (content: string) => {
    return content.split('\n\n').map((block, index) => {
      if (block.startsWith('##')) {
        return (
          <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
            {block.replace('## ', '')}
          </h2>
        );
      }
      if (block.startsWith('###')) {
        return (
          <h3 key={index} className="text-xl font-bold mt-6 mb-3">
            {block.replace('### ', '')}
          </h3>
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
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            width={500}
            height={300}
          />
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
                    width={500}
                    height={300}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="text-left">
                    <div className="font-medium">{post.author.name}</div>
                    <div className="text-sm text-white/70">
                      {post.author.role}
                    </div>
                  </div>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div className="text-sm">
                  {format(post.publishedAt, 'MMM d, yyyy')}
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div className="text-sm">{post.readTime}</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Hero Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Content Section */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Share Buttons */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-gray-600 font-medium flex items-center">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </span>
                <div className="flex items-center gap-2">
                  <button
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#678FCA]/10 text-gray-600 hover:text-[#678FCA] flex items-center justify-center transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#678FCA]/10 text-gray-600 hover:text-[#678FCA] flex items-center justify-center transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#678FCA]/10 text-gray-600 hover:text-[#678FCA] flex items-center justify-center transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </button>
                  <button
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#678FCA]/10 text-gray-600 hover:text-[#678FCA] flex items-center justify-center transition-colors"
                    aria-label="Share on Email"
                  >
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Article Content */}
              <article className="prose prose-lg max-w-none">
                {renderContent(post.content)}
              </article>

              {/* Tags */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  <Link
                    href={`/blog/tag/fleet-management`}
                    className="px-3 py-1 bg-gray-100 hover:bg-[#678FCA]/10 text-gray-700 hover:text-[#678FCA] rounded-full text-sm transition-colors"
                  >
                    Fleet Management
                  </Link>
                  <Link
                    href={`/blog/tag/ai`}
                    className="px-3 py-1 bg-gray-100 hover:bg-[#678FCA]/10 text-gray-700 hover:text-[#678FCA] rounded-full text-sm transition-colors"
                  >
                    AI
                  </Link>
                  <Link
                    href={`/blog/tag/analytics`}
                    className="px-3 py-1 bg-gray-100 hover:bg-[#678FCA]/10 text-gray-700 hover:text-[#678FCA] rounded-full text-sm transition-colors"
                  >
                    Analytics
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar
                popularPosts={blogPosts}
                recentPosts={blogPosts}
                tags={[
                  { name: 'Fleet Management', count: 24 },
                  { name: 'AI', count: 8 },
                  { name: 'Analytics', count: 12 },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#678FCA] via-[#99D5C9] to-[#678FCA] shadow-2xl">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent" />
            </div>

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
    </div>
  );
};

export default BlogPost;
