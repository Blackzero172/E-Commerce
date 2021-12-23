import React from "react";

const CustomButton = ({ text, children, onClick, counterkey, style }) => {
	return (
		<button type="button" onClick={onClick} counterkey={counterkey} style={style}>
			{children}
			{text}
		</button>
	);
};
export default CustomButton;
