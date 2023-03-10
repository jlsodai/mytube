import FilterBtn from "../components/FilterBtn";
import { useContext } from "react";
import { MenuContext } from "../app/page";
const FilterSection = () => {
	const [mobileMenu] = useContext(MenuContext);
	return (
		<div
			className={`flex gap-4 flex-nowrap overflow-x-auto mb-8 max-w-[calc(100dvw-50px)] min-[790px]:max-w-[calc(100dvw-120px)] ${
				mobileMenu
					? "xl:max-w-[calc(100dvw-140px)]"
					: "xl:max-w-[calc(100dvw-295px)]"
			} `}
		>
			<FilterBtn title="All" active />
			<FilterBtn title="Computer programming" />
			<FilterBtn title="Music" />
			<FilterBtn title="Mixes" />
			<FilterBtn title="Live" />
			<FilterBtn title="Nollywood" />
			<FilterBtn title="Premier League" />
			<FilterBtn title="Dramedy" />
			<FilterBtn title="Podcasts" />
			<FilterBtn title="Comedy" />
			<FilterBtn title="Russian Armed Forces" />
			<FilterBtn title="Contemporary Worship Music" />
			<FilterBtn title="Children's Music" />
			<FilterBtn title="Stages" />
			<FilterBtn title="Pop Music" />
			<FilterBtn title="Recently Uploaded" />
			<FilterBtn title="Watched" />
			<FilterBtn title="New to you" />
		</div>
	);
};
export default FilterSection;
