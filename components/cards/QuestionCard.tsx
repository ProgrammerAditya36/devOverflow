import Link from "next/link";
import RenderTag from "../shared/RenderTag";
import Metric from "../shared/Metric";

interface Props {
	_id: string;
	author: {
		_id: string;
		name: string;
		picture: string;
	};
	createdAt: Date;
	tags?: {
		_id: string;
		name: string;
	}[];
	title: string;
	upvotes: number;
	views: number;
	answers: Array<object>;
}
const QuestionCard = ({
	_id,
	author,
	createdAt,
	tags,
	title,
	upvotes,
	views,
	answers,
}: Props) => {
	return (
		<div className="card-wrapper rounded-[10px] p-9 sm:px-11 ">
			<div className="flex flex-col-reverse items-start justify-between sm:flex-row">
				<div>
					<span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
						{String(createdAt)}
					</span>
					<Link href={`/questions/${_id}`}>
						<h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
							{title}
						</h3>
					</Link>
				</div>
			</div>
			<div className="mt-3.5 flex flex-wrap gap-2">
				{tags?.map((tag) => (
					<RenderTag key={tag._id} name={tag.name} _id={tag._id} />
				))}
			</div>

			<div className="flex-between mt-6 w-full flex-wrap gap-3">
				<Metric
					imgUrl="/assets/icons/avatar.svg"
					alt="user"
					value={author.name}
					title=" - asked 1 hour ago"
					textStyles="body-medium text-dark400_light700"
				/>
				<Metric
					imgUrl="/assets/icons/like.svg"
					alt="upvotes"
					value={upvotes}
					title=" Votes"
					textStyles="small-medium text-dark400_light800"
				/>
				<Metric
					imgUrl="/assets/icons/message.svg"
					alt="answers"
					value={answers.length}
					title=" Answers"
					textStyles="small-medium text-dark400_light800"
				/>
				<Metric
					imgUrl="/assets/icons/eye.svg"
					alt="views"
					value={views}
					title=" Views"
					textStyles="small-medium text-dark400_light800"
				/>
			</div>
		</div>
	);
};

export default QuestionCard;
