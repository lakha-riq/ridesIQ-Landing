import Link from "next/link";
import { FC } from "react";

interface FooterProps { 
	title : string;
	links : {
		text : string;
		href : string;
	}[];
}




const FooterSection : FC<FooterProps> = ({
	title,
	links,
}) => (
	<div className="flex flex-col gap-2">
		<h3 className="text-lg font-bold text-[#555555] mb-2">{title}</h3>
		<div className="flex flex-col gap-1">
			{links.map((link, index) => (
				<Link
					key={index}
					href={link.href}
					className="text-[#6f6e6e] hover:text-[#555555] transition-colors"
				>
					{link.text}
				</Link>
			))}
		</div>
	</div>
);

const Footer = () => {
	const footerLinks = {
		company: [
			{ text: "About Us", href: "#" },
			{ text: "Careers", href: "#" },
			{ text: "Press", href: "#" },
			{ text: "Blog", href: "#" },
		],
		support: [
			{ text: "Help Center", href: "#" },
			{ text: "Safety", href: "#" },
			{ text: "Terms of Service", href: "#" },
			{ text: "Privacy Policy", href: "#" },
		],
		contact: [
			{ text: "Email: contact@iotrides.com", href: "mailto:contact@iotrides.com" },
			{ text: "Phone: +1 (555) 123-4567", href: "tel:+15551234567" },
			{ text: "Toronto, Canada", href: "#" },
		],
		social: [
			{ text: "Twitter", href: "#" },
			{ text: "LinkedIn", href: "#" },
			{ text: "Instagram", href: "#" },
			{ text: "Facebook", href: "#" },
		],
	};

	return (
		<footer className="w-full min-h-[70vh] bg-black">
			<div className="flex flex-col items-center">
				<h1 className="md:text-[14rem] text-[4rem] text-center w-[90vw] font-extrabold tracking-tighter text-[#555555] border-b border-[#555555]"> RidesIQ.</h1>

				{/* Grid Layout for Footer Links */}
				<div className="w-[90vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
					<FooterSection
						title="Company"
						links={footerLinks.company}
					/>
					<FooterSection
						title="Support"
						links={footerLinks.support}
					/>
					<FooterSection
						title="Contact"
						links={footerLinks.contact}
					/>
					<FooterSection
						title="Social"
						links={footerLinks.social}
					/>
				</div>

				{/* Copyright Section */}
				<div className="w-[90vw] flex items-center justify-between flex-wrap pt-2 pb-8 text-[#555555] font-bold border-t border-[#555555]">
					<div className="text-start w-full md:w-auto">
						
						<Link
							href={""}
							className="text-[#6f6e6e] p-1"
						>
							{"Canada"}
						</Link>
						operational in
						<Link
							href={"#"}
							className="text-[#6f6e6e] p-1"
						>
							{"North America"}
						</Link>
					</div>
					<div className="text-[#6f6e6e] mt-4 md:mt-0">© 2025 IoT Rides. All rights reserved.</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
