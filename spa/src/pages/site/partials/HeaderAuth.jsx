import { useContext, useEffect, useRef, useState } from "react";
import { useApi } from "../../../hooks/useApi";
import AuthContext from "../../../contexts/AuthContext";
import Button from "../../components/Button";
import { IconUser } from "@tabler/icons-react";

export default function HeaderAuth() {
	const api = useApi();

	const { auth } = useContext(AuthContext);
	const [authOpen, setAuthOpen] = useState(false);
	const authDropdown = useRef(null);

	async function logout() {
		try {
			await api.post("/logout");
			window.location.href = "/";
		} catch (error) {
			console.error("Erro ao fazer logout:", error);
		}
	}

	useEffect(() => {
		function handleClickOutside(event) {
			if (authDropdown.current && !authDropdown.current.contains(event.target)) {
				setAuthOpen(false);
			}
		}

		authOpen
			? document.addEventListener("mousedown", handleClickOutside)
			: document.removeEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [authOpen]);

	return (
		<div ref={authDropdown} className="relative group">
			<Button
				btnClass="h-full hover:text-primary hover:bg-secondary"
				onClick={() => setAuthOpen(!authOpen)}
				aria-label="Abrir menu do perfil"
			>
				<IconUser />
			</Button>

			{authOpen && (
				<div
					role="menu"
					className={`${authOpen ? "block" : "hidden"} absolute right-0 w-[300px]`}
				>
					<div className="absolute right-4 top-1 block w-2 h-2 bg-white rotate-45 border-2 border-s-primary border-t-primary border-e-0 border-b-0"></div>

					<ul className="mt-2 py-4 px-2 bg-white border-2 border-primary">
						{auth ? (
							<>
								<Button
									onClick={logout}
									btnStyle="light"
									btnClass="block w-full my-1 py-2 bg-white"
									aria-label="Sair da conta"
								>
									Sair
								</Button>
							</>
						) : (
							<>
								<Button
									tag="a"
									href="/login"
									btnStyle="light"
									btnClass="block w-full my-1 py-2 bg-white"
									aria-label="Acessar minha conta"
								>
									Acessar minha conta
								</Button>

								<Button
									tag="a"
									href="/signup"
									btnStyle="light"
									btnClass="block w-full my-1 py-2 bg-white"
									aria-label="Cadastrar nova conta"
								>
									Cadastrar
								</Button>
							</>
						)}
					</ul>
				</div>
			)}
		</div>
	);
}
