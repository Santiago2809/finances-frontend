import { Outlet } from "react-router-dom";
import Drawer from "../Ui/Drawer";
import { PanelRight } from "lucide-react";
import { useValidateAuth } from "../../hooks/useValidateAuth";

function MainDashboardLayout() {
	const user = useValidateAuth();

	return (
		<div className="flex h-screen">
			<Drawer />
			<main className="relative h-screen w-full">
				{/* <BottomNavigation /> */}
				<section className="flex-grow h-full">
					<div className="w-full flex items-center gap-x-3 bg-[#1f1f20] p-4">
						<div className="p-2 hover:rounded-full hover:bg-slate-400/15 cursor-pointer">
							<PanelRight size={20} />
						</div>
						{user && <p className="">Hello {user?.name?.split(" ")[0]}</p>}
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
