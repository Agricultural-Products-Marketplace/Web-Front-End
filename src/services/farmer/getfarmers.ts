import axios from "axios";
import { url } from "../../api/apiUrl";


export interface getfarmersProps{
    id: number,
    name: string,
    mobile: string,
    description: string,
    image: string,
}




export async function getFarmersById(userId: number):Promise<getfarmersProps []> {
    try {
        const response = await axios.get<getfarmersProps[]>(`${url}v1/farm/get-farmer-register-by-useerid/${userId}`);
        console.log(response);
        console.log(response);
        console.log(response);
        console.log(response);
        return response.data
    } catch (error) {
        console.error(`Error fetching product with ID ${userId}:`, error);
        return [];
    }
}


export async function getAllFarmers():Promise<getfarmersProps []> {
    try {
        const response = await axios.get<getfarmersProps[]>(`${url}v1/farm/farmers`);
        console.log(response);
        console.log(response);
        console.log(response);
        console.log(response);
        return response.data
    } catch (error) {
        console.error(`Error fetching product:`, error);
        return [];
    }
}