import React from 'react'

const EventChild = ({ clickHandler }) => {
    return (
        <div>
            {/* passing argument */}
            <button onClick={() => clickHandler('Tested')}>Click Me</button>
        </div>
    )
}

export default EventChild