import React from "react";
import "./FiveDayForecast.css";
import moment from 'moment';


const FiveDayForecast = props => {


    return (
  
      <div className="fiveDayForecast">
        <h3>
          <canvas className={props.dailyIcon} width="75" height="75"></canvas>
        </h3>
  
  <h3>
       {moment(props.date * 1000).format("MM/DD")}

       </h3>
        
        <h3>

          {props.dailySummary}
        </h3>
    
        <h4> Temp High:
          {props.dailyTempHigh}
        </h4>
        
        <h4> Temp Low:
          {props.dailyTempLow}
        </h4>
        
        <h4>Precipitation:
          {props.dailyPrecip}
        </h4>


      </div>
  );
    }

export default FiveDayForecast;