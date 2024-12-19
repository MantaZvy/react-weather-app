import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          <p>
            Repository available on{" "}
            <a
              href="https://github.com/MantaZvy/react-weather-app"
              target="_blank"
            >
              GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
