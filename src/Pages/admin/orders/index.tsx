import React, { useState } from 'react';
import AdminTopCard from "../../../card/admin/adminTopCard";

function Orders() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Figma");

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsDropdownOpen(false); // Close dropdown after selecting an option
    };

    return (
        <div className="admin-page-main">
            <AdminTopCard title="Orders"/>
            <div className="admin-page-main-products">
                <div className="admin-page-main-products-title">
                    <h3>Latest Orders</h3>
                    <div className="admin-page-main-products-title-actions">
                        <div className={`dropdown ${isDropdownOpen ? "menu-open" : ""}`}>
                            <div className="select" onClick={toggleDropdown}>
                                <span className="selected">{selectedOption}</span>
                                <div className={`caret ${isDropdownOpen ? "caret-rotate" : ""}`}></div>
                            </div>
                            <ul className="menu">
                                <li onClick={() => handleOptionClick("Framer")}>Framer</li>
                                <li onClick={() => handleOptionClick("Sketch")}>Sketch</li>
                                <li onClick={() => handleOptionClick("Invision")}>Invision</li>
                                <li className={selectedOption === "Figma" ? "active" : ""} onClick={() => handleOptionClick("Figma")}>Figma</li>
                                <li onClick={() => handleOptionClick("Adobe Xd")}>Adobe Xd</li>
                            </ul>
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
                        <tr>
                            <td className='flex-3'>
                                <div className='row'>
                                    <img src="https://thumbs.dreamstime.com/b/coffee-cup-beans-26448276.jpg" alt="" />
                                    <p>Banana</p>
                                </div>
                            </td>
                            <td className='flex-1'>X2</td>
                            <td className='flex-1'>Feb 5, 2020</td>
                            <td className='flex-1'>253.82</td>
                            <td className='flex-1'>60.76</td>
                            <td className='flex-1'>Pending</td>
                            <td className='flex-2'>
                                <div className='row'>
                                    <button><i className='fa-solid fa-pen'></i></button>
                                    <button><i className='fa-solid fa-trash'></i></button>
                                    <button><i className='fa-solid fa-ellipsis'></i></button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='flex-3'>
                                <div className='row'>
                                    <img src="https://thumbs.dreamstime.com/b/coffee-cup-beans-26448276.jpg" alt="" />
                                    <p>Banana</p>
                                </div>
                            </td>
                            <td className='flex-1'>X2</td>
                            <td className='flex-1'>Feb 5, 2020</td>
                            <td className='flex-1'>253.82</td>
                            <td className='flex-1'>60.76</td>
                            <td className='flex-1'>Ended</td>
                            <td className='flex-2'>
                                <div className='row'>
                                    <button><i className='fa-solid fa-pen'></i></button>
                                    <button><i className='fa-solid fa-trash'></i></button>
                                    <button><i className='fa-solid fa-ellipsis'></i></button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='flex-3'>
                                <div className='row'>
                                    <img src="https://thumbs.dreamstime.com/b/coffee-cup-beans-26448276.jpg" alt="" />
                                    <p>Banana</p>
                                </div>
                            </td>
                            <td className='flex-1'>X2</td>
                            <td className='flex-1'>Feb 5, 2020</td>
                            <td className='flex-1'>253.82</td>
                            <td className='flex-1'>60.76</td>
                            <td className='flex-1'>Ended</td>
                            <td className='flex-2'>
                                <div className='row'>
                                    <button><i className='fa-solid fa-pen'></i></button>
                                    <button><i className='fa-solid fa-trash'></i></button>
                                    <button><i className='fa-solid fa-ellipsis'></i></button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='flex-3'>
                                <div className='row'>
                                    <img src="https://thumbs.dreamstime.com/b/coffee-cup-beans-26448276.jpg" alt="" />
                                    <p>Banana</p>
                                </div>
                            </td>
                            <td className='flex-1'>X2</td>
                            <td className='flex-1'>Feb 5, 2020</td>
                            <td className='flex-1'>253.82</td>
                            <td className='flex-1'>60.76</td>
                            <td className='flex-1'>Ended</td>
                            <td className='flex-2'>
                                <div className='row'>
                                    <button><i className='fa-solid fa-pen'></i></button>
                                    <button><i className='fa-solid fa-trash'></i></button>
                                    <button><i className='fa-solid fa-ellipsis'></i></button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='flex-3'>
                                <div className='row'>
                                    <img src="https://thumbs.dreamstime.com/b/coffee-cup-beans-26448276.jpg" alt="" />
                                    <p>Banana</p>
                                </div>
                            </td>
                            <td className='flex-1'>X2</td>
                            <td className='flex-1'>Feb 5, 2020</td>
                            <td className='flex-1'>253.82</td>
                            <td className='flex-1'>60.76</td>
                            <td className='flex-1'>Ended</td>
                            <td className='flex-2'>
                                <div className='row'>
                                    <button><i className='fa-solid fa-pen'></i></button>
                                    <button><i className='fa-solid fa-trash'></i></button>
                                    <button><i className='fa-solid fa-ellipsis'></i></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Orders;
