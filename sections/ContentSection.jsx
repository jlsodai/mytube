import FilterSection from "./FilterSection";
import VideosSection from "./VideosSection";
const ContentSection = () => {
	return (
		<div className="px-8 w-full">
			<FilterSection />
			<VideosSection />
			<hr className="my-16" />
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
