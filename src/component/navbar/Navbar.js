
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "../../App.css";
class Navbar extends Component {
    render() {
        // You can use them as regular CSS styles
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <a className="navbar-brand" href="/#">Priyanka Kamble</a>
                        <div className="navbar " id="navbarNav">
                        <NavLink
                                to="/about"
                                className="nav-link"
                            >
                                About
                                </NavLink>
                            <NavLink
                                to="/portfolio"
                                className="nav-link"
                            >
                                Portfolio
                         </NavLink>
                            <NavLink
                                to="/contact"
                                className="nav-link"
                            >
                                Contact
                         </NavLink>
                </div>
            </nav>
        );
    }
}
export default Navbar;