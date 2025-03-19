"use client";
import React from "react";
import { IndustryTemplate } from "@/components/IndustryTemplate";
import { IndustryKeyFeatures } from "@/components/IndustryKeyFeatures";
import { Truck, Shield, BarChart3, Clock, AlertCircle, Settings2, Timer, TrendingUp, Target, DollarSign, LineChart } from "lucide-react";

const fleetKeyFeatures = [
	{
		icon: DollarSign,
		title: "Lower Fuel & Maintenance Costs",
		description: "Reduce operational expenses with AI-driven fuel optimization and predictive maintenance scheduling.",
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

const fleetManagementData = {
	name: "Fleet Management Solutions",
	subtitle: "Next-Gen Fleet Operations",
	description: "Transform your fleet operations with AI-powered tracking and analytics that deliver real-time insights and maximize efficiency across your entire fleet.",
	heroImage: "/assets/fleet-management/5.png",
	challenges: [
		{
			icon: Clock,
			title: "Time Management",
			description: "Manual route planning and dispatch processes leading to inefficient fleet utilization and delayed deliveries.",
		},
		{
			icon: AlertCircle,
			title: "Vehicle Maintenance",
			description: "Unexpected breakdowns and maintenance issues causing costly downtime and service disruptions.",
		},
		{
			icon: Settings2,
			title: "Operational Efficiency",
			description: "Lack of real-time visibility into fleet operations, making it difficult to optimize routes and reduce costs.",
		},
	],
	solutions: [
		{
			icon: Truck,
			title: "Intelligent Routing",
			description: "AI-powered route optimization that considers traffic, weather, and historical data to ensure timely deliveries.",
		},
		{
			icon: Shield,
			title: "Predictive Maintenance",
			description: "Advanced analytics that predict potential vehicle issues before they cause breakdowns.",
		},
		{
			icon: BarChart3,
			title: "Real-time Analytics",
			description: "Comprehensive dashboard with live fleet metrics and actionable insights for better decision-making.",
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
			features: ["AI-powered insights", "Predictive maintenance", "Custom reporting", "API access"],
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
