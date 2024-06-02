import React, { useState } from "react";
import './index.css';
import TopPath from "../shared/commen/topPath";
import { Link } from "react-router-dom";
import ProductModel from "../../model/product";
import { addToCart, removeFromCart } from '../../redux/actions/cartAction';
import Products from '../admin/products/index';
import { AppState } from "../../redux/types";
import { connect } from "react-redux";

interface Props{
    cart:ProductModel[];
    addToCart:(product:ProductModel) => void;
    removeFromCart: (productId: number) => void;
}

const Cart: React.FC<Props> = ({cart,addToCart,removeFromCart}) => {

    const products =[
        {
            Image: 'https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=',
            Title: 'Red Apple',
            Price: 60
        },
    ];

    // State for quantities, initialized to an array of length equal to the products array
    const [quantities, setQuantities] = useState(Array(products.length).fill(1));

    // Function to increment quantity of a specific product
    const increment = (index: number) => {
        const newQuantities = [...quantities];
        newQuantities[index] += 1;
        setQuantities(newQuantities);
    };

    // Function to decrement quantity of a specific product, but not below 1
    const decrement = (index: number) => {
        const newQuantities = [...quantities];
        if (newQuantities[index] > 1) {
            newQuantities[index] -= 1;
            setQuantities(newQuantities);
        }
    };

    

    return(
        <>
            <div className="cart-page">
                <TopPath
                prepath="Home / " 
                mainpath="Cart" />
                <div className="cart-product-items">
                    <table className="cart-page-product-table col">

                            <tr className="cart-page-product-table-head row">
                                <td>Product</td>
                                <td>Price</td>
                                <td>Quantity</td>
                                <td>Subtotal</td>
                            </tr>
                        <tbody>
                            {cart.map((product, index) => (
                                <tr key={index} className="cart-page-product-table-row row">
                                    <td>
                                        <button onClick={()=>{
                                            removeFromCart(product.id);
                                        }}><sup>X</sup></button>
                                        <img src={product.img} alt={product.productName} />
                                        <p>{product.productName}</p>
                                    </td>
                                    <td>${product.productPrice}</td>
                                    <td className="cart-product-quantity row">
                                        <div className="cart-quantitiy-container row">
                                            <p>{quantities[index]}</p>
                                            <div className="quantity-button col">
                                                <button onClick={() => increment(index)}><i className="fa fa-angle-up"></i></button>
                                                <button onClick={() => decrement(index)}><i className="fa fa-angle-down"></i></button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>${quantities[index] * product.productPrice}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="cart-page-bottom-button row">
                    <Link to={'/'}>Return To Shop</Link>
                    <a href="#">Update Cart</a>
                </div>
                <div className="cart-page-bottom-checkout row">
                    <div className="cart-page-bottom-checkout-left row">
                        <input type="text" placeholder="Coupon Code"/>
                        <button>Apply Coupon</button>
                    </div>
                    <div className="cart-page-bottom-checkout-right col">
                        <h3>Cart Total</h3>
                        <div className="cart-page-bottom-checkout-right-price col">
                            <div className="cart-page-bottom-checkout-right-price-item row">
                                <p>Subtotal :</p>
                                <p>${quantities.reduce((acc, curr, index) => acc + (curr * products[index].Price), 0)}</p>
                            </div>
                            <hr />
                        </div>
                        <div className="cart-page-bottom-checkout-right-price col">
                            <div className="cart-page-bottom-checkout-right-price-item row">
                                <p>Shipping :</p>
                                <p>Free</p>
                            </div>
                            <hr />
                        </div>
                        <div className="cart-page-bottom-checkout-right-price col">
                            <div className="cart-page-bottom-checkout-right-price-item row">
                                <p>Total :</p>
                                <p>${quantities.reduce((acc, curr, index) => acc + (curr * products[index].Price), 0)}</p>
                            </div>
                            <hr />
                        </div>
                        <Link to={'/cart/checkout'}>Process to Checkout</Link>
                    </div>
                </div>
            </div>
        </>
    ) 
};

const mapStateToProps = (state: AppState) =>({
    cart: state.cart.cart
})

export default connect(mapStateToProps,{addToCart,removeFromCart})(Cart);
