import { useEffect, useState } from "react";

export function useIsMobile(breakpoint = 890) {
	const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < breakpoint);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < breakpoint);
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [breakpoint]);

	return isMobile;
}
