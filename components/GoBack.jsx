import Link from "next/link";
import Icon from "./icon_set";

export default function ({ href, children }) {
	return (
		<Link
			href={href}
			className="text-md h-flex gap-2 no-underline p-2 px-4 rounded border-2 border-primary w-fit"
		>
			<Icon name="ArrowLeft" />
			Go Back
		</Link>
	);
}
