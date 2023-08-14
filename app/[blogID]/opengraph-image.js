import { ImageResponse } from "next/server";
import { Client } from "@notionhq/client";

export const runtime = "edge";

export const alt = "OG image for the blogpost.";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";


export default async function Image({ blogID }) {
    const notion = new Client({
        auth: process.env.NOTION_TOKEN,
    });

    const data = await notion.pages.retrieve({ page_id: blogID });

    let title = data.properties.Name.title[0].plain_text;
    let author = data.properties.Author.rich_text[0].plain_text;

    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#191825",
                    color: "#fff",
                    fontSize: 32,
                    fontWeight: 600,
                    padding: "64px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        width: "100%",
                        borderBottom: "3.6px solid #e384ff",
                    }}
                >
                    <svg width="45" viewBox="0 0 256 256" fill="#e384ff">
                        <path d="M168,32H88A56.06,56.06,0,0,0,32,88v80a56.06,56.06,0,0,0,56,56h48a8.07,8.07,0,0,0,2.53-.41c26.23-8.75,76.31-58.83,85.06-85.06A8.07,8.07,0,0,0,224,136V88A56.06,56.06,0,0,0,168,32ZM136,207.42V176a40,40,0,0,1,40-40h31.42C198.16,157.55,157.55,198.16,136,207.42Z" />
                    </svg>
                    <p>Blog by {author}</p>
                </div>
                <h1>{title}</h1>
            </div>
        ),
        {
            ...size,
        },
    );
}
