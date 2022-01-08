import React, { useEffect, useState } from "react";

function Villagers() {
	const [villagers, setVillagers] = useState([]);

	useEffect(() => {
		fetch("https://acnhapi.com/v1a/villagers")
			.then((response) => response.json())
			.then((response) => {
				setVillagers(response);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const list = villagers.map((villager) => <div><img src={villager.image_uri} alt="" /> <p>{villager.name["name-USen"]}</p> </div>);

	return (
		<div>
			this is villagers page <br></br>
			{list}
		</div>
	);
}

export default Villagers;
