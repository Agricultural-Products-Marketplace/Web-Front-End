import React from "react";
import './index.css';
import Footer from "../../../commen/footer";
import TopBar from "../../../commen/topBar";
import { Link } from 'react-router-dom';
import signup from "../signIn";

function SignUp() {
    return(
        <div>
            <div className="Signup">
            <div className="signup-container">
            <Link to={'/'} className="Signup-back-icon">
                    <i className="fa fa-arrow-left"></i>
                    </Link>
                    <div className="Signup-contents">
                        <div className="signup-content-image">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/019/848/977/small/food-delivery-online-shopping-stay-at-home-we-deliver-to-you-order-food-grocery-online-from-app-by-smart-phone-fast-delivery-of-groceries-bucket-smart-phone-vector.jpg" alt="" />
                        </div>
                        <div className="signup-content-form">
                            <p>Welcome to <br /><strong>Agricultural Market Place</strong></p>
                            <small>A Place where you can track all your <br /> expenses and incomes ....</small>
                            <span>Let's Get Started ...</span>
                                <a href="#" className="signup-content-form-button">Register as a Seler</a>
                            
                            <Link to={'/signup/customer'} className="signup-content-form-button">Register as a Customer</Link>
                            <span>Already Have an account? <Link to={'/signIn'}>Login</Link></span>
                        </div>
                    </div>
            </div>
               
            </div>
        </div>
    )
}

export default SignUp;