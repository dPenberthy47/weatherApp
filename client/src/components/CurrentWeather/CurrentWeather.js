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
      <h5 className="feelsLike">Feels Like: {Math.round(props.feelsLike)}°</h5>
    </div>
    <div>
      <h5 className="dailyLow">High: {Math.round(props.dailyLow)}°</h5>
    </div>
    <div>
      <h5 className="dailyHigh">Low: {Math.round(props.dailyHigh)}°</h5>
    </div>

  </div>
  
);

export default CurrentWeather;