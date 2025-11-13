import { Outlet } from "react-router-dom";
import { PanelRight } from "lucide-react";
import Drawer from "../Ui/Drawer";
import { useValidateAuth } from "../../hooks/useValidateAuth";
import { useUiStore } from "../../store/store";
import { useIsMobile } from "../../hooks/useIsMobile";

function MainDashboardLayout() {
	const user = useValidateAuth();
	const isMobile = useIsMobile();
	const { drawerVisible, showDrawer, hideDrawer } = useUiStore();

	return (
		<div className="flex h-screen relative">
			{!isMobile && <Drawer />}
			{isMobile && drawerVisible && <Drawer />}
			<main className="relative h-screen w-full">
				<section className="flex-grow h-full overflow-y-scroll">
					<div className="w-full flex items-center gap-x-3 bg-[#1f1f20] p-4">
						{isMobile && (
							<div className="p-2 hover:rounded-full hover:bg-slate-400/15 cursor-pointer" onClick={isMobile && drawerVisible ? hideDrawer : showDrawer}>
								<PanelRight size={20} />
							</div>
						)}
						{user && <p className="min-[890px]:text-lg">Hello {user?.name?.split(" ")[0]}</p>}
					</div>
					<div className="p-6 pb-8">
						<Outlet />
					</div>
				</section>
			</main>
		</div>
	);
}

export default MainDashboardLayout;
