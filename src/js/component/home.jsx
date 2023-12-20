import React from "react";
import { Base } from "./base";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="main">
			<Base startCounter={props.startCounter}
				pauseInterval={props.pauseInterval}
				resetInterval={props.resetInterval} />
		</div>
	);
};

export default Home;
