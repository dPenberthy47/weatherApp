import React from "react";
import "./WeatherDisplay.css";

const WeatherDisplay = props => (  
  <div
    style={{ height: 300, clear: "both", paddingTop: 5, textAlign: "center" }}
    className="WeatherDisplay"
  >
    {/* <img alt={props.name} src={props.image} /> */}
    <div>
      <h3 className="currentTemp">{props.currentTemp}°</h3>
    </div>
    <div>
      <h6 className="feelsLike">{props.feelsLike}°</h6>
    </div>
    <div>
      <h6 className="dailyLow">{props.dailyLow}°</h6>
    </div>
    <div>
      <h6 className="dailyHigh">{props.dailyHigh}°</h6>
    </div>

  </div>
  
);

export default WeatherDisplay;