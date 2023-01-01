import Image from "next/image";
const Icon = ({ src, onClick }) => {
	return (
		<div
			className="p-3 hover:bg-slate-200 hover:rounded-full cursor-pointer"
			onClick={onClick}
		>
			<Image src={src} alt="" width="24" height="24" />
		</div>
	);
};
export default Icon;
