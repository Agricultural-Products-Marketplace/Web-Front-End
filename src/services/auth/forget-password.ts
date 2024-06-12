import axios from "axios";
import { url } from "../../api/apiUrl";

export async function forgetpassword(email: string): Promise<number> {
  try {
    const response = await axios.get(`${url}v1/auth/password-reset/${email}`);
    return response.status;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // Return the status code from the error response if available
      return error.response.status;
    } else {
      // Return a generic error code if the error response is not available
      return 500;
    }
  }
}
