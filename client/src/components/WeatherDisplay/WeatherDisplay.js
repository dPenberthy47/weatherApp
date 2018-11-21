import React from "react";
import "./WeatherDisplay.css";

const WeatherDisplay = props => (  
  <b><div
    style={{ height: 300, clear: "both", paddingTop: 5, textAlign: "center" }}
    className="WeatherDisplay"
  >
      <h1 className="currentTemp">{props.currentTemp}°</h1>
    <div>
      <h3 className="feelsLike"><b>Feels Like: </b>{props.feelsLike}°</h3>
    </div>
    <div id="currentRange">
      <h6 className="dailyLow"><b>Low: </b>{props.dailyLow}°</h6>
      <h6 className="dailyHigh"><b>High: </b>{props.dailyHigh}°</h6>
    </div>

  </div></b>
  
);

export default WeatherDisplay;