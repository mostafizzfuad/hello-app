import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = (iteration = 1) => {
        // setCount(count + 1)
        setCount((prevCount) => prevCount + iteration);
    }

    const handleDecrement = (iteration = 1) => {
        // setCount(count - 1)
        setCount((prevCount) => prevCount - iteration);
    }

    const handleReset = () => {
        setCount(0)
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => handleIncrement()}>Increment</button>
            <button onClick={() => handleIncrement(10)}>IncrementTen</button>
            <button onClick={() => handleDecrement()}>Decrement</button>
            <button onClick={() => handleDecrement(5)}>DecrementFive</button>
            <button onClick={() => handleReset()}>Reset</button>
        </div>
    )
}

export default Counter