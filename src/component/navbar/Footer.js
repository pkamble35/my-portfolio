import { MenuItems } from "./MenuItem";
import React, { Component } from 'react';
import "../../App.css";
class Footer extends Component {
    render() {
        // You can use them as regular CSS styles
        return (
            <footer className="mt-auto">
            <div>
              <span className="text-muted">©copyright</span>
            </div>
          </footer>
        );
    }
}
export default Footer;