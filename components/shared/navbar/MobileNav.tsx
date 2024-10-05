"use client";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavContent = () => {
	const pathName = usePathname();
	return (
		<section className="h-full flex flex-col gap-6 pt-16">
			{sidebarLinks.map((item) => {
				const isActive =
					(item.route.length > 1 && pathName.includes(item.route)) ||
					item.route === pathName;

				return (
					<SheetClose asChild key={item.route}>
						<Link
							href={item.route}
							className={`${
								isActive
									? "primary-gradient rounded-lg text-light-900"
									: "text-dark300_light900"
							}
                            flex items-center justify-start gap-4 bg-transparent p-4
                            `}
						>
							<Image
								src={item.imgURL}
								width={20}
								height={20}
								alt={item.label}
								className={`${isActive ? "" : "invert"}
  
                                `}
							/>
							<p
								className={`${
									isActive ? "base-bold" : "base-medium"
								}`}
							>
								{item.label}
							</p>
						</Link>
					</SheetClose>
				);
			})}
		</section>
	);
};
const MobileNav = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Image
					src={"/assets/icons/hamburger.svg"}
					width={36}
					height={36}
					alt="Open Navigation"
					className="invert-colors sm:hidden"
				/>
			</SheetTrigger>
			<SheetContent
				side={"left"}
				className="background-light900_dark200 border-none"
			>
				<div>
					<Link href="/" className="flex items-center gap-1">
						<Image
							src="/assets/images/site-logo.svg"
							width={23}
							height={23}
							alt="Dev Overflow Logo"
						/>
						<p className="h2-bold  text-dark100_light900  font-spaceGrotesk">
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
				</div>
				<div>
					<SheetClose asChild>
						<NavContent />
					</SheetClose>
					<SignedOut>
						<div className="flex flex-col gap-3">
							<SheetClose asChild>
								<Link href="/sign-in">
									<Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3">
										<span className="primary-text-gradient">
											Log In
										</span>
									</Button>
								</Link>
							</SheetClose>
							<SheetClose asChild>
								<Link href="/sign-up">
									<Button className="small-medium light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3 text-dark400_light900">
										Sign Up
									</Button>
								</Link>
							</SheetClose>
						</div>
					</SignedOut>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
