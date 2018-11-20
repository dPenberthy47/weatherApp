import axios from "axios";

const BaseURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
const API_KEY = "&key=AIzaSyCdC5ADAcTJY6cBM3ozr_qinVwkcrng75Q"


export default {
  search: function(address) {
    return axios.get(
        BaseURL
        + address
        + API_KEY
        
        );
  }
};
