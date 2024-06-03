import React, { useState, useEffect } from 'react';
import AdminTopCard from '../../shared/card/admin/adminTopCard';
import './index.css';
import DropDown from '../../shared/card/dropdown';
import { Category, getAllCategories } from '../../../services/category/getCategory';


function Products() {

    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(()=>{
        const fetchData = async () => {
            const categoriesData = await getAllCategories();
            setCategories(categoriesData);
        };
        fetchData();
    },
[]);

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 15;

    const originalProductData = [
        { id: 1, image:'https://domf5oio6qrcr.cloudfront.net/medialibrary/11525/0a5ae820-7051-4495-bcca-61bf02897472.jpg', name: 'Apple', category: 'Fruit', qty: 'X2', date: 'Feb 5, 2020', price: '253.82', discount: '60.76', status: 'out of Stock' },
        { id: 2, image:'https://www.shutterstock.com/image-photo/bunch-bananas-isolated-on-white-600nw-1722111529.jpg', name: 'Banana', category: 'Fruit', qty: 'X3', date: 'Feb 6, 2020', price: '350.25', discount: '80.30', status: 'in Stock' },
        { id: 3, image:'https://t4.ftcdn.net/jpg/00/60/56/89/360_F_60568941_XGMX5shUGjF6Oz3B21ICojozyf1FBqmY.jpg', name: 'Tomato', category: 'Vegetable', qty: 'X3', date: 'Feb 6, 2020', price: '350.25', discount: '80.30', status: 'in Stock' },
        { id: 4, image:'https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Kidney-beans-8496667.jpg?quality=90&resize=556,505', name: 'beans', category: 'Pulse', qty: 'X3', date: 'Feb 6, 2020', price: '350.25', discount: '80.30', status: 'in Stock' },
        { id: 5, image:'https://shop.tulsidas.com/cdn/shop/products/wheat-whole-wheat-seeds-688110.jpg?v=1685168866', name: 'wheat', category: 'Grain', qty: 'X3', date: 'Feb 6, 2020', price: '350.25', discount: '80.30', status: 'out of Stock' },
        { id: 6, image:'https://vimafoods.com/wp-content/uploads/2020/05/mazorcas-maiz-choclo.jpg', name: 'corn', category: 'Grain', qty: 'X3', date: 'Feb 6, 2020', price: '350.25', discount: '80.30', status: 'in Stock' },
        { id: 7, image:'https://domf5oio6qrcr.cloudfront.net/medialibrary/6159/ff717f2b-8a5b-4862-a65f-25b59e3f57b8.jpg', name: 'corn', category: 'Grain', qty: 'X3', date: 'Feb 6, 2020', price: '350.25', discount: '80.30', status: 'in Stock' },
        { id: 8, image:'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3BmLXMxMjctYWstNzI4Ml82LnBuZw.png', name: 'Sun Flower', category: 'Oilseed', qty: 'X3', date: 'Feb 6, 2020', price: '350.25', discount: '80.30', status: 'in Stock' },
        { id: 9, image:'https://static.wixstatic.com/media/70ba6c_1ddc70fd731d4d01975e5f42f6261398~mv2.jpg/v1/fill/w_560,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/s-l1600.jpg', name: 'soybeans', category: 'Oilseeds', qty: 'X3', date: 'Feb 6, 2020', price: '350.25', discount: '80.30', status: 'in Stock' },
        { id: 10, image:'https://www.the-sustainable-fashion-collective.com/img/http/assets.the-sustainable-fashion-collective.com/assets/the-swatch-book/2014/11/cotton.png/7c098280951a28c0f2aa4291f179ae42.png', name: 'cotton', category: 'Fiber crop', qty: 'X3', date: 'Feb 6, 2020', price: '350.25', discount: '80.30', status: 'in Stock' },
        // Add more data as needed
    ];

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = originalProductData.slice(indexOfFirstProduct, indexOfLastProduct);

    const nextPage = () => {
        if (indexOfLastProduct < originalProductData.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="admin-page-main">
            <AdminTopCard title="My Products" />
            <div className="admin-page-main-products">
                <div className="admin-page-main-products-title">
                    <h3>Product List</h3>
                    <div className="admin-page-main-products-title-actions">

                    <DropDown items={categories.map(category =>(
                        category.title
                    ))}/>
                    </div>
                </div>
                <table className="admin-page-main-products-table">
                    <thead>
                        <tr>
                            <th className='flex-3'>Products</th>
                            <th className="flex-1">Category</th>
                            <th className='flex-1'>QTY</th>
                            <th className='flex-1'>Date</th>
                            <th className='flex-1'>Price</th>
                            <th className='flex-1'>Discount</th>
                            <th className='flex-1'>Status</th>
                            <th className='flex-1'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentProducts.map(product => (
                            <tr key={product.id}>
                                <td className='flex-3'>
                                    <div className='row'>
                                        <img src={product.image} alt="" />
                                        <p>{product.name}</p>
                                    </div>
                                </td>
                                <td className="flex-1">{product.category}</td>
                                <td className='flex-1'>{product.qty}</td>
                                <td className='flex-1'>{product.date}</td>
                                <td className='flex-1'>{product.price}</td>
                                <td className='flex-1'>{product.discount}</td>
                                <td className='flex-1' style={{ color: product.status === 'waiting' ? 'yellow' : (product.status === 'in Stock' ? 'green' : (product.status === 'out of Stock' ? 'Red' : 'Black')) }}>{product.status}</td>
                                <td className='flex-1'>
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
                <div className='admin-page-main-products-table-nav-button'>
                    <button onClick={prevPage}><i className='fa-solid fa-arrow-left'></i> Previous</button>
                    <button onClick={nextPage}>Next <i className='fa-solid fa-arrow-right'></i></button>
                </div>
            </div>
        </div>
    );
}

export default Products;
