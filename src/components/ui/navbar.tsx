"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

import { GlowEffect } from "@/components/ui/glow-effect";
import { GlowEffectButton } from "../custom/GlowButton";
export function Navbar() {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<header className="relative">
			<nav className="bg-black">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						{/* Logo */}
						<div className="flex-shrink-0">
							<Link
								href="/"
								className="flex items-center"
							>
								<span className="text-white text-xl font-bold">Rides IQ</span>
							</Link>
						</div>

						{/* Main Navigation */}
						<div className="hidden md:flex md:items-center md:space-x-8">
							<Link
								href="/products"
								className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
							>
								Products and Solution
							</Link>
							{/* <Link
								href="/solutions"
								className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
							>
								Solutions
							</Link> */}
							<Link
								href="/contact"
								className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
							>
								Contact us
							</Link>
						</div>

						{/* Right Navigation */}
						<div className="hidden md:flex md:items-center md:space-x-6">
							<Link
								href="/company"
								className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
							>
								About 
							</Link>

							{/* <div className="relative">
								<GlowEffect
									colors={["#FF5733", "#33FF57", "#3357FF", "#F1C40F"]}
									mode="colorShift"
									blur="soft"
									duration={3}
									scale={0.9}
								/>
								<button className="relative inline-flex items-center gap-1 rounded-md bg-zinc-950 px-2.5 py-1.5 text-sm text-zinc-50 outline outline-1 outline-[#fff2f21f] ">
									Contact Us <ArrowRight className="h4 w-4" />
								</button>
							</div> */}
							<GlowEffectButton/>
						</div>

						{/* Mobile menu button */}
						<div className="flex md:hidden">
							<button
								onClick={() => setIsOpen(!isOpen)}
								className="text-gray-400 hover:text-white focus:outline-none"
							>
								<span className="sr-only">Open main menu</span>
								{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
							</button>
						</div>
					</div>
				</div>

				{/* Mobile menu */}
				<div className={`${isOpen ? "block" : "hidden"} md:hidden absolute w-full bg-zinc-900 z-50`}>
					<div className="px-2 pt-2 pb-3 space-y-1">
						<Link
							href="/products"
							className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
							onClick={() => setIsOpen(false)}
						>
							Products
						</Link>
						<Link
							href="/solutions"
							className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
							onClick={() => setIsOpen(false)}
						>
							Solutions
						</Link>
						<Link
							href="/partners"
							className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
							onClick={() => setIsOpen(false)}
						>
							Partners
						</Link>
						<Link
							href="/resources"
							className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
							onClick={() => setIsOpen(false)}
						>
							Resources
						</Link>
						<Link
							href="/company"
							className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
							onClick={() => setIsOpen(false)}
						>
							Company
						</Link>
						<Link
							href="/signin"
							className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
							onClick={() => setIsOpen(false)}
						>
							Sign in
						</Link>
						<div className="px-3 py-2 ">
							<div className="relative">
								<GlowEffect
									colors={["#FF5733", "#33FF57", "#3357FF", "#F1C40F"]}
									mode="colorShift"
									blur="soft"
									duration={3}
									scale={0.9}
								/>
								<button className="relative inline-flex items-center gap-1 rounded-md bg-zinc-950 px-2.5 py-1.5 text-sm text-zinc-50 outline outline-1 outline-[#fff2f21f] w-full ">
									Explore <ArrowRight className="h4 w-4" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
