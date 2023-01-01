import React, { useContext } from "react";
import Icon from "../components/Icon";
import Image from "next/image";
import { MenuContext } from "../app/page";
const HamburgerLogo = () => {
	const [, setMobileMenu] = useContext(MenuContext);

	function toggleMobileMenu() {
		setMobileMenu((prev) => !prev);
	}
	return (
		<>
			<div className="flex items-center">
				<Icon src="/svg/hamburger.svg" onClick={toggleMobileMenu} />
				<div className="px-4">
					<Image src="/svg/logo.svg" alt="" width="95" height="24" />
				</div>
			</div>
		</>
	);
};

export default HamburgerLogo;
