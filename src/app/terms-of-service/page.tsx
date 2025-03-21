"use client";

import React from "react";
import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";


export default function TermsOfService() {
	const sections = [
		{
			id: "acceptance",
			title: "1. Acceptance of Terms",
			content:
				"By accessing and using RidesIQ's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.\n\nThese terms apply to all users, including:\n• Individual users\n• Business customers\n• Partners and affiliates",
		},
		{
			id: "services",
			title: "2. Description of Services",
			content:
				"RidesIQ provides vehicle tracking and fleet management solutions, including but not limited to:\n\n• GPS tracking services\n• Fleet management tools\n• Vehicle diagnostics\n• Real-time monitoring systems",
		},
	];

	const renderContent = (content: string) => {
		return content.split("\n\n").map((block, i) => {
			if (block.includes("•")) {
				const [intro, ...items] = block.split("\n");
				return (
					<div
						key={i}
						className="mb-4"
					>
						{intro && <p className="text-gray-600 leading-relaxed mb-2">{intro}</p>}
						<ul className="list-disc pl-4 space-y-2">
							{items.map((item, j) => (
								<li
									key={j}
									className="text-gray-600"
								>
									{item.replace("• ", "")}
								</li>
							))}
						</ul>
					</div>
				);
			}
			return (
				<p
					key={i}
					className="mb-4 text-gray-600 leading-relaxed"
				>
					{block}
				</p>
			);
		});
	};

	return (
		<div className="min-h-screen bg-white">
			<Navigation />
			<div className="container mx-auto px-4 py-16">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
					{sections.map((section) => (
						<motion.div
							key={section.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="mb-12"
						>
							<h2 className="text-2xl font-semibold text-gray-800 mb-4">{section.title}</h2>
							{renderContent(section.content)}
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
