function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="flex justify-center w-full pb-20 md:pb-0 h-1/5">
			<div className="flex flex-col justify-center h-full font-calibre text-beige-200">
				<h1 className="text-lg font-bold">Thanks for reading!</h1>
				<h2 className="text-xs text-center">Liviu Cocianu © {year}</h2>
			</div>
		</footer>
	)
}

export default Footer