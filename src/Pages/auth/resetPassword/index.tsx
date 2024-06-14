import { Link } from 'react-router-dom';

function ResetPassword() {
    return(
        <div className="reset-password-page">
            <div className="reset-password-page-main">
                <div className="reset-password-page-main-left">
                    <img src="./assets/img/password_reset.jpg" alt="" />
                </div>
                <div className="reset-password-page-main-right">
                    <h1>Welcome come Back</h1>
                    <h5>Change Your Password Here</h5>
                    <input type="text" name="new-password" id="" placeholder='New Password'/>
                    <input type="text" name="comfirm-password" id="" placeholder='Comfirm Password'/>
                    <button>Change Password</button>
                    
                        <Link to={'/'}><i className="fa-solid fa-home"></i> Go Back To Home</Link>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword;