import React, { useEffect, useState } from "react";
import "./FeatCharacter.css";
import Friendship from './Friendship'


function FeaturedCharacter(props) {

const [friendship, setFriendship] = useState(props.featVillager.hearts)

    function writeList(list){
        console.log(list)
        let faves = list.join(', ');
        return faves;
    }


    return (
      <div className="FeaturedCharacter">
          {props.featVillager.img && 
          <table>  
              <tbody>
                  <td>
                    <img src ={props.featVillager.img}/>
                  </td>
                  <td>
                    <h2>{props.featVillager.name}</h2>
                    <Friendship hearts ={props.featVillager.hearts} />
                    <li>Birthday: {props.featVillager.birthday}</li>
                    <li>Favourite Gifts: {props.featVillager.favGifts && writeList(props.featVillager.favGifts)}</li>
                  </td>
              </tbody>
          </table>
          }
      </div>
    );
  }
  
  export default FeaturedCharacter;