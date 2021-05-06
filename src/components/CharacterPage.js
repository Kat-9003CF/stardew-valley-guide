import React, { useEffect, useState } from "react";
import "./CharacterPage.css";
import FeaturedCharacter from './FeaturedCharacter';
import CharacterGrid from './CharacterGrid'



function CharacterPage(props) {

  const [featVillager, setFeatVillager] = useState([]);

  const setFeat = (id) => {
    let ix = props.villagers.findIndex(v => (v.id ===id));
    console.log(props.villagers[ix]['name'], 'has been clicked');
    setFeatVillager(props.villagers[ix]);
  }

    return (
      <div className="characterPage">
        <FeaturedCharacter featVillager ={featVillager}/>
        <CharacterGrid 
        villagers={props.villagers} 
        selectCb={id => setFeat(id)}/>
      </div>
    );
  }
  
  export default CharacterPage;