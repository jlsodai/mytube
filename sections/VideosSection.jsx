import VideoCard from "../components/VideoCard";
const VideosSection = () => {
	return (
		<div className="grid min-[515px]:grid-cols-2 min-[890px]:grid-cols-3 min-[1145px]:grid-cols-4 gap-6">
			<VideoCard />
			<VideoCard />
			<VideoCard />
			<VideoCard />
			<VideoCard />
			<VideoCard />
			<VideoCard />
			<VideoCard />
		</div>
	);
};
export default VideosSection;
