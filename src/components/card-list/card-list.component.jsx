import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card.component';

export const CardList = props => (
    <div className='card-list'>
        {props.pokedex.map(pokedex => (
        <Card key={pokedex.id} pokedex={pokedex} />
        ))}
    </div>
);