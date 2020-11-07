import React from "react";
import "./filter.css";
import "bootstrap/dist/css/bootstrap.css";

function Filter(){
    return (
        <div>
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
    )
}

export default Filter;