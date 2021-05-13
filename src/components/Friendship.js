import React, { useEffect, useState } from "react";
import "./Friendship.css";



function Friendship(props) {

function generateHearts(n){
    let friendship =[];
    for (let i = 0; i<n;i++){
        friendship.push(<img  className='hearts' width = '30px' src ="https://e7.pngegg.com/pngimages/616/424/png-clipart-health-video-game-pixel-art-bar-health-game-rectangle-thumbnail.png"></img>)
    }
    return friendship
    }

return(

<p>Friendship Level: {props.hearts && generateHearts(props.hearts)}</p>


)

}
  
export default Friendship;
