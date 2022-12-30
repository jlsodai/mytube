import FilterBtn from "../components/FilterBtn";
const FilterSection = () => {
	return (
		<div className="flex gap-4 mb-8 flex-nowrap overflow-x-auto filterSection">
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
