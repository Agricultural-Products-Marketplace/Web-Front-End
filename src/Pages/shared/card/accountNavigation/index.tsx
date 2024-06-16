import React from 'react';

interface AccountNavBarProps {
    onNavItemClick: (componentName: 'EditProfile' | 'adressBook'  | 'myOrders' | 'myReviews') => void;
}

const AccountNavBar: React.FC<AccountNavBarProps> = ({ onNavItemClick }) => {
    const [activeItem, setActiveItem] = React.useState<'EditProfile' | 'adressBook'  | 'myOrders' | 'myReviews'>('EditProfile');

    const handleItemClick = (componentName: 'EditProfile' | 'adressBook'  | 'myOrders' | 'myReviews') => {
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
                    <li className="admin-page-nav-bar-list-item"><button onClick={() => handleItemClick('EditProfile')} className={activeItem === 'EditProfile' ? 'active-item' : ''}><i className="fa-solid fa-user-tie"></i><h4>Edit Profile</h4></button></li>
                    <li className="admin-page-nav-bar-list-item"><button onClick={() => handleItemClick('adressBook')} className={activeItem === 'adressBook' ? 'active-item' : ''}><i className="fa-solid fa-cart-shopping"></i><h4>Adress info</h4></button></li>
                    <li className="admin-page-nav-bar-list-item"><button onClick={() => handleItemClick('myOrders')} className={activeItem === 'myOrders' ? 'active-item' : ''}><i className="fa-solid fa-credit-card"></i><h4>My Orders</h4></button></li>
                    <li className="admin-page-nav-bar-list-item"><button onClick={() => handleItemClick('myReviews')} className={activeItem === 'myReviews' ? 'active-item' : ''}><i className="fa-solid fa-star"></i><h4>My Reviews</h4></button></li>
                </ul>
            </div>
        </div>
    )
}

export default AccountNavBar;
