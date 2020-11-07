import React from "react";
import "./searchbar.css";
import $ from"jquery";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function Searchbar() {
    return (
        <form>
            <div className="form-group">
                
                <label for="employee-name">Search by employee name</label>
                <input className="form-control" id="employee-name" type="text" placeholder="Employee's name"></input>
            </div>

            <button className= "btn btn-lg btn-info">Search</button>
        </form>
    );
  }
  
  export default Searchbar;