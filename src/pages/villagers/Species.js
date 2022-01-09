import React from "react";

function Species({villagers}){
  const species = villagers.map((villager) => villager.species)

  function anteater(){
    if(species === "Anteater"){
      return villagers.map((villager) => <img src={villager.image_uri} alt="" />)
    }
  }

  return(
    <div>
      this is species page
      {anteater()}
    </div>
  )
}

export default Species;