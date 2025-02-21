import { Rocket, BarChart3, Car, Shield } from "lucide-react";

export default function BentoGrid() {
	return (
		<div className="container mx-auto p-4">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
				{/* Real-Time Fleet Card - Spans 2 columns */}
				<div className="relative group md:col-span-2  h-[300px] overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800">
					<div className="p-8 h-full flex flex-col justify-between">
						<div className="flex justify-between items-start">
							<span className="text-sm font-medium text-blue-100">REAL-TIME</span>
							<Car className="w-6 h-6 text-white" />
						</div>
						<div>
							<h2 className="text-2xl font-bold text-white mb-2">Real-Time Fleet Visibility</h2>
							<p className="text-blue-100">Monitor your entire fleet with live tracking and instant alerts. Transform complex data into actionable insights.</p>
						</div>
					</div>
					<div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-6 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
						<h3 className="font-semibold mb-2">Features:</h3>
						<ul className="list-disc list-inside text-sm space-y-1">
							<li>Live GPS tracking</li>
							<li>Real-time alerts</li>
							<li>Performance metrics</li>
							<li>Route optimization</li>
						</ul>
					</div>
				</div>

				{/* Automated Card */}
				<div className="relative group h-[300px] overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 to-blue-700">
					<div className="p-8 h-full flex flex-col justify-between">
						<div className="flex justify-between items-start">
							<span className="text-sm font-medium text-blue-100">AUTOMATED</span>
							<Rocket className="w-6 h-6 text-white" />
						</div>
						<div>
							<h2 className="text-2xl font-bold text-white mb-2">Automated Toll Reporting</h2>
							<p className="text-blue-100">Eliminate manual toll reconciliation. Automatically track, report, and manage expenses.</p>
						</div>
					</div>
					<div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-6 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
						<h3 className="font-semibold mb-2">Benefits:</h3>
						<ul className="list-disc list-inside text-sm space-y-1">
							<li>Automated tracking</li>
							<li>Expense management</li>
							<li>Digital receipts</li>
						</ul>
					</div>
				</div>

				{/* Driver Behavior Card */}
				<div className="relative group h-[300px] overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900 to-blue-950">
					<div className="p-8 h-full flex flex-col justify-between">
						<div className="flex justify-between items-start">
							<span className="text-sm font-medium text-blue-100">INTELLIGENT</span>
							<Shield className="w-6 h-6 text-white" />
						</div>
						<div>
							<h2 className="text-2xl font-bold text-white mb-2">Driver Behavior & Safety</h2>
							<p className="text-blue-100">Enhance fleet safety with real-time driver monitoring and performance analytics.</p>
						</div>
					</div>
					<div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-6 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
						<h3 className="font-semibold mb-2">Monitoring:</h3>
						<ul className="list-disc list-inside text-sm space-y-1">
							<li>Speed tracking</li>
							<li>Safety scores</li>
							<li>Risk assessment</li>
						</ul>
					</div>
				</div>

				{/* Business Intelligence Card */}
				<div className="relative group md:col-span-2 h-[300px] overflow-hidden rounded-3xl bg-gradient-to-br from-blue-800 to-blue-900">
					<div className="p-8 h-full flex flex-col justify-between">
						<div className="flex justify-between items-start">
							<span className="text-sm font-medium text-blue-100">INSIGHTS</span>
							<BarChart3 className="w-6 h-6 text-white" />
						</div>
						<div>
							<h2 className="text-2xl font-bold text-white mb-2">Business Intelligence</h2>
							<p className="text-blue-100">Turn fleet data into strategic advantages. Get customized reports and analytics that drive business growth.</p>
						</div>
					</div>
					<div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-6 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
						<h3 className="font-semibold mb-2">Analytics:</h3>
						<ul className="list-disc list-inside text-sm space-y-1">
							<li>Custom reports</li>
							<li>Data visualization</li>
							<li>Trend analysis</li>
							<li>ROI tracking</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
