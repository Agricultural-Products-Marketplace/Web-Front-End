import React, { useState } from "react";
import './index.css';
import TopPath from "../shared/commen/topPath";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducer";
import { ProductModel } from "../../model/product";
import { CartModel } from "../../model/cart";


function BillingDetail() {
    const [isBankChecked, setIsBankChecked] = useState(false);
  const [isCashChecked, setIsCashChecked] = useState(false);
  const user = useSelector((state:RootState)=> state.user.profile);
  const carts = useSelector((state:RootState)=>state.cart.cart);
  const [quantities, setQuantities] = useState(Array(carts.length).fill(1));
  const quantity = useSelector((state:RootState)=>state.numberlist.numbers)

  const handleBankChange = () => {
    setIsBankChecked(true);
    setIsCashChecked(false);
  };
  function highestShippingPrice(list: CartModel[]): number {
    let highestShipping = 0;

    for (let i = 0; i < list.length; i++) {
        const price = Number(list[i].product.shipping_amount);
        if (price > highestShipping) {
            highestShipping = price;
        }
    }

    return highestShipping;
}

  const handleCashChange = () => {
    setIsCashChecked(true);
    setIsBankChecked(false);
  };
    return(
        <>
        <div className="Billing-detail">
            <TopPath 
            prepath="Account / My Account / Product / "
            mainpath="Chech Out"
            />
            <h1>Billing Details</h1>
            <form className="billing-detail-main">
                <div className="billing-detail-main-left col">
                    <div className="billing-detail-form col">
                        <label htmlFor="name">Full Name<sup>*</sup></label>
                        <input type="text" name="FullName" required placeholder="Your Name" value={`${user?.user.first_name} ${user?.user.last_name}` }/>
                    </div>
                    <div className="billing-detail-form col">
                        <label htmlFor="StreetAddress">Street Address<sup>*</sup></label>
                        <input type="text" name="StreetAddress" required placeholder="Street Address"/>
                    </div>
                    <div className="billing-detail-form col">
                        <label htmlFor="ApartamaAddress">Apartama, floor, etc(optional)</label>
                        <input type="text" name="ApartamaAddress" placeholder="Apartama, Floor" />
                    </div>
                    <div className="billing-detail-form col">
                        <label htmlFor="TownCity">Town/City<sup>*</sup></label>
                        <input type="text" name="TownCity" required placeholder="City"/>
                    </div>
                    <div className="billing-detail-form col">
                        <label htmlFor="PhoneNumber">Phone Number<sup>*</sup></label>
                        <input type="text" name="PhoneNumber" required placeholder="Your Phone Number" value={user?.user.phone}/>
                    </div>
                    <div className="billing-detail-form col">
                        <label htmlFor="Email">Email Aderess</label>
                        <input type="text" name="Email" placeholder="Your Email" value={user?.user.email} readOnly/>
                    </div>
                    <div className="billing-address-save">
                        <input type="checkbox" name="save-info" id="save-info" />
                        <p>save this information for faster check-out next time</p>
                    </div>
                </div>
                <div className="billing-detail-main-right col">
                    {
                        carts.map((cart,index)=>(
                            <div key={index} className="billing-detail-main-right-products row">
                        <div className="checkout-product-detail row">
                            <img src={cart.product.image} alt="" />
                            <p>{cart.product.title}</p>
                        </div>
                        <p className="checkout-price">{cart.product.price} * {quantity[index]} = {Number(cart.product.price)*Number(quantity[index])}</p>
                    </div>
                        ))
                    }
                    
                    <div className="checkout-product-total-price col">
                        <div className="checkout-subtotal">
                            <p>Subtotal :</p>
                            <p className="checkout-price">{quantities.reduce((acc, curr, index) => acc + (Number(quantity[index]) * Number(carts[index].price)), 0)} Birr</p>
                        </div>
                        <hr />
                        <div className="checkout-subtotal">
                            <p>Shipping :</p>
                            <p className="checkout-price">{highestShippingPrice(carts)} Birr</p>
                        </div>
                        <hr />
                        <div className="checkout-subtotal">
                            <p>Total :</p>
                            <p className="checkout-price">{quantities.reduce((acc, curr, index) => acc + (quantity[index] * Number(carts[index].price)), 0) + highestShippingPrice(carts)} Birr</p>
                        </div>
                    </div>
                    <div className="checkout-payment-bank col">
                        <div className="payment-radio payment-radio-first">
                            <div><input type="checkbox" name="bank" id="bank" 
                            checked={isBankChecked}
                            onChange={handleBankChange}
                            />
                            <p>Bank</p></div>
                            <div className="checkout-payment-bank-options row">
                                <img src="https://apps.odoo.com/web/image/loempia.module/162843/icon_image?unique=1ab0c41" alt="" />
                            </div>
                        </div>
                        <div className="payment-radio">
                            <input type="checkbox" name="cash" id="cash" 
                            checked={isCashChecked}
                            onChange={handleCashChange}
                            />
                            <p>Cash on delivery</p>
                        </div>
                    </div>
                    <div className="checkout-coupon row">
                        <input type="text" />
                        <button>Apply Coupon</button>
                    </div>
                    <button className="subimt-order-btn">Place Order</button>
                    
                </div>
            </form>
        </div>
        </>
    )
}

export default BillingDetail;