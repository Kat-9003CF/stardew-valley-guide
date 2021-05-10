import React, { useEffect, useState } from "react";
import "./FeatCharacter.css";



function FeaturedCharacter(props) {


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