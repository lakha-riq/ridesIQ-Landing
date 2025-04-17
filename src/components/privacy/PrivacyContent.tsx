"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export function PrivacyContent() {
	return (
		<>
			{/* Hero Section */}
			<section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
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

				<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
			</section>

			{/* Content Section */}
			<section className="py-12 relative">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto prose prose-lg">
						

					</div>
				</div>
			</section>
		</>
	);
}
