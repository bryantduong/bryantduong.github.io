# bryantduong.github.io — redesigned site

A dependency-free static site (plain HTML, one CSS file, one small JS file — no Jekyll) in
the style of the classic single-page academic template used by Huy Ha and Cheng Chi, rebuilt
from scratch. Light and dark themes, Penn palette.

## Structure

```
index.html                          Home: profile + Updates + Publications
blog/index.html                     Blog tab — one reverse-chronological list
blog/2024/manifesto/index.html      Career journey post    (original URL preserved)
blog/2024/mentorship/index.html     Mentorship post        (original URL preserved)
blog/2023/pokemon/index.html        Pokemon post           (original URL preserved)
blog/2023/nih/index.html            NIH summer research    (was /projects/3_project/)
blog/2022/amundsen/index.html       Amundsen at Optum      (was /projects/2_project/)
blog/2020/airflow/index.html        Airflow at Optum       (was /projects/1_project/)
assets/css/style.css                Both palettes + all layout
assets/js/theme.js                  Theme switch behaviour
assets/cv.pdf                       Your CV (linked from the homepage)
assets/img/                         Images, incl. pub1..6.png teaser placeholders
.nojekyll                           Tells GitHub Pages to skip the Jekyll build
```

Nothing left to add — this is complete and ready to push.

---

## Dark mode

Two pieces: **palettes** in the CSS and **one button** in the nav, wired by `theme.js`.

### The palettes are at the top of `assets/css/style.css`

Every color in the stylesheet is a `var()`, so these two blocks are the only place colors get
defined. Edit here and the whole site follows.

```css
:root {                     /* light (default) */
  --penn-blue: #103a78;     /* headings, name */
  --penn-red: #990000;      /* links */
  --ink: #3d3d3d;           /* body text */
  --bg: #ffffff;
  color-scheme: light;
}

[data-theme="dark"] {       /* Penn Blue and Penn Red are unreadable on a dark
                               page, so they become light tints on navy-black */
  --penn-blue: #a9c4f5;
  --penn-red: #e58a8a;
  --ink: #d3d8e2;
  --bg: #0e1524;
  color-scheme: dark;
}
```

Headings use `#103a78` rather than true Penn Blue `#011f5b`. It's the same navy — 216° hue
against Penn Blue's 220° — lifted about nine points in lightness (27% vs 18%) so it reads as
deep blue instead of black, without drifting into royal blue. Contrast on white is 11:1.

If you want to nudge it, these all stay in the Penn navy family; pick by taste and change the
one variable:

| Hex | Contrast on white | Reads as |
| --- | --- | --- |
| `#011f5b` | 15.6:1 | true Penn Blue — near-black on screen |
| `#0c2f6b` | 12.9:1 | barely lifted, still very dark navy |
| `#103a78` | 11.1:1 | **current** — clearly navy blue |
| `#14417f` | 10.0:1 | a touch lighter navy |
| `#1d4f9c` | 7.9:1 | royal blue — too light for headings, used for subheads |

The theme is a `data-theme` attribute on `<html>`, so any rule can be theme-specific:

```css
[data-theme="dark"] .some-thing { border-color: transparent; }
```

### One toggle, and it lives in the markup

Each page has exactly **one** `<button class="theme-toggle">` as the last item inside
`nav.site-nav`, with the sun and moon SVGs and the knob inline. To add a page, copy the whole
`<nav>` block from an existing one and move `class="current"` to the right link.

```html
<nav class="site-nav" aria-label="Main">
  <a href="/#profile-intro">Home</a>
  <a href="/#updates">Updates</a>
  <a href="/#publications">Publications</a>
  <a href="/blog/" class="current">Blog</a>
  <button class="theme-toggle" type="button" role="switch" aria-checked="false" aria-label="Dark mode">
    <svg ...>sun</svg>
    <svg ...>moon</svg>
    <span class="tt-knob" aria-hidden="true"></span>
  </button>
</nav>
```

