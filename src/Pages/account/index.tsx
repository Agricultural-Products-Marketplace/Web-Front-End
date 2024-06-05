import React, { useEffect } from "react";
import './index.css'
import NavBar from "../shared/commen/navBar";
import { useSelector } from "react-redux";
import { RootState } from '../../redux/reducers/rootReducer';
import { useNavigate } from "react-router-dom";

function MyAccount() {

    const user = useSelector((state:RootState)=>state.user.profile);
    const navigator = useNavigate();
    const isAuthenticated = useSelector((state:RootState)=>state.login.isAuthenticated);

    useEffect(()=>{
        if(!isAuthenticated){
            navigator('/signIn')
        }
    });

    return(
    <>
        <div className="my-account">
            <div className="my-account-top">
                <p className="my-account-top-p1">Home / <span>{user?.user.first_name} {user?.user.last_name}</span></p>
                <p className="my-account-top-p2">Welcome! <span>{user?.user.first_name} {user?.user.last_name}</span></p>
            </div>
            <div className="my-account-bottom">
                <div className="my-account-bottom-left">
                    <h4>Manage My Account</h4>
                    <a href="#" className="active">My Profile</a>
                    <a href="#">Address Book</a>
                    <a href="#">My Payment Option</a>
                    <h4>My Orders</h4>
                    <a href="#">My Returns</a>
                    <a href="#">My Cancellation</a>
                </div>
                <div className="my-account-bottom-right">
                    <h2>Edit Your Profile</h2>
                    <div className="my-account-bottom-right-name">
                        <div className="my-account-bottom-right-name-item">
                            <p>First Name</p>
                            <input type="text" placeholder={user?.user.first_name}/>
                        </div>
                        <div className="my-account-bottom-right-name-item">
                            <p>Last Name</p>
                            <input type="text" placeholder={user?.user.last_name}/>
                        </div>
                    </div>
                    <div className="my-account-bottom-right-name">
                        <div className="my-account-bottom-right-name-item">
                            <p>Email</p>
                            <input type="text" placeholder={user?.user.email ?? ""}/>
                        </div>
                        <div className="my-account-bottom-right-name-item">
                            <p>Address</p>
                            <input type="text" placeholder={user?.address?.toString() ?? "Add Your Adress"}/>
                        </div>
                    </div>
                    <div className="my-account-bottom-right-password">
                        <p>PasswordChanges</p>
                        <input type="text" placeholder="Current Password"/>
                        <input type="text" placeholder="Create Password"/>
                        <input type="text" placeholder="Comfirm Password"/>
                    </div>
                    <div className="my-account-bottom-right-button">
                        <button className="my-account-bottom-right-button-cancel">Cancel</button>
                        <button className="my-account-bottom-right-button-save">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default MyAccount;