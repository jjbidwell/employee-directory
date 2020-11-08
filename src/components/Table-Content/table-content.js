import React from "react";
import "./table-content.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function TableContent(props) {
    const search = props.search.toLowerCase();
    const employees = props.employees;
    //console.log(employees);
    const filter = props.filter;
    
    //console.log(employees);
    switch (filter) {
        case "emp-descending": 
        employees.sort((a,b) => (a.lastName > b.lastName) ? 1 : -1);
        break;
        case "emp-ascending": 
        employees.sort((a,b) => (a.lastName < b.lastName) ? 1 : -1);
        break;
        case "id-descending": 
        console.log('id-descending')
        employees.sort((a,b) => (a.id < b.id) ? 1 : -1);
        break;
        case "id-ascending": 
        console.log('id ascending')
        employees.sort((a,b) => (a.id > b.id) ? 1 : -1);
        break;
        case "age-descending": 
        employees.sort((a,b) => (a.age < b.age) ? 1 : -1);
        break;
        case "age-ascending": 
        employees.sort((a,b) => (a.age > b.age) ? 1 : -1);
        break;
        default: 
        console.log("Nothing");
    }
    const filteredArray = [];
    employees.forEach(element => {
        const lowerCase = element.fullName.toLowerCase();
        if (lowerCase.includes(search)) {
            filteredArray.push(element);
        }
    });
        return (
            filteredArray.map(result => 
                <tr key={result.id}>
                    <td className="firstName">{result.firstName}</td>
                    <td className="lastName">{result.lastName}</td>
                    <td className="id">{result.id}</td>
                    <td className="phone">{result.phone}</td>
                    <td className="email">{result.email}</td> 
                    <td className="age">{result.age}</td>   
                </tr>                            
                )
        )

        
      }
      
      export default TableContent;