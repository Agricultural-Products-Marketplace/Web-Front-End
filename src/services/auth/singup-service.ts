interface SignupData {
    email: string;
    username: string;
    phone_number: string;
    user_type: string;
    password: string;
}


interface SignupResponse {
    message: string;
    user?: {
        id: number;
        username: string;
        email: string;
    };
}



export const signup = async (formData: SignupData): Promise<SignupResponse> => {
    console.log(formData);
    try {
        const response = await fetch("http://127.0.0.1:8000/api/auth/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Registration failed. Please try again.");
        }

        return data;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
};
