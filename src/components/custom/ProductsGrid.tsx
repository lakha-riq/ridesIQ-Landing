"use client";

import { Brain, Shield, BarChart3 } from "lucide-react";
import { GlowingEffect } from "./GlowGridComp";
import type React from "react";

export function VehicleTrackingGrid() {
	return (
		<div className="bg-black min-h-screen p-6 md:p-10">
			<div className="max-w-7xl mx-auto space-y-8">
				<div className=" mb-12 gap-10 grid grid-cols-1 md:grid-cols-5 place-content-center max-w-6xl">
					<h1 className="text-2xl md:text-3xl font-bold text-white mb-4 col-span-1 md:col-span-3">The Competitive Edge</h1>
					<p className="opacity-50 text-sm md:text-sm col-span-1 md:col-span-2  tracking-tighter">
						Transform your fleet operations with enterprise-grade telematics that deliver actionable insights, robust security, and seamless integration.
					</p>
				</div>

				<ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
					<GridItem
						area=""
						icon={<Brain className="h-4 w-4 text-neutral-400" />}
						title="Actionable Intelligence."
						description="Turn complex vehicle data into clear business insights and automated actions"
						Num="01"
					/>

					<GridItem
						area=""
						icon={<Shield className="h-4 w-4 text-neutral-400" />}
						title="Enterprise           Security."
						description="Bank-grade encryption and compliance safeguards for your fleet data"
						Num="02"
					/>

					<GridItem
						area=""
						icon={<BarChart3 className="h-4 w-4 text-neutral-400" />}
						title="Seamless Integration."
						description="Works with your existing systems and processes, requiring minimal IT resources for implementation"
						Num="03"
					/>

					{/* <GridItem
						area=""
						icon={<Globe2 className="h-4 w-4 text-neutral-400" />}
						title="Agricultural Vehicles"
						description="Precision tracking for farm equipment and harvest operations"
					/> */}
				</ul>
			</div>
		</div>
	);
}

interface GridItemProps {
	area: string;
	icon: React.ReactNode;
	title: string;
	description: React.ReactNode;
	long?: boolean;
	Num: string;
}




const GridItem = ({ icon, title, description, long = false, Num }: GridItemProps) => {

	return (
		<li className="min-h-[30rem] list-none">
			<div className="relative h-full rounded-2.5xl border border-zinc-800 p-2 md:rounded-3xl md:p-3">
				<GlowingEffect
					spread={40}
					glow={true}
					disabled={false}
					proximity={64}
					inactiveZone={0.01}
				/>
				<div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 border-zinc-800 p-6 bg-zinc-900 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
					<div className="relative flex flex-1 flex-col justify-between gap-3">
						<div className="flex items-center justify-between ">
							<div className="w-fit rounded-lg border border-zinc-700 p-2">{icon}</div>
							<div className="uppercase text-md font-semibold  opacity-50 tracking-wide">{Num}</div>
						</div>
						<div className="space-y-3 flex flex-col  gap-60">
							<h3 className={`pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 text-balance text-center text-white${long ? " md:text-5xl" : " md:text-4xl/[1.875rem]"}`}>{title}</h3>
							<h2 className={"font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-neutral-400 px-6 text-center"}>{description}</h2>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
};
