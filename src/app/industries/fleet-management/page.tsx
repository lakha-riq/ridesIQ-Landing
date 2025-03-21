"use client";
import React from "react";
import { IndustryTemplate } from "@/components/IndustryTemplate";
import { IndustryKeyFeatures } from "@/components/IndustryKeyFeatures";
import { Truck, Shield, Timer, TrendingUp, Target, DollarSign, LineChart, LucideIcon, Bell, Globe, Receipt, MapPin, FileCheck } from "lucide-react";

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
const fleetKeyFeatures: KeyFeature[] = [
	{
		icon: DollarSign,
		title: "Lower Fuel & Maintenance Costs",
		description: "Reduce operational expenses with Real time fuel optimization and predictive maintenance scheduling.",
		stat: "30%",
		statLabel: "Average Cost Reduction",
	},
	{
		icon: Truck,
		title: "Maximize Fleet Utilization",
		description: "Optimize vehicle deployment and routing with real-time tracking and intelligent dispatching.",
		stat: "40%",
		statLabel: "Improved Efficiency",
	},
	{
		icon: Shield,
		title: "Reduce Risk & Liability",
		description: "Enhance safety and compliance with automated monitoring and driver behavior analysis.",
		stat: "60%",
		statLabel: "Risk Reduction",
	},
	{
		icon: LineChart,
		title: "Data-Driven Decision Making",
		description: "Make informed fleet management decisions with comprehensive analytics and custom reporting.",
		stat: "2.5x",
		statLabel: "ROI Increase",
	},
];

const fleetManagementData: IndustryData = {
	name: "Fleet Management Solutions",
	subtitle: "Next-Gen Fleet Operations",
	description: "Transform your fleet operations with Real-Time tracking and analytics that deliver real-time insights and maximize efficiency across your entire fleet.",
	heroImage: "/assets/fleet-management/5.png",
	challenges: [
		{
			icon: Shield,
			title: "Vehicle Theft",
			description: "Rising vehicle theft rates and unauthorized usage leading to significant financial losses and security concerns.",
		},
		{
			icon: Globe,
			title: "International Border Transfer",
			description: "Complex cross-border operations requiring precise tracking, documentation, and compliance management.",
		},
		{
			icon: Receipt,
			title: "Toll Management",
			description: "Inefficient toll tracking and reporting systems resulting in unexpected expenses and administrative burden.",
		},
	],
	solutions: [
		{
			icon: MapPin,
			title: "Real-time Tracking",
			description: "24/7 vehicle monitoring with instant alerts for unauthorized movement and geofence violations.",
		},
		{
			icon: FileCheck,
			title: "Border Compliance",
			description: "Automated documentation and real-time location tracking for seamless cross-border fleet operations.",
		},
		{
			icon: Bell,
			title: "Automated Toll Reports",
			description: "Comprehensive toll tracking with instant notifications and detailed expense reporting systems.",
		},
	],
	stats: [
		{
			icon: Truck,
			value: 20,
			suffix: "k+",
			label: "Vehicles Tracked",
		},
		{
			icon: Timer,
			value: 98,
			suffix: "%",
			label: "Fleet Uptime",
		},
		{
			icon: TrendingUp,
			value: 2.5,
			suffix: "x",
			label: "ROI Increase",
		},
		{
			icon: Target,
			value: 99.9,
			suffix: "%",
			label: "Accuracy Rate",
		},
	],
	testimonial: {
		quote: "RidesIQ has transformed how we manage our fleet. The predictive maintenance alone has saved us thousands in potential repairs and downtime.",
		author: "Sarah Johnson",
		role: "Fleet Manager",
		company: "Global Logistics Inc.",
		image: "/assets/fleet-management/1.png",
	},
	products: [
		{
			title: "Pro Fleet Tracker",
			image: "/assets/homepage/2.png",
			features: ["Real-time GPS tracking", "Driver behavior monitoring", "Fuel consumption analytics", "Maintenance scheduling"],
		},
		{
			title: "Fleet Manager Plus",
			image: "/assets/homepage/3.png",
			features: ["Route optimization", "Live traffic updates", "Weather integration", "Mobile app access"],
		},
		{
			title: "Enterprise Fleet AI",
			image: "/assets/homepage/4.png",
			features: ["Real-Time insights", "Predictive maintenance", "Custom reporting", "API access"],
		},
	],
};

const FleetManagement = () => {
	return (
		<IndustryTemplate
			industry={fleetManagementData}
			keyFeatures={
				<IndustryKeyFeatures
					industryName="Fleet Management"
					features={fleetKeyFeatures}
				/>
			}
		/>
	);
};

export default FleetManagement;
