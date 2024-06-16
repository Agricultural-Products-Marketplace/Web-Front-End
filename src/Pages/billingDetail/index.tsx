import React, { useState } from "react";
import './index.css';
import TopPath from "../shared/commen/topPath";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducer";
import { ProductModel } from "../../model/product";
import { CartModel } from "../../model/cart";
import { addorder } from "../../services/order/createorder";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


function BillingDetail() {
    const navigate = useNavigate();
    const cart = useSelector((state:RootState)=>state.cart.cart)
    const [isBankChecked, setIsBankChecked] = useState(true);
  const [isCashChecked, setIsCashChecked] = useState(false);
  const user = useSelector((state:RootState)=> state.user.profile);
  const carts = useSelector((state:RootState)=>state.cart.cart);
  const initialQuantities:number[] = cart.map(item => Number(item.qty));
//   const [quantities, setQuantities] = useState(initialQuantities);
  const quantity = useSelector((state:RootState)=>state.numberlist.numbers);
  
  const [fullName,setFullName] = useState<string>(`${user?.user.first_name} ${user?.user.last_name}`)
  const [phone,setPhone] = useState<string>(String(user?.user.phone));
  const [address,setAddress] = useState<string>('Addis Ababa');
  const [city,SetCity] = useState<string>('Addis Ababa');
  const [state,setState] = useState<string>('Addis Ababa');
  const [country,setCountry] = useState<string>('Ethiopia');

  const handlefullnameChange = (e: { target: { value: React.SetStateAction<string>; }; }) =>{
    setFullName(e.target.value);
  }
  const handlephoneChange = (e: { target: { value: React.SetStateAction<string>; }; }) =>{
    setPhone(e.target.value);
  }
  const handleaddressChange = (e: { target: { value: React.SetStateAction<string>; }; }) =>{
    setAddress(e.target.value);
  }
  const handlecityChange = (e: { target: { value: React.SetStateAction<string>; }; }) =>{
    SetCity(e.target.value);
  }
  const handleStateChange = (e: { target: { value: React.SetStateAction<string>; }; }) =>{
    setState(e.target.value);
  }
  const handleCountryChange = (e: { target: { value: React.SetStateAction<string>; }; }) =>{
    setCountry(e.target.value);
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await addorder(fullName,String(user?.user.email),phone,address,city,state,country,String(`${user?.user.id}_cart`),Number(user?.user.id));
    if (response.message === "Order Created Successfully") {

        
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = 'http://192.168.158.245:8000/api/payment/chapa/';
  
        // Add the orderId as a hidden input
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = 'order_oid';
        input.value = response.order_oid;
        form.appendChild(input);
  
        // Append the form to the body and submit it
        document.body.appendChild(form);
        form.submit();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Order Not Created Successfully',
          text: 'Something went wrong!',
        });
      }
  }

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
            <form className="billing-detail-main" onSubmit={handleSubmit}>
                <div className="billing-detail-main-left col">
                    <div className="billing-detail-form col">
                        <label htmlFor="name">Full Name<sup>*</sup></label>
                        <input type="text" name="FullName" required placeholder="Your Name" onChange={handlefullnameChange} value={fullName}/>
                    </div>
                    <div className="billing-detail-form col">
                        <label htmlFor="StreetAddress">Email<sup>*</sup></label>
                        <input type="text" name="email" required placeholder="Email" value={user?.user.email} readOnly/>
                    </div>
                    <div className="billing-detail-form col">
                        <label htmlFor="ApartamaAddress">Phone Number</label>
                        <input type="text" name="phone" required placeholder="Phone Number" onChange={handlephoneChange} value={phone}/>
                    </div>
                    <div className="billing-detail-form col">
                        <label htmlFor="address">Address<sup>*</sup></label>
                        <input type="text" name="address" required placeholder="Address" onChange={handleaddressChange} value={address}/>
                    </div>
                    <div className="billing-detail-form col">
                        <label htmlFor="city">City<sup>*</sup></label>
                        <input type="text" name="city" required placeholder="city" onChange={handlecityChange} value={city}/>
                    </div>
                    <div className="billing-detail-form col">
                        <label htmlFor="state">State</label>
                        <input type="text" name="state" placeholder="State" required onChange={handleStateChange} value={state}/>
                    </div>
                    <div className="billing-detail-form col">
                        <label htmlFor="country">Country</label>
                        <input type="text" name="country" required placeholder="Country"  onChange={handleCountryChange} value={country}/>
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
                            <p className="checkout-price">{initialQuantities.reduce((acc, curr, index) => acc + (Number(initialQuantities[index]) * Number(carts[index].price)), 0)} Birr</p>
                        </div>
                        <hr />
                        <div className="checkout-subtotal">
                            <p>Shipping :</p>
                            <p className="checkout-price">{highestShippingPrice(carts)} Birr</p>
                        </div>
                        <hr />
                        <div className="checkout-subtotal">
                            <p>Total :</p>
                            <p className="checkout-price">{initialQuantities.reduce((acc, curr, index) => acc + (initialQuantities[index] * Number(carts[index].price)), 0) + highestShippingPrice(carts)} Birr</p>
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
                    {/* <div className="checkout-coupon row">
                        <input type="text" />
                        <button>Apply Coupon</button>
                    </div> */}
                    <button type="submit" className="subimt-order-btn">Place Order</button>
                    
                </div>
            </form>
        </div>
        </>
    )
}

export default BillingDetail;