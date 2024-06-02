import React from 'react';

interface AdminNavBarProps {
    onNavItemClick: (componentName: 'Dashboard' | 'Orders' | 'Products' | 'Customers' | 'Shipments' | 'Transaction' | 'Settings') => void;
}

const AdminNavBar: React.FC<AdminNavBarProps> = ({ onNavItemClick }) => {
    const [activeItem, setActiveItem] = React.useState<'Dashboard' | 'Orders' | 'Products' | 'Customers' | 'Shipments' | 'Transaction' | 'Settings'>('Dashboard');

    const handleItemClick = (componentName: 'Dashboard' | 'Orders' | 'Products' | 'Customers' | 'Shipments' | 'Transaction' | 'Settings') => {
        setActiveItem(componentName);
        onNavItemClick(componentName);
    };

    return (
        <div className="admin-page-nav">
            <div className="admin-page-nav-logo">
                <a href="#" className="navbar-logo">
                    <img src="./assets/img/logo.png" alt="" />
                    <hr />
                    <p>Agricultural <br /><small>market place</small> </p>
                </a>
            </div>
            <div className="admin-page-nav-bar">
                <ul className="admin-page-nav-bar-list">
                    <li className="admin-page-nav-bar-list-item"><button onClick={() => handleItemClick('Dashboard')} className={activeItem === 'Dashboard' ? 'active-item' : ''}><i className="fa-solid fa-user-tie"></i><h4>Dashboard</h4></button></li>
                    <li className="admin-page-nav-bar-list-item"><button onClick={() => handleItemClick('Products')} className={activeItem === 'Products' ? 'active-item' : ''}><i className="fa-solid fa-list"></i><h4>Products</h4></button></li>
                    <li className="admin-page-nav-bar-list-item"><button onClick={() => handleItemClick('Customers')} className={activeItem === 'Customers' ? 'active-item' : ''}><i className="fa-solid fa-user-group"></i><h4>Customers</h4></button></li>
                    <li className="admin-page-nav-bar-list-item"><button onClick={() => handleItemClick('Orders')} className={activeItem === 'Orders' ? 'active-item' : ''}><i className="fa-solid fa-cart-shopping"></i><h4>Orders</h4></button></li>
                    <li className="admin-page-nav-bar-list-item"><button onClick={() => handleItemClick('Shipments')} className={activeItem === 'Shipments' ? 'active-item' : ''}><i className="fa-solid fa-truck"></i><h4>Shipments</h4></button></li>
                    <li className="admin-page-nav-bar-list-item"><button onClick={() => handleItemClick('Transaction')} className={activeItem === 'Transaction' ? 'active-item' : ''}><i className="fa-solid fa-credit-card"></i><h4>Transaction</h4></button></li>
                    <li className="admin-page-nav-bar-list-item"><button onClick={() => handleItemClick('Settings')} className={activeItem === 'Settings' ? 'active-item' : ''}><i className="fa-solid fa-gear"></i><h4>Settings</h4></button></li>
                    <li className="admin-page-nav-bar-list-item"><button onClick={() => handleItemClick('Dashboard')} className={activeItem === 'Dashboard' ? 'active-item' : ''}><i className="fa-solid fa-arrow-right-from-bracket"></i><h4>Logout</h4></button></li>
                </ul>
            </div>
        </div>
    )
}

export default AdminNavBar;
