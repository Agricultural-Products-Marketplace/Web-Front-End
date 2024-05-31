import React, { useState } from "react";
import './index.css';
import NavBar from "../../commen/navBar";
import TopPath from "../../commen/topPath";

function BillingDetail() {
    const [isBankChecked, setIsBankChecked] = useState(false);
  const [isCashChecked, setIsCashChecked] = useState(false);

  const handleBankChange = () => {
    setIsBankChecked(true);
    setIsCashChecked(false);
  };

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
                        <input type="text" name="FullName" required placeholder="Your Name"/>
                    </div>
                    <div className="billing-detail-form col">
                        <label htmlFor="CompanyName"> Company Name</label>
                        <input type="text" name="CompanyName" placeholder="Company Name"/>
                    </div>
                    <div className="billing-detail-form col">
                        <label htmlFor="StreetAddress">Street Address<sup>*</sup></label>
                        <input type="text" name="StreetAddress" required placeholder="Street Address"/>
                    </div>
                    <div className="billing-detail-form col">
                        <label htmlFor="ApartamaAddress">Apartama, floor, etc(optional)</label>
                        <input type="text" name="ApartamaAddress" placeholder="Apartama, Floor"/>
                    </div>
                    <div className="billing-detail-form col">
                        <label htmlFor="TownCity">Town/City<sup>*</sup></label>
                        <input type="text" name="TownCity" required placeholder="City"/>
                    </div>
                    <div className="billing-detail-form col">
                        <label htmlFor="PhoneNumber">Phone Number<sup>*</sup></label>
                        <input type="text" name="PhoneNumber" required placeholder="Your Phone Number"/>
                    </div>
                    <div className="billing-detail-form col">
                        <label htmlFor="Email">Email Aderess</label>
                        <input type="text" name="Email" placeholder="Your Email"/>
                    </div>
                    <div className="billing-address-save">
                        <input type="checkbox" name="save-info" id="save-info" />
                        <p>save this information for faster check-out next time</p>
                    </div>
                </div>
                <div className="billing-detail-main-right col">
                    <div className="billing-detail-main-right-products row">
                        <div className="checkout-product-detail row">
                            <img src="https://thumbs.dreamstime.com/b/red-apple-isolated-clipping-path-19130134.jpg" alt="" />
                            <p>Apple</p>
                        </div>
                        <p className="checkout-price">$150</p>
                    </div>
                    <div className="checkout-product-total-price col">
                        <div className="checkout-subtotal">
                            <p>Subtotal :</p>
                            <p className="checkout-price">$300</p>
                        </div>
                        <hr />
                        <div className="checkout-subtotal">
                            <p>Shipping :</p>
                            <p className="checkout-price">Free</p>
                        </div>
                        <hr />
                        <div className="checkout-subtotal">
                            <p>Total :</p>
                            <p className="checkout-price">$300</p>
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
                                <img src="https://play-lh.googleusercontent.com/Mtnybz6w7FMdzdQUbc7PWN3_0iLw3t9lUkwjmAa_usFCZ60zS0Xs8o00BW31JDCkAiQk" alt="" />
                                <img src="https://apps.odoo.com/web/image/loempia.module/162843/icon_image?unique=1ab0c41" alt="" />
                                <img src="https://banner2.cleanpng.com/20180802/xri/kisspng-logo-mastercard-vector-graphics-font-visa-mastercard-logo-png-photo-png-arts-5b634298cd58d5.9008352515332317688411.jpg" alt="" />
                                <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/45_Bitcoin_logo_logos-512.png" alt="" />
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