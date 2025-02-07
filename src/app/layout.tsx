import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Providers } from "@/components/theme/providers";
import { Toaster } from "@/components/ui/sonner";
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Iot Rides",
	description: "Iot Rides",
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
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
				<Providers>
					<Navbar />
					{children}
					<Toaster />
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
