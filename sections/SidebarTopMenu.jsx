import IconLink from "../components/IconLink";
const SidebarTopMenu = () => {
	return (
		<>
			<IconLink
				className="bg-slate-100"
				src="/svg/home.svg"
				title="Home"
				active="true"
			/>
			<IconLink src="/svg/shorts.svg" title="Shorts" />
			<IconLink src="/svg/subscriptions.svg" title="Subscriptions" />
		</>
	);
};
export default SidebarTopMenu;
