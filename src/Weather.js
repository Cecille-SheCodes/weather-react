import React from "react";
import axios from "axios";
import { Vortex } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response){
    alert (`The current temperature in ${response.data.name} is ${response.data.main.temp} °C.`)
  }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=e41d480a236e63c3ed66acc7310d68f6&units=metric`;
    axios
      .get(url)
      .then(handleResponse);
     
    return (
      <Vortex
        visible={true}
        height="150"
        width="150"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["BurlyWood", "coral", "gold", "darkOliveGreen", "orange", "brown"]}
      />
    );}