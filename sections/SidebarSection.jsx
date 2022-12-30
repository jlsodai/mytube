import FooterSection from "./FooterSection";
import Icon from "../components/Icon";
import IconLink from "../components/IconLink";
const SidebarSection = () => {
	return (
		<div className="sidebarSection overflow-y-auto">
			<div className="pl-4 pr-8">
				<IconLink
					className="bg-slate-100"
					src="/svg/home.svg"
					title="Home"
					active="true"
				/>
				<IconLink src="/svg/shorts.svg" title="Shorts" />
				<IconLink src="/svg/subscriptions.svg" title="Subscriptions" />
			</div>
			<div className="hidden xl:block">
				<hr className="my-4" />
				<div className="pl-4 pr-8">
					<IconLink src="/svg/library.svg" title="Library" />
					<IconLink src="/svg/history.svg" title="History" />
					<IconLink src="/svg/your-videos.svg" title="Your Videos" />
					<IconLink src="/svg/watch-later.svg" title="Watch Later" />
					<IconLink src="/svg/liked.svg" title="liked Videos" />
				</div>
				<hr className="my-4" />
				<div className="pl-4 pr-8">
					<p className="pl-4 text-xl mb-2">Explore</p>
					<IconLink src="/svg/trending.svg" title="Trending" />
					<IconLink src="/svg/music.svg" title="Music" />
					<IconLink src="/svg/gaming.svg" title="Gaming" />
					<IconLink src="/svg/sports.svg" title="Sports" />
				</div>
				<hr className="my-4" />
				<div className="pl-4 pr-8">
					<p className="pl-4 text-xl mb-2">More from YouTube</p>
					<IconLink
						src="/svg/creator-studio.svg"
						title="Creator Studio"
					/>
					<IconLink
						src="/svg/youtube-music.svg"
						title="Youtube Music"
					/>
					<IconLink
						src="/svg/youtube-kids.svg"
						title="Youtube Kids"
					/>
					<IconLink src="/svg/youtube-tv.svg" title="Youtube Tv" />
				</div>
				<hr className="my-4" />
				<div className="pl-4 pr-8">
					<IconLink src="/svg/settings.svg" title="Settings" />
					<IconLink
						src="/svg/report-history.svg"
						title="Report History"
					/>
					<IconLink src="/svg/help.svg" title="Help" />
					<IconLink
						src="/svg/send-feedback.svg"
						title="Send Feedback"
					/>
				</div>
				<hr className="my-4" />
				<FooterSection />
			</div>
		</div>
	);
};

export default SidebarSection;
