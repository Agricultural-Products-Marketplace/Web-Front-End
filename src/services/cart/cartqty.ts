import axios from "axios";
import { url } from "../../api/apiUrl";

export async function updateCatQuantity(productId:number,userId:number,cartId:string,quantity:Number) {
    const data = {
        product_id:productId,
        user_id :userId,
        cart_id:cartId,
        qty:quantity
    }
    try {
      const response = await axios.post(`${url}v1/store/store/cart/update-quantity/`,data);
      return response.status
    } catch (error) {
      return error
    }
  }