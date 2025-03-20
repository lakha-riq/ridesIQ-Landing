import React from "react";
import { motion } from "framer-motion";
import {  ChevronRight, Shield, Mail } from "lucide-react";
import { Navigation } from "@/components/Navigation";


const ResponsibleDisclosure = () => {
	const sections = [
		{
			id: "introduction",
			title: "Introduction",
			content: `Security is a top priority for RidesIQ, and we believe that working with skilled security researchers can identify weaknesses in any technology. To recognize their efforts and the important role they play in keeping RidesIQ and our users safe, we offer a bounty for reporting certain qualifying security vulnerabilities.

If you believe you've discovered a potential vulnerability or are interested in working with us to find potential vulnerabilities, please read the Responsible Disclosure policy below. By submitting vulnerability reports, you agree that you have read, understood, and will follow our Responsible Disclosure Policy.`,
		},
		{
			id: "rules-of-engagement",
			title: "Rules of Engagement",
			content: `Be careful with sensitive information.
• If you uncover sensitive data (e.g., personal information, credentials), stop immediately and report it to us.
• Do not save, store, copy, or share this information.

Test responsibly.
• Only test vulnerabilities on your own accounts.
• Contact us for help with cross-account testing.
• Stay within in-scope systems and avoid out-of-scope areas.
• Keep all vulnerability details confidential until authorized by RidesIQ.

Do not cause harm.
• No denial-of-service attacks, phishing, social engineering, fraud, or hacking attempts that harm RidesIQ, its employees, or users.
• Failure to follow these rules may result in disqualification from receiving bounties and permanent exclusion from our program.`,
		},
		{
			id: "vulnerability-reporting",
			title: "Vulnerability Reporting",
			content: `If you discover a vulnerability, please email the details of your findings, along with replication steps, to:

📧 info@ridesiq.com`,
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

			{/* Hero Section */}
			<section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
				{/* Background & Overlays */}
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/70" />
					<div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
				</div>

				<div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
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
								<Shield className="w-4 h-4 mr-2" />
								Last Updated: March 15, 2024
							</motion.div>

							<motion.h1
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.3 }}
								className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
							>
								<span className="text-white">Responsible </span>
								<span className="bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent">Disclosure</span>
							</motion.h1>
						</motion.div>
					</div>
				</div>

				{/* Hero Bottom Gradient */}
				<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
			</section>

			{/* Table of Contents */}
			<section className="py-12 relative">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto">
						<div className="bg-gray-50 rounded-2xl p-6 mb-12">
							<h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
							<ul className="space-y-2">
								{sections.map((section) => (
									<li key={section.id}>
										<a
											href={`#${section.id}`}
											className="text-[#678FCA] hover:text-[#678FCA]/80 transition-colors flex items-center group"
										>
											<ChevronRight className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
											{section.title}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Content Sections */}
			<section className="py-12 relative">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto">
						{sections.map((section, index) => (
							<motion.div
								key={section.id}
								id={section.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="mb-12"
							>
								<h2 className="text-2xl font-bold mb-4">{section.title}</h2>
								<div className="prose prose-lg">{renderContent(section.content)}</div>
							</motion.div>
						))}
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
									Found a Security Vulnerability?
								</motion.h2>

								<motion.p
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.1 }}
									className="text-xl text-white/90 mb-12"
								>
									Help us keep RidesIQ secure by reporting vulnerabilities responsibly
								</motion.p>

								<motion.div
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.2 }}
									className="flex flex-col sm:flex-row gap-4 justify-center"
								>
									<a
										href="mailto:info@ridesiq.com"
										className="bg-white text-[#678FCA] px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
									>
										Report Vulnerability
										<Mail className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
									</a>
								</motion.div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ResponsibleDisclosure;
