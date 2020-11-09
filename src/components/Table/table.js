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
<div id="table">
                <table className="mt-3 table table-striped">
                    <tbody>
                            <tr className="thead-dark">
                                <th scope="col">ID</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Department</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Email Address</th>
                                <th scope="col">Age</th>

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