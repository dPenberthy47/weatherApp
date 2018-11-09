import React, { Component } from "react";
import API from "../../utils/API";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import LocationSearch from "../../components/LocationSearch";
import WeatherDisplay from "../../components/WeatherDisplay";
import HourlyForecast from "../../components/HourlyForecast";
import Map from "../../components/Map";
import FiveDayForecast from "../../components/FiveDayForecast";
import Footer from "../../components/Footer";

class WeatherApp extends Component {
    state = {
        latitude: "",
        longitude: "",
        currentWeather: []

    };

    componentDidMount() {
        this.searchWeather("32.7767", "-96.7970");
    };

    searchWeather = (latitude, longitude) => {
        API.search(latitude, longitude)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
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
                this.setState({ currentWeather: res.data })
                console.log(this.state.currentWeather);
                for (var i = 0; i<this.state.currentWeather.alerts.length; i++) {
                    console.log(this.state.currentWeather.alerts[i]);    
                }
                // console.log(this.state.currentWeather.alerts[0]);
                // console.log(this.state.currentWeather.alerts[0].title);
                // console.log(this.state.currentWeather.alerts[0].description);
                console.log(`
                Current Temp: ${this.state.currentWeather.currently.temperature} 
                Feels Like: ${this.state.currentWeather.currently.apparentTemperature}
                Time: ${this.state.currentWeather.currently.time}
                Summary: ${this.state.currentWeather.currently.summary}
                Daily High: ${this.state.currentWeather.daily.data[0].temperatureHigh} at ${this.state.currentWeather.daily.data[0].temperatureHighTime}
                Daily Low: ${this.state.currentWeather.daily.data[0].temperatureLow} at ${this.state.currentWeather.daily.data[0].temperatureLowTime}
                `)

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
                <WeatherDisplay>
                    {/* {this.state.currentWeather.map(current => {
                        return (
                            <div>
                                <p>
                                    {current.alerts.description}
                                </p>
                            </div>
                        )
                    })} */}
                </WeatherDisplay>
                <HourlyForecast />
                <Map />
                <FiveDayForecast />
                <Footer />
            </div>
        )
    }

}
export default WeatherApp;