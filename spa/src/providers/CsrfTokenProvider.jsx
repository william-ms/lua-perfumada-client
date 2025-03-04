import { useState, useEffect, useMemo } from "react";
import CsrfTokenContext from "../contexts/CsrfTokenContext";
import { useApi } from "../hooks/useApi";
import PropTypes from "prop-types";

const CsrfTokenProvider = ({ children }) => {
	const api = useApi();
	const [csrfToken, setCsrfToken] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchCsrfToken = async () => {
			try {
				const response = await api.get("/csrf-token");
				setCsrfToken(response.data.csrfToken);
			} catch (error) {
				console.error("Erro ao buscar CSRF Token", error);
			} finally {
				setLoading(false);
			}
		};

		fetchCsrfToken();
	}, [api]);

	const csrfTokenValue = useMemo(() => ({ csrfToken }), [csrfToken]);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<CsrfTokenContext.Provider value={csrfTokenValue}>
			{children}
		</CsrfTokenContext.Provider>
	);
};

CsrfTokenProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default CsrfTokenProvider;
