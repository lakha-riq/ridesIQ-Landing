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
		title: "Fleet Optimization",
		description: "Maximize vehicle utilization and availability across multiple locations",
		stat: "35%",
		statLabel: "Improved Fleet Utilization",
	},
	{
		icon: Timer,
		title: "Quick Turnaround",
		description: "Streamline vehicle check-in/check-out processes for faster service",
		stat: "75%",
		statLabel: "Faster Processing",
	},
	{
		icon: Receipt,
		title: "Automated Booking",
		description: "Seamless reservation management and digital contracts",
		stat: "90%",
		statLabel: "Digital Adoption",
	},
	{
		icon: Shield,
		title: "Vehicle Security",
		description: "Real-time tracking and security monitoring of all vehicles",
		stat: "24/7",
		statLabel: "Monitoring",
	},
];

const carRentalData: IndustryData = {
	name: "Car Rental Fleet Management Solutions",
	subtitle: "Advanced Vehicle Tracking & Management",
	description: "Streamline your car rental operations with GPS tracking devices, digital booking systems, and comprehensive fleet monitoring solutions.",
	heroImage: "/assets/fleet-management/3.png",
	challenges: [
		{
			icon: Car,
			title: "Vehicle Location Tracking",
			description: "Keeping track of multiple vehicles across different rental locations and ensuring timely returns.",
		},
		{
			icon: Users,
			title: "Rental Process Management",
			description: "Managing reservations, vehicle handovers, and returns efficiently across multiple locations.",
		},
		{
			icon: Shield,
			title: "Asset Protection",
			description: "Preventing vehicle theft and unauthorized use with real-time GPS tracking devices.",
		},
	],
	solutions: [
		{
			icon: Settings2,
			title: "GPS Tracking Devices",
			description: "Professional-grade GPS tracking hardware for real-time vehicle location monitoring and geofencing.",
		},
		{
			icon: Receipt,
			title: "Digital Fleet Management",
			description: "Comprehensive booking software with mobile apps for seamless vehicle check-in and check-out.",
		},
		{
			icon: MapPin,
			title: "Location Monitoring System",
			description: "Advanced tracking hardware with instant alerts and detailed vehicle status reporting.",
		},
	],
	stats: [
		{
			icon: Car,
			value: 15,
			suffix: "k+",
			label: "Vehicles Managed",
		},
		{
			icon: Timer,
			value: 95,
			suffix: "%",
			label: "Vehicle Availability",
		},
		{
			icon: TrendingUp,
			value: 3.2,
			suffix: "x",
			label: "ROI Increase",
		},
		{
			icon: Target,
			value: 99.8,
			suffix: "%",
			label: "Customer Satisfaction",
		},
	],
	testimonial: {
		quote: "RidesIQ has revolutionized how we manage our rental fleet. The automated booking system and real-time tracking have significantly improved our efficiency.",
		author: "Michael Chen",
		role: "Operations Director",
		company: "Premier Car Rentals",
		image: "/assets/fleet-management/1.png",
	},
	products: [
		{
			title: "Rental Fleet Manager",
			image: "/assets/homepage/2.png",
			features: ["Vehicle tracking", "Automated bookings", "Maintenance scheduling", "Digital contracts"],
		},
		{
			title: "Rental Analytics Pro",
			image: "/assets/fleet-management/3.png",
			features: ["Utilization insights", "Revenue optimization", "Customer analytics", "Performance tracking"],
		},
		{
			title: "Customer Experience Suite",
			image: "/assets/fleet-management/4.png",
			features: ["Mobile app integration", "Digital key management", "Customer feedback", "Loyalty programs"],
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
