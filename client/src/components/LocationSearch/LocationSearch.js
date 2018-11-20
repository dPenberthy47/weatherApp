import React from "react";
import "./LocationSearch.css";

const LocationSearch = props => (
  <div className="container">
  <form>
    <div className="form-group">
      <label htmlFor="search"></label>
      {/* topic search field */}
      {/* <input
        onChange={props.handleInputChange}
        value={props.value}
        name="location" type="text" className="form-control" placeholder="Add Location" id="location"
      />
      <br /> */}
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="address" type="text" className="form-control" placeholder="Add a Location" id="address"
      />
      <br />
      {/* <input
        onChange={props.handleInputChange}
        value={props.value}
        name="latitude" type="text" className="form-control" placeholder="Latitude" id="latitude"
      />
      <br />
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="longitude" type="text" className="form-control" placeholder="longitude" id="longitude"
      /> */}
      <button
        onClick={props.handleFormSubmit}
        className="btn btn-primary"
      >
        +
      </button>
    </div>
  </form>
  </div>
);

export default LocationSearch;
