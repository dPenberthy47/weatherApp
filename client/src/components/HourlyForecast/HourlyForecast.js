import React from "react";
import "./HourlyForecast.css";
// import Moment from "react-moment";

// var moment = require("moment");

const HourlyForecast = props => (
    
    
    <div>
      
    <h5>{props.hourlyTime}</h5>
    <h6>{props.hourlyTemp}°</h6>
  </div>

);

export default HourlyForecast;