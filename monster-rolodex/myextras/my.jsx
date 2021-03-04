import React from 'react';
import './Card/card.style.css';
export const Card = (props) =>{
    {console.log(props)}
   return (
        <div className='card-container'>
            <img src={`https://robohash.org/${props.card_prp.id}?size=180x180`} alt="monster"/>
            <h1>{props.card_prp.name}</h1></div>
        );
}
    
