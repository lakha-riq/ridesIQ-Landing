import React, { FC } from "react";
import { CreditCard, Clock, Activity, Wallet } from "lucide-react";

interface CardProgramLayoutInterface {
	title: string;
	subtitle: string;
	description: string;
	rightContent: React.ReactNode;
}

const CardProgramLayout: FC<CardProgramLayoutInterface> = ({
	title = "A friendly card program designed with your customers in mind",
	subtitle = "CUSTOMER FRIENDLY",
	description = "Give your customers more flexibility with their cash flow while handling day-to-day business expenses, with additional benefits including:",
	rightContent,
}) => {
	const benefits = [
		{
			icon: <CreditCard className="w-6 h-6 text-slate-100" />,
			text: "No annual fees, no personal guarantees, no credit checks",
		},
		{
			icon: <Clock className="w-6 h-6 text-slate-100" />,
			text: "Up to 45 days to pay for everyday business expenses",
		},
		{
			icon: <Activity className="w-6 h-6 text-slate-100" />,
			text: "Unlimited virtual and physical cards with custom spend rules",
		},
		{
			icon: <Wallet className="w-6 h-6 text-slate-100" />,
			text: "Cash back earned for every purchase**",
		},
	];

	return (
		<div className="min-h-screen w-full flex items-center justify-center  md:p-6">
			<div className="w-full max-w-7xl mx-auto">
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
					{/* Left Content */}
					<div className="flex flex-col space-y-2 md:space-y-8">
						<span className="text-slate-200 text-sm tracking-wider uppercase">{subtitle}</span>

						<h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">{title}</h1>

						<p className="text-slate-100 text-base sm:text-lg">{description}</p>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							{benefits.map((benefit, index) => (
								<div
									key={index}
									className="flex items-center gap-2 text-wrap  col-span-1 "
								>
									<div className="bg-slate-500/30 p-2 rounded-lg shrink-0">{benefit.icon}</div>
									<p className="text-slate-100 text-xs sm:text-xs text-wrap">{benefit.text}</p>
								</div>
							))}
						</div>
					</div>

					{/* Right Content */}
					<div className="relative w-full max-w-md mx-auto lg:mx-0 mt-8 lg:mt-0">{rightContent}</div>
				</div>
			</div>
		</div>
	);
};

export default CardProgramLayout;
