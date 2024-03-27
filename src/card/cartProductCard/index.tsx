import React from "react";
import './index.css';

function CartProductCard() {
    return(
        <div className="cart-product-card">
            <div className="cart-product-title-image">
                <img src="" alt="" />
                <p>Red-Apple</p>
            </div>
            <div className="cart-product-price">
                $100
            </div>
            <div className="cart-product-quantity">
                <p>02</p>
            </div>
            <div className="cart-product-subtotal">
                <p>$200s</p>
            </div>
            <div className="cart-product-remove-btn">
                <a href="#">Remove</a>
            </div>

        </div>
    )
}

export default CartProductCard;