import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Characters() {

    const [characters, setCharacters] = useState([])

   useEffect(() => {
    axios
        .get('https://lotrdata.herokuapp.com/api/users/')
        .then(lotrcharacters => {
            console.log(lotrcharacters)
            setCharacters(lotrcharacters.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    if (!characters) {
        return <h1>Loading...</h1>
    }

    return (

        <div>{characters.map(character => {
            return (
                <p key={character.id}>{character.name}</p>
            ) 
        })}</div>

    )
}

export default Characters