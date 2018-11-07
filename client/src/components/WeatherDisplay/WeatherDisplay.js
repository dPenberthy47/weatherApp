import React from "react";
import "./WeatherDisplay.css";
const Jumbotron = ({ children }) => (
  <div
    style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
    className="jumbotron"
  >
  WeatherDisplay
    {children}
  </div>
);

export default Jumbotron;
