import { MenuItems } from "./MenuItem";
import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        // You can use them as regular CSS styles
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
                <div className="container">
                    <span className="navbar-brand" href="#">
                        <h4><a className="navbar-brand" href="https://pkamble35.github.io/Responsive-portfolio">Priyanka Kamble</a></h4>
                    </span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            {MenuItems.map((item, index) => {
                                return (
                                    <li className="nav-item">
                                        <a className={item.css} href={item.link}>{item.name}</a>
                                    </li>
                                )
                            })
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Navbar;