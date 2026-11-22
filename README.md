# bryantduong.github.io

@bryantduong's personal site. Built via plain HTML, one stylesheet, and one small script hosted over GH pages.

## Preview the site locally

Serve the repository root over HTTP. The pages use root-relative paths and `localStorage`, so a page opened straight from disk breaks.

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Files

| Path | What it holds |
| --- | --- |
| `index.html` | The home page: profile, updates, and publications |
| `blog/index.html` | The "moved to Substack" notice and the archive of old posts |
| `blog/<year>/<slug>/index.html` | One archived blog post |
| `404.html` | The page GitHub Pages shows for a missing URL |
| `assets/css/style.css` | All styles, including both color themes |
| `assets/js/theme.js` | The dark-mode switch |
| `assets/fonts/` | Source Sans 3 (text) and Source Serif 4 (headings), self-hosted, with the license |
| `assets/img/` | The portrait, the favicon, and the blog images |
| `assets/cv.pdf` | The CV that the home page links to |
| `.nojekyll` | Tells GitHub Pages to skip Jekyll |

## Add an update

Add an `<li>` at the top of `ul.updates` in `index.html`:

```html
<li><time datetime="2026-09">Sep 2026</time> Something happened.</li>
```

## Add a publication

Copy an `li.pub` block in `index.html` into the correct list. "Published" holds journal articles. "Preprints and papers in review" holds the rest. Keep each list newest first.

```html
<li class="pub">
	<a class="pub-title" href="https://doi.org/10.xxxx/xxxxx">Title as published</a>
	<p class="pub-authors">Author A, <b class="me">Duong B</b>, Author C</p>
	<p class="pub-venue"><cite>Journal Name</cite> 1(2):3&ndash;4, 2026</p>
</li>
```

- Link the title to the DOI.
- To mark equal contribution, put `<sup>*</sup>` or `<sup>#</sup>` after the name.
- If a paper has more than 15 authors, show the first 10, then `&hellip;<span class="visually-hidden"> N more authors</span>`, then the last 2.

When a preprint is published, move its block to "Published" and update the link and the venue.

## Blog posts

New writing goes on Substack at https://substack.com/@bryantduong. The posts under `blog/` are an archive: `blog/index.html` and each post show a notice that points to Substack.

To add a post here anyway, copy a post folder, edit the copy without changing its `<head>`, `<header>`, or `<footer>`, and add a `li` at the top of `ul.post-list` in `blog/index.html`. Give each image `width`, `height`, `loading="lazy"`, and `decoding="async"`. To read the size of an image on macOS, run `sips -g pixelWidth -g pixelHeight <file>`.

## Change the colors

`assets/css/style.css` defines every color as a custom property in two blocks. `:root` holds the light theme and `[data-theme="dark"]` holds the dark theme. Change a value there and every page follows. Keep text at a contrast ratio of at least 4.5:1 against the background.

## How the dark-mode switch works

`theme.js` loads without `defer`, so it sets `data-theme` on `<html>` before the first paint. On a first visit the theme follows the OS setting. After a visitor clicks the switch, `localStorage` keeps the choice across pages and visits.

Each page has one `<button class="theme-toggle">` in `header.site-header`, after `nav.site-nav`.

## Make a new page

Copy the `<head>`, the skip link, `<header class="site-header">`, and `<footer class="site-footer">` from an existing page. The header and footer are the same on every page, so a change to one of them must be made in every HTML file. Put `aria-current="page"` on the nav link to the new page, or `aria-current="true"` on **Blog** for a blog post.

`main` is a three-column grid. Its direct children sit in the center column, which is at most 60rem wide. Give a child the class `full-bleed` to stretch its background edge to edge, as the home page hero does.

## Deploy

Push to `master`. GitHub Pages serves the root of that branch.
