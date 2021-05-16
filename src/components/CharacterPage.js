import React, { useEffect, useState } from "react";
import "./CharacterPage.css";
import FeaturedCharacter from './FeaturedCharacter';
import CharacterGrid from './CharacterGrid'



function CharacterPage(props) {

  const [featVillager, setFeatVillager] = useState([]);

  const setFeat = (id) => {
    let ix = props.villagers.findIndex(v => (v.id ===id));
    setFeatVillager(props.villagers[ix]);
  }

    return (
      <div className="characterPage">
        <h2>Villagers</h2>
        {(featVillager.length===0) ? <h2>Select a villager to view more information</h2> :
        <FeaturedCharacter featVillager ={featVillager}/>}
        <div className = "CharGrid"><CharacterGrid 
        villagers={props.villagers} 
        selectCb={id => setFeat(id)}/></div>
      </div>
    );
  }
  
  export default CharacterPage;