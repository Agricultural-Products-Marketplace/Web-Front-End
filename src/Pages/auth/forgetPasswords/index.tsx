import { Link } from 'react-router-dom';
import './index.css';
import { ChangeEvent, useState } from 'react';
import { forgetpassword } from '../../../services/auth/forget-password';

function ForgetPassword() {
    const [email, setEmail] = useState<string>("");
    const [error,setError] = useState<string>("");
    const [success,setSuccess] = useState<string>("");
    const [isLoading, setisLoading] = useState<boolean>(false);

    const handleChangeEmail= (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e:React.FormEvent) =>{
        e.preventDefault();
        if(email === ''){
            setError('Email Is Required');
        }
        else if(
            !email.includes('@') || !email.includes('.')
        ){
            setError('Please use Valid Email');
        }
        else{
            setisLoading(true);
            const response = forgetpassword(email);
            if(await response === 200){
                setError('')
                setSuccess('Check Your Email to reset');
                setisLoading(false);
                setEmail('');
            }
            else if(await response === 404){
                setSuccess('');
                setError('User Not Found');
                setisLoading(false);
            }
            else{
                setSuccess('');
                setError('Unknown Error Please Try Again');
                setisLoading(false);
            }

        }
        
    }


        
    return(
        <div className="reset-password-page">
            <div className="reset-password-page-main">
                <div className="reset-password-page-main-left">
                    {(success === '')?(<img src="./assets/img/password_reset.jpg" alt="" />):(<img src="./assets/img/password_reset_success.jpg" alt="" />)}
                </div>
                {
                    (success === '')?(<div className="reset-password-page-main-right">
                        <h1>Welcome come Back</h1>
                        <h5>Reset Your Password Here</h5>
                        <label htmlFor="email">Your Email</label>
                        <input type="text" name="email" id="" placeholder='your Email'  value={email} onChange={handleChangeEmail} required/>
                        <span style={{color:"red"}}>{error}</span>
                        <button onClick={handleSubmit}>Reset Password</button>
    
                        
                            <Link to={'/'}><i className="fa-solid fa-home"></i> Go Back To Home</Link>
                    </div>):(
                        <div className="reset-password-page-main-right">
                            <img src="./assets/img/verification-success.svg" alt="" />
                            <h2>Password Reset Successful</h2>
                            <p style={{marginTop:'0px',textAlign:"center"}}>We Have sent an email with a link <br /> to reset your password</p>
                            <Link to={'/'}><i className="fa-solid fa-home"></i> Go Back To Home</Link>
                        </div>
                    )
                }

                
            </div>
        </div>
    )
}

export default ForgetPassword;