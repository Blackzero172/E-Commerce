import React from "react";

const CustomButton = ({ text, children, onClick, id, value, classes }) => {
	return (
		<button type="button" onClick={onClick} id={id} value={value} className={classes}>
			{children} {text}
		</button>
	);
};
export default CustomButton;
