import React, { useState } from "react";
import './index.css';
import TopBar from "../../../commen/topBar";
import Footer from "../../../commen/footer";
import { Link } from "react-router-dom";

function signup() {
    const [activecreatepassword, setActivecreatepassword] = useState(false);

    const handleClickcreatepassword = () => {
        setActivecreatepassword(prevActive => !prevActive);
    };


    return(
        <div>
            <div className="signin">
            <div className="signin-container">
            <Link to={'/'} className="signin-back-icon">
                    <i className="fa fa-arrow-left"></i>
                    </Link>
                    <div className="signin-contents">
                        <div className="signin-content-image">
                            <img src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1711152000&semt=sph" alt="" />
                        </div>
                        <div className="signin-content-form">
                            <p><strong>Sign In</strong><br />Login now to track all your expenses and income at a place</p>
                            <small>Error Message</small>
                            <input type="text" placeholder="Email/Phone"/>
                    
                            <div className="signin-form-password-input">
                            <input type={activecreatepassword ? "text" : "password"} placeholder="Your Password"/>
                            <button onClick={handleClickcreatepassword}>
                                {activecreatepassword ? <i className="fa fa-eye"></i> : <i className="fa fa-eye-slash"></i>}
                            </button>
                            </div>
                            <a href="#" className="signin-forget-password">Forget Password</a>
                            
                            <a href="#" className="signin-form-button">Log In</a>
                            <a href="#" className="signin-form-button-google">
                            <i className="fa-brands fa-google"></i>
                                Continue With Google</a>
                            
                            <span>Don't Have an account? <Link to={'/signUp'}>Sign Up</Link></span>
                        </div>
                    </div>
            </div>
               
            </div>
        </div>
    )
}

export default signup;