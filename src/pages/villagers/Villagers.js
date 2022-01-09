import React from "react";


function Villagers({villagers}) {
	

	const list = villagers.map((villager) => <div><img src={villager.image_uri} alt="" /> <p>{villager.name["name-USen"]}</p> </div>);
	
	
	return (
		<div>
			<div>
				this is villagers page <br></br>
			{list}
			</div>
			

	
		</div>
	);
}

export default Villagers;
