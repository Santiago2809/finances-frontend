import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Auth/Login";
import MainDashboardLayout from "../components/Dashboard/MainDashboardLayout";
import MainDashboard from "../components/Dashboard/MainDashboard";
import { baseLoader } from "./loaders";
import { lazy, Suspense } from "react";
import FallbackLoader from "../components/Ui/FallbackLoader";
import ErrorElement from "../components/Ui/ErrorElement";
import TransactionsPage from "../components/Transactions/TransactionsPage";

const Register = lazy(() => import("../components/Auth/Register"));

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
						element: <MainDashboard />,
					},
					{
						path: "transactions",
						element: <TransactionsPage />,
					},
				],
			},
			{
				path: "auth",
				children: [
					{
						path: "login",
						element: <Login />,
					},
					{
						path: "register",
						element: (
							<Suspense fallback={<FallbackLoader />}>
								<Register />
							</Suspense>
						),
					},
				],
			},
		],
		errorElement: <ErrorElement />,
	},
]);

export default router;
