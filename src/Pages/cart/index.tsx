import React from "react";
import './index.css';
import NavBar from "../../commen/navBar";

function Cart() {
    return(
        <>
        <NavBar/>
        <div className="cart-page">
            <div className="cart-page-top-nav-display"></div>
            <div className="cart-page-product-title"></div>
            <div className="cart-page-product-list"></div>
            <div className="cart-page-bottom-button"></div>
        </div>
        </>
    ) 
}

export default Cart;