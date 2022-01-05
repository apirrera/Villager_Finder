import React, { useEffect, useState } from "react";

function Villagers(){
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    fetch("https://acnhapi.com/v1/villagers")
      .then(response => response.json())
      .then((data) => setVillagers(data))
  })
 //check how to traverse through obj and list villagers images first
  return(
    <div>
      
    </div>
  );
}

export default Villagers;