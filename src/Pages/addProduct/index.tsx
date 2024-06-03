import React, { useEffect, useState } from 'react';
import './index.css';
import TopPath from '../shared/commen/topPath';
import DropDown from '../shared/card/dropdown';
import { getAllCategories, Category } from '../../services/category/getCategory';



interface Image {
    id: number;
    url: string;
}

function AddProduct() {

    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(()=>{
        const fetchData = async () => {
            const categoriesData = await getAllCategories();
            setCategories(categoriesData);
        };
        fetchData();
    },
[]);

    
    

    const [images, setImages] = useState<Image[]>([]);
    const [imageIdCounter, setImageIdCounter] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);
    const [quantity, setQuantity] = useState<number>(0);
    const [productPrice, setProductPrice] = useState<number>(0);
    const [oldPrice, setOldPrice] = useState<number>(0);
    const [shipmentPrice, setShipmentPrice] = useState<number>(0);
    const [inStock, setInStock] = useState<boolean>(false);

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
                url: URL.createObjectURL(file)
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

    return (
        <div className="add-product">
            <div className="add-product-items">
                <div className="add-product-item">
                    <label htmlFor="product-name">Product Name <sup>*</sup></label>
                    <input type="text" name="product-name" id="product-name" placeholder='Product Name'/>
                </div>
                <div className="add-product-item">
                    <label htmlFor="product-slog">Product Slog <sup>*</sup></label>
                    <input type="text" name="product-slog" id="product-slog" placeholder='Product Slog'/>
                </div>
                <div className="add-product-item">
                    <label htmlFor="category">Category <sup>*</sup></label>
                    <DropDown items={categories.map(category =>(
                        category.title
                    ))}/>
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
                    <DropDown items={['Published', 'In Review', 'Drafted', 'Disabled']}/>
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
                        <input type="checkbox" name="featured" id="featured"/>
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
                    <textarea name="description" id="description" placeholder='Your Description'></textarea>
                </div>
            </div>
            <div className="add-product-items">
                <button className='add-product-button'>Add Product</button>
            </div>
        </div>
    );
}

export default AddProduct;
