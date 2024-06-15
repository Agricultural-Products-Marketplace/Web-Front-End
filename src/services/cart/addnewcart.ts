import { addToCart } from './../../redux/actions/cartAction';
import axios from "axios";
import { url } from "../../api/apiUrl";

export async function addCart(productId:number,userId:number,price: number,country: string,cart_id: string,accessToken:string) {
    const data = {
        product:productId,
        user:userId,
        price: price,
        country: country,
        cart_id: cart_id,
        qty:1,
        shipping_amount:20
    }
    try {
      const response = await axios.post(`${url}v1/store/cart-view/`,data,{
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      
      return response.status
    } catch (error) {
      return error
    }
  }