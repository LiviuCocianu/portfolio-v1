
export default function MainNavigation() {
	const scrollToElement = (elementId) => {
		const element = document.getElementById(elementId);
		
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	}

	return (
		<div className="fixed flex items-center justify-end w-full h-16 pr-10 space-x-8 text-sm font-sfmono text-beige-50">
			<a className="py-2 transition-transform cursor-pointer hover:translate-y-2" onClick={() => scrollToElement("introduction")}>Introduction</a>
			<a className="py-2 transition-transform cursor-pointer hover:translate-y-2">Skills</a>
			<a className="py-2 transition-transform cursor-pointer hover:translate-y-2">Projects</a>
			<a className="py-2 transition-transform cursor-pointer hover:translate-y-2">Contact</a>
		</div>
	)
}
