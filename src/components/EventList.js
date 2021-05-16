import React, { useState } from "react";
import "./EventList.css";


function EventList(props){

    // function showEvents(dates){
    //     let eventDisplay =[];
    //     for (let i = 0; i<dates.length;i++){
    //       if (dates[i] ==='15-17 - Night Market'){
    //         eventDisplay.push(<img src ='images/star.png'></img>)
    //         eventDisplay.push(dates[i])
    //       }
    //       else {
    //         eventDisplay.push(<img src ='images/flag.gif'></img>)
    //         eventDisplay.push(dates[i])
    //       }
    //     }
    //     return eventDisplay;
    //   }

function chooseImage(d){
    let image=''
    if (d==='15 - 17 - Night Market'){
        image = 'images/star.png'
    }
    else {
        image = 'images/flag.gif'
    }
    return image
}

return (

<div className= "events">
    <h2 className='darkFont'>Events</h2>
    {props.dates.map(d =>(
        <li><img src = {chooseImage(d)} ></img>{d}</li>
        
    )
    )}
</div>

)
}

export default EventList;