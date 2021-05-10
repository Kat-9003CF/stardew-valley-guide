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

// function generateHearts(n){
//       let friendship =[];
//       for (let i = 0; i<n;i++){
//         friendship.push(<img width = '30px' src ="https://e7.pngegg.com/pngimages/616/424/png-clipart-health-video-game-pixel-art-bar-health-game-rectangle-thumbnail.png"></img>)
//       }
//       return friendship
//     }

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