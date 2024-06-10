import React, { useEffect } from 'react';
import './index.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCartItemCount } from '../../../../redux/selecters/cartSelecter';
import { useDispatch } from 'react-redux';
import { logout } from '../../../../redux/actions/loginAction';
import { RootState } from '../../../../redux/reducers/rootReducer';


const NavBar: React.FC = () => {



    const cartItemCount = useSelector(getCartItemCount);
    const location = useLocation();
    const { pathname } = location;
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state:RootState)=> state.login.isAuthenticated);
    const user = useSelector((state:RootState)=>state.user.profile);
    const wishlistLength = useSelector((state:RootState)=>state.wishlist.data.length);

    const handleLogout = () => {
        dispatch(logout()); 
    };

    return(pathname === '/signup/customer' || pathname === '/signIn' || pathname === '/signUp/' || pathname === '/signUp' || pathname === '/success'? null : <section className="navbar">
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
            {(isAuthenticated)?(null):(<li><Link to={'/signUp/'}>Log In</Link></li>)}
        </ul>
    </div>
    
        <div className="search_bar">
            <input type="text" placeholder="What are you looking for?"/>
            <button><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
    
    <div className="icons">
    {(isAuthenticated)?(<Link to={'/wishlist'}><i className="fa-solid fa-heart"><sup>{wishlistLength}</sup></i></Link>):(null)}
    {(isAuthenticated)?(<Link to={'/message'} ><i className='fa-solid fa-message'><sup>8</sup></i></Link>):(null)}
    {(isAuthenticated)?(<Link to={'/cart'}><i className="fa-solid fa-cart-shopping"><sup>{cartItemCount}</sup></i></Link>):(null)}
    {(isAuthenticated)?(<Link to={'/'}><i className="fa-solid fa-bell"><sup>8</sup></i></Link>):null}
    {(isAuthenticated)?(<a href="#" className='icons-user-icon'><i className="fa-solid fa-user"></i>
    <div className="account-dropdown-menus">
        <Link to={'/account'}>
            <i className="fa fa-user"></i>
            Manage My Account
        </Link>
        {(user?.user.is_superuser || user?.user.is_staff)?(<Link to={'/admin'} >
            <i className="fa fa-shop"></i>
            My Shop
        </Link>):(null)}
        <a href="" onClick={handleLogout}>
            <i className="fa fa-star"></i>
            My Reviews
        </a>
        <a href="" onClick={handleLogout}>
        <i className="fa-solid fa-right-from-bracket"></i>
            LogOut
        </a>
    </div>
    </a>):(null)}
    </div>

    <a href="#" className='navbar-dropdown-menus'><i className="fa-solid fa-user"></i>
    <div>
    <Link to={'/signUp/'}>Sign Up</Link>
    <Link to={'/'}>Home</Link>
    <Link to={'/contact'}>Contact</Link>
    <Link to={'/about'}>About</Link>
    <Link to={'/wishlist'}>Wishlist</Link>
    <Link to={'/message'}>Messge</Link>
    <Link to={'/cart'}>Cart</Link>
    <Link to={'/account'}>Manage My Account</Link>
    <Link to={'/'}>Log Out</Link>
    
    </div>
    </a>
    
</section>
    );
}

export default NavBar;