import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import { Vortex } from "react-loader-spinner";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e41d480a236e63c3ed66acc7310d68f6&units=metric`;
    axios
      .get(url)
      .then((response) => {
        setLoaded(true);
        setWeather({
          date: new Date(response.data.dt * 1000),
          city: response.data.name,
          temperature: response.data.main.temp,
          humidity: response.data.main.humidity,
          wind: response.data.wind.speed,
          description: response.data.weather[0].description,
          icon: response.data.weather[0].icon,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="mb-3 ">
      <h1>
        
          <input
          className="input"
            onChange={updateCity}
            type="search"
            placeholder="&#128269; Type City"
            autoComplete="on"
          />
               
          <input
            type="submit"
            value="Search"
            onClick={handleSubmit}
            className="btn btn-primary"
          />
        
      </h1>
    </form>
  );

  if (loaded && weather) {
    return (
      <div>
        {form}
        <br />
        <div className="weatherNow">
          <div className="overview">
            <h1>{weather.city}</h1>
            <ul>
              <li>{weather.date} </li>
              <li>{weather.description}</li>
            </ul>
          </div>

          <div className="row">
            <div className="col-2 clearfix weather-temperature">
              <img
                src={`https://openweathermap.org/img/wn/${weather.icon}.png`}
                alt={weather.description}
                className="float-right"
              />
            </div>

            <div className="col-5 float-left clearfix weather-temperature">
              <strong>{Math.round(weather.temperature)}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>

            <div className="col-5">
              <ul>
                <li>Humidity: {Math.round(weather.humidity)}%</li>
                <li>Wind: {Math.round(weather.wind)} m/s</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    handleSubmit();
    return (
      <div >
        {form}
        <h1>
       <Vortex
        visible={true}
        height="150"
        width="150"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["BurlyWood", "coral", "gold", "darkOliveGreen", "orange", "brown"]}
      /></h1>
        <h1>Please provide a valid city name. </h1>
      </div>
    );
  }
}





  