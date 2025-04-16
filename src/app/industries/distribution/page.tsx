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
		title: "Inventory Lot Tracking",
		description: "Real-time GPS visibility across all dealership vehicles—on-site, in transit, or on demo.",
		stat: "99%",
		statLabel: "Location Accuracy",
	},
	{
		icon: Warehouse,
		title: "Demo Vehicle Oversight",
		description: "Monitor test drives with route history, geofence alerts, and misuse detection.",
		stat: "3x",
		statLabel: "More Driving Accountability",
	},
	{
		icon: Shield,
		title: "Stolen Vehicle Recovery",
		description: "Increase recovery speed with real-time alerts and multi-network GPS coverage.",
		stat: "90%",
		statLabel: "Recovery Rate",
	},
	{
		icon: LineChart,
		title: "Loaner & Service Car Management",
		description: "Track usage duration, driver behavior, and location of loaner vehicles in real time.",
		stat: "60%",
		statLabel: "Fewer Overdue Returns",
	},
];

const distributionData: IndustryData = {
	name: " GPS Tracking for Auto Dealerships",
	subtitle: "Dealership Vehicle Tracking",
	description: "Protect your lot, reduce vehicle misuse, and streamline test-drive tracking with GPS solutions designed for dealerships. Get real-time visibility across every vehicle—on or off the lot.",
	heroImage: "/assets/fleet-management/RidesIQIQ120.jpg",
	challenges: [
		{
			icon: Clock,
			title: "Lot Transfers & Inventory Audits",
			description: "Manual tracking of transfers and off-site storage vehicles creates delays and miscounts.",
		},
		{
			icon: AlertCircle,
			title: "Unauthorized/Off-Hour Use",
			description: "Prevent misuse with ignition alerts, after-hours movement notifications, and custom driving rules.",
		},
		{
			icon: Settings2,
			title: "Stolen Vehicle Risk",
			description: "Dealerships lose thousands each year to theft—often after hours or during extended test drives.",
		},
	],
	solutions: [
		{
			icon: Warehouse,
			title: "Multi-Lot Tracking",
			description: "Monitor vehicle movement across all locations and reduce manual data entry with automatic logging.",
		},
		{
			icon: Shield,
			title: "Demo Vehicle Monitoring",
			description: "Track test drives, limit use zones, and get real-time alerts for aggressive driving or off-route activity.",
		},
		{
			icon: MapPin,
			title: "Theft Recovery & Alerts",
			description: "Get instant tamper alerts, disable ignition remotely, and increase recovery speed with precision tracking.",
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
		quote: "RidesIQ gives us complete visibility over our lot and loaner fleet. We’ve reduced test-drive misuse, recovered a stolen demo unit, and no longer waste time doing manual lot walks.",
		author: "Jessica Ramirez",
		role: "Fleet Operations Manager",
		company: "Horizon Auto Group",
		image: "/assets/fleet-management/3.png",
	},
	products: [
		{
			title: "Hardwired GPS Tracker",
			image: "/assets/devices/IQ120.png",
			features: ["Installed & hidden from drivers", "Real-time GPS via direct power", "Real-time GPS via direct power", "Ideal for long-term use"],
		},
		{
			title: "OBD Plug & Play Tracker",
			image: "/assets/fleet-management/3.png",
			features: ["Installs in seconds (OBD-II)", "Tracks GPS, speed & diagnostics", "Best for short-term rentals", "Swaps easily between vehicles"],
		},
		{
			title: "Asset Tracker (SVR)",
			image: "/assets/fleet-management/4.png",
			features: ["Battery-powered with long life", "Auto-activates if main tracker is removed", "Weatherproof & discreet", "Acts as backup theft recovery"],
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
