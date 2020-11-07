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
        </div>
        );
    
  }
  
  export default Table;