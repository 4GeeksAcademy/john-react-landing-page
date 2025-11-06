import React from "react";


import Navbar from "./Navbar"
import { Hero } from "./Hero";
import Cards from "./Cards";
import { cardData } from "./cardData";
import Footer from "./Footer";	

const Home = () => {
	return (
		<>
		<Navbar />
		<Hero />
		<div className="row container-fluid mx-auto my-5">
			{cardData.map((card, index) => {
				return (
					<div className="col-12 col-md-6 col-xxl-3 my-5 d-flex justify-content-center" key={index}>
						<Cards 
							title={card.title}
							description={card.description}
							imgUrl={card.imgUrl}
							buttonUrl={card.buttonUrl}
							buttonLabel={card.buttonLabel}
						/>
					</div>
				)
			})}
		</div>
		<Footer />
		</>
	);
};

export default Home;