import React from "react";
import { Link } from "react-router-dom";
import "./Header.styles.css";
const Header = ({ cartAmount }) => {
	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/products">Products</Link>
			<Link to="/cart">
				<i className="fas fa-shopping-cart"></i> ({cartAmount})
			</Link>
		</nav>
	);
};
export default Header;
