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
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <Link className="nav-item nav-link" to="#">Features</Link>
            <Link className="nav-item nav-link" to="#">Pricing</Link>
            <Link className="nav-item nav-link" to="#">Disabled</Link>
            </div>
        </div>
        </nav>
        </Router>
    );
  }
  
  export default Navbar;