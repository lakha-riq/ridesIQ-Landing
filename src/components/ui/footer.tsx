import Link from "next/link";

import { TextHoverEffect } from "../custom/FooterText";
/*import { Linkedin, X } from "lucide-react";*/
import { Input } from "./input";
import { Button } from "./button";





const Footer = () => {


	return (
		<footer className="w-full min-h-[70vh] bg-black">
			<div className="flex flex-col items-center">
				{/* <h1 className="md:text-[14rem] text-[4rem] text-center w-[90vw] font-extrabold tracking-tighter text-[#555555] border-b border-[#555555]"> RidesIQ.</h1> */}
				<TextHoverEffect text="RIDESIQ" />
			</div>
			<div className="container mx-auto px-4 py-12">
				{/* Main Content */}
				<div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
					{/* Newsletter Section */}
					<div className="flex-1 max-w-xl">
						<h2 className="text-2xl font-semibold mb-4">Sign up for email updates</h2>
						<p className="text-gray-400 mb-6">Your one-stop shop for Telematics news you need to know each month.</p>
						<div className="flex flex-col gap-4">
							<Input
								type="email"
								placeholder="Enter email address..."
								className="bg-[#1C1C1C] border-0 text-white"
							/>
							<Button
								variant="secondary"
								className="whitespace-nowrap bg-white text-black hover:bg-gray-200 w-40"
							>
								Subscribe
							</Button>
						</div>
					</div>

					{/* Navigation Links */}
					<div className="space-y-12">
						<div>
							<h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Company</h3>
							<div className="flex flex-col space-y-3">
								<Link
									href="/products"
									className="text-white hover:text-gray-300 transition-colors"
								>
									Products
								</Link>
								<Link
									href="/solutions"
									className="text-white hover:text-gray-300 transition-colors"
								>
									Solutions
									</Link>
								<Link
									href="#"
									className="text-white hover:text-gray-300 transition-colors"
								>
									Contact Us
								</Link>
							</div>
						</div>

						<div>
							<h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Support</h3>
							<div className="flex flex-col space-y-3">
								<Link
									href="/privacy-policy"
									className="text-white hover:text-gray-300 transition-colors"
								>
									Privacy Policy
								</Link>
								{/* <Link
									href="#"
									className="text-white hover:text-gray-300 transition-colors"
								>
									Terms of Services
								</Link> */}
								<Link
									href="#faq"
									className="text-white hover:text-gray-300 transition-colors"
								>
									FAQs
								</Link>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-800 text-sm text-gray-400">
					<div className="flex items-center gap-8 mb-4 sm:mb-0">
						<Link
							href="#"
							className="hover:text-gray-300 transition-colors"
						>
							Privacy Policy
						</Link>
						<Link
							href="#"
							className="hover:text-gray-300 transition-colors"
						>
							Terms of Service
						</Link>
						<span>©2025 RidesIQ. All rights reserved.</span>
					</div>
					<div className="flex items-center gap-4">
						{/* <Link
							href="#"
							className="hover:text-gray-300 transition-colors"
						>
							<X className="w-5 h-5" />
						</Link>
						<Link
							href="#"
							className="hover:text-gray-300 transition-colors"
						>
							<Linkedin className="w-5 h-5" />
						</Link> */}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
