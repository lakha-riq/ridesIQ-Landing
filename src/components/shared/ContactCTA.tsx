"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type ContactCTAProps = {
	title: string;
	description: string;
	buttonText: string;
	buttonLink: string;
};

export function ContactCTA({ title, description, buttonText, buttonLink }: ContactCTAProps) {
	return (
		<section className="py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#678FCA] via-[#99D5C9] to-[#678FCA] shadow-2xl">
					<BackgroundPattern />
					<div className="relative px-6 py-20 sm:px-12 sm:py-28">
						<div className="max-w-3xl mx-auto text-center">
							<CTATitle>{title}</CTATitle>
							<CTADescription>{description}</CTADescription>
							<CTAButton href={buttonLink}>{buttonText}</CTAButton>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function BackgroundPattern() {
	return (
		<div className="absolute inset-0">
			<div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
			<div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent" />
		</div>
	);
}

function CTATitle({ children }: { children: React.ReactNode }) {
	return (
		<motion.h2
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8"
		>
			{children}
		</motion.h2>
	);
}

function CTADescription({ children }: { children: React.ReactNode }) {
	return (
		<motion.p
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ delay: 0.1 }}
			className="text-xl text-white/90 mb-12"
		>
			{children}
		</motion.p>
	);
}

function CTAButton({ href, children }: { href: string; children: React.ReactNode }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ delay: 0.2 }}
			className="flex flex-col sm:flex-row gap-4 justify-center"
		>
			<Link
				href={href}
				className="bg-white text-[#678FCA] px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
			>
				{children}
				<ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
			</Link>
		</motion.div>
	);
}
