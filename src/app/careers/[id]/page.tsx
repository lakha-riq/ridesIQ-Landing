"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, MapPin, Clock, Building2, Calendar, ChevronRight, Share2, Twitter, Linkedin, Facebook, Mail, ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { format } from "date-fns";
import { useRouter } from "next/router";

// Mock data for job listings
const jobListings = [
	{
		id: "software-engineer-backend",
		title: "Software Engineer – Backend",
		department: "Engineering & Development",
		location: "Toronto, ON",
		type: "Full-time",
		remote: true,
		postedAt: new Date("2024-03-12"),
		description: `Join our engineering team and help build the future of fleet management technology. As a Backend Software Engineer at RidesIQ, you'll work on developing scalable solutions that power our fleet tracking platform.`,
		responsibilities: [
			"Develop scalable backend solutions for fleet tracking",
			"Collaborate with cross-functional teams to enhance our platform",
			"Optimize API performance and security",
			"Design and implement new features",
			"Write clean, maintainable, and well-tested code",
			"Participate in code reviews and technical discussions",
		],
		requirements: [
			"3+ years of experience in backend development",
			"Proficiency in Python, Node.js, or Go",
			"Experience with cloud platforms (AWS, GCP, or Azure)",
			"Strong understanding of RESTful APIs and microservices",
			"Knowledge of database systems and optimization",
			"Excellent problem-solving and communication skills",
		],
		benefits: [
			"Competitive salary & equity package",
			"Flexible remote work options",
			"Health, dental, and vision coverage",
			"Professional development budget",
			"Regular team events and activities",
			"Modern tech stack and tools",
		],
	},
	{
		id: "product-manager",
		title: "Product Manager",
		department: "Product",
		location: "Buffalo, NY",
		type: "Full-time",
		remote: true,
		postedAt: new Date("2024-03-10"),
		description: "Lead product strategy and roadmap for our telematics solutions.",
		responsibilities: [
			"Define product strategy and roadmap",
			"Gather and analyze customer feedback",
			"Work with engineering to deliver features",
			"Monitor product metrics and performance",
			"Present product updates to stakeholders",
		],
		requirements: [
			"5+ years of product management experience",
			"Experience with B2B SaaS products",
			"Strong analytical and communication skills",
			"Technical background preferred",
			"Experience with agile methodologies",
		],
		benefits: [
			"Competitive salary & equity package",
			"Flexible remote work options",
			"Health, dental, and vision coverage",
			"Professional development budget",
			"Regular team events and activities",
		],
	},
];

const relatedJobs = [
	{
		id: "frontend-engineer",
		title: "Frontend Engineer",
		department: "Engineering",
		location: "Toronto, ON",
		type: "Full-time",
		remote: true,
	},
	{
		id: "devops-engineer",
		title: "DevOps Engineer",
		department: "Engineering",
		location: "Remote",
		type: "Full-time",
		remote: true,
	},
];

