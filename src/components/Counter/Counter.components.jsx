import React from "react";

const Counter = ({ text, children, style }) => {
	return (
		<p style={style}>
			{children} {text}
		</p>
	);
};
export default Counter;
