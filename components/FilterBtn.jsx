const FilterBtn = ({ title, active }) => {
	return (
		<button
			className={`${
				active ? "bg-gray-900 text-white" : "bg-gray-200"
			} px-4 py-[5px] rounded-lg whitespace-nowrap`}
		>
			{title}
		</button>
	);
};
export default FilterBtn;
