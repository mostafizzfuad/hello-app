import React from 'react'
import { UserConsumer } from '../context/userContext'

const Comp4 = () => {
    return (
        <div>
            <UserConsumer>
                {
                    (userObj) => {
                        return <h1>Hello, {userObj.name}! Age : {userObj.age}</h1>
                    }
                }
            </UserConsumer>
        </div>
    )
}

export default Comp4