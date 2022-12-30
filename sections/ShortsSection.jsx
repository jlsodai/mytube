import React from "react";
import Shorts from "../components/Shorts";
import Icon from "../components/Icon";

const ShortsSection = () => {
	return (
		<>
			<div className="flex items-center">
				<Icon src="/svg/shorts-red.svg" />
				<h3 className="text-2xl">Shorts</h3>
			</div>
			<div className="grid grid-cols-6 gap-6 mt-8">
				<Shorts />
				<Shorts />
				<Shorts />
				<Shorts />
				<Shorts />
				<Shorts />
			</div>
		</>
	);
};

export default ShortsSection;
