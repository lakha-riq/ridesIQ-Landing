import React from "react";
import { motion } from "framer-motion";
import {  ChevronRight, Shield } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import Link from "next/link";

const PrivacyPolicy = () => {
	const sections = [
		{
			id: "introduction",
			title: "Introduction",
			content: `At RidesIQ, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our fleet management services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.

We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Effective Date" of this Privacy Policy. Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the Site, and you waive the right to receive specific notice of each such change or modification.`,
		},
		{
			id: "information-collection",
			title: "Information We Collect",
			content: `We collect information that you provide directly to us. For example, we collect information when you create an account, make a purchase, request customer support, or otherwise communicate with us. The types of information we may collect include:

• Name and contact information
• Billing information
• Vehicle and fleet information
• Usage data and preferences
• Communication history
• Technical data about your devices

We also collect information automatically when you use our Services, including:

• Log data and device information
• Location data from tracking devices
• Usage patterns and preferences
• Performance and error reports`,
		},
		{
			id: "information-use",
			title: "How We Use Your Information",
			content: `We use the information we collect to:

• Provide, maintain, and improve our Services
• Process your transactions
• Send you technical notices and support messages
• Communicate with you about products, services, and events
• Monitor and analyze trends and usage
• Detect, investigate, and prevent fraudulent transactions and other illegal activities
• Protect the rights and property of RidesIQ and others`,
		},
		{
			id: "information-sharing",
			title: "Information Sharing and Disclosure",
			content: `We may share your information with:

• Service providers who assist in our operations
• Professional advisors and consultants
• Law enforcement or regulatory agencies when required
• Business partners with your consent
• Other parties in connection with a company transaction

We do not sell your personal information to third parties.`,
		},
		{
			id: "data-security",
			title: "Data Security",
			content: `We implement appropriate technical and organizational security measures to protect your information. However, no security system is impenetrable and we cannot guarantee the security of our systems 100%. In the event that any information under our control is compromised as a result of a breach of security, we will take reasonable steps to investigate the situation and, where appropriate, notify those individuals whose information may have been compromised.`,
		},
		{
			id: "data-retention",
			title: "Data Retention",
			content: `We retain personal information we collect from you where we have an ongoing legitimate business need to do so (for example, to provide you with a service you have requested or to comply with applicable legal requirements).

When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it.`,
		},
		{
			id: "your-rights",
			title: "Your Rights and Choices",
			content: `Depending on your location, you may have certain rights regarding your personal information, including:

• Access to your personal information
• Correction of inaccurate information
• Deletion of your information
• Restriction of processing
• Data portability
• Objection to processing

To exercise any of these rights, please contact us using the information provided below.`,
		},
		{
			id: "international-transfers",
			title: "International Data Transfers",
			content: `We may transfer your personal information to countries other than the country in which you live. When we do so, we ensure appropriate safeguards are in place to protect your information and comply with applicable data protection laws.`,
		},
		{
			id: "children-privacy",
			title: "Children's Privacy",
			content: `Our Services are not directed to children under 16. We do not knowingly collect personal information from children under 16. If you become aware that a child has provided us with personal information without parental consent, please contact us.`,
		},
		{
			id: "contact-us",
			title: "Contact Us",
			content: `If you have any questions about this Privacy Policy or our privacy practices, please contact us at:

RidesIQ
Email: privacy@ridesiq.com
Phone: 1-800-RIDESIQ
Address: 123 Fleet Street, Toronto, ON M5V 2B1`,
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
								<span className="text-white">Privacy </span>
								<span className="bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent">Policy</span>
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
									Have Questions About Your Privacy?
								</motion.h2>

								<motion.p
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.1 }}
									className="text-xl text-white/90 mb-12"
								>
									Our team is here to help you understand how we protect your data
								</motion.p>

								<motion.div
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.2 }}
									className="flex flex-col sm:flex-row gap-4 justify-center"
								>
									<Link
										href="/contact"
										className="bg-white text-[#678FCA] px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
									>
										Contact Us
										<ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
									</Link>
								</motion.div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default PrivacyPolicy;
