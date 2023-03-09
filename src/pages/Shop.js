import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import Input from "../components/Input";

const Shop = ({products, addToCart, remove}) => {
  

    const renderCards = products.map((product) =>
        <div className="cardWrapper" key={product.title}>
            <div className="card">{product.title}</div>
            <button className="addBtn" onClick={() => { addToCart(product) }}>
                Add To Cart
            </button>
            <button className="remove" onClick={() => { remove(product.title) }}>Remove</button>
            <Input 
                products={products}
                addToCart={addToCart}
                product={product}/>
        </div>
        
    )

    return (
        <div className='shopBody'>
            {renderCards} 
        </div>
    )
}

export default Shop;