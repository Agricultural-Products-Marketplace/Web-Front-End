// services/webInfoService.ts
import { useDispatch } from "react-redux";
import { url } from "../../api/apiUrl";
import { WebInformation } from "../../redux/types";

export const fetchWebInfoService = async (dispatch: any): Promise<void> => {
    try {
        const response = await fetch(url + 'v1/web/website-information/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch web information');
        }
        
        const websiteData: WebInformation = await response.json();
        localStorage.setItem('WebInformation', JSON.stringify(websiteData));
        
    } catch (error) {
        // Handle error if needed
        console.error('Error fetching web information:', error);
        // Dispatch failure action if needed
        // dispatch(websiteInformationFailure(error.message));
    }
};
