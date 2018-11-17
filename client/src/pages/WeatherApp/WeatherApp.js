import React, { Component } from "react";
import API from "../../utils/API";
import Navbar from "../../components/Navbar";
import LocationSearch from "../../components/LocationSearch";
import Jumbotron from "../../components/Jumbotron";
import WeatherDisplay from "../../components/WeatherDisplay";
import HourlyForecast from "../../components/HourlyForecast";
import DarkskyMap from 'react-darksky-map';
//import Map from "../../components/Map";
import FiveDayForecast from "../../components/FiveDayForecast";
import Footer from "../../components/Footer";
// import Moment from "react-moment";

// var moment = require("moment");


class WeatherApp extends Component {
    state = {
        latitude: "32.7767",
        longitude: "-96.7970",
        image: "",
        currentTemp: "",
        feelsLike: "",
        dailyLow: "",
        dailyHigh: "",
        dewPoint: "",
        precipChance: "",
        currentWeather: [],
        dailyWeather: [],
        hourlyWeather: [],
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }; //closes handleInputChange

    handleFormSubmit = event => {
        event.preventDefault();
        API.search(
            this.state.latitude,
            this.state.longitude,
            console.log(`
            latitude = ${this.state.latitude}
            longitude = ${this.state.longitude}
            `)

        )
            .then(res => {
                this.setState({
                    currentWeather: res.data,
                    image: res.data.currently.icon,
                    currentTemp: res.data.currently.temperature,
                    feelsLike: res.data.currently.apparentTemperature,

                    dailyWeather: res.data.daily.data,
                    hourlyWeather: res.data.hourly.data
=======
                    dailyLow: res.data.daily.data[0].temperatureLow,
                    dailyHigh: res.data.daily.data[0].temperatureHigh,
                    hourlyWeather: res.data.hourly.data, 
                    dewPoint: res.data.currently.dewPoint,
                    precipChance: res.data.currently.precipProbability,

                })
                console.log(`
                Current Temp: ${this.state.currentTemp} 
                Feels Like: ${this.state.feelsLike}
                Time: ${this.state.currentWeather.currently.time}
                Summary: ${this.state.currentWeather.currently.summary}


=======
                Daily Low: ${this.state.dailyLow}
                Daily High: ${this.state.dailyHigh}
                Dew Point: ${this.state.dewPoint}
                Precip Chance: ${this.state.precipChance}

                `)
                console.log(this.state.currentWeather);

            })
            .catch(error => console.log(error));

    }; //closes handleFormSubmit


    sliceHourlyArray = array => {
        //need to .map through the api parameters
    }



    componentWillMount() {
        API.search(
            this.state.latitude,
            this.state.longitude,
            console.log(`
            latitude = ${this.state.latitude}
            longitude = ${this.state.longitude}
            `)

        )
            .then(res => {
                this.setState({
                    currentWeather: res.data,
                    image: res.data.currently.icon,
                    currentTemp: res.data.currently.temperature,
                    feelsLike: res.data.currently.apparentTemperature,

                    dailyWeather: res.data.daily.data,
                    hourlyWeather: res.data.hourly.data
                })
                console.log(`
                Current Temp: ${this.state.currentTemp}

                    dailyLow: res.data.daily.data[0].temperatureLow,
                    dailyHigh: res.data.daily.data[0].temperatureHigh,
                    hourlyWeather: res.data.hourly.data,
                    dewPoint: res.data.currently.dewPoint,
                    precipChance: res.data.currently.precipProbability,
                })
                console.log(`
                Current Temp: ${this.state.currentTemp} 

                Feels Like: ${this.state.feelsLike}
                Time: ${this.state.currentWeather.currently.time}
                Summary: ${this.state.currentWeather.currently.summary}
                Daily Low: ${this.state.dailyLow}
                Daily High: ${this.state.dailyHigh}

                `)
                console.log(this.state.currentWeather);
 

                Dew Point: ${this.state.dewPoint}
                Precip Chance: ${this.state.precipChance}
                `)
                console.log(this.state.currentWeather);


            })
            .catch(error => console.log(error));
    };

    render() {
        return (
            <div>
                <Navbar />
                
                <LocationSearch
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />

                <Jumbotron>
                    <WeatherDisplay
                        image={this.state.image}
                        currentTemp={this.state.currentTemp}
                        feelsLike={this.state.feelsLike}
                        dailyLow={this.state.dailyLow}
                        dailyHigh={this.state.dailyHigh}
                    />

                </Jumbotron>

                <div id="scrollContainer">
                {this.state.hourlyWeather.map((hourly, i) => (
                    <HourlyForecast
                        hourlyIcon={hourly.icon}
                        hourlyTime={hourly.time}
                        hourlyTemp= {hourly.temperature}
                        hourlyPrecip={hourly.precipProbability}
                        key={i}
                    />
                ))}
                </div>


                  <div id="scrollContainer5">
                {this.state.dailyWeather.map((daily, i) => (
                    <FiveDayForecast
                        date={daily.time}
                        dailyIcon={daily.icon}
                        dailySummary={daily.summary}
                        dailyTempHigh= {daily.temperatureMax}
                        dailyTempLow= {daily.temperatureMin}
                        dailyPrecip={daily.precipProbability}
                        key2={i}
                    />
                ))} 
                </div>

               <DarkskyMap lat={this.state.latitude} lng={this.state.longitude} zoom={8} mapField="temp" />

              

                <Footer />
            </div>
        )
    }

}
export default WeatherApp;