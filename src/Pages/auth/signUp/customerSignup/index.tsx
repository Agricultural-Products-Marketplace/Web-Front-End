import React from "react";
import './index.css';
import TopBar from "../../../../commen/topBar";
import Footer from "../../../../commen/footer";

function CustomerSignUp() {
    return(
        <div>
            <TopBar />
            <div className="Signup">
            <div className="signup-container">
            <a href="#" className="Signup-back-icon">
                    <i className="fa fa-arrow-left"></i>
                    </a>
                    <div className="Signup-contents">
                        <div className="signup-content-image">
                            <img src="https://st.depositphotos.com/18722762/51522/v/450/depositphotos_515228776-stock-illustration-online-registration-sign-login-account.jpg" alt="" />
                        </div>
                        <div className="signup-content-form">
                            <p>Welcome <br /><strong>Sign Up For Customer Account</strong></p>
                            <div className="signup-form-input-name">
                            <input type="text" placeholder="First Name"/>
                            <input type="text" placeholder="Last Name"/>
                            </div>
                            <input type="text" placeholder="Email/Phone"/>
                            <input type="text" placeholder="Create Password"/>
                            <input type="text" placeholder="Conform Password"/>
                            <a href="#" className="signup-form-button">Register</a>
                            <span>Already Have an account? <a href="#">Login</a></span>
                        </div>
                    </div>
            </div>
               
            </div>
            <Footer />
        </div>
    )
}

export default CustomerSignUp;