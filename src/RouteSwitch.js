import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./pages/Shop"
import { Link } from 'react-router-dom'


const RouteSwitch = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
          <Route path="./pages/Shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default RouteSwitch;