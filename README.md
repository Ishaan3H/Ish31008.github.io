# Ish31008.github.io

Personal site — [ishaanharish.me](https://ishaanharish.me)

Set as a broadsheet newspaper. Six pages, plain static HTML, no build step.

```
index.html        Page One   — The Front Page
experience.html   Page Two   — Experience
awards.html       Page Three — Awards & Honours
research.html     Page Four  — Research & Writing
projects.html     Page Five  — The Project Log
reading.html      Page Six   — The Reading Room
assets/style.css  All styling
assets/paper.js   Hamburger index + dateline
```

The illustrations are hand-written inline SVG, animated with CSS — the candle
flickers, the gears turn, a page turns, a book eases off the shelf. All motion
is switched off under `prefers-reduced-motion`.

To edit a page, open its `.html` file and change the text. To change colours,
edit the custom properties at the top of `assets/style.css`.
