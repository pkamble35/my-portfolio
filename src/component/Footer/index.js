
import React, { Component } from 'react';
import "../../App.css";
class Footer extends Component {
    render() {
        // You can use them as regular CSS styles
        return (
            <footer className="mt-auto">
            <div className="container justify-content-center">
              <span className="text-muted">┬ęcopyright</span>
            </div>
          </footer>
        );
    }
}
export default Footer;