// Libraries
import { Client } from "@notionhq/client";
import { Parser, usePreParser } from "tetrapack";
import slugify from "slugify";

// Component files
import Header from "./Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export async function generateMetadata(
	{ params: { blogID }, searchParams },
	parent,
) {
	const notion = new Client({
		auth: process.env.NOTION_TOKEN,
	});

	const data = await notion.pages.retrieve({ page_id: blogID });

	let map = {};
	map["id"] = data.id;
	map["created_time"] = data.created_time;
	map["title"] = data.properties.Name.title[0].plain_text;
	map["description"] = data.properties.description.rich_text[0].plain_text;
	map["author"] = data.properties.Author.rich_text[0].plain_text;
	map["tags"] = data.properties.Tags.multi_select.map((tag) => tag.name);

	return {
		title: map.title,
		description: map.description,
		metadataBase: new URL("https://blog-starter-tetrapack.vercel.app/"),
		keywords: map.tags,
		alternates: {
			canonical: "/",
			languages: {
				"en-US": "/en-US",
			},
		},
		openGraph: {
			title: map.title,
			url: 'https://blog-starter-tetrapack.vercel.app/',
    		siteName: 'blog-starter-tetrapack.vercel.app',
			description: map.description,
			type: "article",
			publishedTime: map.created_time,
			authors: [map.author],
		},
		twitter: {
			card: "summary",
			title: map.title,
			description: map.description,
			creator: "@ashishk1331",
		},
	};
}

export default async function Page(props) {
	let { blogID } = props.params;
	let pageData = await getPageData(blogID);
	let blocks = await getBlocks(blogID);
	blocks = await usePreParser(blocks, getBlocks);

	return (
		<>
			<Header
				slug={slugify(pageData.title, { lower: true })}
				pageData={pageData}
			/>

			<Parser blocks={blocks}>
				{() => ({
					blocks: {
						image: (caption, url, key) => (
							<figure key={key}>
								<Image
									width={1040}
									height={1040}
									src={url}
									alt="Image link expired."
									className="object-contain rounded"
								/>
								<figcaption>{caption}</figcaption>
							</figure>
						),
						to_do: (text, checked) => (
							<span className="h-flex gap-2">
								<input
									checked={checked}
									readOnly
									type="checkbox"
									className="form-checkbox rounded text-primary"
								/>
								<p>{text}</p>
							</span>
						),
						callout: function (text, callout_image) {
							<span className="p-4 border border-primary/50 rounded my-8">
								{this.callout_image()}
								<p>{text}</p>
							</span>;
						},
						callout_image: () => (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="fill-primary inline m-4 float-left"
								viewBox="0 0 256 256"
							>
								<path d="M240,128a15.79,15.79,0,0,1-10.5,15l-63.44,23.07L143,229.5a16,16,0,0,1-30,0L89.93,166,26.5,143a16,16,0,0,1,0-30L90,89.93,113,26.5a16,16,0,0,1,30,0L166.07,90,229.5,113A15.79,15.79,0,0,1,240,128Z" />
							</svg>
						),
					},
					wrapper: (text) => (
						<article className="relative flex flex-col items-left gap-2">
							{text}
						</article>
					),
				})}
			</Parser>
			<hr />
			<Footer />
		</>
	);
}

export async function generateStaticParams() {
	const notion = new Client({
		auth: process.env.NOTION_TOKEN,
	});

	let allBlogIDs = [];

	await notion.databases
		.query({
			database_id: process.env.NOTION_DATABASE,
		})
		.then(({ results }) => {
			results.forEach((blog) => {
				allBlogIDs.push({
					blogID: blog.id,
				});
			});
		});

	return allBlogIDs;
}

async function getPageData(pageId) {
	const notion = new Client({
		auth: process.env.NOTION_TOKEN,
	});

	let map = {};

	const data = await notion.pages.retrieve({ page_id: pageId });

	map["id"] = data.id;
	map["created_time"] = data.created_time;
	map["title"] = data.properties.Name.title[0].plain_text;
	map["description"] = data.properties.description.rich_text[0].plain_text;
	map["Author"] = data.properties.Author.rich_text[0].plain_text;
	map["tags"] = data.properties.Tags.multi_select.map((tag) => ({
		name: tag.name,
		color: tag.color,
	}));

	return map;
}

async function getBlocks(pageId) {
	const notion = new Client({
		auth: process.env.NOTION_TOKEN,
	});

	let data = await notion.blocks.children.list({
		block_id: pageId,
		page_size: 50,
	});

	return data.results;
}
