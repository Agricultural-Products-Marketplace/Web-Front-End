import React, { useEffect } from "react";
import './index.css';
import Footer from "../../shared/commen/footer";
import TopBar from "../../shared/commen/topBar";
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
                            <img src="https://thumbs.dreamstime.com/b/farmers-harvesting-crop-cartoon-vector-illustration-agriculture-farming-concept-cartoon-vector-illustration-farmers-harvesting-105519120.jpg" alt="" />
                        </div>
                        <div className="signup-content-form">
                            <p>Welcome to <br /><strong>Agricultural Market Place</strong></p>
                            <small>A Place where you can track all your <br /> expenses and incomes ....</small>
                            <span>Let's Get Started ...</span>
                                <a href="#" className="signup-content-form-button">Register as a Seler</a>
                            
                            <Link to={'/signup/customer'} className="signup-content-form-button">Register as a Customer</Link>
                            <span>Already Have an account? <Link to={'/signin'}>Login</Link></span>
                        </div>
                    </div>
            </div>
               
            </div>
        </div>
    )
}

export default SignUp;