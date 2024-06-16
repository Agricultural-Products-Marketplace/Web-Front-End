import axios from "axios";
import { url } from "../../api/apiUrl";

export async function deletefarmerproduct(farmerId:number,productPid:string,accessToken: string){
    try {
      const response = await axios.delete(`${url}v1/farm/farmer-product-delete/${farmerId}/${productPid}/`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      return response.status
      
    } catch (error) {
        return error
    }
  }