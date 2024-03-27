import React, { useState } from "react";
import './index.css';
import NavBar from "../../commen/navBar";
import CartProductCard from "../../card/cartProductCard";

function Cart() {
    const price = 30;
    var productquantity = 2;

    var [quantity, setQuantity] = useState(1);

    var increment = () => {
        setQuantity( quantity++);
    };

    var decrement = () =>{
        if(quantity == 1){
            return setQuantity(1)
        }
        else{
            return setQuantity(quantity--);
        }
    }


    return(
        <>
        <NavBar/>
        <div className="cart-page">
            <div className="cart-page-top-nav-display"><p>Home/<span>Cart</span></p></div>
            <div className="cart-product-items">
            <table className="cart-page-product-table">
                <tr className="cart-page-product-table-head">
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Subtotal</td>
                </tr>
                <tr className="cart-page-product-table-row">
                    <td>
                        <button><sup>X</sup></button>
                        <img src="https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=" alt="" />
                        <p>Red-Apple</p>
                    </td>
                    <td>${price}</td>
                    <td className="cart-product-quantity">
                        <div className="cart-quantitiy-container">
                        <p>{quantity}</p>
                        <div className="quantity-button">
                            <button onClick={increment}><i className="fa fa-angle-up"></i></button>
                            <button onClick={decrement}><i className="fa fa-angle-down"></i></button>
                        </div>
                        </div>
                    </td>
                    <td>${quantity * price}</td>
                </tr>
                
            </table>
            </div>
            <div className="cart-page-bottom-button">
                <a href="#">Return To Shop</a>
                <a href="#">Update Cart</a>
            </div>
            <div className="cart-page-bottom-checkout">
                <div className="cart-page-bottom-checkout-left">
                    <input type="text" placeholder="Coupon Code"/>
                    <button>Apply Coupon</button>
                </div>
                <div className="cart-page-bottom-checkout-right">
                    <h3>Cart Total</h3>
                    <div className="cart-page-bottom-checkout-right-price">
                        <div className="cart-page-bottom-checkout-right-price-item">
                        <p>Subtotal :</p>
                        <p>$460</p>
                        </div>
                        <hr />
                    </div>
                    <div className="cart-page-bottom-checkout-right-price">
                        <div className="cart-page-bottom-checkout-right-price-item">
                        <p>Shipping :</p>
                        <p>Free</p>
                        </div>
                        <hr />
                    </div>
                    <div className="cart-page-bottom-checkout-right-price">
                        <div className="cart-page-bottom-checkout-right-price-item">
                        <p>Total :</p>
                        <p>$460</p>
                        </div>
                        <hr />
                    </div>
                    <button>Process to Checkout</button>
                </div>
            </div>
        </div>
        </>
    ) 
}


export default Cart;