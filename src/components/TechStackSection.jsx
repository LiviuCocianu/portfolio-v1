import { useEffect, useState } from "react"
import PictogramersIcon from "../assets/icons/PictogramersIcon"

function TechStackSection() {
	const [techStackSections, setTechStackSections] = useState([]);
	const baseDoc = `https://docs.google.com/spreadsheets/d/1OK0YcyHoYtDsm_pNlqRPgqL8jTtsaskYvmvExxz6Uho/gviz/tq?`;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const query = encodeURIComponent(`SELECT *`);
				const itemsURL = `${baseDoc}&sheet=tech-items&tq=${query}`;
				const sectionsURL = `${baseDoc}&sheet=tech-stack-sections&tq=${query}`;

				// Fetch tech stack sections and each section item
				const [resItems, resSections] = await Promise.all([
					fetch(itemsURL).then(res => res.text()),
					fetch(sectionsURL).then(res => res.text())
				]);

				const parseResJson = (text) => JSON.parse(text.substring(text.indexOf("{"), text.lastIndexOf("}") + 1));
				
				const jsonItems = parseResJson(resItems);
				const jsonSections = parseResJson(resSections);

				// A measure in case I decide to change column order in the spreadsheets later on
				// .. for tech items
				const itemHeaders = jsonItems.table.cols.map(c => c.label ? c.label.trim() : "");
				const indexesItems = {
					label: itemHeaders.indexOf("label"),
					iconSvgD: itemHeaders.indexOf("icon-svg-d"),
					iconViewbox: itemHeaders.indexOf("icon-viewbox"),
					iconColor: itemHeaders.indexOf("icon-color"),
					hasSoonLabel: itemHeaders.indexOf("has-soon-label"),
					sectionId: itemHeaders.indexOf("section-id")
				};

				const rawItems = jsonItems.table.rows.map(row => ({
					label: row.c[indexesItems.label]?.v || "",
					iconSvgD: row.c[indexesItems.iconSvgD]?.v || "",
					iconViewbox: row.c[indexesItems.iconViewbox]?.v || undefined,
					iconColor: row.c[indexesItems.iconColor]?.v || "",
					hasSoonLabel: row.c[indexesItems.hasSoonLabel]?.v || false,
					sectionId: row.c[indexesItems.sectionId]?.v
				}));

				// .. for tech sections
				const secHeaders = jsonSections.table.cols.map(c => c.label ? c.label.trim() : "");
				const indexesSec = {
					id: secHeaders.indexOf("id"),
					sectionTitle: secHeaders.indexOf("section-title")
				};

				// Join tech items with each of their sections
				const unifiedSections = jsonSections.table.rows.map(row => {
					// ID must always be defined, so we assume it exists
					const id = row.c[indexesSec.id].v;
					
					return {
						id,
						// Title must always be defined, so we assume it exists
						title: row.c[indexesSec.sectionTitle].v || "",
						items: rawItems
							.filter(item => item.sectionId == id)
							// Ditch the section ID..
							.map(({ sectionId, ...rest }) => rest)
					};
				});

				setTechStackSections(unifiedSections);
			} catch (error) {
				console.error("Failed to map spreadsheet data: ", error);
			}
		};

		fetchData();
	}, []);

	return (
		<section id="techstack" className="flex items-center justify-center w-full 2xl:h-full snap-start pt-16 pb-4 2xl:pt-0 2xl:pb-0">
			<div className="w-[80%]">
				<div className="w-full">
					<h1 className="text-4xl font-bold font-calibre text-beige-50">Technology stack</h1>
					<div className="w-full h-1 md:w-1/2 bg-coffee-300 bg-gradient-to-r from-beige-50 to-coffee-300"/>
				</div>
				{
					techStackSections.map((section, i) => (
						<TechSubsection title={section.title} techMap={section.items} key={section.id || i}/>
					))
				}
			</div>
		</section>
	);
}

const TechSubsection = ({ title="", techMap }) => {
	return (
		<article className="mt-8 font-semibold font-calibre text-beige-50">
			<h2 className="text-lg text-beige-200">{title}</h2>

			<div className="flex flex-wrap w-full gap-2 mt-2 gap-y-3 grow">
				{
					techMap.map((tech, i) => {
						const {label, ...rest} = tech;
						return <TechCard name={label} techObject={rest} key={i + label} />
					})
				}
			</div>
		</article>
	)
}

const TechCard = ({ name="", techObject }) => {
	const {
		iconSvgD,
		iconColor,
		iconViewbox="0 0 24 24",
		hasSoonLabel=false
	} = !techObject ? {} : techObject

	return (
		<div className={`relative h-12 md:h-16 text-${name.length >= 8 ? "sm" : "lg"} font-sfmono text-bold select-none group z-[1]`}>
			<div className="absolute z-0 flex items-center justify-around w-full h-full translate-y-1 rounded-xl bg-beige-50" />
			<div className="relative flex items-center justify-around h-full px-2 transition-transform md:px-4 z-1 rounded-xl bg-coffee-100 group-hover:-translate-y-1">
				<p className="text-[0.7rem] md:text-base">{name}</p>

				{
					!iconSvgD ? <></> : (
						<PictogramersIcon d={iconSvgD} className="w-6 md:w-8 pl-2 min-w-[30px]" fill={iconColor} viewBox={iconViewbox} />
					)
				}

				{
					hasSoonLabel ? <span className="text-xs text-beige-300">&nbsp;(soon)</span> : ""
				}
			</div>
		</div>
	)
}

export default TechStackSection