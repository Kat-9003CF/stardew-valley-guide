import React, { useState } from "react";
import "./App.css";
import villagersData from './components/Villagers';
import CharacterPage from './components/CharacterPage';
import Calendar from './components/Calendar'



function App() {
  const [villagers, setVillagers] = useState(villagersData);
 
  return (
    <div className="App">
      <h1>Welcome to the Stardew Valley Visitors' Guide</h1>
      <Calendar />
      <CharacterPage villagers = {villagers} />
    </div>
  );
}

export default App;
