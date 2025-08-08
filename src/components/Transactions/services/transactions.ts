import { axiosInstance } from "../../../config/axios-config";

export async function getTransactions(): Promise<ITransaction[] | null> {
	try {
		const response = await axiosInstance.get<{ transactions: ITransaction[] }>("/transactions");
		// console.log(response.data.transactions);
		return response.data.transactions;
	} catch (error) {
		return null; // Handle error gracefully, return null or an empty array
		throw new Error("Failed to fetch transactions");
	}
}
