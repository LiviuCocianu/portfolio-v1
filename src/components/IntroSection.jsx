import Timeline from "./Timeline"

function IntroSection() {
	return (
		<section id="introduction" className="flex justify-center w-full snap-start">
			<div className="w-[70%]">
				<div className="grid justify-center w-full grid-cols-[60%_40%] py-20">
					<div className="pr-8 space-y-6 text-justify text-beige-200">
						<h1 className="text-4xl font-bold font-calibre text-beige-50">Introduction</h1>

						<p className="mt-1">
							<b>Hello there! I’m Liviu.</b> My passion for creating has begun from a very young age in the form of drawing or doing origami. The act of bringing what you envision from your mind and into the world, with your own hands, brought me the biggest amount of joy and satisfaction! <span className="text-xs">(and it still does)</span>
						</p>

						<p>
							Quickly going off on a tangent, my very first encounter with the world of programming was through this game called Minecraft in 2014. You can create many things inside of it, even alter the logic of the gameplay through in-game commands, acting as its own “programming language”. The idea is that this game is what ignited my passion for programming!
						</p>

						<p>
							Later on, in 2017, I’ve heard about “plugins”: these little jar files you can use to alter the game with less limitations, using the <span className="text-yellow-300 hover:animate-pulse">Java</span> programming language. I’ve had my fair share of opportunities to improve my Java knowledge and privately create plugins for multiple Minecraft communities, some paid, while some not.
						</p>

						<p>
							In the meantime, around 2019, I took interest in web development for the first time and learned the basics, thanks to freeCodeCamp, but it wasn’t something I’d envision myself doing back then, so I just kept pushing forward with Java, thought I’ve had some bursts of motivation here in there to learn new technologies, such as <span className="text-yellow-300 hover:animate-pulse">jQuery</span>, <span className="text-yellow-300 hover:animate-pulse">React</span> and <span className="text-yellow-300 hover:animate-pulse">Redux</span>.
						</p>

						<p>
							My plugin development journey ended around 2022, as I wanted to focus more on my studies at <span className="text-yellow-300 hover:animate-pulse">The Bucharest University of Economic Studies</span>, where my passion for web development has awoken once again alongside a brand new set of skills, eventually graduating with flying colors in 2023!
						</p>
					</div>

					<div className="flex flex-col items-center select-none">
						<img className="w-[60%] aspect-square max-w-[14rem] mb-12" src="./assets/images/about.png" alt="Portrait of me in introduction section" />
						<Timeline/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default IntroSection