import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import Theme from "./Theme";
import MobileNav from "./MobileNav";
import GlobalSearch from "../search/GlobalSearch";

const Navbar = () => {
	return (
		<nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
			<Link href="/" className="flex items-center gap-1">
				<Image
					src="/assets/images/site-logo.svg"
					width={23}
					height={23}
					alt="Dev Overflow Logo"
				/>
				<p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
					<span>Dev </span>
					<span
						className="
                    text-primary-500
                "
					>
						Overflow
					</span>
				</p>
			</Link>
			<GlobalSearch />
			<div className="flex-between gap-5">
				<Theme />
				<SignedIn>
					<UserButton
						appearance={{
							elements: {
								avatarBox: "h-10 w-10", // correct syntax for avatar customization
							},
							variables: {
								colorPrimary: "#FF7000", // correct syntax for primary color customization
							},
						}}
					/>
				</SignedIn>
				<MobileNav />
			</div>
		</nav>
	);
};

export default Navbar;
