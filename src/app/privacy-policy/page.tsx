"use client";

import React from "react";
import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { PrivacyContent } from "@/components/privacy/PrivacyContent";
import { ContactCTA } from "@/components/shared/ContactCTA";

export const metadata: Metadata = {
	title: "Privacy Policy | RidesIQ",
	description: "Learn about how we protect your data and privacy at RidesIQ",
};

export default function PrivacyPolicy() {
	return (
		<>
			<Navigation />
			<PrivacyContent />
			<ContactCTA
				title="Have Questions About Your Privacy?"
				description="Our team is here to help you understand how we protect your data"
				buttonText="Contact Us"
				buttonLink="/contact"
			/>
		</>
	);
}
