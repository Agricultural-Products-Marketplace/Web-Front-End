import axios from "axios";
import { url } from "../../api/apiUrl";

interface OrderResponse {
  message: string;
  order_oid: string;
}

export async function addorder(fullName: string, email: string, mobile: string, address: string, city: string, state: string, country: string, cartId: string, userId: number): Promise<OrderResponse> {
  const data = {
    full_name: fullName,
    email: email,
    mobile: mobile,
    address: address,
    city: city,
    state: state,
    country: country,
    cart_id: cartId,
    user_id: userId,
  };

  try {
    const response = await axios.post(`${url}v1/store/create-order/`, data);
    return response.data;
  } catch (error) {
    throw new Error("not Ordered");
  }
}
