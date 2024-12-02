import { create } from "zustand";


type State = {
    menuVisible: boolean
}

type Action = {
    showMenu: () => void,
    hideMenu: () => void
}

export const useUiStore = create<State & Action>((set) => ({
    menuVisible: false,
    showMenu: () => set(() => ({ menuVisible: true })),
    hideMenu: () => set(() => ({ menuVisible: false }))
}))
