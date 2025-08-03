import { Outlet } from "react-router-dom";
import BottomNavigation from "../Ui/BottomNavigation";
import Drawer from "../Ui/Drawer";
import { PanelRight } from "lucide-react";
import { useEffect } from "react";
import { useAuthStore } from "../../store/store";
import { axiosInstance } from "../../config/axios-config";
// import { useUiStore } from "../../store/store";
// import Drawer from "../Ui/Drawer";

function MainDashboardLayout() {
	const { user, login } = useAuthStore((state) => state);

	useEffect(() => {
		(async () => {
			try {
				const response = await axiosInstance.get<IUserResponse>("auth/me", { withCredentials: true });
				if (response.status === 200) {
					const userData = response.data.data;
					if (userData) {
						// Set user data in the store
						login(userData);
					}
				}
			} catch (error) {
				console.log(error);
			}
		})();
	}, [login]);

	return (
		<div className="flex h-screen">
			<Drawer />
			<main className="relative h-screen w-full">
				{/* <BottomNavigation /> */}
				<section className="flex-grow">
					<div className="w-full flex items-center gap-x-3 bg-[#1f1f20] p-4">
						<div className="p-2 hover:rounded-full hover:bg-slate-400/15 cursor-pointer">
							<PanelRight size={20} />
						</div>
						{user && <p className="">Hello {user?.name.split(" ")[0]}</p>}
					</div>
					<div className="p-6">
						<Outlet />
					</div>
				</section>
			</main>
		</div>
	);
}

export default MainDashboardLayout;
