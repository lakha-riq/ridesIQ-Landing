import Faq02 from "@/components/custom/FAQ";
import { GlowingEffectDemo } from "@/components/custom/GlowGrid";
import GradientCard from "@/components/custom/GradientCard";
// import { BentoGridDemo } from "@/components/custom/Grid";
import HeroSection from "@/components/custom/HeroSection";
import Quotes from "@/components/custom/Quotes";
import { TestimonialsSectionDemo } from "@/components/custom/TestimonialsAll";

// import { TextEffect } from "@/components/ui/text-effect";

const page = ({}) => {
	return (
		<>
			<HeroSection />
			<div className="flex flex-col items-center justify-center min-w-full min-h-[50vh] pt-20">
				<div className="text-3xl">Discover why people are willing to work with us</div>
				<div className="text-xl opacity-50">the features and benefits of our services</div>
				<div className="w-full min-h-screen grid place-content-center">
					<GlowingEffectDemo />
				</div>
			</div>
			<Quotes
				header="Working with Industry leading Infrastructure"
				quote="We are a team of experts in the field of IoT "
			/>
			<div>
				<TestimonialsSectionDemo />
			</div>

			<GradientCard />
			<Faq02 />

			{/* <WorldMapDemo /> */}
		</>
	);
};

export default page;
