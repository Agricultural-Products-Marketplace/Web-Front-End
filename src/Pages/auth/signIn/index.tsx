import React, { useState } from "react";
import './index.css';
import { Link } from "react-router-dom";

function SignIn() {
    const [emailPhone, setEmailPhone] = useState("");
    const [password, setPassword] = useState("");
    const [activeCreatePassword, setActiveCreatePassword] = useState(false);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleChangeEmailPhone = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmailPhone(e.target.value);
    };

    const handleChangePassword = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setPassword(e.target.value);
    };

    const handleClickCreatePassword = () => {
        setActiveCreatePassword(prevActive => !prevActive);
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            const response = await fetch("http://127.0.0.1:8000/auth/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    emailPhone,
                    password
                })
            });

            const data = await response.json();

            if (response.ok) {
                // Login successful
                console.log("Login successful:", data);
                // Redirect or perform any other action
            } else {
                // Login failed
                setError(data.message || "Login failed. Please try again.");
            }
        } catch (error) {
            console.error("Error logging in:", error);
            setError("Login failed. Please try again. Another time");
        } finally {
            setIsLoading(false);
        }
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
                        <form className="signin-content-form col" onSubmit={handleSubmit}>
                            <p><strong>Sign In</strong><br />Login now to track all your expenses and income at a place</p>
                            {error && <small>{error}</small>}
                            <input type="text" placeholder="Email/Phone" value={emailPhone} onChange={handleChangeEmailPhone} required />
                            <div className="signin-form-password-input">
                                <input type={activeCreatePassword ? "text" : "password"} placeholder="Your Password" value={password} onChange={handleChangePassword} required />
                                <button onClick={handleClickCreatePassword}>
                                    {activeCreatePassword ? <i className="fa fa-eye"></i> : <i className="fa fa-eye-slash"></i>}
                                </button>
                            </div>
                            <a href="#" className="signin-forget-password">Forget Password</a>
                            <button className="signin-form-button" type="submit" disabled={isLoading}>
                                {isLoading ? "Logging In..." : "Log In"}
                            </button>
                            <span>Don't Have an account? <Link to={'/signUp'}>Sign Up</Link></span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;
