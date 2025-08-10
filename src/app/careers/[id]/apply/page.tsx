"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, ArrowLeft, Building2, MapPin, Clock, Upload, ChevronRight, CheckCircle2 } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { useRouter } from "next/router";

// Mock data for job listings (matching JobDescription.tsx)
const jobListings = [
	{
		id: "software-engineer-backend",
		title: "Software Engineer – Backend",
		department: "Engineering & Development",
		location: "Toronto, ON",
		type: "Full-time",
		remote: true,
	},
	{
		id: "product-manager",
		title: "Product Manager",
		department: "Product",
		location: "Buffalo, NY",
		type: "Full-time",
		remote: true,
	},
];

interface FormData {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	linkedIn: string;
	portfolio: string;
	resume: File | null;
	coverLetter: string;
	source: string;
	agreedToTerms: boolean;
}

const initialFormData: FormData = {
	firstName: "",
	lastName: "",
	email: "",
	phone: "",
	linkedIn: "",
	portfolio: "",
	resume: null,
	coverLetter: "",
	source: "",
	agreedToTerms: false,
};

const CareerApplication = () => {
	const { id } =  useRouter( ).query;
	const job = jobListings.find((j) => j.id === id);
	const [formData, setFormData] = useState<FormData>(initialFormData);
	const [formErrors, setFormErrors] = useState<Partial<Record<keyof FormData, string>>>({});
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

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

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		// Clear error when user starts typing
		if (formErrors[name as keyof FormData]) {
			setFormErrors((prev) => ({ ...prev, [name]: "" }));
		}
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			if (file.size > 5 * 1024 * 1024) {
				// 5MB limit
				setFormErrors((prev) => ({ ...prev, resume: "File size must be less than 5MB" }));
				return;
			}
			setFormData((prev) => ({ ...prev, resume: file }));
			setFormErrors((prev) => ({ ...prev, resume: "" }));
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Validation
		const errors: Partial<Record<keyof FormData, string>> = {};
		if (!formData.firstName) errors.firstName = "First name is required";
		if (!formData.lastName) errors.lastName = "Last name is required";
		if (!formData.email) errors.email = "Email is required";
		if (!formData.phone) errors.phone = "Phone number is required";
		if (!formData.resume) errors.resume = "Resume is required";
		if (!formData.agreedToTerms) errors.agreedToTerms = "You must agree to the terms";

		if (Object.keys(errors).length > 0) {
			setFormErrors(errors);
			return;
		}

		setIsSubmitting(true);

		// Simulate API call
		try {
			await new Promise((resolve) => setTimeout(resolve, 1500));
			setIsSubmitted(true);
		} catch (error) {
			console.error("Error submitting application:", error);
		} finally {
			setIsSubmitting(false);
		}
	};

	if (isSubmitted) {
		return (
			<div className="min-h-screen bg-white">
				<Navigation />

				<div className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
					<div className="absolute inset-0 bg-[#678FCA]/[0.02] hero-pattern opacity-50" />
					<div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />

					<div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
						<div className="max-w-3xl mx-auto text-center">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								className="space-y-8"
							>
								<div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto">
									<CheckCircle2 className="w-12 h-12 text-green-600" />
								</div>

								<h1 className="text-4xl font-bold text-gray-900">Application Submitted!</h1>

								<p className="text-xl text-gray-600">{`Thank you for applying to ${job.title} at RidesIQ. We'll review your application and get back to you soon.`}</p>

								<div className="flex justify-center gap-4 pt-8">
									<Link
										href="/careers"
										className="bg-[#678FCA] text-white px-8 py-4 rounded-full hover:bg-[#678FCA]/90 transition-all flex items-center group"
									>
										View More Opportunities
										<ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
									</Link>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		);
	}

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
					<div className="max-w-3xl mx-auto">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="space-y-8"
						>
							<Link
								href={`/careers/${id}`}
								className="inline-flex items-center text-white/80 hover:text-white transition-colors"
							>
								<ArrowLeft className="w-4 h-4 mr-2" />
								Back to Job Description
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
								Apply for {job.title}
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
							</motion.div>
						</motion.div>
					</div>
				</div>

				{/* Hero Bottom Gradient */}
				<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
			</section>

			{/* Application Form */}
			<section className="py-12 relative">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto">
						<form
							onSubmit={handleSubmit}
							className="space-y-8"
						>
							{/* Personal Information */}
							<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
								<h2 className="text-2xl font-bold mb-6">Personal Information</h2>

								<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
										<input
                      type="text"
                      placeholder="firstName"
											name="firstName"
											value={formData.firstName}
											onChange={handleInputChange}
											className={`w-full px-4 py-3 rounded-lg border ${
												formErrors.firstName ? "border-red-500" : "border-gray-300"
											} focus:outline-none focus:ring-2 focus:ring-[#678FCA] focus:border-transparent`}
										/>
										{formErrors.firstName && <p className="mt-1 text-sm text-red-600">{formErrors.firstName}</p>}
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
										<input
											type="text"
                      name="lastName"
                      placeholder="lastName"
											value={formData.lastName}
											onChange={handleInputChange}
											className={`w-full px-4 py-3 rounded-lg border ${
												formErrors.lastName ? "border-red-500" : "border-gray-300"
											} focus:outline-none focus:ring-2 focus:ring-[#678FCA] focus:border-transparent`}
										/>
										{formErrors.lastName && <p className="mt-1 text-sm text-red-600">{formErrors.lastName}</p>}
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
										<input
											type="email"
                      name="email"
                      placeholder="email"
											value={formData.email}
											onChange={handleInputChange}
											className={`w-full px-4 py-3 rounded-lg border ${
												formErrors.email ? "border-red-500" : "border-gray-300"
											} focus:outline-none focus:ring-2 focus:ring-[#678FCA] focus:border-transparent`}
										/>
										{formErrors.email && <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>}
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
										<input
											type="tel"
                      name="phone"
                      placeholder="phone"
											value={formData.phone}
											onChange={handleInputChange}
											className={`w-full px-4 py-3 rounded-lg border ${
												formErrors.phone ? "border-red-500" : "border-gray-300"
											} focus:outline-none focus:ring-2 focus:ring-[#678FCA] focus:border-transparent`}
										/>
										{formErrors.phone && <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>}
									</div>
								</div>
							</div>

							{/* Professional Links */}
							<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
								<h2 className="text-2xl font-bold mb-6">Professional Links</h2>

								<div className="space-y-6">
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn Profile URL</label>
										<input
											type="url"
											name="linkedIn"
											value={formData.linkedIn}
											onChange={handleInputChange}
											className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#678FCA] focus:border-transparent"
											placeholder="https://linkedin.com/in/username"
										/>
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">Portfolio or Website</label>
										<input
											type="url"
											name="portfolio"
											value={formData.portfolio}
											onChange={handleInputChange}
											className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#678FCA] focus:border-transparent"
											placeholder="https://yourwebsite.com"
										/>
									</div>
								</div>
							</div>

							{/* Application Details */}
							<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
								<h2 className="text-2xl font-bold mb-6">Application Details</h2>

								<div className="space-y-6">
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">Resume *</label>
										<div className={`relative border-2 border-dashed rounded-lg p-6 text-center ${formErrors.resume ? "border-red-500" : "border-gray-300"}`}>
											<input
												type="file"
                        name="resume"
                        placeholder="resume"
												accept=".pdf,.doc,.docx"
												onChange={handleFileChange}
												className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
											/>
											<div className="space-y-2">
												<Upload className="w-8 h-8 text-gray-400 mx-auto" />
												<div className="text-sm text-gray-600">
													{formData.resume ? (
														<span className="text-[#678FCA]">{formData.resume.name}</span>
													) : (
														<>
															<span className="text-[#678FCA]">Click to upload</span> or drag and drop
															<br />
															PDF, DOC, DOCX (max. 5MB)
														</>
													)}
												</div>
											</div>
										</div>
										{formErrors.resume && <p className="mt-1 text-sm text-red-600">{formErrors.resume}</p>}
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
										<textarea
											name="coverLetter"
											value={formData.coverLetter}
											onChange={handleInputChange}
											rows={6}
											className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#678FCA] focus:border-transparent"
											placeholder="Tell us why you're interested in this position..."
										/>
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">How did you hear about us?</label>
										<select                 
                      value={formData.source}
                      title="Source for the job"
											onChange={handleInputChange}
											className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#678FCA] focus:border-transparent"
										>
											<option value="">Select an option</option>
											<option value="linkedin">LinkedIn</option>
											<option value="website">Company Website</option>
											<option value="referral">Employee Referral</option>
											<option value="other">Other</option>
										</select>
									</div>
								</div>
							</div>

							{/* Terms & Submit */}
							<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
								<div className="space-y-6">
									<div>
										<label className="flex items-start gap-3">
											<input
												type="checkbox"
												name="agreedToTerms"
												checked={formData.agreedToTerms}
												onChange={(e) => {
													setFormData((prev) => ({ ...prev, agreedToTerms: e.target.checked }));
													if (formErrors.agreedToTerms) {
														setFormErrors((prev) => ({ ...prev, agreedToTerms: "" }));
													}
												}}
												className="mt-1 h-4 w-4 text-[#678FCA] focus:ring-[#678FCA] rounded"
											/>
											<span className="text-sm text-gray-600">
												I agree to the{" "}
												<Link
													href="/privacy-policy"
													className="text-[#678FCA] hover:underline"
												>
													Privacy Policy
												</Link>{" "}
												and{" "}
												<Link
													href="/terms-of-service"
													className="text-[#678FCA] hover:underline"
												>
													Terms of Service
												</Link>
											</span>
										</label>
										{formErrors.agreedToTerms && <p className="mt-1 text-sm text-red-600">{formErrors.agreedToTerms}</p>}
									</div>

									<button
										type="submit"
										disabled={isSubmitting}
										className="w-full bg-[#678FCA] text-white px-8 py-4 rounded-full hover:bg-[#678FCA]/90 transition-all flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
									>
										{isSubmitting ? (
											"Submitting..."
										) : (
											<>
												Submit Application
												<ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
											</>
										)}
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
};

export default CareerApplication;
