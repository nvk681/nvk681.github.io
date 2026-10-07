# Search indexing maintenance

The portfolio serves its content and JSON-LD directly in `index.html`. No JavaScript is needed to read the portfolio. The canonical URL is `https://nvk681.github.io/`; `robots.txt` allows crawling and advertises the sitemap.

The JSON-LD graph connects one Person to a WebSite and ProfilePage, five ScholarlyArticle records, two published articles, media references, gumo, education, volunteer organizations and roles, and the JITCAI reviewer listing. Section fragments describe parts of one page, not separate indexed pages. The Murray Patterson CV remains a supporting project reference; its inclusion does not assert a personal endorsement.

Keep metadata consistent with visible content. Add only genuine personal identity profiles to `Person.sameAs`; packages and articles have their own records. Update both the visible portfolio and JSON-LD when changing papers, roles, profiles, or references. Do not invent dates, coauthors, organizational URLs, or credentials. This portfolio contains multiple papers, so do not add single-paper `citation_*` tags to the homepage. Dedicated paper pages with verified bibliographic metadata and accessible full text would be a separate improvement for Google Scholar discoverability.

When changing the page, update the homepage's `lastmod` in `sitemap.xml` to the actual content modification date. Do not add fragment URLs or third-party publications to this site's sitemap. No sitemap change was needed for this October 6, 2026 update because its existing date was already correct.

## After publishing

1. Verify ownership of `https://nvk681.github.io/` in [Google Search Console](https://search.google.com/search-console/). Use the verification method Google provides; no verification token is embedded without one supplied by the account owner.
2. Submit `https://nvk681.github.io/sitemap.xml` in the Sitemaps report.
3. Inspect the homepage URL, test the live URL, and request indexing. Check the Page indexing report later for crawl or indexing problems.
4. Test the published page with Google's [Rich Results Test](https://search.google.com/test/rich-results) and the [Schema.org validator](https://validator.schema.org/). Some valid schema types do not produce Google rich results.
5. Link back to this canonical portfolio from professional and academic profiles you control, using your consistent public name.

Metadata helps search engines understand content; it does not guarantee indexing, rankings, rich results, or Google Scholar inclusion. Crawling third-party references and papers is controlled by their respective sites. See Google's [profile markup guidance](https://developers.google.com/search/docs/appearance/structured-data/profile-page) and [developer SEO guidance](https://developers.google.com/search/docs/fundamentals/get-started-developers).

Local validation for this update: JSON-LD syntax and graph references, one canonical Person, five papers, unique HTML IDs, internal destinations, local assets, metadata uniqueness, sitemap XML, crawler configuration, JavaScript syntax, observer fallback/reveal/navigation behavior, reduced-motion handling, and `git diff --check`. No live deployment or search-engine submission was performed.
