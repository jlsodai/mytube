import React from "react";
import SidebarSection from "../sections/SidebarSection";
import TopSection from "../sections/TopSection";
import ContentSection from "../sections/ContentSection";

const Page = () => {
	return (
		<div className="wrapper">
			<TopSection />
			<div className="grid grid-cols-[240px_1fr]">
				<SidebarSection />
				<ContentSection />
			</div>
		</div>
	);
};

export default Page;
