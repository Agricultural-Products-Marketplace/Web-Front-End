import axios, { AxiosRequestConfig } from 'axios';
import { Category } from '../category/getCategory';
import { Gallery } from '../../model/gallary';
import { Farmer } from '../../model/farmer';
import { url } from '../../api/apiUrl';

export interface ProductData {
        id:              number;
        title:           string;
        description: string;
        image:           string;
        category:        Category;
        price:           string;
        old_price:       string;
        shipping_amount: string;
        stock_qty:       number;
        in_stock:        boolean;
        status:          string;
        featured:        boolean;
        views:           number;
        rating:          number;
        rating_count:    number;
        gallery:         Gallery[];
        farmer:          Farmer;
        pid:             string;
        slug:            string;
        date:            Date;    
}

export async function getAllProducts(): Promise<ProductData[]> {
    console.log('Runing yes');
    console.log(url+'v1/store/products/');
    try {
        const response = await axios.get<ProductData[]>(url+'v1/store/products/');
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return []; // Return an empty array in case of error
    }
}

export async function getProductById(productId: number): Promise<ProductData | null> {
    try {
        const response = await axios.get<ProductData>(`${url}v1/store/products/${productId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product with ID ${productId}:`, error);
        return null; // Return null in case of error
    }
}





