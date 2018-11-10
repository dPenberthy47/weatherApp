import React from "react";
import "./WeatherDisplay.css";
const WeatherDisplay = ({ children }) => (
  <div
    style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
    className="jumbotron"
  >
  WeatherDisplay
    {children}
  </div>
);

export default WeatherDisplay;
