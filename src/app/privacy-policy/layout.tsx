import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy | RidesIQ",
	description: "Learn about how we protect your data and privacy at RidesIQ",
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
	return children;
}
