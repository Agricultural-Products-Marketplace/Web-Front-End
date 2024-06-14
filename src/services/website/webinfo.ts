import { url } from "../../api/apiUrl";
import { WebInformation } from "../../redux/types";
import axios from "axios";

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
        console.error('Error fetching web information:', error);
    }
};


export async function getpartnersinfo() {
    try {
        const response = await axios.get(url+'v1/web/partners-information/');
        localStorage.setItem("partners-info",JSON.stringify(response.data));
        console.log(response.data)
        return response.data;

    } catch (error) {
        return error
    }
}



export async function getsupportinfo() {
    try {
        const response = await axios.get(url+'v1/web/support-information/');
        localStorage.setItem("support-info",JSON.stringify(response.data));
        console.log(response.data)
        return response.data;

    } catch (error) {
        return error
    }
}


export async function getsocialmediainfo() {
    try {
        const response = await axios.get(url+'v1/web/social-media/');
        localStorage.setItem("Social-media-info",JSON.stringify(response.data));
        console.log(response.data)
        return response.data;

    } catch (error) {
        return error
    }
}


