import { useState, useEffect, useMemo } from "react";
import AuthContext from "../contexts/AuthContext";
import { useApi } from "../hooks/useApi";
import PropTypes from "prop-types";

const AuthProvider = ({ children }) => {
	const api = useApi();
	const [auth, setAuth] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const response = await api.get("/auth");
				setAuth(response.data.auth || null);
			} catch {
				setAuth(null);
			} finally {
				setLoading(false);
			}
		};

		checkAuth();
	}, [api]);

	const authValue = useMemo(() => ({ auth, setAuth }), [auth]);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AuthProvider;
