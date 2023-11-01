import {
    ExternalLinkIcon,
    PDFIcon,
    GoogleDriveIcon,
    GithubIcon
} from "../assets/icons/library"
import SkillTagHead from "../assets/icons/SkillTagHead"

const ProjectFile = ({
    title = "",
    subtitle = "",
    description = "",
    thumbnailURI = "",
    skillList = [],
    demoLink = "",
    githubLink = "",
    pdfLink = "",
    driveLink = ""
}) => {
    return (
        <div className="relative flex justify-center h-[26rem] md:h-[28rem]">
            {/* Papers */}
            <div className={`absolute w-[80%] h-[50%] rounded-md bg-beige-50 top-16 md:top-24 rotate-[8deg] translate-x-2 bg-contain bg-no-repeat bg-center transition-transform hover:translate-x-0 hover:rotate-0 hover:-translate-y-10 peer z-10 select-none`}>
                <img src={thumbnailURI} />
            </div>
            <div className="relative w-[80%] h-[60%] rounded-md bg-beige-200 top-16 md:top-24 rotate-[-8deg] transition-transform peer-hover:rotate-0 peer-hover:-translate-y-10 z-0" />

            {/* Info area */}
            <div className="absolute bottom-0 w-full rounded-md bg-coffee-200 pb-6 md:pb-0 md:h-[55%] z-10">
                <div className="absolute w-1/4 h-8 rounded-t-lg bg-coffee-200 -top-6" />

                <div className="flex flex-col px-5 mt-6 font-calibre">
                    <div className="flex justify-between text-beige-50">
                        <h1 className="font-bold text-md">{title}</h1>
                        <div className="flex justify-end gap-2">
                            <ProjectLink link={demoLink} Icon={ExternalLinkIcon}/>
                            <ProjectLink link={pdfLink} Icon={PDFIcon} />
                            <ProjectLink link={driveLink} Icon={GoogleDriveIcon} />
                            <ProjectLink link={githubLink} Icon={GithubIcon} />
                        </div>
                    </div>
                    <h2 className="text-[0.6rem] font-sfmono text-beige-200">{subtitle}</h2>

                    <p className="mt-4 text-sm leading-5 text-justify text-beige-300">{description}</p>

                    <div className="flex flex-wrap w-full mt-4 gap-x-1 gap-y-2">
                        {skillList.map((skill, i) => <SkillTag text={skill} key={"skilltag" + i + skill} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

const ProjectLink = ({ link, Icon }) => {
    return (
        <>
            {link.length > 0 ? (
                <a href={link} target="_blank" rel="noopener noreferrer" className="cursor-pointer"><Icon className="w-5 fill-beige-50" /></a>
            ) : <></>}
        </>
    )
}

const SkillTag = ({ text = "" }) => {
    return (
        <div className="relative flex select-none">
            <SkillTagHead className="w-4 h-5 fill-coffee-400" />
            <div className="relative h-5 px-2 text-[0.6rem] flex items-center -left-1 rounded-r-md text-beige-100 bg-coffee-400 font-sfmono">
                {text}
            </div>
        </div>
    )
}

export default ProjectFile