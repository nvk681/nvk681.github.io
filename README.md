# N.V.K. Chaitanya — Portfolio

Static portfolio hosted on GitHub Pages at https://nvk681.github.io/.

## Editing the site

- `index.html`: page metadata, inline JSON-LD for search indexing, sidebar, and portfolio sections. Section comments and IDs identify each content area.
- `css/styles.css`: the site's styles, grouped by component and section, with responsive rules at the end.
- `js/scripts.js`: section reveal animations and active navigation highlighting. Loaded with `defer` after the HTML is parsed.
- `assets/img/`: profile images and favicon.
- `sitemap.xml` and `robots.txt`: search crawler configuration.
- `docs/`: the content audit and verification reports.

No build step or client-side HTML loading is required. Content remains in the HTML so links and publications are available to search engines. Open `index.html` in a browser to preview, or serve the repository with `python3 -m http.server 8000` and visit http://localhost:8000.

Add content to the relevant section in `index.html`. Use classes in `css/styles.css` for styling, and update the JSON-LD when publication, profile, or media metadata changes.

See [search indexing maintenance](docs/search-indexing.md) for metadata rules and the Search Console steps after publishing.
