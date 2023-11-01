import {
	ReactIcon,
	ReduxIcon,
	TailwindIcon,
	ExpoIcon,
	JavaIcon,
	PythonIcon,
} from "../assets/icons/library"
import ReactRouterIcon from "../assets/icons/ReactRouterIcon"
import SocketIoIcon from "../assets/icons/SocketIoIcon"
import SQLIcon from "../assets/icons/SQLIcon"

const webDevSkills = {
	"React.js": { icon: ReactIcon, fill: "#2bf1ff"},
	"Redux Toolkit": { icon: ReduxIcon, fill: "#8b4dff" },
	"Tailwind": { icon: TailwindIcon, fill: "#0089de" },
	"React Router": { icon: ReactRouterIcon },
	"Socket.io": { icon: SocketIoIcon, fill: "#d5cea3" },
	"Express.js": undefined,
	"Prisma ORM": undefined
}

const mobileDevSkills = {
	"React Native": { icon: ReactIcon, fill: "#2bf1ff" },
	"Expo": { icon: ExpoIcon, fill: "#0a0c0f" },
	"NativeBase": undefined
}

const genDevSkills = {
	"Java": { icon: JavaIcon, fill: "#ff872b" },
	"MySQL": { icon: SQLIcon, fill: "#969696" },
	"Python": { icon: PythonIcon, fill: "#3579de"}
}

function SkillsSection() {
	return (
		<section id="skills" className="flex items-center justify-center w-full h-full pt-22 snap-start">
			<div className="w-[80%]">
				<div className="w-full">
					<h1 className="text-4xl font-bold font-calibre text-beige-50">Skills</h1>
					<div className="w-full h-1 md:w-1/2 bg-coffee-300 bg-gradient-to-r from-beige-50 to-coffee-300"/>
				</div>

				<SkillSection title="Web development skills" skillMap={webDevSkills} />
				<SkillSection title="Mobile development skills" skillMap={mobileDevSkills} />
				<SkillSection title="Other related skills" skillMap={genDevSkills} />
			</div>
		</section>
	)
}

const SkillSection = ({ title="", skillMap }) => {
	return (
		<article className="mt-8 font-semibold font-calibre text-beige-50">
			<h2 className="text-lg text-beige-200">{title}</h2>

			<div className="flex flex-wrap w-full gap-2 mt-2 gap-y-3 grow">
				{
					Object.entries(skillMap).map((skill, i) => <SkillCard name={skill[0]} skillObject={skill[1]} key={i + skill[0]} />)
				}
			</div>
		</article>
	)
}

const SkillCard = ({ name="", skillObject }) => {
	const {
		fill,
		icon: Icon
	} = !skillObject ? {} : skillObject

	return (
		<div className={`relative h-12 md:h-16 text-${name.length >= 8 ? "sm" : "lg"} font-sfmono text-bold select-none group z-[1]`}>
			<div className="absolute z-0 flex items-center justify-around w-full h-full translate-y-1 rounded-xl bg-beige-50" />
			<div className="relative flex items-center justify-around h-full px-2 transition-transform md:px-4 z-1 rounded-xl bg-coffee-100 group-hover:-translate-y-1">
				<p className="text-[0.7rem] md:text-base">{name}</p>

				{
					!Icon ? <></> : (
						<Icon className="w-6 md:w-8 pl-2 min-w-[30px]" fill={fill} />
					)
				}
			</div>
		</div>
	)
}

export default SkillsSection