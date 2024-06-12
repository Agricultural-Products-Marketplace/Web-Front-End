import axios from 'axios';
import ProductModel from '../../model/product';
import { url } from '../../api/apiUrl';
import {  ProductModelMain } from '../../model/productDetail';



interface FetchWishlistResponse {
  status: number;
  data: ProductModelMain[];
}


export async function fetchWishlists(userId:number,accessToken: string): Promise<FetchWishlistResponse> {
  try {
    const response = await axios.get(`${url}v1/customer/customer/wishlist/${userId}/`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    
    return {
      status: response.status,
      data: response.data
    };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        status: error.response.status,
        data: []
      };
    } else {
      return {
        status: 500,
        data: []
      };
    }
  }
}



export async function addWishlists(userId:number,productId:number,accessToken: string) {
  const data = {
    user:userId,
    product:productId
  }
  try {
    const response = await axios.post(`${url}v1/customer/customer/wishlist/create/`,data,{
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    
    return response.status
  } catch (error) {
    return error
  }
}
