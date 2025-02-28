"use client"
import Image from "next/image";

const IndustryServices = ({}) => {
	return (
		<section className="bg-black min-h-screen w-full py-16 px-4">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<p className="text-sm uppercase tracking-wider text-gray-400 mb-4">OUR DEVICES</p>
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Choose The Right Tracker For Your Fleet</h1>
					<p className="text-gray-300 max-w-3xl mx-auto text-lg">
						Select from our range of professional GPS tracking devices, offering solutions from basic hardwired units to advanced asset tracking systems with customizable features.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
					{/* Hard-Wired Tracker Card */}
					<div className="rounded-3xl overflow-hidden relative h-[450px] group transition-transform hover:scale-105">
						<div className="absolute inset-0 bg-gradient-to-b from-[#678FCA] to-[#4A6491]" />
						<div className="absolute -left-24 top-0 -rotate-90  translate-x-1/2 w-[280px] h-[280px]">
							<Image
								src="/assets/devices/device1.svg"
								alt="Hard-Wired Tracker"
								width={220}
								height={220}
								className="object-contain transition-transform group-hover:translate-y-2"
							/>
						</div>
						<div className="relative h-full p-8 flex flex-col justify-end pt-24">
							<span className="text-white/60 text-sm mb-2">01</span>
							<h2 className="text-white text-3xl font-semibold">Hard-Wired Tracker</h2>
							<p className="text-white/80 mt-2">Permanent installation for continuous vehicle tracking and monitoring.</p>
						</div>
					</div>

					{/* OBD Tracker Card */}
					<div className="rounded-3xl overflow-hidden relative h-[450px] group transition-transform hover:scale-105">
						<div className="absolute inset-0 bg-gradient-to-b from-[#678FCA] to-[#99D5C9]" />
						<div className="absolute -left-10 top-32  translate-x-1/2 w-[280px] h-[280px]">
							<Image
								src="/assets/devices/OBD.svg"
								alt="OBD Tracker"
								width={220}
								height={220}
								className="object-contain transition-transform group-hover:translate-y-2"
							/>
						</div>
						<div className="relative h-full p-8 flex flex-col justify-end pt-24">
							<span className="text-white/60 text-sm mb-2">02</span>
							<h2 className="text-white text-3xl font-semibold">OBD Tracker</h2>
							<p className="text-white/80 mt-2">Plug-and-play solution for quick installation and vehicle diagnostics.</p>
						</div>
					</div>

					{/* Asset Tracker Card */}
					<div className="rounded-3xl overflow-hidden relative h-[450px] group transition-transform hover:scale-105">
						<div className="absolute inset-0 bg-gradient-to-b from-[#99D5C9] to-[#7AB3A9]" />
						<div className="absolute -left-10 top-12  translate-x-1/2 w-[280px] h-[280px]">
							<Image
								src="/window.svg"
								alt="Asset Tracker"
								width={220}
								height={220}
								className="object-contain transition-transform group-hover:translate-y-2"
							/>
						</div>
						<div className="relative h-full p-8 flex flex-col justify-end pt-24">
							<span className="text-white/60 text-sm mb-2">03</span>
							<h2 className="text-white text-3xl font-semibold">Asset Tracker</h2>
							<p className="text-white/80 mt-2">Battery-powered solution for non-powered equipment and asset monitoring.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default IndustryServices;
