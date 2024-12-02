import { Outlet } from "react-router-dom"
import BottomNavigation from "../Ui/BottomNavigation";
// import { useUiStore } from "../../store/store";
// import Drawer from "../Ui/Drawer";


function MainDashboardLayout() {

    // const { menuVisible } = useUiStore(state => state);

    return (
        <main className="relative h-screen">
            <BottomNavigation />
            <section>
                <Outlet />
            </section>
        </main>
    )
}

export default MainDashboardLayout;