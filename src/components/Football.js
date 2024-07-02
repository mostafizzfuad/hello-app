import React from 'react'

const Football = ({ playerName, birthYear }) => {
    // console.log(playerName, birthYear)
    return (
        <div>
            <h1>{playerName} loves football. His age is {new Date().getFullYear() - birthYear}</h1>
        </div>
    )
}

export default Football


