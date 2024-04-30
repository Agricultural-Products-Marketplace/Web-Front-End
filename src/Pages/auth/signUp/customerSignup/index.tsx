import React, { FormEvent, useEffect, useState } from "react";
import './index.css';
import TopBar from "../../../../commen/topBar";
import Footer from "../../../../commen/footer";
import { Link, useLocation, useNavigate } from "react-router-dom";

function CustomerSignUp() {
    
    const [activecreatepassword, setActivecreatepassword] = useState(false);
    const [activeconfirmpassword, setActiveconfirmpassword] = useState(false);

    const handleClickcreatepassword = () => {
        setActivecreatepassword(prevActive => !prevActive);
    };

    const handleClickconfirmpassword = () => {
        setActiveconfirmpassword(prevActive => !prevActive);
    };

    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
        phone_number:"",

    });

    const [registrationStatus, setRegistrationStatus] = useState("");
    const [isLoading, setIsLoading] = useState(false); // Track loading state

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        setIsLoading(true); // Set loading state to true
        
        try {
            const response = await fetch("http://127.0.0.1:8000/api/auth/register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                // User registered successfully
                setRegistrationStatus("Registration successful!");
            } else {
                // Error registering user
                setRegistrationStatus("Registration failed. Please try again.");
            }
        } catch (error) {
            console.error("Error registering user:", error);
            setRegistrationStatus("Registration failed. Please try again. another time");
        } finally {
            setIsLoading(false); // Set loading state back to false
        }
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
                        <form className="signup-content-form" onSubmit={handleSubmit}>
                            <p>Welcome <br /><strong>Sign Up For Customer Account</strong></p>
                            <div className="signup-form-input-name">
                                <input type="text" name="username" placeholder="First Name" value={formData.username} onChange={handleChange} required />
                                {/* <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required /> */}
                            </div>

                            <input type="text" name="phone_number" placeholder="Your Phone" value={formData.phone_number} onChange={handleChange} required />

                            <input type="text" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
                            <div className="signup-form-password-input">
                                <input type="password" name="password" placeholder="Create Password" value={formData.password} onChange={handleChange} required />
                            </div>
                            <div className="signup-form-password-input">
                                {/* <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required /> */}
                            </div>
                            <button className="signup-form-button" type="submit" disabled={isLoading}>
                                {isLoading ? "Loading..." : "Register"}
                            </button>
                            <span>Already Have an account? <Link to={'/signIn'}>Login</Link></span>
                            {registrationStatus && <div>{registrationStatus}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerSignUp;
