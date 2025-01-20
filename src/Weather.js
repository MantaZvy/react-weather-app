import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-10">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-field"
            />
          </div>
          <div className="col-2">
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>London,UK</h1>
      <ul>
        <li>Monday,UK</li>
        <li>Mostly Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.WLDISq99tDfHenKgZtbJugHaHa&pid=Api&P=0&h=180"
            alt="Rain and Sun image"
          />
          18
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 20%</li>
            <li>Humidity: 50%</li>
            <li>Wind: 10 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
