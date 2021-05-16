import React, { useEffect, useState } from "react";
import "./CharacterGrid.css";

function CharacterGrid(props){

    function handleClick(event){
        event.preventDefault();
        console.log('Click!')
    }

        return (
            <div className ='grid'>
            <ul>
                {
                props.villagers.map(v => (
                    <li key ={v.id} 
                    onClick = {(e) => props.selectCb(v.id)}>
                    <img src = {v.img} onClick ={(e) => props.selectCb(v.id)}></img>
                    <p>{v.name}</p> <br/>
                    </li>
                ))
                }      
            </ul>
            </div>



        
        )
}

export default CharacterGrid;