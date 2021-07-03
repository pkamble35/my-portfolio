import { MenuItems } from "./MenuItem";
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
                    {MenuItems.map((item, index) => {
                        return (
                            <NavLink
                                to={item.link}
                                className={item.css} key={index}
                            >
                                {item.name}
                            </NavLink>
                        )
                    })
                    }
                </div>
            </nav>
        );
    }
}
export default Navbar;