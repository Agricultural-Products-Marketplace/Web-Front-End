import axios from 'axios';
import { url } from '../../api/apiUrl';
import { ProductModel } from '../../model/product';

export async function getAllProducts(): Promise<ProductModel[]> {
    console.log('Runing yes');
    console.log(url+'v1/store/products/');
    try {
        const response = await axios.get<ProductModel[]>(url+'v1/store/products/');
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return []; // Return an empty array in case of error
    }
}

export async function getProductById(productId: number): Promise<ProductModel | null> {
    try {
        const response = await axios.get<ProductModel>(`${url}v1/store/products/${productId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product with ID ${productId}:`, error);
        return null; // Return null in case of error
    }
}





