import React from "react";
import "./CurrentWeather.css";

const CurrentWeather = props => (  
  <div
    style={{
      height: 300,
      clear: "both",
      paddingTop: 5, 
    textAlign: "center" 
  }}
    className="CurrentWeather"
  >
    <div>
      <p className="weatherIcon"> {props.image} </p>
      {/* <h5 className="currentSummary">{props.currentSummary}</h5> */}
    </div>
    {/* <div>
      <h5 className="currentSummary">{props.currentSummary}</h5>
    </div> */}
    <div>
      <h1 className="currentTemp">{Math.round(props.currentTemp)}°</h1>
    </div>
    <div>
      <h5 className="feelsLike">Feels Like: {Math.round(props.feelsLike)}°</h5>
    </div>
    <div>
      <h5 className="dailyLow">Low: {Math.round(props.dailyLow)}°</h5>
    </div>
    <div>
      <h5 className="dailyHigh">High: {Math.round(props.dailyHigh)}°</h5>
    </div>

  </div>
  
);

export default CurrentWeather;