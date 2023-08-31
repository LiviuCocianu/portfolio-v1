import GmailIcon from '../assets/icons/GmailIcon';
import GithubIcon from '../assets/icons/GithubIcon';
import LinkedInIcon from '../assets/icons/LinkedInIcon';
import CodepenIcon from '../assets/icons/CodepenIcon';

function ContactsSidebar() {
	const openTab = (e) => {
		const link = e.currentTarget.getAttribute("link")
		if(link.length > 0)
			window.open(link, "_blank")
	}

	return (
		<div className="w-10 min-h-[18rem] max-h-[calc(100%-4rem)] py-8 flex flex-col gap-y-8 justify-center items-center text-beige-100 fixed left-0 top-1/2 -translate-y-1/2 bg-coffee-100 rounded-r-xl font-sfmono text-xs">
			<ContactButton link="mailto:liviucocianu@gmail.com?subject=About%20your%20portolio" hoverText="Email" Icon={GmailIcon} onClick={openTab}/>
			<ContactButton link="https://github.com/LiviuCocianu" hoverText="Github" Icon={GithubIcon} onClick={openTab} />
			<ContactButton link="https://www.linkedin.com/in/liviu-cocianu/" hoverText="LinkedIn" Icon={LinkedInIcon} onClick={openTab} />
			<ContactButton link="https://codepen.io/LiviuCocianu" hoverText="Codepen" Icon={CodepenIcon} onClick={openTab} />
		</div>
	)
}

const ContactButton = ({link="", hoverText, Icon, onClick}) => {
	return (
		<div link={link} onClick={onClick} className="w-6 h-6 flex items-center group" onClick={onClick}>
			<Icon className="w-6 h-6 fill-beige-100 cursor-pointer peer absolute group-hover:fill-beige-300" />
			<p className="absolute translate-x-12 invisible peer-hover:visible">{hoverText}</p>
		</div>
	)
}

export default ContactsSidebar