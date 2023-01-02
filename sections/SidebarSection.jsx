import FooterSection from "./FooterSection";
import Icon from "../components/Icon";
import IconLink from "../components/IconLink";
import { useContext } from "react";
import { MenuContext } from "../app/page";
import SidebarTopMenu from "./SidebarTopMenu";
import SidebarBottomSection from "./SidebarBottomSection";

const SidebarSection = () => {
	const [mobileMenu] = useContext(MenuContext);
	return (
		<div className="sidebarSection overflow-y-auto max-[790px]:hidden">
			<div
				className={`pl-2 xl:pl-4 xl:pr-8 ${
					mobileMenu && "text-xs"
				} max-xl:text-xs`}
			>
				<SidebarTopMenu />
			</div>
			<div className={`hidden ${!mobileMenu && "xl:block"}`}>
				<SidebarBottomSection />
			</div>
		</div>
	);
};

export default SidebarSection;
