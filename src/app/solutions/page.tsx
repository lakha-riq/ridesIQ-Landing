import { FleetHero } from "@/components/blocks/HeadersProduct_Solution";
import SolutionCards from "@/components/blocks/SolutionsCards";




const page= ({}) => {
  return <div className="w-full min-h-screen p-6 mx-auto">
    <FleetHero/>
    <SolutionCards/>
  </div>
}

export default page;