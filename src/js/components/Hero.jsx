import React from "react";

export const Hero = () => {
	return (
	<div className="container-fluid mt-4">
		<div className="bg-light p-5 rounded mx-3">
			<div className="container">
				<h1 className="display-3 text-start">The Game Awards</h1>
				<p className="lead text-start">The Game Awards es una ceremonia anual de entrega de premios en honor a los logros en la industria de los videojuegos. Creados en 2014, los premios son producidos y presentados por el periodista Geoff Keighley.</p>
			    <a className="btn btn-primary btn-lg mt-3" href="https://thegameawards.com/" role="button" target="_blank">
					Vota Aqui!
				</a>
			</div>
		</div>
	</div>
	);
};