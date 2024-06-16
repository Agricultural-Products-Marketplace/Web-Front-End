import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/reducers/rootReducer';
import { useDispatch } from 'react-redux';
import { logout } from '../../../../../redux/actions/loginAction';

interface AdminNavBarProps {


    onNavItemClick: (componentName: 'Dashboard' | 'Orders' | 'Products' | 'Customers' | 'addProduct'|'addFarmer'|'manageFarmer' | 'Transaction' | 'Settings') => void;
}

const AdminNavBar: React.FC<AdminNavBarProps> = ({ onNavItemClick }) => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout()); 
    };
    const isAgent = useSelector((state:RootState)=>state.user.profile?.user.is_agent);
    const [activeItem, setActiveItem] = React.useState<'Dashboard' | 'Orders' | 'Products' | 'Customers' | 'addProduct'|'addFarmer'|'manageFarmer' | 'Transaction' | 'Settings'>('Dashboard');
    const handleItemClick = (componentName: 'Dashboard' | 'Orders' | 'Products' | 'Customers' | 'addProduct'|'addFarmer'|'manageFarmer' | 'Transaction' | 'Settings') => {
        setActiveItem(componentName);
        onNavItemClick(componentName);
    };

    return (
        <div className="admin-page-nav">
            <div className="admin-page-nav-logo">
                <a href="#" className="navbar-logo" style={{opacity:"0"}}>
                    <img src="./assets/img/logo.png" alt="" />
                    <hr />
                    <p>Agricultural <br /><small>market place</small> </p>
                </a>
            </div>
            <div className="admin-page-nav-bar">
                <ul className="admin-page-nav-bar-list">
                    <li className="admin-page-nav-bar-list-item"><button onClick={() => handleItemClick('Dashboard')} className={activeItem === 'Dashboard' ? 'active-item' : ''}><i className="fa-solid fa-user-tie"></i><h4>My Dashboard</h4></button></li>
                    <li className="admin-page-nav-bar-list-item"><button onClick={() => handleItemClick('Products')} className={activeItem === 'Products' ? 'active-item' : ''}><i className="fa-solid fa-list"></i><h4>My Products</h4></button></li>
                    <li className="admin-page-nav-bar-list-item"><button onClick={() => handleItemClick('Customers')} className={activeItem === 'Customers' ? 'active-item' : ''}><i className="fa-solid fa-user-group"></i><h4>My Customers</h4></button></li>
                    <li className="admin-page-nav-bar-list-item"><button onClick={() => handleItemClick('Orders')} className={activeItem === 'Orders' ? 'active-item' : ''}><i className="fa-solid fa-cart-shopping"></i><h4>Orders</h4></button></li>
                    <li className="admin-page-nav-bar-list-item"><button onClick={() => handleItemClick('addProduct')} className={activeItem === 'addProduct' ? 'active-item' : ''}><i className="fa-solid fa-plus"></i><h4>Add Product</h4></button></li>
                    {isAgent?(<li className="admin-page-nav-bar-list-item"><button onClick={() => handleItemClick('addFarmer')} className={activeItem === 'addFarmer' ? 'active-item' : ''}><i className="fa-solid fa-user-plus"></i><h4>Add Farmer</h4></button></li>):(null)}
                    {isAgent?(<li className="admin-page-nav-bar-list-item"><button onClick={() => handleItemClick('manageFarmer')} className={activeItem === 'manageFarmer' ? 'active-item' : ''}><i className="fa-solid fa-user-plus"></i><h4>Manage Farmers Profile</h4></button></li>):(null)}
                    <li className="admin-page-nav-bar-list-item"><button onClick={() => handleItemClick('Transaction')} className={activeItem === 'Transaction' ? 'active-item' : ''}><i className="fa-solid fa-credit-card"></i><h4>Transaction</h4></button></li>
                    {/* <li className="admin-page-nav-bar-list-item"><button onClick={() => handleItemClick('Settings')} className={activeItem === 'Settings' ? 'active-item' : ''}><i className="fa-solid fa-gear"></i><h4>Settings</h4></button></li> */}
                </ul>
            </div>
        </div>
    )
}

export default AdminNavBar;
