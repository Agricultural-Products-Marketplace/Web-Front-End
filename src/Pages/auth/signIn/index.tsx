import React, { useEffect, useState } from "react";
import './index.css';
import TopBar from "../../../commen/topBar";
import Footer from "../../../commen/footer";
import { Link, useLocation, useNavigate } from "react-router-dom";

function SignIn() {
    
    const [activecreatepassword, setActivecreatepassword] = useState(false);

    const handleClickcreatepassword = () => {
        setActivecreatepassword(prevActive => !prevActive);
    };

    return(
        <div>
            <div className="signin">
            <div className="signin-container col">
            <Link to={'/'} className="signin-back-icon">
                    <i className="fa fa-arrow-left"></i>
                    </Link>
                    <div className="signin-contents row">
                        <div className="signin-content-image">
                            <img src="https://media.istockphoto.com/id/1329735717/vector/happy-family-in-garden-with-a-basket-full-of-fresh-vegetables-cabbage-pepper-tomato-carrot.jpg?s=612x612&w=0&k=20&c=qRw7mOTt0p8tAibmK41lzFqWYZsN2KhuAapu7ETnNUE=" alt="" />
                        </div>
                        <form className="signin-content-form col" method="post">
                            <p><strong>Sign In</strong><br />Login now to track all your expenses and income at a place</p>
                            <small>Error Message</small>
                            <input type="text" placeholder="Email/Phone" required/>
                    
                            <div className="signin-form-password-input">
                            <input type={activecreatepassword ? "text" : "password"} placeholder="Your Password" required/>
                            <button onClick={handleClickcreatepassword}>
                                {activecreatepassword ? <i className="fa fa-eye"></i> : <i className="fa fa-eye-slash"></i>}
                            </button>
                            </div>
                            <a href="#" className="signin-forget-password">Forget Password</a>
                            
                            <button className="signin-form-button">Log In</button>
                            
                            <span>Don't Have an account? <Link to={'/signUp'}>Sign Up</Link></span>
                        </form>
                    </div>
            </div>
               
            </div>
        </div>
    )
}

export default SignIn;