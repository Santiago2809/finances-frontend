import axios, { AxiosError } from "axios";


async function login(email: string, password: string): Promise<string> {

    const token: string = "";

    try {

        const response = await axios({
            method: 'post',
            url: "http://localhost:3000/auth/login",
            data: {
                username: email,
                password
            }
        })
        if (response.status === 200) {
            return "token";
        }
    } catch (error) {

        if (error instanceof AxiosError) {
            if (error.status === 401) {
                return Promise.reject("Incorrect username or password")
            }
        }
        return Promise.reject("Something went wrong, try again later.");
    }

    return token;

}

export default login;