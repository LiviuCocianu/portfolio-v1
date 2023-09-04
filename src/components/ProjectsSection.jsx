import ProjectFile from "./ProjectFile"

function ProjectsSection() {
	return (
		<section id="projects" className="flex justify-center w-full min-h-full pt-28 md:pt-[5%] snap-start">
			<div className="w-[85%] flex flex-col justify-center">
				<div className="w-full">
					<h1 className="text-4xl font-bold font-calibre text-beige-50">Projects</h1>
					<div className="w-full h-1 md:w-1/2 bg-coffee-300 bg-gradient-to-r from-beige-50 to-coffee-300" />
				</div>

				<div className="grid grid-cols-[repeat(auto-fit,100%)] md:grid-cols-[repeat(auto-fit,20rem)] gap-4 mt-4">
					<ProjectFile
						title="Soundure"
						subtitle="February 2023 - July 2023"
						description="Standalone music player made using React Native with Expo. NativeBase was used for building the UI and Redux for state management"
						thumbnailURI="./assets/images/soundure.png"
						skillList={["React Native", "Expo", "Redux", "NativeBase", "SQLite"]}
						pdfLink="./assets/documents/soundure_preview.pdf"
						githubLink="https://github.com/LiviuCocianu/soundure"
						driveLink="https://drive.google.com/drive/folders/1AJvdtAOeotfFaPB6cekCwQ-jja-erjzP?usp=sharing"
					/>

					<ProjectFile 
						title="Raster Image Editor"
						subtitle="November 2022 - January 2023"
						description="Simple photo editor for raster images. No frameworks or libraries were used for this project"
						thumbnailURI="./assets/images/raster-editor.png"
						skillList={["HTML", "CSS", "JavaScript"]}
						demoLink="https://liviucocianu.github.io/raster-image-editor/4_1082_COCIANU_LIVIU_IONUT.html"
						githubLink="https://github.com/LiviuCocianu/raster-image-editor"
					/>
				</div>
			</div>
		</section>
	)
}

export default ProjectsSection