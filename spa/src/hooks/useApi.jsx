import { useEffect, useContext } from "react";
import axios from "axios";
import CsrfTokenContext from "../contexts/CsrfTokenContext";

const api = axios.create({
	baseURL: import.meta.env.VITE_API_BASEURL,
	withCredentials: true,
});

export function useApi() {
	const { csrfToken } = useContext(CsrfTokenContext);

	useEffect(() => {
		api.interceptors.request.use((config) => {
			if (config.method !== "get" && csrfToken) {
				config.headers["X-CSRF-Token"] = csrfToken;
			}
			return config;
		});

		api.interceptors.response.use(
			(response) => response,
			async (error) => {
				if (error.response?.status === 401) {
					try {
						await api.post("/refresh");
						return api(error.config);
					} catch (refreshError) {
						window.location.href = "/login";
						return Promise.reject(refreshError);
					}
				}
				return Promise.reject(error);
			},
		);
	}, [csrfToken]);

	return api;
}
