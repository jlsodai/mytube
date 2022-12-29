import FooterSection from "./FooterSection";
import Icon from "../components/Icon";
import IconLink from "../components/IconLink";
const SidebarSection = () => {
	return (
		<div>
			<div className="pl-4 pr-8">
				<IconLink src="/svg/home.svg" title="Home" />
				<IconLink src="/svg/shorts.svg" title="Shorts" />
				<IconLink src="/svg/subscriptions.svg" title="Subscriptions" />
			</div>
			<hr className="my-4" />
			<div className="pl-4 pr-8">
				<div>Home</div>
				<div>Shorts</div>
				<div>Subscriptions</div>
			</div>
			<hr className="my-4" />
			<div className="pl-4 pr-8">
				<div>Home</div>
				<div>Shorts</div>
				<div>Subscriptions</div>
			</div>
			<hr className="my-4" />
			<FooterSection />
		</div>
	);
};

export default SidebarSection;
