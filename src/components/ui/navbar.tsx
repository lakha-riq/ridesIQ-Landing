"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { GlowEffect } from "@/components/ui/glow-effect";
import { GlowEffectButton } from "../custom/GlowButton";

// Define the navigation items
const navItems = [
	{ name: "Products", href: "/products" },
	{ name: "Solutions", href: "/solutions" },
];

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
								<span className="text-white text-xl font-bold">RidesIQ</span>
							</Link>
						</div>

						{/* Main Navigation */}
						<div className="hidden md:flex md:items-center md:space-x-8">
							{navItems.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className="text-gray-300 hover:text-white text-sm font-bold uppercase transition-colors"
								>
									{item.name}
								</Link>
							))}
						</div>

						{/* Right Navigation */}
						<div className="hidden md:flex md:items-center md:space-x-6">
							<GlowEffectButton />
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
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3 }}
							className="md:hidden absolute w-full bg-zinc-900 z-50 overflow-hidden"
						>
							<div className="px-2 pt-2 pb-3 space-y-1">
								{navItems.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										className="text-gray-300 hover:text-white block px-3 py-2 text-base font-bold uppercase"
										onClick={() => setIsOpen(false)}
									>
										{item.name}
									</Link>
								))}
								<div className="px-3 py-2">
									<Link href={"/contact"}>
									<div className="relative">
										<GlowEffect
											colors={["#FF5733", "#33FF57", "#3357FF", "#F1C40F"]}
											mode="colorShift"
											blur="soft"
											duration={3}
											scale={0.9}
										/>
										<button className="relative inline-flex items-center gap-1 rounded-md bg-zinc-950 px-2.5 py-1.5 text-sm text-zinc-50 outline outline-1 outline-[#fff2f21f] w-full font-bold uppercase">
											Schedule A Demo <ArrowRight className="h-4 w-4" />
										</button>
									</div>
									</Link>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
		</header>
	);
}
