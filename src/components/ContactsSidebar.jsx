import {
	GmailIcon,
	GithubIcon,
	LinkedInIcon,
	CodepenIcon
} from "../assets/icons/library"

function ContactsSidebar() {
	const openTab = (e) => {
		const link = e.currentTarget.getAttribute("link")
		if(link.length > 0)
			window.open(link, "_blank")
	}

	return (
		<aside className="w-full h-10 md:w-10 md:min-h-[18rem] md:max-h-[calc(100%-4rem)] py-8 flex md:flex-col gap-y-8 justify-center items-center text-beige-100 fixed bottom-0 md:left-0 md:top-1/2 md:-translate-y-1/2 bg-coffee-100 md:rounded-r-xl font-sfmono text-xs z-[100]">
			<ContactButton link="mailto:liviucocianu@gmail.com?subject=About%20your%20portfolio" hoverText="Email" Icon={GmailIcon} onClick={openTab}/>
			<ContactButton link="https://github.com/LiviuCocianu" hoverText="Github" Icon={GithubIcon} onClick={openTab} />
			<ContactButton link="https://www.linkedin.com/in/liviu-cocianu/" hoverText="LinkedIn" Icon={LinkedInIcon} onClick={openTab} />
			<ContactButton link="https://codepen.io/LiviuCocianu" hoverText="Codepen" Icon={CodepenIcon} onClick={openTab} />
		</aside>
	)
}

const ContactButton = ({link="", hoverText, Icon, onClick}) => {
	return (
		<div link={link} onClick={onClick} className="flex flex-col items-center justify-center w-full h-6 md:flex-row group" onClick={onClick}>
			<Icon className="absolute w-6 h-6 transition-transform origin-center cursor-pointer fill-beige-100 peer group-hover:fill-beige-300 group-hover:scale-[110%]" />
			<p className="absolute invisible top-0 -translate-y-8 md:top-[initial] md:translate-y-0 md:left-0 md:translate-x-14 peer-hover:visible">{hoverText}</p>
		</div>
	)
}

export default ContactsSidebar