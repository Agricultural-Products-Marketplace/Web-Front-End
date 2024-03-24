import React, { useState } from "react";
import './index.css';
import TopBar from "../../../../commen/topBar";
import Footer from "../../../../commen/footer";
import { Link } from "react-router-dom";

function CustomerSignUp() {
    const [activecreatepassword, setActivecreatepassword] = useState(false);
    const [activeconfirmpassword, setActiveconfirmpassword] = useState(false);

    const handleClickcreatepassword = () => {
        setActivecreatepassword(prevActive => !prevActive);
    };

    const handleClickconfirmpassword = () => {
        setActiveconfirmpassword(prevActive => !prevActive);
    };
    return(
        <div>
            <div className="Signup">
            <div className="signup-container">
            <Link to={'/signUp'} className="Signup-back-icon">
                    <i className="fa fa-arrow-left"></i>
                    </Link>
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
                            <div className="signup-form-password-input">
                            <input type={activecreatepassword ? "text" : "password"} placeholder="Create Password"/>
                            <button onClick={handleClickcreatepassword}>
            {activecreatepassword ? <i className="fa fa-eye"></i> : <i className="fa fa-eye-slash"></i>}
        </button>
                            </div>
                            <div className="signup-form-password-input">
                            <input type={activeconfirmpassword ? "text" : "password"} placeholder="Create Password"/>
                            <button onClick={handleClickconfirmpassword}>
            {activeconfirmpassword ? <i className="fa fa-eye"></i> : <i className="fa fa-eye-slash"></i>}
        </button>
                            </div>
                            <a href="#" className="signup-form-button">Register</a>
                            <span>Already Have an account? <Link to={'/signIn'}>Login</Link></span>
                        </div>
                    </div>
            </div>
               
            </div>
        </div>
    )
}

export default CustomerSignUp;