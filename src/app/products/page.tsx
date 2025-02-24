
import { ProductsHeader } from "@/components/blocks/HeadersProduct_Solution";
import Faq02 from "@/components/custom/FAQ";
import GradientCard from "@/components/custom/GradientCard";
// import { ChartBar } from "@/components/custom/charts/chart-bar";
// import { ChartLine } from "@/components/custom/charts/chart-line";
// import { ChartMilitary } from "@/components/custom/charts/chart-military";
// import { ChartPie } from "@/components/custom/charts/chart-pie";
// import { BentoGridDemo } from "@/components/custom/Grid";
import IndustrySolutions from "@/components/custom/IndustrySolutions";
// import CardProgramLayout from "@/components/custom/ProductsCard";
// import { VehicleTrackingGrid } from "@/components/custom/ProductsGrid";
// import { ProgressiveBlurHover } from "@/components/custom/SomeTextCard";
import IndustryServices from "@/components/IndustryServices";
// import { TextEffect } from "@/components/ui/text-effect";
// import { Car } from "lucide-react";

const page = ({}) => {
	return (
		<main className="w-full min-h-screen p-6 mx-auto">
			<ProductsHeader />
			<IndustryServices />
			<IndustrySolutions />
			<div className="md:hidden flex min-h-[15vh]"></div>
			<GradientCard />

			<Faq02 />
		</main>
	);
};

export default page;
