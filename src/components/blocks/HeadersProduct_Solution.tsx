import type { ReactNode } from "react";

// Interfaces

interface HeroProps {
	label?: string;
	heading: ReactNode;
	description: string;
	buttonText?: string;
	onButtonClick?: () => void;
	className?: string;
}

// Main Hero Component
export function Hero({ label, heading, description, buttonText = "Schedule a Demo", onButtonClick, className = "" }: HeroProps) {
	return (
		<div className={`bg-gradient-to-br from-blue-600 via-blue-500 to-teal-400 min-h-[600px] px-6 py-12 flex items-center rounded-lg ${className}`}>
			<div className="max-w-7xl mx-2">
				{label && <div className="text-sm font-medium tracking-wider text-white/80 uppercase">{label}</div>}

				<h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">{heading}</h1>

				<p className="mt-6 text-lg text-white/90 md:text-xl lg:text-2xl max-w-2xl">{description}</p>

				{buttonText && (
					<button
						onClick={onButtonClick}
						className="mt-8 px-8 py-3 text-base font-medium text-blue-600 bg-white rounded-lg hover:bg-white/90 transition-colors duration-200"
					>
						{buttonText}
					</button>
				)}
			</div>
		</div>
	);
}

// Example usage component
export function FleetHero({ onScheduleDemo }: { onScheduleDemo?: () => void }) {
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
			onButtonClick={onScheduleDemo}
		/>
	);
}
