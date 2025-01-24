
import { Button } from "@/components/ui/button";
import { TextEffect } from "../ui/text-effect";

export default function HeroSection() {
	return (
		<div className="bg-black text-white min-h-screen flex items-center">
			<div className="container px-4 py-12 md:py-24">
				<div className="grid md:grid-cols-5 gap-20 items-end justify-around ">
					<div className="col-span-3">
						<TextEffect
							per="word"
							as="h3"
							preset="blur"
							className="text-md uppercase tracking-wider mb-4 font-sans text-gray-400"
						>
							Carbon neutral way to track cars.
						</TextEffect>
						<h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6 font-sans ">IOT Rides Web. With some text</h1>
					</div>
					<div className="space-y-6 col-span-2   ">
						<p className="text-sm md:text-md ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. In mollitia, voluptas voluptatibus, facilis perspiciatis, accusantium natus amet sapiente nobis quia dolorum. Quos, provident?</p>
						<Button
							size="lg"
                            className="w-full md:w-auto "
                            variant={"secondary"}
						>
							Book a demo
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
