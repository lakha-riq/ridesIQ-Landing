import MarqueeEffect from "@/components/custom/Carousel";
import HeroSection from "@/components/custom/HeroSection";
import { WorldMapDemo } from "@/components/custom/WorldmapDemo";

// import { TextEffect } from "@/components/ui/text-effect";

const page = ({}) => {
	return (
		<>
			<HeroSection />
			<MarqueeEffect baseVelocity={-3}>
                <div className="flex flex-col items-center justify-center w-96 bg-red-200 h-40">1</div>
                <div className="flex flex-col items-center justify-center w-96 bg-red-300 h-40">2</div>
                <div className="flex flex-col items-center justify-center w-96 bg-red-400 h-40">3</div>
                <div className="flex flex-col items-center justify-center w-96 bg-red-500 h-40">4</div> 
                <div className="flex flex-col items-center justify-center w-96 bg-red-600 h-40">5</div>
			</MarqueeEffect>
			<WorldMapDemo />
		</>
	);
};

export default page;
