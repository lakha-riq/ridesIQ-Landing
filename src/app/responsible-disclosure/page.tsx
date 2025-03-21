"use client";
import React from "react";
import { Navigation } from "@/components/Navigation";
import { ResponsibleDisclosureContent } from "@/components/responsible-disclosure/ResponsibleDisclosureContent";
import { ContactCTA } from "@/components/shared/ContactCTA";

export default function ResponsibleDisclosure() {
	return (
		<div className="min-h-screen bg-white">
			<Navigation />
			<ResponsibleDisclosureContent />
			<ContactCTA
				title="Have Security Concerns?"
				description="Contact our security team directly to report vulnerabilities"
				buttonText="Contact Security Team"
				buttonLink="/contact"
			/>
		</div>
	);
}
