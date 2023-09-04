
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
		<nav className="fixed flex items-center justify-center w-full h-16 space-x-4 text-xs md:justify-end md:space-x-8 md:pr-10 md:text-sm z-[100] font-sfmono text-beige-50">
			<a className="py-2 transition-transform cursor-pointer z-100 hover:translate-y-2" onClick={() => scrollToElement("introduction")}>Introduction</a>
			<a className="py-2 transition-transform cursor-pointer z-100 hover:translate-y-2" onClick={() => scrollToElement("skills")}>Skills</a>
			<a className="py-2 transition-transform cursor-pointer z-100 hover:translate-y-2" onClick={() => scrollToElement("projects")}>Projects</a>
			<a className="py-2 transition-transform cursor-pointer z-100 hover:translate-y-2" onClick={() => scrollToElement("contact")}>Contact</a>
		</nav>
	)
}
