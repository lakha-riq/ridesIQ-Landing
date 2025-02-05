import MarqueeEffect from "@/components/custom/Carousel";
import HeroSection from "@/components/custom/HeroSection";
import { WorldMapDemo } from "@/components/custom/WorldmapDemo";
import Image from "next/image";

// import { TextEffect } from "@/components/ui/text-effect";

const page = ({}) => {
	return (
		<>
			<HeroSection />
			<MarqueeEffect baseVelocity={-2}>
				<div className="flex flex-col items-center justify-center w-[50rem]  h-96 rounded-lg">
					<Image src="/assets/1.png" alt="rides" className="w-full h-full object-cover rounded-lg" width={500} height={5000} />
				</div>
				<div className="flex flex-col items-center justify-center w-40 bg-red-300 h-96 rounded-lg">
					<Image src="/assets/6.jpg" alt="rides" className="w-full h-full object-cover rounded-lg" width={500} height={5000} />
				</div>
				<div className="flex flex-col items-center justify-center w-[30rem] bg-red-400 h-96 rounded-lg">
					<Image src="/assets/2.png" alt="rides" className="w-full h-full object-cover rounded-lg" width={500} height={500} />
				</div>
				<div className="flex flex-col items-center justify-center w-80 bg-red-500 h-96 rounded-lg">
					<Image src="/assets/3.png" alt="rides" className="w-full h-full object-cover rounded-lg" width={500} height={500} />
				</div>
				<div className="flex flex-col items-center justify-center w-80 h-96 rounded-lg gap-6">
					<div className="bg-red-600 rounded-lg h-[12rem] w-full flex items-center justify-center">
						<Image src="/assets/4.png" alt="rides" className="w-full h-full object-cover rounded-lg" width={250} height={250} />
					</div>
					<div className="bg-red-700 rounded-lg h-[12rem] w-full flex items-center justify-center">
						<Image src="/assets/5.png" alt="rides" className="w-full h-full object-cover rounded-lg" width={250} height={250} />
					</div>
				</div>
			</MarqueeEffect>
			<div className="flex flex-col items-center justify-center w-full min-h-screen" >the world is watching us grow </div>
			<WorldMapDemo />
		</>
	);
};

export default page;
