import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import Container from "../components/Container";
import Button from "../components/Button";
import Alert from "../components/Alert";
import logoDark from "../../assets/images/logo-dark.png";
import { IconLogin2 } from "@tabler/icons-react";

export default function Login() {
	const api = useApi();
	const email = useRef();
	const password = useRef();
	const rememberMe = useRef();
	const [errorMessage, setErrorMessage] = useState("");

	async function submit(e) {
		e.preventDefault();

		try {
			await api.post("/login", {
				email: email.current.value,
				password: password.current.value,
			});

			window.location.href = "/";
		} catch (error) {
			console.error("Erro na requisição:", error);

			error.response && error.response.data && error.response.data.message
				? setErrorMessage(error.response.data.message)
				: setErrorMessage("Ocorreu um erro inesperado. Tente novamente.");
		}
	}

	return (
		<>
			<Container>
				<div className="flex justify-center items-center h-screen">
					<div className="max-w-[500px] w-full rounded-md p-6">
						<div className="h-full w-[320px] m-auto">
							<Link to="/" className="text-lg text-white font-bold text-nowrap">
								<img src={logoDark} className="w-full h-full"></img>
							</Link>
						</div>

						<h2 className="py-4 text-center text-2xl text-gray-600 font-semibold">
							Faça login com seu e-mail
						</h2>

						{errorMessage && <Alert>{errorMessage}</Alert>}

						<form onSubmit={submit}>
							<div className="my-3">
								<label className="text-gray-500">E-mail</label>
								<input
									ref={email}
									type="email"
									className="block w-full px-3 py-2 rounded border border-gray-300"
									required
								/>
							</div>

							<div className="my-3">
								<label className="text-gray-500">Senha</label>
								<input
									ref={password}
									type="password"
									className="block w-full px-3 py-2 rounded border border-gray-300"
									required
								/>
							</div>

							<div className="mt-6 mb-1">
								<input ref={rememberMe} type="checkbox" />
								<label className="pl-1 text-gray-500">Lembrar de mim</label>
							</div>

							<Button type="submit" btnClass="w-full">
								<IconLogin2 className="relative top-[1px]" size={18} />
								Entrar
							</Button>
						</form>
					</div>
				</div>
			</Container>
		</>
	);
}
