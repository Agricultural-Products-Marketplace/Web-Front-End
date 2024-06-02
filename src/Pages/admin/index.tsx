import React, { useState } from 'react';
import './index.css';
import AdminNavBar from "../shared/card/admin/navbar";
import Dashboard from "./dashboard";
import Orders from './orders';
import Products from './products';
import Customers from './customers';
import Shipments from './shipments';
import Transactions from './transactions';
import Settings from './settings';

function Admin(){
    const [activeComponent, setActiveComponent] = useState<'Dashboard' | 'Orders' | 'Products' | 'Customers' | 'Shipments' | 'Transaction' | 'Settings'>('Dashboard');

    const handleNavItemClick = (componentName: 'Dashboard' | 'Orders' | 'Products' | 'Customers' | 'Shipments' | 'Transaction' | 'Settings') => {
        setActiveComponent(componentName);
    };

    return(
        <div className="admin-page">
            <AdminNavBar onNavItemClick={handleNavItemClick} />
            <div className="admin-content">
                {activeComponent === 'Dashboard' && <Dashboard />}
                {activeComponent === 'Products' && <Products />}
                {activeComponent === 'Customers' && <Customers />}
                {activeComponent === 'Orders' && <Orders />}
                {activeComponent === 'Shipments' && <Shipments />}
                {activeComponent === 'Transaction' && <Transactions />}
                {activeComponent === 'Settings' && <Settings />}
            </div>
        </div>
    )
}

export default Admin;
