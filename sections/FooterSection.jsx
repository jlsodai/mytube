import Link from "next/link";

const FooterSection = () => {
	return (
		<div className="px-8">
			<div className="flex gap-2 flex-wrap">
				<Link href="#">About</Link>
				<Link href="#">Press</Link>
				<Link href="#">Copyright</Link>
				<Link href="#">Contact us</Link>
				<Link href="#">Creators</Link>
				<Link href="#">Advertise</Link>
				<Link href="#">Developers</Link>
				<Link href="#">Terms</Link>
				<Link href="#">Privacy</Link>
				<Link href="#">Policy & Safety</Link>
				<Link href="#">How YouTube works</Link>
				<Link href="#">Test new features</Link>
			</div>
			<div className="mt-4">© 2022 Google LLC</div>
		</div>
	);
};
export default FooterSection;
