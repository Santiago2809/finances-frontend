import { redirect } from "react-router-dom";


export function baseLoader({ request }: { request: Request }) {
    const url = new URL(request.url);
    // console.log(url.pathname);

    if (url.pathname !== '/auth/login') {
        return redirect("/auth/login");
    }

    return null;
}