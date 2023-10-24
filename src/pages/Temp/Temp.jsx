import { useState } from "react";
import Card from "../../component/card/Card";

import './Temp.css'
const Temp = () => {
    const [cel,setCel]=useState(0);
    const assignVal=()=>{
        setCel(document.getElementById("input").value)
    }
    
    return ( 
        <div className="temp container ">
            <Card put={assignVal} title="°C" val={cel}/>
            <Card put={assignVal} title="°F" val={32+ 1.8*cel}/>
            <Card put={assignVal} title="K" val={cel*1+273}/>
        </div>
     );
}
 
export default Temp;