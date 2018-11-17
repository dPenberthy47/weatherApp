import React from "react";
import "./HourlyForecast.css";

import {Skycons} from 'skycons-ts';

const HourlyForecast = props => {

// import Moment from "react-moment";

// var moment = require("moment");

const HourlyForecast = props => (
    
    
    <div>
      
    <h5>{props.hourlyTime}</h5>
    <h6>{props.hourlyTemp}°</h6>
  </div>


  const skycons = new Skycons({'color': 'blue'});
    // on Android, a nasty hack is needed: {'resizeClear': true}
 
    // you can add a canvas by it's ID...
  skycons.add(props.hourlyIcon, props.hourlyIcon);

  return (

    <div className="hourlyForecast">
      <h3>
        <canvas className={props.hourlyIcon} width="75" height="75"></canvas>
      </h3>

      <h3>
        {props.hourlyTime}
      </h3>
  
      <h4>
        {props.hourlyTemp}
      </h4>
      
      <h4>
        {props.hourlyPrecip}
      </h4>
    </div>
);
  }
export default HourlyForecast