import { useState,useEffect } from "react";
import Card from "../../component/card/Card";
import './Temp.css'

const Temp = () => {
    const [cel,setCel]=useState(0);
    const [far,setFar]=useState(32);
    const [kel,setKel]=useState(273);
   
    useEffect(()=>{  
        setFar(cel*1.8 + 32);
        setKel(cel*1 + 273); 
    }, [cel]);
    useEffect(()=>{  
        // setCel((far -32)*0.56);
        setKel((far -32)*0.555 + 273); 
        // console.log(cel," ",far);
    }, [far]);
    
   
    const assignCel=()=>{
        setCel(document.getElementById("input-Cel").value);
    
    }
    const assignFar=()=>{
        setFar(document.getElementById("input-Far").value);
        // eslint-disable-next-line react-hooks/rules-of-hooks
       
    }
    const assignKel=()=>{
        setKel(document.getElementById("input-Kel").value);
    }
    
    return ( 
        <div className="temp container ">
            <Card put={assignCel} name="Cel" title="°C" val={cel}/>
            <Card put={assignFar}  name="Far" title="°F" val={far}/>
            <Card put={assignKel}  name="Kel" title="K" val={kel} />
        </div>
     );
}
 
export default Temp;