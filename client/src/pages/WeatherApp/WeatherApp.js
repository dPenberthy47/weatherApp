import React, { Component } from "react";
import API from "../../utils/API";
import GeoCodeAPI from "../../utils/GeoCodeAPI";
import Navbar from "../../components/Navbar";
// import WeatherAlert from "../../components/WeatherAlert";
import WeatherIcons from "../../components/WeatherIcons";
import CurrentWeather from "../../components/CurrentWeather";
import HourlyForecast from "../../components/HourlyForecast";
import Map from "../../components/Map";
import FiveDayForecast from "../../components/FiveDayForecast";
import Footer from "../../components/Footer";


class WeatherApp extends Component {
    state = {
        geoCode: [],
        address: "dallas,tx",
        latitude: 32.7767,
        longitude: -96.7970,
        image: "",
        alert: "",
        timeZone: "",
        currently: "",
        currentTemp: "",
        feelsLike: "",
        dailyLow: "",
        dailyHigh: "",
        dewPoint: "",
        precipChance: "",
        currentWeather: [],
        dailyWeather: [],
        hourlyWeather: [],
        backgroundImage: "",
        currentTime: ""
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
        GeoCodeAPI.search(
            this.state.address,
            console.log(`address = ${this.state.address}`)
        )
            .then(res => {
                this.setState({
                    geoCode: res.data,
                    latitude: res.data.results[0].geometry.location.lat,
                    longitude: res.data.results[0].geometry.location.lng,
                })
                console.log(this.state.geoCode);
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
                            // alert: res.data.alerts[0],
                            timeZone: res.data.timezone,
                            image: res.data.currently.icon,
                            currentSummary: res.data.currently.summary,
                            currentTemp: res.data.currently.temperature,
                            feelsLike: res.data.currently.apparentTemperature,
                            dailyWeather: res.data.daily.data,
                            hourlyWeather: res.data.hourly.data,
                            dailyLow: res.data.daily.data[0].temperatureLow,
                            dailyHigh: res.data.daily.data[0].temperatureHigh,
                            dewPoint: res.data.currently.dewPoint,
                            precipChance: res.data.currently.precipProbability,
                            currentTime: res.data.currently.time
                        })
                        console.log(this.state.currentWeather);
                        // console.log(this.state.hourlyWeather);
                        console.log(`
                        Time Zone: ${this.state.timeZone}
                        Alert: ${this.state.alert}
                        Current Temp: ${this.state.currentTemp} 
                        Feels Like: ${this.state.feelsLike}
                        Time: ${this.state.currentWeather.currently.time}
                        Summary: ${this.state.currentWeather.currently.summary}
                        Daily Low: ${this.state.dailyLow}
                        Daily High: ${this.state.dailyHigh}
                        Dew Point: ${this.state.dewPoint}
                        Precip Chance: ${this.state.precipChance}
                        Image: ${this.state.image}
                        background-image: ${this.state.backgroundImage}
                        Current Time: ${this.state.currentTime}
                        `)
                    })
                // .value().trim();
            })
            .catch(error => console.log(error));
    };  //closes handleFormSubmit

    componentDidMount() {
        GeoCodeAPI.search(
            this.state.address,
            console.log(`
            address = ${this.state.address}
            `)
        )
            .then(res => {
                this.setState({
                    geoCode: res.data,
                    latitude: res.data.results[0].geometry.location.lat,
                    longitude: res.data.results[0].geometry.location.lng,
                })
                console.log(`address = ${this.state.address}`);
                console.log(this.state.geoCode);
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
                            // alert: res.data.alerts[0],
                            timeZone: res.data.timezone,
                            image: res.data.currently.icon,
                            currentSummary: res.data.currently.summary,
                            currentTemp: res.data.currently.temperature,
                            feelsLike: res.data.currently.apparentTemperature,
                            dailyWeather: res.data.daily.data,
                            hourlyWeather: res.data.hourly.data,
                            dailyLow: res.data.daily.data[0].temperatureLow,
                            dailyHigh: res.data.daily.data[0].temperatureHigh,
                            dewPoint: res.data.currently.dewPoint,
                            precipChance: res.data.currently.precipProbability,
                        })
                        // this.setBackgroundImage();
                        console.log(this.state.currentWeather);
                        console.log(`
                        Time Zone: ${this.state.timeZone}
                        Alert: ${this.state.alert}
                        Current Temp: ${this.state.currentTemp} 
                        Feels Like: ${this.state.feelsLike}
                        Time: ${this.state.currentWeather.currently.time}
                        Summary: ${this.state.currentWeather.currently.summary}
                        Daily Low: ${this.state.dailyLow}
                        Daily High: ${this.state.dailyHigh}
                        Dew Point: ${this.state.dewPoint}
                        Precip Chance: ${this.state.precipChance}
                        Image: ${this.state.image}
                        background-image: ${this.state.backgroundImage}
                        `)
                    })
            })
            .catch(error => console.log(error));
    };

    render() {
        return (
            <div>
                <div id={this.state.image} >
                    <Navbar
                        value={this.state.search}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                    />

                    {/* <WeatherAlert /> */}

                    <WeatherIcons />

                    <CurrentWeather
                        image={this.state.image}
                        currentSummary={this.state.currentSummary}
                        currentTemp={this.state.currentTemp}
                        feelsLike={this.state.feelsLike}
                        dailyLow={this.state.dailyLow}
                        dailyHigh={this.state.dailyHigh}
                    />

                    <div id="scrollContainer">
                        {(this.state.hourlyWeather.slice(1, 19)).map((hourly, i) => (
                            <HourlyForecast
                                timeZone={this.state.timeZone}
                                hourlyIcon={hourly.icon}
                                hourlyTime={hourly.time}
                                hourlyTemp={hourly.temperature}
                                hourlyPrecip={hourly.precipProbability}
                                key={i}

                            />
                        ))}
                    </div>

                    <div id="scrollContainer">
                        {(this.state.dailyWeather.slice(1, 6)).map((daily, i) => (
                            <FiveDayForecast
                                date={daily.time}
                                dailyIcon={daily.icon}
                                dailySummary={daily.summary}
                                dailyTempHigh={daily.temperatureMax}
                                dailyTempLow={daily.temperatureMin}
                                dailyPrecip={daily.precipProbability}
                                key={i}
                            />
                        ))}
                    </div>
                </div>

                <Map
                    lat={this.state.latitude}
                    lng={this.state.longitude}
                    zoom={8}
                    mapField="temp" />

                <Footer />
            </div>
        )
    }
}
export default WeatherApp;