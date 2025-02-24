import BentoGridDemo from "@/components/custom/BentoGridDemo";
import Faq02 from "@/components/custom/FAQ";
// import { GlowingEffectDemo } from "@/components/custom/GlowGrid";
import GradientCard from "@/components/custom/GradientCard";
// import { BentoGridDemo } from "@/components/custom/Grid";
import HeroSection from "@/components/custom/HeroSection";
// import InteractiveCards from "@/components/custom/InteractiveCards";
import ChartsSection from "@/components/custom/InteractiveChart";
import { VehicleTrackingGrid } from "@/components/custom/ProductsGrid";
// import Quotes from "@/components/custom/Quotes";
import { WorldMapTop } from "@/components/custom/WorldmapDemo";
// import { TestimonialsSectionDemo } from "@/components/custom/TestimonialsAll";

// import { TextEffect } from "@/components/ui/text-effect";

const page = ({}) => {
	return (
		<>
			<WorldMapTop />
			<HeroSection />
			<div className="flex flex-col items-center justify-center min-w-full min-h-[50vh] pt-20">

				<BentoGridDemo />
			</div>
			<div className="sm:mb-screen">
				<ChartsSection />
			</div>
			<div className="md:hidden flex min-h-[15vh]"></div>

			<VehicleTrackingGrid />

			<GradientCard />

			<Faq02 />
		</>
	);
};

export default page;
