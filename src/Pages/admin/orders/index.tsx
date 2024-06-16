import React, { useState } from 'react';
import AdminTopCard from "../../shared/card/admin/adminTopCard";
import './index.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers/rootReducer';

function Orders() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("All Category");
    const userId = useSelector((state:RootState)=>state.user.profile?.user.id);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsDropdownOpen(false); // Close dropdown after selecting an option
    };

    const ordersData = [
        { id: 1, image:'https://thumbs.dreamstime.com/b/coffee-cup-beans-26448276.jpg',name: 'Banana', qty: 'X2', date: 'Feb 5, 2020', revenue: '253.82', profit: '60.76', status: 'Pending' },
        { id: 2, image:'https://thumbs.dreamstime.com/b/coffee-cup-beans-26448276.jpg',name: 'Apple', qty: 'X3', date: 'Feb 6, 2020', revenue: '350.25', profit: '80.30', status: 'Ended' },
        // Add more data as needed
    ];

    return (
        <div className="admin-page-main">
            <AdminTopCard title="Orders"/>
            <div className="admin-page-main-products">
                <div className="admin-page-main-products-title">
                    <h3>Latest Orders</h3>
                    <div className="admin-page-main-products-title-actions">
                        <div className={`dropdown ${isDropdownOpen ? "menu-open" : ""}`}>
                            <div className="select" onClick={() => toggleDropdown()}>
                                <span className="selected">{selectedOption}</span>
                                <i className={`fa-solid ${isDropdownOpen ? "fa-caret-up" : "fa-caret-down"}`}></i>
                            </div>
                            {isDropdownOpen && (
                                <ul className="menu">
                                    <li  className={selectedOption === "All Category" ? "active" : ""}onClick={() => handleOptionClick("All Category")}>All Category</li>
                                    <li  className={selectedOption === "Framer" ? "active" : ""}onClick={() => handleOptionClick("Framer")}>Framer</li>
                                    <li className={selectedOption === "Sketch" ? "active" : ""} onClick={() => handleOptionClick("Sketch")}>Sketch</li>
                                    <li className={selectedOption === "Invision" ? "active" : ""} onClick={() => handleOptionClick("Invision")}>Invision</li>
                                    <li className={selectedOption === "Figma" ? "active" : ""} onClick={() => handleOptionClick("Figma")}>Figma</li>
                                </ul>
                            )}
                        </div>
                        <a href="#More">More <i className="fa-solid fa-arrow-right"></i></a>
                        
                    </div>
                </div>
                <table className="admin-page-main-products-table">
                    <thead>
                        <tr>
                            <th className='flex-3'>Orders</th>
                            <th className='flex-1'>QTY</th>
                            <th className='flex-1'>Date</th>
                            <th className='flex-1'>Revenue</th>
                            <th className='flex-1'>Net Profit</th>
                            <th className='flex-1'>Status</th>
                            <th className='flex-2'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersData.map((order)=>(
                            <tr key={order.id}>
                            <td className='flex-3'>
                                <div className='row'>
                                    <img src={order.image} alt="" />
                                    <p>{order.name}</p>
                                </div>
                            </td>
                            <td className='flex-1'>{order.qty}</td>
                            <td className='flex-1'>{order.date}</td>
                            <td className='flex-1'>{order.revenue}</td>
                            <td className='flex-1'>{order.profit}</td>
                            <td className='flex-1' style={{ color: order.status === 'Pending' ? 'yellow' : (order.status === 'Ended' ? 'green' : 'red') }}>{order.status}</td>
                            <td className='flex-2'>
                                <div className='row'>
                                    <button><i className='fa-solid fa-pen'></i></button>
                                    <button><i className='fa-solid fa-trash'></i></button>
                                    <button><i className='fa-solid fa-ellipsis'></i></button>
                                </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Orders;
