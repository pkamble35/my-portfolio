import React, { Component } from 'react';
import "../App.css";
import Header from "./Header";
class About extends Component {
    render() {
        // You can use them as regular CSS styles
        return (
            <div>
                <Header />
                <main className="container  main-container">

                    <div className="row">
                        <div className="col-md-4 ml-md-auto">
                            <h3 className="mb2">About me</h3>
                            <p >
                                Hello I am Priyanka Kamble. I am aspiring programmer focused on developing Responsive Front End to provide
                                unique perspectives on how end-users interact with websites and software platforms.
                                Innovative problem-solver who is passionate about developing
                                apps with a focus on responsive design and development. Strengths in creativity, teamwork, and building
          projects from ideation to execution.<br />
                                <strong>Technologies: </strong>HTML, CSS, Javascript, Jquery, Bootstrap,React.js, Node.js, Express.js, MySql Server, Heroku.<br />

                            </p>
                        </div>
                        <div className="col-md-3 ml-md-auto">
                            <h3 className="mb2">Contact</h3>
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm">
                                        <a href="https://www.linkedin.com/in/priyanka-damodar-54a3359a/" target="_blank" rel="noreferrer"
                                            className="col dark-gray width-120">
                                            <i className="fa fa-fw fa-2x fa-linkedin-square valign-middle"></i>
                                            <span className="h5 header-font">LinkedIn</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm">
                                        <a href="https://github.com/pkamble35" target="_blank" rel="noreferrer" className="col dark-gray width-120">
                                            <i className="fa fa-fw fa-2x fa-github-square valign-middle"></i>
                                            <span className="h5 header-font">GitHub</span>
                                        </a>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </main>
            </div>
        );
    }
}
export default About;