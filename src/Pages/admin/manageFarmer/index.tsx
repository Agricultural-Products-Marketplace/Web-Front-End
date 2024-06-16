import React, { useState, useEffect } from 'react';
import AdminTopCard from '../../shared/card/admin/adminTopCard';
import './index.css';
import DropDown from '../../shared/card/dropdown';
import { getAllCategories } from '../../../services/category/getCategory';
import { Category } from '../../../model/category';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers/rootReducer';
import { getProductByFarmerId } from '../../../services/product/getProducts';
import { ProductModel } from '../../../model/product';
import Swal from 'sweetalert2';
import { deletefarmerproduct } from '../../../services/product/deletProduct';
import AddProduct from '../../addProduct';
import { title } from 'process';
import EdiProduct from '../editProducts';


function ManageFarmers() {

    const [categories, setCategories] = useState<Category[]>([]);
    const [category, setCategory] = useState<string>('Select category');
    const [products, setProducts] =useState<ProductModel[]>([]);
    // const userId = useSelector((state:RootState)=>state.user.profile?.id);
    const userId = 2;
    const accessToken = useSelector((state:RootState)=>state.login.user?.access);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("All Products");
    const [filteredProducts, setFilteredProducts] = useState<ProductModel[]>([]);
    const [editProduct,setEditProduct] = useState<boolean>(false); 
    const [editProductId,setEditProductId] = useState<number>(0);


    useEffect(()=>{
        const fetchData = async () => {
            const categoriesData = await getAllCategories();
            const productData = await getProductByFarmerId(Number(userId));
            
            if(productData.status === 200){
                setProducts(productData.data);
                setFilteredProducts(productData.data);
            }
            setCategories(categoriesData);
        };
        fetchData();
    },
[]);

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 15;


    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const nextPage = () => {
        if (indexOfLastProduct < products.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsDropdownOpen(false); // Close dropdown after selecting an option
        if (option === "All Products") {
            setFilteredProducts(products); // Reset to all transactions
        } else {
            const filtered = products.filter(product => product.category.title === option);
            setFilteredProducts(filtered);
        }
    };

    return (
        <div className="admin-page-main">
            <AdminTopCard title="My Farmers" />
            {editProduct?(
                <EdiProduct 
                productId={Number(editProductId)}
                />
            ):(
                <div className="admin-page-main-products">
                <div className="admin-page-main-products-title">
                    <h3>Farmers List</h3>
                    <div className="admin-page-main-products-title-actions">
                    <div className={`dropdown ${isDropdownOpen ? "menu-open" : ""}`}>
                            <div className="select" onClick={() => toggleDropdown()}>
                                <span className="selected">{selectedOption}</span>
                                <i className={`fa-solid ${isDropdownOpen ? "fa-caret-up" : "fa-caret-down"}`}></i>
                            </div>
                            {isDropdownOpen && (
                                <ul className="menu">
                                    <li  className={selectedOption === "All Products" ? "active" : ""}onClick={() => handleOptionClick("All Products")}>All Products</li>
                                    
                                    {categories.map(category => (
                                        <li  className={selectedOption === category.title ? "active" : ""}onClick={() => handleOptionClick(category.title)}>{category.title}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
                <table className="admin-page-main-products-table">
                    <thead>
                        <tr>
                            <th className='flex-3'>Farmer</th>
                            <th className="flex-1">Name</th>
                            <th className='flex-1'>Email</th>
                            <th className='flex-1'>Status</th>
                            <th className='flex-1'>Phone</th>
                            <th className='flex-1'>Date</th>
                            <th className='flex-1'>Status</th>
                            <th className='flex-1'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(products.length > 0)?(
                            filteredProducts.map(product => (
                                <tr key={product.id}>
                                    <td className='flex-3'>
                                        <div className='row'>
                                            <img src={product.image} alt="" />
                                            <p>{product.title}</p>
                                        </div>
                                    </td>
                                    <td className="flex-1">{product.category.title}</td>
                                    <td className='flex-1'>{product.in_stock}</td>
                                    <td className='flex-1'>{String(product.date)}</td>
                                    <td className='flex-1'>{product.price}</td>
                                    <td className='flex-1'>{product.old_price}</td>
                                    <td className='flex-1' style={{ color: product.status === 'in_review' ? 'yellow' : (product.status === 'published' ? 'green' : (product.status === 'disabled' ? 'Red' : 'Black')) }}>{product.status}</td>
                                    <td className='flex-1'>
                                        <div className='row'>
                                            <button onClick={()=>{
                                                setEditProductId(product.id)
                                                setEditProduct(true);
                                            }}><i className='fa-solid fa-pen'></i></button>
                                            <button
                                            onClick={()=>{
                                                Swal.fire({
                                                    title: 'Are you sure?',
                                                    text: "You won't be able to revert this!",
                                                    icon: 'warning',
                                                    showCancelButton: true,
                                                    confirmButtonColor: '#d33',
                                                    cancelButtonColor: '#000000',
                                                    confirmButtonText: 'Yes, delete it!'
                                                    
                                                }).then((result)=>{
                                                    if(result.isConfirmed){
                                                        deletefarmerproduct(Number(userId),product.pid,String(accessToken));
                                                        window.location.reload();
                                                    }
                                                })
                                            }}
                                            ><i className='fa-solid fa-trash'></i></button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ):(
                            <h3>You Have No Farmer Profiles</h3>
                        )}
                    </tbody>
                </table>
                <div className='admin-page-main-products-table-nav-button'>
                    <button onClick={prevPage}><i className='fa-solid fa-arrow-left'></i> Previous</button>
                    <button onClick={nextPage}>Next <i className='fa-solid fa-arrow-right'></i></button>
                </div>
            </div>
            )}
        </div>
    );
}

export default ManageFarmers;
