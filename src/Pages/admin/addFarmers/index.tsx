import React, { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers/rootReducer';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios'; // Assuming you're using axios for API calls
import { url } from '../../../api/apiUrl';
import AdminTopCard from '../../shared/card/admin/adminTopCard';

interface VendorState {
    image: File | null;
    name: string;
    email: string;
    description: string;
    mobile: string;
}

const AddFarmer: React.FC = () => {
    const [farmer, setFarmer] = useState<VendorState>({
        image: null,
        name: "",
        email: "",
        description: "",
        mobile: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const agentId = useSelector((state:RootState)=>state.user.profile?.id);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFarmer({
            ...farmer,
            [name]: value,
        });
        console.log(farmer);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFarmer({
                ...farmer,
                image: event.target.files[0],
            });
        }
    };

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formdata = new FormData();
        setIsLoading(true);

        formdata.append('image', farmer.image as Blob);
        formdata.append('name', farmer.name);
        formdata.append('email', farmer.email);
        formdata.append('description', farmer.description);
        formdata.append('mobile', farmer.mobile);
        formdata.append('user_id', String(agentId));

        try {
            const res = await axios.post(`${url}v1/farm/farmer-register/`, formdata, config);
            console.log(res.data.message);
            if (res.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "Vendor Account Created Successfully",
                    text: "Login to continue to dashboard",
                });
                setIsLoading(false);
                setFarmer({
                    image: null,
                    name: "",
                    email: "",
                    description: "",
                    mobile: "",
                })
            }
        } catch (error) {
            console.error('Error creating vendor account', error);
            setIsLoading(false);
        }
    };

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className="admin-page-main">
            <AdminTopCard title="Customers"/>
            <form onSubmit={handleSubmit} className="add-product">
                <div className="admin-page-main-top">
                    <div>
                        <img
                            src={farmer.image ? URL.createObjectURL(farmer.image) : ''}
                            alt=""
                            onClick={handleImageClick}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                </div>
                <div className="add-product-items">
                    <div className="add-product-item">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={farmer.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="add-product-item">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={farmer.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="add-product-item">
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            name="description"
                            value={farmer.description}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="add-product-item">
                        <label htmlFor="mobile">Mobile</label>
                        <input
                            type="text"
                            name="mobile"
                            value={farmer.mobile}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                {!isLoading && <button type="submit" style={{width:"70%",height:"50px",alignSelf:"center",backgroundColor:"#00ff66",border:"none",borderRadius:"5px",color:"white",fontSize:"25px"}}>Add Farmer</button>}
            </form>
        </div>
    );
};

export default AddFarmer;
