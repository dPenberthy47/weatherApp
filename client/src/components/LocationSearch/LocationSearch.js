import React from "react";
import "./LocationSearch.css";

const LocationSearch = props => (
  <div className="container">
  <form>
    <div className="form-group">
      <label htmlFor="search"></label>
      {/* topic search field */}
<<<<<<< HEAD
      {/* <input
        onChange={props.handleInputChange}
        value={props.value}
        name="location" type="text" className="form-control" placeholder="Add Location" id="location"
      />
      <br /> */}
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="latitude" type="text" className="form-control" placeholder="Latitude" id="latitude"
      />
      <br />
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="longitude" type="text" className="form-control" placeholder="longitude" id="longitude"
      />
=======
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="search" type="text" className="form-control" placeholder="Add Location" id="topic"
      />
      <br />
>>>>>>> 1d637e3182fa82a2e4afb7a52ec93cfb7c035271
      <button
        onClick={props.handleFormSubmit}
        className="btn btn-primary"
      >
        Add
      </button>
    </div>
  </form>
  </div>
);

export default LocationSearch;
