import React from "react";
import { Link } from "react-router-dom";
const LinkItem = ({ path, text, children }) => {
	return (
		<Link to={path}>
			{children} {text}
		</Link>
	);
};
export default LinkItem;
