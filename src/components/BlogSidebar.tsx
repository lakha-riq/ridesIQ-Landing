import React, { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface Post {
  slug: string;
  title: string;
  image: string;
  publishedAt: Date;
}

interface Tag {
  name: string;
  count: number;
}

interface BlogSidebarProps {
  popularPosts: Post[];
  recentPosts: Post[];
  tags: Tag[];
}

export const BlogSidebar: React.FC<BlogSidebarProps> = ({
  popularPosts,
  recentPosts,
  tags,
}) => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message);
        setEmail('');
      } else {
        setStatus('error');
        setEmail('');
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please try again later.');
      setEmail('');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
        setStatus('idle');
      }, 5000); // 5000ms = 5 seconds

      return () => clearTimeout(timer); // cleanup timer
    }
  }, [message]);
  return (
    <div className="space-y-8">
      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-[#678FCA] to-[#99D5C9] rounded-2xl p-6 text-white">
        <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
        <p className="text-white/90 mb-4">
          Get the latest fleet management insights delivered to your inbox.
        </p>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button
            type="submit"
            className="w-full bg-white text-[#678FCA] px-4 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors flex items-center justify-center group"
            disabled={isLoading}
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          {message && (
            <p
              className={`text-sm ${
                status === 'success' ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>

      {/* Popular Posts */}
      <div>
        <h3 className="text-xl font-bold mb-4">Popular Posts</h3>
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex items-start gap-4 group"
            >
              <Image
                src={post.image}
                alt={post.title}
                className="w-20 h-20 rounded-lg object-cover"
                loading="lazy"
                width={80}
                height={80}
              />
              <div>
                <h4 className="font-medium text-gray-900 group-hover:text-[#678FCA] transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <div className="text-sm text-gray-500">
                  {format(post.publishedAt, 'MMM d, yyyy')}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div>
        <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex items-start gap-4 group"
            >
              <Image
                src={post.image}
                alt={post.title}
                className="w-20 h-20 rounded-lg object-cover"
                loading="lazy"
                width={80}
                height={80}
              />
              <div>
                <h4 className="font-medium text-gray-900 group-hover:text-[#678FCA] transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <div className="text-sm text-gray-500">
                  {format(post.publishedAt, 'MMM d, yyyy')}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Tags Cloud */}
      <div>
        <h3 className="text-xl font-bold mb-4">Popular Topics</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag.name}
              href={`/blog/tag/${tag.name.toLowerCase()}`}
              className="px-3 py-1 bg-gray-100 hover:bg-[#678FCA]/10 text-gray-700 hover:text-[#678FCA] rounded-full text-sm transition-colors"
            >
              {tag.name} ({tag.count})
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
