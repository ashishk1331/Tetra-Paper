import Icon from "@/components/icon_set";
import { socials } from "@/blog.config.js";

export default function IconTray(props) {
	let elements = [];

	for (let social in socials) {
		elements.push(
			<a
				key={social}
				href={socials[social]}
				className="p-3 hover:bg-fore/25 rounded-full"
			>
				<Icon name={social} />
			</a>,
		);
	}

	return <div className="h-flex">{elements}</div>;
}
