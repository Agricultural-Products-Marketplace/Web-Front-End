import { useState } from "react";
import AdminTopCard from "../../../card/admin/adminTopCard";
import './index.css';

function Transactions() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("All Transactions");
    const [filteredTransactions, setFilteredTransactions] = useState<any[]>([]); // Provide an explicit type
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(20); // Set the maximum content per page

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsDropdownOpen(false); // Close dropdown after selecting an option
        if (option === "All Transactions") {
            setFilteredTransactions(ttransactionData); // Reset to all transactions
        } else {
            const filtered = ttransactionData.filter(transaction => transaction.status === option);
            setFilteredTransactions(filtered);
        }
    };
    
    const ttransactionData = [
        {id:'1',invoiceId:'#23456',bilingDate:'23 Jan 2023',plan:'Basic Plan',amount:'1200',status:'Paid'},
        {id:'2',invoiceId:'#23798',bilingDate:'28 May 2023',plan:'Pro Plan',amount:'7000',status:'Cancelled'},
        {id:'3',invoiceId:'#23889',bilingDate:'29 Jun 2023',plan:'Basic Plan',amount:'1200',status:'Paid'},
        {id:'4',invoiceId:'#24523',bilingDate:'10 Jul 2023',plan:'Basic Plan',amount:'1200',status:'Pending'},
        {id:'5',invoiceId:'#23111',bilingDate:'9 Aug 2023',plan:'Growth Plan',amount:'5000',status:'Pending'},
        {id:'6',invoiceId:'#56456',bilingDate:'3 Sep 2023',plan:'Pro Plan',amount:'7000',status:'Paid'},
    ];

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = selectedOption === "All Transactions" ? ttransactionData : filteredTransactions;
    const paginatedItems = currentItems.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return(
        <div className="admin-page-main">
            <AdminTopCard title="Transactions"/>
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
                                    <li  className={selectedOption === "All Transactions" ? "active" : ""}onClick={() => handleOptionClick("All Transactions")}>All Transactions</li>
                                    <li  className={selectedOption === "Paid" ? "active" : ""}onClick={() => handleOptionClick("Paid")}>Paid</li>
                                    <li className={selectedOption === "Pending" ? "active" : ""} onClick={() => handleOptionClick("Pending")}>Pending</li>
                                    <li className={selectedOption === "Cancelled" ? "active" : ""} onClick={() => handleOptionClick("Cancelled")}>Cancelled</li>
                                </ul>
                            )}
                        </div>
                </div>
            </div>
            <div className="admin-page-min-transaction-body">
                <table className="transaction-table">
                    <thead className="transaction-table-head">
                        <tr>
                            <th className="flex-3">Invoice ID</th>
                            <th className="flex-3">Billing Date</th>
                            <th className="flex-3">Plan</th>
                            <th className="flex-3">Amount</th>
                            <th className="flex-1">Status</th>
                        </tr>
                    </thead>
                    <tbody className="transaction-table-body">
                        {paginatedItems.map((transaction)=>(
                            <tr key={transaction.id}>
                            <td className="flex-3">{transaction.invoiceId}</td>
                            <td className="flex-3">{transaction.bilingDate}</td>
                            <td className="flex-3">{transaction.plan}</td>
                            <td className="flex-3">{transaction.amount}</td>
                            <td className="flex-1" style={{ color: transaction.status === 'Paid' ? '#00FF66' : (transaction.status === 'Pending' ? 'yellow' :'Red') }}>{transaction.status}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <div className='admin-page-main-products-table-nav-button'>
                    <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}><i className='fa-solid fa-arrow-left'></i> Previous</button>
                    <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastItem >= currentItems.length}>Next <i className='fa-solid fa-arrow-right'></i></button>
                </div>
            </div>
        </div>
    )
}

export default Transactions;
