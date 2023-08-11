import { format } from "date-fns";
import Link from "next/link";
import Icon from "@/components/icon_set";

export default function (props) {
	return props.blogs.map((data) => <Item key={data.id} {...data} />);
}

function getTagString(tags) {
	let res = "";
	for (let i = 0; i < tags.length; i++) {
		res += tags[i].name;
		if(i < tags.length - 1){
			res += ", ";
		}
	}
	return res;
}

function Item({ id, title, created_time, description, tags }) {
	return (
		<div className="[&:not(:last-child)]:mb-8">
			<Link href={`/${id}`} className="flex items-baseline gap-4">
				<h3 className="cursor-pointer">{title}</h3>
			</Link>
			<div className="h-flex gap-2">
				<small>
					{format(new Date(created_time), "dd MMM yyyy")}
				</small>
				<Icon name="Circle" className="w-2 h-2" />
				<small>
					{getTagString(tags)}
				</small>
			</div>
			<p className="lead">{description}</p>
		</div>
	);
}
