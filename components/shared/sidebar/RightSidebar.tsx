import Image from "next/image";
import Link from "next/link";
import RenderTag from "../RenderTag";

const RightSidebar = () => {
	interface Question {
		_id: string;
		title: string;
	}
	const hotQuestions: Question[] = [
		{
			_id: "1",
			title: "How do i use express as a custom server in NextJS?",
		},
		{
			_id: "2",
			title: "Cascading Deletes in SQLAlchemy",
		},
		{
			_id: "3",
			title: "How to Perfectly Center a Div with tailwindcss?",
		},
		{
			_id: "4",
			title: "Best Practices for data fetching in a NextJs application with Server-Side Rendering (SSR)?",
		},
		{
			_id: "5",
			title: "Redux Tooolkit Not Updating State as Expected",
		},
	];

	const popukarTags = [
		{ _id: "1", name: "Javascript", totalQuestions: 5 },
		{ _id: "2", name: "React", totalQuestions: 3 },
		{ _id: "3", name: "NextJS", totalQuestions: 10 },
		{ _id: "4", name: "Vue", totalQuestions: 2 },
		{ _id: "5", name: "Redux", totalQuestions: 5 },
	];

	return (
		<section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen flex-col  overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden w-[350px]">
			<div>
				<h3 className="h3-bold text-dark200_light900">Top Questions</h3>
				<div className="mt-7 flex w-full flex-col gap-[30px]">
					{hotQuestions.map((question) => (
						<Link
							href={`/questions/${question._id}`}
							key={question._id}
							className="flex items-center gap-7 justify-between cursor-pointer"
						>
							<p className="body-medium text-dark500_light700 ">
								{question.title}
							</p>
							<Image
								src={"/assets/icons/chevron-right.svg"}
								width={20}
								height={20}
								alt={"right arrow"}
								className="invert-colors"
							/>
						</Link>
					))}
				</div>
			</div>
			<div className="mt-16">
				<h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
				<div className="mt-7 flex flex-col gap-4">
					{popukarTags.map((tag) => (
						<RenderTag
							key={tag._id}
							_id={tag._id}
							name={tag.name}
							totalQuestions={tag.totalQuestions}
							showCount
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default RightSidebar;
