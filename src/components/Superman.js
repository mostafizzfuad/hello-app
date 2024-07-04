import React from 'react'

const Superman = ({ superhero }) => {
    const superheroElRef = React.createRef();

    const changeColorHandler = () => {
        superheroElRef.current.textContent = superhero;
        superheroElRef.current.style.color = "hotpink";
    }

    return (
        <div>
            <h1 ref={superheroElRef}>Superman</h1>
            <button onClick={changeColorHandler}>Change Color</button>
        </div>
    )
}

export default Superman