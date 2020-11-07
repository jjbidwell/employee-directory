import React from "react";
import "./searchbar.css";
import $ from"jquery";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function Searchbar() {
    return (
        <div className="container">
            <form>
                <div className="form-group">

                    <label htmlFor="employee-name">Search by employee name</label>
                    <input className="form-control" id="employee-name" type="text" placeholder="Employee's name"></input>
                </div>

                <button className= "btn btn-lg btn-info">Search</button>
            </form>
        </div>
    );
  }
  
  export default Searchbar;