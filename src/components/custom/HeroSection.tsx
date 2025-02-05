"use client"

import { TextEffect } from "../ui/text-effect";
import { GlowEffectButton } from "./GlowButton";
import Image from "next/image";
import MarqueeEffect from "@/components/custom/Carousel";

export default function HeroSection() {
	return (
		<>
			<div className="bg-black text-white min-h-[80vh] w-full flex items-end">
				<div className=" px-4 py-2">
					<div className="grid md:grid-cols-5 gap-40 items-end justify-around ">
						<div className="col-span-3">
							<TextEffect
								per="word"
								as="h3"
								preset="blur"
								className="text-md uhe ppercase tracking-wider mb-4 font-sans text-gray-400"
							>
								Carbon neutral way to track cars.
							</TextEffect>
							<h1 className="text-4xl md:text-7xl font-semibold leading-tight mb-6 font-sans ">RidesIQ</h1>
						</div>
						<div className="space-y-6 col-span-2   ">
							<p className="text-sm md:text-md ">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. In mollitia, voluptas voluptatibus, facilis perspiciatis, accusantium natus amet sapiente nobis quia dolorum.
								Quos, provident?
							</p>
							<div className="flex items-center justify-center w-20 h-20 ">
								<GlowEffectButton />
							</div>
						</div>
					</div>
				</div>
			</div>
			<MarqueeEffect baseVelocity={-2}>
				<div className="flex flex-col items-center justify-center w-[50rem]  h-96 rounded-lg">
					<Image
						src="/assets/1.png"
						alt="rides"
						className="w-full h-full object-cover rounded-lg"
						width={500}
						height={5000}
					/>
				</div>
				<div className="flex flex-col items-center justify-center w-40 bg-red-300 h-96 rounded-lg">
					<Image
						src="/assets/6.jpg"
						alt="rides"
						className="w-full h-full object-cover rounded-lg"
						width={500}
						height={5000}
					/>
				</div>
				<div className="flex flex-col items-center justify-center w-[30rem] bg-red-400 h-96 rounded-lg">
					<Image
						src="/assets/2.png"
						alt="rides"
						className="w-full h-full object-cover rounded-lg"
						width={500}
						height={500}
					/>
				</div>
				<div className="flex flex-col items-center justify-center w-80 bg-red-500 h-96 rounded-lg">
					<Image
						src="/assets/3.png"
						alt="rides"
						className="w-full h-full object-cover rounded-lg"
						width={500}
						height={500}
					/>
				</div>
				<div className="flex flex-col items-center justify-center w-80 h-96 rounded-lg gap-6">
					<div className="bg-red-600 rounded-lg h-[12rem] w-full flex items-center justify-center">
						<Image
							src="/assets/4.png"
							alt="rides"
							className="w-full h-full object-cover rounded-lg"
							width={250}
							height={250}
						/>
					</div>
					<div className="bg-red-700 rounded-lg h-[12rem] w-full flex items-center justify-center">
						<Image
							src="/assets/5.png"
							alt="rides"
							className="w-full h-full object-cover rounded-lg"
							width={250}
							height={250}
						/>
					</div>
				</div>
			</MarqueeEffect>
		</>
	);
}
