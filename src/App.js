import React from "react";
import User from "./components/User";

function App() {
  return (
    <div>
      <User render={(isLoggedIn) => isLoggedIn ? "Mostafizur" : "Visitor"} />
    </div>
  );
}

export default App;