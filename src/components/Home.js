import React, { useState } from "react";
import "./Home.css";



function Home() {

return(
<div>
<h1>Welcome to</h1>
<img className = "sign" src={process.env.PUBLIC_URL + '/images/signpost.png'} />


</div>
    );
}

export default Home;