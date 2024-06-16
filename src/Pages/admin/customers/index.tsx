import { useState } from "react";
import AdminTopCard from "../../shared/card/admin/adminTopCard";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers/rootReducer";
import { GetOrder } from "../../../model/getorders";
import { getOrderById } from "../../../services/order/getorder";

function Customers() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("All Users");
    const [ordersData,setOrdersData] = useState<GetOrder[]>([]);
    const userId = useSelector((state:RootState)=>state.user.profile?.user.id);

    useState(()=>{
        const fetchData = async () =>{
            const farmerOrders = await getOrderById(Number(1));
            if(farmerOrders.status === 200){
                setOrdersData(farmerOrders.orders)
            }
        }
        fetchData();
    })
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsDropdownOpen(false); // Close dropdown after selecting an option
    };

    
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
                            <th className="flex-2">Username</th>
                            <th className="flex-2">Total</th>
                            <th className="flex-2">Order Status</th>
                            <th className="flex-1">Payment Status</th>
                        </tr>
                    </thead>
                    <tbody className="transaction-table-body">
                        {
                            ordersData.map((customer)=>(
                                <tr key={customer.id} style={{backgroundColor: customer.payment_status === 'paid'?'#00FF66':'Red',color:'white'}}>
                                    <td className="flex-2">{customer.buyer.first_name} {customer.buyer.last_name}</td>
                                    <td className="flex-2">{customer.buyer.phone}</td>
                                    <td className="flex-2">{customer.buyer.username}</td>
                                    <td className="flex-2">{customer.total}</td>
                                    <td className="flex-2">{customer.order_status}</td>
                                    <td className="flex-1">{customer.payment_status}</td>
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
