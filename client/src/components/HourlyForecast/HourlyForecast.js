import React from "react";
import "./HourlyForecast.css";
import moment from 'moment';


const HourlyForecast = props => {

  /* const skycons = new Skycons({'color': 'blue'}); */
   return (

    <div className="hourlyForecast">
    <b>
      <h3>
        <canvas className={props.hourlyIcon} width="75" height="75"></canvas>
      </h3>
    </b>
    <b>
      <h3>
        {moment(props.hourlyTime * 1000).format('LT')}
      </h3>
    </b>
    <b>
      <h4> Temp: 
        {props.hourlyTemp}
      </h4>
    </b>
    <b>  
      <h4>Precipitation: 
        {props.hourlyPrecip}
      </h4>
    </b>
    </div>
);
  }
export default HourlyForecast