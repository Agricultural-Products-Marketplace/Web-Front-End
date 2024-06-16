import React, { useEffect, useState } from 'react';
import './index.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../../../redux/actions/loginAction';
import { RootState } from '../../../../redux/reducers/rootReducer';
import NotificationPage from '../../card/notification';


const NavBar: React.FC = () => {



    const cartItemCount = useSelector((state:RootState)=>state.cart.cart.length);
    const location = useLocation();
    const { pathname } = location;
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state:RootState)=> state.login.isAuthenticated);
    const user = useSelector((state:RootState)=>state.user.profile);
    const wishlist = useSelector((state:RootState)=>state.wishlist.items.length);
    const [dropdownshow, setdropdownshow] = useState<boolean>(false);

    const handleLogout = () => {
        dispatch(logout()); 
    };

    return(pathname === '/signup/customer' || pathname === '/signup/agent' || pathname === '/signin' || pathname === '/create-new-password' ||pathname === '/forget-password' || pathname === '/signUp/' || pathname === '/signUp' || pathname === '/success'? null : <section className="navbar">
    <a href="#123" className="navbar_logo">
        <img src="./assets/img/logo.png" alt="" />
        <hr/>
        <p>Agricultural <br/><small>market place</small> </p>
    </a>
    <div className="navigation_bar">
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/category'}>Category</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            {(isAuthenticated)?(null):(<li><Link to={'/signUp/'}>Register</Link></li>)}
            {(isAuthenticated)?(null):(<li><Link to={'/signin'}>Log In</Link></li>)}
        </ul>
    </div>
    
        <div className="search_bar">
            <input type="text" placeholder="What are you looking for?"/>
            <button><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
    
    <div className="icons">
    {(isAuthenticated)?(<Link to={'/wishlist'}><i className="fa-solid fa-heart"><sup>{wishlist}</sup></i></Link>):(null)}
    {(isAuthenticated)?(<Link to={'/message'} ><i className='fa-solid fa-message'><sup>8</sup></i></Link>):(null)}
    {(isAuthenticated)?(<Link to={'/cart'}><i className="fa-solid fa-cart-shopping"><sup>{cartItemCount}</sup></i></Link>):(null)}
    {(isAuthenticated)?(<Link to={'/'}><i className="fa-solid fa-bell"><sup>8</sup></i></Link>):null}
    {(isAuthenticated)?(<a href="#" className='icons-user-icon'><i className="fa-solid fa-user"></i>
    <div className="account-dropdown-menus">
        <Link to={'/account'}>
            <i className="fa fa-user"></i>
            Manage My Account
        </Link>
        {(user?.user.is_farmer|| user?.user.is_agent || user?.user.is_staff)?(<Link to={'/admin'} >
            <i className="fa fa-shop"></i>
            My Shop
        </Link>):(null)}
        {(user?.user.is_agent || user?.user.is_staff)?(<Link to={'/admin'} >
            <i className="fa fa-shop"></i>
            Manage Farmers Profile
        </Link>):(null)}
        <Link to={'/signin'} onClick={handleLogout}>
        <i className="fa-solid fa-right-from-bracket"></i>
            LogOut
        </Link>
    </div>
    </a>):(null)}
    </div>

    <button onClick={()=>{
        setdropdownshow(!dropdownshow)
    }} className={(dropdownshow)?('navbar-dropdown-menus-show navbar-dropdown-menus-icon'):('navbar-dropdown-menus navbar-dropdown-menus-icon')}>{dropdownshow?(<i className="fa-solid fa-close"></i>):(<i className="fa-solid fa-bars"><sup style={{backgroundColor:"#00ff66",borderRadius:"100%",padding:"1vw",fontSize:"10px",color:"white"}}>{cartItemCount + wishlist}</sup></i>)}
    <div>
    
    {isAuthenticated?(null):(<Link to={'/signUp/'}><i className="fa-solid fa-user-plus"></i>Sign Up</Link>)}
    {isAuthenticated?(null):(<Link to={'/signin'}><i className="fa-solid fa-arrow-right-to-bracket"></i>Log in</Link>)}
    <Link to={'/'}><i className="fa-solid fa-home"></i> Home</Link>
    {(user?.user.is_farmer|| user?.user.is_agent || user?.user.is_staff)?(<Link to={'/admin'}><i className="fa-solid fa-shop"></i>My Shop</Link>):(null)}
    <Link to={'/category'}><i className="fa-solid fa-layer-group"></i> Category</Link>
    {isAuthenticated?(<Link to={'/wishlist'}><i className="fa-solid fa-heart"></i> Wishlist ({wishlist})</Link>):(null)}
    {isAuthenticated?(<Link to={'/message'}><i className="fa-solid fa-message"></i>Messge</Link>):(null)}
    {isAuthenticated?(<Link to={'/cart'}><i className="fa-solid fa-cart-shopping"></i>Cart ({cartItemCount})</Link>):(null)}
   {isAuthenticated?( <Link to={'/account'}><i className="fa-solid fa-user"></i>Manage My Account</Link>):(null)}
    <Link to={'/contact'}><i className="fa-solid fa-phone"></i> Contact</Link>
    <Link to={'/about'}><i className="fa-solid fa-circle-info"></i>About</Link>
    {isAuthenticated?(<Link to={'/'} onClick={handleLogout}><i className="fa-solid fa-right-from-bracket"></i>Log Out</Link>):(null)}
    
    </div>
    </button>
    
</section>
    );
}

export default NavBar;