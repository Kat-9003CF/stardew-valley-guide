import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import villagersData from './components/Villagers';
import CharacterPage from './components/CharacterPage';
import Calendar from './components/Calendar'
import Home from './components/Home'
import BundlesList from './components/Bundles'



function App() {
  const [villagers, setVillagers] = useState(villagersData);
  
 
  return (
    <div className="App">
            <Router>
      <div className = "menu">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar</Link>
            </li>
            <li>
              <Link to="/villagers">Villagers</Link>
            </li>
            <li>
              <Link to="/bundles">Bundles</Link>
            </li>

          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/calendar">
          <Calendar/>
          </Route>
          <Route path="/villagers">
          <CharacterPage villagers = {villagers}/>
          </Route>
          <Route path="/bundles">
          <BundlesList />
          </Route>
          <Route path="/">
          <Home />
          </Route>
        </Switch>
        </div>
    </Router>




      
   </div>
  );
}

export default App;
