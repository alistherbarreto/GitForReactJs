import React from 'react';
import './card-list.styles.css';

export const CardList = props => (
    <div className='card-list'>
        {props.pokedex.map(pokedex => (
        <h1 key={pokedex.id}> {pokedex.name} </h1>
        ))}
    </div>
);