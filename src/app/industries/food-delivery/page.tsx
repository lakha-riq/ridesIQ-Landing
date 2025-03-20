"use client";
import React from "react";
import { IndustryTemplate } from "@/components/IndustryTemplate";
import { IndustryKeyFeatures } from "@/components/IndustryKeyFeatures";
import { 
  Bike, 
  Shield, 
  BarChart3, 
  Clock, 
  AlertCircle, 
  Settings2, 
  Timer, 
  TrendingUp, 
    Target, 
  LucideIcon,
  LineChart,
  Thermometer,

} from "lucide-react";
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
    description: "AI-powered route optimization for faster, more efficient deliveries.",
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
  name: "Food Delivery Solutions",
  subtitle: "Smart Food Delivery Management",
  description: "Revolutionize your food delivery operations with real-time tracking, temperature monitoring, and AI-powered route optimization.",
  heroImage: "/assets/food-delivery/hero.png",
  challenges: [
    {
      icon: Clock,
      title: "Delivery Times",
      description: "Meeting customer expectations for fast delivery while maintaining food quality.",
    },
    {
      icon: AlertCircle,
      title: "Temperature Control",
      description: "Maintaining proper food temperature throughout the delivery process.",
    },
    {
      icon: Settings2,
      title: "Route Efficiency",
      description: "Optimizing multiple deliveries while keeping food fresh and hot.",
    },
  ],
  solutions: [
    {
      icon: Bike,
      title: "Smart Routing",
      description: "AI-powered route optimization considering traffic, weather, and delivery windows.",
    },
    {
      icon: Thermometer,
      title: "Temperature Tracking",
      description: "Real-time monitoring of food temperature throughout delivery.",
    },
    {
      icon: BarChart3,
      title: "Delivery Analytics",
      description: "Comprehensive delivery metrics and performance tracking.",
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
      title: "Delivery Track Pro",
      image: "/assets/food-delivery/product1.png",
      features: ["Real-time tracking", "Temperature monitoring", "Route optimization", "Driver app"],
    },
    {
      title: "Food Safety Suite",
      image: "/assets/food-delivery/product2.png",
      features: ["Temperature compliance", "Safety reporting", "Quality assurance", "Regulatory compliance"],
    },
    {
      title: "Delivery Analytics",
      image: "/assets/food-delivery/product3.png",
      features: ["Performance metrics", "Customer feedback", "Cost analysis", "Efficiency reports"],
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