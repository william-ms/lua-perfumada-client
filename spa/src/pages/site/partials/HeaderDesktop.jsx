import { useState } from "react";
import { Link } from "react-router-dom";
import logoLight from "../../../assets/images/logo-light.png";
import Button from "../../components/Button";
import HeaderAuth from "./HeaderAuth";
import { IconSearch, IconShoppingBag } from "@tabler/icons-react";

export default function HeaderDesktop() {
	const [activeCategorie, setActiveCategorie] = useState("");

	return (
		<>
			{/* TOP HEADER */}
			<div className="flex justify-between items-center h-[60px] p-2">
				{/* LOGO */}
				<div className="h-full w-[190px]">
					<Link to="/" className="text-lg text-white font-bold text-nowrap">
						<img src={logoLight} className="w-full h-full"></img>
					</Link>
				</div>

				{/* SEARCH */}
				<form className="flex items-center w-6/12 h-[40px] rounded-md border-2 border-primary bg-secondary">
					<button className="cursor-pointer px-3">
						<IconSearch />
					</button>

					<input
						type="text"
						placeholder="Pesquisar..."
						className="w-full outline-0"
					/>
				</form>

				{/* AUTH && CART */}
				<div className="flex h-full">
					<HeaderAuth />

					<Button btnClass="hover:text-primary hover:bg-secondary">
						<IconShoppingBag />
					</Button>
				</div>
			</div>

			{/* BOTTOM HEADER */}
			<nav className={`bg-primary`}>
				<ul className="flex">
					<li>
						<Link
							to="/"
							className={`block py-2 px-3 uppercase hover:text-primary hover:bg-secondary cursor-pointer ${
								activeCategorie === "home"
									? "bg-secondary text-primary"
									: "bg-primary text-secondary"
							}`}
							onClick={() => setActiveCategorie("home")}
						>
							Início
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
