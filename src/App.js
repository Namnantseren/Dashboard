import { Routes, Route } from "react-router-dom"
import Header from "./components/Header.jsx"
import SideMenu from "./components/SideMenu"
import Home from "./Pages/Home";
import "./Style/app.css"
import Login from "./Pages/Login.jsx"
import Products from "./Pages/Products.jsx";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="flex">
        <div className="side">
          <SideMenu />
        </div>
        <div className="mid">
          <Routes>
            <Route path="/Home" element={<Home />}/>
            <Route path="/Products" element={<Products />}/>
            <Route path="/Log" element={<Login />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
