import React from 'react'

const Hello = () => {
    const isRaining = true;

    const helloStyle = {
        color: isRaining ? 'crimson' : 'blue',
        fontSize: "4.5rem",
        backgroundColor: "aqua"
    }

    return (
        <div>
            <h1 className='heading' style={helloStyle}>Hello React !!</h1>
        </div>
    )
}

export default Hello
