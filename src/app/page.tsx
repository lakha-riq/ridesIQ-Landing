"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, ChevronRight, BarChart3, ArrowRight, Sparkles, Gauge, AlertCircle, FileBarChart, Truck, Timer, TrendingUp, Target } from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";
import { StatsCard } from "@/components/StatsCard";
import { ProductCard } from "@/components/ProductCard";
import { CompetitiveAdvantage } from "@/components/CompetitiveAdvantage";
import { IndustrySolutions } from "@/components/IndustrySolutions";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";

function Home() {
	// const [isMenuOpen, setIsMenuOpen] = useState(false);
	// const [scrolled, setScrolled] = useState(false);
	const [activeFeature, setActiveFeature] = useState(0);

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		// setScrolled(window.scrollY > 20);
	// 	};
	// 	window.addEventListener("scroll", handleScroll);
	// 	return () => window.removeEventListener("scroll", handleScroll);
	// }, []);

	const features = [
		{
			icon: Gauge,
			title: "Real-Time Fleet Intelligence",
			description: "Transform your fleet operations with AI-powered real-time monitoring and predictive analytics.",
			details: {
				stat: "98%",
				statLabel: "Accuracy Rate",
				image: "/assets/homepage/1.png",
				points: ["Real-time vehicle tracking and monitoring", "Predictive maintenance alerts", "Fuel efficiency optimization", "Driver behavior analysis"],
			},
		},
		{
			icon: AlertCircle,
			title: "Smart Maintenance",
			description: "Prevent costly breakdowns with AI-driven maintenance predictions and automated scheduling.",
			details: {
				stat: "45%",
				statLabel: "Cost Reduction",
				image: "/assets/homepage/2.png",
				points: ["Predictive maintenance scheduling", "Automated service reminders", "Parts inventory management", "Service history tracking"],
			},
		},
		{
			icon: FileBarChart,
			title: "Advanced Analytics",
			description: "Make data-driven decisions with comprehensive fleet analytics and customizable reporting.",
			details: {
				stat: "2.5x",
				statLabel: "ROI Increase",
				image: "/assets/homepage/3.png",
				points: ["Custom report generation", "Performance benchmarking", "Cost analysis tools", "Trend forecasting"],
			},
		},
	];

	return (
		<div className="min-h-screen bg-white">
			{/* Navigation */}
			<Navigation />
			{/* Hero Section */}
			<section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-white">
				<div className="absolute inset-0 bg-[#678FCA]/[0.02] hero-pattern opacity-50"></div>
				<div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/80"></div>

				<div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						{/* Left Content */}
						<div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
							<div className="inline-flex items-center px-4 py-2 rounded-full bg-[#678FCA]/10 text-[#678FCA] text-sm font-medium mb-8 mx-auto lg:mx-0">
								<Sparkles className="w-4 h-4 mr-2" />
								Advanced Fleet Telematics
							</div>

							<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
								<span className="bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent">Revolutionize Fleet Operations</span>
								<br className="hidden sm:block" />
								<span className="text-gray-900">With Smart Telematics</span>
							</h1>

							<p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
								Boost productivity, safety, and savings with real-time fleet data, predictive maintenance, and automated management solutions.
							</p>

							<div className="flex justify-center lg:justify-start mb-12">
								<button className="bg-[#678FCA] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#678FCA]/90 transition-all duration-300 transform hover:scale-105 flex items-center group shadow-xl shadow-[#678FCA]/10">
									See How It Works
									<ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
								</button>
							</div>

							{/* Stats */}
							<div className="grid grid-cols-3 gap-8 max-w-lg mx-auto lg:mx-0">
								<div className="text-center lg:text-left">
									<div className="text-3xl sm:text-4xl font-bold text-[#678FCA]">99%</div>
									<div className="text-sm sm:text-base text-gray-600 mt-1">Uptime</div>
								</div>
								<div className="text-center lg:text-left">
									<div className="text-3xl sm:text-4xl font-bold text-[#678FCA]">5M+</div>
									<div className="text-sm sm:text-base text-gray-600 mt-1">Miles Tracked</div>
								</div>
								<div className="text-center lg:text-left">
									<div className="text-3xl sm:text-4xl font-bold text-[#678FCA]">50K+</div>
									<div className="text-sm sm:text-base text-gray-600 mt-1">Connected Vehicles</div>
								</div>
							</div>
						</div>

						{/* Right Content - 3D Product Render */}
						<div className="relative lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0">
							<div className="relative w-full max-w-lg mx-auto">
								{/* Main Product Image */}
								<div className="product-render relative z-20 transform hover:scale-105 transition-transform duration-500">
									<Image
										src="/assets/1.png"
										width={600}
										height={600}
										alt="RidesIQ Device"
										className="w-full h-auto rounded-2xl shadow-2xl"
									/>

									{/* Floating Stats Card */}
									<div className="absolute -right-4 sm:-right-8 top-1/4 bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
										<div className="flex items-center gap-3">
											<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
												<BarChart3 className="w-5 h-5 text-green-600" />
											</div>
											<div>
												<div className="text-sm font-medium text-gray-900">Live Tracking</div>
												<div className="text-xs text-gray-500">Real-time updates</div>
											</div>
										</div>
									</div>

									{/* Floating Analytics Card */}
									<div className="absolute -left-4 sm:-left-8 bottom-1/4 bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
										<div className="flex items-center gap-3">
											<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
												<Shield className="w-5 h-5 text-blue-600" />
											</div>
											<div>
												<div className="text-sm font-medium text-gray-900">Advanced Analytics</div>
												<div className="text-xs text-gray-500">Smart insights</div>
											</div>
										</div>
									</div>
								</div>

								{/* Background Elements */}
								<div className="absolute inset-0 z-10">
									<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-gradient-to-r from-[#678FCA]/10 via-[#99D5C9]/10 to-[#678FCA]/10 rounded-full blur-3xl opacity-30 animate-spin-slow"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20 sm:py-32 relative overflow-hidden bg-gray-50/50">
				<div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/80" />
				<div className="absolute inset-0 hero-pattern opacity-10" />

				<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16 sm:mb-20"
					>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="inline-flex items-center px-4 py-2 rounded-full bg-[#678FCA]/10 text-[#678FCA] text-sm font-medium mb-6 sm:mb-8"
						>
							<Sparkles className="w-4 h-4 mr-2" />
							Advanced Telematics Features
						</motion.div>

						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight text-black"
						>
							Powerful Fleet
							<br />
							<span className="bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent">Management Solutions</span>
						</motion.h2>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="text-lg sm:text-xl text-black max-w-2xl mx-auto leading-relaxed"
						>
							Experience data-driven fleet intelligence with powerful tools designed to optimize operations and deliver measurable business results.
						</motion.p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-full mx-auto">
						{features.map((feature, index) => (
							<FeatureCard
								key={feature.title}
								icon={feature.icon}
								title={feature.title}
								description={feature.description}
								index={index}
								details={feature.details}
								isActive={activeFeature === index}
								onMouseEnter={() => setActiveFeature(index)}
								onClick={() => setActiveFeature(index)}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Competitive Advantage Section */}
			<CompetitiveAdvantage />

			{/* Industry Solutions Section */}
			<IndustrySolutions />

			{/* Customer Success & ROI Stats Section */}
			<section className="py-24 sm:py-32 relative overflow-hidden">
				<div className="absolute inset-0 bg-[#678FCA]/[0.02] hero-pattern opacity-50" />
				<div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16 sm:mb-24"
					>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="inline-flex items-center px-4 py-2 rounded-full bg-[#678FCA]/10 text-[#678FCA] text-sm font-medium mb-6"
						>
							<Sparkles className="w-4 h-4 mr-2" />
							Success Metrics
						</motion.div>

						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-black"
						>
							Proven Results for
							<br />
							<span className="bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent">Modern Fleets</span>
						</motion.h2>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="text-xl text-black max-w-2xl mx-auto"
						>
							Trusted by fleets worldwide, RidesIQ delivers measurable impact
						</motion.p>
					</motion.div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
						<StatsCard
							icon={Truck}
							value={20}
							suffix="k+"
							label="Vehicles Tracked"
							index={0}
						/>
						<StatsCard
							icon={Timer}
							value={98}
							suffix="%"
							label="Fleet Uptime Improvement"
							index={1}
						/>
						<StatsCard
							icon={TrendingUp}
							value={2.5}
							suffix="x"
							label="ROI Increase"
							index={2}
						/>
						<StatsCard
							icon={Target}
							value={99.9}
							suffix="%"
							label="Location Accuracy"
							index={3}
						/>
					</div>
				</div>
			</section>

			{/* Product Comparison Section */}
			<section className="py-24 sm:py-32 relative overflow-hidden">
				<div className="absolute inset-0 bg-[#678FCA]/[0.02] hero-pattern opacity-50" />
				<div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16 sm:mb-24"
					>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="inline-flex items-center px-4 py-2 rounded-full bg-[#678FCA]/10 text-[#678FCA] text-sm font-medium mb-6"
						>
							<Sparkles className="w-4 h-4 mr-2" />
							Compare Solutions
						</motion.div>

						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
						>
							Find the Perfect Tracking
							<br />
							<span className="bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent">Solution for Your Fleet</span>
						</motion.h2>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="text-xl text-black max-w-2xl mx-auto"
						>
							Compare our range of tracking devices to find the one that fits your needs
						</motion.p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
						<ProductCard
							title="Hard-Wired Tracker"
							image="/assets/homepage/2.png"
							features={["Professional installation", "Continuous power supply", "Advanced security features", "Real-time tracking & alerts"]}
							index={0}
						/>
						<ProductCard
							title="OBD Tracker"
							image="/assets/homepage/3.png"
							features={["Plug & play installation", "Engine diagnostics", "Fuel consumption monitoring", "Driver behavior analysis"]}
							index={1}
						/>
						<ProductCard
							title="Asset Tracker"
							image="/assets/homepage/1.png"
							features={["Long battery life", "Weather-resistant design", "Geofencing capabilities", "Theft prevention alerts"]}
							index={2}
						/>
					</div>

					{/* Mobile Scroll Indicator */}
					<div className="mt-8 flex justify-center gap-2 lg:hidden">
						<div className="w-2 h-2 rounded-full bg-[#678FCA]" />
						<div className="w-2 h-2 rounded-full bg-gray-200" />
						<div className="w-2 h-2 rounded-full bg-gray-200" />
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#678FCA] via-[#99D5C9] to-[#678FCA] shadow-2xl">
						{/* Background Pattern */}
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
									className="space-y-8"
								>
									<button className="bg-white text-[#678FCA] px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto group">
										Get Started Today
										<ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
									</button>

									{/* Tag Buttons */}
									<div className="flex flex-wrap justify-center gap-4">
										<div className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium">Fleet Tracking</div>
										<div className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium">AI Insights</div>
										<div className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium">Compliance</div>
									</div>
								</motion.div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-900 text-white pt-16 pb-8 px-4 relative">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
						{/* Email Signup Section */}
						<div className="lg:col-span-4">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
							>
								<h3 className="text-2xl font-bold mb-4">Sign up for email updates</h3>
								<p className="text-gray-400 mb-6">Your one-stop shop for Telematics news you need to know each month.</p>
								<form className="space-y-3">
									<div className="relative">
										<input
											type="email"
											placeholder="Enter email address..."
											className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#678FCA] focus:border-transparent transition-all"
										/>
									</div>
									<button className="w-full bg-[#678FCA] text-white px-6 py-3 rounded-lg hover:bg-[#678FCA]/90 transition-all flex items-center justify-center group">
										Subscribe
										<ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
									</button>
								</form>
							</motion.div>
						</div>

						{/* Navigation Links */}
						<div className="lg:col-span-8">
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
								{/* Industries */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.1 }}
								>
									<h4 className="text-lg font-semibold mb-4">Industries</h4>
									<ul className="space-y-3">
										<li>
											<Link
												href="/industries/fleet-management"
												className="text-gray-400 hover:text-white transition-colors"
											>
												Fleet Management
											</Link>
										</li>
										<li>
											<a
												href="#"
												className="text-gray-400 hover:text-white transition-colors"
											>
												Van Tracking
											</a>
										</li>
										<li>
											<a
												href="#"
												className="text-gray-400 hover:text-white transition-colors"
											>
												Vehicle Tracking
											</a>
										</li>
										<li>
											<a
												href="#"
												className="text-gray-400 hover:text-white transition-colors"
											>
												Truck Tracking
											</a>
										</li>
										<li>
											<a
												href="#"
												className="text-gray-400 hover:text-white transition-colors"
											>
												EV Tracking
											</a>
										</li>
									</ul>
								</motion.div>

								{/* Solutions */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.2 }}
								>
									<h4 className="text-lg font-semibold mb-4">Solutions</h4>
									<ul className="space-y-3">
										<li>
											<Link
												href="/solutions/hard-wired-trackers"
												className="text-gray-400 hover:text-white transition-colors"
											>
												Hard-Wired Trackers
											</Link>
										</li>
										<li>
											<Link
												href="/solutions/obd-trackers"
												className="text-gray-400 hover:text-white transition-colors"
											>
												OBD Trackers
											</Link>
										</li>
										<li>
											<Link
												href="/solutions/asset-trackers"
												className="text-gray-400 hover:text-white transition-colors"
											>
												Asset Trackers
											</Link>
										</li>
									</ul>
								</motion.div>

								{/* Resources */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.3 }}
								>
									<h4 className="text-lg font-semibold mb-4">Resources</h4>
									<ul className="space-y-3">
										{/* <li className="flex items-center">
											<a
												href="#"
												className="text-gray-400 hover:text-white transition-colors"
											>
												Blog
											</a>
											<span className="ml-2 text-xs bg-[#678FCA]/20 text-[#678FCA] px-2 py-0.5 rounded-full">Soon</span>
										</li> */}
										<li>
											<a
												href="#"
												className="text-gray-400 hover:text-white transition-colors"
											>
												FAQs
											</a>
										</li>
										{/* <li className="flex items-center">
											<a
												href="#"
												className="text-gray-400 hover:text-white transition-colors"
											>
												API Docs
											</a>
											<span className="ml-2 text-xs bg-[#678FCA]/20 text-[#678FCA] px-2 py-0.5 rounded-full">Soon</span>
										</li> */}
										<li>
											<a
												href="#"
												className="text-gray-400 hover:text-white transition-colors"
											>
												Contact
											</a>
										</li>
									</ul>
								</motion.div>
							</div>
						</div>
					</div>

					{/* Bottom Bar */}
					<div className="pt-8 mt-8 border-t border-gray-800">
						<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
							{/* Legal Links */}
							<div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-400">
								<Link
									href="#"
									className="hover:text-white transition-colors"
								>
									Privacy Policy
								</Link>
								<Link
									href="#"
									className="hover:text-white transition-colors"
								>
									Responsible Disclosure
								</Link>
								<Link
									href="#"
									className="hover:text-white transition-colors"
								>
									Terms of Service
								</Link>
								<Link
									href="#"
									className="hover:text-white transition-colors"
								>
									Trust Center
								</Link>
							</div>

							{/* Social Links */}
							<div className="flex items-center space-x-4">
								<Link
									href="#"
									className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#678FCA] transition-colors group"
								>
									<svg
										className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
									</svg>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</footer>

			{/* Mobile CTA */}
			<div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-lg md:hidden">
				<button className="w-full bg-[#678FCA] text-white py-3 rounded-full flex items-center justify-center">
					Get a Demo <ChevronRight className="ml-2 w-5 h-5" />
				</button>
			</div>
		</div>
	);
}

export default Home;
