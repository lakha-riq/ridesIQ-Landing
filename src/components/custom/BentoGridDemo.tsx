"use client";

import { Rocket, BarChart3, Car, Shield } from "lucide-react";

export default function BentoGrid() {
	return (
		<div className="container mx-auto p-4">
			<div className="space-y-8">
				<div className="space-y-4">
					<h2 className="max-w-7xl mx-auto uppercase opacity-50 text-sm tracking-widest">The fleet advantage</h2>
					<h1 className="text-4xl md:text-6xl font-bold max-w-7xl mx-auto uppercase">Intelligent Fleet Management Designed With Your Business in Mind</h1>
					<p className="text-muted-foreground max-w-7xl mx-auto">
						Transform your fleet operations with real-time insights. Businesses lose 20% of operational efficiency without proper fleet management. See how RidesIQ helps you optimize your
						fleet performance and reduce costs.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
					{/* Real-Time Fleet Card */}
					<div className="relative group md:col-span-2 overflow-hidden rounded-3xl bg-gradient-to-b from-[#1E1E1E] via-[#1E325C] to-[#2C4A87]">
						<div className="p-8 flex flex-col justify-between md:h-[300px]">
							<div className="flex justify-between items-start">
								<span className="text-sm font-medium text-blue-100">REAL-TIME</span>
								<Car className="w-6 h-6 text-white" />
							</div>
							<div>
								<h2 className="text-2xl font-bold text-white mb-2">Real-Time Fleet Visibility</h2>
								<p className="text-blue-100">Monitor your entire fleet with live tracking and instant alerts. Transform complex data into actionable insights.</p>
							</div>
						</div>
						<div className="p-6 bg-gradient-to-t from-[#1a237e] via-[#1565c0] to-transparent md:absolute md:inset-0 md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100 mt-20">
							<h3 className="font-semibold mb-2 text-white">Features:</h3>
							<ul className="list-disc list-inside text-sm space-y-1 text-blue-100">
								<li>Live GPS tracking</li>
								<li>Real-time alerts</li>
								<li>Performance metrics</li>
								<li>Route optimization</li>
							</ul>
						</div>
					</div>

					{/* Automated Card */}
					<div className="relative group overflow-hidden rounded-3xl bg-gradient-to-b from-[#577CA6] via-[#406185] to-[#406185]">
						<div className="p-8 flex flex-col justify-between md:h-[300px]">
							<div className="flex justify-between items-start">
								<span className="text-sm font-medium text-blue-100">AUTOMATED</span>
								<Rocket className="w-6 h-6 text-white" />
							</div>
							<div>
								<h2 className="text-2xl font-bold text-white mb-2">Automated Toll Reporting</h2>
								<p className="text-blue-100 tracking-tight">Eliminate manual toll reconciliation. Automatically track, report, and manage expenses.</p>
							</div>
						</div>
						<div className="p-6 bg-gradient-to-t from-[#0d47a1] via-[#1976d2] to-transparent md:absolute md:inset-0 md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100 mt-20">
							<h3 className="font-semibold mb-2 text-white">Benefits:</h3>
							<ul className="list-disc list-inside text-sm space-y-1 text-blue-100">
								<li>Automated tracking</li>
								<li>Expense management</li>
								<li>Digital receipts</li>
							</ul>
						</div>
					</div>

					{/* Driver Behavior Card */}
					<div className="relative group overflow-hidden rounded-3xl bg-gradient-to-b from-[#1E1E1E] via-[#22282F] to-[#293243]">
						<div className="p-8 flex flex-col justify-between md:h-[300px]">
							<div className="flex justify-between items-start">
								<span className="text-sm font-medium text-blue-100">INTELLIGENT</span>
								<Shield className="w-6 h-6 text-white" />
							</div>
							<div>
								<h2 className="text-2xl font-bold text-white mb-2">Driver Behavior & Safety</h2>
								<p className="text-blue-100">Enhance fleet safety with real-time driver monitoring and performance analytics.</p>
							</div>
						</div>
						<div className="p-6 bg-gradient-to-t from-[#1a237e] via-[#283593] to-transparent md:absolute md:inset-0 md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100 mt-20">
							<h3 className="font-semibold mb-2 text-white">Monitoring:</h3>
							<ul className="list-disc list-inside text-sm space-y-1 text-blue-100">
								<li>Speed tracking</li>
								<li>Safety scores</li>
								<li>Risk assessment</li>
							</ul>
						</div>
					</div>

					{/* Business Intelligence Card */}
					<div className="relative group md:col-span-2 overflow-hidden rounded-3xl bg-gradient-to-b from-[#2D4A86] via-[#273E74] to-[#1E345E]">
						<div className="p-8 flex flex-col justify-between md:h-[300px]">
							<div className="flex justify-between items-start">
								<span className="text-sm font-medium text-blue-100">INSIGHTS</span>
								<BarChart3 className="w-6 h-6 text-white" />
							</div>
							<div>
								<h2 className="text-2xl font-bold text-white mb-2">Business Intelligence</h2>
								<p className="text-blue-100">Turn fleet data into strategic advantages. Get customized reports and analytics that drive business growth.</p>
							</div>
						</div>
						<div className="p-6 bg-gradient-to-t from-[#0d47a1] via-[#1565c0] to-transparent md:absolute md:inset-0 md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100 mt-20">
							<h3 className="font-semibold mb-2 text-white">Analytics:</h3>
							<ul className="list-disc list-inside text-sm space-y-1 text-blue-100">
								<li>Custom reports</li>
								<li>Data visualization</li>
								<li>Trend analysis</li>
								<li>ROI tracking</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
