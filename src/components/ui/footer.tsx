
import Link from "next/link";


const Footer = ({}) => {
	return (
		<div className="w-full  h-[70vh] ">
			<div className="flex flex-col items-center">
				<h1 className={"md:text-[14rem] text-[4rem] text-center w-[90vw] font-extrabold tracking-tighter text-[#555555] border-b border-[#555555]    "}>IoT Rides.</h1>
				<div className="w-[90vw] flex items-center  justify-around flex-wrap pt-2 text-[#555555] font-bold">
					<div className={"text-start w-full " }>
						{"Copyright © "}
						<Link
							href={""}
							className="text-[#6f6e6e] p-1 "
						>
							{"Canada"}
						</Link>
						operational in 
						<Link
							href={"#"}
							className="text-[#6f6e6e] p-1 "
						>
							{"North America"}
						</Link>
					</div>
					
				</div>
			</div>
		</div>
	);
};

export default Footer;
