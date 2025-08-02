import { create } from "zustand";

type State = {
	menuVisible: boolean;
};

type Action = {
	showMenu: () => void;
	hideMenu: () => void;
};

export const useUiStore = create<State & Action>((set) => ({
	menuVisible: false,
	showMenu: () => set(() => ({ menuVisible: true })),
	hideMenu: () => set(() => ({ menuVisible: false })),
}));

type AuthState = {
	isAuthenticated: boolean;
	user: null | IUser;
};

type AuthActions = {
	login: (user: IUser) => void;
	logout: () => void;
};

export const useAuthStore = create<AuthState & AuthActions>((set) => ({
	isAuthenticated: false,
	user: null,
	login: (user: IUser) => set(() => ({ isAuthenticated: true, user: user })),
	logout: () => set(() => ({ isAuthenticated: false, user: null })),
}));
