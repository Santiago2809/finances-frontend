import axios, { AxiosError } from "axios";


async function login(email: string, password: string): Promise<void> {


    try {

        const response = await axios({
            method: 'post',
            url: "http://localhost:3000/auth/login",
            withCredentials: true,
            data: {
                email,
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
            if (error.status === 401) {
                return Promise.reject("Password is incorrect.");
            }
            if (error.status === 404) {
                return Promise.reject("Email not found, please try again.");
            }
        }
        return Promise.reject("Something went wrong, try again later.");
    }
}

export default login;