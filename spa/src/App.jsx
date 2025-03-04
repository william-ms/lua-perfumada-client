import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/index.css";
import Auth from "./pages/layouts/Auth";
import Site from "./pages/layouts/Site";
import HomeIndex from "./pages/site/Home";
import Login from "./pages/auth/Login";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* AUTH */}
				<Route element={<Auth />}>
					<Route path="/login" element={<Login />} />
				</Route>

				{/* SITE */}
				<Route element={<Site />}>
					<Route path="/" element={<HomeIndex />} />
				</Route>

				{/* NOT FOUND */}
				<Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
			</Routes>
		</BrowserRouter>
	);
}
