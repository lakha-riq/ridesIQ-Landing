"use client";

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Activity, AlertCircle, BarChart2, Navigation, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

interface ChartData {
	time: string;
	speed: number;
	altitude: number;
}

interface ChartConfig {
	[key: string]: {
		label: string;
		color: string;
	};
}

interface Feature {
	icon: React.ElementType;
	title: string;
}

const data: ChartData[] = [
	{ time: "6:58:03 AM", speed: 2400, altitude: 1800 },
	{ time: "7:58:03 AM", speed: 1398, altitude: 1210 },
	{ time: "8:58:03 AM", speed: 9800, altitude: 2290 },
	{ time: "9:58:03 AM", speed: 3908, altitude: 2000 },
	{ time: "10:58:03 AM", speed: 4800, altitude: 2181 },
	{ time: "11:58:03 AM", speed: 3800, altitude: 2500 },
];

const chartConfig: ChartConfig = {
	speed: {
		label: "Speed",
		color: "hsl(220, 70%, 50%)",
	},
	altitude: {
		label: "Altitude",
		color: "hsl(340, 40%, 30%)",
	},
};

const features: Feature[] = [
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

const ChartSection = () => (
	<Card className="bg-black border-zinc-800">
		<div className="p-6 sm:p-2">
			<h3 className="text-lg font-medium mb-2">Line Chart - Speed vs Altitude</h3>
			<p className="text-sm text-zinc-400 mb-4">Showing for COMPANY: UNIT #697159</p>
			<div className="max-h-[500px]">
				<ChartContainer config={chartConfig}>
					<ResponsiveContainer
						width="100%"
						height="100%"
					>
						<AreaChart data={data}>
							<defs>
								<linearGradient
									id="speed"
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
									id="altitude"
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
								dataKey="time"
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
								dataKey="speed"
								stroke="hsl(220, 70%, 50%)"
								fillOpacity={1}
								fill="url(#speed)"
							/>
							<Area
								type="monotone"
								dataKey="altitude"
								stroke="hsl(340, 40%, 30%)"
								fillOpacity={1}
								fill="url(#altitude)"
							/>
						</AreaChart>
					</ResponsiveContainer>
				</ChartContainer>
				<div className="flex flex-col  gap-2 ">
					<div className="mx-8  text-start flex  gap-2">
						Speed Alerts: 7 times <TrendingUp className="w-4 h-4" />
					</div>
					<div className="mx-8  text-start flex  gap-2 text-xs uppercase mb-2 opacity-50">January 07, 2023 6:58:03 AM - 11:58:03 AM</div>
				</div>
			</div>
		</div>
	</Card>
);

export default function ChartsSection() {
	return (
		<div className="max-h-screen bg-black text-white mb-6">
			<div className="container mx-auto px-4 py-12">
				{/* Mobile view - Stacked layout */}
				<div className="lg:hidden space-y-8">
					{/* Title section */}
					<div className="space-y-4">
						<p className="text-sm font-medium text-zinc-400">BUSINESS FRIENDLY</p>
						<h1 className="text-3xl font-medium leading-tight">Intelligent Fleet Management Designed With Your Business in Mind</h1>
					</div>

					{/* Chart section */}
					<ChartSection />

					{/* Content section */}
					<p className="text-lg text-zinc-400">
						Give your business complete visibility and control over your fleet operations with real-time tracking and analytics, including these powerful features:
					</p>

					{/* Features grid */}
					<div className="grid gap-8 sm:grid-cols-2">
						{features.map((feature, index) => (
							<div
								key={index}
								className="flex items-start gap-6"
							>
								<div className="rounded-lg bg-zinc-800 p-2">
									<feature.icon className="h-5 w-5" />
								</div>
								<p className="text-sm text-zinc-300">{feature.title}</p>
							</div>
						))}
					</div>
				</div>

				{/* Desktop view - Two-column layout */}
				<div className="hidden lg:grid lg:grid-cols-2 gap-8">
					{/* Content Section */}
					<div className="space-y-6">
						<p className="text-sm font-medium text-zinc-400">BUSINESS FRIENDLY</p>
						<h1 className="text-4xl font-medium leading-tight">Intelligent Fleet Management Designed With Your Business in Mind</h1>
						<p className="text-lg text-zinc-400">
							Give your business complete visibility and control over your fleet operations with real-time tracking and analytics, including these powerful features:
						</p>
						<div className="grid gap-16 sm:grid-cols-2 mt-20">
							{features.map((feature, index) => (
								<div
									key={index}
									className="flex items-start gap-6"
								>
									<div className="rounded-lg bg-zinc-800 p-2">
										<feature.icon className="h-5 w-5" />
									</div>
									<p className="text-sm text-zinc-300">{feature.title}</p>
								</div>
							))}
						</div>
					</div>

					{/* Chart Section */}
					<ChartSection />
				</div>
			</div>
		</div>
	);
}
