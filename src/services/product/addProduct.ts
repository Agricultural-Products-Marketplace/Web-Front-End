import { addToCart } from './../../redux/actions/cartAction';
import axios from "axios";
import { url } from "../../api/apiUrl";

export async function addProduct(
    accessToken:string,
    title:string,
    description:string,
    category:number,
    price:number,
    shipping_amount:number,
    stock_qty:number,
    in_stock:boolean,
    status:string,
    featured:boolean,
    farmer:number,
    slug:string
) {
    const data = {
        title: title,
        description: description,
        category: category,
        price: price,
        old_price: price,
        shipping_amount: shipping_amount,
        stock_qty: stock_qty,
        in_stock: in_stock,
        status: status,
        featured: featured,
        farmer: farmer,
        slug: slug
      }
    try {
      const response = await axios.post(`${url}v1/farm/farmer-product-create/${farmer}/`,data,{
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      
      return response.status
    } catch (error) {
      return error
    }
  }