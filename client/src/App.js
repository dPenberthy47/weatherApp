import React, { Component } from "react";
<<<<<<< HEAD
import WeatherApp from "./pages/WeatherApp"
=======
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import LocationSearch from "./components/LocationSearch";
import WeatherDisplay from "./components/WeatherDisplay";
import HourlyForecast from "./components/HourlyForecast";
import Map from "./components/Map";
import FiveDayForecast from "./components/FiveDayForecast";
import Footer from "./components/Footer";
>>>>>>> 1d637e3182fa82a2e4afb7a52ec93cfb7c035271

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
      <WeatherApp />
=======
      <Header />
      <Navbar />
      <LocationSearch />
      <WeatherDisplay />
      <HourlyForecast />
      <Map />
      <FiveDayForecast />
      <Footer />
>>>>>>> 1d637e3182fa82a2e4afb7a52ec93cfb7c035271
      </div>
    );
  }
}

export default App;
