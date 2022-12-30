import FilterBtn from "../components/FilterBtn";
import VideoCard from "../components/VideoCard";
import FilterSection from "./FilterSection";
const ContentSection = () => {
	return (
		<div className="px-8 w-full">
			<FilterSection />
			<div className="grid grid-cols-4 mt-8 gap-8">
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
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
