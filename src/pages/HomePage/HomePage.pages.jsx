import React from "react";
import LinkItem from "../../components/LinkItem/LinkItem.components";
import "./HomePage.styles.css";
const HomePage = () => {
	return (
		<div className="flex-container">
			<div className="home-page">
				<LinkItem path="/products"></LinkItem>
				<LinkItem path="/products"></LinkItem>
				<LinkItem path="/products"></LinkItem>
				<LinkItem path="/products"></LinkItem>
			</div>
		</div>
	);
};
export default HomePage;
