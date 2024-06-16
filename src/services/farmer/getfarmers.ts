import axios from "axios";
import { url } from "../../api/apiUrl";


interface getfarmersProps{
    id: number,
    name: string,
    mobile: string,
    description: string,
    image: string,
}

interface FarmerResponse{
    status:number,
    farmer:getfarmersProps[],
}



export async function getFarmersById(userId: number):Promise<FarmerResponse> {
    try {
        const response = await axios.get<FarmerResponse>(`${url}v1/farm/get-farmer-register-by-useerid/${userId}`);
        console.log(response);
        console.log(response);
        console.log(response);
        console.log(response);
        return {
            status:response.status,
            farmer:response.data.farmer,
            }
    } catch (error) {
        console.error(`Error fetching product with ID ${userId}:`, error);
        return {
            status:500,
            farmer:[]
        }
    }
}