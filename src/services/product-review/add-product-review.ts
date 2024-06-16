import axios from "axios";
import { url } from "../../api/apiUrl";

export async function addProductReview(accessToken:string,userId:number,productId:number,reivew:string,ratting:number) {
    const data = {
            user_id: userId,
            product_id: productId,
           review: reivew,
           replay: "",
           rating: ratting
    }
    try {
        console.log(ratting);
      const response = await axios.post(`${url}v1/store/create-review/`,data,{
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      
      return response.status
    } catch (error) {
      return error
    }
  }