import { Link } from 'react-router-dom';
import './index.css';

function ForgetPassword() {
    return(
        <div className="reset-password-page">
            <div className="reset-password-page-main">
                <div className="reset-password-page-main-left">
                    <img src="./assets/img/password_reset.jpg" alt="" />
                </div>
                <div className="reset-password-page-main-right">
                    <h1>Welcome come Back</h1>
                    <h5>Reset Your Password Here</h5>
                    <label htmlFor="email">Your Email</label>
                    <input type="text" name="email" id="" placeholder='your Email'/>
                    <button>Reset Password</button>
                    
                        <Link to={'/'}><i className="fa-solid fa-home"></i> Go Back To Home</Link>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword;