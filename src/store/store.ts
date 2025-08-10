import { create } from "zustand";

type State = {
	menuVisible: boolean;
	drawerVisible: boolean;
	addTransactionModalVisible: boolean;
};

type Action = {
	showMenu: () => void;
	hideMenu: () => void;
	showDrawer: () => void;
	hideDrawer: () => void;
	showAddTransactionModal: () => void;
	hideAddTransactionModal: () => void;
};

export const useUiStore = create<State & Action>((set) => ({
	menuVisible: false,
	drawerVisible: false,
	addTransactionModalVisible: false,
	showMenu: () => set(() => ({ menuVisible: true })),
	hideMenu: () => set(() => ({ menuVisible: false })),
	showDrawer: () => set(() => ({ drawerVisible: true })),
	hideDrawer: () => set(() => ({ drawerVisible: false })),
	showAddTransactionModal: () => set(() => ({ addTransactionModalVisible: true })),
	hideAddTransactionModal: () => set(() => ({ addTransactionModalVisible: false })),
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

type TransactionsState = {
	transactions: ITransaction[];
};

type TransactionsActions = {
	addTransactions: (transactions: ITransaction[]) => void;
	addNewTransaction: (transaction: ITransaction) => void;
};

export const useTransactionsStore = create<TransactionsState & TransactionsActions>((set) => ({
	transactions: [],
	addTransactions: (transactions) =>
		set(() => ({
			transactions: transactions,
		})),
	addNewTransaction: (transaction) =>
		set((state) => ({
			transactions: [...state.transactions, transaction],
		})),
}));
