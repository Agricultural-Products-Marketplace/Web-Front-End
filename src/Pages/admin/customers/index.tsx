import { useState } from "react";
import AdminTopCard from "../../shared/card/admin/adminTopCard";

function Customers() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("All Users");
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsDropdownOpen(false); // Close dropdown after selecting an option
    };
    
    const customersData = [
        {id:'1',fullName:'Yosef Sahle',phone:'0947449009',gender:'Male',age:'24',role:'admin',status:'Active'},
        {id:'2',fullName:'Abel Tadesse',phone:'0947449009',gender:'Male',age:'24',role:'admin',status:'Active'},
        {id:'3',fullName:'Tadesse Ageru',phone:'0947449009',gender:'Male',age:'24',role:'admin',status:'Active'},
        {id:'4',fullName:'Chala Amenu',phone:'0947449009',gender:'Male',age:'24',role:'admin',status:'Active'},
        {id:'4',fullName:'Abebe Kebede',phone:'0947449009',gender:'Male',age:'24',role:'Farmer',status:'Deactive'},
    ];

    
    return(
        <div className="admin-page-main">
            <AdminTopCard title="Customers"/>
            <div className="admin-page-main-transaction-title">
               <div></div>
                <div className="admin-page-main-transaction-title-right">
                <div className={`dropdown ${isDropdownOpen ? "menu-open" : ""}`}>
                            <div className="select" onClick={() => toggleDropdown()}>
                                <span className="selected">{selectedOption}</span>
                                <i className={`fa-solid ${isDropdownOpen ? "fa-caret-up" : "fa-caret-down"}`}></i>
                            </div>
                            {isDropdownOpen && (
                                <ul className="menu">
                                    <li  className={selectedOption === "All Users" ? "active" : ""}onClick={() => handleOptionClick("All Users")}>All Users</li>
                                    <li  className={selectedOption === "Active" ? "active" : ""}onClick={() => handleOptionClick("Active")}>Active</li>
                                    <li className={selectedOption === "Deactive" ? "active" : ""} onClick={() => handleOptionClick("Deactive")}>Deactive</li>
                                </ul>
                            )}
                        </div>
                </div>
            </div>
            <div className="admin-page-min-transaction-body">
                <table className="transaction-table">
                    <thead className="transaction-table-head">
                        <tr>
                            <th className="flex-2">Full Name</th>
                            <th className="flex-2">Phone Number</th>
                            <th className="flex-2">Gender</th>
                            <th className="flex-2">Age</th>
                            <th className="flex-2">Role</th>
                            <th className="flex-1">Status</th>
                        </tr>
                    </thead>
                    <tbody className="transaction-table-body">
                        {
                            customersData.map((customer)=>(
                                <tr key={customer.id} style={{backgroundColor: customer.status === 'Active'?'#00FF66':'Red',color:'white'}}>
                                    <td className="flex-2">{customer.fullName}</td>
                                    <td className="flex-2">{customer.phone}</td>
                                    <td className="flex-2">{customer.gender}</td>
                                    <td className="flex-2">{customer.age}</td>
                                    <td className="flex-2">{customer.role}</td>
                                    <td className="flex-1">{customer.status}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className='admin-page-main-products-table-nav-button'>
                    <button><i className='fa-solid fa-arrow-left'></i> Previous</button>
                    <button  >Next <i className='fa-solid fa-arrow-right'></i></button>
                </div>
            </div>
        </div>
    )
}

export default Customers;
