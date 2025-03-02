"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
	question: string;
	answer: string;
	index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.3,
				delay: index * 0.15,
				ease: "easeOut",
			}}
			className={cn(
				"group rounded-lg border-[0.5px] border-gray-200/50 dark:border-gray-800/50",
				"transition-all duration-200 ease-in-out",
				isOpen ? "bg-linear-to-br from-white via-gray-50/50 to-white dark:from-white/5 dark:via-white/2 dark:to-white/5" : "hover:bg-gray-50/50 dark:hover:bg-white/[0.02]",
			)}
		>
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="w-full px-6 py-4 flex items-center justify-between gap-4"
			>
				<h3 className={cn("text-base font-medium transition-colors duration-200 text-left", "text-gray-700 dark:text-gray-300", isOpen && "text-gray-900 dark:text-white")}>{question}</h3>
				<motion.div
					animate={{
						rotate: isOpen ? 180 : 0,
						scale: isOpen ? 1.1 : 1,
					}}
					transition={{
						duration: 0.3,
						ease: "easeInOut",
					}}
					className={cn("p-0.5 rounded-full shrink-0", "transition-colors duration-200", isOpen ? "text-primary" : "text-gray-400 dark:text-gray-500")}
				>
					<ChevronDown className="h-4 w-4" />
				</motion.div>
			</button>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{
							height: "auto",
							opacity: 1,
							transition: {
								height: {
									duration: 0.4,
									ease: [0.04, 0.62, 0.23, 0.98],
								},
								opacity: {
									duration: 0.25,
									delay: 0.1,
								},
							},
						}}
						exit={{
							height: 0,
							opacity: 0,
							transition: {
								height: {
									duration: 0.3,
									ease: "easeInOut",
								},
								opacity: {
									duration: 0.25,
								},
							},
						}}
					>
						<div className="px-6 pb-4 pt-2">
							<motion.p
								initial={{ y: -8, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: -8, opacity: 0 }}
								transition={{
									duration: 0.3,
									ease: "easeOut",
								}}
								className="text-md text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line"
							>
								{answer}
							</motion.p>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
}

function Faq02() {
const faqs: Omit<FAQItemProps, "index">[] = [
	{
		question: "What is RidesIQ and how does it work?",
		answer: `RidesIQ is a vehicle telematics platform designed to help businesses and individuals track and manage their vehicles more efficiently. 
		
		We use GPS and onboard diagnostic data to provide real-time location tracking, driver behavior insights, and vehicle health reports.
		
		Our system integrates hardware installed in your vehicles (and OEM) & with our secure web-based portal, so you can monitor and optimize your fleet from anywhere.`,
	},
	{
		question: "What types of vehicles does RidesIQ support?",
		answer: `RidesIQ supports a wide range of vehicles, including cars, trucks, vans, buses, and even specialized commercial vehicles.

		 Our hardware adapters are compatible with most OBD-II equipped vehicles and can also work with certain heavy-duty trucks through specialized connectors.
		 
		 If you have specific compatibility questions, feel free to contact our support team.`,
	},
	{
		question: "Is it difficult to install RidesIQ's hardware?",
		answer: `Not at all. In many cases, it's a simple plug-and-play installation into a vehicle's OBD-II port.
		
		For larger or specialized vehicles, professional installation may be recommended.
		
		Once the device is installed, it automatically starts sending data to our cloud platform, so you can access real-time information right away.`,
	},
	{
		question: "How secure is my data with RidesIQ?",
		answer: `Data security is our top priority. 
		
		We use industry-standard encryption for data transmission and secure our servers with robust firewalls and security protocols.
		
		We also regularly conduct security audits and comply with applicable data privacy regulations to ensure your information remains protected.`,
	},
	{
		question: "Can I track my vehicles in real-time, and is historical data available?",
		answer: `Yes. Our telematics platform provides real-time location tracking, so you always know where your vehicles are.
		
		We also store trip histories, driver behavior metrics (such as speeding and hard braking), and vehicle health data.
		
		You can easily access historical records for reporting, compliance, and analysis.`,
	},
	{
		question: "What benefits can fleet managers expect from using RidesIQ?",
		answer: `Fleet managers using RidesIQ can expect: Improved Operational Efficiency: Real-time tracking and route optimization reduce fuel costs and travel time.
		
		Enhanced Safety: Driver behavior insights help promote safer driving and lower accident risks. Preventive Maintenance: Diagnostic alerts help you schedule maintenance before problems escalate.
		
		Cost Savings: Efficient routing and proactive maintenance often lead to significant cost reductions.`,
	},
	{
		question: "Does RidesIQ offer custom reports or analytics?",
		answer: `Absolutely. We offer a suite of standard reports, and many can be customized to suit your specific needs.
		
		 Whether you want detailed driver performance summaries, fuel usage analysis, or maintenance reminders, our analytics tools can be tailored to provide actionable insights for your business.`,
	},
	{
		question: "How do I manage my vehicles and drivers with RidesIQ?",
		answer: `Our cloud-based portal and mobile application give you a centralized dashboard. 
		
		You can: Add/Remove Vehicles: Set up each vehicle with its unique details.
		 
		Assign Drivers: Create driver profiles and track individual performance.
		 
		 Set Alerts and Notifications: Receive emails or push notifications for speeding events, idling, or maintenance needs.`,
	},
	{
		question: "What does RidesIQ's pricing look like?",
		answer: `RidesIQ offers multiple pricing plans based on fleet size, data usage, and feature requirements.
		
		We typically have monthly or annual subscription options, and hardware costs may be included in specific packages or purchased separately.
		
		For a detailed quote, please contact our sales team or submit a request on our website.`,
	},
	{
		question: "How do I get support or report an issue with RidesIQ?",
		answer: `If you need assistance, you can reach our support team via: Email: support@ridesiq.com. 
		
		Our dedicated support staff are available to help troubleshoot any issues.`,
	},
];

	return (
		<section className="py-16 w-full bg-linear-to-b from-transparent via-gray-50/50 to-transparent dark:from-transparent dark:via-white/[0.02] dark:to-transparent" id="faq">
			<div className="container px-4 mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="max-w-2xl mx-auto text-center mb-12"
				>
					<h2 className="text-3xl font-semibold mb-3  ">Frequently Asked Questions</h2>
					<p className="text-lg text-gray-600 dark:text-gray-400">Everything you need to know about our platform</p>
				</motion.div>

				<div className="max-w-2xl mx-auto space-y-2">
					{faqs.map((faq, index) => (
						<FAQItem
							key={index}
							{...faq}
							index={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default Faq02;
