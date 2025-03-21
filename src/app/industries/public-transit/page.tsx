"use client";
import React from "react";
import { IndustryTemplate } from "@/components/IndustryTemplate";
import { IndustryKeyFeatures } from "@/components/IndustryKeyFeatures";
import { Bus, Shield, BarChart3, Clock, AlertCircle, Settings2, Timer, TrendingUp, Target, LineChart, Users, LucideIcon } from "lucide-react";

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

const publicTransitKeyFeatures: KeyFeature[] = [
	{
		icon: Clock,
		title: "Schedule Optimization",
		description: "Real-Time scheduling system for improved route timing and passenger service.",
		stat: "42%",
		statLabel: "Improved Punctuality",
	},
	{
		icon: Users,
		title: "Passenger Analytics",
		description: "Real-time passenger counting and flow analysis for optimal service delivery.",
		stat: "85%",
		statLabel: "Capacity Utilization",
	},
	{
		icon: Shield,
		title: "Safety & Compliance",
		description: "Automated safety monitoring and regulatory compliance tracking.",
		stat: "99%",
		statLabel: "Safety Rating",
	},
	{
		icon: LineChart,
		title: "Performance Metrics",
		description: "Comprehensive transit analytics for service optimization and planning.",
		stat: "2.8x",
		statLabel: "Efficiency Gain",
	},
];

const publicTransitData: IndustryData = {
	name: "Public Transit Solutions",
	subtitle: "Smart Transit Operations",
	description: "Transform public transportation with Real time scheduling, real-time tracking, and passenger analytics for improved service reliability.",
	heroImage: "/assets/public-transit/hero.png",
	challenges: [
		{
			icon: Clock,
			title: "Schedule Adherence",
			description: "Maintaining consistent service schedules across varying traffic and passenger loads.",
		},
		{
			icon: AlertCircle,
			title: "Vehicle Maintenance",
			description: "Balancing maintenance needs with service demands and passenger expectations.",
		},
		{
			icon: Settings2,
			title: "Resource Allocation",
			description: "Optimizing vehicle and driver assignments across multiple routes and schedules.",
		},
	],
	solutions: [
		{
			icon: Bus,
			title: "Smart Scheduling",
			description: "Real-Time schedule optimization considering traffic patterns and passenger demand.",
		},
		{
			icon: Shield,
			title: "Predictive Maintenance",
			description: "Advanced analytics for proactive vehicle maintenance and reduced downtime.",
		},
		{
			icon: BarChart3,
			title: "Service Analytics",
			description: "Real-time monitoring and analysis of transit operations and passenger flows.",
		},
	],
	stats: [
		{
			icon: Bus,
			value: 25,
			suffix: "k+",
			label: "Daily Trips",
		},
		{
			icon: Timer,
			value: 97,
			suffix: "%",
			label: "On-Time Performance",
		},
		{
			icon: TrendingUp,
			value: 2.8,
			suffix: "x",
			label: "Service Efficiency",
		},
		{
			icon: Target,
			value: 99.9,
			suffix: "%",
			label: "GPS Accuracy",
		},
	],
	testimonial: {
		quote: "The transit management system has revolutionized our operations. We've seen dramatic improvements in on-time performance and passenger satisfaction.",
		author: "Robert Martinez",
		role: "Transit Director",
		company: "Metro Transit Authority",
		image: "/assets/public-transit/testimonial.png",
	},
	products: [
		{
			title: "Transit Control Center",
			image: "/assets/public-transit/product1.png",
			features: ["Real-time tracking", "Schedule management", "Driver assignments", "Route optimization"],
		},
		{
			title: "Passenger Analytics",
			image: "/assets/public-transit/product2.png",
			features: ["Passenger counting", "Demand analysis", "Service planning", "Mobile updates"],
		},
		{
			title: "Transit Operations Suite",
			image: "/assets/public-transit/product3.png",
			features: ["Fleet maintenance", "Safety monitoring", "Performance analytics", "Compliance tracking"],
		},
	],
};

const PublicTransit = () => {
	return (
		<IndustryTemplate
			industry={publicTransitData}
			keyFeatures={
				<IndustryKeyFeatures
					industryName="Public Transit"
					features={publicTransitKeyFeatures}
				/>
			}
		/>
	);
};

export default PublicTransit;
