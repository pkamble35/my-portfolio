
import React, { Component } from 'react';
import "../../App.css";
class Portfolio extends Component {
    render() {
        // You can use them as regular CSS styles
        return (
            <div className="container main-container" >
                <h2 className="mt-4 content-header">Portfolio</h2>
                <div className="divider"></div>
                <div className="container portfolio-content">
                    <div className="row">
                        <div className="col-sm">
                            <div className="card">
                                <h5 className="card-header">Cocktail Receipe</h5>
                                <div className="card-body">
                                    <p className="card-title"> <strong>Use Case: </strong> Using CocktailDB API and Soundcloud API, we created an
                app that allows the user to find new and exciting drinks, based on a certain alcohol.</p>
                                    <p className="card-text"> <strong>Technologies: </strong> HTML, CSS, Jquery, Foundation, The Cocktail DB</p>
                                    <a href="https://pkamble35.github.io/cocktails-recipe/" target="_blank" rel="noreferrer" className="btn btn-primary">Live</a>
                                    <a href="https://github.com/pkamble35/cocktails-recipe" target="_blank" rel="noreferrer" className="btn btn-primary">Github</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card">
                                <h5 className="card-header">Weather Dashboard</h5>
                                <div className="card-body">
                                    <p className="card-title"> <strong>Use Case: </strong>This application allows user to enter location and get
                weather details. The current day and next 5 days weather report is displayed. Weather details are
                fetched from open weather api.</p>
                                    <p className="card-text"> <strong>Technologies: </strong> HTML, CSS, Jquery, Bootstrap, Open Weather API</p>
                                    <a href="https://pkamble35.github.io/weather-dashboard/" target="_blank" rel="noreferrer" className="btn btn-primary">Live</a>
                                    <a href="https://github.com/pkamble35/weather-dashboard" target="_blank" rel="noreferrer"
                                        className="btn btn-primary">Github</a>
                                </div>
                            </div>
                        </div>
                        <div className="w-100"></div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <div className="card">
                                <h5 className="card-header">Work Day scheduler</h5>
                                <div className="card-body">
                                    <p className="card-title"> <strong>Use Case: </strong>Given a schedular where i had updated a Date at the top,
                on a daily basis. User will the specific time that would be 9-5 where they can block their time.</p>
                                    <p className="card-text"> <strong>Technologies: </strong> HTML, CSS, Jquery, Bootstrap</p>
                                    <a href="https://pkamble35.github.io/work-day-scheduler/" target="_blank" rel="noreferrer" className="btn btn-primary">Live</a>
                                    <a href="https://github.com/pkamble35/work-day-scheduler" target="_blank" rel="noreferrer"
                                        className="btn btn-primary">Github</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm">
                            <div className="card">
                                <h5 className="card-header">Note-Taker</h5>
                                <div className="card-body">
                                    <p className="card-title"> <strong>Use Case: </strong>This is note taker application to take notes.
                This application provides users ability to manage notes. User can edit, delete and create new notes..</p>
                                    <p className="card-text"> <strong>Technologies: </strong> HTML, CSS, Jquery, Bootstrap, Node.js, Express.Js,JSON</p>
                                    <a href="https://immense-sands-68877.herokuapp.com/" target="_blank" rel="noreferrer" className="btn btn-primary">Live</a>
                                    <a href="https://github.com/pkamble35/note-taker" target="_blank" rel="noreferrer"
                                        className="btn btn-primary">Github</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <div className="card">
                                <h5 className="card-header">E-Commerce Site</h5>
                                <div className="card-body">
                                    <p className="card-title"> <strong>Use Case: </strong>This is application is the back end for an e-commerce site.
                  This is Express.js API that uses Sequelize to interact with a MySQL database.</p>
                                    <p className="card-text"> <strong>Technologies: </strong>Javascript, Node.js, Express.js, sequelize.js, MySql Server</p>
                                    <a href="https://github.com/pkamble35/retail-product" target="_blank" rel="noreferrer"
                                        className="btn btn-primary">Github</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm">
                            <div className="card">
                                <h5 className="card-header">Battleship</h5>
                                <div className="card-body">
                                    <p className="card-title"> <strong>Use Case: </strong>Whether you are someone who is bored looking to pass some time, or a coding student looking to test and improve your skills,
                   this is a game that allows someone to play other users in a game of Battleship</p>
                                    <p className="card-text"> <strong>Technologies: </strong> HTML, CSS, Jquery, Bootstrap, Node.js,, sequelize.js, Express.Js,MySql Server</p>
                                    <a href="https://sleepy-beach-35058.herokuapp.com/" target="_blank" rel="noreferrer" className="btn btn-primary">Live</a>
                                    <a href="https://github.com/pkamble35/battleship" target="_blank" rel="noreferrer"
                                        className="btn btn-primary">Github</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Portfolio;