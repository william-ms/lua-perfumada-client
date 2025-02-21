import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Site from "./pages/layouts/Site";
import HomeIndex from "./pages/site/Home";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				{/* SITE */}
				<Route element={<Site />}>
					<Route path="/" element={<HomeIndex />} />
				</Route>

				{/* NOT FOUND */}
				<Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
