import React from "react";
import "./NavbarLoginPage.css";
// import { DropDownMenu } from "material-ui";

const NavbarLoginPage = props => {
    return (
        <nav>
            <div className="nav-wrapper">
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="/"> <i className="material-icons">home</i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavbarLoginPage;