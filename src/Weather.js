import "./App.css";
import React, { useState, useEffect } from "react";
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
      <div className="row">
        <div className="col-9">
          <input
            onChange={updateCity}
            type="search"
            placeholder="&#128269; Type Name of City"
            autoComplete="on"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            onClick={handleSubmit}
            className="btn btn-primary w-100"
          />
        </div>
      </div>
    </form>
  );

  if (loaded && weather) {
    return (
      <div className="App">
        {form}
        <br />

        <div>
          <h3>
            <strong>{weather.city}</strong>
          </h3>
          <h5>Temperature: {Math.round(weather.temperature)} °C</h5>
          <h5>Description: {weather.description} </h5>
          <h5>Humidity: {Math.round(weather.humidity)} %</h5>
          <h5>Wind: {Math.round(weather.wind)} m/s</h5>
        </div>
        <div>
          <img src={`https://openweathermap.org/img/wn/${weather.icon}.png`} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        {form}
       <Vortex
        visible={true}
        height="150"
        width="150"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["BurlyWood", "coral", "gold", "darkOliveGreen", "orange", "brown"]}
      />
        <h5>Please provide a valid city name. </h5>
      </div>
    );
  }
}





// export default function Weather(props) {
 // function handleResponse(response){
   // alert (`The current temperature in ${response.data.name} is ${response.data.main.temp} °C.`)
  
   // let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=e41d480a236e63c3ed66acc7310d68f6&units=metric`;
  //  axios
    //  .get(url)
  //    .then(handleResponse);
     
  