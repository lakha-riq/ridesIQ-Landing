"use client";

import React, { useRef, type ReactNode } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
import { wrap } from "@motionone/utils";
import { cn } from "@/lib/utils";

type MarqueeAnimationProps = {
	children: ReactNode;
	className?: string;
	direction?: "left" | "right";
	baseVelocity: number;
};

export default function MarqueeAnimation({ children, className, direction = "left", baseVelocity = 10 }: MarqueeAnimationProps) {
	const baseX = useMotionValue(0);
	const { scrollY } = useScroll();
	const scrollVelocity = useVelocity(scrollY);
	const smoothVelocity = useSpring(scrollVelocity, {
		damping: 50,
		stiffness: 400,
	});
	const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 0], {
		clamp: false,
	});

	const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

	const directionFactor = useRef<number>(1);
	useAnimationFrame((t, delta) => {
		let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

		if (direction == "left") {
			directionFactor.current = 1;
		} else if (direction == "right") {
			directionFactor.current = -1;
		}

		moveBy += directionFactor.current * moveBy * velocityFactor.get();

		baseX.set(baseX.get() + moveBy);
	});

	const content = React.Children.toArray(children);

	return (
		<div className="overflow-hidden max-w-[100vw] text-nowrap flex-nowrap flex relative">
			<motion.div
				className={cn("font-bold uppercase text-5xl flex flex-nowrap text-nowrap", className)}
				style={{ x }}
			>
				{[...Array(4)].map((_, index) => (
					<React.Fragment key={index}>
						{React.Children.map(content, (child, childIndex) => (
							<div
								key={childIndex}
								className="me-10"
							>
								{child}
							</div>
						))}
					</React.Fragment>
				))}
			</motion.div>
		</div>
	);
}
