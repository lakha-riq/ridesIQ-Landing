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
	name: "Construction Fleet Solutions",
	subtitle: "Smart Construction Management",
	description: "Optimize your construction fleet with Real-Time tracking and analytics for improved efficiency and project outcomes.",
	heroImage: "/assets/construction/hero.png",
	challenges: [
		{
			icon: Clock,
			title: "Equipment Tracking",
			description: "Difficulty in tracking multiple pieces of equipment across various construction sites.",
		},
		{
			icon: AlertCircle,
			title: "Asset Utilization",
			description: "Inefficient use of expensive construction equipment leading to project delays.",
		},
		{
			icon: Settings2,
			title: "Maintenance Planning",
			description: "Reactive maintenance approaches causing unexpected equipment downtime.",
		},
	],
	solutions: [
		{
			icon: ConstructionIcon,
			title: "Real-time Tracking",
			description: "GPS-based tracking system for complete visibility of all construction assets.",
		},
		{
			icon: Shield,
			title: "Equipment Security",
			description: "Advanced security features including geofencing and unauthorized use alerts.",
		},
		{
			icon: BarChart3,
			title: "Performance Monitoring",
			description: "Detailed equipment performance analytics for optimal resource allocation.",
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
		image: "/assets/construction/testimonial.png",
	},
	products: [
		{
			title: "Site Fleet Manager",
			image: "/assets/construction/product1.png",
			features: ["Equipment tracking", "Utilization monitoring", "Maintenance scheduling", "Security alerts"],
		},
		{
			title: "Construction Analytics Pro",
			image: "/assets/construction/product2.png",
			features: ["Performance analytics", "Cost tracking", "Project planning", "Resource optimization"],
		},
		{
			title: "Equipment Safety Suite",
			image: "/assets/construction/product3.png",
			features: ["Safety compliance", "Operator tracking", "Accident prevention", "Risk management"],
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
