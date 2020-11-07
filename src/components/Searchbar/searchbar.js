import React, { Component } from "react";
import "./searchbar.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import API from "../../utilities/API";
import Table from "../Table/table";
const employees = [];

class Searchbar extends Component {
    state = {
        search: "",
        employees: []
    }

    componentDidMount() {
        let count = 1;
        API.fillPage()
        .then(res => {
            const results = res.data.results;
            //console.log(results);
            results.forEach(element => {
                const employee = {
                    firstName: element.name.first,
                    lastName: element.name.last,
                    fullName: `${element.name.last}, ${element.name.first}`,
                    id: count,
                    email: element.email,
                    phone: element.phone,
                    age: element.dob.age
                }
                employees.push(employee);
                count ++;
            });
            this.setState({employees: employees})
            //console.log(this.state.employees);
        }).catch(err => {
            console.log(err);
        });
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
      
        <Table employees = {this.state.employees}/>
        </div>
    );
}
  }
  
  export default Searchbar;