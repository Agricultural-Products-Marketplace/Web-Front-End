import axios from "axios";
import { url } from "../../api/apiUrl";
import { ProductModel } from "../../model/product";
import { CartModel } from "../../model/cart";
import { ReviewModel } from "../../model/productReviewModel";

interface ReviewRespnse{
    status:number;
    data:ReviewModel[];
}

export async function fetchAllProductReview(): Promise<ReviewRespnse> {
    try {
      const response = await axios.get(`${url}v1/store/reviews/`, {
      });
      return {
        status: response.status,
        data:response.data
      }
      
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


export async function fetchProductReviewbyId(productId:number): Promise<ReviewRespnse> {
    try {
      const response = await axios.get(`${url}v1/store/reviews/${productId}/`, {
      });
      return {
        status: response.status,
        data:response.data
      }
      
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