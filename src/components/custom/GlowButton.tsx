import { GlowEffect } from "@/components/ui/glow-effect";
import { ArrowRight } from "lucide-react";

export function GlowEffectButton() {
	return (
		<div className="relative scale-200">
			<GlowEffect
				colors={["#FF5733", "#33FF57", "#3357FF", "#F1C40F"]}
				mode="colorShift"
				blur="soft"
				duration={3}
				scale={1}
			/>
			<button className="relative inline-flex items-center justify-center gap-2 rounded-md bg-zinc-950 px-6 py-2 text-sm text-zinc-50 outline outline-1 outline-[#fff2f21f] min-w-40">
				Schedule A Demo <ArrowRight className="h-4 w-4" />
			</button>
		</div>
	);
}
