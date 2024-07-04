import React, { useState } from 'react'

const demoPlayerObj = {
    firstName: 'Mostafizur',
    lastName: 'Rahman',
    jerseyNum: 10,
}

const Player = () => {
    const [player, setPlayer] = useState({});

    const handleAddProperty = () => {
        setPlayer({ ...player, ...demoPlayerObj })
    }

    const handleMakeGoal = () => {
        const randomGoal = Math.floor(Math.random() * 10 + 1)
        setPlayer({ ...player, goals: randomGoal })
    }

    return (
        <div>
            <h2>Player Name: {player.firstName} {player.lastName}</h2>
            <h2>Jersey Number: {player.jerseyNum}</h2>
            <h2>Goals: {player.goals}</h2>

            <button onClick={handleAddProperty}>Add Property</button>
            <button onClick={handleMakeGoal}>Make Goal</button>
        </div>
    )
}

export default Player