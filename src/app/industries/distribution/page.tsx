"use client";
import React from "react";
import { IndustryTemplate } from "@/components/IndustryTemplate";
import { IndustryKeyFeatures } from "@/components/IndustryKeyFeatures";
import { Warehouse, Shield, BarChart3, Clock, AlertCircle, Settings2, Timer, TrendingUp, Target, LineChart, Box, LucideIcon } from "lucide-react";
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
const distributionKeyFeatures: KeyFeature[] = [
	{
		icon: Box,
		title: "Inventory Movement Tracking",
		description: "Real-time tracking of distribution vehicles and inventory movement.",
		stat: "35%",
		statLabel: "Faster Deliveries",
	},
	{
		icon: Warehouse,
		title: "Warehouse Fleet Management",
		description: "Optimize warehouse vehicle operations and loading efficiency.",
		stat: "40%",
		statLabel: "Improved Efficiency",
	},
	{
		icon: Shield,
		title: "Security & Compliance",
		description: "Enhanced security monitoring and regulatory compliance tracking.",
		stat: "99%",
		statLabel: "Security Rating",
	},
	{
		icon: LineChart,
		title: "Distribution Analytics",
		description: "Comprehensive analytics for distribution fleet performance.",
		stat: "2.7x",
		statLabel: "Productivity Gain",
	},
];

const distributionData: IndustryData = {
	name: "Distribution Fleet Solutions",
	subtitle: "Smart Distribution Operations",
	description: "Optimize your distribution fleet with intelligent tracking and warehouse management for improved operational efficiency.",
	heroImage: "/assets/fleet-management/1.png",
	challenges: [
		{
			icon: Clock,
			title: "Delivery Timing",
			description: "Meeting tight delivery schedules across multiple distribution points.",
		},
		{
			icon: AlertCircle,
			title: "Fleet Coordination",
			description: "Coordinating warehouse and delivery vehicles efficiently.",
		},
		{
			icon: Settings2,
			title: "Resource Management",
			description: "Optimizing vehicle utilization in warehouse and distribution operations.",
		},
	],
	solutions: [
		{
			icon: Warehouse,
			title: "Smart Operations",
			description: "Real-Time optimization of warehouse and distribution vehicle deployment.",
		},
		{
			icon: Shield,
			title: "Fleet Monitoring",
			description: "Real-time tracking and management of distribution fleet.",
		},
		{
			icon: BarChart3,
			title: "Performance Analytics",
			description: "Comprehensive analysis of distribution operations and efficiency.",
		},
	],
	stats: [
		{
			icon: Box,
			value: 40,
			suffix: "k+",
			label: "Daily Deliveries",
		},
		{
			icon: Timer,
			value: 96,
			suffix: "%",
			label: "On-Time Rate",
		},
		{
			icon: TrendingUp,
			value: 2.7,
			suffix: "x",
			label: "Efficiency Gain",
		},
		{
			icon: Target,
			value: 99.8,
			suffix: "%",
			label: "Tracking Accuracy",
		},
	],
	testimonial: {
		quote: "The distribution fleet management system has transformed our warehouse operations and delivery efficiency.",
		author: "Mark Anderson",
		role: "Distribution Director",
		company: "Global Distribution Co.",
		image: "/assets/distribution/testimonial.png",
	},
	products: [
		{
			title: "Distribution Fleet Manager",
			image: "/assets/distribution/product1.png",
			features: ["Real-time tracking", "Route optimization", "Load planning", "Delivery scheduling"],
		},
		{
			title: "Warehouse Operations Suite",
			image: "/assets/distribution/product2.png",
			features: ["Vehicle coordination", "Loading efficiency", "Resource allocation", "Inventory tracking"],
		},
		{
			title: "Distribution Analytics Pro",
			image: "/assets/distribution/product3.png",
			features: ["Performance metrics", "Cost analysis", "Efficiency reporting", "Fleet optimization"],
		},
	],
};

const Distribution = () => {
	return (
		<IndustryTemplate
			industry={distributionData}
			keyFeatures={
				<IndustryKeyFeatures
					industryName="Distribution"
					features={distributionKeyFeatures}
				/>
			}
		/>
	);
};

export default Distribution;
