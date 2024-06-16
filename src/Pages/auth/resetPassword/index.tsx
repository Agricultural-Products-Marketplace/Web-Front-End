import axios from 'axios';
import { SetStateAction, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { url } from '../../../api/apiUrl';
import Swal from 'sweetalert2';

function ResetPassword() {

    const navigate = useNavigate();
    const [paswword, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState<Boolean|null>(null);

    const [searchParams] = useSearchParams();
    const otp = searchParams.get('otp');
    const uidb64 = searchParams.get('uidb64');
    const reset_token = searchParams.get('reset_token');

    const handleNewPasswordChange = (event: { target: { value: SetStateAction<string>; }; }) =>{
        setPassword(event.target.value)
    }

    const handleNewPasswordCofirmChange = (event: { target: { value: SetStateAction<string>; }; }) =>{
        setConfirmPassword(event.target.value)
    }

    const handlePasswordSubmitt=(e:any)=>{
        e.preventDefault();

        if(paswword !== confirmPassword){
            setError(true);
            console.log("password Doesnt Match");
        }
        else{
            setError(false);
            console.log('otp ======',otp);
            console.log('uidb64 ====',uidb64);
            console.log("reset_token ======",reset_token);
            console.log("password ==== ",paswword);

            const formdata = new FormData();

            formdata.append('otp',String(otp));
            formdata.append("uidb64",String(uidb64));
            formdata.append("reset_token",String(reset_token));
            formdata.append("password",paswword);

            try{
                const response = axios.post(`${url}v1/auth/password-change/`,formdata).then((res)=>{
                    console.log(res.data.code);
                    Swal.fire({
                        icon:'success',
                        title:'Password Changed SuccessFully',
                    })
                    navigate("/signin")
                }
            )

            }
            catch(error){
                Swal.fire({
                    icon:'error',
                    title:'An Error Occured Try Again'
                })
            }
        }
    }

    return(
        <form onSubmit={handlePasswordSubmitt} className="reset-password-page">
            <div className="reset-password-page-main">
                <div className="reset-password-page-main-left">
                    <img src="./assets/img/password_reset.jpg" alt="" />
                </div>
                <div className="reset-password-page-main-right">
                    <h1>Welcome come Back</h1>
                    <h5>Change Your Password Here</h5>
                    <input type="text" name="new-password" id="" placeholder='New Password' onChange={handleNewPasswordChange}/>
                    <input type="text" name="comfirm-password" id="" placeholder='Comfirm Password' onChange={handleNewPasswordCofirmChange}/>
                    <button>Change Password</button>
                    
                        <Link to={'/'}><i className="fa-solid fa-home"></i> Go Back To Home</Link>
                </div>
            </div>
        </form>
    )
}

export default ResetPassword;