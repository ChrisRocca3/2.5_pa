import React, { Component } from "react";
import {
  Route,
  Routes,
  NavLink,
  HashRouter
} from "react-router-dom";
import "./App.css";
import Home from "../Home/Home.js";
import Contact from "../Contact/Contact.js";
import Product from "../Product/Product.js";


class App extends Component {
    render() {
      return (
        <HashRouter>
          <div> 
            <h1>Pacific NorthWest X-Ray Inc.</h1>
            <ul className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/product">Products</NavLink></li>      
            </ul>
            <div className="content">
              <Routes>
              <Route path="/" element ={<Home/>}/>
              <Route path="/contact" element ={<Contact/>}/>
              <Route path="/product" element ={<Product/>}/>
              </Routes>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default App;
