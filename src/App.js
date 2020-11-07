import "bootstrap/dist/css/bootstrap.css"
import './style.css';
import Navbar from "./components/Navbar/navbar";
import Table from "./components/Table/table";
import Searchbar from "./components/Searchbar/searchbar";

function App() {
  return (
    <div className= "container">
      <Navbar />
      <Searchbar/>
      <Table />
    </div>
  )
}

export default App;
