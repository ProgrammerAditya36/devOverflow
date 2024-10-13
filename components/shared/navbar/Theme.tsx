"use client";
import { useTheme } from "@/context/ThemeProvider";
import {
	Menubar,
	MenubarContent,
	MenubarMenu,
	MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { themes } from "@/constants";
import { MenubarItem } from "@radix-ui/react-menubar";

const Theme = () => {
	const { mode, setMode } = useTheme();
	const [isMounted, setIsMounted] = useState(false);

	// Ensure component only renders on the client
	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<Menubar className="relative border-none bg-transparent shadow-none">
			<MenubarMenu>
				<MenubarTrigger
					className="focus:bg-light-900 data-[state=open]:bg-light-900 
						dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200
					"
				>
					{mode === "light" ? (
						<Image
							src="/assets/icons/sun.svg"
							width={20}
							height={20}
							alt="Light mode icon"
							className="active-theme"
						/>
					) : (
						<Image
							src="/assets/icons/moon.svg"
							width={20}
							height={20}
							alt="Dark mode icon"
							className="active-theme"
						/>
					)}
				</MenubarTrigger>
				<MenubarContent
					className="background-light900_dark200 absolute right-[-3rem] mt-3 min-w-[120px] rounded py-2
						dark:border-dark-400 dark:bg-dark-300
					"
				>
					{themes.map((theme) => (
						<MenubarItem
							key={theme.value}
							className="cursor-pointer dark:focus:bg-dark-400 flex items-center gap-4 px-2.5 py-2"
							onClick={() => {
								setMode(theme.value);
								if (theme.value !== "system") {
									localStorage.theme = theme.value;
								} else {
									localStorage.removeItem("theme");
								}
							}}
						>
							<Image
								src={theme.icon}
								width={16}
								height={16}
								alt={theme.label}
								className={`${mode === theme.value && "active-theme"
									}`}
							/>
							<p
								className={`body-semibold text-light-500 ${mode === theme.value
										? "text-primary-500"
										: "text-dark100_light900"
									}`}
							>
								{theme.label}
							</p>
						</MenubarItem>
					))}
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	);
};

export default Theme;
