import {
	HTMLIcon,
	CSSIcon,
	JavascriptIcon, 
	ReactIcon,
	ReduxIcon,
	TailwindIcon,
	SassIcon,
	ExpoIcon,
	JavaIcon,
	PythonIcon
} from "../assets/icons/library"
import SQLIcon from "../assets/icons/SQLIcon"

const webDevSkills = {
	"HTML": HTMLIcon,
	"CSS": CSSIcon,
	"JavaScript": JavascriptIcon,
	"React.js": ReactIcon,
	"Redux.js": ReduxIcon,
	"TailwindCSS": TailwindIcon,
	"SCSS": SassIcon
}

const mobileDevSkills = {
	"React Native": ReactIcon,
	"Expo": ExpoIcon
}

const genDevSkills = {
	"Java": JavaIcon,
	"SQL": SQLIcon,
	"Python": PythonIcon
}

function SkillsSection() {
	return (
		<section id="skills" className="flex items-center justify-center w-full h-full snap-start">
			<div className="w-[80%]">
				<div className="w-full">
					<h1 className="text-4xl font-bold font-calibre text-beige-50">Skills</h1>
					<div className="w-1/2 h-1 bg-beige-50 bg-gradient-to-r from-beige-50 to-coffee-300"/>
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
					Object.entries(skillMap).map((skill, i) => <SkillCard name={skill[0]} Icon={skill[1]} key={i + skill[0]} />)
				}
			</div>
		</article>
	)
}

const SkillCard = ({ name="", Icon }) => {
	return (
		<div className={`relative h-16 text-${name.length >= 8 ? "sm" : "lg"} font-sfmono text-bold select-none group`}>
			<div className="absolute z-[-1] flex items-center justify-around w-full h-full translate-y-1 rounded-xl bg-beige-50" />
			<div className="flex items-center justify-around h-full px-4 transition-transform rounded-xl bg-coffee-100 group-hover:-translate-y-1">
				<p>{name}</p>
				<Icon className="w-8 pl-2 min-w-[30px] fill-beige-100"/>
			</div>
		</div>
	)
}

export default SkillsSection