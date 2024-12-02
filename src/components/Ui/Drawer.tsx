import { useUiStore } from "../../store/store"


export default function Drawer() {

    const hideMenu = useUiStore(state => state.hideMenu);

    return (
        <section className="absolute bg-black w-screen h-screen">
            <h2 className="text-4xl">Este es el sidebar</h2>
            <button onClick={hideMenu} className="text-3xl leading-none bg-green-700 px-4 py-2 rounded-md">hide menu</button>
        </section>
    )
}
