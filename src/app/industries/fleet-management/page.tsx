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
	name: "GPS Fleet Tracking Solutions",
	subtitle: "Professional Vehicle Monitoring Systems",
	description: "Comprehensive fleet management solutions featuring advanced GPS tracking devices, fuel monitoring systems, and real-time vehicle diagnostics.",
	heroImage: "/assets/fleet-management/3.png",
	challenges: [
		{
			icon: Shield,
			title: "Vehicle Security",
			description: "Protecting valuable assets with advanced GPS tracking devices and instant theft alerts.",
		},
		{
			icon: Globe,
			title: "Fleet Monitoring",
			description: "Managing widespread fleet operations with real-time location tracking and status updates.",
		},
		{
			icon: Receipt,
			title: "Expense Management",
			description: "Tracking fuel consumption, maintenance costs, and operational expenses across the fleet.",
		},
	],
	solutions: [
		{
			icon: MapPin,
			title: "GPS Tracking Hardware",
			description: "Professional-grade tracking devices with real-time location monitoring and geofencing capabilities.",
		},
		{
			icon: FileCheck,
			title: "Fleet Management Software",
			description: "Comprehensive dashboard for vehicle tracking, maintenance scheduling, and expense monitoring.",
		},
		{
			icon: Bell,
			title: "Mobile Monitoring Apps",
			description: "User-friendly mobile applications for on-the-go fleet management and instant notifications.",
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
			image: "/assets/fleet-management/4.png",
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
