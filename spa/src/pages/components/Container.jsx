import PropTypes from "prop-types";

export default function Container({ children }) {
	return <div className="lg:w-5xl xl:w-7xl m-auto relative">{children}</div>;
}

Container.propTypes = {
	children: PropTypes.node,
};
