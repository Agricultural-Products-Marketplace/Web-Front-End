import axios from "axios";
import { url } from "../../api/apiUrl";
import { ProductModel } from "../../model/product";
import { CartModel } from "../../model/cart";


export async function deletcartitem(cartId:string,itemId:number,accessToken: string){
    try {
      const response = await axios.delete(`${url}v1/store/cart-delete/${cartId}/${itemId}/`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      return response.status
      
    } catch (error) {
        return error
    }
  }