"use client";
import React from "react";
import { IndustryTemplate } from "@/components/IndustryTemplate";
import { IndustryKeyFeatures } from "@/components/IndustryKeyFeatures";
import { Factory, Shield, BarChart3, Clock, AlertCircle, Settings2, Timer, TrendingUp, Target, LineChart, Truck, LucideIcon } from "lucide-react";

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
const manufacturingKeyFeatures: KeyFeature[] = [
	{
		icon: Factory,
		title: "Production Fleet Optimization",
		description: "Maximize material handling and production vehicle efficiency with smart tracking.",
		stat: "38%",
		statLabel: "Efficiency Increase",
	},
	{
		icon: Settings2,
		title: "Equipment Management",
		description: "Comprehensive monitoring and maintenance of manufacturing vehicle fleet.",
		stat: "45%",
		statLabel: "Downtime Reduction",
	},
	{
		icon: Shield,
		title: "Safety & Compliance",
		description: "Ensure workplace safety and regulatory compliance for industrial vehicles.",
		stat: "90%",
		statLabel: "Safety Compliance",
	},
	{
		icon: LineChart,
		title: "Production Analytics",
		description: "Data-driven insights for manufacturing fleet operations and productivity.",
		stat: "2.2x",
		statLabel: "ROI Increase",
	},
];

const manufacturingData: IndustryData = {
	name: "Manufacturing Fleet Solutions",
	subtitle: "Smart Manufacturing Operations",
	description: "Optimize your manufacturing fleet with intelligent tracking and analytics for improved production efficiency and safety.",
	heroImage: "/assets/manufacturing/hero.png",
	challenges: [
		{
			icon: Clock,
			title: "Production Timing",
			description: "Coordinating material handling vehicles with production schedules and demands.",
		},
		{
			icon: AlertCircle,
			title: "Equipment Reliability",
			description: "Maintaining consistent operation of critical production vehicles and equipment.",
		},
		{
			icon: Settings2,
			title: "Resource Utilization",
			description: "Optimizing the use of manufacturing vehicles across multiple production areas.",
		},
	],
	solutions: [
		{
			icon: Factory,
			title: "Smart Operations",
			description: "Real time optimization of manufacturing vehicle deployment and routing.",
		},
		{
			icon: Shield,
			title: "Maintenance Management",
			description: "Predictive maintenance system for production fleet reliability.",
		},
		{
			icon: BarChart3,
			title: "Performance Analytics",
			description: "Real-time monitoring and analysis of manufacturing fleet operations.",
		},
	],
	stats: [
		{
			icon: Truck,
			value: 30,
			suffix: "k+",
			label: "Vehicles Managed",
		},
		{
			icon: Timer,
			value: 99,
			suffix: "%",
			label: "Uptime Rate",
		},
		{
			icon: TrendingUp,
			value: 2.2,
			suffix: "x",
			label: "Productivity Gain",
		},
		{
			icon: Target,
			value: 99.8,
			suffix: "%",
			label: "Tracking Accuracy",
		},
	],
	testimonial: {
		quote: "The manufacturing fleet management system has significantly improved our production efficiency and reduced equipment downtime.",
		author: "Jennifer Wong",
		role: "Production Manager",
		company: "Global Manufacturing Inc.",
		image: "/assets/manufacturing/testimonial.png",
	},
	products: [
		{
			title: "Production Fleet Manager",
			image: "/assets/manufacturing/product1.png",
			features: ["Real-time tracking", "Equipment monitoring", "Maintenance scheduling", "Safety compliance"],
		},
		{
			title: "Manufacturing Analytics",
			image: "/assets/manufacturing/product2.png",
			features: ["Performance metrics", "Utilization analysis", "Cost tracking", "Efficiency reporting"],
		},
		{
			title: "Industrial Safety Suite",
			image: "/assets/manufacturing/product3.png",
			features: ["Safety monitoring", "Compliance tracking", "Incident prevention", "Operator management"],
		},
	],
};

const Manufacturing = () => {
	return (
		<IndustryTemplate
			industry={manufacturingData}
			keyFeatures={
				<IndustryKeyFeatures
					industryName="Manufacturing"
					features={manufacturingKeyFeatures}
				/>
			}
		/>
	);
};

export default Manufacturing;
