import React, {Component} from "react";
import "./table.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import API from "../../utilities/API";

class Table extends Component {

    componentDidMount() {
        API.fillPage()
        .then(res => console.log(res.data.results));
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
                        <th>Job Title</th>
                        <th>Department</th>

                        </tr>
                            <tr>
                            <td>Jill</td>
                            <td>Smith</td>
                            <td>1</td>
                            <td>CEO</td>
                            <td>Executive</td>
                            </tr>
                            <tr>
                            <td>Joe</td>
                            <td>Estevez</td>
                            <td>2</td>
                            <td>Lead Programmer</td>
                            <td>Engineering</td>
                            </tr>
                            <tr>
                            <td>Joe Don</td>
                            <td>Baker</td>
                            <td>3</td>
                            <td>Head of Security</td>
                            <td>Security</td>
                            </tr>
                    </tbody>
            </table>
        </div>
        );
    }
  }
  
  export default Table;