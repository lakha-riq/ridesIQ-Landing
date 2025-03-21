"use client";
import React from "react";
import { IndustryTemplate } from "@/components/IndustryTemplate";
import { IndustryKeyFeatures } from "@/components/IndustryKeyFeatures";
import { Bike, Shield, Clock, AlertCircle, Settings2, Timer, TrendingUp, Target, LucideIcon, LineChart, Thermometer, MapPin } from "lucide-react";
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

const foodDeliveryKeyFeatures: KeyFeature[] = [
	{
		icon: Thermometer,
		title: "Temperature Monitoring",
		description: "Real-time temperature tracking for food safety compliance and quality assurance.",
		stat: "99.9%",
		statLabel: "Temperature Compliance",
	},
	{
		icon: Clock,
		title: "Delivery Time Optimization",
		description: "Real-Time route optimization for faster, more efficient deliveries.",
		stat: "45%",
		statLabel: "Faster Deliveries",
	},
	{
		icon: Shield,
		title: "Food Safety Compliance",
		description: "Automated monitoring and reporting for food safety regulations.",
		stat: "100%",
		statLabel: "Safety Compliance",
	},
	{
		icon: LineChart,
		title: "Performance Analytics",
		description: "Comprehensive delivery analytics for operational optimization.",
		stat: "3x",
		statLabel: "Efficiency Gain",
	},
];

const foodDeliveryData: IndustryData = {
	name: "Food Delivery GPS Tracking",
	subtitle: "Delivery Vehicle Monitoring & Temperature Control",
	description: "Professional GPS tracking devices for food delivery fleets, with integrated temperature monitoring and real-time location tracking.",
	heroImage: "/assets/fleet-management/1.png",
	challenges: [
		{
			icon: Clock,
			title: "Vehicle Tracking",
			description: "Monitoring delivery vehicle locations with GPS devices for timely deliveries.",
		},
		{
			icon: AlertCircle,
			title: "Temperature Monitoring",
			description: "Tracking food temperature with specialized monitoring devices during transit.",
		},
		{
			icon: Settings2,
			title: "Route Management",
			description: "Optimizing delivery routes with GPS tracking and navigation systems.",
		},
	],
	solutions: [
		{
			icon: Bike,
			title: "Delivery GPS Trackers",
			description: "Compact GPS tracking devices designed for delivery vehicles and bikes.",
		},
		{
			icon: Thermometer,
			title: "Temperature Sensors",
			description: "Professional temperature monitoring devices for food transport vehicles.",
		},
		{
			icon: MapPin,
			title: "Route Planning System",
			description: "GPS-based route optimization and tracking for delivery fleets.",
		},
	],
	stats: [
		{
			icon: Bike,
			value: 50,
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
			value: 3,
			suffix: "x",
			label: "Efficiency Gain",
		},
		{
			icon: Target,
			value: 99.8,
			suffix: "%",
			label: "Customer Satisfaction",
		},
	],
	testimonial: {
		quote: "The food delivery tracking system has transformed our operations. We've seen a dramatic improvement in delivery times and customer satisfaction.",
		author: "David Kim",
		role: "Operations Director",
		company: "FastFood Express",
		image: "/assets/food-delivery/testimonial.png",
	},
	products: [
		{
			title: "Delivery Vehicle Tracker",
			image: "/assets/homepage/2.png",
			features: ["GPS tracking", "Temperature monitoring", "Route planning", "Delivery status"],
		},
		{
			title: "Temperature Monitor Pro",
			image: "/assets/homepage/3.png",
			features: ["Temperature logging", "Location tracking", "Alert system", "Compliance reporting"],
		},
		{
			title: "Fleet Control Center",
			image: "/assets/fleet-management/3.png",
			features: ["Multi-vehicle tracking", "Route management", "Performance monitoring", "Mobile access"],
		},
	],
};

const FoodDelivery = () => {
	return (
		<IndustryTemplate
			industry={foodDeliveryData}
			keyFeatures={
				<IndustryKeyFeatures
					industryName="Food Delivery"
					features={foodDeliveryKeyFeatures}
				/>
			}
		/>
	);
};

export default FoodDelivery;
