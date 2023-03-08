import React from 'react';
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = ({cart}) => {
    const navigate = useNavigate();
    
    const goHome = () => {
        navigate("/")
    }

    const goShop = () => {
        navigate("./pages/Shop")
    }
    
    return (
      <div>
          <button onClick={goHome} type="button">Home</button>
          <button onClick={goShop} type="button">Shop</button>
      </div>
    )
}

export default Navbar;