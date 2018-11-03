import React, { Component } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import LocationSearch from "./components/LocationSearch";
import WeatherDisplay from "./components/WeatherDisplay";
import HourlyForecast from "./components/HourlyForecast";
import Map from "./components/Map";
import FiveDayForecast from "./components/FiveDayForecast";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Navbar />
      <LocationSearch />
      <WeatherDisplay />
      <HourlyForecast />
      <Map />
      <FiveDayForecast />
      <Footer />
      </div>
    );
  }
}

export default App;
