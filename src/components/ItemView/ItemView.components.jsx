import React from "react";
import "./ItemView.styles.css";
const ItemView = ({ item, children }) => {
	return (
		<div key={item.id} className="item-view">
			<p>{item.name}</p>

			<img src={item.imageURL} alt="Clothes" />
			<p>{item.price}$</p>
			{children}
		</div>
	);
};
export default ItemView;
