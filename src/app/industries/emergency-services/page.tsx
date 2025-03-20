"use client";
import React from "react";
import { IndustryTemplate } from "@/components/IndustryTemplate";
import { IndustryKeyFeatures } from "@/components/IndustryKeyFeatures";
import { Ambulance, Shield, BarChart3, Clock, AlertCircle, Settings2, Timer, TrendingUp, Target, LineChart, Heart, LucideIcon } from "lucide-react";

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
const emergencyServicesKeyFeatures: KeyFeature[] = [
	{
		icon: Clock,
		title: "Response Time Optimization",
		description: "AI-powered routing for fastest emergency response times.",
		stat: "45%",
		statLabel: "Faster Response",
	},
	{
		icon: Heart,
		title: "Critical Vehicle Tracking",
		description: "Real-time monitoring of emergency vehicles with priority routing.",
		stat: "99.9%",
		statLabel: "Tracking Accuracy",
	},
	{
		icon: Shield,
		title: "Emergency Compliance",
		description: "Automated compliance monitoring for emergency service regulations.",
		stat: "100%",
		statLabel: "Compliance Rate",
	},
	{
		icon: LineChart,
		title: "Response Analytics",
		description: "Comprehensive emergency response data analysis and reporting.",
		stat: "3.5x",
		statLabel: "Efficiency Gain",
	},
];

const emergencyServicesData: IndustryData = {
	name: "Emergency Services Solutions",
	subtitle: "Critical Response Management",
	description: "Enhance emergency response capabilities with advanced tracking and real-time coordination for life-saving operations.",
	heroImage: "/assets/emergency-services/hero.png",
	challenges: [
		{
			icon: Clock,
			title: "Response Times",
			description: "Meeting critical response time requirements in emergency situations.",
		},
		{
			icon: AlertCircle,
			title: "Vehicle Readiness",
			description: "Maintaining constant vehicle availability for emergency responses.",
		},
		{
			icon: Settings2,
			title: "Resource Coordination",
			description: "Coordinating multiple emergency vehicles and resources effectively.",
		},
	],
	solutions: [
		{
			icon: Ambulance,
			title: "Smart Dispatch",
			description: "AI-powered dispatch system for optimal emergency response coordination.",
		},
		{
			icon: Shield,
			title: "Vehicle Monitoring",
			description: "Real-time tracking and status monitoring of emergency vehicles.",
		},
		{
			icon: BarChart3,
			title: "Response Analytics",
			description: "Comprehensive analysis of response times and operational efficiency.",
		},
	],
	stats: [
		{
			icon: Ambulance,
			value: 15,
			suffix: "k+",
			label: "Daily Responses",
		},
		{
			icon: Timer,
			value: 98,
			suffix: "%",
			label: "Vehicle Availability",
		},
		{
			icon: TrendingUp,
			value: 3.5,
			suffix: "x",
			label: "Response Efficiency",
		},
		{
			icon: Target,
			value: 99.9,
			suffix: "%",
			label: "Location Accuracy",
		},
	],
	testimonial: {
		quote: "This system has revolutionized our emergency response capabilities. We're now able to reach incidents faster and save more lives.",
		author: "Dr. Sarah Thompson",
		role: "Emergency Services Director",
		company: "City Emergency Department",
		image: "/assets/emergency-services/testimonial.png",
	},
	products: [
		{
			title: "Emergency Response Pro",
			image: "/assets/emergency-services/product1.png",
			features: ["Real-time tracking", "Smart dispatch", "Route optimization", "Vehicle status monitoring"],
		},
		{
			title: "Response Analytics Suite",
			image: "/assets/emergency-services/product2.png",
			features: ["Response time analysis", "Resource optimization", "Performance metrics", "Compliance reporting"],
		},
		{
			title: "Emergency Fleet Manager",
			image: "/assets/emergency-services/product3.png",
			features: ["Fleet maintenance", "Equipment tracking", "Staff coordination", "Incident reporting"],
		},
	],
};

const EmergencyServices = () => {
	return (
		<IndustryTemplate
			industry={emergencyServicesData}
			keyFeatures={
				<IndustryKeyFeatures
					industryName="Emergency Services"
					features={emergencyServicesKeyFeatures}
				/>
			}
		/>
	);
};

export default EmergencyServices;
