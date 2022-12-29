import Image from "next/image";
import React from "react";

const TopSection = () => {
	return (
		<div className="flex justify-between pl-4 pr-8 py-2 items-center">
			<div className="flex items-center">
				<div className="p-3">
					<Image
						src="/svg/hamburger.svg"
						alt=""
						width="24"
						height="24"
					/>
				</div>
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
