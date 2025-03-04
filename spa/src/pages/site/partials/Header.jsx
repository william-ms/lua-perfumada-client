import { useState, useEffect } from "react";
import Container from "../../components/Container";
import HeaderMobile from "./HeaderMobile.jsx";
import HeaderDesktop from "./HeaderDesktop.jsx";

export default function Header() {
	const [isMobile, setIsMobile] = useState(null);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 767px)");

		const handleChange = (event) => setIsMobile(event.matches);
		mediaQuery.addEventListener("change", handleChange);

		setIsMobile(mediaQuery.matches);

		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

	if (isMobile === null) return null;

	return (
		<header className="z-10 fixed w-full h-[100px] bg-primary">
			<Container>{isMobile ? <HeaderMobile /> : <HeaderDesktop />}</Container>
		</header>
	);
}
