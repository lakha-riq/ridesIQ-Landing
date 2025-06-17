import { SolutionsHeader } from "@/components/blocks/HeadersProduct_Solution";
import SolutionCards from "@/components/blocks/SolutionsCards";
import Faq02 from "@/components/custom/FAQ";
import GradientCard from "@/components/custom/GradientCard";
import IndustrySolutions from "@/components/custom/IndustrySolutions";
import ChartsSection from "@/components/custom/InteractiveChart";




const page= ({}) => {
  return (
		<div className="w-full min-h-screen p-6 mx-auto">
			<SolutionsHeader />
			<SolutionCards />
			<IndustrySolutions />
			<div className="mb-[75vh] md:mb-0">
				<ChartsSection />
			</div>
			<div className="mt-[75vh] md:mt-0">
				<GradientCard />
			</div>
			<Faq02 />
		</div>
  );
}

export default page;