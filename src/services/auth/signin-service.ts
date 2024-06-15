//signin service

import { Dispatch } from "react";
import { url } from "../../api/apiUrl";
import { LoginAction, loginSuccess } from "../../redux/actions/loginAction";
import axios, { AxiosRequestConfig } from "axios";

export const login = async (emailPhone: string, password: string)=> {
    console.log(emailPhone,password);
    return async (dispatch: Dispatch<LoginAction>) => {
    try {
        const response = await fetch(url+'v1/auth/login/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email:emailPhone,
                password:password,
            })
        });

        const data = await response.json();
        console.log(data);
        if(response.ok){
            dispatch(loginSuccess(data))
            
        }
        if (!response.ok) {
            throw new Error(data.message || "Login failed. Please try again.");
        }

        return data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
}
};

export const updateProfile = async (updatedFields: { [key: string]: string }, accessToken: any, imageFile:File|null) => {
    try {
        const config: AxiosRequestConfig = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        };
        const response = await axios.patch(`${url}v1/auth/profile/update/`, updatedFields, config);
        if(response.status === 200){
            localStorage.removeItem("UserData");
            if(imageFile){
                const formData = new FormData();
                formData.append('image', imageFile);
                try{
                    const response = await axios.post(`${url}v1/auth/profile/profileImage/`, formData, {
                        headers: {
                          'Authorization': `Bearer ${accessToken}`,
                          'Content-Type': 'multipart/form-data'
                        }
                      });

                    if(response.status === 200){
                        try{
                            console.log("this is geeting this data 1");
                            console.log("this is geeting this data 2");
                            const response = await fetch(`${url}v1/auth/profile/`,{
                                headers:{
                                    Authorization: `Bearer ${accessToken}`,
                                },
                            });
                    
                            if(!response.ok){
                                throw new Error('Failed to fetch user profile');
                            }
            
                    
                            const userProfile = await response.json();
                            localStorage.setItem("UserData",JSON.stringify(userProfile));
                    
                        }catch(error: any){
                            return(error);
                        }
                    }
                    else{
                        try{
                            console.log("this is geeting this data 1");
                            console.log("this is geeting this data 2");
                            const response = await fetch(`${url}v1/auth/profile/`,{
                                headers:{
                                    Authorization: `Bearer ${accessToken}`,
                                },
                            });
                    
                            if(!response.ok){
                                throw new Error('Failed to fetch user profile');
                            }
            
                    
                            const userProfile = await response.json();
                            localStorage.setItem("UserData",JSON.stringify(userProfile));
                    
                        }catch(error: any){
                            return(error);
                        }
                    }
                }
                catch(error){
                    return error
                }
            }
            else{
                try{
                    console.log("this is geeting this data 1");
                    console.log("this is geeting this data 2");
                    const response = await fetch(`${url}v1/auth/profile/`,{
                        headers:{
                            Authorization: `Bearer ${accessToken}`,
                        },
                    });
            
                    if(!response.ok){
                        throw new Error('Failed to fetch user profile');
                    }
    
            
                    const userProfile = await response.json();
                    localStorage.setItem("UserData",JSON.stringify(userProfile));
            
                }catch(error: any){
                    return(error);
                }
            }

            

        }
    } catch (error) {
        throw error;
    }
};
