import axios from "axios";
import { url } from "../../api/apiUrl";
import { ProductModel } from "../../model/product";
import { CartModel } from "../../model/cart";

interface FetchCartResponse {
    status: number;
    data: CartModel[];
  }

export async function fetchcart(userId:number,accessToken: string): Promise<FetchCartResponse> {
    try {
      const response = await axios.get(`${url}v1/customer/customer/cart/${userId}/`, {
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