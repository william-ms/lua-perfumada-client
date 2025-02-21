import { useEffect, useState } from "react";

import api from "../../services/api";

export default function HomeIndex() {
	const [users, setUsers] = useState([]);

	async function getUsers() {
		const response = await api.get("/user");
		setUsers(response.data.data);
	}

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<>
			<ul>
				{users.map((user, key) => {
					return <li key={key}>{user.name}</li>;
				})}
			</ul>
		</>
	);
}
