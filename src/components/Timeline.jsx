import { useState } from "react"

function Timeline() {
	const [nodes, setNodes] = useState([
		{
			year: 2014,
			label: "Encountered programming"
		},
		{
			year: 2017,
			label: "Minecraft plugin developer phase"
		},
		{
			year: 2019,
			label: "First web development experience"
		},
		{
			year: 2023,
			label: "Graduated college"
		}
	])

	return (
		<div className="relative w-full h-full">
			<div className="absolute left-[calc(50%-0.125rem)] w-1 h-full bg-coffee-300 bg-gradient-to-b from-coffee-300 via-coffee-100 to-coffee-300"/>
			{
				nodes.toReversed().map((el, i) => <Node node={el} index={i} key={i + el.label[0]}/>)
			}
		</div>
	)
}

const Node = ({node, index}) => {
	return (
		<div className="grid items-center w-full grid-cols-3 px-4 my-16 text-beige-100 group">
			<p className={`text-end transition-transform group-hover:scale-[80%] group-hover:translate-x-4 md:group-hover:translate-x-8${index % 2 != 0 ? " font-calibre" : " font-sfmono text-sm text-beige-300"}`}>{index % 2 != 0 ? node.label : node.year}</p>

			<div className="z-[1] flex justify-center group-hover:scale-[120%] transition-transform">
				<div className="h-10 rounded-full bg-beige-50 aspect-square"></div>
			</div>

			<p className={`text-start transition-transform group-hover:scale-[80%] group-hover:-translate-x-4 md:group-hover:-translate-x-8${index % 2 == 0 ? " font-calibre" : " font-sfmono text-sm text-beige-300"}`}>{index % 2 == 0 ? node.label : node.year}</p>
		</div>
	)
}

export default Timeline