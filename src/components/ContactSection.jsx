function ContactSection() {
	return (
		<section id="contact" className="flex justify-center w-full h-full">
			<div className="w-full md:w-[85%] flex justify-center items-center">
				{/* Board */}
				<div className="-translate-y-12 md:-translate-y-[10%] w-full md:w-[90%] h-[60%] max-h-[30rem] bg-beige-300 flex justify-center items-center">
					<div className="relative w-full md:w-[98%] h-[97%] bg-coffee-100 flex justify-center font-chawp text-coffee-300 text-xl">
						<span className="absolute top-4 md:left-10 md:top-36 rotate-[10deg] select-none">Made with tailwind</span>
						<span className="absolute left-40 bottom-28 -rotate-[25deg] select-none">Backend-free</span>
						<span className="absolute left-0 top-1/2 md:left-[initial] md:right-10 md:top-20 rotate-[8deg] select-none">Create!</span>
						<span className="absolute right-40 top-44 -rotate-[10deg] select-none">E = mc2</span>

						{/* Marker */}
						<div className="absolute bottom-0 right-0 flex bg-white md:bottom-0 md:right-20">
							<div className="w-1 h-2 bg-coffee-400" />
							<div className="w-8 h-2 bg-white" />
							<div className="w-4 h-2 bg-coffee-400" />
						</div>

						{/* Paper */}
						<div className="absolute pb-4 w-[85%] md:w-[24rem] bg-beige-50 top-[10%] flex justify-center">
							{/* Pushpins */}
							<div className="absolute w-6 h-6 rounded-full bg-coffee-400 left-4 top-4">
								<div className="absolute w-4 h-4 rounded-full bg-coffee-200"/>
							</div>
							<div className="absolute w-6 h-6 rounded-full bg-coffee-400 right-4 top-4">
								<div className="absolute w-4 h-4 rounded-full bg-coffee-200" />
							</div>

							<div className="w-[80%] h-full pt-12">
								<div className="flex flex-col items-center w-full">
									<h1 className="text-xl font-bold leading-4 font-calibre text-coffee-200">Contact form</h1>
									<h2 className="text-xs font-calibre text-coffee-200">Let&apos;s get in touch!</h2>
								</div>

								{/* Form */}
								<form action="https://formsubmit.co/35743066fdb9ef0ebecbef6f4d8f719d" method="POST" className="relative flex flex-col items-center h-full gap-6 pt-6 text-base font-calibre text-coffee-200" spellCheck={false}>
									{/* Honeypot */}
									<input type="text" name="_honey" className="hidden"/>

									{/* FormSubmit settings */}
									<input type="hidden" name="_template" value="box"></input>
									{/* <input type="hidden" name="_captcha" value="false"></input> */}
									<input type="hidden" name="_subject" value="Portfolio contact!"></input>

									<div className="w-full">
										<label htmlFor="nameInput">Name</label><br />
										<input className="w-full bg-transparent border-dotted border-coffee-200/50 [border-bottom-width:2px] focus:outline-0" id="nameInput" name="Name" type="text" required/>
									</div>
									
									<div className="w-full">
										<label htmlFor="emailInput">Email</label><br />
										<input className="w-full bg-transparent border-dotted border-coffee-200/50 [border-bottom-width:2px] focus:outline-0" id="emailInput" name="Email" type="email" required />
									</div>

									<div className="w-full">
										<label htmlFor="messageInput">Message</label><br />
										<textarea className="w-full p-2 bg-transparent border-2 border-dotted resize-none h-28 border-coffee-200/50 focus:outline-0" name="Message" id="messageInput" required />
									</div>

									<div className="relative bottom-0 w-1/2 h-8 group">
										<div className="absolute w-full h-full rounded-md bg-coffee-500"/>
										<button className="absolute w-full h-full text-xs transition-transform -translate-y-1 rounded-md bg-coffee-300 text-beige-50 font-sfmono group-hover:translate-y-0">Submit</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactSection