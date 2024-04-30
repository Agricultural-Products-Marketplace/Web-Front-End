import React from "react";
import './index.css'
import AdminChart from "../../card/chart";
import CircularProgress from '@mui/material/CircularProgress';
import CircularProgressBar from "../../card/CirclularProgress";
import { IconButton } from "@mui/material";
import IconButtonList from "../../card/admin/iconbutton";
import TopProducts from "../../card/admin/topProducts";

function Admin(){
    const products = [
        { image: 'https://thumbs.dreamstime.com/b/coffee-cup-beans-26448276.jpg', title: 'Coffee', description: 'Our Coffee', price: 150, inventory: 700, sales: 1000.60, today: 17000.92 },
        { image: 'https://snaped.fns.usda.gov/sites/default/files/seasonal-produce/2018-05/avocado.jpg', title: 'Avocado', description: 'Fresh Avocado', price: 100, inventory: 1000, sales: 10000.56, today: 5000.882 },
        // Add more products here as needed
    ];
    return(
        <>
    <div className="admin-page">
        <div className="admin-page-nav">
            <div className="admin-page-nav-logo">
            <a href="#" className="navbar-logo">
                <img src="./assets/img/logo.png" alt="" />
                <hr/>
                <p>Agricultural <br/><small>market place</small> </p>
            </a>
            </div>
            <div className="admin-page-nav-bar">
                <ul className="admin-page-nav-bar-list">
                    <li className="admin-page-nav-bar-list-item"><a href="#2" className="active-item"><i className="fa-solid fa-user-tie"></i><h4>Dashboard</h4></a></li>
                    <li className="admin-page-nav-bar-list-item"><a href="#1"><i className="fa-solid fa-list"></i><h4>Products</h4></a></li>
                    <li className="admin-page-nav-bar-list-item"><a href="#2"><i className="fa-solid fa-user-group"></i><h4>Customers</h4></a></li>
                    <li className="admin-page-nav-bar-list-item"><a href="#3"><i className="fa-solid fa-cart-shopping"></i><h4>Orders</h4></a></li>
                    <li className="admin-page-nav-bar-list-item"><a href="#4"><i className="fa-solid fa-truck"></i><h4>Shipments</h4></a></li>
                    <li className="admin-page-nav-bar-list-item"><a href="#5"><i className="fa-solid fa-credit-card"></i><h4>Transaction</h4></a></li>
                    <li className="admin-page-nav-bar-list-item"><a href="#6"><i className="fa-solid fa-gear"></i><h4>Settings</h4></a></li>
                    <li className="admin-page-nav-bar-list-item"><a href="#7"><i className="fa-solid fa-arrow-right-from-bracket"></i><h4>Logout</h4></a></li>
                   
                </ul>
            </div>
        </div>
        <div className="admin-page-main">
            <div className="admin-page-main-top">
                <h1>Overview</h1>
                <div className="admin-page-main-top-search">
                    <i className="fa-solid fa-search"></i>
                    <input type="text" placeholder="Search ..."/>
                </div>
                <div className="admin-page-main-top-nav-icon">
                <a href="#"><i className="fa-solid fa-ellipsis-vertical"></i></a>
                <a href="#">
                <div className="admin-page-main-top-nav-icon-notification">
                <i className="fa-solid fa-bell"></i>
                <sup>15</sup>
                </div>
                </a>
                <a href="#"><i className="fa-solid fa-user"></i></a>
                </div>
            </div>
            <div className="admin-page-main-bottom">
            <div className="admin-page-main-left">
                <div className="admin-page-main-left-top">
                    <div className="admin-page-main-left-top-title">
                        <div className="admin-page-main-left-top-title-text">
                            <h5>Total Revenue</h5>
                            <h3>$980,273.00</h3>
                        </div>
                        <select name="year" id="">
                            <option value="ThisYear">This Year</option>
                            <option value="LastYear">Last year</option>
                        </select>
                    </div>
                    <AdminChart />
                </div>
                <div className="admin-page-main-left-bottom">
                    <div className="admin-page-main-left-bottom-icons">
                    <IconButtonList className="fa-regular fa-user" color="#FFB402" title="Total Visits" price="10.8M" />
                    <IconButtonList className="fa-solid fa-cart-shopping" color="#5F27CD" title="Total Visits" price="10.8M" />
                    <IconButtonList className="fa-solid fa-briefcase" color="#FF9F43" title="Total Visits" price="10.8M" />
                    <IconButtonList className="fa-solid fa-basket-shopping" color="#FF6B6B" title="Total Visits" price="10.8M" />
                    </div>
                    <h2>Top Products</h2>
                    <div className="admin-page-main-left-bottom-top-ptoducts">
                    {products.map((product, index) => (
                        <TopProducts
                            key={index} // Provide a unique key for each product
                            image={product.image}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            inventory={product.inventory}
                            sales={product.sales}
                            today={product.today}
                        />
                    ))}
                    </div>
                </div>

            </div>

            <div className="admin-page-main-right">
            <div className="admin-page-main-right-top">
                    <div className="admin-page-main-right-top-title">
                        <div className="admin-page-main-right-top-title-text">
                            <h5>Total Revenue</h5>
                            <h3>$980,273.00</h3>
                        </div>
                        <i className="fa fa-solid-user"></i>
                    </div>
                    <div className="admin-main-page-circular-progress">
                        <div className="row">
                        <div className="circular-progress">
                    <CircularProgressBar progressValue={80} color="info"/>
                    <small>Current Customers</small>
                    </div>
                    <div className="circular-progress">
                    <CircularProgressBar progressValue={80} color="warning"/>
                    <small>New Customers</small>
                    </div>
                        </div>
                    </div>

                    <div className="admin-main-page-circular-progress">
                        <div className="row">
                        <div className="circular-progress">
                    <CircularProgressBar progressValue={80} color="success"/>
                    <small>Target Customers</small>
                    </div>
                    <div className="circular-progress">
                    <CircularProgressBar progressValue={80} color="error"/>
                    <small>Retarget Customers</small>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Admin;