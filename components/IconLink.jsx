import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { MenuContext } from "../app/page";
const IconLink = ({ src, href, title, active }) => {
	const [mobileMenu] = useContext(MenuContext);

	return (
		<Link
			className={`${active ? "bg-slate-100" : ""} xl:px-3 py-2 flex ${
				mobileMenu && "flex-col"
			} max-xl:flex-col items-center hover:bg-slate-100  rounded-md`}
			href={href ?? "#"}
		>
			<Image src={src} alt="" width="24" height="24" />
			<div className={`${!mobileMenu && "xl:ml-7"}`}>{title}</div>
		</Link>
	);
};
export default IconLink;
