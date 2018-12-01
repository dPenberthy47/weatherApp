import React from "react";
import "./CurrentWeather.css";

const CurrentWeather = props => (  
  <div
    style={{ height: 300, clear: "both", paddingTop: 5, textAlign: "center" }}
    className="CurrentWeather"
  >
    {/* <img alt={props.name} src={props.image} /> */}
    <div>
      <h1 className="currentTemp">{Math.round(props.currentTemp)}°</h1>
    </div>
    <div>
      <h6 className="feelsLike">Feels Like: {Math.round(props.feelsLike)}°</h6>
    </div>
    <div>
      <h6 className="dailyLow">Low: {Math.round(props.dailyLow)}°</h6>
    </div>
    <div>
      <h6 className="dailyHigh">High: {Math.round(props.dailyHigh)}°</h6>
    </div>

  </div>
  
);

export default CurrentWeather;