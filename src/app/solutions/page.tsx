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
			<div className="sm:mb-screen">
				<ChartsSection />
			</div>
			<div className="md:hidden flex min-h-[15vh]"></div>
			<GradientCard />
			<Faq02 />
		</div>
  );
}

export default page;