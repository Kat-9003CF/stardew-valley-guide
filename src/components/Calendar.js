import React, { useState } from "react";
import "./Calendar.css";
import seasonsData from './SeasonsData';

function Calendar() {
    const [seasons, setSeasons] = useState(seasonsData);
    const [chosenSeason, setChosenSeason] = useState(seasons[0])

function handleChange(event) {
    let seasonName = event.target.value;
    let newSeason = seasons.find(s => s.name ===seasonName)
    setChosenSeason(newSeason);
    }
    
    return (
      <div className="Calendar">
        <h2>Calendar</h2>
        <img alt = {chosenSeason['name']} src = {chosenSeason['img']} />

        <select name={seasons.name} value={seasons.name} onChange={handleChange}>
                <option>Spring</option>
                <option>Summer</option>
                <option>Fall</option>
                <option>Winter</option>
        </select>

      </div>
    );
  }
  
  export default Calendar;