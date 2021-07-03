
import React, { Component } from 'react';
import "../../App.css";
class Contact extends Component {
    render() {
        // You can use them as regular CSS styles
        return (
            <div className="container main-container" >
                <h2 className="mt-4 content-header">Contact</h2>
                <div className="divider"></div>
                <form className="portfolio-content">
                    <div className="form-group">
                        <div className="mb-3">
                            <label>Name
                    <input type="text" className="form-control" id="name1" placeholder="Priyanka Kamble" required />
                            </label>
                        </div>
                        <div className="mb-3">
                            <label>Email address
                    <input type="email" className="form-control" id="exampleFormControlInput1"
                                    placeholder="name@example.com" required minLength="8" />
                            </label>
                        </div>
                        <div className="mb-3">
                            <label>Message
                    <textarea name="message1" className="form-control" id="message1" rows="7" required minLength="8"
                                    maxLength="200"></textarea>
                            </label>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}
export default Contact;