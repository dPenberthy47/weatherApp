import axios from "axios";
import {GEO_CODE} from "./config"

const BaseURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";

export default {
  search: function(address) {
    return axios.get(
        BaseURL
        + address
        + GEO_CODE
        
        );
  }
};
