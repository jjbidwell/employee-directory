import React, { Component } from "react";
import "./searchbar.css";
import $ from"jquery";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import API from "../../utilities/API";

class Searchbar extends Component {
    state = {
        employeeName: "",
        employeeID: 0,
        jobTitle: "",
        department: ""
    }

    componentDidMount() {

    }


    render () {
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
  }
  
  export default Searchbar;