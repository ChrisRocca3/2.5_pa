import React from "react";
import product from "./Product.png";

export default function Product() {
    return (
        <div>
            <h2>Featured Products</h2>
            <img alt="product" src={product} />
        </div>
    ) 
}