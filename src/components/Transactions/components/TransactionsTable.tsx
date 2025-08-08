import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "../../../lib/utils";
import { getTransactions } from "../services/transactions";
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";

const transactionsMockData: ITransaction[] = [
	{
		id: 1,
		name: "The second quincena of the month",
		type: "income",
		categories: { id: 1, name: "Salary" },
		date: "25/08/2023",
		amount: 5000,
	},
	{
		id: 2,
		name: "groceries",
		type: "expense",
		categories: { id: 1, name: "Food" },
		date: "19/10/2023",
		amount: 249.99,
	},
	{
		id: 3,
		name: "Salary",
		type: "income",
		categories: null,
		date: "2023-10-01",
		amount: 5000,
	},
	{
		id: 4,
		name: "Salary",
		type: "income",
		categories: { id: 1, name: "Salary" },
		date: "2023-10-01",
		amount: 5000,
	},
];

export default function TransactionsTable() {
	const transactions = useLoaderData() as ITransaction[] | [];

	return (
		<div className="relative overflow-x-auto p-6 bg-zinc-800/70 rounded-lg">
			{transactions.length > 0 ? (
				<table className="w-full text-left">
					<thead className="text-xs text-white uppercase border-b border-b-white">
						<tr className="">
							<th scope="col" className="px-6 py-3">
								Type
							</th>
							<th scope="col" className="px-6 py-3">
								Name
							</th>
							<th scope="col" className="px-6 py-3">
								Category
							</th>
							<th scope="col" className="px-6 py-3">
								Date
							</th>
							<th scope="col" className="px-6 py-3">
								Amount
							</th>
						</tr>
					</thead>
					<tbody className="text-sm">
						{transactions.map((transaction) => (
							<tr key={transaction.id} className="border-b border-b-white hover:bg-white/5 last-of-type:border-b-0">
								<TableData styles="flex items-center gap-x-2">
									{transaction.type === "income" ? <ArrowUp size={16} className="text-green-500" /> : <ArrowDown size={16} className="text-red-500" />}
									<span
										className={cn(["px-2 py-1 text-xs font-bold rounded-full", transaction.type === "income" ? "bg-black text-white" : "bg-white text-black"])}
									>
										{transaction.type}
									</span>
								</TableData>
								<TableData>{transaction.name}</TableData>
								<TableData>{transaction.categories ? transaction.categories.name : "-"}</TableData>
								<TableData>{transaction.date}</TableData>
								<TableData styles={"flex items-center gap-x-1" + (transaction.type === "income" ? " text-green-500" : " text-red-500")}>
									<span className="text-nowrap">
										{transaction.type === "income" ? "+$" : "-$"}
										{transaction.amount}
									</span>
								</TableData>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<h3 className="text-center">No transactions found. Try creating one.</h3>
			)}
		</div>
	);
}

function TableData({ children, styles }: { children?: React.ReactNode; styles?: string }) {
	return <td className={cn(["px-6 py-4", styles])}>{children}</td>;
}

export async function transactionsLoader() {
	const transactions = await getTransactions();
	if (!transactions) return [];
	return transactions;
}
