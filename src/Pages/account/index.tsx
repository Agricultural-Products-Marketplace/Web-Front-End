import React, { useEffect, useState } from "react";
import './index.css'
import { useSelector } from "react-redux";
import { RootState } from '../../redux/reducers/rootReducer';
import { useNavigate } from "react-router-dom";
import EditMyProfile from "./accountPages/editProfile";
import AdressBook from "./accountPages/adresseBook";
import MyOrders from "./accountPages/myOrders";
import AccountNavBar from "../shared/card/accountNavigation";
import MyReviews from "./accountPages/myReviews";

function MyAccount() {

    const user = useSelector((state:RootState)=>state.user.profile);
    const navigator = useNavigate();
    const isAuthenticated = useSelector((state:RootState)=>state.login.isAuthenticated);
    const [activeAccountSetting, setActiveAccountSetting] = useState<'EditProfile'| 'adressBook' | 'myOrders' | 'myReviews'>('EditProfile');

    const handleNavItemClick = (componentName: 'EditProfile'| 'adressBook'  | 'myOrders' | 'myReviews') => {
        setActiveAccountSetting(componentName);
    };

    useEffect(()=>{
        if(!isAuthenticated){
            navigator('/signin')
        }
    });

    return(
    <>
        <div className="admin-page">
            <AccountNavBar onNavItemClick={handleNavItemClick} />
            <div className="admin-content">
                {activeAccountSetting === 'EditProfile' && <EditMyProfile />}
                {activeAccountSetting === 'adressBook' && <AdressBook />}
                {activeAccountSetting === 'myOrders' && <MyOrders /> }
                {activeAccountSetting === 'myReviews' && <MyReviews /> }
            </div>
        </div>
    </>
    )
}



export default MyAccount;