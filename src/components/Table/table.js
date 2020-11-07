import React from "react";
import TableContent from "../Table-Content/table-content"
import "./table.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";


function Table(props) {

const search = props.search;
const employeeArray = props.employees;


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
                        <TableContent 
                            employees={employeeArray}
                            search = {search}    
                        />
                            
                    </tbody>
            </table>
        </div>
        );
    
  }
  
  export default Table;