import React, { useState, useEffect } from 'react';
import AdminTopCard from '../../shared/card/admin/adminTopCard';
import './index.css';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers/rootReducer';
import { getFarmersById, getfarmersProps } from '../../../services/farmer/getfarmers';
import EdiProduct from '../editProducts';
import { deletefarmerproduct } from '../../../services/product/deletProduct';

function ManageFarmers() {
    const userId = 2;
    const accessToken = useSelector((state: RootState) => state.login.user?.access);
    const [editProduct, setEditProduct] = useState<boolean>(false);
    const [editProductId, setEditProductId] = useState<number>(0);
    const [farmers,setFarmers] = useState<getfarmersProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getFarmersById(Number(userId));
            if (response) {
                setFarmers(response);
            } else {
                console.error("Failed to fetch farmers data");
            }
        };
        fetchData();
    }, []);

    return (
        <div className="admin-page-main">
            <AdminTopCard title="My Farmers" />
            {editProduct ? (
                <EdiProduct 
                    productId={Number(editProductId)}
                />
            ) : (
                <div className="admin-page-main-products">
                    <div className="admin-page-main-products-title">
                        <h3>Farmers List</h3>
                    </div>
                    <table className="admin-page-main-products-table">
                        <thead>
                            <tr>
                                <th className='flex-3'>Farmer</th>
                                <th className="flex-1">Mobile</th>
                                <th className='flex-1'>Email</th>
                                <th className='flex-1'>ID</th>
                                <th className='flex-1'>Phone</th>
                                <th className='flex-1'>Name</th>
                                <th className='flex-1'>Status</th>
                                <th className='flex-1'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(farmers.length > 0)?(
                                farmers.map(farmer => (
                                    <tr key={farmer.id}>
                                        <td className='flex-3'>
                                            <div className='row'>
                                                <img src={farmer.image} alt="" />
                                                <p>{farmer.name}</p>
                                            </div>
                                        </td>
                                        <td className="flex-1">{farmer.mobile}</td>
                                        <td className='flex-1'>{farmer.mobile}</td>
                                        <td className='flex-1'>{String(farmer.id)}</td>
                                        <td className='flex-1'>{farmer.mobile}</td>
                                        <td className='flex-1'>{farmer.name}</td>
                                        <td className='flex-1' style={{ color: farmer.name === 'in_review' ? 'yellow' : (farmer.name === 'published' ? 'green' : (farmer.name === 'disabled' ? 'Red' : 'Black')) }}>
                                            {farmer.name}
                                        </td>
                                        <td className='flex-1'>
                                            <div className='row'>
                                                <button onClick={() => {
                                                    setEditProductId(farmer.id);
                                                    setEditProduct(true);
                                                }}><i className='fa-solid fa-pen'></i></button>
                                                <button
                                                    onClick={() => {
                                                        Swal.fire({
                                                            title: 'Are you sure?',
                                                            text: "You won't be able to revert this!",
                                                            icon: 'warning',
                                                            showCancelButton: true,
                                                            confirmButtonColor: '#d33',
                                                            cancelButtonColor: '#000000',
                                                            confirmButtonText: 'Yes, delete it!'
                                                        }).then((result) => {
                                                            if (result.isConfirmed) {
                                                                deletefarmerproduct(Number(userId), farmer.name, String(accessToken));
                                                                window.location.reload();
                                                            }
                                                        })
                                                    }}
                                                ><i className='fa-solid fa-trash'></i></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ):(null)
                            }
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default ManageFarmers;
