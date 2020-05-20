import React from "react";

import "./TREdgeArrow.scss";

const TREdgeArrow = ({ ...props }) => {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 28 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z"
				fill="#B4B4B4"
			/>
		</svg>
	);
};

export default TREdgeArrow;
