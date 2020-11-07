import React from "react";
import TableContent from "../Table-Content/table-content"
import "./table.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";


function Table(props) {
//console.log(props);
const employeeArray = props.employees;
//console.log(employeeArray)

        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Employee ID</th>
                        <th>Phone Number</th>
                        <th>Email Address</th>
                        <th>Age</th>

                        </tr>
                        <TableContent employees={employeeArray}/>
                            
                    </tbody>
            </table>

            <p>Or filter all employees</p>
            <select>
                <option value="">Please select a filter</option>
                <option value="emp-descending">Employee Name: Descending</option>
                <option value="emp-ascending">Employee Name: Ascending</option>
                <option value="job-descending">Job Title: Descending</option>
                <option value="job-ascending">Job Title: Ascending</option>
                <option value="dep-descending">Department: Descending</option>
                <option value="dep-ascending">Department: Ascending</option>
                <option value="id-descending">ID: Descending</option>
                <option value="id-ascending">ID: Ascending</option>
            </select>
     
        </div>
        );
    
  }
  
  export default Table;