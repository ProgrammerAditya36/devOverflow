import Image from "next/image";

interface Props {
	imgUrl: string;
	alt: string;
	value: number | string;
	title: string;
	textStyles?: string;
	href?: string;
	isAuthor?: boolean;
}

const Metric = ({
	imgUrl,
	alt,
	value,
	title,
	textStyles,
	href,
	isAuthor,
}: Props) => {
	return (
		<div className="flex-center flex-wrap gap-1">
			<Image
				src={imgUrl}
				alt={alt}
				width={16}
				height={16}
				className={`object-contain ${href ? "rounded-full" : ""}`}
			/>
			<p className={`${textStyles} flex items-center gap-1`}>
				{value}

				{title}
			</p>
		</div>
	);
};

export default Metric;
