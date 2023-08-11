import { title, headline, text } from "@/blog.config.js";
import Icon from "@/components/icon_set";
import Social from "@/components/IconTray";
import Link from "next/link";

export default function () {
	return (
		<>
			<header className="relative h-flex flex-wrap gap-2 py-4 px-2 my-8">
				<Icon name="Home" />
				<p className="font-medium mr-auto">{title}</p>
				<Social />
			</header>
			<h1>{headline}</h1>
			<p>{text.map((para) => [para, <br />])}</p>
			<hr />
		</>
	);
}
