import Link from "next/link";

const FooterSection = () => {
	return (
		<div className="px-8">
			<div className="flex gap-x-2 flex-wrap font-semibold">
				<Link href="#">About</Link>
				<Link href="#">Press</Link>
				<Link href="#">Copyright</Link>
				<Link href="#">Contact us</Link>
				<Link href="#">Creators</Link>
				<Link href="#">Advertise</Link>
				<Link href="#">Developers</Link>
			</div>
			<div className="flex gap-x-2 mt-4 flex-wrap font-semibold">
				<Link href="#">Terms</Link>
				<Link href="#">Privacy</Link>
				<Link href="#">Policy & Safety</Link>
				<Link href="#">How YouTube works</Link>
				<Link href="#">Test new features</Link>
			</div>
			<div className="my-4">© 2022 Google LLC</div>
		</div>
	);
};
export default FooterSection;
