import React from "react";
import "./table-content.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function TableContent(props) {
    const search = props.search.toLowerCase();
    const employees = props.employees;
    const gender = props.gender;
    const department = props.department;
    //console.log(employees);
    const sort = props.sort;
    let filteredArray = [];
    let finalArray = [];
    
    //console.log(employees);
    switch (sort) {
        case "emp-descending": 
        employees.sort((a,b) => (a.lastName > b.lastName) ? 1 : -1);
        break;
        case "emp-ascending": 
        employees.sort((a,b) => (a.lastName < b.lastName) ? 1 : -1);
        break;
        case "id-descending": 
        //console.log('id-descending')
        employees.sort((a,b) => (a.id < b.id) ? 1 : -1);
        break;
        case "id-ascending": 
        //console.log('id ascending')
        employees.sort((a,b) => (a.id > b.id) ? 1 : -1);
        break;
        case "age-descending": 
        employees.sort((a,b) => (a.age < b.age) ? 1 : -1);
        break;
        case "age-ascending": 
        employees.sort((a,b) => (a.age > b.age) ? 1 : -1);
        break;
        default: 
        break;
    }

    switch (gender) {
        case "female": 
        filteredArray = employees.filter(element => {
            //console.log(element.gender === "female");
            return element.gender === "female";
        });
        //console.log(employees);
        break;
        case "male":
        filteredArray = employees.filter(element => {
            return element.gender === "male";
        });
        //console.log(employees);
        break;
        default: filteredArray = employees;
        break;
    }
    
    switch (department) {
        case "accounting": 
        filteredArray = filteredArray.filter(element => {
            //console.log(element.department);
            return element.department === "Accounting";
        });
        break;
        case "engineering": 
        filteredArray = filteredArray.filter(element => {
            return element.department === "Engineering";
        });
        break;
        case "sales": 
        filteredArray = filteredArray.filter(element => {
            return element.department === "Sales";
        });
        break;
        case "hr": 
        filteredArray = filteredArray.filter(element => {
            return element.department === "Human Resources";
        });
        break;
        case "it": 
        filteredArray = filteredArray.filter(element => {
            return element.department === "IT";
        });
        break;
        default:
        break;
    }
    //console.log(gender);
    //console.log(department);

    filteredArray.forEach(element => {
        const lowerCase = element.fullName.toLowerCase();
        if (lowerCase.includes(search)) {
            finalArray.push(element);
        }
    });

        return (
            finalArray.map(result => 
                <tr key={result.id}>
                    <td className="firstName">{result.firstName}</td>
                    <td className="lastName">{result.lastName}</td>
                    <td className="id">{result.id}</td>
                    <td className="department">{result.department}</td>
                    <td className="phone">{result.phone}</td>
                    <td className="email">{result.email}</td> 
                    <td className="age">{result.age}</td>   
                </tr>                            
                )
        )

        
      }
      
      export default TableContent;