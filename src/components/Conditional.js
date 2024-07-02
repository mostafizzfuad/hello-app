import React from 'react'

const Conditional = () => {
    const isDeveloper = false;

    return (
        <div>
            {isDeveloper ? <h1>He is a web developer</h1> : <h1>He is a data scientist</h1>}

            <h1>{isDeveloper ? "He is a web developer" : "He is a data scientist"}</h1>

            <h1>He is {isDeveloper ? "" : "not"} a web developer</h1>
        </div>
    )
}

export default Conditional