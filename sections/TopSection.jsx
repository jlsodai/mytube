import Image from "next/image";
import React from "react";
import Icon from "../components/Icon";

const TopSection = () => {
	return (
		<div className="flex justify-between pl-4 pr-8 py-2 items-center">
			<div className="flex items-center">
				<Icon src="/svg/hamburger.svg" />
				<div className="px-4">
					<Image src="/svg/logo.svg" alt="" width="95" height="24" />
				</div>
			</div>
			<div className="">Search Area</div>
			<div className="">Profile Icons section</div>
		</div>
	);
};

export default TopSection;
