// import { useState } from 'react';
// import PropTypes from 'prop-types'
import './card.css'
const Card = (props) => {
    
    
   
    return ( 
        <div className="card mx-5">
            <h4>{props.title}</h4>
            <input id={`input-${props.name}`} onChange={props.put} className='input' type="number" value={props.val}/>
            {/* <button type="button" className="btn btn-primary" onClick={props.put}>input</button> */}
        </div>
     );
}
 
export default Card;

// Card.propTypes= {
//     title: PropTypes.string,
//     put: PropTypes.func,
//     val: PropTypes.number
// }