// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { ArrowUpRight } from "lucide-react";

// export default function GradientCard() {
// 	return (
// 		<div className="md:px-20">
// 			<div
// 				className="md:min-h-[70vh] min-h-[50vh] w-full relative bg-cover bg-center bg-no-repeat rounded-lg "
// 				style={{
// 					backgroundImage: 'url("/bg.png")',
// 				}}
// 			>
// 				<div className="h-full w-full p-8 flex items-center justify-center">
// 					<Card className="w-full max-w-2xl bg-white/10 backdrop-blur-sm border-white/20">
// 						<CardContent className="p-8">
// 							<div className="flex justify-between items-start">
// 								<div className="space-y-6">
// 									<p className="text-white/80">Better together</p>
// 									<h2 className="text-3xl md:text-4xl font-medium text-white max-w-xl leading-tight">
// 										Rides Iq is building a suite of embedded Tracking products to deliver seamless solutions for your customers
// 									</h2>
// 									<div className="flex gap-3 pt-4">
// 										<Button
// 											variant="secondary"
// 											className="bg-white/10 hover:bg-white/20 text-white"
// 										>
// 											Innovation
// 										</Button>
// 										<Button
// 											variant="secondary"
// 											className="bg-white/10 hover:bg-white/20 text-white"
// 										>
// 											Expertise
// 										</Button>
// 									</div>
// 								</div>
// 								<Button
// 									size="icon"
// 									variant="ghost"
// 									className="text-white hover:bg-white/10"
// 								>
// 									<ArrowUpRight className="h-5 w-5" />
// 								</Button>
// 							</div>
// 							<div className="flex justify-end mt-20">
// 								<Button className="bg-white/20 hover:bg-white/30 text-white">Book a demo</Button>
// 							</div>
// 						</CardContent>
// 					</Card>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }



import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

export default function GradientCard() {
	return (
		<div className="md:px-20">
			<div className="md:min-h-[70vh] min-h-[50vh] w-full relative rounded-lg bg-gradient-to-b from-[#678FCA] via-[#485F8A] to-[#1E1E1E]">
				{/* Add a subtle overlay gradient for more depth */}
				<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-lg" />

				<div className="h-full w-full p-8 flex items-center justify-center relative">
					<Card className="w-full max-w-6xl bg-white/10 backdrop-blur-sm border-white/30">
						<CardContent className="p-8">
							<div className="flex justify-between items-start">
								<div className="space-y-9">
									<p className="text-white/80">Better together</p>
									<h2 className="text-3xl md:text-4xl font-medium text-white max-w-xl leading-tight">
										Rides Iq is building a suite of embedded Tracking products to deliver seamless solutions for your customers
									</h2>
									<div className="flex gap-3 pt-4">
										<Button
											variant="secondary"
											className="bg-white/10 hover:bg-white/20 text-white"
										>
											Innovation
										</Button>
										<Button
											variant="secondary"
											className="bg-white/10 hover:bg-white/20 text-white"
										>
											Expertise
										</Button>
									</div>
								</div>
								<Button
									size="icon"
									variant="ghost"
									className="text-white hover:bg-white/10"
								>
									<ArrowUpRight className="h-5 w-5" />
								</Button>
							</div>
							<div className="flex justify-end mt-20">
								<Button className="bg-white/20 hover:bg-white/30 text-white">Book a demo</Button>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}

