
import HeroSection from "@/components/custom/HeroSection";
import { WorldMapDemo } from "@/components/custom/WorldmapDemo";
import MagnetLines from "@/components/custom/MagnetLines";

// import { TextEffect } from "@/components/ui/text-effect";

const page = ({}) => {
	return (
		<>
			<HeroSection />

			<div className="grid place-content-center md:grid-cols-4  w-full min-h-screen gap-4 overflow-hidden pl-2">
				<div className="md:col-span-3 col-span-2"> 
					<h1 className="text-6xl">Some parts of this is still not optimised </h1>
					<p className="opacity-40">
						Guess What We are gonna do , optimise them.
					</p>
				</div>
				<div className="flex items-center justify-center gap-4 md:col-span-1  col-span-2">
					<MagnetLines
						rows={3}
						columns={10}
						containerSize="5rem"
						lineColor="white"
						lineWidth="0.1rem"
						lineHeight="1rem"
						baseAngle={0}
						className="gap-2"
					/>
					<MagnetLines
						rows={3}
						columns={10}
						containerSize="5rem"
						lineColor="white"
						lineWidth="0.1rem"
						lineHeight="1rem"
						baseAngle={0}
						className="gap-2"
					/>
					<MagnetLines
						rows={3}
						columns={10}
						containerSize="5rem"
						lineColor="white"
						lineWidth="0.1rem"
						lineHeight="1rem"
						baseAngle={0}
						className="gap-2"
					/>
					<MagnetLines
						rows={3}
						columns={10}
						containerSize="5rem"
						lineColor="white"
						lineWidth="0.1rem"
						lineHeight="1rem"
						baseAngle={0}
						className="gap-2"
					/>
					<MagnetLines
						rows={3}
						columns={10}
						containerSize="5rem"
						lineColor="white"
						lineWidth="0.1rem"
						lineHeight="1rem"
						baseAngle={0}
						className="gap-2"
					/>
					<MagnetLines
						rows={3}
						columns={10}
						containerSize="5rem"
						lineColor="white"
						lineWidth="0.1rem"
						lineHeight="1rem"
						baseAngle={0}
						className="gap-2 hidden md:flex"
					/>
				</div>
			</div>
			<WorldMapDemo />
		</>
	);
};

export default page;
