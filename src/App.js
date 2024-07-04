import React from "react";
import JerseyMaker from "./components/JerseyMaker";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div>
      <ErrorBoundary>
        <JerseyMaker name="Mostafizur" jerseyNum="10" />
      </ErrorBoundary>
      <ErrorBoundary>
        <JerseyMaker name="Siam" jerseyNum="7" />
      </ErrorBoundary>
      <ErrorBoundary>
        <JerseyMaker name="Junnun" jerseyNum="18" />
      </ErrorBoundary>
      <ErrorBoundary>
        <JerseyMaker jerseyNum="34" />
      </ErrorBoundary>
    </div>
  );
}

export default App;