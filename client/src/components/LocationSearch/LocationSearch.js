import React from "react";
import "./LocationSearch.css";

const LocationSearch = props => (
  <div className="container">
  <form>
    <div className="form-group">
      <label htmlFor="search"></label>
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="address"
        type="text"
        className="form-control"
        placeholder="Add a Location"
        id="address"
      />
      <br />
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
