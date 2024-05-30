import React, { FormEvent, useState } from "react";
import './index.css';
import { Link } from "react-router-dom";
import { signup } from "../../../../services/auth/singup-service"; 

function CustomerSignUp() {
    const [activeCreatePassword, setActiveCreatePassword] = useState(false);
    const [activeConfirmPassword, setActiveConfirmPassword] = useState(false);

    const handleClickCreatePassword = () => {
        setActiveCreatePassword(prevActive => !prevActive);
    };

    const handleClickConfirmPassword = () => {
        setActiveConfirmPassword(prevActive => !prevActive);
    };

    const [formData, setFormData] = useState({
        email: "",
        username: "",
        phone_number: "",
        user_type:"customer",
        password: "",
    });

    const [registrationStatus, setRegistrationStatus] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const data = await signup(formData);
            setRegistrationStatus("Registration successful!");
        } catch (error: unknown) {
            if (error instanceof Error) {
                setRegistrationStatus(error.message);
            } else {
                setRegistrationStatus("Registration failed. Please try again.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
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
                                <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
                            </div>

                            <input type="text" name="phone_number" placeholder="Your Phone" value={formData.phone_number} onChange={handleChange} required />
                            <input type="text" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />

                            <div className="signup-form-password-input">
                                <input type={activeCreatePassword ? "text" : "password"} name="password" placeholder="Create Password" value={formData.password} onChange={handleChange} required />
                                <button type="button" onClick={handleClickCreatePassword}>
                                    {activeCreatePassword ? <i className="fa fa-eye"></i> : <i className="fa fa-eye-slash"></i>}
                                </button>
                            </div>

                            <div className="signup-form-password-input">
                                <input type={activeConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
                                <button type="button" onClick={handleClickConfirmPassword}>
                                    {activeConfirmPassword ? <i className="fa fa-eye"></i> : <i className="fa fa-eye-slash"></i>}
                                </button>
                            </div>

                            <p className="error-message">Error Message</p>
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
    );
}

export default CustomerSignUp;
