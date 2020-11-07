import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css"
import './style.css';
import Navbar from "./components/Navbar/navbar";
import Table from "./components/Table/table";
import Searchbar from "./components/Searchbar/searchbar";
import Filter from "./components/Filter/filter";
import API from "./utilities/API";


class App extends Component {
  render(){
    return (
      <div>
        <Navbar />
        <Searchbar/>
        <Filter />
        <Table />
      </div>
    )
  }
}

export default App;
