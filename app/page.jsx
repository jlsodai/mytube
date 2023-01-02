"use client";

import React, { createContext, useState } from "react";
import SidebarSection from "../sections/SidebarSection";
import TopSection from "../sections/TopSection";
import ContentSection from "../sections/ContentSection";
import DrawerSection from "../sections/DrawerSection";
import HamburgerLogo from "../components/HamburgerLogo";

export const MenuContext = createContext();

const Page = () => {
	const [mobileMenu, setMobileMenu] = useState(false);
	return (
		<MenuContext.Provider value={[mobileMenu, setMobileMenu]}>
			<div className="wrapper">
				<TopSection />
				<div
					className={`grid grid-cols-[auto_1fr] ${
						mobileMenu
							? "xl:grid-cols-[100px_1fr]"
							: "xl:grid-cols-[240px_1fr]"
					} mt-4`}
				>
					<SidebarSection />
					<ContentSection />
				</div>
				<DrawerSection>
					<HamburgerLogo />
				</DrawerSection>
			</div>
		</MenuContext.Provider>
	);
};

export default Page;
