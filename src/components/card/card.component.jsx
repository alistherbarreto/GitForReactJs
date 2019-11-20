import React from 'react'
import './card.style.css';

export const Card = (props) => (
    <div className="card-container ">
        <img alt="Pokemon" src = {`https://robohash.org/${props.pokedex.id}?set=set2&size=180x180`} />
        <h2> {props.pokedex.name} </h2>
        <p> {props.pokedex.email} </p>
        <p><b> Company Name : {props.pokedex.company.name} </b></p>
        <p><i> {props.pokedex.company.catchPhrase} </i></p>
    </div>
);