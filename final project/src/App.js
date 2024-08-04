import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Shop from './pages/Shop';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CartDetails from './pages/Cart';
import Payment from './pages/Payment';
import About from './pages/About';
import logo from "../src/images/logo.jpg"
function App() {

  return (
    <>
    <Provider store={store}>
        <BrowserRouter>
      <header>
        
        <nav data-mdb-navbar-init class="navbar navbar-expand-lg bg-body">
          <div class="container-fluid">
            <button
              data-mdb-collapse-init
              class="navbar-toggler"
              type="button"
              data-mdb-target="#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarExample01">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item active">
                  <Link class="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/cart">Cart</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/about">About</Link>
                </li>
                
                <li class="nav-item">
                  <Link class="nav-link" to="/payment">Payment</Link>
                </li>
                
                
              </ul>
              <img src={logo} style={{"float": "left;","width":"120px","height":"70px"}}></img>
            </div>
          </div>
        </nav>
      </header>
      
          <Routes>
            <Route exact path="/" element={<Shop></Shop>} ></Route>
            <Route exact path="/cart" element={<CartDetails></CartDetails>}></Route>
            <Route exact path="/payment" element={<Payment></Payment>}></Route>
            <Route exact path="/about" element={<About></About>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
