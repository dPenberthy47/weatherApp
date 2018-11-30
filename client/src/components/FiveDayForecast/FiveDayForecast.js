// import React from "react";
// import "./FiveDayForecast.css";
// import moment from "moment";

// const FiveDayForecast = props => {
//   return (
//     <div className="fiveDayForecast">
//       <h3>
//         <canvas className={props.dailyIcon} width="75" height="75"></canvas>
//         </h3>

//       <h3>
//         {moment(props.date * 1000).format("dddd")} - {moment(props.date * 1000).format("MM/DD")}
//         </h3>

//         <h3>
//           {props.dailySummary}
//           </h3>
    
//       <h4>
//         High: {Math.round(props.dailyTempHigh)}°
//         </h4>
      
//       <h4>
//         Low: {Math.round(props.dailyTempLow)}°
//         </h4>
        
//       <h4>
//         Precip: {Math.round(props.dailyPrecip * 100)}%
//         </h4>

//       </div>
//   );
// }

// export default FiveDayForecast;


import React from "react";
import "./FiveDayForecast.css";
import moment from 'moment';


const FiveDayForecast = props => {
   return (
     <div className="fiveDayForecast">
       <h3>
         <canvas className={props.dailyIcon} width="75" height="75"></canvas>
       </h3>

<<<<<<< HEAD
          {props.dailySummary}
        </h3>
    
        <h4> Temp High:
          {props.dailyTempHigh}°
        </h4>
        
        <h4> Temp Low:
          {props.dailyTempLow}°
        </h4>
        
        <h4>Precipitation:
          {props.dailyPrecip}%
        </h4>
=======
       <h3>
       {moment(props.date * 1000).format("dddd")} - {moment(props.date * 1000).format("MM/DD")}
      </h3>
>>>>>>> 5ae57939afde4187e8c5116ebe304fce70498d0f

       <h3>
         {props.dailySummary}
       </h3>
   <div className="text">
       <h4> Temp High: {Math.round(props.dailyTempHigh)}°</h4>
       <h4> Temp Low: {Math.round(props.dailyTempLow)}°</h4>
   </div>
       <h4>Precipitation: {Math.round(props.dailyPrecip * 100)}%
       </h4>
     </div>
 );
}

export default FiveDayForecast;