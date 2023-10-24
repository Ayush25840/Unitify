// import { useState } from 'react';
import './card.css'
const Card = (props) => {
    
    
   
    return ( 
        <div className="card mx-5">
            <h4>{props.title}</h4>
            <input id="input" onInput={props.put} className='input' type="number" value={props.val}/>
        </div>
     );
}
 
export default Card;