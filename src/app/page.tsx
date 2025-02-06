
import HeroSection from "@/components/custom/HeroSection";
import { WorldMapDemo } from "@/components/custom/WorldmapDemo";
import MagnetLines from "@/components/custom/MagnetLines";

// import { TextEffect } from "@/components/ui/text-effect";

const page = ({}) => {
	return (
		<>
			<HeroSection />

    <div className="grid place-content-center w-full min-h-screen gap-4 overflow-hidden px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-3">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Some parts of this are still not optimised</h1>
          <p className="text-lg md:text-xl opacity-60">Guess what we are gonna do? Optimise them.</p>
        </div>
        <div className="md:col-span-1 w-full overflow-hidden">
          <div className="flex flex-row items-center gap-4 w-max">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="shrink-0">
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
              </div>
            ))}
            <div className="shrink-0 hidden md:block">
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
            </div>
          </div>
        </div>
      </div>
    </div>
			<WorldMapDemo />
		</>
	);
};

export default page;
