import { Link } from 'react-router-dom';
import './index.css';


function VerificationSuccess() {
    return(
        <div className="verification-success">
            <div className="verification-success-items">
                <img src="assets/img/verification-success.svg" alt="" />
                <h1>Email Verified</h1>
                <p>Your Email Adreess was Sucessfully Verified</p>
                <Link to={'/signin'}>Log in Now</Link>
            </div>
        </div>
    )
}

export default VerificationSuccess;