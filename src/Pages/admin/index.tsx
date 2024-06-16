import React, { useEffect, useState } from 'react';
import './index.css';
import AdminNavBar from "../shared/card/admin/navbar";
import Dashboard from "./dashboard";
import Orders from './orders';
import Products from './products';
import Customers from './customers';
import Shipments from './shipments';
import Transactions from './transactions';
import Settings from './settings';
import NavBar from '../shared/commen/navBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import { useNavigate } from 'react-router-dom';
import AddFarmerAccount from './addFarmers';
import ManageFarmers from './manageFarmer';

function Admin(){
    const navigator = useNavigate();
    const user = useSelector((state:RootState)=>state.user.profile?.user.is_farmer|| state.user.profile?.user.is_agent || state.user.profile?.user.is_staff);
    const [activeComponent, setActiveComponent] = useState<'Dashboard' | 'Orders' | 'Products' | 'Customers' | 'addProduct'|'addFarmer' |'manageFarmer'| 'Transaction' | 'Settings'>('Dashboard');

    const handleNavItemClick = (componentName: 'Dashboard' | 'Orders' | 'Products' | 'Customers' | 'addProduct'|'addFarmer'|'manageFarmer' | 'Transaction' | 'Settings') => {
        setActiveComponent(componentName);
    };

    useEffect(()=>{
        if(!user){
            navigator('/');
            
        }
    })

    return(
        <div className="admin-page">
            <AdminNavBar onNavItemClick={handleNavItemClick} />
            <div className="admin-content">
                {activeComponent === 'Dashboard' && <Dashboard />}
                {activeComponent === 'Products' && <Products />}
                {activeComponent === 'Customers' && <Customers />}
                {activeComponent === 'Orders' && <Orders />}
                {activeComponent === 'addProduct' && <Shipments />}
                {activeComponent === 'addFarmer' && <AddFarmerAccount />}
                {activeComponent === 'manageFarmer' && <ManageFarmers />}
                {activeComponent === 'Transaction' && <Transactions />}
                {activeComponent === 'Settings' && <Settings />}
            </div>
        </div>
    )
}

export default Admin;
