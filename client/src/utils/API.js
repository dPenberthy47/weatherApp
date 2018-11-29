import axios from "axios";
import {DARK_SKY} from "./config" ;

const BASEURL = "https://api.darksky.net" ;
const FORECAST = "/forecast" ;

export default {
  search: function( latitude, longitude) {
    return axios.get(
        BASEURL
        + FORECAST
        + DARK_SKY
        + latitude + "," + longitude
        );
  }
};

