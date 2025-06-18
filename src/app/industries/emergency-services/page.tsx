'use client';
import React from 'react';
import { IndustryTemplate } from '@/components/IndustryTemplate';
import { IndustryKeyFeatures } from '@/components/IndustryKeyFeatures';
import {
  Ambulance,
  Shield,
  Clock,
  AlertCircle,
  Settings2,
  Timer,
  TrendingUp,
  Target,
  LineChart,
  Heart,
  LucideIcon,
  MapPin,
} from 'lucide-react';

// type KeyFeature = {
// 	icon: LucideIcon; // From lucide-react
// 	title: string;
// 	description: string;
// 	stat: string;
// 	statLabel: string;
// };

// type IndustryData = {
// 	name: string;
// 	subtitle: string;
// 	description: string;
// 	heroImage: string;
// 	challenges: {
// 		icon: LucideIcon;
// 		title: string;
// 		description: string;
// 	}[];
// 	solutions: {
// 		icon: LucideIcon;
// 		title: string;
// 		description: string;
// 	}[];
// 	stats: {
// 		icon: LucideIcon;
// 		value: number;
// 		suffix: string;
// 		label: string;
// 	}[];
// 	testimonial: {
// 		quote: string;
// 		author: string;
// 		role: string;
// 		company: string;
// 		image: string;
// 	};
// 	products: {
// 		title: string;
// 		image: string;
// 		features: string[];
// 	}[];
// };
// const emergencyServicesKeyFeatures: KeyFeature[] = [
// 	{
// 		icon: Clock,
// 		title: "Response Time Optimization",
// 		description: "Real-Time routing for fastest emergency response times.",
// 		stat: "45%",
// 		statLabel: "Faster Response",
// 	},
// 	{
// 		icon: Heart,
// 		title: "Critical Vehicle Tracking",
// 		description: "Real-time monitoring of emergency vehicles with priority routing.",
// 		stat: "99.9%",
// 		statLabel: "Tracking Accuracy",
// 	},
// 	{
// 		icon: Shield,
// 		title: "Emergency Compliance",
// 		description: "Automated compliance monitoring for emergency service regulations.",
// 		stat: "100%",
// 		statLabel: "Compliance Rate",
// 	},
// 	{
// 		icon: LineChart,
// 		title: "Response Analytics",
// 		description: "Comprehensive emergency response data analysis and reporting.",
// 		stat: "3.5x",
// 		statLabel: "Efficiency Gain",
// 	},
// ];

// const emergencyServicesData: IndustryData = {
// 	name: "Emergency Vehicle GPS Tracking",
// 	subtitle: "Emergency Response Vehicle Monitoring",
// 	description: "High-precision GPS tracking devices for emergency response vehicles, providing real-time location monitoring and rapid dispatch capabilities.",
// 	heroImage: "/assets/fleet-management/3.png",
// 	challenges: [
// 		{
// 			icon: Clock,
// 			title: "Vehicle Location",
// 			description: "Tracking emergency response vehicles with precise GPS monitoring systems.",
// 		},
// 		{
// 			icon: AlertCircle,
// 			title: "Response Monitoring",
// 			description: "Real-time tracking of vehicle locations and response times with GPS devices.",
// 		},
// 		{
// 			icon: Settings2,
// 			title: "Fleet Coordination",
// 			description: "Managing multiple emergency vehicles with GPS-based dispatch systems.",
// 		},
// 	],
// 	solutions: [
// 		{
// 			icon: Ambulance,
// 			title: "Emergency GPS Trackers",
// 			description: "Professional GPS tracking devices designed for emergency response vehicles.",
// 		},
// 		{
// 			icon: Shield,
// 			title: "Vehicle Monitor System",
// 			description: "24/7 fleet tracking with real-time location updates and status monitoring.",
// 		},
// 		{
// 			icon: MapPin,
// 			title: "Dispatch Control System",
// 			description: "GPS-based tracking and dispatch management for emergency fleets.",
// 		},
// 	],
// 	stats: [
// 		{
// 			icon: Ambulance,
// 			value: 15,
// 			suffix: "k+",
// 			label: "Daily Responses",
// 		},
// 		{
// 			icon: Timer,
// 			value: 98,
// 			suffix: "%",
// 			label: "Vehicle Availability",
// 		},
// 		{
// 			icon: TrendingUp,
// 			value: 3.5,
// 			suffix: "x",
// 			label: "Response Efficiency",
// 		},
// 		{
// 			icon: Target,
// 			value: 99.9,
// 			suffix: "%",
// 			label: "Location Accuracy",
// 		},
// 	],
// 	testimonial: {
// 		quote: "This system has revolutionized our emergency response capabilities. We're now able to reach incidents faster and save more lives.",
// 		author: "Dr. Sarah Thompson",
// 		role: "Emergency Services Director",
// 		company: "City Emergency Department",
// 		image: "/assets/fleet-management/1.png",
// 	},
// 	products: [
// 		{
// 			title: "Emergency Vehicle Tracker",
// 			image: "/assets/homepage/2.png",
// 			features: ["Real-time GPS tracking", "Dispatch integration", "Route optimization", "Status monitoring"],
// 		},
// 		{
// 			title: "Response Fleet Monitor",
// 			image: "/assets/homepage/3.png",
// 			features: ["Vehicle tracking", "Location history", "Response logging", "Maintenance alerts"],
// 		},
// 		{
// 			title: "Command Center Console",
// 			image: "/assets/fleet-management/3.png",
// 			features: ["Multi-vehicle tracking", "Dispatch management", "Performance tracking", "Mobile access"],
// 		},
// 	],
// };

const EmergencyServices = () => {
  return (
    // <IndustryTemplate
    // 	industry={emergencyServicesData}
    // 	keyFeatures={
    // 		<IndustryKeyFeatures
    // 			industryName="Emergency Services"
    // 			features={emergencyServicesKeyFeatures}
    // 		/>
    // 	}
    // />
    <h1>Emergency Page</h1>
  );
};

export default EmergencyServices;
