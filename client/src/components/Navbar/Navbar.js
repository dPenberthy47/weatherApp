import React from "react";
import "./Navbar.css";

const Navbar = props => {

  return (

    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="collapsible.html"> <i className="material-icons">person_add</i>
            </a>
          </li>
        </ul>
        <form>
          <div className="input-field">
            <input id="search" type="search" required />
            <label className="label-icon" placeholder="City Search" htmlFor="search" ><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;