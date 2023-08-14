![Banner Image]()

# Blog Template using Tetra Pack

This is a starter template which relies on Tetra-Pack to render pages from notion. It is created using tetrapack, tailwind css, also the tailwind typography plugin and the almighty nextJS. Hail Phosphor Icons for every icon you see here.

Made for the minilists!

## Usage

1. Clone this repository

1. Make changes in `blog.config.js`
	You can change the tag line, description, social contacts and website title.

1. Duplicate the blog [notion template](https://flower-stork-026.notion.site/df07ae189a954ddc893c9dbc313e46ff?v=532d57556bc64d4aa9da958f69d14f0c) and get the id of the page. This key will serve as `NOTION_DATABASE` key that is to be put in the `.env` file.

1. Also, get the `NOTION_TOKEN` from your notion developer dashboard.
	Remember, the token must be connected to your database as well.

1. After you've collected those two keys, create a `.env` file at the root of your directory.
	```bash
	NOTION_TOKEN = <NOTION_TOKEN>
	NOTION_DATABASE = <NOTION_DATABASE>
	```

1. Check all the steps. If done, run the app in dev mode
	```bash
	npm run dev
	```

1. Lastly, if you get the preview correct you can host the blog anywhere you like.

If you don't get it or some things aren't working contact [ashishk](https://twitter.com/AshishK1331)