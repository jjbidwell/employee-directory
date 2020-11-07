import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css"
import './style.css';
import Navbar from "./components/Navbar/navbar";
import Searchbar from "./components/Searchbar/searchbar";



class App extends Component {
  render(){
    return (
      <div>
        <Navbar />
        <Searchbar/>
      </div>
    )
  }
}

export default App;
