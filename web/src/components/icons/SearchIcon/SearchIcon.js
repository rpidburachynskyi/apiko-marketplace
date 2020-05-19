import React from "react";

const SearchIcon = ({ color = "#5C5C5C" }) => {
	return (
		<svg
			width="17"
			height="18"
			viewBox="0 0 17 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M7.23782 13.1718C10.4389 13.1718 12.9756 10.5265 12.9756 7.33592C12.9756 4.14538 10.4389 1.5 7.23782 1.5C4.03674 1.5 1.5 4.14538 1.5 7.33592C1.5 10.5265 4.03674 13.1718 7.23782 13.1718Z"
				fill="white"
				fillOpacity="0.01"
				stroke={color}
				strokeWidth="3"
			/>
			<path
				d="M10.7646 11.6667L14.7577 15.7522"
				stroke={color}
				strokeWidth="3"
				strokeLinecap="round"
			/>
		</svg>
	);
};

export default SearchIcon;
