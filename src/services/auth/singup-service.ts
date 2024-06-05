import { url } from "../../api/apiUrl";

interface SignupData {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    password: string;
    password2: string;
}

interface SignupResponse {
    message: string;
    status: number;
}


export const signup = async (formData: SignupData): Promise<SignupResponse> => {
    console.log(formData);

    try {
        const response = await fetch(url+"v1/auth/register/", {
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
