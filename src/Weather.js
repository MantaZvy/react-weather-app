import React from "react";
import "./Weather.css";

export default (App) => {
  return (
    <div className="App">
      <div className="row">
        <div className="col-8">
          <h1>London</h1>
        </div>
        <div className="col-4">
          <form>
            <input
              type="search"
              placeholder="Enter a city..."
              className="control-form"
            />
            <input type="submit" value="Search" className="btn btn-primary" />
          </form>
        </div>
      </div>
      <ul>
        <li>Clear, 6:25pm</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.WLDISq99tDfHenKgZtbJugHaHa&pid=Api&P=0&h=180"
            alt="Weather Icon"
          />
          4
        </div>
        <div className="col-6">
          <ul>
            <li>Percipitation: 15</li>
            <li>Humidity: 50%</li>
            <li>Wind: 10km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
