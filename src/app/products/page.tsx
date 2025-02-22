
import { ChartBar } from "@/components/custom/charts/chart-bar";
import { ChartLine } from "@/components/custom/charts/chart-line";
import { ChartMilitary } from "@/components/custom/charts/chart-military";
import { ChartPie } from "@/components/custom/charts/chart-pie";
// import { BentoGridDemo } from "@/components/custom/Grid";
import IndustrySolutions from "@/components/custom/IndustrySolutions";
import CardProgramLayout from "@/components/custom/ProductsCard";
// import { VehicleTrackingGrid } from "@/components/custom/ProductsGrid";
import { ProgressiveBlurHover } from "@/components/custom/SomeTextCard";
import IndustryServices from "@/components/IndustryServices";
import { TextEffect } from "@/components/ui/text-effect";
import { Car } from "lucide-react";

const page = ({}) => {
	return (
		<main className="w-full min-h-screen p-6 mx-auto">
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

			{/* <BentoGridDemo /> */}



			<CardProgramLayout
				title="Custom Title"
				subtitle="CUSTOM SUBTITLE"
				description="Custom description text"
				rightContent={
					<div className=" rounded-2xl p-6 min-w-full">
						<ProgressiveBlurHover />
					</div>
				}
			/>

			<section className="min-h-screen bg-black text-white">
				{/* Hero Section */}
				<div className="w-full  mx-auto px-4 py-16 md:py-32">
					<div className="max-w-6xl mx-auto">
						{/* Badge */}
						<div className="inline-flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full mb-8">
							<Car className="w-4 h-4" />
							<span className="text-sm font-medium tracking-wide uppercase">Fully Themable</span>
						</div>

						{/* Main Content */}
						<div className="grid md:grid-cols-2 gap-12 items-center">
							{/* Left Column */}
							<div>
								<h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">Easily customize the look and feel to match your brand</h1>
							</div>

							{/* Right Column */}
							<div>
								<p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
									{"Our customizable cards are the perfect way to create an ownable touchpoint for your brand while supporting your customer's success."}
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-full">
				<ChartLine />
				<ChartBar />
				<ChartMilitary/>
				<ChartPie />
			</section>



<IndustryServices/>
<IndustrySolutions/>			


		</main>
	);
};

export default page;
