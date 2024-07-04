import React from "react";
import Comp1 from "./components/Comp1";
import { UserProvider } from "./context/userContext";

function App() {
  const user = {
    name: "Mostafizur",
    age: 26,
  }

  return (
    <div>
      <UserProvider value={user}>
        <Comp1 />
      </UserProvider>
    </div>
  );
}

export default App;