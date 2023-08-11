import Icon from "@/components/icon_set";

export default function (props) {
	return (
		<footer className="v-flex gap-1 p-4 mt-28 mb-8 text-center">
			<Icon name="ArrowUp" className="w-12 h-12" />
			Thank you for visiting!
			<br />
			<div>
				Crafted by{" "}
				<a href="https://twitter.com/ashishk1331">ashishk1331</a>
			</div>
			<div>
				using{" "}
				<a href="https://tetra-docs.vercel.app/">Tetra Pack</a>
			</div>
		</footer>
	);
}
