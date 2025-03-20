"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import {  ChevronDown, X, Car, Globe, BarChart3, CreditCard, Wrench, Search, ArrowRight, HelpCircle } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";

interface FAQCategory {
	id: string;
	icon: typeof Car;
	title: string;
	questions: {
		id: string;
		question: string;
		answer: string;
	}[];
}

const faqCategories: FAQCategory[] = [
	{
		id: "getting-started",
		icon: Car,
		title: "Getting Started",
		questions: [
			{
				id: "install",
				question: "How do I install a RidesIQ tracker?",
				answer: "RidesIQ offers multiple installation options. For hard-wired devices, we provide professional installation through our certified technicians. For OBD trackers, it is a simple plug-and-play solution that you can install yourself in minutes. Our team will guide you through the best option based on your fleet's needs.",
			},
			{
				id: "compatibility",
				question: "What devices are compatible with RidesIQ?",
				answer: "RidesIQ is compatible with most modern vehicles manufactured after 2008. Our OBD trackers work with any vehicle with an OBD-II port, while our hard-wired solutions can be installed in virtually any vehicle. We also offer specialized solutions for electric vehicles and heavy machinery.",
			},
		],
	},
	{
		id: "coverage",
		icon: Globe,
		title: "Coverage & Compatibility",
		questions: [
			{
				id: "international",
				question: "Does RidesIQ work internationally?",
				answer: "Yes, RidesIQ works globally through our multi-network connectivity solution. Our devices support 4G LTE with automatic fallback to 3G/2G networks where needed. We maintain partnerships with leading telecom providers worldwide to ensure consistent coverage across international borders.",
			},
			{
				id: "multiple-fleets",
				question: "Can I track multiple fleets in different locations?",
				answer: "Absolutely! RidesIQ's platform is designed to handle multiple fleets across different locations. You can organize vehicles into groups, assign different administrators, and manage permissions for each fleet separately. Our multi-fleet management features make it easy to oversee operations across various locations from a single dashboard.",
			},
		],
	},
	{
		id: "features",
		icon: BarChart3,
		title: "Features & Benefits",
		questions: [
			{
				id: "data-collection",
				question: "What data does RidesIQ collect?",
				answer: "RidesIQ collects comprehensive vehicle data including: real-time location, speed, fuel consumption, engine diagnostics, driver behavior metrics, route history, and maintenance alerts. All data is encrypted and securely stored in compliance with industry standards.",
			},
			{
				id: "ai-analytics",
				question: "Does RidesIQ provide AI-powered analytics?",
				answer: "Yes, RidesIQ leverages advanced AI algorithms to provide predictive maintenance alerts, optimize routes, analyze driver behavior, and forecast fleet performance. Our AI system continuously learns from your fleet's data to deliver increasingly accurate insights and recommendations.",
			},
		],
	},
	{
		id: "pricing",
		icon: CreditCard,
		title: "Pricing & Billing",
		questions: [
			{
				id: "cost",
				question: "How much does RidesIQ cost?",
				answer: "RidesIQ offers flexible pricing plans based on fleet size and feature requirements. Our basic plan starts at $19.99 per vehicle per month, with volume discounts available for larger fleets. Contact our sales team for a customized quote tailored to your specific needs.",
			},
			{
				id: "discounts",
				question: "Are there volume discounts for large fleets?",
				answer: "Yes, we offer significant volume discounts for fleets with 10 or more vehicles. The discount percentage increases with fleet size, and we can create custom enterprise packages for fleets with specific requirements. Contact our sales team to discuss volume pricing options.",
			},
		],
	},
	{
		id: "troubleshooting",
		icon: Wrench,
		title: "Troubleshooting",
		questions: [
			{
				id: "not-updating",
				question: "My tracker is not updating, what should I do?",
				answer: "If your tracker isn't updating, try these steps: 1) Check your vehicle's power supply, 2) Ensure the device is properly connected, 3) Verify cellular coverage in your area, 4) Restart the device. If issues persist, contact our 24/7 support team for immediate assistance.",
			},
			{
				id: "reset-device",
				question: "How do I reset my device?",
				answer: "To reset your RidesIQ device: 1) Locate the reset button on the device, 2) Press and hold for 10 seconds until the LED indicator flashes, 3) Wait for the device to restart (approximately 2 minutes), 4) Verify connection in your dashboard. For OBD devices, simply unplug and reconnect after 30 seconds.",
			},
		],
	},
];

const FAQ = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [activeCategory, setActiveCategory] = useState<string | null>(null);
	const [activeQuestions, setActiveQuestions] = useState<string[]>([]);

	const toggleQuestion = (questionId: string) => {
		setActiveQuestions((prev) => (prev.includes(questionId) ? prev.filter((id) => id !== questionId) : [...prev, questionId]));
	};

	const filteredCategories = faqCategories
		.map((category) => ({
			...category,
			questions: category.questions.filter((q) => q.question.toLowerCase().includes(searchQuery.toLowerCase()) || q.answer.toLowerCase().includes(searchQuery.toLowerCase())),
		}))
		.filter((category) => category.questions.length > 0);

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
								<HelpCircle className="w-4 h-4 mr-2" />
								Help Center
							</motion.div>

							<motion.h1
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.3 }}
								className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
							>
								<span className="text-white">Frequently Asked </span>
								<span className="bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent">Questions</span>
							</motion.h1>

							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="text-xl text-white/90 leading-relaxed"
							>
							{"	Find answers to common questions about RidesIQ's fleet tracking solutions"}
							</motion.p>
						</motion.div>
					</div>
				</div>

				{/* Hero Bottom Gradient */}
				<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
			</section>

			{/* Search Section */}
			<section className="py-12 relative">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto">
						<div className="relative">
							<Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
							<input
								type="text"
								placeholder="Search questions..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#678FCA] focus:border-transparent"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Categories */}
			<section className="py-12 relative">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto">
						{filteredCategories.map((category) => (
							<motion.div
								key={category.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								className="mb-8"
							>
								<button
									onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
									className="w-full flex items-center justify-between bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors"
								>
									<div className="flex items-center gap-4">
										<div className="w-12 h-12 rounded-xl bg-[#678FCA]/10 flex items-center justify-center">
											<category.icon className="w-6 h-6 text-[#678FCA]" />
										</div>
										<h2 className="text-xl font-semibold text-gray-900">{category.title}</h2>
									</div>
									<ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${activeCategory === category.id ? "rotate-180" : ""}`} />
								</button>

								{/* Questions */}
								{category.questions.map((question) => (
									<motion.div
										key={question.id}
										initial={{ opacity: 0, height: 0 }}
										animate={{
											opacity: 1,
											height: "auto",
											transition: { duration: 0.3 },
										}}
										className="mt-4"
									>
										<button
											onClick={() => toggleQuestion(question.id)}
											className="w-full bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100"
										>
											<div className="flex items-center justify-between">
												<h3 className="text-lg font-semibold text-gray-900 text-left">{question.question}</h3>
												{activeQuestions.includes(question.id) ? <X className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
											</div>

											{activeQuestions.includes(question.id) && (
												<motion.div
													initial={{ opacity: 0, y: -10 }}
													animate={{ opacity: 1, y: 0 }}
													transition={{ duration: 0.2 }}
													className="mt-4 text-left"
												>
													<p className="text-gray-600">{question.answer}</p>
												</motion.div>
											)}
										</button>
									</motion.div>
								))}
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
									Still Have Questions?
								</motion.h2>

								<motion.p
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.1 }}
									className="text-xl text-white/90 mb-12"
								>
									Our support team is here to help you 24/7
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
										Contact Support
										<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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

export default FAQ;
