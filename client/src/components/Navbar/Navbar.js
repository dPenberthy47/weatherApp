import React from "react";
import "./Navbar.css";

const Navbar = props => {

  return (

    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/LoginPage"> <i className="material-icons">person_add</i>
            </a>
          </li>
        </ul>
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              onChange={props.handleInputChange}
              value={props.value}
              name="address"
            />
            <label
              onChange={props.handleInputChange}
              value={props.value}
              name="address"
              className="label-icon"
              placeholder="City Search"
            // htmlFor="search"
            >
              <button
                onClick={props.handleFormSubmit}
                className="btn btn-primary"
              >
              + </button>
              {/* <i className="material-icons">search</i> */}
              {/* </button> */}
              </label>
              
            {/* <i className="material-icons">close</i> */}
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;