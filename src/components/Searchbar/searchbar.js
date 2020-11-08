import React, { Component } from "react";
import "./searchbar.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import API from "../../utilities/API";
import Table from "../Table/table";
const employees = [];
const departments = ["Accounting", "Engineering", "Sales", "Human Resources", "IT"];
let num = 0;

class Searchbar extends Component {
    state = {
        search: "",
        employees: [],
        sort: "",
        gender: "",
        department: "", 
    }

    componentDidMount() {
        let count = 1;
        API.fillPage()
        .then(res => {
            const results = res.data.results;
            results.forEach(element => {
                const employee = {
                    firstName: element.name.first,
                    lastName: element.name.last,
                    fullName: `${element.name.last}, ${element.name.first}`,
                    id: count,
                    email: element.email,
                    phone: element.phone,
                    age: element.dob.age,
                    gender: element.gender,
                    department: departments[num] 
                }
                employees.push(employee);
                count ++;
                if (num === 4){
                    num = 0;
                } else {
                    num ++;
                }
            });
        this.setState({employees: employees})
        }).catch(err => {
            console.log(err);
        });
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value }, () => {
        })
        
    }

    handleSortChange = event => {
        this.setState({ sort: event.target.value }, () => {
        })
    }

    handleGenderChange = event => {
        this.setState({ gender: event.target.value }, () => {
        })
    }

    handleDepartmentChange = event => {
        this.setState({ department: event.target.value }, () => {
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
            </form>

            <div>
            <p>Sort employees</p>
            <select onChange={this.handleSortChange}>
                <option value="">Please select a filter</option>
                <option value="emp-descending">Last Name: Descending</option>
                <option value="emp-ascending">Last Name: Ascending</option>
                <option value="id-descending">ID: Descending</option>
                <option value="id-ascending">ID: Ascending</option>
                <option value="age-descending">Age: Descending</option>
                <option value="age-ascending">Age: Ascending</option>
            </select>

            <p>Filter by Department</p>
            <select onChange={this.handleDepartmentChange}>
                <option value="">Please select a filter</option>
                <option value="accounting">Accounting</option>
                <option value="engineering">Engineering</option>
                <option value="sales">Sales</option>
                <option value="hr">Human Resources</option>
                <option value="it">IT</option>
            </select>

            <p>Filter by Gender</p>
            <select onChange={this.handleGenderChange}>
                <option value="">Please select a filter</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
            </select>
        </div>
      
        <Table 
            search = {this.state.search}
            employees = {this.state.employees}
            sort = {this.state.sort}
            department ={this.state.department}
            gender = {this.state.gender}
        />
        </div>
    );
}
  }
  
  export default Searchbar;