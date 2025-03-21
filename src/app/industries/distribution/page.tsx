"use client";
import React from "react";
import { IndustryTemplate } from "@/components/IndustryTemplate";
import { IndustryKeyFeatures } from "@/components/IndustryKeyFeatures";
import { Warehouse, Shield, Clock, AlertCircle, Settings2, Timer, TrendingUp, Target, LineChart, Box, LucideIcon, MapPin } from "lucide-react";
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
	name: "Distribution GPS Tracking Solutions",
	subtitle: "Warehouse & Delivery Vehicle Tracking",
	description: "Professional GPS tracking devices for distribution fleets, warehouse vehicles, and delivery operations with real-time location monitoring.",
	heroImage: "/assets/fleet-management/3.png",
	challenges: [
		{
			icon: Clock,
			title: "Vehicle Location",
			description: "Tracking delivery vehicles and warehouse equipment with GPS devices across multiple locations.",
		},
		{
			icon: AlertCircle,
			title: "Fleet Monitoring",
			description: "Managing delivery schedules and vehicle locations with real-time GPS tracking.",
		},
		{
			icon: Settings2,
			title: "Equipment Tracking",
			description: "Monitoring warehouse vehicles and equipment with GPS tracking devices.",
		},
	],
	solutions: [
		{
			icon: Warehouse,
			title: "Distribution GPS Trackers",
			description: "Professional GPS tracking devices for delivery vehicles and warehouse equipment.",
		},
		{
			icon: Shield,
			title: "Vehicle Monitoring System",
			description: "24/7 fleet tracking with real-time location updates and status monitoring.",
		},
		{
			icon: MapPin,
			title: "Warehouse Equipment Trackers",
			description: "Specialized GPS devices for tracking forklifts and warehouse vehicles.",
		},
	],
	stats: [
		{
			icon: Box,
			value: 40,
			suffix: "k+",
			label: "Vehicles Tracked",
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
			label: "GPS Accuracy",
		},
	],
	testimonial: {
		quote: "The GPS tracking devices have revolutionized our distribution operations. We can now monitor every vehicle in real-time and optimize our delivery routes.",
		author: "Mark Anderson",
		role: "Distribution Director",
		company: "Global Distribution Co.",
		image: "/assets/fleet-management/3.png",
	},
	products: [
		{
			title: "Distribution Fleet Tracker",
			image: "/assets/homepage/2.png",
			features: ["Real-time GPS tracking", "Route monitoring", "Delivery scheduling", "Vehicle status"],
		},
		{
			title: "Warehouse Vehicle Monitor",
			image: "/assets/fleet-management/3.png",
			features: ["Equipment tracking", "Location history", "Usage monitoring", "Maintenance alerts"],
		},
		{
			title: "Fleet Command Center",
			image: "/assets/fleet-management/4.png",
			features: ["Multi-vehicle tracking", "Route management", "Performance tracking", "Mobile access"],
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