const JobDescription = () => {
	const { id } = useRouter().query;
	const job = jobListings.find((j) => j.id === id);

	if (!job) {
		return (
			<div className="min-h-screen bg-white">
				<Navigation />
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
					<div className="text-center">
						<h1 className="text-3xl font-bold text-gray-900 mb-4">Job Not Found</h1>
						<p className="text-gray-600 mb-8">{"The job posting you're looking for doesn't exist or has been removed."}</p>
						<Link
							href="/careers"
							className="inline-flex items-center text-[#678FCA] hover:text-[#678FCA]/80 transition-colors"
						>
							<ArrowLeft className="w-4 h-4 mr-2" />
							Back to Careers
						</Link>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-white">
			<Navigation />

			{/* Hero Section */}
			<section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
				{/* Background & Overlays */}
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/70" />
					<div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
				</div>

				<div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
					<div className="max-w-3xl mx-auto">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="space-y-8"
						>
							<Link
								href="/careers"
								className="inline-flex items-center text-white/80 hover:text-white transition-colors"
							>
								<ArrowLeft className="w-4 h-4 mr-2" />
								Back to Careers
							</Link>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white text-sm font-medium"
							>
								<Sparkles className="w-4 h-4 mr-2" />
								{job.department}
							</motion.div>

							<motion.h1
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.3 }}
								className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-white"
							>
								{job.title}
							</motion.h1>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="flex flex-wrap gap-4 text-white/90"
							>
								<div className="flex items-center">
									<MapPin className="w-5 h-5 mr-2" />
									{job.location}
									{job.remote && <span className="ml-2 text-sm bg-white/20 px-2 py-0.5 rounded-full">Remote Available</span>}
								</div>
								<div className="flex items-center">
									<Clock className="w-5 h-5 mr-2" />
									{job.type}
								</div>
								<div className="flex items-center">
									<Building2 className="w-5 h-5 mr-2" />
									{job.department}
								</div>
								<div className="flex items-center">
									<Calendar className="w-5 h-5 mr-2" />
									Posted {format(job.postedAt, "MMM d, yyyy")}
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.5 }}
								className="pt-4"
							>
								<button className="bg-[#678FCA] text-white px-8 py-4 rounded-full hover:bg-[#678FCA]/90 transition-all flex items-center group">
									Apply Now
									<ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
								</button>
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
									<button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#678FCA]/10 text-gray-600 hover:text-[#678FCA] flex items-center justify-center transition-colors" aria-label="Share on Twitter">
										<Twitter className="w-4 h-4" />
									</button>
									<button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#678FCA]/10 text-gray-600 hover:text-[#678FCA] flex items-center justify-center transition-colors" aria-label="Share on LinkedIn">
										<Linkedin className="w-4 h-4" />
									</button>
									<button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#678FCA]/10 text-gray-600 hover:text-[#678FCA] flex items-center justify-center transition-colors" aria-label="Share on Facebook">
										<Facebook className="w-4 h-4" />
									</button>
									<button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#678FCA]/10 text-gray-600 hover:text-[#678FCA] flex items-center justify-center transition-colors" aria-label="Share via Email">
										<Mail className="w-4 h-4" />
									</button>
								</div>
							</div>

							{/* Job Description */}
							<div className="prose prose-lg max-w-none">
								<p className="text-gray-600 leading-relaxed mb-8">{job.description}</p>

								<h2 className="text-2xl font-bold mb-4">{"What You'll Do"}</h2>
								<ul className="list-disc pl-6 space-y-2 mb-8">
									{job.responsibilities.map((item, index) => (
										<li
											key={index}
											className="text-gray-600"
										>
											{item}
										</li>
									))}
								</ul>

								<h2 className="text-2xl font-bold mb-4">{"What We're Looking For"}</h2>
								<ul className="list-disc pl-6 space-y-2 mb-8">
									{job.requirements.map((item, index) => (
										<li
											key={index}
											className="text-gray-600"
										>
											{item}
										</li>
									))}
								</ul>

								<h2 className="text-2xl font-bold mb-4">Why Join RidesIQ?</h2>
								<ul className="list-disc pl-6 space-y-2 mb-8">
									{job.benefits.map((item, index) => (
										<li
											key={index}
											className="text-gray-600"
										>
											{item}
										</li>
									))}
								</ul>
							</div>

							{/* Apply Button */}
							<div className="mt-8 pt-8 border-t border-gray-100">
								<button className="bg-[#678FCA] text-white px-8 py-4 rounded-full hover:bg-[#678FCA]/90 transition-all flex items-center group">
									Apply for this Position
									<ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
								</button>
							</div>
						</div>

						{/* Sidebar */}
						<div className="lg:col-span-1">
							{/* Related Jobs */}
							<div className="bg-gray-50 rounded-2xl p-6 mb-8">
								<h3 className="text-xl font-bold mb-4">Similar Positions</h3>
								<div className="space-y-4">
									{relatedJobs.map((relatedJob) => (
										<Link
											key={relatedJob.id}
											href={`/careers/${relatedJob.id}`}
											className="block bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
										>
											<h4 className="font-medium text-gray-900 mb-2">{relatedJob.title}</h4>
											<div className="flex flex-wrap gap-2 text-sm">
												<span className="inline-flex items-center text-gray-600">
													<MapPin className="w-4 h-4 mr-1" />
													{relatedJob.location}
												</span>
												<span className="inline-flex items-center text-gray-600">
													<Clock className="w-4 h-4 mr-1" />
													{relatedJob.type}
												</span>
											</div>
										</Link>
									))}
								</div>
								<Link
									href="/careers"
									className="inline-flex items-center text-[#678FCA] hover:text-[#678FCA]/80 transition-colors mt-4"
								>
									View All Openings
									<ChevronRight className="ml-1 w-4 h-4" />
								</Link>
							</div>

							{/* Application Steps */}
							<div className="bg-gray-50 rounded-2xl p-6">
								<h3 className="text-xl font-bold mb-4">Application Process</h3>
								<div className="space-y-4">
									{[
										{ step: 1, title: "Apply Online", description: "Submit your resume & cover letter" },
										{ step: 2, title: "Initial Screening", description: "HR call to discuss your experience" },
										{ step: 3, title: "Technical Interview", description: "Meet the team & complete assessment" },
										{ step: 4, title: "Final Interview", description: "Discussion with hiring manager" },
									].map((step) => (
										<div
											key={step.step}
											className="flex gap-4"
										>
											<div className="w-8 h-8 rounded-full bg-[#678FCA]/10 flex items-center justify-center text-[#678FCA] font-medium flex-shrink-0">{step.step}</div>
											<div>
												<h4 className="font-medium text-gray-900">{step.title}</h4>
												<p className="text-sm text-gray-600">{step.description}</p>
											</div>
										</div>
									))}
								</div>
							</div>
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
									Ready to Join Our Team?
								</motion.h2>

								<motion.p
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.1 }}
									className="text-xl text-white/90 mb-12"
								>
									Take the next step in your career with RidesIQ
								</motion.p>

								<motion.div
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.2 }}
									className="flex flex-col sm:flex-row gap-4 justify-center"
								>
									<button className="bg-white text-[#678FCA] px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105 flex items-center group">
										Apply Now
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

export default JobDescription;
