import React, { Component } from "react";
import API from "../../utils/API";
import GeoCodeAPI from "../../utils/GeoCodeAPI";
import Navbar from "../../components/Navbar";
// import LocationSearch from "../../components/LocationSearch";
import Jumbotron from "../../components/Jumbotron";
import WeatherIcons from "../../components/WeatherIcons";
import CurrentWeather from "../../components/CurrentWeather";
import HourlyForecast from "../../components/HourlyForecast";
import DarkskyMap from 'react-darksky-map';
import FiveDayForecast from "../../components/FiveDayForecast";
import Footer from "../../components/Footer";


class WeatherApp extends Component {
    state = {
        geoCode: [] ,
        address: "dallas,tx",
        latitude: "",
        longitude: "",
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
        backgroundImage: ""
    };

    setBackgroundImage() {

        if (this.state.image === "clear-day") {
         this.setState({backgroundImage: "background-image: url('../../img/clear-day.jpg')"});
        } 
        else if (this.state.image === "clear-night") {
         this.setState({backgroundImage: "background-image: url('../../img/clear-night.jpg')"});
         }
        else if (this.state.image === "rain") {
         this.setState({backgroundImage: "background-image: url('../../img/rainy.jpg')"});
         }
        else if (this.state.image === "snow") {
         this.setState({backgroundImage: "background-image: url('../../img/snowy.jpg')"});
        }
        else if (this.state.image === "sleet") {
         this.setState({backgroundImage: "background-image: url('../../img/snowy.jpg')"});
        }
        else if (this.state.image === "wind") {
         this.setState({backgroundImage: "background-image: url('../../img/windy.jpg')"});
        }
        else if (this.state.image === "fog") {
         this.setState({backgroundImage: "background-image: url('../../img/foggy.jpg')"});
        }
        else if (this.state.image === "cloudy") {
         this.setState({backgroundImage: "background-image: url('../../img/cloudy-day.jpg')"});
        }
        else if (this.state.image === "partly-cloudy-day") {
         this.setState({backgroundImage: "background-image: url('../../img/cloudy-day.jpg')"});
        }
        else if (this.state.image === "partly-cloudy-night") {
         this.setState({backgroundImage: "background-image: url('../../img/cloudy-night.jpg')"});
        }
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
            console.log(`
            latitude = ${this.state.latitude}
            longitude = ${this.state.longitude}
            `)
        // })
        // .catch(error => console.log(error));

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
                hourlyWeather: res.data.hourly.data,
                dailyLow: res.data.daily.data[0].temperatureLow,
                dailyHigh: res.data.daily.data[0].temperatureHigh,
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
            Dew Point: ${this.state.dewPoint}
            Precip Chance: ${this.state.precipChance}

            `)
            console.log(this.state.currentWeather);
            this.setBackgroundImage();
            console.log(this.state.backgroundImage);
        })

            })
            .catch(error => console.log(error));

    };  //closes handleFormSubmit


    sliceHourlyArray = array => {
        //need to .map through the api parameters
    }



    componentWillMount() {
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
            console.log(`
            latitude = ${this.state.latitude}
            longitude = ${this.state.longitude}
            `)
        // })
        // .catch(error => console.log(error));

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
                hourlyWeather: res.data.hourly.data,
                dailyLow: res.data.daily.data[0].temperatureLow,
                dailyHigh: res.data.daily.data[0].temperatureHigh,
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
            Dew Point: ${this.state.dewPoint}
            Precip Chance: ${this.state.precipChance}

            `)
            console.log(this.state.currentWeather);
            this.setBackgroundImage();
            console.log(this.state.backgroundImage);
        })

            })
            .catch(error => console.log(error));

    }; 

    render() {
        return (
            <div>

                <Navbar
                  value={this.state.search}
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit} />
                
                {/* <LocationSearch
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                /> */}

                <Jumbotron>
                    <WeatherIcons />
                    <CurrentWeather
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



                  <div id="scrollContainer">
                {this.state.dailyWeather.map((daily, i) => (
                    <FiveDayForecast
                        date={daily.time}
                        dailyIcon={daily.icon}
                        dailySummary={daily.summary}
                        dailyTempHigh= {daily.temperatureMax}
                        dailyTempLow= {daily.temperatureMin}
                        dailyPrecip={daily.precipProbability}
                        key={i}
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