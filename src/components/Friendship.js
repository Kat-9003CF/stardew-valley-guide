import React, { useEffect, useState } from "react";
import "./Friendship.css";



function Friendship(props) {

function generateHearts(n){
    let friendship =[];
    for (let i = 0; i<n;i++){
        friendship.push(<img  className='hearts' width = '20px' src ="images/heart.png"></img>)
    }

    for (let i=n; i<=8;i++){
        friendship.push(<img  className='hearts' width = '18px' src ="images/emptyheart.png"></img>)
    }
    return friendship
    }

return(

<p>Friendship Level: {props.hearts && generateHearts(props.hearts)}</p>


)

}
  
export default Friendship;
