import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(classes: string | string[]): string {
	return twMerge(clsx(classes));
}
