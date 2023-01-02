import { useContext } from "react";
import { MenuContext } from "../app/page";

const DrawerSection = ({ children }) => {
	const [mobileMenu, setMobileMenu] = useContext(MenuContext);
	return (
		<div
			className={`fixed drawer xl:hidden overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ${
				mobileMenu
					? "transition-opacity opacity-100 duration-500 translate-x-0"
					: "transition-all delay-500 opacity-0 -translate-x-full"
			}`}
		>
			<div
				className={`w-screen max-w-[240px] left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform pl-4 pr-8 py-2 ${
					mobileMenu ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				{children}
			</div>
			<div
				className="w-screen h-full cursor-pointer"
				onClick={() => {
					setMobileMenu(false);
				}}
			></div>
		</div>
	);
};

export default DrawerSection;
