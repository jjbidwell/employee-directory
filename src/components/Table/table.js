import React from "react";
import TableContent from "../Table-Content/table-content"
import "./table.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";


function Table(props) {

const search = props.search;
const employees = props.employees;
const sort = props.sort;
const gender = props.gender;
const department = props.department;

        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Employee ID</th>
                        <th>Department</th>
                        <th>Phone Number</th>
                        <th>Email Address</th>
                        <th>Age</th>

                        </tr>
                        <TableContent 
                            employees={employees}
                            search = {search}    
                            sort = {sort}
                            gender = {gender}
                            department = {department}
                        />
                            
                    </tbody>
            </table>
        </div>
        );
    
  }
  
  export default Table;