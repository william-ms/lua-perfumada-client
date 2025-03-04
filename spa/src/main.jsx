import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import CsrfTokenProvider from "./providers/CsrfTokenProvider";
import AuthProvider from "./providers/AuthProvider";
import App from "./App";

createRoot(document.getElementById("root")).render(
	// <StrictMode>
	<CsrfTokenProvider>
		<AuthProvider>
			<App />
		</AuthProvider>
	</CsrfTokenProvider>,
	// </StrictMode>,
);
