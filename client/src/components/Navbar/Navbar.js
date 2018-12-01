import React from "react";
import "./Navbar.css";
// import { DropDownMenu } from "material-ui";

const Navbar = props => {

  // componentWillMount() => {
  //   DropDownMenu();
  // )}

  return (
    
    // <div>
    // <ul id="dropdown1" className="dropdown-content">
    //   <li><a href="/login"> <i className="material-icons">person_add</i></a></li>
    //   <li><a href="#!">two</a></li>
    //   <li className="divider"></li>
    //   <li><a href="#!">three</a></li>
    // </ul>
    // <nav>
    //   <div className="nav-wrapper">
    //     <a href="#!" className="brand-logo">Weather Watch</a>
    //     <ul className="right hide-on-med-and-down">
    //       <li><a href="sass.html">Sass</a></li>
    //       <li><a href="badges.html">Components</a></li>
          
    //       <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>
    //     </ul>
    //   </div>
    // </nav>
    // </div>
  




    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>

            <a href="/Login"> <i className="material-icons">person_add</i>

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
                // className="btn btn-primary"
                className="material-icons"
              >
              add_location </button>
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