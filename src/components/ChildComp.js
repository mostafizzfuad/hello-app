import React from 'react'

const ChildComp = ({ number }) => {
    console.log("child")
    return (
        <div>Child component : {number}</div>
    )
}

export default React.memo(ChildComp)