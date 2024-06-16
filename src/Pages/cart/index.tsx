import React, { useEffect, useState } from "react";
import './index.css';
import TopPath from "../shared/commen/topPath";
import { Link, useNavigate } from "react-router-dom";
import { addToCart, removeFromCart } from '../../redux/actions/cartAction';
import { AppState } from "../../redux/types";
import { connect, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducer";
import { CartModel } from "../../model/cart";
import { deletcartitem } from "../../services/cart/deletcart";
import { useDispatch } from "react-redux";
import { setNumbers } from "../../redux/actions/numberlistAction";

interface Props {
    cart: CartModel[];
    addToCart: (product: CartModel) => void;
    removeFromCart: (productId: number) => void;
}

const Cart: React.FC<Props> = ({ cart, addToCart, removeFromCart }) => {
    const isAuthenticated = useSelector((state: RootState) => state.login.isAuthenticated);
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const accessKey = useSelector((state: RootState) => state.login.user?.access);

    const [quantities, setQuantities] = useState(Array(cart.length).fill(1));
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const increment = (index: number) => {
        const newQuantities = [...quantities];
        newQuantities[index] += 1;
        setQuantities(newQuantities);
    };

    const handleSetNumbers = (newNumbers: number[]) => {
        dispatch(setNumbers(newNumbers));
    };

    const decrement = (index: number) => {
        const newQuantities = [...quantities];
        if (newQuantities[index] > 1) {
            newQuantities[index] -= 1;
            setQuantities(newQuantities);
        }
    };

    const handleRemoveFromCart = (itemId:number,productId: number, cartId: string, index: number) => {
        deletcartitem(String(cartId), itemId, String(accessKey));
        removeFromCart(productId);

        // Remove the corresponding quantity
        setQuantities(quantities.filter((_, i) => i !== index));
    };

    const highestShippingPrice = (list: CartModel[]): number => {
        let highestShipping = 0;
        for (let i = 0; i < list.length; i++) {
            const price = Number(list[i]?.product?.shipping_amount);
            if (price > highestShipping) {
                highestShipping = price;
            }
        }
        return highestShipping;
    };

    useEffect(() => {
        if (!isAuthenticated) {
            navigator('/signIn');
        }
    }, [isAuthenticated, navigator]);

    return (
        <>
            <div className="cart-page">
                <TopPath prepath="Home / " mainpath="Cart" />
                <div className="cart-product-items">
                    <table className="cart-page-product-table col">
                        <thead>
                            <tr className="cart-page-product-table-head row">
                                <td>Product</td>
                                <td>Price</td>
                                <td>Quantity(liter/kg)</td>
                                <td>Subtotal</td>
                            </tr>
                        </thead>
                        <tbody>
                            {!isLoading && cart.map((cartItem, index) => (
                                <tr key={index} className="cart-page-product-table-row row">
                                    <td>
                                        <button onClick={() => handleRemoveFromCart(Number(cartItem.id),cartItem.product.id, String(cartItem.cart_id), index)}>
                                            <sup>X</sup>
                                        </button>
                                        <img src={cartItem.product.image} alt={cartItem.product.title} />
                                        <p>{cartItem.product.title}</p>
                                    </td>
                                    <td>${cartItem.product.price}</td>
                                    <td className="cart-product-quantity row">
                                        <div className="cart-quantitiy-container row">
                                            <p>{quantities[index]}</p>
                                            <div className="quantity-button col">
                                                <button onClick={() => increment(index)}>
                                                    <i className="fa fa-angle-up"></i>
                                                </button>
                                                <button onClick={() => decrement(index)}>
                                                    <i className="fa fa-angle-down"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>${quantities[index] * Number(cartItem.product.price)}</td>
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
                        <input type="text" placeholder="Coupon Code" />
                        <button>Apply Coupon</button>
                    </div>
                    <div className="cart-page-bottom-checkout-right col">
                        <h3>Cart Total</h3>
                        <div className="cart-page-bottom-checkout-right-price col">
                            <div className="cart-page-bottom-checkout-right-price-item row">
                                <p>Subtotal :</p>
                                <p>${quantities.reduce((acc, curr, index) => acc + (curr * Number(cart[index]?.product?.price || 0)), 0)}</p>
                            </div>
                            <hr />
                        </div>
                        <div className="cart-page-bottom-checkout-right-price col">
                            <div className="cart-page-bottom-checkout-right-price-item row">
                                <p>Shipping :</p>
                                <p>{highestShippingPrice(cart)}</p>
                            </div>
                            <hr />
                        </div>
                        <div className="cart-page-bottom-checkout-right-price col">
                            <div className="cart-page-bottom-checkout-right-price-item row">
                                <p>Total :</p>
                                <p>${quantities.reduce((acc, curr, index) => acc + (curr * Number(cart[index]?.product?.price || 0)), 0) + highestShippingPrice(cart)}</p>
                            </div>
                            <hr />
                        </div>
                        <Link to={'/cart/checkout'} onClick={() => handleSetNumbers(quantities)}>Process to Checkout</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state: AppState) => ({
    cart: state.cart.cart
});

export default connect(mapStateToProps, { addToCart, removeFromCart })(Cart);
