import React from "react";
import { motion } from "framer-motion";
import { Check, X, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";

interface ComparisonFeature {
	name: string;
	ridesiq: {
		supported: boolean;
		detail: string;
	};
	competitors: {
		[key: string]: {
			supported: boolean;
			detail: string;
		};
	};
}

const features: ComparisonFeature[] = [
	{
		name: "Real-Time GPS Accuracy",
		ridesiq: {
			supported: true,
			detail: "Industry-Leading 99% Accuracy",
		},
		competitors: {
			geotab: { supported: false, detail: "Standard GPS" },
			zubie: { supported: false, detail: "Standard GPS" },
			ramtracking: { supported: false, detail: "Standard GPS" },
		},
	},
	{
		name: "Seamless API Integrations",
		ridesiq: {
			supported: true,
			detail: "Plug & Play API with Customization",
		},
		competitors: {
			geotab: { supported: false, detail: "Limited API" },
			zubie: { supported: true, detail: "Basic API" },
			ramtracking: { supported: false, detail: "Limited API" },
		},
	},
	{
		name: "Cost-Effectiveness",
		ridesiq: {
			supported: true,
			detail: "Competitive Pricing for Fleets",
		},
		competitors: {
			geotab: { supported: false, detail: "Expensive" },
			zubie: { supported: false, detail: "Monthly Fees" },
			ramtracking: { supported: false, detail: "Pricey Contracts" },
		},
	},
	{
		name: "Real-Time Analytics",
		ridesiq: {
			supported: true,
			detail: "Advanced AI for Predictive Insights",
		},
		competitors: {
			geotab: { supported: false, detail: "Basic Reports" },
			zubie: { supported: false, detail: "No AI Features" },
			ramtracking: { supported: false, detail: "No AI Features" },
		},
	},
	{
		name: "24/7 Customer Support",
		ridesiq: {
			supported: true,
			detail: "Live Chat, Phone & Email Support",
		},
		competitors: {
			geotab: { supported: false, detail: "Email Only" },
			zubie: { supported: false, detail: "Limited Hours" },
			ramtracking: { supported: false, detail: "Delayed Responses" },
		},
	},
	{
		name: "Enterprise-Grade Security",
		ridesiq: {
			supported: true,
			detail: "End-to-End Data Encryption",
		},
		competitors: {
			geotab: { supported: false, detail: "Basic Security" },
			zubie: { supported: false, detail: "No Encryption" },
			ramtracking: { supported: false, detail: "Basic Encryption" },
		},
	},
];

const competitors = [
	{ id: "geotab", name: "Geotab" },
	{ id: "zubie", name: "Zubie" },
	{ id: "ramtracking", name: "RamTracking" },
];

export const CompetitiveAdvantage = () => {
	return (
		<section className="py-24 relative overflow-hidden">
			<div className="absolute inset-0 bg-[#678FCA]/[0.02] hero-pattern opacity-50" />
			<div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="inline-flex items-center px-4 py-2 rounded-full bg-[#678FCA]/10 text-[#678FCA] text-sm font-medium mb-6"
					>
						<Sparkles className="w-4 h-4 mr-2" />
						Competitive Analysis
					</motion.div>

					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-4xl sm:text-5xl font-bold mb-6"
					>
						Why Choose <span className="bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent">RidesIQ</span>
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-xl text-gray-600 max-w-2xl mx-auto"
					>
						See how RidesIQ compares to other fleet management solutions
					</motion.p>
				</motion.div>

				{/* Comparison Table */}
				<div className="overflow-x-auto">
					<table className="w-full min-w-[800px]">
						<thead>
							<tr>
								<th className="p-4 text-left text-gray-600 font-medium">Features</th>
								<th className="p-4 text-left">
									<div className="bg-[#678FCA]/5 rounded-xl p-4">
										<div className="text-[#678FCA] font-bold text-lg">RidesIQ</div>
										<div className="text-sm text-gray-600">Industry Leader</div>
									</div>
								</th>
								{competitors.map((competitor) => (
									<th
										key={competitor.id}
										className="p-4 text-left"
									>
										<div className="p-4">
											<div className="text-gray-900 font-bold">{competitor.name}</div>
											<div className="text-sm text-gray-600">Competitor</div>
										</div>
									</th>
								))}
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-100">
							{features.map((feature, index) => (
								<motion.tr
									key={feature.name}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									className="group hover:bg-gray-50/50"
								>
									<td className="p-4">
										<div className="font-medium text-gray-900">{feature.name}</div>
									</td>
									<td className="p-4">
										<div className="bg-[#678FCA]/5 group-hover:bg-[#678FCA]/10 rounded-xl p-4 transition-colors">
											<div className="flex items-start gap-3">
												<div className="w-6 h-6 rounded-full bg-[#678FCA]/10 flex items-center justify-center flex-shrink-0">
													<Check className="w-4 h-4 text-[#678FCA]" />
												</div>
												<div className="text-sm text-gray-600">{feature.ridesiq.detail}</div>
											</div>
										</div>
									</td>
									{competitors.map((competitor) => (
										<td
											key={competitor.id}
											className="p-4"
										>
											<div className="p-4">
												<div className="flex items-start gap-3">
													<div
														className={`w-6 h-6 rounded-full ${
															feature.competitors[competitor.id].supported ? "bg-green-100" : "bg-red-100"
														} flex items-center justify-center flex-shrink-0`}
													>
														{feature.competitors[competitor.id].supported ? <Check className="w-4 h-4 text-green-600" /> : <X className="w-4 h-4 text-red-600" />}
													</div>
													<div className="text-sm text-gray-600">{feature.competitors[competitor.id].detail}</div>
												</div>
											</div>
										</td>
									))}
								</motion.tr>
							))}
						</tbody>
					</table>
				</div>

				{/* CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mt-12 text-center"
				>
					<Link
						href="/contact"
						className="inline-flex items-center bg-[#678FCA] text-white px-8 py-4 rounded-full hover:bg-[#678FCA]/90 transition-all group"
					>
						See How RidesIQ Can Transform Your Fleet
						<ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
					</Link>
				</motion.div>
			</div>
		</section>
	);
};
