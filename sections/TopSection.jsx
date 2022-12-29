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
			<div className="flex items-center gap-2">
				<Icon src="/svg/create.svg" />
				<Icon src="/svg/notifications.svg" />
				<div className="bg-gray-300 w-[32px] h-[32px] rounded-full overflow-hidden ml-4">
					<Image
						src="https://yt3.ggpht.com/yti/AJo0G0lKS0W4MtyEjHFz-BxmniXDjhsduCoOlnyiZnrySg=s88-c-k-c0x00ffffff-no-rj-mo"
						alt=""
						height="32"
						width="32"
					/>
				</div>
			</div>
		</div>
	);
};

export default TopSection;
