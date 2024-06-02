import { url } from "../../api/apiUrl";

interface SignupData {
    email: string;
    username: string;
    phone_number: string;
    user_type: string;
    password: string;
}

interface SignupResponse {
    message: string;
    status: number;
}


export const signup = async (formData: SignupData): Promise<SignupResponse> => {
    console.log(formData);

    try {
        const baseurl = url; 
        const response = await fetch(baseurl+"auth/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (response.status === 201) {
            return {
                message: data.message,
                status: response.status
            };
        } else if (response.status === 400) {
            // Extract the first error message
            const firstErrorMessage = Object.values(data)
                .flat()
                .map(value => {
                    if (Array.isArray(value)) {
                        return value.join(" ");
                    } else if (typeof value === 'string') {
                        return value;
                    }
                    return '';
                })
                .find(message => message.trim() !== '');

            return {
                message: firstErrorMessage || "Registration failed. Please try again.",
                status: response.status
            };
        }

        return {
            message: data.message,
            status: response.status
        };
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
};
