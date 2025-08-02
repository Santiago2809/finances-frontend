interface IUser {
	id: string;
	name: string;
	email: string;
	phone: string | null;
}

interface ITransaction {
	id: number;
	name: string;
	type: type;
	category: Partial<ICategory>;
	date: string;
	amount: number;
}

interface ICategory {
	id: string;
	name: string;
	userId: string;
}

type type = "income" | "expense";
