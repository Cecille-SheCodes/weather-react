import React from "react";
import "./App.css";

export default function WeatherInfo(props) {
  return (
<div className="weatherNow">
  <div className="overview">
    <h1>{props.data.city}</h1>
    <ul>
      <li>{props.data.date} </li>
      <li>{props.data.description}</li>
    </ul>
  </div>

  <div className="row">
    <div className="col-2 clearfix weather-temperature">
      <img
        src={`https://openweathermap.org/img/wn/${props.data.icon}.png`}
        alt={props.data.description}
        className="float-right"
      />
    </div>

    <div className="col-5 float-left clearfix weather-temperature">
      <strong>{Math.round(props.data.temperature)}</strong>
      <span className="units">
        <a href="/">°C</a> | <a href="/">°F</a>
      </span>
    </div>

    <div className="col-5">
      <ul>
        <li>Humidity: {Math.round(props.data.humidity)}%</li>
        <li>Wind: {Math.round(props.data.wind)} m/s</li>
      </ul>
    </div>
  </div>
</div>
);
}