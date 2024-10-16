"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
interface Props {
	route: string;
	iconPosition: string;
	imgSrc: string;
	placeholder: string;
	otherClasses?: string;
}
const LocalSearch = ({
	route,
	iconPosition,
	imgSrc,
	placeholder,
	otherClasses,
}: Props) => {
	return (
		<div
			className={`background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
		>
			{iconPosition === "left" && (
				<Image
					src={imgSrc}
					alt="Search Icon"
					width={24}
					height={24}
					className="cursor-pointer"
				/>
			)}
			<Input
				type="text"
				placeholder={placeholder}
				value=""
				onChange={() => { }}
				className="paragraph-regular no-focus placeholder bg-transparent text-dark400_light700 border-none shadow-none outline-none"
			/>

			{iconPosition === "right" && (
				<Image
					src={imgSrc}
					alt="Search Icon"
					width={24}
					height={24}
					className="cursor-pointer"
				/>
			)}
		</div>
	);
};

export default LocalSearch;
