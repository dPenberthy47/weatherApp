import React, { Component } from "react";
import API from "../../utils/API";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import DarkskyMap from 'react-darksky-map';
import LocationSearch from "../../components/LocationSearch";
import Jumbotron from "../../components/Jumbotron";
import WeatherDisplay from "../../components/WeatherDisplay";
import HourlyForecast from "../../components/HourlyForecast";
//import Map from "../../components/Map";
import FiveDayForecast from "../../components/FiveDayForecast";
import Footer from "../../components/Footer";

class WeatherApp extends Component {
    state = {
        latitude: "32.7767",
        longitude: "-96.7970",
        image: "",
        currentTemp: "",
        feelsLike: "",
        dailyLow: "",
        dailyHigh: "",
        currentWeather: [],
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
                    dailyLow: res.data.daily.data[0].temperatureLow,
                    dailyHigh: res.data.daily.data[0].temperatureHigh,
                    hourlyWeather: res.data.hourly.data
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

            })
            .catch(error => console.log(error));

    }; //closes handleFormSubmit

    render() {
        return (
            <div>
                <Header />
                <Navbar />
                <LocationSearch
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                {/* <Card image={this.state.image} /> */}
                <Jumbotron>
                    <WeatherDisplay
                        image={this.state.image}
                        currentTemp={this.state.currentTemp}
                        feelsLike={this.state.feelsLike}
                        dailyLow={this.state.dailyLow}
                        dailyHigh={this.state.dailyHigh}
                    />

                </Jumbotron>
                {this.state.hourlyWeather.map(hourly => (
                    <HourlyForecast
                        hourlyTime={hourly.time}
                        hourlyTemp={hourly.temperature}

                    />
                ))}

               <DarkskyMap lat={this.state.latitude} lng={this.state.longitude} zoom={8} mapField="temp" />
                <FiveDayForecast />
                <Footer />
            </div>
        )
    }

}
export default WeatherApp;