import Image from "next/image";
import Link from "next/link";
const IconLink = ({ src, href, title, active }) => {
	return (
		<Link
			className={`${
				active ? "bg-gray-100 rounded-md" : ""
			} px-3 py-2 flex items-center`}
			href={href ?? "#"}
		>
			<Image src={src} alt="" width="24" height="24" />
			<div className="ml-7">{title}</div>
		</Link>
	);
};
export default IconLink;
