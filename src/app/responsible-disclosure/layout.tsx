import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Responsible Disclosure | RidesIQ",
	description: "Security vulnerability disclosure policy for RidesIQ",
};

export default function ResponsibleDisclosureLayout({ children }: { children: React.ReactNode }) {
	return children;
}
