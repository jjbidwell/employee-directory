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
        employees: [],
        filter: ""
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

    handleInputChange = event => {
        this.setState({ search: event.target.value }, () => {
            //console.log(this.state.search)
        })
        
    }

    render () {
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="employee-name">Search by employee name</label>
                    <input onChange={this.handleInputChange} className="form-control" id="employee-name" type="text" placeholder="Employee's name"></input>
                </div>
                <button className= "btn btn-lg btn-info">Search</button>
            </form>

            <div>
            <p>Or filter all employees</p>
            <select>
                <option value="">Please select a filter</option>
                <option value="emp-descending">Last Name: Descending</option>
                <option value="emp-ascending">Last Name: Ascending</option>
                <option value="id-descending">ID: Descending</option>
                <option value="id-ascending">ID: Ascending</option>
                <option value="age-descending">Age: Descending</option>
                <option value="age-ascending">Age: Ascending</option>
            </select>
        </div>
      
        <Table 
            search = {this.state.search}
            employees = {this.state.employees}
        />
        </div>
    );
}
  }
  
  export default Searchbar;