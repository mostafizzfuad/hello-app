import { useState } from "react"

const User = () => {
    const [user, setUser] = useState([]);

    const handleAddUser = () => {
        const id = user.length;
        const number = Math.floor(Math.random() * 100 + 1);

        setUser([...user, {id: id, number: number}]);
    }

    return (
        <div>
            <button onClick={handleAddUser}>Add User</button>
            {
                user.length > 0 && user.map(singleUser => (
                    <h2 key={singleUser.id}>{singleUser.number}</h2>
                ))
            }
        </div>
    )
}

export default User

/* 
const user = {
    name: 'John',
    age: 34
} 
*/
