import FilterBtn from "../components/FilterBtn";
const ContentSection = () => {
	return (
		<div className="px-8 w-full">
			<div className="flex gap-4 flex-nowrap overflow-x-auto filterSection">
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
			<div className="grid grid-cols-4">
				<div>Video Card</div>
				<div>Video Card</div>
				<div>Video Card</div>
				<div>Video Card</div>
				<div>Video Card</div>
				<div>Video Card</div>
				<div>Video Card</div>
				<div>Video Card</div>
			</div>
			<hr className="my-5" />
			<div className="grid grid-cols-6">
				<div>Short</div>
				<div>Short</div>
				<div>Short</div>
				<div>Short</div>
				<div>Short</div>
				<div>Short</div>
			</div>
		</div>
	);
};
export default ContentSection;
