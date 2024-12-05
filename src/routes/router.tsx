import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Auth/Login";
import MainDashboardLayout from "../components/Dashboard/MainDashboardLayout";
import MainDashboard from "../components/Dashboard/MainDashboard";
import { baseLoader } from "./loaders";
import { lazy, Suspense } from "react";
import FallbackLoader from "../components/Ui/FallbackLoader";

const Register = lazy(() => import("../components/Auth/Register"))


const router = createBrowserRouter([
    {
        path: "/",
        loader: baseLoader,
        children: [
            {
                path: "",
                loader: baseLoader,
                element: <MainDashboardLayout />,
                children: [
                    {
                        index: true,
                        element: <MainDashboard />
                    }
                ]
            },
            {
                path: "auth",
                children: [
                    {
                        path: "login",
                        element: <Login />
                    },
                    {
                        path: "register",
                        element: <Suspense fallback={<FallbackLoader />}>
                            <Register />
                        </Suspense>
                    }
                ]
            }
        ],
    },
]);

export default router;
