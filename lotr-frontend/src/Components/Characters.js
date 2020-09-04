import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Characters() {

    const [characters, setCharacters] = useState([])

   useEffect(() => {
    axios
        .get('https://lotrdata.herokuapp.com/api/users/')
        .then(lotrcharacters => {
            setCharacters(lotrcharacters)
        })
        .catch(err => {
            return err
        })
    }, [])


    return (

        <div>{characters.map(character => {
            return (
                <p>{character.name}</p>
            ) 
        })}</div>

    )
}

export default Characters