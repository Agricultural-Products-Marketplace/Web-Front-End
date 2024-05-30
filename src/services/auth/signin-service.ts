
interface LoginResponse {
    token: string;
    user: {
        id: number;
        name: string;
        email: string;
    };
}

export const login = async (emailPhone: string, password: string): Promise<LoginResponse> => {
    try {
        const response = await fetch("http://127.0.0.1:8000/auth/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailPhone,
                password
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Login failed. Please try again.");
        }

        return data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
};
