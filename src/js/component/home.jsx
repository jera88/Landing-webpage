import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./card";
import Jumbotron from "./jumbotron";
import Navbar from "./navbar";

//create your first component
const Home = () => {
	return (
		<div className="">
			<Navbar/>
			<Jumbotron/>
			<div className="container d-flex">
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>
		</div>	
	);
};

export default Home;
