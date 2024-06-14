import React, { FormEvent, useState } from "react";
import './index.css';
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../../../services/auth/singup-service"; 

function CustomerSignUp() {
    const [activeCreatePassword, setActiveCreatePassword] = useState(false);
    const [activeConfirmPassword, setActiveConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const handleClickCreatePassword = () => {
        setActiveCreatePassword(prevActive => !prevActive);
    };

    const handleClickConfirmPassword = () => {
        setActiveConfirmPassword(prevActive => !prevActive);
    };

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
        password2: "",
    });

    const [confirmPassword, setConfirmPassword] = useState("");
    const [registrationStatus, setRegistrationStatus] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        if (formData.password !== formData.password2) {
            setRegistrationStatus("Passwords do not match.");
            setIsLoading(false);
            return;
        }

        try {
            const data = await signup(formData);
            if(data.status == 201){
                setFormData({
                    first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
        password2: "",
                
                })
                navigate('/signin');
                setRegistrationStatus(data.message);
            }
            else if(data.status == 400){
                setRegistrationStatus(data.message);
            }
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
                            <input type="text" name="first_name" placeholder="First Name" value={formData.first_name} contentEditable onChange={handleChange} required />
                            <input type="text" name="last_name" placeholder="Last Name" value={formData.last_name} contentEditable onChange={handleChange} required />
                            </div>

                            <input type="text" name="phone" placeholder="Your Phone" value={formData.phone} contentEditable onChange={handleChange} required />
                            <input type="text" name="email" placeholder="Your Email" value={formData.email} contentEditable onChange={handleChange} />

                            <div className="signup-form-password-input">
                                <input type={activeCreatePassword ? "text" : "password"} name="password" placeholder="Create Password" contentEditable value={formData.password} onChange={handleChange} required />
                                <button type="button" onClick={handleClickCreatePassword}>
                                    {activeCreatePassword ? <i className="fa fa-eye"></i> : <i className="fa fa-eye-slash"></i>}
                                </button>
                            </div>

                            <div className="signup-form-password-input">
                                <input type={activeConfirmPassword ? "text" : "password"} name="password2" placeholder="Confirm Password" contentEditable value={formData.password2} onChange={handleChange} required />
                                <button type="button" onClick={handleClickConfirmPassword}>
                                    {activeConfirmPassword ? <i className="fa fa-eye"></i> : <i className="fa fa-eye-slash"></i>}
                                </button>
                            </div>

                            {registrationStatus && <p className="error-message">{registrationStatus}</p>}
                            <button className="signup-form-button" type="submit" disabled={isLoading}>
                                {isLoading ? "Loading..." : "Register"}
                            </button>
                            <span>Already Have an account? <Link to={'/signin'}>Login</Link></span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomerSignUp;
