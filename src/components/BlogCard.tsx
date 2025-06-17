import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { format } from "date-fns";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface BlogCardProps {
	slug: string;
	title: string;
	excerpt: string;
	image: string;
	author: {
		name: string;
		avatar: string;
	};
	publishedAt: Date;
	index: number;
}


export const BlogCard: React.FC<BlogCardProps> = ({ slug, title, excerpt, image, author, publishedAt, index }) => {
	return (
		<motion.article
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl"
		>
			<Link
				href={`/blog/${slug}`}
				className="block"
			>
				<div className="aspect-[16/9] overflow-hidden">
					<Image
						src={image}
						alt={title}
						className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
						loading="lazy"
						width={1280}
						height={720}
					/>
				</div>

				<div className="p-6">
					<h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#678FCA] transition-colors">{title}</h3>

					<p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>

					<div className="flex items-center justify-between">
						<div className="flex items-center gap-3">
							<Image
								src={author.avatar}
								alt={author.name}
								className="w-10 h-10 rounded-full"
								loading="lazy"
								width={40}
								height={40}
							/>
							<div>
								<div className="text-sm font-medium text-gray-900">{author.name}</div>
								<div className="text-xs text-gray-500">{format(publishedAt, "MMM d, yyyy")}</div>
							</div>
						</div>

						<div className="flex items-center text-[#678FCA] font-medium transition-transform group-hover:translate-x-1">
							Read More
							<ChevronRight className="ml-1 w-4 h-4" />
						</div>
					</div>
				</div>
			</Link>
		</motion.article>
	);
};
