import Image from "next/image";
import React from "react";
import Icon from "../components/Icon";

const TopSection = () => {
	return (
		<div className="flex justify-between pl-4 pr-8 py-2 items-center xl:gap-32">
			<div className="flex items-center">
				<Icon src="/svg/hamburger.svg" />
				<div className="px-4">
					<Image src="/svg/logo.svg" alt="" width="95" height="24" />
				</div>
			</div>
			<div className="flex items-center gap-4 grow sm:mx-24 max-sm:hidden">
				<div className="relative w-full">
					<input
						type="search"
						id="search-dropdown"
						className="block focus:ring-offset-0 focus:border-transparent focus:outline-none focus:border-gray-300 focus:ring-gray-300 focus:ring-1 py-2 px-6 text-xl w-full rounded-[20px] border border-gray-300 overflow-hidden"
						placeholder="Search"
					/>
					<button className="absolute top-0 right-0 bg-gray-100 py-2 px-6 border-r-lg rounded-r-[20px] border border-gray-300">
						<Image
							src="/svg/search.svg"
							width="23"
							height="23"
							alt=""
						/>
					</button>
				</div>
				<Icon src="/svg/voice-search.svg" />
			</div>
			<div className="flex items-center gap-2">
				<div className="sm:hidden">
					<Icon src="/svg/search.svg" />
				</div>
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
