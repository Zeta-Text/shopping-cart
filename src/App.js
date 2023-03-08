import Navbar from './components/Navbar';
import Header from './components/Header'
import Shop from './pages/Shop'
import Home from './pages/Home'
import React, { useEffect, useState } from "react";
import ShoppingCart from './components/ShoppingCart';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {

  const [cart, setCart] = useState([])

  const products = [
    {
      title: "SNES Game"
    },
    {
      title: "DreamCast Game"
    },
    {
      title: "N64 Game"
    }
  ]

  function addToCart() {

  }

  return (
    <div className='content'>
      <div className='header'>
        <Header />
      </div>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='shoppingCart'>
        <ShoppingCart cart={cart}/>
      </div>
      <div className='page'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pages/Shop" element={<Shop />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;

//src
// |- App.js
// |- Shop.js

//components
// |- Item1.js
// |- Item2.js
// |- Item3.js
// |- Navbar.js
// |- ShoppingCart.js


//|-components
//|-pages
//  |-Page
//|App
//|-RouteSwitch

//*App*
//const [total, setTotal] = useState(0)
//display navbar
//maybe a few pictures

//*Navbar*
//linear menu bar
//home button links to app
//shop button links to /Shop.js

//*Shop*
//display <item1 /> 2 and 3

//*Items*
//picture maybe
//buttons for inc/dec the quantity
//input field to set qty manually
//add to card button
//when button is pressed
//setTotal(qty)

//ShoppingCart
//display [total]
//checkout button 

