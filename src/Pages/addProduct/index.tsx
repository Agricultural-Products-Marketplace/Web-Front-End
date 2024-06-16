import React, { useEffect, useState } from 'react';
import './index.css';
import TopPath from '../shared/commen/topPath';
import DropDown from '../shared/card/dropdown';
import { getAllCategories } from '../../services/category/getCategory';
import { Category } from '../../model/category';
import { addProduct } from '../../services/product/addProduct';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

interface Image {
    id: number;
    url: string;
    file: File;
}

function AddProduct() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState<Category[]>([]);
    const userId = useSelector((state: RootState) => state.user.profile?.id);
    const accessKey = useSelector((status: RootState) => status.login.user?.access);
    const [images, setImages] = useState<Image[]>([]);
    const [imageIdCounter, setImageIdCounter] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);
    const [quantity, setQuantity] = useState<number>(0);
    const [productPrice, setProductPrice] = useState<number>(0);
    const [oldPrice, setOldPrice] = useState<number>(0);
    const [shipmentPrice, setShipmentPrice] = useState<number>(0);
    const [inStock, setInStock] = useState<boolean>(false);
    const [isFeatured, setIsFeatured] = useState<boolean>(false);
    const [productName, setProductName] = useState<string>('');
    const [productSlog, setProductSlog] = useState<string>('');
    const [category, setCategory] = useState<string>('Select category');
    const [status, setStatus] = useState<string>('Select status');
    const [description, setDescription] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            const categoriesData = await getAllCategories();
            setCategories(categoriesData);
        };
        fetchData();
    }, []);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const files = Array.from(event.target.files);
            if (images.length + files.length > 10) {
                setError("You can only upload a maximum of 10 images.");
                return;
            }
            setError(null);
            const newImages = files.map((file, index) => ({
                id: imageIdCounter + index + 1,
                url: URL.createObjectURL(file),
                file: file
            }));
            setImageIdCounter(prevCounter => prevCounter + files.length);
            setImages(prevImages => [...prevImages, ...newImages]);
        }
    };

    const handleImageDelete = (id: number) => {
        setImages(images.filter(image => image.id !== id));
    };

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newQuantity = Number(event.target.value);
        if (newQuantity < 0) {
            newQuantity = 0;
        }
        setQuantity(newQuantity);
        setInStock(newQuantity > 0);
    };

    const handleProductPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newPrice = Number(event.target.value);
        if (newPrice < 0) {
            newPrice = 0;
        }
        setProductPrice(newPrice);
    };

    const handleOldPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newOldPrice = Number(event.target.value);
        if (newOldPrice < 0) {
            newOldPrice = 0;
        }
        setOldPrice(newOldPrice);
    };

    const handleShipmentPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newShipmentPrice = Number(event.target.value);
        if (newShipmentPrice < 0) {
            newShipmentPrice = 0;
        }
        setShipmentPrice(newShipmentPrice);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        if (!productName || !description || !productPrice || !category || !shipmentPrice || !quantity || images.length === 0) {
            // If any required field is missing, show an error message or take appropriate action
            console.log("Please fill in all required fields");
            setIsLoading(false);
            Swal.fire({
                icon: 'warning',
                title: 'Missing Fields!',
                text: "All fields are required to create a product",
            });
            return;
        }

        try {
            // Create a FormData object
            const formData = new FormData();

            // Append product data
            formData.append('title', productName);
            formData.append('description', description);
            formData.append('price', String(productPrice));
            formData.append('shipping_amount', String(shipmentPrice));
            formData.append('stock_qty', String(quantity));
            formData.append('category',String(3));
            formData.append('in_stock', String(inStock));
            formData.append('status', status);
            formData.append('is_featured', String(isFeatured));
            formData.append('farmer', String(2));
            formData.append('slug', productSlog);
            formData.append('image',images[0].file);
            images.forEach((item,index)=> {
                if(item.file){
                    formData.append(`gallery[${index}][image]`,item.file);
                }
            })

            // Append images
            images.forEach((image, index) => {
                formData.append(`images[${index}]`, image.file);
            });

            const response = await addProduct(
                formData,Number(userId),String(accessKey)
            );

            navigate('/vendor/products/');
            Swal.fire({
                icon: 'success',
                title: 'Product Created Successfully',
                text: 'This product has been successfully created',
            });

            setIsLoading(false);

        } catch (error) {
            console.error('Error submitting form:', error);
            setIsLoading(false);
        }
    };

    return (
        <form className="add-product" onSubmit={handleSubmit}>
        
            <div className="add-product-items">
                <div className="add-product-item">
                    <label htmlFor="product-name">Product Name <sup>*</sup></label>
                    <input type="text" name="product-name" id="product-name" placeholder='Product Name' required
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </div>
                <div className="add-product-item">
                    <label htmlFor="product-slog">Product Slog <sup>*</sup></label>
                    <input type="text" name="product-slog" id="product-slog" placeholder='Product Slog'
                        onChange={(e) => setProductSlog(e.target.value)}
                    />
                </div>
                <div className="add-product-item">
                    <label htmlFor="category">Category <sup>*</sup></label>
                    <DropDown items={categories.map(category => (
                        category.title
                    ))}
                        onSelectItem={setCategory}
                        selectedItem={category}
                    />
                </div>
            </div>

            <div className="add-product-items">
                <div className="add-product-item">
                    <label htmlFor="product-price">Product Price <sup>*</sup></label>
                    <input
                        type="number"
                        name="product-price"
                        id="product-price"
                        placeholder='Product Price'
                        value={productPrice}
                        onChange={handleProductPriceChange}
                    />
                </div>
                <div className="add-product-item">
                    <label htmlFor="old-price">Product Old Price <sup>*</sup></label>
                    <input
                        type="number"
                        name="old-price"
                        id="old-price"
                        placeholder='Old Price'
                        value={oldPrice}
                        onChange={handleOldPriceChange}
                    />
                </div>
                <div className="add-product-item">
                    <label htmlFor="status">Status <sup>*</sup></label>
                    <DropDown items={['draft', 'disabled', 'in_review', 'published']}
                        selectedItem={status}
                        onSelectItem={setStatus}
                    />
                </div>
            </div>
            <div className="add-product-items">
                <div className="add-product-item">
                    <label htmlFor="quantity">Quantity <sup>*</sup></label>
                    <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        placeholder='Quantity'
                        value={quantity}
                        onChange={handleQuantityChange}
                    />
                </div>
                <div className="add-product-item">
                    <label htmlFor="shipment-price">Shipment Price <sup>*</sup></label>
                    <input
                        type="number"
                        name="shipment-price"
                        id="shipment-price"
                        placeholder='Shipment Price'
                        value={shipmentPrice}
                        onChange={handleShipmentPriceChange}
                    />
                </div>
                <div className="add-product-item product-check-box">
                    <div className="add-product-item-one">
                        <label htmlFor="in-stock">In Stock</label>
                        <input
                            type="checkbox"
                            name="in-stock"
                            id="in-stock"
                            checked={inStock}
                            readOnly
                        />
                    </div>
                    <div className="add-product-item-one">
                        <label htmlFor="featured">Featured</label>
                        <input type="checkbox" name="featured" id="featured"
                            checked={isFeatured}
                            onChange={() => setIsFeatured(!isFeatured)}
                        />
                    </div>
                </div>
            </div>

            {error && <p className="error-message">{error}</p>}
            <div className="add-product-items add-product-items-img">
                <div className="add-product-items-image">
                    <div className="add-product-item-add-image">
                        <label htmlFor="image-upload">
                            <i className="fa-solid fa-file-import"></i>
                        </label>
                        <input
                            type="file"
                            id="image-upload"
                            accept="image/*"
                            multiple
                            style={{ display: 'none' }}
                            onChange={handleImageUpload}
                        />
                    </div>

                    <div className="image-preview">
                        {images.map((image) => (
                            <div key={image.id} className="uploaded-image-container">
                                <img src={image.url} alt={`Upload ${image.id}`} className="uploaded-image" />
                                <button onClick={() => handleImageDelete(image.id)} className="delete-button">×</button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="add-product-items-description">
                    <textarea name="description" id="description" placeholder='Your Description'
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
            </div>
            <div className="add-product-items">
                <button className='add-product-button' type="submit" disabled={isLoading}>
                    {isLoading ? 'Adding...' : 'Add Product'}
                </button>
            </div>
        </form>
    );
}

export default AddProduct;
