//signin service

import { Dispatch } from "react";
import { url } from "../../api/apiUrl";
import { LoginAction, loginSuccess } from "../../redux/actions/loginAction";

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
