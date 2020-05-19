import React, { useEffect, useState } from "react";

import "./Tabs.scss";
import Tab from "./Tab/Tab";

const Tabs = ({ data, loading, tabIndex, setTabIndex }) => {
	const [productsCount, setProductsCount] = useState(0);
	const [salesCount] = useState(0); 

	useEffect(() => {
		if (!data) return;
		setProductsCount(data.user.productsCount);
	}, [data]);

	const feedbacksMain =
		data?.user?.feedbacksCount > 0
			? Math.floor(
				(data?.user?.positiveFeedbacksCount /
					data?.user?.feedbacksCount) *
				100
			) + "%"
			: "0/0";

	const tabsInfo = [
		{ main: feedbacksMain, minor: "Positive feedbacks", loading },
		{ main: salesCount, minor: "sales", loading },
		{ main: productsCount, minor: "Active listings", loading },
	];

	return (
		<div className="profile-tabs">
			{tabsInfo.map(({ main, minor, loading }, index) => (
				<Tab
					key={index}
					main={main}
					minor={minor}
					loading={loading}
					active={tabIndex === index}
					activated={() => setTabIndex(index)}
				/>
			))}
		</div>
	);
};

export default Tabs;