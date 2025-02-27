"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import colors from "tailwindcss/colors";

export const TextHoverEffect = ({ text, duration }: { text: string; duration?: number }) => {
	const svgRef = useRef<SVGSVGElement>(null);
	const [cursor, setCursor] = useState({ x: 0, y: 0 });
	const [hovered, setHovered] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.matchMedia("(max-width: 768px)").matches);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);

		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	useEffect(() => {
		if (svgRef.current && cursor.x !== null && cursor.y !== null) {
			const svgRect = svgRef.current.getBoundingClientRect();
			const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
			const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
			setMaskPosition({
				cx: `${cxPercentage}%`,
				cy: `${cyPercentage}%`,
			});
		
		}
	}, [cursor]);

	return (
		<svg
			ref={svgRef}
			width="100%"
			height="100%"
			viewBox="0 0 300 100"
			xmlns="http://www.w3.org/2000/svg"
			onMouseEnter={() => !isMobile && setHovered(true)}
			onMouseLeave={() => !isMobile && setHovered(false)}
			onMouseMove={(e) => !isMobile && setCursor({ x: e.clientX, y: e.clientY })}
			className="select-none"
		>
			<defs>
				<linearGradient
					id="textGradient"
					gradientUnits="userSpaceOnUse"
					x1="0%"
					y1="0%"
					x2="100%"
					y2="0%"
				>
					{(hovered || isMobile) && (
						<>
							<stop
								offset="0%"
								stopColor={colors.yellow[500]}
							>
								{isMobile && (
									<animate
										attributeName="offset"
										values="0;0.25;0.5;0.75;1;0"
										dur="5s"
										repeatCount="indefinite"
									/>
								)}
							</stop>
							<stop
								offset="25%"
								stopColor={colors.red[500]}
							>
								{isMobile && (
									<animate
										attributeName="offset"
										values="0.25;0.5;0.75;1;0;0.25"
										dur="5s"
										repeatCount="indefinite"
									/>
								)}
							</stop>
							<stop
								offset="50%"
								stopColor={colors.blue[500]}
							>
								{isMobile && (
									<animate
										attributeName="offset"
										values="0.5;0.75;1;0;0.25;0.5"
										dur="5s"
										repeatCount="indefinite"
									/>
								)}
							</stop>
							<stop
								offset="75%"
								stopColor={colors.cyan[500]}
							>
								{isMobile && (
									<animate
										attributeName="offset"
										values="0.75;1;0;0.25;0.5;0.75"
										dur="5s"
										repeatCount="indefinite"
									/>
								)}
							</stop>
							<stop
								offset="100%"
								stopColor={colors.violet[500]}
							>
								{isMobile && (
									<animate
										attributeName="offset"
										values="1;0;0.25;0.5;0.75;1"
										dur="5s"
										repeatCount="indefinite"
									/>
								)}
							</stop>
						</>
					)}
				</linearGradient>

				<motion.radialGradient
					id="revealMask"
					gradientUnits="userSpaceOnUse"
					r={isMobile ? "100%" : "20%"}
					animate={isMobile ? { cx: "50%", cy: "50%" } : maskPosition}
					transition={{ duration: duration ?? 0, ease: "easeOut" }}
				>
					<stop
						offset="0%"
						stopColor="white"
					/>
					<stop
						offset="100%"
						stopColor="black"
					/>
				</motion.radialGradient>
				<mask id="textMask">
					<rect
						x="0"
						y="0"
						width="100%"
						height="100%"
						fill="url(#revealMask)"
					/>
				</mask>
			</defs>
			<text
				x="50%"
				y="50%"
				textAnchor="middle"
				dominantBaseline="middle"
				strokeWidth="0.3"
				className="font-[helvetica] font-bold stroke-neutral-200 dark:stroke-neutral-800 fill-transparent text-7xl"
				style={{ opacity: hovered || isMobile ? 0.7 : 0 }}
			>
				{text}
			</text>
			<motion.text
				x="50%"
				y="50%"
				textAnchor="middle"
				dominantBaseline="middle"
				strokeWidth="0.3"
				className="font-[helvetica] font-bold fill-transparent text-7xl stroke-neutral-200 dark:stroke-neutral-800"
				initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
				animate={{
					strokeDashoffset: 0,
					strokeDasharray: 1000,
				}}
				transition={{
					duration: 4,
					ease: "easeInOut",
				}}
			>
				{text}
			</motion.text>
			<text
				x="50%"
				y="50%"
				textAnchor="middle"
				dominantBaseline="middle"
				stroke="url(#textGradient)"
				strokeWidth="0.3"
				mask="url(#textMask)"
				className="font-[helvetica] font-bold fill-transparent text-7xl"
			>
				{text}
			</text>
		</svg>
	);
};
