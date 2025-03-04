import { useState } from "react";
import { Link } from "react-router-dom";
import HeaderAuth from "./HeaderAuth";
import Button from "../../components/Button";
import logoLight from "../../../assets/images/logo-light.png";
import logoDark from "../../../assets/images/logo-dark.png";
import {
	IconArrowLeft,
	IconMenu2,
	IconSearch,
	IconShoppingBag,
} from "@tabler/icons-react";

export default function HeaderMobile() {
	const [navOpen, setNavOpen] = useState(false);
	const [activeCategorie, setActiveCategorie] = useState("");

	return (
		<>
			{/* HEADER */}
			<div className="flex justify-between items-center h-[60px] p-2 bg-primary">
				<Button
					color="primary"
					btnClass="h-full"
					onClick={() => setNavOpen(!navOpen)}
					aria-label="Abrir menu de navegação"
				>
					<IconMenu2 />
				</Button>

				<div className="h-full w-[190px]">
					<Link to="/" className="font-bold text-lg text-white text-nowrap">
						<img src={logoLight} className="w-full h-full"></img>
					</Link>
				</div>

				{/* AUTH && CART */}
				<div className="flex h-full">
					<HeaderAuth />

					<Button btnClass="hover:text-primary hover:bg-secondary">
						<IconShoppingBag />
					</Button>
				</div>
			</div>

			{/* NAV */}
			<nav
				className={`absolute w-full h-screen top-0 duration-500 bg-white ${
					navOpen ? "left-0" : "left-[-100%]"
				}`}
			>
				<div className="flex justify-between items-center h-[60px] p-2">
					<div></div>

					<div className="h-full w-[190px]">
						<Link to="/" className="text-lg text-white font-bold text-nowrap">
							<img src={logoDark} className="w-full h-full"></img>
						</Link>
					</div>

					<Button
						color="primary"
						btnStyle="light"
						btnClass="border-white bg-white h-full"
						onClick={() => setNavOpen(!navOpen)}
						aria-label="Fechar menu de navegação"
					>
						<IconArrowLeft />
					</Button>
				</div>

				<ul className="flex flex-col">
					<li>
						<Link
							to="/"
							className={`block py-2 px-3 uppercase hover:text-primary hover:bg-secondary cursor-pointer ${
								activeCategorie === "home"
									? "text-secondary bg-primary"
									: "text-primary bg-white"
							}`}
							onClick={() => {
								setActiveCategorie("home");
								setNavOpen(!navOpen);
							}}
						>
							Início
						</Link>
					</li>
				</ul>
			</nav>

			{/* SEARCH */}
			<div className="block h-[40px] px-2 pb-1 bg-primary">
				<form className="flex items-center h-full bg-secondary rounded-md border-2 border-primary">
					<button className="px-3">
						<IconSearch />
					</button>

					<input
						type="text"
						placeholder="Pesquisar..."
						className="w-full outline-0"
					/>
				</form>
			</div>
		</>
	);
}
