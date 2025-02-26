import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
export default function GradientCard() {
	return (
		<div className="md:px-20">
			<div className="md:min-h-[70vh] min-h-[50vh] w-full relative rounded-lg bg-gradient-to-b from-[#678FCA] via-[#485F8A] to-[#1E1E1E]">
				<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-lg" />

				<div className="h-full w-full p-8 flex items-center justify-center relative">
					<Card className="w-full max-w-6xl bg-white/10 backdrop-blur-sm border-white/30">
						<CardContent className="p-8">
							<div className="flex flex-col gap-20 h-full">
								<div className="flex justify-between items-start mb-9">
									<div className="space-y-6">
										<p className="text-white/80">Better together</p>
										<h2 className="text-xl md:text-4xl font-medium text-white max-w-xl leading-tight">
											RidesIQ delivers comprehensive fleet management solutions to transform your business operations
										</h2>
									</div>
									<Link href="/contact">
										<Button
											size="icon"
											variant="secondary"
											className="bg-white/10 hover:bg-white/20 text-white"
										>
											<ArrowUpRight className="h-5 w-5" />
										</Button>
									</Link>
								</div>
								<div className="flex flex-wrap gap-6 justify-between items-center mt-auto pt-4">
									<div className="flex gap-3">
										<Button
											variant="secondary"
											className="bg-white/10 hover:bg-white/20 text-white rounded-full"
										>
											Innovation
										</Button>
										<Button
											variant="secondary"
											className="bg-white/10 hover:bg-white/20 text-white rounded-full"
										>
											Expertise
										</Button>
									</div>
									<Link href="/contact" className="w-full sm:w-auto">
										<Button  className="w-full ">Book a demo</Button>
									</Link>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
