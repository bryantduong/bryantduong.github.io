# bryantduong.github.io

A dependency-free static site (plain HTML + one CSS file, no Jekyll) in the style of the
classic single-page academic template used by Huy Ha and Cheng Chi, rebuilt from scratch
with my content. Colors are the Penn palette (Penn Blue `#011f5b` headings, Penn Red
`#990000` links)

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
