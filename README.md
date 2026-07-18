# bryantduong.github.io (credits to Cheng Chi/Huy Ha's site)

A dependency-free static site (plain HTML + one CSS file, no Jekyll) in the style of the
classic single-page academic template used by Huy Ha and Cheng Chi, rebuilt from scratch
with your content. Colors are the Penn palette (Penn Blue `#011f5b` headings, Penn Red
`#990000` links) — the same move the original made with Columbia blues.

## Structure

```
index.html                          Home: profile + Updates (anchor nav)
blog/index.html                     Blog tab — dated posts + project write-ups
blog/2024/manifesto/index.html      Career journey post    (original URL preserved)
blog/2024/mentorship/index.html     Mentorship post        (original URL preserved)
blog/2023/pokemon/index.html        Pokemon post           (original URL preserved)
blog/2023/nih/index.html            NIH summer research    (merged from old projects page)
blog/2022/amundsen/index.html       Amundsen at Optum      (merged from old projects page)
blog/2020/airflow/index.html        Airflow at Optum       (merged from old projects page)
assets/css/style.css                The one stylesheet (edit colors/layout here)
assets/img/                         All images already bundled from your old repo
.nojekyll                           Tells GitHub Pages to skip the Jekyll build
```

## Before you push — 1 file to add

`assets/cv.pdf` — the CV link on the homepage points here. Your old repo has no CV PDF
(the old /cv/ page was generated from `_data/cv.yml`), so export one and drop it in, or
remove the CV link from `index.html`.

Everything else — profile photo, blog images, project figures — is already included.

## Deploying

```bash
git clone https://github.com/bryantduong/bryantduong.github.io.git
cd bryantduong.github.io
git checkout -b al-folio-backup && git push -u origin al-folio-backup   # keep the old site
git checkout master                                                     # your default branch
git rm -rf . && git clean -fdx                                          # clear old contents
# copy everything from this folder in, add assets/cv.pdf
git add -A && git commit -m "Redesign: single-page academic template + blog"
git push
```

In the repo Settings → Pages, keep "Deploy from a branch" pointed at your default branch,
root folder. The `.nojekyll` file makes Pages serve the files as-is. The site should update
in a minute or two.

## Notes

- **Preserved URLs:** the three dated blog posts keep their exact old paths. The old
  `/consulting/`, `/cv/`, `/news/`, and `/projects/...` pages are gone by design — the
  projects now live at `/blog/projects/<name>/`, and the career-journey post's internal
  link was updated to match.
- **Adding a blog post:** copy a post folder (e.g. `blog/2024/mentorship/`) to
  `blog/<year>/<slug>/`, edit the content, and add a row to the "Posts" list in
  `blog/index.html`.
- **Adding an update:** one `<li>` in the Updates section of `index.html` — there's a
  commented example in place.
- **Video thumbnails / entries:** the stylesheet includes Huy/Cheng-style `.entry` layouts
  with looping-video support if you ever want a publications-style section:
  `<video autoplay loop muted playsinline><source src="..." type="video/mp4"></video>`
  inside `.entry-thumb`.
