import React, { useState, ChangeEvent, } from "react";
import './index.css';
import { Link, useNavigate } from "react-router-dom";
import { RootState } from '../../../redux/reducers/rootReducer';
import { loginUser } from "../../../redux/actions/loginAction";
import { connect, useSelector } from "react-redux";
import { login } from '../../../services/auth/signin-service';
import { stat } from "fs";
import TopBar from "../../shared/commen/topBar";

interface SignInProps{
    isLoading:boolean;
    error: string | null;
    loginUser:(credintials:{email: string; password:string}) => void;
}

const SignIn:React.FC<SignInProps> = ({isLoading,error,loginUser})=> {
    const [email, setusername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [activeCreatePassword, setActiveCreatePassword] = useState<boolean>(false);
    const isAuthenticated = useSelector((state:RootState)=> state.login.isAuthenticated);
    const navigate = useNavigate();

    const handleChangeEmailPhone = (e: ChangeEvent<HTMLInputElement>) => {
        setusername(e.target.value);
    };

    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleClickCreatePassword = () => {
        setActiveCreatePassword(prevActive => !prevActive);
    };

    const handleSubmit = (e:React.FormEvent) =>{
        isLoading = true;
        e.preventDefault();
        const credentials = {email,password};
        loginUser(credentials);
    }

    if (isAuthenticated) {
        navigate('/');
    }

    return (
        <div className="signin-Page">
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
                            <input type="text" placeholder="Email/Phone" value={email} onChange={handleChangeEmailPhone} required />
                            <div className="signin-form-password-input">
                                <input type={activeCreatePassword ? "text" : "password"} placeholder="Your Password" value={password} onChange={handleChangePassword} required />
                                <button type="button" onClick={handleClickCreatePassword}>
                                    {activeCreatePassword ? <i className="fa fa-eye"></i> : <i className="fa fa-eye-slash"></i>}
                                </button>
                            </div>
                            <Link to={'/forget-password'} className="signin-forget-password">Forget Password</Link>
                            <button className="signin-form-button" type="submit" disabled={isLoading}>
                                {isLoading ? "Logging In..." : "Log In"}
                            </button>
                            <span>Don't Have an account? <Link to={'/signUp'}>Sign Up</Link></span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state:RootState) =>({
    isLoading:state.login.isLoading,
    error: state.login.error
});

const mapDispatchToProps = {
    loginUser
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
