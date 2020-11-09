import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";


function Navbar() {
    return (
        <Router>
            <nav className="mb-4 navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="#">BidTech Employee Directory</Link>
            </nav>
        </Router>
    );
  }
  
  export default Navbar;