The `<head>` needs exactly these two lines — one stylesheet, one **blocking** script (no
`defer`, so the theme is set before the first paint and the page never flashes white):

```html
<link rel="stylesheet" href="/assets/css/style.css" />
<script src="/assets/js/theme.js"></script>
```

**Don't add a second script tag, a `defer` copy, or a separate inline theme snippet.** That is
what produced two sliders plus an unstyled grey button earlier: the script ran twice and
injected two toggles, alongside a hand-written third one that had no CSS. `theme.js` now
guards against double-execution and deletes any duplicate or legacy toggle it finds, so a
stale page repairs itself, but one tag is still the rule.

### Behaviour

- First visit follows the visitor's OS setting; once they touch the switch, the choice lives in
  `localStorage` and wins on later visits and across pages.
- If the OS flips later, the page follows — unless the visitor made an explicit choice here.
- `prefers-reduced-motion: reduce` disables the knob slide and color fade.
- With JavaScript off the site stays light and the button does nothing.
- Mobile: no hamburger, nothing hidden. Under 760px the nav font and gaps tighten so four links
  plus the switch share one row, and an invisible `::after` grows the pill's tap target to ~44px.
  The rules are in the `@media (max-width: 760px)` block at the bottom of `style.css`.

---

## Publications

Six entries on the homepage, taken from `assets/cv.pdf`, in the Huy Ha layout: teaser figure
left; title, authors, venue right. Grouped **Published** (melPDomiX in Cell Reports, mutant p53
in Genes & Development, the eye-disease AI paper in JAMA Network Open) then **Preprints and
papers in review** (conjunctival melanoma, taxonomy-free fecal microbiome, ERVmancer), then the
three **posters**. Your name is bolded in every author list; `*` and `#` are carried over from
the CV, with the equal-contribution note above the list.

Two things to finish:

1. **Thumbnails** are placeholders at `assets/img/pub1.png` … `pub6.png`. Replace each with the
   paper's real teaser figure at roughly 600×338 (any 16:9 crop works). For a looping clip
   instead, swap the `<img>` for:
   ```html
   <video autoplay loop muted playsinline>
     <source src="/assets/img/teaser.mp4" type="video/mp4" />
   </video>
   ```
2. **Links.** Only the JAMA paper had a DOI in the CV, so it's the only one with a `paper` link.
   Titles elsewhere are plain `<span class="entry-title">` — I didn't want to guess at DOIs. To
   link one, swap the span for an anchor and keep the class:
   ```html
   <a class="entry-title" href="https://doi.org/10.xxxx/xxxxx">melPDomiX: ...</a>
   ```

The long author lists on melPDomiX and the JAMA paper are truncated with `&hellip;` before the
senior authors — expand them from the CV if you'd rather show everyone.

---

## Deploying

```bash
git clone https://github.com/bryantduong/bryantduong.github.io.git
cd bryantduong.github.io
git checkout -b al-folio-backup && git push -u origin al-folio-backup   # keep the old site
git checkout master                                                     # your default branch
git rm -rf . && git clean -fdx                                          # clear old contents
# copy everything from this folder in
git add -A && git commit -m "Redesign: single-page academic template, blog, dark mode"
git push
```

In Settings → Pages, keep "Deploy from a branch" pointed at your default branch, root folder.
The `.nojekyll` file makes Pages serve the files as-is.

Test locally with a server rather than opening the file directly — the root-relative paths and
`localStorage` both need HTTP:

```bash
python3 -m http.server 8000
```

## Other notes

- **Preserved URLs:** the three dated blog posts keep their exact old paths. The old
  `/consulting/`, `/cv/`, `/news/` and `/projects/...` pages are gone by design — projects now
  live at `/blog/<year>/<name>/`, and the CV link points at `assets/cv.pdf`.
- **Adding a blog post:** copy a post folder (e.g. `blog/2024/mentorship/`) to
  `blog/<year>/<slug>/`, edit it, and add a row to the list in `blog/index.html`.
- **Adding an update:** one `<li>` in the Updates section of `index.html` — a commented example
  is in place.
