import Image from "next/image";
import Link from "next/link";
const IconLink = ({ src, href, title, active }) => {
	return (
		<Link
			className={`${
				active ? "bg-slate-100" : ""
			} px-3 py-2 flex items-center hover:bg-slate-100  rounded-md`}
			href={href ?? "#"}
		>
			<Image src={src} alt="" width="24" height="24" />
			<div className="ml-7">{title}</div>
		</Link>
	);
};
export default IconLink;
