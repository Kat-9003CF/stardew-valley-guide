import React, { useState } from "react";
import "./Bundles.css";
import bundlesData from './BundlesData';


function BundlesList(){

const [bundles, setBundles] = useState(bundlesData);

const markComplete = (name) => {
    let updatedBundle = [...bundles];
    let ix = updatedBundle.findIndex(b => b.name === name);
    updatedBundle[ix].collected= !updatedBundle[ix].collected;
    setBundles(bundles=> [...updatedBundle])
  }


return (
<div>
    <h2>Bundles</h2>
    <h3 className = 'darkFont'>Spring Crops Bundle</h3><img src = '/images/SpringBundle.png'></img>
    <table className = 'Spring Crops'>
        <tbody>
        {bundles.map(b => (
            <tr>
                <td className={b.collected ? "collectedImg" : null}><img src = {b.image}/></td>
                <td className={b.collected ? "collected" : null}>{b.name}</td>
                <td><button onClick= {(e) => markComplete(b.name)}>Collected</button></td>
            </tr>
            ))}
        </tbody>
    </table>
</div>




)
}                

export default BundlesList;