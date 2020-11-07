import React, {Component} from "react";
import "./table.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import API from "../../utilities/API";

const employees = [];


class Table extends Component {

    componentDidMount() {
        API.fillPage()
        .then(res => {
            const results = res.data.results;
            results.forEach(element => {
                const employee = {
                    name: `${element.name.first} ${element.name.last}`,
                    id: element.id.value,
                    email: element.email,
                    phone: element.phone
                }
                employees.push(employee);
            });
            console.log(employees);
        });
    }

    render() {
        return (
            <div className="container">
                <table>
                    <tbody>
                        <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Employee ID</th>
                        <th>Phone Number</th>
                        <th>Age</th>

                        </tr>
                        <tr>
                            <td>Jill</td>
                            <td>Smith</td>
                            <td>1</td>
                            <td>5555555555</td>
                            <td>45</td>
                        </tr>
                            
                    </tbody>
            </table>
        </div>
        );
    }
  }
  
  export default Table;