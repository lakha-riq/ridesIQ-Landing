import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Providers } from "@/components/theme/providers";
import { Toaster } from "@/components/ui/sonner";
import { GoogleAnalytics } from '@next/third-parties/google'
import {  GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "RidesIQ",
	description: "RidesIQ is a fleet management solution that provides real-time tracking, monitoring, and diagnostics for vehicles and assets.",
};




export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning={true}
		>
			<GoogleTagManager gtmId="GTM-MVKTVVZT" />
			<head></head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>	
				<Providers>
					<Navbar />
					{children}
					<Toaster />
					<Footer />
				</Providers>
				<SpeedInsights /> 
			</body>
			<GoogleAnalytics  gaId="G-20S21GCSHW" />
		</html>
	);
}
