import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This React Project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/mantas-zvybas-700938254/"
            target="_blank"
          >
            Manta Zvybas
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/MantaZvy/react-weather-app"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
