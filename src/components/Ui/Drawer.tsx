import { House, Settings, Target, Wallet } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "./Button";
import { axiosInstance } from "../../config/axios-config";
import { useAuthStore, useUiStore } from "../../store/store";
import { useIsMobile } from "../../hooks/useIsMobile";

export default function Drawer() {
	const logoutFn = useAuthStore((state) => state.logout);
	const { hideDrawer } = useUiStore((state) => state);
	const isMobile = useIsMobile();
	const navigate = useNavigate();

	async function handleLogout() {
		const response = await axiosInstance.post("/auth/logout", {}, { withCredentials: true });
		if (response.status === 200) {
			// Clear user data from the store
			logoutFn();
			// Redirect to the login page
			navigate("/auth/login");
		}
	}

	return (
		<section className={"w-[15%] min-w-[225px] max-w-[265px] animate__animated animate__slideInLeft animate__faster" + (isMobile && " absolute z-50 h-screen")}>
			<div className="p-4 flex flex-col bg-zinc-800 h-full">
				<h2 className="text-4xl text-center mb-4">Fintrack</h2>
				<ul className="p-2 flex flex-col gap-y-2 cursor-pointer">
					<NavItem onClick={hideDrawer} text="" icon={<House size={20} />} />
					<NavItem onClick={hideDrawer} text="Transactions" icon={<Wallet size={20} />} />
					<NavItem onClick={hideDrawer} text="Budgets" icon={<Target size={20} />} />
					<NavItem onClick={hideDrawer} text="Settings" icon={<Settings size={20} />} />
				</ul>
				<Button styles="mt-auto" onClick={handleLogout}>
					Logout
				</Button>
			</div>
		</section>
	);
}

function NavItem({ text, icon, onClick }: { text: string; icon?: JSX.Element; onClick?: () => void }) {
	const baseStyle = "flex items-center gap-x-2 p-2 rounded-lg hover:bg-zinc-700 transition-colors duration-100";
	return (
		// <li className=" p-2 rounded-lg hover:bg-zinc-700 transition-colors duration-100">
		<NavLink onClick={onClick} to={`/${text.toLowerCase()}`} className={({ isActive }) => (isActive ? "bg-zinc-700 " + baseStyle : baseStyle)}>
			{icon}
			{text || "Home"}
		</NavLink>
		// </li>
	);
}
