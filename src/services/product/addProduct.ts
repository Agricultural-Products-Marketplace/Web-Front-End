import { addToCart } from './../../redux/actions/cartAction';
import axios from "axios";
import { url } from "../../api/apiUrl";

export async function addProduct( formData:FormData,farmerId:number,accessToken:string ) {
    try {
      const response = await axios.post(`${url}v1/farm/farmer-product-create/${farmerId}/`,formData,{
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type':'multipart/form-data',
        }
      });
      
      return response.status
    } catch (error) {
      return error
    }
  }