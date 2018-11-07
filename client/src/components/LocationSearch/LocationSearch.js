import React from "react";
import "./LocationSearch.css";

const LocationSearch = props => (
  <div className="container">
  <form>
    <div className="form-group">
      <label htmlFor="search"></label>
      {/* topic search field */}
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="search" type="text" className="form-control" placeholder="Add Location" id="topic"
      />
      <br />
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
