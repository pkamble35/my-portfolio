import React, { Component } from 'react';
import "../App.css";
import logo from '../assets/1578892517523.jpg';
class Header extends Component {

    render() {
        return (
            <header className="bg-splash-gray border-bottom border-light-gray">
                <div className="center">
                    <img src={logo} alt="Priyanka Kamble"
                        className="lazyload border bg-white p1 border-light-gray circle square-100" />
                    <h2>Priyanka Kamble</h2>
                    <p><strong><em>Aspiring Programmer </em></strong><br />
                        <p> <i className="fa fa-fw fa-2x fa-envelope valign-middle"></i>
                            <span className="h5 header-font">priyanka.kamble3501@gmail.com</span></p><br />
                        <a href="./assets/resume.pdf" download="filename">
                            <i className="fa fa-download" aria-hidden="true"></i>
                            <span className="h5 header-font">Resume</span>
                        </a>
                    </p>
                </div>
            </header>
        );
    }
}
export default Header;