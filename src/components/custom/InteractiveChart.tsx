"use client";

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Activity, AlertCircle, BarChart2, Navigation } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const data = [
	{ month: "Jan", visitors: 2400, customers: 1800 },
	{ month: "Feb", visitors: 1398, customers: 1210 },
	{ month: "Mar", visitors: 9800, customers: 2290 },
	{ month: "Apr", visitors: 3908, customers: 2000 },
	{ month: "May", visitors: 4800, customers: 2181 },
	{ month: "Jun", visitors: 3800, customers: 2500 },
];

const chartConfig = {
	visitors: {
		label: "Visitors",
		color: "hsl(220, 70%, 50%)",
	},
	customers: {
		label: "Customers",
		color: "hsl(340, 40%, 30%)",
	},
};

const features = [
	{
		icon: Navigation,
		title: "Real-time GPS tracking and route optimization",
	},
	{
		icon: BarChart2,
		title: "Advanced analytics and custom reporting",
	},
	{
		icon: Activity,
		title: "Comprehensive vehicle health monitoring",
	},
	{
		icon: AlertCircle,
		title: "Automated maintenance scheduling and alerts",
	},
];

export default function ChartsSection() {
	return (
		<div className="max-h-screen bg-black text-white mb-6">
			<div className="container mx-auto px-4 py-12">
				<div className="grid gap-8 lg:grid-cols-2">
					{/* Chart Section - Shows first on mobile */}
					<div className="order-1 lg:order-2 ">
						<Card className="bg-black border-zinc-800">
							<div className="p-6 sm:p-2">
								<h3 className="text-lg font-medium mb-2">Area Chart - Gradient</h3>
								<p className="text-sm text-zinc-400 mb-4">Showing total visitors for the last 6 months</p>
								<div className="max-h-[300px]">
									<ChartContainer config={chartConfig}>
										<ResponsiveContainer
											width="100%"
											height="100%"
										>
											<AreaChart data={data}>
												<defs>
													<linearGradient
														id="visitors"
														x1="0"
														y1="0"
														x2="0"
														y2="1"
													>
														<stop
															offset="5%"
															stopColor="hsl(220, 70%, 50%)"
															stopOpacity={0.8}
														/>
														<stop
															offset="95%"
															stopColor="hsl(220, 70%, 50%)"
															stopOpacity={0}
														/>
													</linearGradient>
													<linearGradient
														id="customers"
														x1="0"
														y1="0"
														x2="0"
														y2="1"
													>
														<stop
															offset="5%"
															stopColor="hsl(340, 40%, 30%)"
															stopOpacity={0.8}
														/>
														<stop
															offset="95%"
															stopColor="hsl(340, 40%, 30%)"
															stopOpacity={0}
														/>
													</linearGradient>
												</defs>
												<XAxis
													dataKey="month"
													stroke="#525252"
													tickLine={false}
												/>
												<YAxis
													stroke="#525252"
													tickLine={false}
													axisLine={false}
												/>
												<ChartTooltip content={<ChartTooltipContent />} />
												<Area
													type="monotone"
													dataKey="visitors"
													stroke="hsl(220, 70%, 50%)"
													fillOpacity={1}
													fill="url(#visitors)"
												/>
												<Area
													type="monotone"
													dataKey="customers"
													stroke="hsl(340, 40%, 30%)"
													fillOpacity={1}
													fill="url(#customers)"
												/>
											</AreaChart>
										</ResponsiveContainer>
									</ChartContainer>
								</div>
							</div>
						</Card>
					</div>

					{/* Content Section */}
					<div className="order-2 lg:order-1">
						<div className="md:space-y-6 space-y-4">
							<p className="text-sm font-medium text-zinc-400">BUSINESS FRIENDLY</p>
							<h1 className="text-4xl font-medium leading-tight lg:text-5xl">Intelligent Fleet Management Designed With Your Business in Mind</h1>
							<p className="text-lg text-zinc-400">
								Give your business complete visibility and control over your fleet operations with real-time tracking and analytics, including these powerful features:
							</p>
							<div className="grid gap-6 sm:grid-cols-2">
								{features.map((feature, index) => (
									<div
										key={index}
										className="flex items-start gap-4"
									>
										<div className="rounded-lg bg-zinc-800 p-2">
											<feature.icon className="h-5 w-5" />
										</div>
										<p className="text-sm text-zinc-300">{feature.title}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
