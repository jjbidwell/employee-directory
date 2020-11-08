import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import "./navbar.css";
import $ from"jquery";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Popper from "popper.js";

function Navbar() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="#">BidTech Employee Directory</Link>
            </nav>
        </Router>
    );
  }
  
  export default Navbar;