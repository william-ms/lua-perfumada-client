import { Outlet } from "react-router-dom";
import Header from "../site/partials/Header.jsx";
import Footer from "../site/partials/Footer.jsx";

export default function Site() {
	return (
		<>
			<Header />

			<section id="content" className="pt-[100px] min-h-[calc(100vh-40px)]">
				<Outlet />
			</section>

			<Footer />
		</>
	);
}
