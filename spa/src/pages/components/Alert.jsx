import PropTypes from "prop-types";
import {
	IconAlertOctagon,
	IconAlertTriangle,
	IconChecks,
	IconExclamationCircle,
} from "@tabler/icons-react";

const renderSwitch = (param) => {
	switch (param) {
		case "danger":
			return <IconAlertOctagon />;
		case "warning":
			return <IconAlertTriangle />;
		case "success":
			return <IconChecks />;
		case "secondary":
			return <IconExclamationCircle />;
		default:
			return <IconExclamationCircle />;
	}
};

export default function Alert({ children, type = "secondary", title = "" }) {
	const types = {
		danger: {
			color: "bg-red-100 border-red-500 text-red-700",
			title: "Ops! Algo deu errado",
		},
		warning: {
			color: "bg-orange-100 border-orange-500 text-orange-700",
			title: "Atenção",
		},
		success: {
			color: "bg-teal-100 border-teal-500 text-teal-900",
			title: "Sucesso",
		},
		secondary: {
			color: "bg-blue-100 border-blue-500 text-blue-700",
		},
	};

	return (
		<div
			className={`border-t-4 px-4 py-3 shadow-md ${
				type ? types[type]["color"] : types[type]["secondary"]
			}`}
			role="alert"
		>
			<div className="flex items-center gap-1">
				{renderSwitch(type)}
				<p className="text-lg font-bold">{title || types[type]["title"]}</p>
			</div>

			<ul className="list-disc list-inside ps-1">
				<li>{children}</li>
			</ul>
		</div>
	);
}

Alert.propTypes = {
	children: PropTypes.node,
	type: PropTypes.string,
	title: PropTypes.string,
};
