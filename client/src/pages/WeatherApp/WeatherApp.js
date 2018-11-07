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
        // c: "",
        // d: "",
        weathers: []

    };

    componentDidMount() {
        this.searchWeather("42.3601", "-71.0589");
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
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.search(
            this.state.latitude ,
            this.state.longitude ,
            // this.state.c,
            // this.state.d,
            console.log(`
            this.state.a = ${this.state.latitude}
            this.state.b = ${this.state.longitude}
            `)
            // this.state.c = ${this.state.c}
            // this.state.d = ${this.state.d}
            
        )
            .then(res => {
                // this.setState({ weathers: res.data})
                console.log(res.data);
                // console.log(res.data."...");
                console.log(this.state.weathers);
            })
            .catch(error => console.log(error));
    };

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
                <WeatherDisplay />
                <HourlyForecast />
                <Map />
                <FiveDayForecast />
                <Footer />                                            
            </div>
        )
    }

}
export default WeatherApp;