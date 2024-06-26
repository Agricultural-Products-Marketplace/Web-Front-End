import exp from "constants";
import CircularProgressBar from "../../shared/card/CirclularProgress";
import IconButtonList from "../../shared/card/admin/iconbutton";
import TopProducts from "../../shared/card/admin/topProducts";
import AdminChart from "../../shared/card/chart";
import LinearProgressBar from "../../shared/card/linearprogress";
import AdminTopCard from "../../shared/card/admin/adminTopCard";
import { useState } from "react";

function Dashboard() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("This Year");
    const [currentPage, setCurrentPage] = useState(1);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionClick = (option:string) => {
        setSelectedOption(option);
        setCurrentPage(1); // Reset to first page when changing category
        setIsDropdownOpen(false); // Close dropdown after selecting an option
    };
    const products = [
        { image: 'https://thumbs.dreamstime.com/b/coffee-cup-beans-26448276.jpg', title: 'Coffee', description: 'Our Coffee', price: 150, inventory: 700, sales: 1000.60, today: 17000.92 },
        { image: 'https://snaped.fns.usda.gov/sites/default/files/seasonal-produce/2018-05/avocado.jpg', title: 'Avocado', description: 'Fresh Avocado', price: 100, inventory: 1000, sales: 10000.56, today: 5000.882 },
        // Add more products here as needed
    ];
    return(
        <div className="admin-page-main">
            <AdminTopCard title="DashBoard"/>
            <div className="admin-page-main-bottom">
            <div className="admin-page-main-left">
                <div className="admin-page-main-left-top">
                    <div className="admin-page-main-left-top-title">
                        <div className="admin-page-main-left-top-title-text">
                            <h5>Total Revenue</h5>
                            <h3>$980,273.00</h3>
                        </div>
                        <div className={`dropdown ${isDropdownOpen ? "menu-open" : ""}`}>
                            <div className="select" onClick={toggleDropdown}>
                                <span className="selected">{selectedOption}</span>
                                <i className={`fa-solid ${isDropdownOpen ? "fa-caret-up" : "fa-caret-down"}`}></i>
                            </div>
                            {isDropdownOpen && (
                                <ul className="menu">
                                    <li className={selectedOption === "This Year" ? "active" : ""} onClick={() => handleOptionClick("This year")}>This Year</li>
                                    <li className={selectedOption === "Last Year" ? "active" : ""} onClick={() => handleOptionClick("Last Year")}>Last Year</li>
                                </ul>
                            )}
                        </div>
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
                            <h3>Customers</h3>
                            <h5>Information About your Customers</h5>
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

                <div className="admin-page-main-right-bottom">
                    <div className="admin-page-main-right-bottom-title">
                        <div className="admin-page-main-right-bottom-title-text">
                            <h3>Customers</h3>
                            <h5>Information About your Customers</h5>
                        </div>
                        <i className="fa fa-solid-user"></i>
                    </div>
                    <div className="admin-main-page-circular-progress">
                        <div className="col">
                        <LinearProgressBar progressValue={80} color="warning" title="Live Stock"/>
                        <LinearProgressBar progressValue={80} color="success" title="Vagitable"/>
                        <LinearProgressBar progressValue={80} color="info" title="Fruit"/>
                        </div>
                    </div>

                </div>
            </div>
            </div>
        </div>
    )
}

export default Dashboard;