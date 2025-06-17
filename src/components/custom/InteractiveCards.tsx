"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function InteractiveCards() {
	const [isFirstCardEnlarged, setIsFirstCardEnlarged] = useState(false);

	return (
		<div className="flex flex-col sm:flex-row gap-4 items-stretch justify-center max-h-[500px] my-20 ">
			<Card
				className={`transition-all duration-300 ease-in-out flex flex-col overflow-hidden  p-0 ${isFirstCardEnlarged ? "sm:w-2/3" : "sm:w-1/3"}`}
				onMouseEnter={() => setIsFirstCardEnlarged(true)}
				onMouseLeave={() => setIsFirstCardEnlarged(false)}
				onFocus={() => setIsFirstCardEnlarged(true)}
				onBlur={() => setIsFirstCardEnlarged(false)}
				tabIndex={0}
			>
				<CardContent className="flex  flex-grow justify-center items-center p-1 gap-2 overflow-hidden">
					<p className="mb-4 min-w-[30vw] flex justify-center items-center">Hover or focus on me to enlarge</p>
					<div
						className={`transition-all duration-300 ease-in-out flex-grow flex items-center justify-center overflow-hidden rounded-lg ${isFirstCardEnlarged ? "opacity-100" : "opacity-0"}`}
					>
						<Image
							src="/assets/1.png"
							alt="Placeholder image for Card One"
							width={300}
							height={200}
							className="rounded-lg object-cover min-w-[50vw] "
						/>
					</div>
				</CardContent>
			</Card>

			<Card
				className={`transition-all duration-300 ease-in-out flex flex-col overflow-hidden p-0  ${isFirstCardEnlarged ? "sm:w-1/3" : "sm:w-2/3"}`}
				onMouseEnter={() => setIsFirstCardEnlarged(false)}
				onMouseLeave={() => setIsFirstCardEnlarged(true)}
				onFocus={() => setIsFirstCardEnlarged(false)}
				onBlur={() => setIsFirstCardEnlarged(true)}
				tabIndex={0}
			>
				<CardContent className="flex flex-grow items-center justify-center p-1 gap-2 overflow-hidden">
					<p className="mb-4 min-w-[30vw] h-full flex justify-center items-center">Hover or focus on me to enlarge</p>
					<div
						className={`transition-all duration-300 ease-in-out flex-grow flex items-center justify-center overflow-hidden  rounded-lg ${
							isFirstCardEnlarged ? "opacity-0" : "opacity-100"
						}`}
					>
						<Image
							src="/assets/2.png"
							alt="Placeholder image for Card Two"
							width={300}
							height={200}
							className="rounded-lg object-cover min-w-[50vw] "
						/>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
