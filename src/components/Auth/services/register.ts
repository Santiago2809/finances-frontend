import axios, { AxiosError } from "axios";

type registerBody = {
    name: string;
    email: string;
    phone?: string;
    password: string;
}

async function register({ name, email, password, phone }: registerBody): Promise<void> {

    try {

        const response = await axios({
            method: 'post',
            url: "http://localhost:3000/auth/register",
            withCredentials: true,
            data: {
                name,
                email,
                phone,
                password
            }
        })
        console.log(response);
        if (response.status === 200) {
            return Promise.resolve();
        }

    } catch (error) {

        if (error instanceof AxiosError) {
            if (error.status === 400) {
                return Promise.reject("Please enter valid fields.")
            }
            if (error.status === 409) {
                return Promise.reject("Email already exists.");
            }
        }
        return Promise.reject("Something went wrong, try again later.");
    }
}

export default register;