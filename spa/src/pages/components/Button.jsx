import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Button({
	children,
	type = "button",
	color = "primary",
	btnStyle = "solid",
	btnClass = "",
	tag = null,
	href = "",
	onClick = null,
}) {
	const defaultClass =
		"flex items-center justify-center gap-x-1 px-2 py-1 rounded-md border-2 cursor-pointer";

	const classes = {
		solid: {
			primary:
				"bg-primary border-primary text-secondary hover:bg-secondary hover:text-primary",
		},
		light: {
			primary:
				"bg-secondary border-primary text-primary hover:bg-primary hover:text-secondary",
		},
	};

	if (tag == "a") {
		return (
			<Link
				to={href}
				className={defaultClass + " " + classes[btnStyle][color] + " " + btnClass}
				onClick={onClick}
			>
				{children}
			</Link>
		);
	} else {
		return (
			<button
				type={type}
				className={defaultClass + " " + classes[btnStyle][color] + " " + btnClass}
				onClick={onClick}
			>
				{children}
			</button>
		);
	}
}

Button.propTypes = {
	children: PropTypes.node,
	type: PropTypes.string,
	color: PropTypes.string,
	btnClass: PropTypes.string,
	btnStyle: PropTypes.string,
	tag: PropTypes.string,
	href: PropTypes.string,
	onClick: PropTypes.func,
};
