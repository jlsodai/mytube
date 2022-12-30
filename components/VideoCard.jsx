import Image from "next/image";

const VideoCard = () => {
	return (
		<div>
			<img
				src="https://source.unsplash.com/rTZW4f02zY8"
				className="rounded-2xl object-cover h-48 w-full"
			/>
			<div className="flex mt-3">
				<img
					src="https://yt3.ggpht.com/yti/AJo0G0lKS0W4MtyEjHFz-BxmniXDjhsduCoOlnyiZnrySg=s88-c-k-c0x00ffffff-no-rj-mo"
					alt=""
					className="rounded-full h-12 w-12 object-cover"
				/>
				<div className="ml-4">
					<h3 className="font-bold">
						10 ways to use Tailwind CSS and HTML
					</h3>
					<p>Dev Community</p>
					<div className="flex gap-2">
						<span>100K views</span>
						<span>•</span>
						<span>2 weeks ago</span>
					</div>
				</div>
			</div>
		</div>
	);
};
export default VideoCard;
