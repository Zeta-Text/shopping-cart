import React, { useEffect, useState } from "react";

function Input({products, addToCart, product}) {
    const [number, setNumber] = useState("")


    function handleSubmit(e, product) {
        e.preventDefault()
        console.log(product)
        for(let i=0;i<number;i++) {
            addToCart(product)
        }
    }

    return (
        <form onSubmit={(e) => {handleSubmit(e, product)}}>
                <label htmlFor="qty">Enter quantity
                    <input 
                        type="text"
                        name="qty"
                        value={number}
                        onInput={e => setNumber(e.target.value)}
                    />    
                </label>
                <button type="submit">Submit</button>
            </form>
    )
}

export default Input;