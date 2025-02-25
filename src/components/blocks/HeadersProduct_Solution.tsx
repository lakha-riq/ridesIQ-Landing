"use client";
import Link from "next/link";
import type { ReactNode } from "react";

// Interfaces

interface HeroProps {
	label?: string;
	heading: ReactNode;
	description: string;
	buttonText?: string;

	className?: string;
}

// Main Hero Component
export function Hero({ label, heading, description, buttonText = "Schedule a Demo", className = "" }: HeroProps) {
	return (
		<div className={`bg-gradient-to-r from-[#678FCA]  to-[#99D5C9] min-h-[600px] px-8 py-12 flex items-center rounded-lg ${className}`}>
			<div className="max-w-7xl mx-2">
				{label && <div className="text-sm font-medium tracking-wider text-white/80 uppercase">{label}</div>}

				<h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-4xl lg:text-6xl mb-20">{heading}</h1>

				<p className="mt-6 text-lg text-white/90 md:text-xl lg:text-2xl max-w-2xl">{description}</p>

				{buttonText && (
					<Link href={"/contact"}>
						<button className="mt-8 px-8 py-3 text-base md:w-96 tracking-wider text-black font-bold  bg-white rounded-lg hover:bg-white/90 transition-colors duration-200">
							{buttonText}
						</button>
					</Link>
				)}
			</div>
		</div>
	);
}

// Example usage component
export function SolutionsHeader() {
	return (
		<Hero
			label="Fleet Management Platform"
			heading={
				<>
					Complete Fleet <br className="hidden sm:inline" />
					Visibility Solution
				</>
			}
			description="Comprehensive fleet management software with real-time tracking, analytics, and automated reporting."
			
		/>
	);
}

export function ProductsHeader() {
	return (
		<Hero
			label="GPS TRACKING DEVICES"
			heading={
				<>
					Enterprise-Grade
					<br className="hidden sm:inline" />
					Vehicle Trackers
				</>
			}
			description="High-performance GPS tracking devices with real-time connectivity and advanced security."
			buttonText="Request a Quote"
		/>
	);
}