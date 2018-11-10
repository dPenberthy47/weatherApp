import React from "react";
import "./Navbar.css";

const Navbar = props => {

  return (

    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="collapsible.html">  <i class="material-icons">person_add</i></a></li>
        </ul>
        <form>
          <div class="input-field">
            <input id="search" type="search" required />
            <label class="label-icon" placeholder="City Search" for="search" ><i class="material-icons">search</i></label>
            <i class="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;