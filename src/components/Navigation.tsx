"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu as MenuIcon, X, ChevronRight, Truck, Construction, Bike, Bus, Factory, Ambulance, Warehouse, ChevronDown } from "lucide-react";

interface IndustryLink {
	icon: typeof Truck;
	title: string;
	description: string;
	href: string;
}

const industryLinks: IndustryLink[] = [
	{
		icon: Truck,
		title: "Logistics & Transportation",
		description: "Fleet solutions for trucking and delivery companies",
		href: "/industries/fleet-management",
	},
	{
		icon: Construction,
		title: "Construction",
		description: "Track and manage construction vehicle fleets",
		href: "/industries/construction",
	},
	{
		icon: Bike,
		title: "Food Delivery",
		description: "Optimize routes for food delivery services",
		href: "/industries/food-delivery",
	},
	{
		icon: Bus,
		title: "Public Transit",
		description: "Solutions for public transportation fleets",
		href: "/industries/public-transit",
	},
	{
		icon: Factory,
		title: "Manufacturing",
		description: "Monitor industrial vehicle operations",
		href: "/industries/manufacturing",
	},
	{
		icon: Ambulance,
		title: "Emergency Services",
		description: "Track emergency response vehicles",
		href: "/industries/emergency-services",
	},
	{
		icon: Warehouse,
		title: "Distribution",
		description: "Manage warehouse and logistics fleets",
		href: "/industries/distribution",
	},
];

export const Navigation = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleDropdownEnter = (dropdown: string) => {
		setActiveDropdown(dropdown);
	};

	const handleDropdownLeave = () => {
		setActiveDropdown(null);
	};

	return (
		<nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"}`}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-20">
					<div className="flex items-center">
						<Link
							href="/"
							className="text-2xl font-bold text-[#678FCA]"
						>
							RidesIQ
						</Link>
					</div>

					<div className="hidden md:flex items-center space-x-8">
						{/* Industries Dropdown */}
						<div
							className="relative"
							onMouseEnter={() => handleDropdownEnter("industries")}
							onMouseLeave={handleDropdownLeave}
						>
							<button className="flex items-center text-gray-700 hover:text-[#678FCA] transition-colors">
								Industries
								<ChevronDown className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === "industries" ? "rotate-180" : ""}`} />
							</button>

							{activeDropdown === "industries" && (
								<div className="absolute left-0 mt-2 w-[600px] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
									<div className="p-6">
										<h3 className="text-lg font-semibold text-gray-900 mb-4">Industries We Serve</h3>
										<div className="grid grid-cols-2 gap-4">
											{industryLinks.map((industry) => (
												<Link
													key={industry.href}
													href={industry.href}
													className="flex items-start p-3 rounded-xl hover:bg-gray-50 transition-colors group"
												>
													<div className="w-10 h-10 rounded-lg bg-[#678FCA]/10 flex items-center justify-center flex-shrink-0">
														<industry.icon className="w-5 h-5 text-[#678FCA]" />
													</div>
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900 group-hover:text-[#678FCA] transition-colors">{industry.title}</div>
														<div className="text-xs text-gray-500">{industry.description}</div>
													</div>
												</Link>
											))}
										</div>
									</div>
									<div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
										<Link
											href="/industries"
											className="flex items-center text-sm text-[#678FCA] hover:text-[#678FCA]/80 transition-colors group"
										>
											View All Industries
											<ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
										</Link>
									</div>
								</div>
							)}
						</div>

						{/* Solutions Dropdown */}
						<div
							className="relative"
							onMouseEnter={() => handleDropdownEnter("solutions")}
							onMouseLeave={handleDropdownLeave}
						>
							<button className="flex items-center text-gray-700 hover:text-[#678FCA] transition-colors">
								Solutions
								<ChevronDown className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === "solutions" ? "rotate-180" : ""}`} />
							</button>

							{activeDropdown === "solutions" && (
								<div className="absolute left-0 mt-2 w-[300px] bg-white rounded-2xl shadow-xl border border-gray-100">
									<div className="p-4">
										<Link
											href="/tracking"
											className="block px-4 py-2 text-sm text-gray-700 hover:text-[#678FCA] hover:bg-gray-50 rounded-lg transition-colors"
										>
											GPS Tracking
										</Link>
										<Link
											href="/analytics"
											className="block px-4 py-2 text-sm text-gray-700 hover:text-[#678FCA] hover:bg-gray-50 rounded-lg transition-colors"
										>
											Fleet Analytics
										</Link>
										<Link
											href="/maintenance"
											className="block px-4 py-2 text-sm text-gray-700 hover:text-[#678FCA] hover:bg-gray-50 rounded-lg transition-colors"
										>
											Maintenance Management
										</Link>
									</div>
								</div>
							)}
						</div>

						<Link
							href="/pricing"
							className="text-gray-700 hover:text-[#678FCA] transition-colors"
						>
							Pricing
						</Link>

						<Link
							href="/resources"
							className="text-gray-700 hover:text-[#678FCA] transition-colors"
						>
							Resources
						</Link>

						<button className="bg-[#678FCA] text-white px-6 py-2.5 rounded-full hover:bg-[#678FCA]/90 transition-colors">Get a Demo</button>
					</div>

					<button
						className="md:hidden text-gray-700"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? <X /> : <MenuIcon />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="md:hidden bg-white border-t border-gray-100">
					<div className="px-4 py-4 space-y-3">
						<div className="space-y-2">
							<div className="px-4 py-2 text-sm font-medium text-gray-500">Industries</div>
							{industryLinks.map((industry) => (
								<Link
									key={industry.href}
									href={industry.href}
									className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
								>
									<industry.icon className="w-5 h-5 mr-3 text-[#678FCA]" />
									{industry.title}
								</Link>
							))}
						</div>

						<div className="space-y-2">
							<div className="px-4 py-2 text-sm font-medium text-gray-500">Solutions</div>
							<Link
								href="/tracking"
								className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
							>
								GPS Tracking
							</Link>
							<Link
								href="/analytics"
								className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
							>
								Fleet Analytics
							</Link>
							<Link
								href="/maintenance"
								className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
							>
								Maintenance Management
							</Link>
						</div>

						<Link
							href="/pricing"
							className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
						>
							Pricing
						</Link>

						<Link
							href="/resources"
							className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
						>
							Resources
						</Link>

						<button className="w-full mt-4 bg-[#678FCA] text-white px-6 py-3 rounded-full">Get a Demo</button>
					</div>
				</div>
			)}
		</nav>
	);
};
