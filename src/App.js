import React from "react";
import "./App.css";
import Portfolio from "./Portfolio";
import AboutMe from "./AboutMe";

function App() {
  return (
    <div className="App">
      <h1>My Portfolio</h1>
      <AboutMe />
      <Portfolio />
      <p className="dummy-message">This is a dummy website created for an assignment.</p>
      <a className="back-button" href="https://swarabraul.github.io/React-Ethnus-IndexPage/">Back to Index Page</a>
    </div>
  );
}

export default App;