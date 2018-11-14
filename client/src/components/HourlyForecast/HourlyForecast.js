import React from "react";
import "./HourlyForecast.css";

const HourlyForecast = props => (
    <div>
    <h5>{props.hourlyTime}</h5>
    <h6>{props.hourlyTemp}</h6>
  </div>

);

export default HourlyForecast;