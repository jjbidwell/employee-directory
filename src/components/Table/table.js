import React from "react";
import "./table.css";
import $ from"jquery";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function Table() {
    return (
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
    );
  }
  
  export default Table;