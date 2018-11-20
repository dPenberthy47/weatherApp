import axios from "axios";

const BASEURL = "https://api.darksky.net" ;
const FORECAST = "/forecast" ;
const APIKEY = "/ca3400c91d73e30d63f26e67eb37ad2f/" ;

export default {
  search: function( latitude, longitude) {
    return axios.get(
        BASEURL
        + FORECAST
        + APIKEY
        + latitude + "," + longitude
        );
  }
};

