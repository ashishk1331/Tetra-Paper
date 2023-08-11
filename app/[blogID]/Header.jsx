import GoBack from "@/components/GoBack";
import Icon from "@/components/icon_set";
import Link from "next/link";

export default function (props) {
	return (
		<>
			<header className="relative h-flex gap-2 flex-wrap py-4 px-2">
				<Icon name="Home" />
				<Link href="/">
					<p>Blog</p>
				</Link>
				<p>/</p>
				<p>{props.slug}</p>
			</header>
			<GoBack href="/"/>
			<h1 className="mt-16">
				{props.pageData.title}
			</h1>
			<b>{props.pageData.Author}</b>
			<p className="lead">{props.pageData.description}</p>
		</>
	);
}
