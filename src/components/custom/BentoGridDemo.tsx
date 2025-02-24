"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Rocket, BarChart3, Car, Shield, Check, LucideIcon } from "lucide-react";

// Define interfaces for component props and data structures
interface FeatureListProps {
	items: string[];
}

interface CardProps {
	title: string;
	description: string;
	Icon: LucideIcon;
	color: string;
	features: string[];
}

interface CardData extends CardProps {
	span?: string;
}

const FeatureList = ({ items }: FeatureListProps) => {
	return (
		<ul className="space-y-2">
			{items.map((item, index) => (
				<motion.li
					key={index}
					className="flex items-center space-x-2 text-sm text-blue-100"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: index * 0.1 }}
				>
					<Check className="w-4 h-4 text-blue-300 flex-shrink-0" />
					<span>{item}</span>
				</motion.li>
			))}
		</ul>
	);
};

const Card = ({ title, description, Icon, color, features }: CardProps) => {
	const [isHovered, setIsHovered] = useState<boolean>(false);

	return (
		<motion.div
			className={`relative overflow-hidden rounded-3xl ${color}`}
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
		>
			<div className="p-8 flex flex-col justify-between md:h-[300px]">
				<div className="flex justify-between items-start">
					<span className="text-sm font-medium text-blue-100">{title.split(" ")[0].toUpperCase()}</span>
					<Icon className="w-6 h-6 text-white" />
				</div>
				<div>
					<h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
					<p className="text-blue-100">{description}</p>
				</div>
			</div>
			<motion.div
				className="p-6 bg-gradient-to-t from-[#1a237e] via-[#1565c0] to-transparent absolute inset-0 flex flex-col justify-end"
				initial={{ opacity: 0, y: "100%" }}
				animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : "100%" }}
				transition={{ duration: 0.3 }}
			>
				<h3 className="font-semibold mb-2 text-white">Features:</h3>
				<FeatureList items={features} />
			</motion.div>
		</motion.div>
	);
};

export default function BentoGrid() {
	const [isMobile, setIsMobile] = useState<boolean>(false);

	useEffect(() => {
		const checkMobile = (): void => setIsMobile(window.innerWidth < 768);
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const cardData: CardData[] = [
		{
			title: "Real-Time Fleet Visibility",
			description: "Monitor your entire fleet with live tracking and instant alerts. Transform complex data into actionable insights.",
			Icon: Car,
			color: "bg-gradient-to-b from-[#1E1E1E] via-[#1E325C] to-[#2C4A87]",
			features: ["Live GPS tracking", "Real-time alerts", "Performance metrics", "Route optimization"],
			span: "md:col-span-2",
		},
		{
			title: "Automated Toll Reporting",
			description: "Eliminate manual toll reconciliation. Automatically track, report, and manage expenses.",
			Icon: Rocket,
			color: "bg-gradient-to-b from-[#577CA6] via-[#406185] to-[#406185]",
			features: ["Automated tracking", "Expense management", "Digital receipts"],
		},
		{
			title: "Driver Behavior & Safety",
			description: "Enhance fleet safety with real-time driver monitoring and performance analytics.",
			Icon: Shield,
			color: "bg-gradient-to-b from-[#1E1E1E] via-[#22282F] to-[#293243]",
			features: ["Speed tracking", "Safety scores", "Risk assessment"],
		},
		{
			title: "Business Intelligence",
			description: "Turn fleet data into strategic advantages. Get customized reports and analytics that drive business growth.",
			Icon: BarChart3,
			color: "bg-gradient-to-b from-[#2D4A86] via-[#273E74] to-[#1E345E]",
			features: ["Custom reports", "Data visualization", "Trend analysis", "ROI tracking"],
			span: "md:col-span-2",
		},
	];

	return (
		<div className="container mx-auto p-4">
			<div className="space-y-8">
				<motion.div
					className="space-y-4"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="max-w-7xl mx-auto uppercase opacity-50 text-sm tracking-widest">The fleet advantage</h2>
					<h1 className="text-4xl md:text-6xl font-bold max-w-7xl mx-auto uppercase">Intelligent Fleet Management Designed With Your Business in Mind</h1>
					<p className="text-muted-foreground max-w-7xl mx-auto">
						Transform your fleet operations with real-time insights. Businesses lose 20% of operational efficiency without proper fleet management. See how RidesIQ helps you optimize your
						fleet performance and reduce costs.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
					{cardData.map((card, index) => (
						<motion.div
							key={index}
							className={card.span}
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							{isMobile ? (
								<div className={`rounded-3xl ${card.color}`}>
									<div className="p-8">
										<div className="flex justify-between items-start mb-4">
											<span className="text-sm font-medium text-blue-100">{card.title.split(" ")[0].toUpperCase()}</span>
											<card.Icon className="w-6 h-6 text-white" />
										</div>
										<h2 className="text-2xl font-bold text-white mb-2">{card.title}</h2>
										<p className="text-blue-100 mb-4">{card.description}</p>
										<h3 className="font-semibold mb-2 text-white">Features:</h3>
										<ul className="list-none space-y-2">
											{card.features.map((feature, idx) => (
												<li
													key={idx}
													className="flex items-center space-x-2 text-sm text-blue-100"
												>
													<Check className="w-4 h-4 text-blue-300 flex-shrink-0" />
													<span>{feature}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
							) : (
								<Card
									title={card.title}
									description={card.description}
									Icon={card.Icon}
									color={card.color}
									features={card.features}
								/>
							)}
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
