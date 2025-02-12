import { BentoGridDemo } from "@/components/custom/Grid";
import CardProgramLayout from "@/components/custom/ProductsCard";
import { VehicleTrackingGrid } from "@/components/custom/ProductsGrid";
import { ProgressiveBlurHover } from "@/components/custom/SomeTextCard";
import { TextEffect } from "@/components/ui/text-effect";

const page = ({}) => {
	return (
		<div className="w-full min-h-screen p-6">
			<div
				className="min-h-[20vh] w-full relative bg-cover bg-center bg-no-repeat rounded-lg text-7xl font-medium"
				// style={{
				// 	backgroundImage: 'url("/bg.png")',
				// }}
			></div>
			<TextEffect
				per="word"
				as="h3"
				preset="blur"
				className="text-md uppercase tracking-wider mb-4 font-sans text-gray-400"
			>
				Discover the top of the line products
			</TextEffect>
			<h1 className="md:text-7xl text-5xl">PRODUCTS</h1>

			<BentoGridDemo />

			<VehicleTrackingGrid />

			<CardProgramLayout
				title="Custom Title"
				subtitle="CUSTOM SUBTITLE"
				description="Custom description text"
				rightContent={
					<div className=" rounded-2xl p-6 max-w-md mx-auto">
						<ProgressiveBlurHover />
					</div>
				}
			/>
		</div>
	);
};

export default page;
