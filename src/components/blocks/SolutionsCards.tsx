
export default function SolutionCards() {
  const ListElm = ({ text }: { text: string }) => <li className="before:content-['•'] before:text-blue-400 before:inline-block before:mr-2 before:leading-6">{text}</li>;

	return (
		<div className="min-h-screen bg-black text-white p-6 md:p-12">
			<div className="max-w-7xl mx-auto">
				<h1 className="uppercase font-light opacity-50 mb-10 tracking-tighter">platform features</h1>
				<h2 className="text-2xl md:text-4xl font-medium  mb-12 max-w-4xl ">
					Streamline your fleet operations with integrated tracking, analytics, and automated toll management in one powerful platform.
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[50vh]">
					{/* Card 1 */}
					<div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 p-6 transition-all duration-300 hover:shadow-xl">
						<div className="absolute top-4 left-4 text-sm font-medium opacity-70">01</div>
						<div className="mt-8">
							<h3 className="text-xl font-semibold mb-2">Real-Time Fleet Visibility</h3>
              <ul className="text-sm opacity-0 translate-y-8 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <ListElm text="Track driver behavior, fuel consumption, and maintenance schedules." />
                <ListElm text="Monitor fleet performance and efficiency." />
                <ListElm text="Optimize fleet operations with automated toll management." />
							</ul>
						</div>
					</div>

					{/* Card 2 */}
					<div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-400 to-teal-400 p-6 transition-all duration-300 hover:shadow-xl">
						<div className="absolute top-4 left-4 text-sm font-medium opacity-70">02</div>
						<div className="mt-8">
							<h3 className="text-xl font-semibold mb-2">Safety & Analytics</h3>
              <ul className="text-sm opacity-0 translate-y-8 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <ListElm text="Monitor driver behavior and safety compliance." />
                <ListElm text="Analyze fleet performance and optimize routes." />
                <ListElm text="Reduce fuel consumption and maintenance costs."/>
							</ul>
						</div>
					</div>

					{/* Card 3 */}
					<div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 p-6 transition-all duration-300 hover:shadow-xl">
						<div className="absolute top-4 left-4 text-sm font-medium opacity-70">03</div>
						<div className="mt-8">
							<h3 className="text-xl font-semibold mb-2">Comprehensive Reports</h3>
              <ul className="text-sm opacity-0 translate-y-8 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <ListElm text="Generate detailed reports on fleet performance and efficiency." />
                <ListElm text="Analyze driver behavior and safety compliance." />
                <ListElm text="Monitor fuel consumption and maintenance costs."/>
							</ul>
						</div>
					</div>

					{/* Card 4 */}
					<div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-400 to-teal-300 p-6 transition-all duration-300 hover:shadow-xl">
						<div className="absolute top-4 left-4 text-sm font-medium opacity-70">04</div>
						<div className="mt-8">
							<h3 className="text-xl font-semibold mb-2">Automated Toll Management</h3>
              <ul className="text-sm opacity-0 translate-y-8 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <ListElm text="Automate toll payments and reduce administrative overhead." />
                <ListElm text="Monitor toll expenses and optimize routes." />
                <ListElm text="Reduce fuel consumption and maintenance costs."/>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
