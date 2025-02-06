
import { BentoGridDemo } from "@/components/custom/Grid";
import HeroSection from "@/components/custom/HeroSection";
import Quotes from "@/components/custom/Quotes";
import { TestimonialsSectionDemo } from "@/components/custom/TestimonialsAll";
import { WorldMapDemo } from "@/components/custom/WorldmapDemo";

// import { TextEffect } from "@/components/ui/text-effect";

const page = ({}) => {
	return (
		<>
			<HeroSection />
      <div className="flex flex-col items-center justify-center min-w-full min-h-[50vh] pt-20">
        <div className="text-3xl">Discover why people are willing to work with us</div>
        <div className="text-xl opacity-50">the features and benefits of our services</div>
				<BentoGridDemo />
			</div>
			<Quotes
				header="Working with Industry leading Infrastructure"
				quote="We are a team of experts in the field of IoT "
      />
      <div>
        <TestimonialsSectionDemo/>
      </div>
			<WorldMapDemo />
		</>
	);
};

export default page;
