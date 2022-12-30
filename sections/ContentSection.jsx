import FilterSection from "./FilterSection";
import VideosSection from "./VideosSection";
import ShortsSection from "./ShortsSection";

const ContentSection = () => {
	return (
		<div className="px-8 w-full">
			<FilterSection />
			<div className="videosSection overflow-y-auto mb-8">
				<VideosSection />
				<hr className="mt-12 mb-8" />
				<ShortsSection />
				<hr className="my-12" />
				<VideosSection />
			</div>
		</div>
	);
};
export default ContentSection;
