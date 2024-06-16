import axios from "axios";
import { ProductModel } from "../../model/product";
import { url } from "../../api/apiUrl";
import { GetOrder } from "../../model/getorders";

interface getorders{
    status:number;
    orders:GetOrder[];
}

export async function getOrderById(farmerID: number): Promise<getorders> {
    try {
        const response = await axios.get<GetOrder[]>(`${url}v1/farm/farmer/orders/${farmerID}`);
        return {
            status:response.status,
            orders:response.data
        }
    } catch (error) {
        console.error(`Error fetching product with ID ${farmerID}:`, error);
        return {
            status:500,
            orders:[]
        }
    }
}