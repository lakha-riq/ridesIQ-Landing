"use client";
import React from "react";
import { IndustryTemplate } from "@/components/IndustryTemplate";
import { IndustryKeyFeatures } from "@/components/IndustryKeyFeatures";
import { Construction as ConstructionIcon, Shield, BarChart3, Clock, AlertCircle, Settings2, Timer, TrendingUp, Target, DollarSign, LineChart, PenTool as Tool, LucideIcon } from "lucide-react";

type KeyFeature = {
	icon: LucideIcon; // From lucide-react
	title: string;
	description: string;
	stat: string;
	statLabel: string;
};

type IndustryData = {
	name: string;
	subtitle: string;
	description: string;
	heroImage: string;
	challenges: {
		icon: LucideIcon;
		title: string;
		description: string;
	}[];
	solutions: {
		icon: LucideIcon;
		title: string;
		description: string;
	}[];
	stats: {
		icon: LucideIcon;
		value: number;
		suffix: string;
		label: string;
	}[];
	testimonial: {
		quote: string;
		author: string;
		role: string;
		company: string;
		image: string;
	};
	products: {
		title: string;
		image: string;
		features: string[];
	}[];
};

const constructionKeyFeatures: KeyFeature[] = [
	{
		icon: Tool,
		title: "Equipment Optimization",
		description: "Maximize equipment utilization and reduce idle time with smart scheduling and tracking.",
		stat: "35%",
		statLabel: "Improved Utilization",
	},
	{
		icon: Shield,
		title: "Site Safety & Security",
		description: "Monitor equipment location and usage to prevent theft and ensure workplace safety compliance.",
		stat: "75%",
		statLabel: "Theft Prevention",
	},
	{
		icon: DollarSign,
		title: "Cost Control",
		description: "Reduce operational costs through efficient resource allocation and maintenance planning.",
		stat: "25%",
		statLabel: "Cost Savings",
	},
	{
		icon: LineChart,
		title: "Project Analytics",
		description: "Track project progress and equipment performance with detailed analytics and reporting.",
		stat: "3x",
		statLabel: "Productivity Gain",
	},
];

const constructionData: IndustryData = {
	name: "Construction Equipment GPS Tracking",
	subtitle: "Heavy Equipment Monitoring Solutions",
	description: "Professional GPS tracking devices for construction equipment, including heavy machinery, vehicles, and valuable assets on construction sites.",
	heroImage: "/assets/fleet-management/3.png",
	challenges: [
		{
			icon: Clock,
			title: "Equipment Location",
			description: "Tracking heavy machinery and equipment across multiple construction sites with GPS devices.",
		},
		{
			icon: AlertCircle,
			title: "Asset Security",
			description: "Protecting valuable construction equipment with real-time GPS monitoring and alerts.",
		},
		{
			icon: Settings2,
			title: "Equipment Maintenance",
			description: "Managing maintenance schedules and preventing equipment downtime with digital tracking.",
		},
	],
	solutions: [
		{
			icon: ConstructionIcon,
			title: "Heavy-Duty GPS Trackers",
			description: "Rugged GPS tracking devices designed for construction equipment and harsh environments.",
		},
		{
			icon: Shield,
			title: "Security Monitoring",
			description: "24/7 equipment tracking with theft prevention alerts and geofencing capabilities.",
		},
		{
			icon: BarChart3,
			title: "Digital Maintenance System",
			description: "Electronic maintenance tracking with service history and scheduling features.",
		},
	],
	stats: [
		{
			icon: ConstructionIcon,
			value: 15,
			suffix: "k+",
			label: "Equipment Tracked",
		},
		{
			icon: Timer,
			value: 95,
			suffix: "%",
			label: "Equipment Uptime",
		},
		{
			icon: TrendingUp,
			value: 3,
			suffix: "x",
			label: "Efficiency Increase",
		},
		{
			icon: Target,
			value: 99.5,
			suffix: "%",
			label: "Location Accuracy",
		},
	],
	testimonial: {
		quote: "The construction fleet management system has revolutionized how we track and maintain our equipment fleet. The ROI has been remarkable.",
		author: "Michael Chen",
		role: "Operations Director",
		company: "BuildTech Construction",
		image: "/assets/fleet-management/1.png",
	},
	products: [
		{
			title: "Construction Asset Tracker",
			image: "/assets/homepage/2.png",
			features: ["Rugged GPS hardware", "Real-time tracking", "Geofencing", "Theft alerts"],
		},
		{
			title: "Equipment Monitor",
			image: "/assets/homepage/3.png",
			features: ["Usage tracking", "Maintenance scheduling", "Location history", "Status reports"],
		},
		{
			title: "Site Manager Pro",
			image: "/assets/fleet-management/4.png",
			features: ["Multi-site tracking", "Equipment logs", "Utilization reports", "Mobile access"],
		},
	],
};

const Construction = () => {
	return (
		<IndustryTemplate
			industry={constructionData}
			keyFeatures={
				<IndustryKeyFeatures
					industryName="Construction"
					features={constructionKeyFeatures}
				/>
			}
		/>
	);
};

export default Construction;
