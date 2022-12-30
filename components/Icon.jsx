import Image from "next/image";
const Icon = ({ src }) => {
	return (
		<div className="p-3 hover:bg-slate-200 hover:rounded-full cursor-pointer">
			<Image src={src} alt="" width="24" height="24" />
		</div>
	);
};
export default Icon;
