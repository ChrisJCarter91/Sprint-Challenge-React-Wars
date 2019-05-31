import React from 'react';
import Character from './Character'


const StarWarsCharacters = props =>{
    return(
        <div className  = 'character-list'>
        {props.starwarsChars.map((item, index)=>(
            <Character key={index} character = {item} 
            />
        ))}
        </div>
    )
}


export default StarWarsCharacters;