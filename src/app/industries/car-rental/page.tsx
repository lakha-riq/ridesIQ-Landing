"use client";
import React from "react";
import { IndustryTemplate } from "@/components/IndustryTemplate";
import { IndustryKeyFeatures } from "@/components/IndustryKeyFeatures";
import { Car, Shield, Timer, TrendingUp, Target, Receipt, MapPin, Settings2, Users, LucideIcon } from "lucide-react";
// type KeyFeature = {
// 	icon: LucideIcon; // From lucide-react
// 	title: string;
// 	description: string;
// 	stat: string;
// 	statLabel: string;
// };

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
const carRentalKeyFeatures = [
	{
		icon: Car,
		title: "Total Fleet Visibility",
		description: "Gain full control of your fleet with real-time GPS tracking, vehicle status updates, and live alerts — across every location.",
		stat: "35%",
		statLabel: "Improved Fleet Utilization For Top Operators",
	},
	{
		icon: Timer,
		title: "Accelerated Turnover Rates",
		description: "Minimize downtime and get vehicles back on the road faster. Our instant notifications and live data help you redeploy assets efficiently.",
		stat: "75%",
		statLabel: "Faster Processing Means More Revenue Per Car",
	},
	{
		icon: Receipt,
		title: "Unmatched Vehicle Protection",
		description: "Deter theft, reduce unauthorized use, and ensure 24/7 visibility — even if a device is tampered with. Hidden SVR backups keep tracking active no matter what.",
		stat: "24/7",
		statLabel: "Security Monitoring Gives You Peace of Mind.",
	},
	{
		icon: Shield,
		title: "Operational Intelligence That Scales",
		description: "Unlock insights that drive smarter decisions. From location history to real-time alerts — know what’s happening, when, and why.",
		stat: "3.2x",
		statLabel: "ROI Growth Reported By Car Rental Clients",
	},
];

const carRentalData: IndustryData = {
	name: " GPS Fleet Tracking for Car Rental Companies",
	subtitle: "Advanced Vehicle Tracking & Management",
	description: "Boost vehicle recovery, reduce misuse, and simplify operations with real-time GPS tracking, geofencing, and automated alerts—trusted by 50,000+ active vehicles.",
	heroImage: "/assets/fleet-management/RidesIQIQ120.jpg",
	challenges: [
		{
			icon: Car,
			title: "Fleet Oversight Gaps",
			description: "Tracking vehicles across locations is time-consuming and error-prone, especially during peak periods.",
		},
		{
			icon: Users,
			title: "Underutilized Vehicles",
			description: "Inconsistent fleet distribution results in idle vehicles and missed revenue opportunities.",
		},
		{
			icon: Shield,
			title: "Vehicle Theft & Misuse Risk",
			description: "Unattended or off-rental vehicles are vulnerable to theft, tampering, and unauthorized usage.",
		},
	],
	solutions: [
		{
			icon: Settings2,
			title: "Real-Time Vehicle Tracking",
			description: "Know where every vehicle is at all times with real-time GPS tracking and live status updates.",
		},
		{
			icon: Receipt,
			title: "Fleet Utilization Insights",
			description: "Unlock usage patterns to optimize asset distribution and maximize rental availability.",
		},
		{
			icon: MapPin,
			title: "Backup Asset Tracking",
			description: "Protect your fleet with hidden trackers and automatic SVR activation if your main GPS is disabled.",
		},
	],
	stats: [
		{
			icon: Car,
			value: 15,
			suffix: "k+",
			label: "Fleet Coverage",
		},
		{
			icon: Timer,
			value: 95,
			suffix: "%",
			label: "Uptime Rate",
		},
		{
			icon: TrendingUp,
			value: 3.2,
			suffix: "x",
			label: "ROI Growth",
		},
		{
			icon: Target,
			value: 99.8,
			suffix: "%",
			label: "Client Trust",
		},
	],
	testimonial: {
		quote: "We built RidesIQ to give car rental companies the modern tools they need to run smarter fleets. From GPS accuracy, instant alerts to toll monitoring, our mission is to help you generate the most revenue per car.",
		author: "Bruno Fernandes",
		role: "Operations Director",
		company: "RidesIQ Team",
		image: "/assets/fleet-management/Bruno_Fernandes Headshot.png",
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

const CarRental = () => {
	return (
		<IndustryTemplate
			industry={carRentalData}
			keyFeatures={
				<IndustryKeyFeatures
					industryName="Car Rental"
					features={carRentalKeyFeatures}
				/>
			}
		/>
	);
};

export default CarRental;
