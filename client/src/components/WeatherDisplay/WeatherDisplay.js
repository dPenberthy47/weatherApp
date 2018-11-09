import React from "react";
import "./WeatherDisplay.css";
// const WeatherDisplay = ({ props }) => (
const WeatherDisplay = props => (
  <div
    style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
    className="WeatherDisplay"
  >
    WeatherDisplay
    {props.children}
  </div>
);

export default WeatherDisplay;
