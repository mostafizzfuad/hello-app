import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // fetch api
  /*   const fetchUsers = () => {
    // fetch("https://jsonplaceholder.typicode.com/userss")
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) throw new Error("Something went wrong");
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setUsers(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };
 */
  // fetch api convert to async await
  const fetchUsersTwo = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) throw new Error("Something went wrong");
      const data = await response.json();
      setUsers(data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // fetchUsers();
    fetchUsersTwo();
  }, []);

  return (
    <div>
      {isLoading ? <p>Loading...</p> : null}

      {error ? (
        <p>{error}</p>
      ) : (
        users.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Users;
